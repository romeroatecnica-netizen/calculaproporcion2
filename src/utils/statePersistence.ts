import { CANONICAL_ORIGIN, DEFAULT_LANGUAGE, isSupportedLang, SupportedLang } from '../config/seo';
import { getTranslations } from '../i18n';
import { AppState } from '../types/calculator';
import {
  calculateDistribution,
  calculatePercentages,
  calculateRuleOfThree,
  formatMoney,
  formatNumber,
} from './math';

const STORAGE_KEY = 'calculaproporcion_state_v2';

export function getDefaultState(lang: SupportedLang = DEFAULT_LANGUAGE): AppState {
  const t = getTranslations(lang);
  return {
    lang,
    activeModule: 'percentages',
    numberFormat: lang === 'en' ? 'us' : 'es',
    currency: 'EUR',
    percentages: {
      subMode: 'inverse-discount',
      amount: '80',
      rate: '20',
      valueA: '35',
      valueB: '140',
      activePresetId: 'dto-20',
    },
    distribution: {
      totalAmount: '1200',
      concept: t.distributionUi.conceptPlaceholder.replace(/^(e\.g\.|Ej\.|Ex\.|z\. B\.)\s*/i, ''),
      mode: 'percentage',
      weightUnit: t.distributionUi.weightUnits[0],
      participants: [
        { id: 'p-1', name: 'Ana', value: '50' },
        { id: 'p-2', name: 'Carlos', value: '30' },
        { id: 'p-3', name: 'Lucía', value: '20' },
      ],
    },
    ruleOfThree: {
      type: 'direct',
      a: '4',
      b: '300',
      c: '7',
      unitA: t.ruleOfThreeUi.examples.recipe.unitA,
      unitB: t.ruleOfThreeUi.examples.recipe.unitB,
      activeExampleId: 'receta',
    },
  };
}

export const DEFAULT_APP_STATE: AppState = getDefaultState(DEFAULT_LANGUAGE);

function encodeBase64Url(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeBase64Url(base64url: string): string {
  const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  const pad = base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4));
  const binary = atob(base64 + pad);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

function isValidModule(val: unknown): val is AppState['activeModule'] {
  return val === 'percentages' || val === 'distribution' || val === 'rule-of-three';
}

function sanitizeState(parsed: unknown, fallbackLang: SupportedLang): AppState | null {
  if (!parsed || typeof parsed !== 'object') return null;
  const obj = parsed as Partial<AppState>;
  const resolvedLang = isSupportedLang(obj.lang) ? obj.lang : fallbackLang;
  const fallback = getDefaultState(resolvedLang);

  return {
    lang: resolvedLang,
    activeModule: isValidModule(obj.activeModule) ? obj.activeModule : fallback.activeModule,
    numberFormat: obj.numberFormat === 'us' || obj.numberFormat === 'es' ? obj.numberFormat : fallback.numberFormat,
    currency: obj.currency === 'USD' || obj.currency === 'NONE' ? obj.currency : 'EUR',
    percentages: {
      subMode:
        obj.percentages?.subMode &&
        ['inverse-discount', 'tax-remove', 'tax-add', 'part-of-whole', 'pct-change'].includes(
          obj.percentages.subMode
        )
          ? obj.percentages.subMode
          : fallback.percentages.subMode,
      amount: typeof obj.percentages?.amount === 'string' ? obj.percentages.amount : fallback.percentages.amount,
      rate: typeof obj.percentages?.rate === 'string' ? obj.percentages.rate : fallback.percentages.rate,
      valueA: typeof obj.percentages?.valueA === 'string' ? obj.percentages.valueA : fallback.percentages.valueA,
      valueB: typeof obj.percentages?.valueB === 'string' ? obj.percentages.valueB : fallback.percentages.valueB,
      activePresetId:
        typeof obj.percentages?.activePresetId === 'string' || obj.percentages?.activePresetId === null
          ? obj.percentages.activePresetId
          : null,
    },
    distribution: {
      totalAmount:
        typeof obj.distribution?.totalAmount === 'string'
          ? obj.distribution.totalAmount
          : fallback.distribution.totalAmount,
      concept:
        typeof obj.distribution?.concept === 'string'
          ? obj.distribution.concept
          : fallback.distribution.concept,
      mode: obj.distribution?.mode === 'weight' ? 'weight' : 'percentage',
      weightUnit:
        typeof obj.distribution?.weightUnit === 'string'
          ? obj.distribution.weightUnit
          : fallback.distribution.weightUnit,
      participants:
        Array.isArray(obj.distribution?.participants) && obj.distribution.participants.length > 0
          ? obj.distribution.participants.slice(0, 40).map((p, idx) => ({
              id: typeof p?.id === 'string' ? p.id : `p-${idx + 1}`,
              name: typeof p?.name === 'string' ? p.name : `${idx + 1}`,
              value: typeof p?.value === 'string' ? p.value : '0',
            }))
          : fallback.distribution.participants,
    },
    ruleOfThree: {
      type: obj.ruleOfThree?.type === 'inverse' ? 'inverse' : 'direct',
      a: typeof obj.ruleOfThree?.a === 'string' ? obj.ruleOfThree.a : fallback.ruleOfThree.a,
      b: typeof obj.ruleOfThree?.b === 'string' ? obj.ruleOfThree.b : fallback.ruleOfThree.b,
      c: typeof obj.ruleOfThree?.c === 'string' ? obj.ruleOfThree.c : fallback.ruleOfThree.c,
      unitA:
        typeof obj.ruleOfThree?.unitA === 'string' ? obj.ruleOfThree.unitA : fallback.ruleOfThree.unitA,
      unitB:
        typeof obj.ruleOfThree?.unitB === 'string' ? obj.ruleOfThree.unitB : fallback.ruleOfThree.unitB,
      activeExampleId:
        typeof obj.ruleOfThree?.activeExampleId === 'string' || obj.ruleOfThree?.activeExampleId === null
          ? obj.ruleOfThree.activeExampleId
          : null,
    },
  };
}

