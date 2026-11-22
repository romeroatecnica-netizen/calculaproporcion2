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
      // Format like 1.234,56
      normalized = cleaned.replace(/\./g, '').replace(',', '.');
    } else {
      // Format like 1,234.56
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
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: trimTrailingZeros ? 0 : decimals,
    maximumFractionDigits: decimals,
    useGrouping: true,
  }).format(fixed);

  return formatted;
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
  currency: CurrencyMode
): PercentageResult {
  const { subMode, amount, rate, valueA, valueB } = state;

  if (subMode === 'inverse-discount') {
    const finalPrice = parseInputNumber(amount);
    const discountPct = parseInputNumber(rate);

    if (finalPrice === null || discountPct === null) {
      return {
        valid: false,
        error: 'Introduce el precio final pagado y el porcentaje de descuento para calcular el precio original.',
        primaryLabel: 'Precio original antes del descuento',
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: 'Precio original = Precio final ÷ (1 − Descuento / 100)',
        steps: [],
        verificationText: '',
      };
    }

    if (finalPrice < 0) {
      return {
        valid: false,
        error: 'El precio final no puede ser negativo.',
        primaryLabel: 'Precio original antes del descuento',
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: 'Precio original = Precio final ÷ (1 − Descuento / 100)',
        steps: [],
        verificationText: '',
      };
    }

    if (discountPct < 0 || discountPct >= 100) {
      return {
        valid: false,
        error:
          discountPct >= 100
            ? 'El descuento no puede ser igual o superior al 100 % (implicaría división entre cero o precio negativo).'
            : 'El porcentaje de descuento debe ser igual o mayor que 0 %.',
        primaryLabel: 'Precio original antes del descuento',
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: 'Precio original = Precio final ÷ (1 − Descuento / 100)',
        steps: [],
        verificationText: '',
      };
    }

    const factor = 1 - discountPct / 100;
    const originalPrice = finalPrice / factor;
    const savings = originalPrice - finalPrice;
    const paidPct = 100 - discountPct;

    // Common mistake: adding discount % directly to final price
    const wrongOriginal = finalPrice * (1 + discountPct / 100);
    const mistakeDiff = originalPrice - wrongOriginal;

    return {
      valid: true,
      primaryLabel: 'Precio original antes del descuento',
      primaryValue: formatMoney(originalPrice, format, currency, 2),
      secondaryMetrics: [
        { label: 'Ahorro real obtenido', value: formatMoney(savings, format, currency, 2), tone: 'teal' },
        { label: 'Porcentaje pagado del total', value: `${formatNumber(paidPct, format, 2, true)} %` },
        { label: 'Factor divisor aplicado', value: formatNumber(factor, format, 4, true) },
      ],
      formulaText: `Precio original = ${formatMoney(finalPrice, format, currency)} ÷ (1 − ${formatNumber(discountPct, format, 2, true)} / 100)`,
      steps: [
        `Si te han descontado un ${formatNumber(discountPct, format, 2, true)} %, el importe pagado representa el ${formatNumber(paidPct, format, 2, true)} % del precio original.`,
        `Calculamos el factor multiplicador restante: 1 − (${formatNumber(discountPct, format, 2, true)} ÷ 100) = ${formatNumber(factor, format, 4, true)}.`,
        `Dividimos el precio final entre ese factor: ${formatNumber(finalPrice, format, 2, true)} ÷ ${formatNumber(factor, format, 4, true)} = ${formatMoney(originalPrice, format, currency, 2)}.`,
        `Ahorro real: ${formatMoney(originalPrice, format, currency, 2)} − ${formatMoney(finalPrice, format, currency, 2)} = ${formatMoney(savings, format, currency, 2)}.`,
      ],
      verificationText: `Comprobación directa: ${formatMoney(originalPrice, format, currency, 2)} − ${formatNumber(discountPct, format, 2, true)} % (${formatMoney(savings, format, currency, 2)}) = ${formatMoney(originalPrice * factor, format, currency, 2)}.`,
      commonMistakeNote:
        discountPct > 0
          ? {
              wrongValue: formatMoney(wrongOriginal, format, currency, 2),
              difference: formatMoney(Math.abs(mistakeDiff), format, currency, 2),
              explanation: `Error frecuente evitado: si sumaras el ${formatNumber(discountPct, format, 2, true)} % directamente al precio rebajado (${formatMoney(finalPrice, format, currency)} × ${formatNumber(1 + discountPct / 100, format, 2, true)}), obtendrías ${formatMoney(wrongOriginal, format, currency, 2)}, quedándote ${formatMoney(Math.abs(mistakeDiff), format, currency, 2)} por debajo del precio real.`,
            }
          : undefined,
    };
  }

  if (subMode === 'tax-remove') {
    const totalWithTax = parseInputNumber(amount);
    const taxPct = parseInputNumber(rate);

    if (totalWithTax === null || taxPct === null) {
      return {
        valid: false,
        error: 'Introduce el importe total con impuesto incluido y el porcentaje de IVA o recargo.',
        primaryLabel: 'Base imponible (sin IVA / impuesto)',
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: 'Base imponible = Total ÷ (1 + IVA / 100)',
        steps: [],
        verificationText: '',
      };
    }

    if (taxPct <= -100) {
      return {
        valid: false,
        error: 'El porcentaje de impuesto debe ser superior a −100 %.',
        primaryLabel: 'Base imponible (sin IVA / impuesto)',
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: 'Base imponible = Total ÷ (1 + IVA / 100)',
        steps: [],
        verificationText: '',
      };
    }

    const divisor = 1 + taxPct / 100;
    const base = totalWithTax / divisor;
    const taxAmount = totalWithTax - base;
    const wrongSubtraction = totalWithTax * (1 - taxPct / 100);

    return {
      valid: true,
      primaryLabel: 'Base imponible (importe sin IVA)',
      primaryValue: formatMoney(base, format, currency, 2),
      secondaryMetrics: [
        { label: `Cuota de impuesto (${formatNumber(taxPct, format, 2, true)} %)`, value: formatMoney(taxAmount, format, currency, 2), tone: 'teal' },
        { label: 'Importe total con IVA', value: formatMoney(totalWithTax, format, currency, 2) },
        { label: 'Divisor aplicado', value: formatNumber(divisor, format, 4, true) },
      ],
      formulaText: `Base = ${formatMoney(totalWithTax, format, currency)} ÷ (1 + ${formatNumber(taxPct, format, 2, true)} / 100)`,
      steps: [
        `El total pagado incluye el 100 % de la base más el ${formatNumber(taxPct, format, 2, true)} % de impuesto, es decir, un ${formatNumber(100 + taxPct, format, 2, true)} %.`,
        `Convertimos a divisor decimal: 1 + (${formatNumber(taxPct, format, 2, true)} ÷ 100) = ${formatNumber(divisor, format, 4, true)}.`,
        `Dividimos el total entre ${formatNumber(divisor, format, 4, true)}: ${formatNumber(totalWithTax, format, 2, true)} ÷ ${formatNumber(divisor, format, 4, true)} = ${formatMoney(base, format, currency, 2)}.`,
        `La cuota del impuesto corresponde a: ${formatMoney(totalWithTax, format, currency, 2)} − ${formatMoney(base, format, currency, 2)} = ${formatMoney(taxAmount, format, currency, 2)}.`,
      ],
      verificationText: `Comprobación: ${formatMoney(base, format, currency, 2)} + ${formatNumber(taxPct, format, 2, true)} % (${formatMoney(base * (taxPct / 100), format, currency, 2)}) = ${formatMoney(base * divisor, format, currency, 2)}.`,
      commonMistakeNote:
        taxPct > 0
          ? {
              wrongValue: formatMoney(wrongSubtraction, format, currency, 2),
              difference: formatMoney(Math.abs(base - wrongSubtraction), format, currency, 2),
              explanation: `Si restaras el ${formatNumber(taxPct, format, 2, true)} % directamente al total (${formatMoney(wrongSubtraction, format, currency, 2)}), cometerías un error de ${formatMoney(Math.abs(base - wrongSubtraction), format, currency, 2)} porque el IVA se calcula sobre la base, no sobre el total.`,
            }
          : undefined,
    };
  }

  if (subMode === 'tax-add') {
    const base = parseInputNumber(amount);
    const taxPct = parseInputNumber(rate);

    if (base === null || taxPct === null) {
      return {
        valid: false,
        error: 'Introduce el importe base y el porcentaje a añadir.',
        primaryLabel: 'Importe total con impuesto / incremento',
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: 'Total = Base × (1 + Porcentaje / 100)',
        steps: [],
        verificationText: '',
      };
    }

    const factor = 1 + taxPct / 100;
    const taxAmount = base * (taxPct / 100);
    const total = base + taxAmount;

    return {
      valid: true,
      primaryLabel: 'Importe total con porcentaje añadido',
      primaryValue: formatMoney(total, format, currency, 2),
      secondaryMetrics: [
        { label: `Importe añadido (${formatNumber(taxPct, format, 2, true)} %)`, value: formatMoney(taxAmount, format, currency, 2), tone: 'teal' },
        { label: 'Base inicial', value: formatMoney(base, format, currency, 2) },
        { label: 'Factor multiplicador', value: formatNumber(factor, format, 4, true) },
      ],
      formulaText: `Total = ${formatMoney(base, format, currency)} × (1 + ${formatNumber(taxPct, format, 2, true)} / 100)`,
      steps: [
        `Calculamos la parte proporcional: ${formatMoney(base, format, currency, 2)} × (${formatNumber(taxPct, format, 2, true)} ÷ 100) = ${formatMoney(taxAmount, format, currency, 2)}.`,
        `Sumamos la base y el importe añadido: ${formatMoney(base, format, currency, 2)} + ${formatMoney(taxAmount, format, currency, 2)} = ${formatMoney(total, format, currency, 2)}.`,
      ],
      verificationText: `Comprobación inversa: ${formatMoney(total, format, currency, 2)} ÷ ${formatNumber(factor, format, 4, true)} = ${formatMoney(total / factor, format, currency, 2)}.`,
    };
  }

  if (subMode === 'part-of-whole') {
    const a = parseInputNumber(valueA);
    const b = parseInputNumber(valueB);

    if (a === null || b === null) {
      return {
        valid: false,
        error: 'Introduce la cantidad A y el total de referencia B.',
        primaryLabel: '¿Qué porcentaje es A sobre B?',
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: 'Porcentaje = (A ÷ B) × 100',
        steps: [],
        verificationText: '',
      };
    }

    if (b === 0) {
      return {
        valid: false,
        error: 'El valor de referencia B no puede ser 0 porque no es posible dividir entre cero.',
        primaryLabel: '¿Qué porcentaje es A sobre B?',
        primaryValue: '—',
        secondaryMetrics: [],
        formulaText: 'Porcentaje = (A ÷ B) × 100',
        steps: [],
        verificationText: '',
      };
    }

    const pct = (a / b) * 100;
    const complementPct = 100 - pct;
    const diff = b - a;

    return {
      valid: true,
      primaryLabel: 'Porcentaje que representa A sobre B',
      primaryValue: `${formatNumber(pct, format, 2, true)} %`,
      secondaryMetrics: [
        { label: 'Restante hasta el 100 %', value: `${formatNumber(complementPct, format, 2, true)} %`, tone: 'teal' },
        { label: 'Diferencia (B − A)', value: formatMoney(diff, format, currency, 2) },
        { label: 'Proporción decimal (A / B)', value: formatNumber(a / b, format, 4, true) },
      ],
      formulaText: `% = (${formatNumber(a, format, 2, true)} ÷ ${formatNumber(b, format, 2, true)}) × 100`,
      steps: [
        `Dividimos la parte (A) entre el total (B): ${formatNumber(a, format, 2, true)} ÷ ${formatNumber(b, format, 2, true)} = ${formatNumber(a / b, format, 6, true)}.`,
        `Multiplicamos por 100 para expresar en porcentaje: ${formatNumber(a / b, format, 6, true)} × 100 = ${formatNumber(pct, format, 2, true)} %.`,
      ],
      verificationText: `Comprobación: el ${formatNumber(pct, format, 2, true)} % de ${formatMoney(b, format, currency, 2)} es ${formatMoney((b * pct) / 100, format, currency, 2)}.`,
    };
  }

  // subMode === 'pct-change'
  const initialVal = parseInputNumber(valueA);
  const finalVal = parseInputNumber(valueB);

  if (initialVal === null || finalVal === null) {
    return {
      valid: false,
      error: 'Introduce el valor inicial (A) y el valor final (B) para calcular la variación porcentual.',
      primaryLabel: 'Variación porcentual (de A a B)',
      primaryValue: '—',
      secondaryMetrics: [],
      formulaText: 'Variación % = ((B − A) ÷ |A|) × 100',
      steps: [],
      verificationText: '',
    };
  }

  if (initialVal === 0) {
    return {
      valid: false,
      error: 'El valor inicial (A) no puede ser 0 para calcular una variación porcentual.',
      primaryLabel: 'Variación porcentual (de A a B)',
      primaryValue: '—',
      secondaryMetrics: [],
      formulaText: 'Variación % = ((B − A) ÷ |A|) × 100',
      steps: [],
      verificationText: '',
    };
  }

  const diff = finalVal - initialVal;
  const pctChange = (diff / Math.abs(initialVal)) * 100;
  const sign = pctChange > 0 ? '+' : '';
  const directionLabel =
    pctChange > 0 ? 'Incremento (subida)' : pctChange < 0 ? 'Reducción (bajada)' : 'Sin variación';

  return {
    valid: true,
    primaryLabel: `Variación porcentual · ${directionLabel}`,
    primaryValue: `${sign}${formatNumber(pctChange, format, 2, true)} %`,
    secondaryMetrics: [
      {
        label: 'Diferencia absoluta (B − A)',
        value: `${diff > 0 ? '+' : ''}${formatMoney(diff, format, currency, 2)}`,
        tone: diff >= 0 ? 'teal' : 'amber',
      },
      { label: 'Ratio (B ÷ A)', value: `${formatNumber(finalVal / initialVal, format, 4, true)}×` },
    ],
    formulaText: `Variación % = ((${formatNumber(finalVal, format, 2, true)} − ${formatNumber(initialVal, format, 2, true)}) ÷ ${formatNumber(Math.abs(initialVal), format, 2, true)}) × 100`,
    steps: [
      `Calculamos la diferencia absoluta entre el valor final y el inicial: ${formatNumber(finalVal, format, 2, true)} − ${formatNumber(initialVal, format, 2, true)} = ${diff > 0 ? '+' : ''}${formatNumber(diff, format, 2, true)}.`,
      `Dividimos la diferencia entre el valor inicial: ${formatNumber(diff, format, 2, true)} ÷ ${formatNumber(Math.abs(initialVal), format, 2, true)} = ${formatNumber(diff / Math.abs(initialVal), format, 6, true)}.`,
      `Multiplicamos por 100: ${sign}${formatNumber(pctChange, format, 2, true)} %.`,
    ],
    verificationText: `Comprobación: ${formatMoney(initialVal, format, currency, 2)} × (1 ${pctChange >= 0 ? '+' : '−'} ${formatNumber(Math.abs(pctChange) / 100, format, 4, true)}) = ${formatMoney(finalVal, format, currency, 2)}.`,
  };
}

