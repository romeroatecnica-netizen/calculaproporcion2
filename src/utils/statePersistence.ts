import { AppState } from '../types/calculator';
import {
  calculateDistribution,
  calculatePercentages,
  calculateRuleOfThree,
  formatMoney,
  formatNumber,
} from './math';

const STORAGE_KEY = 'calculaproporcion_state_v1';

export const DEFAULT_APP_STATE: AppState = {
  activeModule: 'percentages',
  numberFormat: 'es',
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
    concept: 'Gastos compartidos',
    mode: 'percentage',
    weightUnit: 'días',
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
    unitA: 'comensales',
    unitB: 'gramos',
    activeExampleId: 'receta',
  },
};

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

function sanitizeState(parsed: unknown): AppState | null {
  if (!parsed || typeof parsed !== 'object') return null;
  const obj = parsed as Partial<AppState>;

  const merged: AppState = {
    activeModule: isValidModule(obj.activeModule) ? obj.activeModule : DEFAULT_APP_STATE.activeModule,
    numberFormat: obj.numberFormat === 'us' ? 'us' : 'es',
    currency: obj.currency === 'USD' || obj.currency === 'NONE' ? obj.currency : 'EUR',
    percentages: {
      subMode:
        obj.percentages?.subMode &&
        ['inverse-discount', 'tax-remove', 'tax-add', 'part-of-whole', 'pct-change'].includes(
          obj.percentages.subMode
        )
          ? obj.percentages.subMode
          : DEFAULT_APP_STATE.percentages.subMode,
      amount: typeof obj.percentages?.amount === 'string' ? obj.percentages.amount : DEFAULT_APP_STATE.percentages.amount,
      rate: typeof obj.percentages?.rate === 'string' ? obj.percentages.rate : DEFAULT_APP_STATE.percentages.rate,
      valueA: typeof obj.percentages?.valueA === 'string' ? obj.percentages.valueA : DEFAULT_APP_STATE.percentages.valueA,
      valueB: typeof obj.percentages?.valueB === 'string' ? obj.percentages.valueB : DEFAULT_APP_STATE.percentages.valueB,
      activePresetId:
        typeof obj.percentages?.activePresetId === 'string' || obj.percentages?.activePresetId === null
          ? obj.percentages.activePresetId
          : null,
    },
    distribution: {
      totalAmount:
        typeof obj.distribution?.totalAmount === 'string'
          ? obj.distribution.totalAmount
          : DEFAULT_APP_STATE.distribution.totalAmount,
      concept:
        typeof obj.distribution?.concept === 'string'
          ? obj.distribution.concept
          : DEFAULT_APP_STATE.distribution.concept,
      mode: obj.distribution?.mode === 'weight' ? 'weight' : 'percentage',
      weightUnit:
        typeof obj.distribution?.weightUnit === 'string'
          ? obj.distribution.weightUnit
          : DEFAULT_APP_STATE.distribution.weightUnit,
      participants:
        Array.isArray(obj.distribution?.participants) && obj.distribution.participants.length > 0
          ? obj.distribution.participants.slice(0, 40).map((p, idx) => ({
              id: typeof p?.id === 'string' ? p.id : `p-${idx + 1}`,
              name: typeof p?.name === 'string' ? p.name : `Parte ${idx + 1}`,
              value: typeof p?.value === 'string' ? p.value : '0',
            }))
          : DEFAULT_APP_STATE.distribution.participants,
    },
    ruleOfThree: {
      type: obj.ruleOfThree?.type === 'inverse' ? 'inverse' : 'direct',
      a: typeof obj.ruleOfThree?.a === 'string' ? obj.ruleOfThree.a : DEFAULT_APP_STATE.ruleOfThree.a,
      b: typeof obj.ruleOfThree?.b === 'string' ? obj.ruleOfThree.b : DEFAULT_APP_STATE.ruleOfThree.b,
      c: typeof obj.ruleOfThree?.c === 'string' ? obj.ruleOfThree.c : DEFAULT_APP_STATE.ruleOfThree.c,
      unitA:
        typeof obj.ruleOfThree?.unitA === 'string' ? obj.ruleOfThree.unitA : DEFAULT_APP_STATE.ruleOfThree.unitA,
      unitB:
        typeof obj.ruleOfThree?.unitB === 'string' ? obj.ruleOfThree.unitB : DEFAULT_APP_STATE.ruleOfThree.unitB,
      activeExampleId:
        typeof obj.ruleOfThree?.activeExampleId === 'string' || obj.ruleOfThree?.activeExampleId === null
          ? obj.ruleOfThree.activeExampleId
          : null,
    },
  };

  return merged;
}

