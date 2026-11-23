import { TranslationDictionary } from '../types';

export const pt: TranslationDictionary = {
  meta: {
    siteName: 'CalculaProporcion',
    appDescription:
      'Calcule na hora o preço original antes de um desconto, retire ou adicione IVA, divida despesas ao cêntimo e resolva regras de três diretas e inversas.',
    howToName: 'Como calcular o preço original antes de um desconto (percentagem inversa)',
    howToDescription:
      'Método exato para recuperar o preço inicial de um produto a partir do valor final pago e da percentagem de desconto aplicada.',
    howToSteps: [
      {
        name: 'Converter a percentagem de desconto em proporção decimal',
        text: 'Divida a percentagem de desconto por 100. Por exemplo, 20 % equivale a 0,20.',
      },
      {
        name: 'Calcular o fator restante',
        text: 'Subtraia essa proporção a 1: 1 - 0,20 = 0,80. O preço final representa 80 % do valor original.',
      },
      {
        name: 'Dividir o preço final pelo fator restante',
        text: 'Divida o preço pago por 0,80. Se pagou 80 €, 80 / 0,80 = 100 € de preço original (e não 96 €).',
      },
    ],
  },
  header: {
    navPercentages: 'Percentagens e IVA',
    navDistribution: 'Partilha',
    navRuleOfThree: 'Regra de Três',
    navGuidesFaq: 'Guias e FAQ',
    shareCalculation: 'Partilhar cálculo',
    linkCopied: 'Ligação copiada',
    navAriaLabel: 'Módulos de cálculo',
  },
  preferences: {
    mobileTabsAria: 'Selecionar calculadora',
    separatorLabel: 'Formato:',
    separatorEsTitle: 'Separador europeu: ponto nos milhares e vírgula decimal',
    separatorUsTitle: 'Separador internacional: vírgula nos milhares e ponto decimal',
    unitLabel: 'Unidade:',
    noSymbol: 'Sem símbolo',
    languageLabel: 'Idioma:',
    reset: 'Repor',
  },
  actions: {
    copyWhatsApp: 'Copiar para WhatsApp',
    copiedWhatsApp: 'Copiado para WhatsApp',
    copyLink: 'Copiar ligação',
    linkCopied: 'Ligação copiada',
    printPdf: 'Imprimir / PDF',
  },
  adSlot: {
    ariaLabel: 'Espaço publicitário',
    reservedPrefix: 'Espaço publicitário reservado',
    intermediateLabel: 'Banner intermédio 728×90 / responsivo',
    bottomLabel: 'Banner inferior 728×90 / responsivo',
    clsNote: 'Altura mínima fixa para evitar saltos visuais no layout (CLS = 0)',
  },
  seoByMode: {
    percentages: {
      'inverse-discount': {
        title: 'Calcular preço original antes do desconto (Percentagem inversa) | CalculaProporcion',
        metaDescription:
          'Calcule instantaneamente o preço original antes de um desconto aplicado. Evite erros com a fórmula exata de percentagem inversa.',
        h1: 'Como calcular o preço original antes de um desconto',
        subtitle:
          'Introduza o preço final pago e a percentagem de desconto para recuperar o valor original exato e a poupança real.',
        contextLabel: 'Módulo 01 · Percentagem inversa',
      },
      'tax-remove': {
        title: 'Retirar o IVA a um preço (Calcular valor base sem IVA) | CalculaProporcion',
        metaDescription:
          'Desdobre o IVA de qualquer fatura ou recibo em segundos. Calcule a base tributável exata retirando 23 %, 21 %, 10 % ou qualquer taxa.',
        h1: 'Retirar o IVA a um preço e obter a base líquida',
        subtitle:
          'Separe automaticamente o valor base sem imposto e o montante de IVA a partir do total com imposto incluído.',
        contextLabel: 'Módulo 01 · Cálculo sem IVA',
      },
      'tax-add': {
        title: 'Adicionar IVA ou percentagem a um valor base | CalculaProporcion',
        metaDescription:
          'Adicione 23 %, 21 %, 10 % ou qualquer percentagem a um valor líquido para obter o imposto e o total final exato.',
        h1: 'Adicionar IVA ou acréscimo percentual a um valor base',
        subtitle:
          'Calcule o valor exato do imposto ou acréscimo e obtenha o preço final pronto para faturar.',
        contextLabel: 'Módulo 01 · Adicionar percentagem',
      },
      'part-of-whole': {
        title: 'Calcular que percentagem é A de B | CalculaProporcion',
        metaDescription:
          'Descubra que percentagem representa um valor A em relação a um total B com cálculo passo a passo.',
        h1: 'Calcular que percentagem representa uma quantidade do total',
        subtitle:
          'Obtenha a proporção exata que um valor A representa face a uma referência B e veja a percentagem restante.',
        contextLabel: 'Módulo 01 · Proporção percentual',
      },
      'pct-change': {
        title: 'Calculadora de variação percentual (subida ou descida) | CalculaProporcion',
        metaDescription:
          'Meça a percentagem de aumento ou redução entre um valor inicial e um valor final com diferença absoluta.',
        h1: 'Calcular a variação percentual entre duas quantidades',
        subtitle:
          'Avalie com rigor a percentagem de subida ou descida entre um valor inicial A e um valor final B.',
        contextLabel: 'Módulo 01 · Variação percentual',
      },
    },
    distribution: {
      percentage: {
        title: 'Dividir despesas ou valores por percentagem ao cêntimo | CalculaProporcion',
        metaDescription:
          'Calculadora de repartição proporcional por percentagens. Normalização a 100 % num clique e ajuste exato de cêntimos.',
        h1: 'Dividir uma despesa ou valor por percentagem',
        subtitle:
          'Distribua faturas, orçamentos ou prémios entre participantes com normalização automática e acerto ao cêntimo.',
        contextLabel: 'Módulo 02 · Divisão por percentagem',
      },
      weight: {
        title: 'Repartição proporcional por pesos, dias ou partes | CalculaProporcion',
        metaDescription:
          'Divida contas de viagens, faturas ou lucros proporcionalmente por dias, horas, metros ou quotas ao cêntimo exato.',
        h1: 'Repartição proporcional por pesos, dias, horas ou partes',
        subtitle:
          'Atribua ponderações por estadia, consumo ou unidades e obtenha o valor exato de cada pessoa.',
        contextLabel: 'Módulo 02 · Divisão ponderada',
      },
    },
    ruleOfThree: {
      direct: {
        title: 'Calculadora de Regra de Três Direta online | CalculaProporcion',
        metaDescription:
          'Resolva regras de três diretas para receitas, consumos, orçamentos e conversões com explicação passo a passo.',
        h1: 'Calculadora de regra de três direta online',
        subtitle:
          'Calcule proporções diretas (mais de A dá mais de B) com taxa unitária, substituição e verificação automática.',
        contextLabel: 'Módulo 03 · Regra de três direta',
      },
      inverse: {
        title: 'Calculadora de Regra de Três Inversa passo a passo | CalculaProporcion',
        metaDescription:
          'Resolva problemas de regra de três inversa online (velocidade/tempo, trabalhadores/dias) com cálculo explicado.',
        h1: 'Calculadora de regra de três inversa passo a passo',
        subtitle:
          'Resolva grandezas inversamente proporcionais (mais recursos = menos tempo) com prova do produto constante.',
        contextLabel: 'Módulo 03 · Regra de três inversa',
      },
    },
  },
  percentagesUi: {
    sectionAria: 'Calculadora de percentagens diretas e inversas',
    subModeAria: 'Selecionar tipo de cálculo',
    tabs: {
      inverseDiscount: 'Desconto inverso',
      tax: 'Retirar / Adicionar IVA',
      partOfWhole: 'Que % é A de B',
      pctChange: 'Variação %',
    },
    presetsLabel: 'Atalhos:',
    presets: {
      dto20: 'Preço após 20 % desc.',
      dto30: 'Preço após 30 % desc.',
      iva21: 'Retirar 21 % IVA',
      iva10: 'Retirar 10 % IVA',
    },
    taxToggle: {
      remove: 'Retirar IVA (Total → Base)',
      add: 'Adicionar IVA (Base → Total)',
    },
    labels: {
      finalPaid: 'Preço final pago',
      totalWithTax: 'Valor total (com IVA)',
      netBase: 'Valor base (sem IVA)',
      discountApplied: 'Desconto aplicado',
      taxRate: 'Taxa de imposto / IVA',
      partA: 'Quantidade parcial (A)',
      initialA: 'Valor inicial (A)',
      wholeB: 'Total de referência (B)',
      finalB: 'Valor final (B)',
    },
    hints: {
      inverseDiscount: 'Valor pago após aplicação do desconto.',
      taxRemove: 'Valor bruto final do recibo ou fatura.',
      taxAdd: 'Base tributável líquida antes de impostos.',
    },
    placeholders: {
      amount: 'Ex. 80,00',
      rate: 'Ex. 20',
      valA: 'Ex. 35',
      valB: 'Ex. 140',
    },
    swapAB: 'Trocar A e B',
    checkInputsTitle: 'Verifique os valores',
    avoidClassicError: 'Porque não é',
    formulaStepsTitle: 'Fórmula e desenvolvimento passo a passo',
  },
  percentagesMath: {
    inverseDiscount: {
      primaryLabel: 'Preço original antes do desconto',
      missingError: 'Introduza o preço final pago e a percentagem de desconto.',
      negativePriceError: 'O preço final não pode ser negativo.',
      over100Error: 'O desconto não pode ser igual ou superior a 100 %.',
      negativePctError: 'A percentagem de desconto deve ser igual ou superior a 0 %.',
      formulaBase: 'Preço original = Preço final ÷ (1 − Desconto / 100)',
      formulaLabel: 'Preço original',
      realSavings: 'Poupança real obtida',
      paidPctOfTotal: 'Percentagem paga do original',
      divisorFactor: 'Fator divisor aplicado',
      step1: (d, paid) => `Com ${d} % de desconto, o valor pago representa ${paid} % do preço original.`,
      step2: (d, factor) => `Calculamos o fator restante: 1 − (${d} ÷ 100) = ${factor}.`,
      step3: (f, factor, orig) => `Dividimos o preço final pelo fator: ${f} ÷ ${factor} = ${orig}.`,
      step4: (orig, f, sav) => `Poupança real: ${orig} − ${f} = ${sav}.`,
      verify: (orig, d, sav, checkVal) => `Verificação direta: ${orig} − ${d} % (${sav}) = ${checkVal}.`,
      mistakeExplain: (d, f, mult, wrong, diff) =>
        `Erro comum evitado: somar ${d} % diretamente ao preço com desconto (${f} × ${mult}) daria ${wrong}, ficando ${diff} abaixo do valor real.`,
    },
    taxRemove: {
      primaryLabel: 'Base tributável (sem IVA)',
      missingError: 'Introduza o valor total com imposto e a taxa de IVA.',
      invalidRateError: 'A taxa de imposto deve ser superior a −100 %.',
      formulaBase: 'Base = Total ÷ (1 + IVA / 100)',
      formulaLabel: 'Base',
      taxAmountLabel: (pct) => `Valor do imposto (${pct} %)`,
      totalWithTaxLabel: 'Valor total com IVA',
      divisorLabel: 'Divisor aplicado',
      step1: (pct, totalPct) => `O total pago inclui 100 % da base mais ${pct} % de imposto, ou seja, ${totalPct} %.`,
      step2: (pct, div) => `Divisor decimal: 1 + (${pct} ÷ 100) = ${div}.`,
      step3: (div, totalNum, base) => `Dividimos o total por ${div}: ${totalNum} ÷ ${div} = ${base}.`,
      step4: (totalMoney, base, taxMoney) => `O imposto corresponde a: ${totalMoney} − ${base} = ${taxMoney}.`,
      verify: (base, pct, taxCheck, totalCheck) =>
        `Verificação: ${base} + ${pct} % (${taxCheck}) = ${totalCheck}.`,
      mistakeExplain: (pct, wrong, diff) =>
        `Subtrair ${pct} % diretamente ao total (${wrong}) gera um erro de ${diff}, pois o IVA incide sobre a base e não sobre o total.`,
    },
    taxAdd: {
      primaryLabel: 'Valor total com acréscimo',
      missingError: 'Introduza o valor base e a percentagem a adicionar.',
      formulaBase: 'Total = Base × (1 + Taxa / 100)',
      formulaLabel: 'Total',
      addedAmountLabel: (pct) => `Valor adicionado (${pct} %)`,
      initialBaseLabel: 'Base inicial',
      multiplierLabel: 'Fator multiplicador',
      step1: (base, pct, taxMoney) => `Calculamos a parcela: ${base} × (${pct} ÷ 100) = ${taxMoney}.`,
      step2: (base, taxMoney, total) => `Somamos à base: ${base} + ${taxMoney} = ${total}.`,
      verify: (total, factor, checkBase) => `Verificação inversa: ${total} ÷ ${factor} = ${checkBase}.`,
    },
    partOfWhole: {
      primaryLabel: 'Percentagem que A representa de B',
      missingError: 'Introduza a quantidade A e o total de referência B.',
      zeroDivisorError: 'O total B não pode ser 0 (divisão por zero).',
      formulaBase: 'Percentagem = (A ÷ B) × 100',
      remainingTo100: 'Restante até 100 %',
      differenceBA: 'Diferença (B − A)',
      decimalRatio: 'Proporção decimal (A / B)',
      step1: (a, b, ratio) => `Dividimos a parte (A) pelo total (B): ${a} ÷ ${b} = ${ratio}.`,
      step2: (ratio, pct) => `Multiplicamos por 100: ${ratio} × 100 = ${pct} %.`,
      verify: (pct, b, checkVal) => `Verificação: ${pct} % de ${b} equivale a ${checkVal}.`,
    },
    pctChange: {
      missingError: 'Introduza o valor inicial (A) e o valor final (B).',
      zeroInitialError: 'O valor inicial (A) não pode ser 0 para calcular uma variação.',
      formulaBase: 'Variação % = ((B − A) ÷ |A|) × 100',
      increase: 'Subida',
      decrease: 'Descida',
      noChange: 'Sem variação',
      primaryPrefix: 'Variação percentual',
      absDiffLabel: 'Diferença absoluta (B − A)',
      ratioLabel: 'Rácio (B ÷ A)',
      step1: (b, a, diff) => `Diferença absoluta: ${b} − ${a} = ${diff}.`,
      step2: (diff, absA, ratio) => `Divisão pelo valor inicial: ${diff} ÷ ${absA} = ${ratio}.`,
      step3: (pctStr) => `Multiplicação por 100: ${pctStr} %.`,
      verify: (a, op, factorStr, b) => `Verificação: ${a} × (1 ${op} ${factorStr}) = ${b}.`,
    },
  },
  distributionUi: {
    sectionAria: 'Calculadora de repartição proporcional',
    totalLabel: 'Valor total a repartir',
    totalPlaceholder: 'Ex. 1200',
    conceptLabel: 'Descrição da partilha',
    conceptPlaceholder: 'Ex. Despesas partilhadas',
    defaultConcept: 'Repartição proporcional',
    modePct: 'Dividir por Percentagem (%)',
    modeWeight: 'Dividir por Pesos / Partes',
    weightUnitLabel: 'Unidade de peso:',
    weightUnits: ['dias', 'horas', 'metros', 'partes', 'pontos'],
    examplesLabel: 'Exemplos:',
    examples: {
      trip: 'Viagem por noites',
      invoice: 'Fatura 60 / 40',
      equal4: '4 pessoas iguais',
    },
    exampleData: {
      tripConcept: 'Alojamento fim de semana',
      tripUnit: 'noites',
      invoiceConcept: 'Fatura de projeto conjunto',
      invoicePart1: 'Design e estratégia',
      invoicePart2: 'Desenvolvimento técnico',
      equalConcept: 'Jantar de grupo',
      personPrefix: 'Pessoa',
      partPrefix: 'Parte',
    },
    equalSplitBtn: 'Partes iguais',
    normalizeBtn: 'Normalizar a 100 %',
    addPartBtn: 'Adicionar parte',
    adjust100Link: 'Ajustar a 100 %',
    statusBalanced: 'Soma total: 100 % · Acerto exato ao cêntimo.',
    statusMissing: (sum, missing, money) =>
      `Soma atual: ${sum} % · Faltam ${missing} % (${money} por atribuir).`,
    statusExcess: (sum, excess, money) =>
      `Soma atual: ${sum} % · Excesso de ${excess} % (${money} a mais).`,
    participantNameAria: (idx) => `Nome do participante ${idx}`,
    participantPlaceholder: (idx) => `Participante ${idx}`,
    pctInputAria: 'Percentagem',
    weightInputAria: 'Peso',
    unitShort: 'u.',
    removeAria: (name) => `Remover ${name}`,
    incompleteTitle: 'Dados incompletos',
    targetLabel: 'Objetivo',
    defaultUnitLabel: 'partes',
    tableHeaders: {
      part: 'Parte',
      realPct: '% real',
      exact: 'Exato',
      final: 'Final',
    },
    adjustmentTag: 'ajuste',
    centExactOk: (count, totalStr) =>
      `Acerto exato ao cêntimo: a soma das ${count} partes (${totalStr}) coincide a 100 % com o total.`,
    centUnbalancedNote: (sumStr) =>
      `As percentagens somam ${sumStr} %. Use Normalizar a 100 % para equilibrar o total.`,
    invalidTotalError: 'Introduza um valor total válido (igual ou superior a 0).',
    noParticipantsError: 'Adicione pelo menos um participante para fazer a divisão.',
    negativeValuesError: 'As percentagens ou pesos não podem ser negativos.',
    zeroWeightError: 'A soma dos pesos deve ser superior a 0.',
  },
  ruleOfThreeUi: {
    sectionAria: 'Calculadora de regra de três direta e inversa',
    directBtn: 'Regra de Três Direta',
    inverseBtn: 'Regra de Três Inversa',
    directDesc: 'Proporção direta: quando A aumenta, B aumenta na mesma proporção.',
    inverseDesc: 'Proporção inversa: quando A aumenta, B diminui (ex. mais velocidade = menos tempo).',
    examplesLabel: 'Exemplos:',
    examples: {
      recipe: { label: 'Receita (pessoas)', unitA: 'pessoas', unitB: 'gramas' },
      fuel: { label: 'Consumo (km / litros)', unitA: 'km', unitB: 'litros' },
      workers: { label: 'Trabalhadores e dias', unitA: 'trabalhadores', unitB: 'dias' },
      speed: { label: 'Velocidade e tempo', unitA: 'km/h', unitB: 'horas' },
    },
    unitALabel: 'Etiqueta coluna A (opcional)',
    unitAPlaceholder: 'Ex. pessoas, trabalhadores...',
    unitBLabel: 'Etiqueta coluna B (opcional)',
    unitBPlaceholder: 'Ex. gramas, dias, €...',
    defaultUnitA: 'unidades A',
    defaultUnitB: 'unidades B',
    ifA: 'Se A',
    equalsB: 'Equivale a B',
    thenC: 'Então C',
    resultX: 'Resultado X',
    valAPlaceholder: 'Valor A',
    valBPlaceholder: 'Valor B',
    valCPlaceholder: 'Valor C',
    swapAC: 'Trocar A e C',
    checkValuesTitle: 'Verifique os valores',
    resultDirectLabel: 'Resultado (Regra de Três Direta)',
    resultInverseLabel: 'Resultado (Regra de Três Inversa)',
    appliedFormulaLabel: 'Fórmula aplicada',
    stepsTitle: 'Desenvolvimento passo a passo',
  },
  ruleOfThreeMath: {
    missingError: 'Preencha os valores A, B e C para calcular X.',
    directZeroAError: 'O valor A não pode ser 0 numa regra de três direta.',
    inverseZeroCError: 'O valor C não pode ser 0 numa regra de três inversa.',
    inverseZeroAError: 'O valor inicial A deve ser diferente de 0.',
    directConstantLabel: 'Razão unitária (B ÷ A)',
    inverseConstantLabel: 'Produto constante (A × B)',
    perOneUnit: (unitA) => `Por cada 1 ${unitA}`,
    unitRateValue: (rate, unitB) => `${rate} ${unitB}`,
    directSteps: (uA, uB, a, b, c, rate, prod, x) => [
      `Relação direta: ao variar ${uA}, ${uB} varia na mesma proporção.`,
      `Razão por 1 ${uA}: ${b} ÷ ${a} = ${rate} ${uB}.`,
      `Multiplicação cruzada (B × C): ${b} × ${c} = ${prod}.`,
      `Divisão por A: ${prod} ÷ ${a} = ${x} ${uB}.`,
    ],
    directVerify: (ba, xc) => `Verificação de proporcionalidade: B/A = ${ba} e X/C = ${xc}.`,
    inverseSteps: (uA, uB, a, b, c, prod, x) => [
      `Relação inversa: se ${uA} aumenta, ${uB} diminui mantendo o produto constante.`,
      `Multiplicação do par conhecido (A × B): ${a} × ${b} = ${prod}.`,
      `Divisão por C: ${prod} ÷ ${c} = ${x} ${uB}.`,
    ],
    inverseVerify: (ab, cx) => `Verificação inversa: A × B = ${ab} e C × X = ${cx}.`,
  },
  whatsapp: {
    pendingPct: 'CalculaProporcion — Cálculo por concluir.',
    pendingDist: 'CalculaProporcion — Repartição por concluir.',
    pendingRule: 'CalculaProporcion — Regra de três por concluir.',
    resultWord: 'Resultado',
    formulaWord: 'Fórmula',
    totalToSplit: 'Total a repartir',
    totalAllocated: 'Total atribuído',
    directTitle: 'Regra de Três Direta',
    inverseTitle: 'Regra de Três Inversa',
    ifWord: 'Se',
    forWord: 'Para',
  },
  seoSection: {
    examplesTitle: 'Exemplos resolvidos passo a passo',
    examplesSubtitle:
      'Casos práticos de percentagem inversa, cálculo sem IVA, partilha por dias e regra de três. Clique para carregar na calculadora.',
    loadInCalculator: 'Carregar na calculadora',
    resultPrefix: 'Resultado',
    workedExamples: [
      {
        id: 'ex-inverse-discount',
        category: 'Percentagem inversa',
        title: 'Preço original após 30 % de desconto',
        problem: 'Comprou um casaco por 84 € com 30 % de desconto aplicado. Quanto custava originalmente?',
        formula: 'Preço original = 84 ÷ (1 − 0,30) = 84 ÷ 0,70',
        steps: [
          'Com 30 % de desconto, pagou 70 % (0,70) do valor inicial.',
          'Divide 84 € por 0,70 e obtém exatamente 120,00 €.',
          'Poupança real: 120 € − 84 € = 36 € (30 % de 120 €).',
        ],
        answer: '120,00 € (e não 109,20 €)',
      },
      {
        id: 'ex-remove-iva',
        category: 'Desdobramento IVA',
        title: 'Retirar 21 % de IVA de uma fatura de 363 €',
        problem: 'Um fornecedor emite uma fatura de 363 € com 21 % de IVA incluído. Qual é a base líquida?',
        formula: 'Base = 363 ÷ 1,21',
        steps: [
          'O preço final equivale a 121 % da base tributável.',
          'Divide 363 € por 1,21 para obter a base: 300,00 €.',
          'O IVA corresponde à diferença: 363 € − 300 € = 63,00 €.',
        ],
        answer: 'Base: 300,00 € · IVA: 63,00 €',
      },
      {
        id: 'ex-split-days',
        category: 'Divisão ponderada',
        title: 'Dividir 450 € consoante os dias de estadia',
        problem: 'Três amigos alugam uma casa por 450 €. Ana fica 5 dias, Carlos 3 dias e Lucía 2 dias.',
        formula: 'Parte i = 450 × (dias i ÷ 10 dias totais)',
        steps: [
          'Soma dos pesos: 5 + 3 + 2 = 10 dias.',
          'Custo diário: 450 € ÷ 10 = 45 €/dia.',
          'Ana paga 225 € (50 %), Carlos 135 € (30 %) e Lucía 90 € (20 %).',
        ],
        answer: '225 € · 135 € · 90 €',
      },
      {
        id: 'ex-rule-inverse',
        category: 'Regra de três inversa',
        title: 'Trabalhadores e dias para concluir uma obra',
        problem: 'Se 4 pintores demoram 6 dias a pintar um espaço, quantos dias demorarão 8 pintores?',
        formula: 'X = (4 × 6) ÷ 8',
        steps: [
          'É inversa porque duplicar a equipa reduz o tempo para metade.',
          'Multiplica o par conhecido: 4 × 6 = 24 dias de trabalho.',
          'Divide por 8 pintores: 24 ÷ 8 = 3 dias.',
        ],
        answer: '3 dias',
      },
    ],
    mistakesTitle: 'Erros frequentes em percentagens e proporções',
    mistakesSubtitle: 'Porque falham os atalhos mentais comuns e como confirmar cada cálculo.',
    wrongLabel: 'Erro habitual',
    rightLabel: 'Método exato',
    commonMistakes: [
      {
        title: 'Somar a % de desconto ao preço já reduzido',
        wrongApproach: 'Multiplicar o preço final por (1 + desconto/100).',
        rightApproach: 'Dividir o preço final por (1 − desconto/100).',
        numericalProof:
          'Se pagou 80 € após 20 % de desconto, somar 20 % daria 96 € (errado). Dividindo 80 ÷ 0,80 obtém exatamente 100 €.',
      },
      {
        title: 'Subtrair 21 % diretamente para tirar o IVA',
        wrongApproach: 'Calcular Total × 0,79 para tentar achar o valor sem IVA.',
        rightApproach: 'Dividir o total por 1,21 (ou 1,10 para IVA de 10 %).',
        numericalProof:
          'Numa compra de 121 €, subtrair 21 % daria 95,59 € (incorreto). Dividindo 121 ÷ 1,21 recupera os 100,00 € exatos.',
      },
      {
        title: 'Usar regra de três direta num problema inverso',
        wrongApproach: 'Aplicar (B × C) ÷ A em problemas de velocidade/tempo ou operários/dias.',
        rightApproach: 'Verificar se mais A significa menos B e aplicar X = (A × B) ÷ C.',
        numericalProof:
          'Se 2 torneiras enchem um tanque em 6 horas, 4 torneiras demoram (2 × 6) ÷ 4 = 3 horas (e não 12 horas).',
      },
    ],
    faqTitle: 'Perguntas frequentes',
    faqSubtitle: 'Respostas diretas às dúvidas mais comuns sobre cálculos comerciais e partilha de contas.',
    goPercentages: 'Ir para Percentagens',
    goDistribution: 'Ir para Partilha',
    goRuleOfThree: 'Ir para Regra de Três',
    faqItems: [
      {
        question: 'Como calcular o preço original antes de um desconto?',
        answer:
          'Divida o preço final pago por (1 − desconto/100). Por exemplo, se pagou 75 € após 25 % de desconto, faça 75 ÷ 0,75 = 100 €.',
      },
      {
        question: 'Porque não funciona somar a mesma percentagem para reverter um desconto?',
        answer:
          'Porque o desconto foi aplicado sobre um valor maior (o original), enquanto a soma seria aplicada sobre um valor menor (o preço reduzido). −20 % seguido de +20 % resulta sempre abaixo de 100 %.',
      },
      {
        question: 'Como retirar o IVA (21 %, 10 % ou 4 %) de uma fatura?',
        answer:
          'Abra «Retirar / Adicionar IVA», escolha «Retirar IVA» e insira o total. A calculadora divide por 1,21, 1,10 ou 1,04 para mostrar a base líquida exata.',
      },
      {
        question: 'Como funciona o acerto ao cêntimo na partilha proporcional?',
        answer:
          'O CalculaProporcion aplica o método do resto maior (Hamilton): atribui primeiro os cêntimos inteiros e distribui os cêntimos restantes pelas frações decimais mais altas.',
      },
      {
        question: 'Qual é a diferença entre repartir por percentagem e por pesos?',
        answer:
          'No modo percentagem indica diretamente a % de cada parte (com normalização a 100 %). No modo pesos usa unidades reais como dias, horas ou metros quadrados.',
      },
      {
        question: 'Os meus dados são enviados para algum servidor?',
        answer:
          'Não. Todos os cálculos correm 100 % localmente no navegador. O último estado fica apenas no localStorage e a partilha codifica os dados na própria ligação.',
      },
    ],
    resourcesTitle: 'Recursos e ferramentas recomendadas',
    resourcesDisclosure: 'Seleção editorial · Ligações externas e de afiliados contextuais',
    resources: [
      {
        title: 'Calculadoras científicas e financeiras de secretária',
        category: 'Material de escritório',
        description:
          'Modelos solares de duas linhas com tecla direta de percentagem e imposto para comércio e estudantes.',
        href: 'https://www.amazon.es/s?k=calculadora+financiera+oficina',
        ctaLabel: 'Ver modelos',
      },
      {
        title: 'Software de faturação e cálculo automático de IVA',
        category: 'Gestão para trabalhadores independentes',
        description:
          'Automatize orçamentos, faturas recorrentes e apuramento trimestral de IVA sem folhas manuais.',
        href: 'https://www.holded.com/es',
        ctaLabel: 'Explorar ferramenta',
      },
      {
        title: 'Folhas de cálculo colaborativas na nuvem',
        category: 'Produtividade',
        description:
          'Crie modelos mensais de despesas partilhadas e orçamentos proporcionais em tempo real.',
        href: 'https://workspace.google.com/intl/es/products/sheets/',
        ctaLabel: 'Abrir Google Sheets',
      },
    ],
  },
  footer: {
    tagline:
      'Cálculos matemáticos deterministas 100 % locais no navegador · Regra de três, percentagem inversa e partilha ao cêntimo.',
    navAria: 'Ligações rápidas do rodapé',
    linkPercentages: 'Percentagem inversa e IVA',
    linkDistribution: 'Repartição proporcional',
    linkRuleOfThree: 'Regra de três direta e inversa',
  },
};
