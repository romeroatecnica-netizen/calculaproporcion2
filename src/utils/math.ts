import { TranslationDictionary } from '../i18n';
import {
  CurrencyMode,
  DistributionState,
  NumberFormatMode,
  PercentagesState,
  RuleOfThreeState,
} from '../types/calculator';

export function parseInputNumber(raw: string): number | null {
  if (!raw) return null;
  const cleaned = raw.trim().replace(/[€$\s]/g, '');
  if (!cleaned || cleaned === '-' || cleaned === '.' || cleaned === ',') return null;

  const hasDot = cleaned.includes('.');
  const hasComma = cleaned.includes(',');

  let normalized = cleaned;

  if (hasDot && hasComma) {
    const lastDot = cleaned.lastIndexOf('.');
    const lastComma = cleaned.lastIndexOf(',');
    if (lastComma > lastDot) {
      normalized = cleaned.replace(/\./g, '').replace(',', '.');
    } else {
      normalized = cleaned.replace(/,/g, '');
    }
  } else if (hasComma) {
    const commaCount = (cleaned.match(/,/g) || []).length;
    if (commaCount > 1) {
      normalized = cleaned.replace(/,/g, '');
    } else {
      normalized = cleaned.replace(',', '.');
    }
  } else if (hasDot) {
    const dotCount = (cleaned.match(/\./g) || []).length;
    if (dotCount > 1) {
      normalized = cleaned.replace(/\./g, '');
    }
  }

  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
}

export function formatNumber(
  value: number,
  format: NumberFormatMode,
  decimals = 2,
  trimTrailingZeros = false
): string {
  if (!Number.isFinite(value)) return '—';
  const fixed = Math.abs(value) < 1e-12 ? 0 : value;
  const locale = format === 'es' ? 'es-ES' : 'en-US';
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: trimTrailingZeros ? 0 : decimals,
    maximumFractionDigits: decimals,
    useGrouping: true,
  }).format(fixed);
}

export function formatMoney(
  value: number,
  format: NumberFormatMode,
  currency: CurrencyMode,
  decimals = 2
): string {
  const numStr = formatNumber(value, format, decimals, false);
  if (numStr === '—') return '—';
  if (currency === 'EUR') return `${numStr} €`;
  if (currency === 'USD') return format === 'es' ? `${numStr} $` : `$${numStr}`;
  return numStr;
}

export function getCurrencySymbol(currency: CurrencyMode): string {
  if (currency === 'EUR') return '€';
  if (currency === 'USD') return '$';
  return '';
}

export interface PercentageResult {
  valid: boolean;
  error?: string;
  primaryLabel: string;
  primaryValue: string;
  secondaryMetrics: Array<{ label: string; value: string; tone?: 'default' | 'teal' | 'amber' }>;
  formulaText: string;
  steps: string[];
  verificationText: string;
  commonMistakeNote?: {
    wrongValue: string;
    difference: string;
    explanation: string;
  };
}

