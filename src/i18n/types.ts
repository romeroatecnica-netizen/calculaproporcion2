import { ModuleId, PercentageSubMode, SeoContext } from '../types/calculator';

export interface WorkedExampleItem {
  id: string;
  category: string;
  title: string;
  problem: string;
  formula: string;
  steps: string[];
  answer: string;
}

export interface CommonMistakeItem {
  title: string;
  wrongApproach: string;
  rightApproach: string;
  numericalProof: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RecommendedResourceItem {
  title: string;
  category: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export interface TranslationDictionary {
  meta: {
    siteName: string;
    appDescription: string;
    howToName: string;
    howToDescription: string;
    howToSteps: Array<{ name: string; text: string }>;
  };
  header: {
    navPercentages: string;
    navDistribution: string;
    navRuleOfThree: string;
    navGuidesFaq: string;
    shareCalculation: string;
    linkCopied: string;
    navAriaLabel: string;
  };
  preferences: {
    mobileTabsAria: string;
    separatorLabel: string;
    separatorEsTitle: string;
    separatorUsTitle: string;
    unitLabel: string;
    noSymbol: string;
    languageLabel: string;
    reset: string;
  };
  actions: {
    copyWhatsApp: string;
    copiedWhatsApp: string;
    copyLink: string;
    linkCopied: string;
    printPdf: string;
  };
  adSlot: {
    ariaLabel: string;
    reservedPrefix: string;
    intermediateLabel: string;
    bottomLabel: string;
    clsNote: string;
  };
  seoByMode: {
    percentages: Record<PercentageSubMode, SeoContext>;
    distribution: {
      percentage: SeoContext;
      weight: SeoContext;
    };
    ruleOfThree: {
      direct: SeoContext;
      inverse: SeoContext;
    };
  };
  percentagesUi: {
    sectionAria: string;
    subModeAria: string;
    tabs: {
      inverseDiscount: string;
      tax: string;
      partOfWhole: string;
      pctChange: string;
    };
    presetsLabel: string;
    presets: {
      dto20: string;
      dto30: string;
      iva21: string;
      iva10: string;
    };
    taxToggle: {
      remove: string;
      add: string;
    };
    labels: {
      finalPaid: string;
      totalWithTax: string;
      netBase: string;
      discountApplied: string;
      taxRate: string;
      partA: string;
      initialA: string;
      wholeB: string;
      finalB: string;
    };
    hints: {
      inverseDiscount: string;
      taxRemove: string;
      taxAdd: string;
    };
    placeholders: {
      amount: string;
      rate: string;
      valA: string;
      valB: string;
    };
    swapAB: string;
    checkInputsTitle: string;
    avoidClassicError: string;
    formulaStepsTitle: string;
  };
  percentagesMath: {
    inverseDiscount: {
      primaryLabel: string;
      missingError: string;
      negativePriceError: string;
      over100Error: string;
      negativePctError: string;
      formulaBase: string;
      formulaLabel: string;
      realSavings: string;
      paidPctOfTotal: string;
      divisorFactor: string;
      step1: (discount: string, paidPct: string) => string;
      step2: (discount: string, factor: string) => string;
      step3: (finalStr: string, factor: string, original: string) => string;
      step4: (original: string, finalStr: string, savings: string) => string;
      verify: (original: string, discount: string, savings: string, checkVal: string) => string;
      mistakeExplain: (discount: string, finalStr: string, mult: string, wrong: string, diff: string) => string;
    };
    taxRemove: {
      primaryLabel: string;
      missingError: string;
      invalidRateError: string;
      formulaBase: string;
      formulaLabel: string;
      taxAmountLabel: (pct: string) => string;
      totalWithTaxLabel: string;
      divisorLabel: string;
      step1: (pct: string, totalPct: string) => string;
      step2: (pct: string, divisor: string) => string;
      step3: (divisor: string, totalNum: string, base: string) => string;
      step4: (totalMoney: string, base: string, taxMoney: string) => string;
      verify: (base: string, pct: string, taxCheck: string, totalCheck: string) => string;
      mistakeExplain: (pct: string, wrong: string, diff: string) => string;
    };
    taxAdd: {
      primaryLabel: string;
      missingError: string;
      formulaBase: string;
      formulaLabel: string;
      addedAmountLabel: (pct: string) => string;
      initialBaseLabel: string;
      multiplierLabel: string;
      step1: (base: string, pct: string, taxMoney: string) => string;
      step2: (base: string, taxMoney: string, total: string) => string;
      verify: (total: string, factor: string, checkBase: string) => string;
    };
    partOfWhole: {
      primaryLabel: string;
      missingError: string;
      zeroDivisorError: string;
      formulaBase: string;
      remainingTo100: string;
      differenceBA: string;
      decimalRatio: string;
      step1: (a: string, b: string, ratio: string) => string;
      step2: (ratio: string, pct: string) => string;
      verify: (pct: string, b: string, checkVal: string) => string;
    };
    pctChange: {
      missingError: string;
      zeroInitialError: string;
      formulaBase: string;
      increase: string;
      decrease: string;
      noChange: string;
      primaryPrefix: string;
      absDiffLabel: string;
      ratioLabel: string;
      step1: (b: string, a: string, diff: string) => string;
      step2: (diff: string, absA: string, ratio: string) => string;
      step3: (pctStr: string) => string;
      verify: (a: string, signOp: string, factorStr: string, b: string) => string;
    };
  };
  distributionUi: {
    sectionAria: string;
    totalLabel: string;
    totalPlaceholder: string;
    conceptLabel: string;
    conceptPlaceholder: string;
    defaultConcept: string;
    modePct: string;
    modeWeight: string;
    weightUnitLabel: string;
    weightUnits: string[];
    examplesLabel: string;
    examples: {
      trip: string;
      invoice: string;
      equal4: string;
    };
    exampleData: {
      tripConcept: string;
      tripUnit: string;
      invoiceConcept: string;
      invoicePart1: string;
      invoicePart2: string;
      equalConcept: string;
      personPrefix: string;
      partPrefix: string;
    };
    equalSplitBtn: string;
    normalizeBtn: string;
    addPartBtn: string;
    adjust100Link: string;
    statusBalanced: string;
    statusMissing: (sum: string, missing: string, money: string) => string;
    statusExcess: (sum: string, excess: string, money: string) => string;
    participantNameAria: (idx: number) => string;
    participantPlaceholder: (idx: number) => string;
    pctInputAria: string;
    weightInputAria: string;
    unitShort: string;
    removeAria: (name: string) => string;
    incompleteTitle: string;
    targetLabel: string;
    defaultUnitLabel: string;
    tableHeaders: {
      part: string;
      realPct: string;
      exact: string;
      final: string;
    };
    adjustmentTag: string;
    centExactOk: (count: number, totalStr: string) => string;
    centUnbalancedNote: (sumStr: string) => string;
    invalidTotalError: string;
    noParticipantsError: string;
    negativeValuesError: string;
    zeroWeightError: string;
  };
  ruleOfThreeUi: {
    sectionAria: string;
    directBtn: string;
    inverseBtn: string;
    directDesc: string;
    inverseDesc: string;
    examplesLabel: string;
    examples: {
      recipe: { label: string; unitA: string; unitB: string };
      fuel: { label: string; unitA: string; unitB: string };
      workers: { label: string; unitA: string; unitB: string };
      speed: { label: string; unitA: string; unitB: string };
    };
    unitALabel: string;
    unitAPlaceholder: string;
    unitBLabel: string;
    unitBPlaceholder: string;
    defaultUnitA: string;
    defaultUnitB: string;
    ifA: string;
    equalsB: string;
    thenC: string;
    resultX: string;
    valAPlaceholder: string;
    valBPlaceholder: string;
    valCPlaceholder: string;
    swapAC: string;
    checkValuesTitle: string;
    resultDirectLabel: string;
    resultInverseLabel: string;
    appliedFormulaLabel: string;
    stepsTitle: string;
  };
  ruleOfThreeMath: {
    missingError: string;
    directZeroAError: string;
    inverseZeroCError: string;
    inverseZeroAError: string;
    directConstantLabel: string;
    inverseConstantLabel: string;
    perOneUnit: (unitA: string) => string;
    unitRateValue: (rate: string, unitB: string) => string;
    directSteps: (
      unitA: string,
      unitB: string,
      a: string,
      b: string,
      c: string,
      unitRate: string,
      product: string,
      x: string
    ) => string[];
    directVerify: (ratioBA: string, ratioXC: string) => string;
    inverseSteps: (
      unitA: string,
      unitB: string,
      a: string,
      b: string,
      c: string,
      product: string,
      x: string
    ) => string[];
    inverseVerify: (prodAB: string, prodCX: string) => string;
  };
  whatsapp: {
    pendingPct: string;
    pendingDist: string;
    pendingRule: string;
    resultWord: string;
    formulaWord: string;
    totalToSplit: string;
    totalAllocated: string;
    directTitle: string;
    inverseTitle: string;
    ifWord: string;
    forWord: string;
  };
  contextualAffiliate: {
    ariaLabel: string;
    badgeLabel: string;
    disclosureShort: string;
    byModule: Record<
      ModuleId,
      {
        title: string;
        subtitle: string;
        items: RecommendedResourceItem[];
      }
    >;
  };
  seoSection: {
    examplesTitle: string;
    examplesSubtitle: string;
    loadInCalculator: string;
    resultPrefix: string;
    workedExamples: WorkedExampleItem[];
    mistakesTitle: string;
    mistakesSubtitle: string;
    wrongLabel: string;
    rightLabel: string;
    commonMistakes: CommonMistakeItem[];
    faqTitle: string;
    faqSubtitle: string;
    goPercentages: string;
    goDistribution: string;
    goRuleOfThree: string;
    faqItems: FaqItem[];
    resourcesTitle: string;
    resourcesDisclosure: string;
    resourcesLegalNotice: string;
    resources: RecommendedResourceItem[];
  };
  footer: {
    tagline: string;
    affiliateNotice: string;
    navAria: string;
    linkPercentages: string;
    linkDistribution: string;
    linkRuleOfThree: string;
  };
  moduleSwitcherOrder?: ModuleId[];
}
