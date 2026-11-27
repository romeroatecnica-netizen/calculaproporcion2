import { buildAmazonEsSearchUrl } from '../../config/affiliate';
import { TranslationDictionary } from '../types';

export const en: TranslationDictionary = {
  meta: {
    siteName: 'CalculaProporcion',
    appDescription:
      'Instantly calculate original prices before discounts, add or remove VAT, split expenses accurately to the cent, and solve direct or inverse rule-of-three problems.',
    howToName: 'How to calculate the original price before a discount (reverse percentage)',
    howToDescription:
      'Exact method to recover the initial price of an item given the final price paid and the applied discount percentage.',
    howToSteps: [
      {
        name: 'Convert the discount percentage to a decimal ratio',
        text: 'Divide the discount percentage by 100. For example, 20% equals 0.20.',
      },
      {
        name: 'Find the remaining factor',
        text: 'Subtract that ratio from 1: 1 - 0.20 = 0.80. This means the final price represents 80% of the original price.',
      },
      {
        name: 'Divide the final price by the remaining factor',
        text: 'Divide the price paid by 0.80. If you paid 80, then 80 / 0.80 = 100 original price (not 96 from adding 20% directly).',
      },
    ],
  },
  header: {
    navPercentages: 'Percentages & VAT',
    navDistribution: 'Split',
    navRuleOfThree: 'Rule of 3',
    navGuidesFaq: 'Guides & FAQ',
    shareCalculation: 'Share calculation',
    linkCopied: 'Link copied',
    navAriaLabel: 'Calculator modules',
  },
  preferences: {
    mobileTabsAria: 'Select calculator',
    separatorLabel: 'Format:',
    separatorEsTitle: 'European separator: dot for thousands, comma for decimals',
    separatorUsTitle: 'International separator: comma for thousands, dot for decimals',
    unitLabel: 'Unit:',
    noSymbol: 'No symbol',
    languageLabel: 'Language:',
    reset: 'Reset',
  },
  actions: {
    copyWhatsApp: 'Copy for WhatsApp',
    copiedWhatsApp: 'Copied for WhatsApp',
    copyLink: 'Copy link',
    linkCopied: 'Link copied',
    printPdf: 'Print / PDF',
  },
  adSlot: {
    ariaLabel: 'Advertising space',
    reservedPrefix: 'Reserved ad slot',
    intermediateLabel: 'Mid-page banner 728×90 / responsive',
    bottomLabel: 'Bottom banner 728×90 / responsive',
    clsNote: 'Fixed minimum height container to prevent layout shift (CLS = 0)',
  },
  seoByMode: {
    percentages: {
      'inverse-discount': {
        title: 'Reverse Discount Calculator (Original Price Before Discount) | CalculaProporcion',
        metaDescription:
          'Instantly find the original price before a discount was applied. Avoid rounding mistakes with our exact reverse percentage formula.',
        h1: 'How to calculate the original price before a discount',
        subtitle:
          'Enter the final price paid and the discount percentage to recover the exact original price and see your real savings.',
        contextLabel: 'Module 01 · Reverse percentage',
      },
      'tax-remove': {
        title: 'Remove VAT from a Price (Calculate Net Base Amount) | CalculaProporcion',
        metaDescription:
          'Extract VAT or sales tax from any invoice or receipt in seconds. Compute the exact net amount before 21%, 10%, or any tax rate.',
        h1: 'Remove VAT from a price and find the net base',
        subtitle:
          'Automatically break down the net base price and tax amount starting from a tax-inclusive total.',
        contextLabel: 'Module 01 · VAT extraction',
      },
      'tax-add': {
        title: 'Add VAT or Percentage Markup to a Net Amount | CalculaProporcion',
        metaDescription:
          'Add 21%, 10%, or any custom tax percentage to a net base amount to get the exact tax fee and gross total.',
        h1: 'Add VAT or a percentage markup to a base amount',
        subtitle:
          'Calculate the exact tax or surcharge amount and obtain the final gross price ready for invoicing or quoting.',
        contextLabel: 'Module 01 · Add percentage',
      },
      'part-of-whole': {
        title: 'What Percentage is A of B Calculator | CalculaProporcion',
        metaDescription:
          'Find out what percentage one value A represents out of a total B with step-by-step math and remaining share.',
        h1: 'Calculate what percentage one number is of a total',
        subtitle:
          'Get the exact proportion that value A represents relative to reference total B and inspect the remaining percentage.',
        contextLabel: 'Module 01 · Percentage share',
      },
      'pct-change': {
        title: 'Percentage Change Calculator (Increase or Decrease) | CalculaProporcion',
        metaDescription:
          'Measure the percentage increase or decrease between an initial value and a final value with absolute difference and proof.',
        h1: 'Calculate the percentage change between two values',
        subtitle:
          'Accurately measure the percentage rise or drop from an initial value A to a final value B.',
        contextLabel: 'Module 01 · Percentage change',
      },
    },
    distribution: {
      percentage: {
        title: 'Proportional Expense Split Calculator by Percentage | CalculaProporcion',
        metaDescription:
          'Split bills, budgets, or prizes by percentage with one-click normalization to 100% and exact cent-level balancing.',
        h1: 'Split an expense or amount by percentage',
        subtitle:
          'Allocate invoices, shared bills, or rewards across participants with automatic 100% normalization and cent-exact rounding.',
        contextLabel: 'Module 02 · Percentage split',
      },
      weight: {
        title: 'Proportional Split Calculator by Weights, Days, or Shares | CalculaProporcion',
        metaDescription:
          'Divide shared bills, trip costs, or profits proportionally by days, hours, square meters, or shares balanced to the exact cent.',
        h1: 'Proportional split by weights, days, hours, or shares',
        subtitle:
          'Assign weights by stay length, usage, or units and get every participant’s cent-exact share.',
        contextLabel: 'Module 02 · Weighted split',
      },
    },
    ruleOfThree: {
      direct: {
        title: 'Direct Rule of Three Calculator Step by Step | CalculaProporcion',
        metaDescription:
          'Solve direct proportions online for recipes, budgets, fuel usage, and unit conversions with step-by-step formulas.',
        h1: 'Direct rule of three calculator online',
        subtitle:
          'Solve direct proportions (more of A yields more of B) with unit rate breakdown, substitution, and automatic verification.',
        contextLabel: 'Module 03 · Direct rule of three',
      },
      inverse: {
        title: 'Inverse Rule of Three Calculator Step by Step | CalculaProporcion',
        metaDescription:
          'Solve inverse proportions online (speed vs time, workers vs days, flow rate) with clear step-by-step math and verification.',
        h1: 'Inverse rule of three calculator step by step',
        subtitle:
          'Solve inversely proportional quantities (more resources mean less time) with formula proof and constant-product check.',
        contextLabel: 'Module 03 · Inverse rule of three',
      },
    },
  },
  percentagesUi: {
    sectionAria: 'Direct and reverse percentage calculator',
    subModeAria: 'Select percentage calculation type',
    tabs: {
      inverseDiscount: 'Reverse discount',
      tax: 'Remove / Add VAT',
      partOfWhole: 'What % is A of B',
      pctChange: '% Change',
    },
    presetsLabel: 'Quick presets:',
    presets: {
      dto20: 'Price after 20% off',
      dto30: 'Price after 30% off',
      iva21: 'Remove 21% VAT',
      iva10: 'Remove 10% VAT',
    },
    taxToggle: {
      remove: 'Remove VAT (Gross → Net)',
      add: 'Add VAT (Net → Gross)',
    },
    labels: {
      finalPaid: 'Final price paid',
      totalWithTax: 'Total amount (incl. VAT)',
      netBase: 'Net base amount (excl. VAT)',
      discountApplied: 'Discount applied',
      taxRate: 'Tax / VAT percentage',
      partA: 'Partial amount (A)',
      initialA: 'Initial value (A)',
      wholeB: 'Reference total (B)',
      finalB: 'Final value (B)',
    },
    hints: {
      inverseDiscount: 'Amount paid after the discount was applied.',
      taxRemove: 'Final gross amount on the receipt or invoice.',
      taxAdd: 'Net taxable base before adding tax.',
    },
    placeholders: {
      amount: 'e.g. 80.00',
      rate: 'e.g. 20',
      valA: 'e.g. 35',
      valB: 'e.g. 140',
    },
    swapAB: 'Swap A and B',
    checkInputsTitle: 'Check your inputs',
    avoidClassicError: 'Why it is not',
    formulaStepsTitle: 'Formula & step-by-step breakdown',
  },
  percentagesMath: {
    inverseDiscount: {
      primaryLabel: 'Original price before discount',
      missingError: 'Enter the final price paid and the discount percentage to compute the original price.',
      negativePriceError: 'The final price cannot be negative.',
      over100Error: 'The discount cannot be 100% or higher (that implies dividing by zero or a negative price).',
      negativePctError: 'The discount percentage must be 0% or higher.',
      formulaBase: 'Original price = Final price ÷ (1 − Discount / 100)',
      formulaLabel: 'Original price',
      realSavings: 'Actual savings',
      paidPctOfTotal: 'Percentage paid of original',
      divisorFactor: 'Divisor factor applied',
      step1: (d, paid) => `With a ${d}% discount, the amount paid represents ${paid}% of the original price.`,
      step2: (d, factor) => `Compute the remaining multiplier factor: 1 − (${d} ÷ 100) = ${factor}.`,
      step3: (f, factor, orig) => `Divide the final price by that factor: ${f} ÷ ${factor} = ${orig}.`,
      step4: (orig, f, sav) => `Actual savings: ${orig} − ${f} = ${sav}.`,
      verify: (orig, d, sav, checkVal) => `Direct check: ${orig} − ${d}% (${sav}) = ${checkVal}.`,
      mistakeExplain: (d, f, mult, wrong, diff) =>
        `Common mistake avoided: adding ${d}% directly to the discounted price (${f} × ${mult}) gives ${wrong}, which understates the true original price by ${diff}.`,
    },
    taxRemove: {
      primaryLabel: 'Net base (price excluding VAT)',
      missingError: 'Enter the gross total amount and the VAT/tax percentage.',
      invalidRateError: 'The tax percentage must be greater than −100%.',
      formulaBase: 'Net base = Total ÷ (1 + VAT / 100)',
      formulaLabel: 'Net base',
      taxAmountLabel: (pct) => `Tax amount (${pct}%)`,
      totalWithTaxLabel: 'Gross total (incl. VAT)',
      divisorLabel: 'Divisor applied',
      step1: (pct, totalPct) => `The gross total includes 100% of the net base plus ${pct}% tax, totaling ${totalPct}%.`,
      step2: (pct, div) => `Convert to decimal divisor: 1 + (${pct} ÷ 100) = ${div}.`,
      step3: (div, totalNum, base) => `Divide the gross total by ${div}: ${totalNum} ÷ ${div} = ${base}.`,
      step4: (totalMoney, base, taxMoney) => `The tax portion equals: ${totalMoney} − ${base} = ${taxMoney}.`,
      verify: (base, pct, taxCheck, totalCheck) =>
        `Verification: ${base} + ${pct}% (${taxCheck}) = ${totalCheck}.`,
      mistakeExplain: (pct, wrong, diff) =>
        `Subtracting ${pct}% directly from the gross total (${wrong}) causes an error of ${diff}, because VAT is calculated on the net base rather than the gross total.`,
    },
    taxAdd: {
      primaryLabel: 'Gross total with added percentage',
      missingError: 'Enter the base amount and the percentage to add.',
      formulaBase: 'Total = Base × (1 + Rate / 100)',
      formulaLabel: 'Total',
      addedAmountLabel: (pct) => `Added amount (${pct}%)`,
      initialBaseLabel: 'Initial base',
      multiplierLabel: 'Multiplier factor',
      step1: (base, pct, taxMoney) => `Compute the proportional addition: ${base} × (${pct} ÷ 100) = ${taxMoney}.`,
      step2: (base, taxMoney, total) => `Add the base and tax/markup: ${base} + ${taxMoney} = ${total}.`,
      verify: (total, factor, checkBase) => `Reverse check: ${total} ÷ ${factor} = ${checkBase}.`,
    },
    partOfWhole: {
      primaryLabel: 'Percentage that A represents of B',
      missingError: 'Enter partial quantity A and reference total B.',
      zeroDivisorError: 'Reference total B cannot be 0 because division by zero is undefined.',
      formulaBase: 'Percentage = (A ÷ B) × 100',
      remainingTo100: 'Remaining to 100%',
      differenceBA: 'Difference (B − A)',
      decimalRatio: 'Decimal ratio (A / B)',
      step1: (a, b, ratio) => `Divide the part (A) by the whole (B): ${a} ÷ ${b} = ${ratio}.`,
      step2: (ratio, pct) => `Multiply by 100 to express as a percentage: ${ratio} × 100 = ${pct}%.`,
      verify: (pct, b, checkVal) => `Check: ${pct}% of ${b} equals ${checkVal}.`,
    },
    pctChange: {
      missingError: 'Enter initial value (A) and final value (B) to calculate percentage change.',
      zeroInitialError: 'Initial value (A) cannot be 0 when calculating percentage change.',
      formulaBase: 'Change % = ((B − A) ÷ |A|) × 100',
      increase: 'Increase',
      decrease: 'Decrease',
      noChange: 'No change',
      primaryPrefix: 'Percentage change',
      absDiffLabel: 'Absolute difference (B − A)',
      ratioLabel: 'Ratio (B ÷ A)',
      step1: (b, a, diff) => `Compute the absolute difference: ${b} − ${a} = ${diff}.`,
      step2: (diff, absA, ratio) => `Divide the difference by the initial value: ${diff} ÷ ${absA} = ${ratio}.`,
      step3: (pctStr) => `Multiply by 100: ${pctStr}%.`,
      verify: (a, op, factorStr, b) => `Check: ${a} × (1 ${op} ${factorStr}) = ${b}.`,
    },
  },
  distributionUi: {
    sectionAria: 'Proportional split calculator',
    totalLabel: 'Total amount to split',
    totalPlaceholder: 'e.g. 1200',
    conceptLabel: 'Split description',
    conceptPlaceholder: 'e.g. Shared expenses',
    defaultConcept: 'Proportional split',
    modePct: 'Split by Percentage (%)',
    modeWeight: 'Split by Weights / Shares',
    weightUnitLabel: 'Weight unit:',
    weightUnits: ['days', 'hours', 'meters', 'shares', 'points'],
    examplesLabel: 'Examples:',
    examples: {
      trip: 'Trip by nights',
      invoice: 'Invoice 60 / 40',
      equal4: '4 equal shares',
    },
    exampleData: {
      tripConcept: 'Weekend cabin rental',
      tripUnit: 'nights',
      invoiceConcept: 'Shared project invoice',
      invoicePart1: 'Design & strategy',
      invoicePart2: 'Technical build',
      equalConcept: 'Group dinner',
      personPrefix: 'Person',
      partPrefix: 'Share',
    },
    equalSplitBtn: 'Equal split',
    normalizeBtn: 'Normalize to 100%',
    addPartBtn: 'Add share',
    adjust100Link: 'Adjust to 100%',
    statusBalanced: 'Total sum: 100% · Balanced to the exact cent.',
    statusMissing: (sum, missing, money) =>
      `Current sum: ${sum}% · Missing ${missing}% (${money} unallocated).`,
    statusExcess: (sum, excess, money) =>
      `Current sum: ${sum}% · Excess of ${excess}% (${money} over-allocated).`,
    participantNameAria: (idx) => `Participant ${idx} name`,
    participantPlaceholder: (idx) => `Participant ${idx}`,
    pctInputAria: 'Percentage',
    weightInputAria: 'Weight',
    unitShort: 'u.',
    removeAria: (name) => `Remove ${name}`,
    incompleteTitle: 'Incomplete data',
    targetLabel: 'Target',
    defaultUnitLabel: 'shares',
    tableHeaders: {
      part: 'Share',
      realPct: 'Real %',
      exact: 'Exact',
      final: 'Final',
    },
    adjustmentTag: 'adj.',
    centExactOk: (count, totalStr) =>
      `Exact cent balance: the sum of all ${count} shares (${totalStr}) matches 100% of the total amount.`,
    centUnbalancedNote: (sumStr) =>
      `Percentages currently total ${sumStr}%. Use Normalize to 100% to balance the full amount.`,
    invalidTotalError: 'Enter a valid total amount (0 or greater) to run the split.',
    noParticipantsError: 'Add at least one participant or item to split the amount.',
    negativeValuesError: 'Percentages or weights cannot be negative.',
    zeroWeightError: 'The sum of weights must be greater than 0 to compute shares.',
  },
  ruleOfThreeUi: {
    sectionAria: 'Direct and inverse rule of three calculator',
    directBtn: 'Direct Rule of Three',
    inverseBtn: 'Inverse Rule of Three',
    directDesc: 'Direct proportion: as quantity A increases, quantity B increases at the same ratio.',
    inverseDesc: 'Inverse proportion: as quantity A increases, quantity B decreases (e.g. higher speed = less time).',
    examplesLabel: 'Examples:',
    examples: {
      recipe: { label: 'Recipe (servings)', unitA: 'servings', unitB: 'grams' },
      fuel: { label: 'Fuel (km / liters)', unitA: 'km', unitB: 'liters' },
      workers: { label: 'Workers & days', unitA: 'workers', unitB: 'days' },
      speed: { label: 'Speed & time', unitA: 'km/h', unitB: 'hours' },
    },
    unitALabel: 'Column A label (optional)',
    unitAPlaceholder: 'e.g. servings, workers...',
    unitBLabel: 'Column B label (optional)',
    unitBPlaceholder: 'e.g. grams, days, €...',
    defaultUnitA: 'units A',
    defaultUnitB: 'units B',
    ifA: 'If A',
    equalsB: 'Corresponds to B',
    thenC: 'Then C',
    resultX: 'Result X',
    valAPlaceholder: 'Value A',
    valBPlaceholder: 'Value B',
    valCPlaceholder: 'Value C',
    swapAC: 'Swap A and C',
    checkValuesTitle: 'Check your values',
    resultDirectLabel: 'Result (Direct Rule of Three)',
    resultInverseLabel: 'Result (Inverse Rule of Three)',
    appliedFormulaLabel: 'Applied formula',
    stepsTitle: 'Step-by-step calculation',
  },
  ruleOfThreeMath: {
    missingError: 'Fill in values A, B, and C to compute result X.',
    directZeroAError: 'Value A cannot be 0 in a direct rule of three (division by zero).',
    inverseZeroCError: 'Value C cannot be 0 in an inverse rule of three (division by zero).',
    inverseZeroAError: 'Initial value A must be non-zero to establish an inverse proportion.',
    directConstantLabel: 'Unit ratio (B ÷ A)',
    inverseConstantLabel: 'Constant product (A × B)',
    perOneUnit: (unitA) => `Per 1 ${unitA}`,
    unitRateValue: (rate, unitB) => `${rate} ${unitB}`,
    directSteps: (uA, uB, a, b, c, rate, prod, x) => [
      `Direct relationship: changing ${uA} changes ${uB} in the exact same ratio.`,
      `Unit rate per 1 ${uA}: ${b} ÷ ${a} = ${rate} ${uB}.`,
      `Cross-multiply (B × C): ${b} × ${c} = ${prod}.`,
      `Divide by A: ${prod} ÷ ${a} = ${x} ${uB}.`,
    ],
    directVerify: (ba, xc) => `Proportionality check: B/A = ${ba} and X/C = ${xc}.`,
    inverseSteps: (uA, uB, a, b, c, prod, x) => [
      `Inverse relationship: if ${uA} increases, ${uB} decreases while keeping their product constant.`,
      `Multiply the known pair (A × B): ${a} × ${b} = ${prod}.`,
      `Divide that constant product by C: ${prod} ÷ ${c} = ${x} ${uB}.`,
    ],
    inverseVerify: (ab, cx) => `Inverse check: A × B = ${ab} and C × X = ${cx}.`,
  },
  whatsapp: {
    pendingPct: 'CalculaProporcion — Calculation incomplete.',
    pendingDist: 'CalculaProporcion — Split incomplete.',
    pendingRule: 'CalculaProporcion — Rule of three incomplete.',
    resultWord: 'Result',
    formulaWord: 'Formula',
    totalToSplit: 'Total to split',
    totalAllocated: 'Total allocated',
    directTitle: 'Direct Rule of Three',
    inverseTitle: 'Inverse Rule of Three',
    ifWord: 'If',
    forWord: 'For',
  },
  contextualAffiliate: {
    ariaLabel: 'Recommended hardware and stationery on Amazon Spain',
    badgeLabel: 'Amazon.es',
    disclosureShort:
      'Affiliate links · As an Amazon Associate, I earn from qualifying purchases on Amazon.es.',
    byModule: {
      percentages: {
        title: 'Recommended gear for VAT, pricing & margin work',
        subtitle: 'Practical desk tools matched to your discount and tax calculations',
        items: [
          {
            title: 'Desktop Financial & Tax Calculator',
            category: 'VAT & Pricing',
            description:
              'Solar dual-power desk calculator with dedicated TAX+/TAX− and margin keys for quick invoice checks.',
            href: buildAmazonEsSearchUrl('calculadora financiera oficina impuestos'),
            ctaLabel: 'View on Amazon.es',
          },
          {
            title: 'Income, Expense & VAT Ledger Book',
            category: 'Freelancers & SMB',
            description:
              'Structured accounting notebook for logging net bases, VAT amounts, and daily receipts.',
            href: buildAmazonEsSearchUrl('libro contabilidad ingresos gastos autonomos'),
            ctaLabel: 'View on Amazon.es',
          },
          {
            title: '12-Digit Large Display Desk Calculator',
            category: 'Retail & Office',
            description:
              'Ergonomic angled screen with direct percentage and grand-total keys for everyday counter checks.',
            href: buildAmazonEsSearchUrl('calculadora escritorio 12 digitos gran pantalla'),
            ctaLabel: 'View on Amazon.es',
          },
        ],
      },
      distribution: {
        title: 'Recommended tools for shared budgets & expense tracking',
        subtitle: 'Physical organizers to keep group bills, trips, and receipts tidy',
        items: [
          {
            title: 'Budget & Shared Expense Binder',
            category: 'Household & Trips',
            description:
              'Zippered organizer with labeled envelopes and tracking sheets for shared group budgets.',
            href: buildAmazonEsSearchUrl('carpeta presupuesto ahorro sobres gastos'),
            ctaLabel: 'View on Amazon.es',
          },
          {
            title: 'Accordion Receipt & Invoice Organizer',
            category: 'Paperwork',
            description:
              'Multi-pocket expanding file folder to separate tickets, utility bills, and shared invoices.',
            href: buildAmazonEsSearchUrl('archivador acordeon facturas recibos'),
            ctaLabel: 'View on Amazon.es',
          },
          {
            title: 'Dual-Screen 12-Digit Desk Calculator',
            category: 'Verification',
            description:
              'Check split totals and verify step-by-step sums side by side on your desk.',
            href: buildAmazonEsSearchUrl('calculadora escritorio 12 digitos doble pantalla'),
            ctaLabel: 'View on Amazon.es',
          },
        ],
      },
      'rule-of-three': {
        title: 'Recommended instruments for measurements & scaling',
        subtitle: 'Precision tools for recipes, DIY projects, workshops, and study',
        items: [
          {
            title: 'Digital Precision Kitchen Scale (1g)',
            category: 'Recipes & Ratios',
            description:
              'Stainless steel digital scale with tare function to scale recipe weights proportionally.',
            href: buildAmazonEsSearchUrl('bascula cocina digital precision gramos'),
            ctaLabel: 'View on Amazon.es',
          },
          {
            title: 'Laser Distance Meter & Measure',
            category: 'DIY & Construction',
            description:
              'Compact laser measurer for calculating wall areas, paint coverage, and material ratios.',
            href: buildAmazonEsSearchUrl('medidor laser distancia obra bricolaje'),
            ctaLabel: 'View on Amazon.es',
          },
          {
            title: 'Scientific Calculator (Fractions & Ratios)',
            category: 'Study & Engineering',
            description:
              'Natural textbook display scientific calculator for proportions, conversions, and STEM work.',
            href: buildAmazonEsSearchUrl('calculadora cientifica casio fx'),
            ctaLabel: 'View on Amazon.es',
          },
        ],
      },
    },
  },
  seoSection: {
    examplesTitle: 'Worked step-by-step examples',
    examplesSubtitle:
      'Everyday scenarios for reverse percentages, VAT extraction, weighted splits by days, and rule of three. Click any example to load it.',
    loadInCalculator: 'Load in calculator',
    resultPrefix: 'Result',
    workedExamples: [
      {
        id: 'ex-inverse-discount',
        category: 'Reverse percentage',
        title: 'Original price after a 30% discount',
        problem: 'You bought a jacket for 84 € with a 30% discount applied. What was its original price?',
        formula: 'Original price = 84 ÷ (1 − 0.30) = 84 ÷ 0.70',
        steps: [
          'After a 30% discount, you pay 70% (0.70) of the initial price.',
          'Divide 84 € by 0.70 to get exactly 120.00 €.',
          'Real savings: 120 € − 84 € = 36 € (30% of 120 €).',
        ],
        answer: '120.00 € (not 109.20 €)',
      },
      {
        id: 'ex-remove-iva',
        category: 'VAT breakdown',
        title: 'Remove 21% VAT from a 363 € invoice',
        problem: 'A supplier sends a gross bill of 363 € including 21% VAT. What is the net taxable base?',
        formula: 'Net base = 363 ÷ 1.21',
        steps: [
          'The gross price equals 121% of the net base.',
          'Divide 363 € by 1.21 to obtain the net base: 300.00 €.',
          'The VAT amount is the difference: 363 € − 300 € = 63.00 €.',
        ],
        answer: 'Net: 300.00 € · VAT: 63.00 €',
      },
      {
        id: 'ex-split-days',
        category: 'Weighted split',
        title: 'Split a 450 € rental bill by days stayed',
        problem: 'Three friends rent an apartment for 450 €. Ana stays 5 days, Carlos 3 days, and Lucía 2 days.',
        formula: 'Share i = 450 × (days i ÷ 10 total days)',
        steps: [
          'Add total weight: 5 + 3 + 2 = 10 days.',
          'Cost per day: 450 € ÷ 10 = 45 €/day.',
          'Ana pays 225 € (50%), Carlos 135 € (30%), and Lucía 90 € (20%).',
        ],
        answer: '225 € · 135 € · 90 €',
      },
      {
        id: 'ex-rule-inverse',
        category: 'Inverse rule of three',
        title: 'Workers and days to finish a job',
        problem: 'If 4 painters take 6 days to paint a warehouse, how many days will 8 painters take at the same pace?',
        formula: 'X = (4 × 6) ÷ 8',
        steps: [
          'This is inverse because doubling painters halves the required time.',
          'Multiply the known pair: 4 × 6 = 24 worker-days.',
          'Divide by the 8 available painters: 24 ÷ 8 = 3 days.',
        ],
        answer: '3 days',
      },
    ],
    mistakesTitle: 'Common mistakes with percentages and proportions',
    mistakesSubtitle: 'Why common mental shortcuts fail and how to verify every calculation in seconds.',
    wrongLabel: 'Common mistake',
    rightLabel: 'Exact method',
    commonMistakes: [
      {
        title: 'Adding the discount % back onto the sale price',
        wrongApproach: 'Multiplying the final price by (1 + discount/100).',
        rightApproach: 'Dividing the final price by (1 − discount/100).',
        numericalProof:
          'If you paid 80 € after 20% off, adding 20% yields 96 € (wrong, since 20% off 96 € is 76.80 €). Dividing 80 ÷ 0.80 recovers the exact 100 €.',
      },
      {
        title: 'Subtracting 21% directly to remove VAT',
        wrongApproach: 'Computing Total × 0.79 to estimate the net base.',
        rightApproach: 'Dividing the gross total by 1.21 (or 1.10 for 10% VAT).',
        numericalProof:
          'On a 121 € purchase, subtracting 21% gives 95.59 € (incorrect). Dividing 121 ÷ 1.21 yields the exact 100.00 € net base.',
      },
      {
        title: 'Using direct rule of three for inverse problems',
        wrongApproach: 'Applying (B × C) ÷ A to speed/time or workers/days problems.',
        rightApproach: 'Checking if more A means less B and applying X = (A × B) ÷ C.',
        numericalProof:
          'If 2 taps fill a tank in 6 hours, 4 taps do not take 12 hours (direct), they take (2 × 6) ÷ 4 = 3 hours (inverse).',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faqSubtitle: 'Direct answers to everyday commercial, tax, and household proportion questions.',
    goPercentages: 'Go to Percentages',
    goDistribution: 'Go to Split',
    goRuleOfThree: 'Go to Rule of 3',
    faqItems: [
      {
        question: 'How do I calculate the original price before a discount?',
        answer:
          'Divide the final price paid by (1 − discount/100). For example, if an item costs 75 € after a 25% discount, divide 75 ÷ 0.75 = 100 €. Real savings are 25 €.',
      },
      {
        question: 'Why does adding the same percentage back not reverse a discount?',
        answer:
          'Because the discount was taken off a larger original base, whereas adding that percentage back applies it to the smaller discounted price. That is why −20% followed by +20% always yields less than 100%.',
      },
      {
        question: 'How do I remove VAT (21%, 10%, or 4%) from a receipt?',
        answer:
          'Select "Remove / Add VAT", choose "Remove VAT", and enter the gross total. The calculator divides by 1.21 (21%), 1.10 (10%), or 1.04 (4%) to show the exact net base and tax fee.',
      },
      {
        question: 'How does cent-exact proportional splitting work?',
        answer:
          'Splitting amounts with decimals can leave 1 or 2 leftover cents under naive rounding. CalculaProporcion uses the Largest Remainder (Hamilton) method to allocate floor cents first and assign remaining cents to the largest fractional remainders.',
      },
      {
        question: 'What is the difference between percentage split and weighted split?',
        answer:
          'In percentage mode you enter each share directly as a % (with 1-click 100% normalization). In weighted mode you enter real units like days stayed, hours worked, or square meters, and the tool converts them automatically into exact shares.',
      },
      {
        question: 'Is my calculation data stored or sent to any server?',
        answer:
          'No. Every calculation runs 100% locally and deterministically in your browser. Your last state is saved only in localStorage, and sharing encodes the values directly inside the URL.',
      },
    ],
    resourcesTitle: 'Recommended gear & tools on Amazon.es',
    resourcesDisclosure: 'Affiliate selection · Links exclusively to Amazon.es',
    resourcesLegalNotice:
      'Legal disclosure: As an Amazon Associate, I earn from qualifying purchases. All product recommendations link exclusively to www.amazon.es.',
    resources: [
      {
        title: 'Desktop financial & tax calculators',
        category: 'Office & VAT hardware',
        description:
          'Dual-power solar desk calculators with dedicated tax and margin keys for shops, freelancers, and offices.',
        href: buildAmazonEsSearchUrl('calculadora financiera oficina casio'),
        ctaLabel: 'Browse on Amazon.es',
      },
      {
        title: 'Scientific calculators for proportions & study',
        category: 'Education & STEM',
        description:
          'Natural-display calculators for direct/inverse rule of three, fractions, and technical calculations.',
        href: buildAmazonEsSearchUrl('calculadora cientifica escolar universidad'),
        ctaLabel: 'Browse on Amazon.es',
      },
      {
        title: 'Accounting & expense ledger books',
        category: 'Freelancer & household',
        description:
          'Physical ledger books and invoice organizers to track shared expenses, receipts, and quarterly taxes.',
        href: buildAmazonEsSearchUrl('libro contabilidad ingresos gastos autonomos'),
        ctaLabel: 'Browse on Amazon.es',
      },
      {
        title: 'Digital precision scales for recipe scaling',
        category: 'Kitchen & workshop',
        description:
          'Gram-accurate digital scales ideal when scaling recipe ingredients or mixtures via rule of three.',
        href: buildAmazonEsSearchUrl('bascula cocina digital precision gramos'),
        ctaLabel: 'Browse on Amazon.es',
      },
    ],
  },
  footer: {
    tagline:
      '100% local deterministic math in your browser · Rule of three, reverse percentages, and cent-exact splitting.',
    affiliateNotice:
      'Affiliate disclosure: As an Amazon Associate, I earn from qualifying purchases made through product links to Amazon.es.',
    navAria: 'Footer quick links',
    linkPercentages: 'Reverse percentage & VAT',
    linkDistribution: 'Proportional split',
    linkRuleOfThree: 'Direct & inverse rule of three',
  },
};