export function calculatePercentages(
  state: PercentagesState,
  format: NumberFormatMode,
  currency: CurrencyMode,
  t: TranslationDictionary
): PercentageResult {
  const { subMode, amount, rate, valueA, valueB } = state;
  const m = t.percentagesMath;

  if (subMode === 'inverse-discount') {
    const finalPrice = parseInputNumber(amount);
    const discountPct = parseInputNumber(rate);
    const d = m.inverseDiscount;

    if (finalPrice === null || discountPct === null) {
      return {
        valid: false,
        error: d.missingError,
        primaryLabel: d.primaryLabel,
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: d.formulaBase,
        steps: [],
        verificationText: '',
      };
    }

    if (finalPrice < 0) {
      return {
        valid: false,
        error: d.negativePriceError,
        primaryLabel: d.primaryLabel,
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: d.formulaBase,
        steps: [],
        verificationText: '',
      };
    }

    if (discountPct < 0 || discountPct >= 100) {
      return {
        valid: false,
        error: discountPct >= 100 ? d.over100Error : d.negativePctError,
        primaryLabel: d.primaryLabel,
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: d.formulaBase,
        steps: [],
        verificationText: '',
      };
    }

    const factor = 1 - discountPct / 100;
    const originalPrice = finalPrice / factor;
    const savings = originalPrice - finalPrice;
    const paidPct = 100 - discountPct;

    const wrongOriginal = finalPrice * (1 + discountPct / 100);
    const mistakeDiff = originalPrice - wrongOriginal;

    const discountStr = formatNumber(discountPct, format, 2, true);
    const paidPctStr = formatNumber(paidPct, format, 2, true);
    const factorStr = formatNumber(factor, format, 4, true);
    const finalMoneyStr = formatMoney(finalPrice, format, currency, 2);
    const originalMoneyStr = formatMoney(originalPrice, format, currency, 2);
    const savingsMoneyStr = formatMoney(savings, format, currency, 2);
    const wrongMoneyStr = formatMoney(wrongOriginal, format, currency, 2);
    const diffMoneyStr = formatMoney(Math.abs(mistakeDiff), format, currency, 2);

    return {
      valid: true,
      primaryLabel: d.primaryLabel,
      primaryValue: originalMoneyStr,
      secondaryMetrics: [
        { label: d.realSavings, value: savingsMoneyStr, tone: 'teal' },
        { label: d.paidPctOfTotal, value: `${paidPctStr} %` },
        { label: d.divisorFactor, value: factorStr },
      ],
      formulaText: `${d.formulaLabel} = ${finalMoneyStr} ÷ (1 − ${discountStr} / 100)`,
      steps: [
        d.step1(discountStr, paidPctStr),
        d.step2(discountStr, factorStr),
        d.step3(formatNumber(finalPrice, format, 2, true), factorStr, originalMoneyStr),
        d.step4(originalMoneyStr, finalMoneyStr, savingsMoneyStr),
      ],
      verificationText: d.verify(
        originalMoneyStr,
        discountStr,
        savingsMoneyStr,
        formatMoney(originalPrice * factor, format, currency, 2)
      ),
      commonMistakeNote:
        discountPct > 0
          ? {
              wrongValue: wrongMoneyStr,
              difference: diffMoneyStr,
              explanation: d.mistakeExplain(
                discountStr,
                finalMoneyStr,
                formatNumber(1 + discountPct / 100, format, 2, true),
                wrongMoneyStr,
                diffMoneyStr
              ),
            }
          : undefined,
    };
  }

  if (subMode === 'tax-remove') {
    const totalWithTax = parseInputNumber(amount);
    const taxPct = parseInputNumber(rate);
    const tr = m.taxRemove;

    if (totalWithTax === null || taxPct === null) {
      return {
        valid: false,
        error: tr.missingError,
        primaryLabel: tr.primaryLabel,
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: tr.formulaBase,
        steps: [],
        verificationText: '',
      };
    }

    if (taxPct <= -100) {
      return {
        valid: false,
        error: tr.invalidRateError,
        primaryLabel: tr.primaryLabel,
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: tr.formulaBase,
        steps: [],
        verificationText: '',
      };
    }

    const divisor = 1 + taxPct / 100;
    const base = totalWithTax / divisor;
    const taxAmount = totalWithTax - base;
    const wrongSubtraction = totalWithTax * (1 - taxPct / 100);

    const pctStr = formatNumber(taxPct, format, 2, true);
    const totalPctStr = formatNumber(100 + taxPct, format, 2, true);
    const divisorStr = formatNumber(divisor, format, 4, true);
    const totalMoneyStr = formatMoney(totalWithTax, format, currency, 2);
    const baseMoneyStr = formatMoney(base, format, currency, 2);
    const taxMoneyStr = formatMoney(taxAmount, format, currency, 2);
    const wrongMoneyStr = formatMoney(wrongSubtraction, format, currency, 2);
    const diffMoneyStr = formatMoney(Math.abs(base - wrongSubtraction), format, currency, 2);

    return {
      valid: true,
      primaryLabel: tr.primaryLabel,
      primaryValue: baseMoneyStr,
      secondaryMetrics: [
        { label: tr.taxAmountLabel(pctStr), value: taxMoneyStr, tone: 'teal' },
        { label: tr.totalWithTaxLabel, value: totalMoneyStr },
        { label: tr.divisorLabel, value: divisorStr },
      ],
      formulaText: `${tr.formulaLabel} = ${totalMoneyStr} ÷ (1 + ${pctStr} / 100)`,
      steps: [
        tr.step1(pctStr, totalPctStr),
        tr.step2(pctStr, divisorStr),
        tr.step3(divisorStr, formatNumber(totalWithTax, format, 2, true), baseMoneyStr),
        tr.step4(totalMoneyStr, baseMoneyStr, taxMoneyStr),
      ],
      verificationText: tr.verify(
        baseMoneyStr,
        pctStr,
        formatMoney(base * (taxPct / 100), format, currency, 2),
        formatMoney(base * divisor, format, currency, 2)
      ),
      commonMistakeNote:
        taxPct > 0
          ? {
              wrongValue: wrongMoneyStr,
              difference: diffMoneyStr,
              explanation: tr.mistakeExplain(pctStr, wrongMoneyStr, diffMoneyStr),
            }
          : undefined,
    };
  }

  if (subMode === 'tax-add') {
    const base = parseInputNumber(amount);
    const taxPct = parseInputNumber(rate);
    const ta = m.taxAdd;

    if (base === null || taxPct === null) {
      return {
        valid: false,
        error: ta.missingError,
        primaryLabel: ta.primaryLabel,
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: ta.formulaBase,
        steps: [],
        verificationText: '',
      };
    }

    const factor = 1 + taxPct / 100;
    const taxAmount = base * (taxPct / 100);
    const total = base + taxAmount;

    const pctStr = formatNumber(taxPct, format, 2, true);
    const factorStr = formatNumber(factor, format, 4, true);
    const baseMoneyStr = formatMoney(base, format, currency, 2);
    const taxMoneyStr = formatMoney(taxAmount, format, currency, 2);
    const totalMoneyStr = formatMoney(total, format, currency, 2);

    return {
      valid: true,
      primaryLabel: ta.primaryLabel,
      primaryValue: totalMoneyStr,
      secondaryMetrics: [
        { label: ta.addedAmountLabel(pctStr), value: taxMoneyStr, tone: 'teal' },
        { label: ta.initialBaseLabel, value: baseMoneyStr },
        { label: ta.multiplierLabel, value: factorStr },
      ],
      formulaText: `${ta.formulaLabel} = ${baseMoneyStr} × (1 + ${pctStr} / 100)`,
      steps: [
        ta.step1(baseMoneyStr, pctStr, taxMoneyStr),
        ta.step2(baseMoneyStr, taxMoneyStr, totalMoneyStr),
      ],
      verificationText: ta.verify(
        totalMoneyStr,
        factorStr,
        formatMoney(total / factor, format, currency, 2)
      ),
    };
  }

  if (subMode === 'part-of-whole') {
    const a = parseInputNumber(valueA);
    const b = parseInputNumber(valueB);
    const pw = m.partOfWhole;

    if (a === null || b === null) {
      return {
        valid: false,
        error: pw.missingError,
        primaryLabel: pw.primaryLabel,
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: pw.formulaBase,
        steps: [],
        verificationText: '',
      };
    }

    if (b === 0) {
      return {
        valid: false,
        error: pw.zeroDivisorError,
        primaryLabel: pw.primaryLabel,
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: pw.formulaBase,
        steps: [],
        verificationText: '',
      };
    }

    const pct = (a / b) * 100;
    const complementPct = 100 - pct;
    const diff = b - a;
    const aStr = formatNumber(a, format, 2, true);
    const bStr = formatNumber(b, format, 2, true);
    const pctStr = formatNumber(pct, format, 2, true);
    const ratioStr = formatNumber(a / b, format, 6, true);

    return {
      valid: true,
      primaryLabel: pw.primaryLabel,
      primaryValue: `${pctStr} %`,
      secondaryMetrics: [
        { label: pw.remainingTo100, value: `${formatNumber(complementPct, format, 2, true)} %`, tone: 'teal' },
        { label: pw.differenceBA, value: formatMoney(diff, format, currency, 2) },
        { label: pw.decimalRatio, value: formatNumber(a / b, format, 4, true) },
      ],
      formulaText: `% = (${aStr} ÷ ${bStr}) × 100`,
      steps: [pw.step1(aStr, bStr, ratioStr), pw.step2(ratioStr, pctStr)],
      verificationText: pw.verify(
        pctStr,
        formatMoney(b, format, currency, 2),
        formatMoney((b * pct) / 100, format, currency, 2)
      ),
    };
  }

  // subMode === 'pct-change'
  const initialVal = parseInputNumber(valueA);
  const finalVal = parseInputNumber(valueB);
  const pc = m.pctChange;

  if (initialVal === null || finalVal === null) {
    return {
      valid: false,
      error: pc.missingError,
      primaryLabel: pc.primaryPrefix,
      primaryValue: '—',
      secondaryMetrics: [],
      formulaText: pc.formulaBase,
      steps: [],
      verificationText: '',
    };
  }

  if (initialVal === 0) {
    return {
      valid: false,
      error: pc.zeroInitialError,
      primaryLabel: pc.primaryPrefix,
      primaryValue: '—',
      secondaryMetrics: [],
      formulaText: pc.formulaBase,
      steps: [],
      verificationText: '',
    };
  }

  const diff = finalVal - initialVal;
  const pctChange = (diff / Math.abs(initialVal)) * 100;
  const sign = pctChange > 0 ? '+' : '';
  const directionLabel =
    pctChange > 0 ? pc.increase : pctChange < 0 ? pc.decrease : pc.noChange;

  const aStr = formatNumber(initialVal, format, 2, true);
  const bStr = formatNumber(finalVal, format, 2, true);
  const absAStr = formatNumber(Math.abs(initialVal), format, 2, true);
  const diffNumStr = `${diff > 0 ? '+' : ''}${formatNumber(diff, format, 2, true)}`;
  const ratioStr = formatNumber(diff / Math.abs(initialVal), format, 6, true);
  const pctSignedStr = `${sign}${formatNumber(pctChange, format, 2, true)}`;

  return {
    valid: true,
    primaryLabel: `${pc.primaryPrefix} · ${directionLabel}`,
    primaryValue: `${pctSignedStr} %`,
    secondaryMetrics: [
      {
        label: pc.absDiffLabel,
        value: `${diff > 0 ? '+' : ''}${formatMoney(diff, format, currency, 2)}`,
        tone: diff >= 0 ? 'teal' : 'amber',
      },
      { label: pc.ratioLabel, value: `${formatNumber(finalVal / initialVal, format, 4, true)}×` },
    ],
    formulaText: `% = ((${bStr} − ${aStr}) ÷ ${absAStr}) × 100`,
    steps: [
      pc.step1(bStr, aStr, diffNumStr),
      pc.step2(formatNumber(diff, format, 2, true), absAStr, ratioStr),
      pc.step3(pctSignedStr),
    ],
    verificationText: pc.verify(
      formatMoney(initialVal, format, currency, 2),
      pctChange >= 0 ? '+' : '−',
      formatNumber(Math.abs(pctChange) / 100, format, 4, true),
      formatMoney(finalVal, format, currency, 2)
    ),
  };
}