export function loadInitialState(): AppState {
  try {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('c');
    if (encoded) {
      const jsonStr = decodeBase64Url(encoded);
      const parsed = JSON.parse(jsonStr);
      const clean = sanitizeState(parsed);
      if (clean) return clean;
    }
  } catch {
    // Fallback to localStorage if URL state is malformed
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const clean = sanitizeState(parsed);
      if (clean) return clean;
    }
  } catch {
    // Ignore storage errors
  }

  return DEFAULT_APP_STATE;
}

export function saveStateToStorage(state: AppState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore quota or private mode errors
  }
}

export function buildShareUrl(state: AppState): string {
  const encoded = encodeBase64Url(JSON.stringify(state));
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.set('c', encoded);
  return url.toString();
}

export function buildWhatsAppSummary(state: AppState): string {
  const { activeModule, numberFormat, currency } = state;

  if (activeModule === 'percentages') {
    const res = calculatePercentages(state.percentages, numberFormat, currency);
    if (!res.valid) return 'CalculaProporcion — Cálculo pendiente de completar.';
    const lines = [
      `*CalculaProporcion · ${res.primaryLabel}*`,
      `Resultado: *${res.primaryValue}*`,
      ...res.secondaryMetrics.map((m) => `• ${m.label}: ${m.value}`),
      `Fórmula: ${res.formulaText}`,
      res.verificationText,
    ];
    return lines.join('\n');
  }

  if (activeModule === 'distribution') {
    const res = calculateDistribution(state.distribution);
    if (!res.valid) return 'CalculaProporcion — Reparto pendiente de completar.';
    const concept = state.distribution.concept.trim() || 'Reparto proporcional';
    const unitLabel = state.distribution.mode === 'weight' ? state.distribution.weightUnit || 'partes' : '%';
    const lines = [
      `*${concept}*`,
      `Total a repartir: *${formatMoney(res.totalAmount, numberFormat, currency)}*`,
      '',
      ...res.rows.map((r) => {
        const shareDetail =
          state.distribution.mode === 'weight'
            ? `${formatNumber(r.inputValue, numberFormat, 2, true)} ${unitLabel} (${formatNumber(r.realPct, numberFormat, 2, true)} %)`
            : `${formatNumber(r.realPct, numberFormat, 2, true)} %`;
        return `• ${r.name}: *${formatMoney(r.roundedAmount, numberFormat, currency)}* (${shareDetail})`;
      }),
      '',
      `Total asignado: ${formatMoney(res.totalRoundedSum, numberFormat, currency)}`,
    ];
    return lines.join('\n');
  }

  const res = calculateRuleOfThree(state.ruleOfThree, numberFormat);
  if (!res.valid) return 'CalculaProporcion — Regla de tres pendiente de completar.';
  const tipo = state.ruleOfThree.type === 'direct' ? 'Regla de Tres Directa' : 'Regla de Tres Inversa';
  const unitA = state.ruleOfThree.unitA.trim() || 'unidades A';
  const unitB = state.ruleOfThree.unitB.trim() || 'unidades B';
  return [
    `*CalculaProporcion · ${tipo}*`,
    `Si ${state.ruleOfThree.a} ${unitA} → ${state.ruleOfThree.b} ${unitB}`,
    `Para ${state.ruleOfThree.c} ${unitA} → *${res.formattedX} ${unitB}*`,
    `Fórmula: ${res.formulaText}`,
    res.verificationText,
  ].join('\n');
}