export function loadInitialState(): AppState {
  const params = new URLSearchParams(window.location.search);
  const urlLangParam = params.get('lang');
  const urlLang = isSupportedLang(urlLangParam) ? urlLangParam : DEFAULT_LANGUAGE;

  try {
    const encoded = params.get('c');
    if (encoded) {
      const jsonStr = decodeBase64Url(encoded);
      const parsed = JSON.parse(jsonStr);
      const clean = sanitizeState(parsed, urlLang);
      if (clean) {
        // Explicit ?lang=xx in URL always wins over encoded lang
        return isSupportedLang(urlLangParam) ? { ...clean, lang: urlLangParam } : clean;
      }
    }
  } catch {
    // Fallback below
  }

  // If ?lang=xx is explicitly present in URL without ?c=, start cleanly in that language
  if (isSupportedLang(urlLangParam)) {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const clean = sanitizeState(parsed, urlLangParam);
        if (clean) {
          return { ...clean, lang: urlLangParam };
        }
      }
    } catch {
      // Ignore
    }
    return getDefaultState(urlLangParam);
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const clean = sanitizeState(parsed, DEFAULT_LANGUAGE);
      if (clean) return clean;
    }
  } catch {
    // Ignore storage errors
  }

  return getDefaultState(DEFAULT_LANGUAGE);
}

export function saveStateToStorage(state: AppState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore quota errors
  }
}

/**
 * Always constructs share URLs on the official CANONICAL_ORIGIN.
 * Default language ('en') keeps clean root without ?lang=en.
 */
export function buildShareUrl(state: AppState): string {
  const encoded = encodeBase64Url(JSON.stringify(state));
  const url = new URL(`${CANONICAL_ORIGIN}/`);
  if (state.lang !== DEFAULT_LANGUAGE) {
    url.searchParams.set('lang', state.lang);
  }
  url.searchParams.set('c', encoded);
  return url.toString();
}

export function buildRelativeHistoryUrl(state: AppState, includeCalcParam: boolean): string {
  const params = new URLSearchParams();
  if (state.lang !== DEFAULT_LANGUAGE) {
    params.set('lang', state.lang);
  }
  if (includeCalcParam) {
    params.set('c', encodeBase64Url(JSON.stringify(state)));
  }
  const query = params.toString();
  return query ? `/?${query}` : '/';
}

export function buildWhatsAppSummary(state: AppState): string {
  const { activeModule, numberFormat, currency, lang } = state;
  const t = getTranslations(lang);
  const wa = t.whatsapp;

  if (activeModule === 'percentages') {
    const res = calculatePercentages(state.percentages, numberFormat, currency, t);
    if (!res.valid) return wa.pendingPct;
    const lines = [
      `*CalculaProporcion · ${res.primaryLabel}*`,
      `${wa.resultWord}: *${res.primaryValue}*`,
      ...res.secondaryMetrics.map((m) => `• ${m.label}: ${m.value}`),
      `${wa.formulaWord}: ${res.formulaText}`,
      res.verificationText,
    ];
    return lines.join('\n');
  }

  if (activeModule === 'distribution') {
    const res = calculateDistribution(state.distribution, t);
    if (!res.valid) return wa.pendingDist;
    const concept = state.distribution.concept.trim() || t.distributionUi.defaultConcept;
    const unitLabel =
      state.distribution.mode === 'weight'
        ? state.distribution.weightUnit || t.distributionUi.defaultUnitLabel
        : '%';
    const lines = [
      `*${concept}*`,
      `${wa.totalToSplit}: *${formatMoney(res.totalAmount, numberFormat, currency)}*`,
      '',
      ...res.rows.map((r) => {
        const shareDetail =
          state.distribution.mode === 'weight'
            ? `${formatNumber(r.inputValue, numberFormat, 2, true)} ${unitLabel} (${formatNumber(r.realPct, numberFormat, 2, true)} %)`
            : `${formatNumber(r.realPct, numberFormat, 2, true)} %`;
        return `• ${r.name}: *${formatMoney(r.roundedAmount, numberFormat, currency)}* (${shareDetail})`;
      }),
      '',
      `${wa.totalAllocated}: ${formatMoney(res.totalRoundedSum, numberFormat, currency)}`,
    ];
    return lines.join('\n');
  }

  const res = calculateRuleOfThree(state.ruleOfThree, numberFormat, t);
  if (!res.valid) return wa.pendingRule;
  const tipo = state.ruleOfThree.type === 'direct' ? wa.directTitle : wa.inverseTitle;
  const unitA = state.ruleOfThree.unitA.trim() || t.ruleOfThreeUi.defaultUnitA;
  const unitB = state.ruleOfThree.unitB.trim() || t.ruleOfThreeUi.defaultUnitB;
  return [
    `*CalculaProporcion · ${tipo}*`,
    `${wa.ifWord} ${state.ruleOfThree.a} ${unitA} → ${state.ruleOfThree.b} ${unitB}`,
    `${wa.forWord} ${state.ruleOfThree.c} ${unitA} → *${res.formattedX} ${unitB}*`,
    `${wa.formulaWord}: ${res.formulaText}`,
    res.verificationText,
  ].join('\n');
}