export interface DistributionRowResult {
  id: string;
  name: string;
  inputValue: number;
  realPct: number;
  exactAmount: number;
  roundedAmount: number;
  centAdjustment: number;
}

export interface DistributionResult {
  valid: boolean;
  error?: string;
  totalAmount: number;
  sumInput: number;
  pctDifference: number;
  isBalanced: boolean;
  allocatedTotal: number;
  unallocatedAmount: number;
  rows: DistributionRowResult[];
  totalRoundedSum: number;
}

export function calculateDistribution(
  state: DistributionState,
  t: TranslationDictionary
): DistributionResult {
  const totalAmount = parseInputNumber(state.totalAmount);
  const du = t.distributionUi;

  if (totalAmount === null || totalAmount < 0) {
    return {
      valid: false,
      error: du.invalidTotalError,
      totalAmount: 0,
      sumInput: 0,
      pctDifference: 0,
      isBalanced: false,
      allocatedTotal: 0,
      unallocatedAmount: 0,
      rows: [],
      totalRoundedSum: 0,
    };
  }

  if (state.participants.length === 0) {
    return {
      valid: false,
      error: du.noParticipantsError,
      totalAmount,
      sumInput: 0,
      pctDifference: 0,
      isBalanced: false,
      allocatedTotal: 0,
      unallocatedAmount: totalAmount,
      rows: [],
      totalRoundedSum: 0,
    };
  }

  const parsedItems = state.participants.map((p, idx) => ({
    id: p.id,
    name: p.name.trim() || `${du.exampleData.partPrefix} ${idx + 1}`,
    val: parseInputNumber(p.value) ?? 0,
  }));

  if (parsedItems.some((item) => item.val < 0)) {
    return {
      valid: false,
      error: du.negativeValuesError,
      totalAmount,
      sumInput: 0,
      pctDifference: 0,
      isBalanced: false,
      allocatedTotal: 0,
      unallocatedAmount: totalAmount,
      rows: [],
      totalRoundedSum: 0,
    };
  }

  const sumInput = parsedItems.reduce((acc, item) => acc + item.val, 0);

  if (state.mode === 'weight') {
    if (sumInput <= 0) {
      return {
        valid: false,
        error: du.zeroWeightError,
        totalAmount,
        sumInput,
        pctDifference: 0,
        isBalanced: false,
        allocatedTotal: 0,
        unallocatedAmount: totalAmount,
        rows: [],
        totalRoundedSum: 0,
      };
    }

    const totalCents = Math.round(totalAmount * 100);
    const provisional = parsedItems.map((item, index) => {
      const share = item.val / sumInput;
      const exactAmount = totalAmount * share;
      const exactCents = exactAmount * 100;
      const floorCents = Math.floor(exactCents + 1e-9);
      const remainder = exactCents - floorCents;
      return {
        ...item,
        index,
        realPct: share * 100,
        exactAmount,
        floorCents,
        remainder,
        finalCents: floorCents,
      };
    });

    const sumFloor = provisional.reduce((acc, r) => acc + r.floorCents, 0);
    const missingCents = totalCents - sumFloor;

    if (missingCents > 0) {
      const sortedIndices = [...provisional]
        .sort((a, b) => b.remainder - a.remainder || a.index - b.index)
        .slice(0, missingCents);
      for (const item of sortedIndices) {
        provisional[item.index].finalCents += 1;
      }
    }

    const rows: DistributionRowResult[] = provisional.map((r) => {
      const roundedAmount = r.finalCents / 100;
      const centAdjustment = roundedAmount - Math.round(r.exactAmount * 100) / 100;
      return {
        id: r.id,
        name: r.name,
        inputValue: r.val,
        realPct: r.realPct,
        exactAmount: r.exactAmount,
        roundedAmount,
        centAdjustment: Math.abs(centAdjustment) < 0.001 ? 0 : centAdjustment,
      };
    });

    const totalRoundedSum = rows.reduce((acc, r) => acc + Math.round(r.roundedAmount * 100), 0) / 100;

    return {
      valid: true,
      totalAmount,
      sumInput,
      pctDifference: 0,
      isBalanced: true,
      allocatedTotal: totalAmount,
      unallocatedAmount: 0,
      rows,
      totalRoundedSum,
    };
  }

  const pctDifference = sumInput - 100;
  const isBalanced = Math.abs(pctDifference) <= 0.01;

  if (isBalanced) {
    const totalCents = Math.round(totalAmount * 100);
    const provisional = parsedItems.map((item, index) => {
      const normalizedPct = sumInput > 0 ? (item.val / sumInput) * 100 : 0;
      const exactAmount = (totalAmount * item.val) / 100;
      const exactCents = (totalCents * item.val) / (sumInput > 0 ? sumInput : 100);
      const floorCents = Math.floor(exactCents + 1e-9);
      const remainder = exactCents - floorCents;
      return {
        ...item,
        index,
        realPct: normalizedPct,
        exactAmount,
        floorCents,
        remainder,
        finalCents: floorCents,
      };
    });

    const sumFloor = provisional.reduce((acc, r) => acc + r.floorCents, 0);
    const missingCents = totalCents - sumFloor;
    if (missingCents > 0) {
      const sortedIndices = [...provisional]
        .sort((a, b) => b.remainder - a.remainder || a.index - b.index)
        .slice(0, missingCents);
      for (const item of sortedIndices) {
        provisional[item.index].finalCents += 1;
      }
    }

    const rows: DistributionRowResult[] = provisional.map((r) => {
      const roundedAmount = r.finalCents / 100;
      const nearestRawCent = Math.round(r.exactAmount * 100) / 100;
      const centAdjustment = roundedAmount - nearestRawCent;
      return {
        id: r.id,
        name: r.name,
        inputValue: r.val,
        realPct: r.realPct,
        exactAmount: r.exactAmount,
        roundedAmount,
        centAdjustment: Math.abs(centAdjustment) < 0.001 ? 0 : centAdjustment,
      };
    });

    const totalRoundedSum = rows.reduce((acc, r) => acc + Math.round(r.roundedAmount * 100), 0) / 100;

    return {
      valid: true,
      totalAmount,
      sumInput,
      pctDifference: 0,
      isBalanced: true,
      allocatedTotal: totalAmount,
      unallocatedAmount: 0,
      rows,
      totalRoundedSum,
    };
  }

  const rows: DistributionRowResult[] = parsedItems.map((item) => {
    const exactAmount = (totalAmount * item.val) / 100;
    const roundedAmount = Math.round(exactAmount * 100) / 100;
    return {
      id: item.id,
      name: item.name,
      inputValue: item.val,
      realPct: item.val,
      exactAmount,
      roundedAmount,
      centAdjustment: 0,
    };
  });

  const allocatedTotal = rows.reduce((acc, r) => acc + Math.round(r.roundedAmount * 100), 0) / 100;
  const unallocatedAmount = totalAmount - allocatedTotal;

  return {
    valid: true,
    totalAmount,
    sumInput,
    pctDifference,
    isBalanced: false,
    allocatedTotal,
    unallocatedAmount,
    rows,
    totalRoundedSum: allocatedTotal,
  };
}