export interface DistributionRowResult {
  id: string;
  name: string;
  inputValue: number;
  realPct: number;
  exactAmount: number;
  roundedAmount: number;
  centAdjustment: number; // in currency units, e.g. +0.01 or -0.01
}

export interface DistributionResult {
  valid: boolean;
  error?: string;
  totalAmount: number;
  sumInput: number;
  pctDifference: number; // sumPct - 100 in percentage mode
  isBalanced: boolean;
  allocatedTotal: number;
  unallocatedAmount: number;
  rows: DistributionRowResult[];
  totalRoundedSum: number;
}

export function calculateDistribution(state: DistributionState): DistributionResult {
  const totalAmount = parseInputNumber(state.totalAmount);

  if (totalAmount === null || totalAmount < 0) {
    return {
      valid: false,
      error: 'Introduce un importe total válido (igual o mayor que 0) para realizar el reparto.',
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
      error: 'Añade al menos un participante o concepto para repartir el importe.',
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
    name: p.name.trim() || `Parte ${idx + 1}`,
    val: parseInputNumber(p.value) ?? 0,
  }));

  if (parsedItems.some((item) => item.val < 0)) {
    return {
      valid: false,
      error: 'Los porcentajes o pesos no pueden ser valores negativos.',
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
        error: 'La suma de pesos debe ser mayor que 0 para calcular la proporción.',
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

  // Percentage mode
  const pctDifference = sumInput - 100;
  const isBalanced = Math.abs(pctDifference) <= 0.01;

  if (isBalanced) {
    // Exact 100% -> apply Hamilton largest remainder method so cents match totalAmount exactly
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

  // Unbalanced percentage sum (not equal to 100%)
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
  format: NumberFormatMode
): RuleOfThreeResult {
  const a = parseInputNumber(state.a);
  const b = parseInputNumber(state.b);
  const c = parseInputNumber(state.c);
  const unitA = state.unitA.trim() || 'unidades A';
  const unitB = state.unitB.trim() || 'unidades B';

  const isDirect = state.type === 'direct';
  const formulaText = isDirect ? 'X = (B × C) ÷ A' : 'X = (A × B) ÷ C';

  if (a === null || b === null || c === null) {
    return {
      valid: false,
      error: 'Completa los valores A, B y C para calcular el resultado X.',
      x: null,
      formattedX: '—',
      formulaText,
      substitutionText: '',
      steps: [],
      constantLabel: isDirect ? 'Razón unitaria (B ÷ A)' : 'Producto constante (A × B)',
      constantValue: '—',
      verificationText: '',
    };
  }

  if (isDirect) {
    if (a === 0) {
      return {
        valid: false,
        error: 'El valor A no puede ser 0 en una regla de tres directa (no se puede dividir entre cero).',
        x: null,
        formattedX: '—',
        formulaText,
        substitutionText: '',
        steps: [],
        constantLabel: 'Razón unitaria (B ÷ A)',
        constantValue: '—',
        verificationText: '',
      };
    }

    const product = b * c;
    const x = product / a;
    const unitRate = b / a;
    const formattedX = formatNumber(x, format, 4, true);

    return {
      valid: true,
      x,
      formattedX,
      formulaText,
      substitutionText: `X = (${formatNumber(b, format, 4, true)} × ${formatNumber(c, format, 4, true)}) ÷ ${formatNumber(a, format, 4, true)}`,
      steps: [
        `Relación directa: al variar ${unitA}, ${unitB} varía en la misma proporción.`,
        `Calculamos la razón por cada unidad de A: ${formatNumber(b, format, 4, true)} ÷ ${formatNumber(a, format, 4, true)} = ${formatNumber(unitRate, format, 4, true)} ${unitB} por cada 1 ${unitA}.`,
        `Multiplicamos en cruz (B × C): ${formatNumber(b, format, 4, true)} × ${formatNumber(c, format, 4, true)} = ${formatNumber(product, format, 4, true)}.`,
        `Dividimos entre A: ${formatNumber(product, format, 4, true)} ÷ ${formatNumber(a, format, 4, true)} = ${formattedX} ${unitB}.`,
      ],
      constantLabel: `Por cada 1 ${unitA}`,
      constantValue: `${formatNumber(unitRate, format, 4, true)} ${unitB}`,
      verificationText: `Comprobación de proporcionalidad: B/A = ${formatNumber(b / a, format, 4, true)} y X/C = ${c !== 0 ? formatNumber(x / c, format, 4, true) : '—'}.`,
    };
  }

  // Inverse rule of three
  if (c === 0) {
    return {
      valid: false,
      error: 'El valor C no puede ser 0 en una regla de tres inversa (implica división entre cero).',
      x: null,
      formattedX: '—',
      formulaText,
      substitutionText: '',
      steps: [],
      constantLabel: 'Producto constante (A × B)',
      constantValue: '—',
      verificationText: '',
    };
  }

  if (a === 0) {
    return {
      valid: false,
      error: 'El valor inicial A debe ser distinto de 0 para establecer una proporción inversa.',
      x: null,
      formattedX: '—',
      formulaText,
      substitutionText: '',
      steps: [],
      constantLabel: 'Producto constante (A × B)',
      constantValue: '—',
      verificationText: '',
    };
  }

  const product = a * b;
  const x = product / c;
  const formattedX = formatNumber(x, format, 4, true);

  return {
    valid: true,
    x,
    formattedX,
    formulaText,
    substitutionText: `X = (${formatNumber(a, format, 4, true)} × ${formatNumber(b, format, 4, true)}) ÷ ${formatNumber(c, format, 4, true)}`,
    steps: [
      `Relación inversa: si aumenta ${unitA}, disminuye ${unitB} (y viceversa), manteniendo constante su producto.`,
      `Multiplicamos en línea la pareja conocida (A × B): ${formatNumber(a, format, 4, true)} × ${formatNumber(b, format, 4, true)} = ${formatNumber(product, format, 4, true)}.`,
      `Dividimos ese producto total entre C: ${formatNumber(product, format, 4, true)} ÷ ${formatNumber(c, format, 4, true)} = ${formattedX} ${unitB}.`,
    ],
    constantLabel: 'Magnitud total constante (A × B)',
    constantValue: formatNumber(product, format, 4, true),
    verificationText: `Comprobación inversa: A × B = ${formatNumber(a * b, format, 4, true)} y C × X = ${formatNumber(c * x, format, 4, true)}.`,
  };
}