export interface RuleOfThreeResult {
  valid: boolean;
  error?: string;
  x: number | null;
  formattedX: string;
  formulaText: string;
  substitutionText: string;
  steps: string[];
  constantLabel: string;
  constantValue: string;
  verificationText: string;
}

export function calculateRuleOfThree(
  state: RuleOfThreeState,
  format: NumberFormatMode,
  t: TranslationDictionary
): RuleOfThreeResult {
  const a = parseInputNumber(state.a);
  const b = parseInputNumber(state.b);
  const c = parseInputNumber(state.c);
  const unitA = state.unitA.trim() || t.ruleOfThreeUi.defaultUnitA;
  const unitB = state.unitB.trim() || t.ruleOfThreeUi.defaultUnitB;
  const rm = t.ruleOfThreeMath;

  const isDirect = state.type === 'direct';
  const formulaText = isDirect ? 'X = (B × C) ÷ A' : 'X = (A × B) ÷ C';

  if (a === null || b === null || c === null) {
    return {
      valid: false,
      error: rm.missingError,
      x: null,
      formattedX: '—',
      formulaText,
      substitutionText: '',
      steps: [],
      constantLabel: isDirect ? rm.directConstantLabel : rm.inverseConstantLabel,
      constantValue: '—',
      verificationText: '',
    };
  }

  const aStr = formatNumber(a, format, 4, true);
  const bStr = formatNumber(b, format, 4, true);
  const cStr = formatNumber(c, format, 4, true);

  if (isDirect) {
    if (a === 0) {
      return {
        valid: false,
        error: rm.directZeroAError,
        x: null,
        formattedX: '—',
        formulaText,
        substitutionText: '',
        steps: [],
        constantLabel: rm.directConstantLabel,
        constantValue: '—',
        verificationText: '',
      };
    }

    const product = b * c;
    const x = product / a;
    const unitRate = b / a;
    const formattedX = formatNumber(x, format, 4, true);
    const rateStr = formatNumber(unitRate, format, 4, true);
    const prodStr = formatNumber(product, format, 4, true);

    return {
      valid: true,
      x,
      formattedX,
      formulaText,
      substitutionText: `X = (${bStr} × ${cStr}) ÷ ${aStr}`,
      steps: rm.directSteps(unitA, unitB, aStr, bStr, cStr, rateStr, prodStr, formattedX),
      constantLabel: rm.perOneUnit(unitA),
      constantValue: rm.unitRateValue(rateStr, unitB),
      verificationText: rm.directVerify(
        formatNumber(b / a, format, 4, true),
        c !== 0 ? formatNumber(x / c, format, 4, true) : '—'
      ),
    };
  }

  if (c === 0) {
    return {
      valid: false,
      error: rm.inverseZeroCError,
      x: null,
      formattedX: '—',
      formulaText,
      substitutionText: '',
      steps: [],
      constantLabel: rm.inverseConstantLabel,
      constantValue: '—',
      verificationText: '',
    };
  }

  if (a === 0) {
    return {
      valid: false,
      error: rm.inverseZeroAError,
      x: null,
      formattedX: '—',
      formulaText,
      substitutionText: '',
      steps: [],
      constantLabel: rm.inverseConstantLabel,
      constantValue: '—',
      verificationText: '',
    };
  }

  const product = a * b;
  const x = product / c;
  const formattedX = formatNumber(x, format, 4, true);
  const prodStr = formatNumber(product, format, 4, true);

  return {
    valid: true,
    x,
    formattedX,
    formulaText,
    substitutionText: `X = (${aStr} × ${bStr}) ÷ ${cStr}`,
    steps: rm.inverseSteps(unitA, unitB, aStr, bStr, cStr, prodStr, formattedX),
    constantLabel: rm.inverseConstantLabel,
    constantValue: prodStr,
    verificationText: rm.inverseVerify(
      formatNumber(a * b, format, 4, true),
      formatNumber(c * x, format, 4, true)
    ),
  };
}
