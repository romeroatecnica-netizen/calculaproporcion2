import { TranslationDictionary } from '../types';

export const fr: TranslationDictionary = {
  meta: {
    siteName: 'CalculaProporcion',
    appDescription:
      'Calculez instantanément le prix initial avant remise, retirez ou ajoutez la TVA, répartissez des dépenses au centime près et résolvez les règles de trois.',
    howToName: 'Comment calculer le prix initial avant une remise (pourcentage inversé)',
    howToDescription:
      'Méthode exacte pour retrouver le prix d’origine d’un produit à partir du prix final payé et du pourcentage de réduction appliqué.',
    howToSteps: [
      {
        name: 'Convertir le pourcentage de remise en proportion décimale',
        text: 'Divisez le pourcentage de remise par 100. Par exemple, 20 % équivaut à 0,20.',
      },
      {
        name: 'Calculer le facteur restant',
        text: 'Soustrayez cette proportion à 1 : 1 - 0,20 = 0,80. Le prix final représente 80 % du prix initial.',
      },
      {
        name: 'Diviser le prix final par le facteur restant',
        text: 'Divisez le prix payé par 0,80. Pour 80 € payés, 80 / 0,80 = 100 € de prix initial (et non 96 € en ajoutant 20 %).',
      },
    ],
  },
  header: {
    navPercentages: 'Pourcentages & TVA',
    navDistribution: 'Répartition',
    navRuleOfThree: 'Règle de trois',
    navGuidesFaq: 'Guides & FAQ',
    shareCalculation: 'Partager le calcul',
    linkCopied: 'Lien copié',
    navAriaLabel: 'Modules de calcul',
  },
  preferences: {
    mobileTabsAria: 'Choisir une calculatrice',
    separatorLabel: 'Format :',
    separatorEsTitle: 'Séparateur européen : point pour les milliers, virgule décimale',
    separatorUsTitle: 'Séparateur international : virgule pour les milliers, point décimal',
    unitLabel: 'Unité :',
    noSymbol: 'Sans symbole',
    languageLabel: 'Langue :',
    reset: 'Réinitialiser',
  },
  actions: {
    copyWhatsApp: 'Copier pour WhatsApp',
    copiedWhatsApp: 'Copié pour WhatsApp',
    copyLink: 'Copier le lien',
    linkCopied: 'Lien copié',
    printPdf: 'Imprimer / PDF',
  },
  adSlot: {
    ariaLabel: 'Espace publicitaire',
    reservedPrefix: 'Emplacement publicitaire réservé',
    intermediateLabel: 'Bannière intermédiaire 728×90 / adaptable',
    bottomLabel: 'Bannière inférieure 728×90 / adaptable',
    clsNote: 'Hauteur minimale fixe pour éviter tout décalage de mise en page (CLS = 0)',
  },
  seoByMode: {
    percentages: {
      'inverse-discount': {
        title: 'Calculer le prix initial avant remise (Pourcentage inversé) | CalculaProporcion',
        metaDescription:
          'Retrouvez instantanément le prix d’origine avant une réduction appliquée. Évitez les erreurs d’arrondi grâce à la formule exacte du pourcentage inversé.',
        h1: 'Comment calculer le prix initial avant une remise',
        subtitle:
          'Saisissez le prix final payé et le pourcentage de remise pour retrouver le prix d’origine exact et l’économie réelle.',
        contextLabel: 'Module 01 · Pourcentage inversé',
      },
      'tax-remove': {
        title: 'Retirer la TVA d’un prix TTC (Calculer le montant HT) | CalculaProporcion',
        metaDescription:
          'Extrayez la TVA de n’importe quelle facture ou ticket en un instant. Calculez la base hors taxes exacte (21 %, 20 %, 10 %, etc.).',
        h1: 'Retirer la TVA d’un prix TTC et obtenir le montant HT',
        subtitle:
          'Décomposez automatiquement la base hors taxes et le montant de TVA à partir d’un total TTC.',
        contextLabel: 'Module 01 · Calcul HT / TVA',
      },
      'tax-add': {
        title: 'Ajouter la TVA ou un pourcentage à un montant HT | CalculaProporcion',
        metaDescription:
          'Ajoutez 21 %, 20 %, 10 % ou tout autre taux à une base nette pour obtenir le montant de taxe et le prix TTC exact.',
        h1: 'Ajouter la TVA ou une majoration à un montant de base',
        subtitle:
          'Calculez le montant exact de taxe ou de majoration et obtenez le prix total TTC prêt à facturer.',
        contextLabel: 'Module 01 · Ajouter un pourcentage',
      },
      'part-of-whole': {
        title: 'Calculer quel pourcentage représente A sur B | CalculaProporcion',
        metaDescription:
          'Découvrez quel pourcentage représente une valeur A par rapport à un total B avec calcul détaillé et part restante.',
        h1: 'Calculer quel pourcentage représente une quantité sur le total',
        subtitle:
          'Obtenez la proportion exacte d’une valeur A par rapport à une référence B et vérifiez le pourcentage restant.',
        contextLabel: 'Module 01 · Proportion en %',
      },
      'pct-change': {
        title: 'Calculateur de variation en pourcentage (hausse ou baisse) | CalculaProporcion',
        metaDescription:
          'Mesurez le pourcentage d’augmentation ou de diminution entre une valeur initiale et une valeur finale avec écart absolu.',
        h1: 'Calculer la variation en pourcentage entre deux valeurs',
        subtitle:
          'Mesurez avec précision le taux de hausse ou de baisse entre une valeur initiale A et une valeur finale B.',
        contextLabel: 'Module 01 · Variation en %',
      },
    },
    distribution: {
      percentage: {
        title: 'Répartir une dépense selon un pourcentage au centime près | CalculaProporcion',
        metaDescription:
          'Calculateur de partage proportionnel par pourcentages. Normalisation à 100 % en un clic et ajustement exact des centimes.',
        h1: 'Répartir une dépense ou un montant selon un pourcentage',
        subtitle:
          'Distribuez factures, budgets ou gains entre plusieurs participants avec normalisation automatique et équilibre au centime.',
        contextLabel: 'Module 02 · Répartition par %',
      },
      weight: {
        title: 'Répartition proportionnelle par poids, jours ou parts | CalculaProporcion',
        metaDescription:
          'Divisez des factures ou frais de voyage proportionnellement aux jours, heures, mètres carrés ou parts au centime près.',
        h1: 'Répartition proportionnelle selon poids, jours, heures ou parts',
        subtitle:
          'Attribuez des pondérations selon la durée ou la consommation et obtenez la part exacte de chaque participant.',
        contextLabel: 'Module 02 · Répartition pondérée',
      },
    },
    ruleOfThree: {
      direct: {
        title: 'Calculateur de règle de trois directe en ligne | CalculaProporcion',
        metaDescription:
          'Résolvez vos règles de trois directes pour recettes, devis, consommation et conversions avec étapes détaillées.',
        h1: 'Calculateur de règle de trois directe en ligne',
        subtitle:
          'Calculez les proportions directes (plus de A donne plus de B) avec taux unitaire, substitution et vérification.',
        contextLabel: 'Module 03 · Règle de trois directe',
      },
      inverse: {
        title: 'Calculateur de règle de trois inverse étape par étape | CalculaProporcion',
        metaDescription:
          'Résolvez les proportions inverses (vitesse/temps, ouvriers/jours, débit) avec développement pas à pas et vérification.',
        h1: 'Calculateur de règle de trois inverse étape par étape',
        subtitle:
          'Résolvez les grandeurs inversement proportionnelles (plus de moyens = moins de temps) avec preuve du produit constant.',
        contextLabel: 'Module 03 · Règle de trois inverse',
      },
    },
  },
  percentagesUi: {
    sectionAria: 'Calculatrice de pourcentages directs et inversés',
    subModeAria: 'Choisir le type de calcul',
    tabs: {
      inverseDiscount: 'Remise inversée',
      tax: 'Retirer / Ajouter TVA',
      partOfWhole: 'Part A sur B (%)',
      pctChange: 'Variation %',
    },
    presetsLabel: 'Accès rapides :',
    presets: {
      dto20: 'Prix après 20 % remise',
      dto30: 'Prix après 30 % remise',
      iva21: 'Retirer 21 % TVA',
      iva10: 'Retirer 10 % TVA',
    },
    taxToggle: {
      remove: 'Retirer TVA (TTC → HT)',
      add: 'Ajouter TVA (HT → TTC)',
    },
    labels: {
      finalPaid: 'Prix final payé',
      totalWithTax: 'Montant total (TTC)',
      netBase: 'Montant de base (HT)',
      discountApplied: 'Remise appliquée',
      taxRate: 'Taux de TVA / taxe',
      partA: 'Quantité partielle (A)',
      initialA: 'Valeur initiale (A)',
      wholeB: 'Total de référence (B)',
      finalB: 'Valeur finale (B)',
    },
    hints: {
      inverseDiscount: 'Montant payé après application de la réduction.',
      taxRemove: 'Montant brut final figurant sur la facture.',
      taxAdd: 'Base nette hors taxes avant majoration.',
    },
    placeholders: {
      amount: 'Ex. 80,00',
      rate: 'Ex. 20',
      valA: 'Ex. 35',
      valB: 'Ex. 140',
    },
    swapAB: 'Inverser A et B',
    checkInputsTitle: 'Vérifiez vos données',
    avoidClassicError: 'Pourquoi ce n’est pas',
    formulaStepsTitle: 'Formule et calcul étape par étape',
  },
  percentagesMath: {
    inverseDiscount: {
      primaryLabel: 'Prix initial avant remise',
      missingError: 'Saisissez le prix final payé et le pourcentage de remise pour calculer le prix initial.',
      negativePriceError: 'Le prix final ne peut pas être négatif.',
      over100Error: 'La remise ne peut pas atteindre ou dépasser 100 % (division par zéro ou prix négatif).',
      negativePctError: 'Le pourcentage de remise doit être supérieur ou égal à 0 %.',
      formulaBase: 'Prix initial = Prix final ÷ (1 − Remise / 100)',
      formulaLabel: 'Prix initial',
      realSavings: 'Économie réelle réalisée',
      paidPctOfTotal: 'Pourcentage payé du total',
      divisorFactor: 'Facteur diviseur appliqué',
      step1: (d, paid) => `Avec ${d} % de remise, le montant payé représente ${paid} % du prix initial.`,
      step2: (d, factor) => `On calcule le facteur restant : 1 − (${d} ÷ 100) = ${factor}.`,
      step3: (f, factor, orig) => `On divise le prix final par ce facteur : ${f} ÷ ${factor} = ${orig}.`,
      step4: (orig, f, sav) => `Économie réelle : ${orig} − ${f} = ${sav}.`,
      verify: (orig, d, sav, checkVal) => `Vérification directe : ${orig} − ${d} % (${sav}) = ${checkVal}.`,
      mistakeExplain: (d, f, mult, wrong, diff) =>
        `Erreur classique évitée : ajouter directement ${d} % au prix remisé (${f} × ${mult}) donne ${wrong}, soit ${diff} en dessous du prix réel.`,
    },
    taxRemove: {
      primaryLabel: 'Base hors taxes (montant HT)',
      missingError: 'Saisissez le montant TTC et le taux de TVA.',
      invalidRateError: 'Le taux de taxe doit être supérieur à −100 %.',
      formulaBase: 'Base HT = Total TTC ÷ (1 + TVA / 100)',
      formulaLabel: 'Base HT',
      taxAmountLabel: (pct) => `Montant de taxe (${pct} %)`,
      totalWithTaxLabel: 'Montant total TTC',
      divisorLabel: 'Diviseur appliqué',
      step1: (pct, totalPct) => `Le total TTC inclut 100 % du HT plus ${pct} % de taxe, soit ${totalPct} %.`,
      step2: (pct, div) => `Conversion en diviseur décimal : 1 + (${pct} ÷ 100) = ${div}.`,
      step3: (div, totalNum, base) => `Division du total par ${div} : ${totalNum} ÷ ${div} = ${base}.`,
      step4: (totalMoney, base, taxMoney) => `La part de taxe correspond à : ${totalMoney} − ${base} = ${taxMoney}.`,
      verify: (base, pct, taxCheck, totalCheck) =>
        `Vérification : ${base} + ${pct} % (${taxCheck}) = ${totalCheck}.`,
      mistakeExplain: (pct, wrong, diff) =>
        `Soustraire ${pct} % directement au total TTC (${wrong}) crée une erreur de ${diff}, car la TVA s’applique au montant HT et non au TTC.`,
    },
    taxAdd: {
      primaryLabel: 'Montant total avec taxe ajoutée',
      missingError: 'Saisissez le montant de base et le pourcentage à ajouter.',
      formulaBase: 'Total = Base × (1 + Taux / 100)',
      formulaLabel: 'Total',
      addedAmountLabel: (pct) => `Montant ajouté (${pct} %)`,
      initialBaseLabel: 'Base initiale',
      multiplierLabel: 'Coefficient multiplicateur',
      step1: (base, pct, taxMoney) => `Calcul de la part proportionnelle : ${base} × (${pct} ÷ 100) = ${taxMoney}.`,
      step2: (base, taxMoney, total) => `Somme de la base et du supplément : ${base} + ${taxMoney} = ${total}.`,
      verify: (total, factor, checkBase) => `Vérification inverse : ${total} ÷ ${factor} = ${checkBase}.`,
    },
    partOfWhole: {
      primaryLabel: 'Pourcentage représenté par A sur B',
      missingError: 'Saisissez la quantité A et le total de référence B.',
      zeroDivisorError: 'La référence B ne peut pas être égale à 0 (division par zéro impossible).',
      formulaBase: 'Pourcentage = (A ÷ B) × 100',
      remainingTo100: 'Reste jusqu’à 100 %',
      differenceBA: 'Différence (B − A)',
      decimalRatio: 'Ratio décimal (A / B)',
      step1: (a, b, ratio) => `Division de la partie (A) par le total (B) : ${a} ÷ ${b} = ${ratio}.`,
      step2: (ratio, pct) => `Multiplication par 100 : ${ratio} × 100 = ${pct} %.`,
      verify: (pct, b, checkVal) => `Vérification : ${pct} % de ${b} équivaut à ${checkVal}.`,
    },
    pctChange: {
      missingError: 'Saisissez la valeur initiale (A) et la valeur finale (B).',
      zeroInitialError: 'La valeur initiale (A) ne peut pas être 0 pour calculer une variation.',
      formulaBase: 'Variation % = ((B − A) ÷ |A|) × 100',
      increase: 'Hausse',
      decrease: 'Baisse',
      noChange: 'Aucune variation',
      primaryPrefix: 'Variation en pourcentage',
      absDiffLabel: 'Écart absolu (B − A)',
      ratioLabel: 'Ratio (B ÷ A)',
      step1: (b, a, diff) => `Calcul de l’écart absolu : ${b} − ${a} = ${diff}.`,
      step2: (diff, absA, ratio) => `Division par la valeur initiale : ${diff} ÷ ${absA} = ${ratio}.`,
      step3: (pctStr) => `Multiplication par 100 : ${pctStr} %.`,
      verify: (a, op, factorStr, b) => `Vérification : ${a} × (1 ${op} ${factorStr}) = ${b}.`,
    },
  },
  distributionUi: {
    sectionAria: 'Calculatrice de répartition proportionnelle',
    totalLabel: 'Montant total à répartir',
    totalPlaceholder: 'Ex. 1200',
    conceptLabel: 'Libellé du partage',
    conceptPlaceholder: 'Ex. Dépenses partagées',
    defaultConcept: 'Répartition proportionnelle',
    modePct: 'Répartir par Pourcentage (%)',
    modeWeight: 'Répartir par Poids / Parts',
    weightUnitLabel: 'Unité de poids :',
    weightUnits: ['jours', 'heures', 'mètres', 'parts', 'points'],
    examplesLabel: 'Exemples :',
    examples: {
      trip: 'Séjour par nuits',
      invoice: 'Facture 60 / 40',
      equal4: '4 parts égales',
    },
    exampleData: {
      tripConcept: 'Location chalet week-end',
      tripUnit: 'nuits',
      invoiceConcept: 'Facture projet partagé',
      invoicePart1: 'Design & stratégie',
      invoicePart2: 'Développement technique',
      equalConcept: 'Dîner de groupe',
      personPrefix: 'Personne',
      partPrefix: 'Part',
    },
    equalSplitBtn: 'Parts égales',
    normalizeBtn: 'Normaliser à 100 %',
    addPartBtn: 'Ajouter une part',
    adjust100Link: 'Ajuster à 100 %',
    statusBalanced: 'Somme totale : 100 % · Répartition équilibrée au centime.',
    statusMissing: (sum, missing, money) =>
      `Somme actuelle : ${sum} % · Il manque ${missing} % (${money} non attribués).`,
    statusExcess: (sum, excess, money) =>
      `Somme actuelle : ${sum} % · Excédent de ${excess} % (${money} en trop).`,
    participantNameAria: (idx) => `Nom du participant ${idx}`,
    participantPlaceholder: (idx) => `Participant ${idx}`,
    pctInputAria: 'Pourcentage',
    weightInputAria: 'Poids',
    unitShort: 'u.',
    removeAria: (name) => `Supprimer ${name}`,
    incompleteTitle: 'Données incomplètes',
    targetLabel: 'Objectif',
    defaultUnitLabel: 'parts',
    tableHeaders: {
      part: 'Part',
      realPct: '% réel',
      exact: 'Exact',
      final: 'Final',
    },
    adjustmentTag: 'ajust.',
    centExactOk: (count, totalStr) =>
      `Équilibre au centime : la somme des ${count} parts (${totalStr}) correspond à 100 % du montant total.`,
    centUnbalancedNote: (sumStr) =>
      `Les pourcentages totalisent ${sumStr} %. Utilisez Normaliser à 100 % pour équilibrer l’ensemble.`,
    invalidTotalError: 'Saisissez un montant total valide (supérieur ou égal à 0).',
    noParticipantsError: 'Ajoutez au moins un participant pour effectuer la répartition.',
    negativeValuesError: 'Les pourcentages ou poids ne peuvent pas être négatifs.',
    zeroWeightError: 'La somme des poids doit être supérieure à 0.',
  },
  ruleOfThreeUi: {
    sectionAria: 'Calculatrice de règle de trois directe et inverse',
    directBtn: 'Règle de trois directe',
    inverseBtn: 'Règle de trois inverse',
    directDesc: 'Proportion directe : lorsque A augmente, B augmente dans la même proportion.',
    inverseDesc: 'Proportion inverse : lorsque A augmente, B diminue (ex. plus de vitesse = moins de temps).',
    examplesLabel: 'Exemples :',
    examples: {
      recipe: { label: 'Recette (convives)', unitA: 'convives', unitB: 'grammes' },
      fuel: { label: 'Consommation (km / L)', unitA: 'km', unitB: 'litres' },
      workers: { label: 'Ouvriers et jours', unitA: 'ouvriers', unitB: 'jours' },
      speed: { label: 'Vitesse et durée', unitA: 'km/h', unitB: 'heures' },
    },
    unitALabel: 'Libellé colonne A (optionnel)',
    unitAPlaceholder: 'Ex. convives, ouvriers...',
    unitBLabel: 'Libellé colonne B (optionnel)',
    unitBPlaceholder: 'Ex. grammes, jours, €...',
    defaultUnitA: 'unités A',
    defaultUnitB: 'unités B',
    ifA: 'Si A',
    equalsB: 'Équivaut à B',
    thenC: 'Alors C',
    resultX: 'Résultat X',
    valAPlaceholder: 'Valeur A',
    valBPlaceholder: 'Valeur B',
    valCPlaceholder: 'Valeur C',
    swapAC: 'Inverser A et C',
    checkValuesTitle: 'Vérifiez les valeurs',
    resultDirectLabel: 'Résultat (Règle de trois directe)',
    resultInverseLabel: 'Résultat (Règle de trois inverse)',
    appliedFormulaLabel: 'Formule appliquée',
    stepsTitle: 'Développement étape par étape',
  },
  ruleOfThreeMath: {
    missingError: 'Complétez les valeurs A, B et C pour calculer X.',
    directZeroAError: 'La valeur A ne peut pas être 0 dans une règle de trois directe.',
    inverseZeroCError: 'La valeur C ne peut pas être 0 dans une règle de trois inverse.',
    inverseZeroAError: 'La valeur initiale A doit être différente de 0.',
    directConstantLabel: 'Taux unitaire (B ÷ A)',
    inverseConstantLabel: 'Produit constant (A × B)',
    perOneUnit: (unitA) => `Pour 1 ${unitA}`,
    unitRateValue: (rate, unitB) => `${rate} ${unitB}`,
    directSteps: (uA, uB, a, b, c, rate, prod, x) => [
      `Relation directe : lorsque ${uA} varie, ${uB} varie dans la même proportion.`,
      `Taux unitaire pour 1 ${uA} : ${b} ÷ ${a} = ${rate} ${uB}.`,
      `Produit en croix (B × C) : ${b} × ${c} = ${prod}.`,
      `Division par A : ${prod} ÷ ${a} = ${x} ${uB}.`,
    ],
    directVerify: (ba, xc) => `Vérification : B/A = ${ba} et X/C = ${xc}.`,
    inverseSteps: (uA, uB, a, b, c, prod, x) => [
      `Relation inverse : si ${uA} augmente, ${uB} diminue en gardant le produit constant.`,
      `Multiplication de la paire connue (A × B) : ${a} × ${b} = ${prod}.`,
      `Division par C : ${prod} ÷ ${c} = ${x} ${uB}.`,
    ],
    inverseVerify: (ab, cx) => `Vérification inverse : A × B = ${ab} et C × X = ${cx}.`,
  },
  whatsapp: {
    pendingPct: 'CalculaProporcion — Calcul incomplet.',
    pendingDist: 'CalculaProporcion — Répartition incomplète.',
    pendingRule: 'CalculaProporcion — Règle de trois incomplète.',
    resultWord: 'Résultat',
    formulaWord: 'Formule',
    totalToSplit: 'Total à répartir',
    totalAllocated: 'Total attribué',
    directTitle: 'Règle de trois directe',
    inverseTitle: 'Règle de trois inverse',
    ifWord: 'Si',
    forWord: 'Pour',
  },
  seoSection: {
    examplesTitle: 'Exemples résolus étape par étape',
    examplesSubtitle:
      'Cas concrets de pourcentage inversé, extraction de TVA, partage par jours et règle de trois. Cliquez pour charger dans la calculatrice.',
    loadInCalculator: 'Charger dans l’outil',
    resultPrefix: 'Résultat',
    workedExamples: [
      {
        id: 'ex-inverse-discount',
        category: 'Pourcentage inversé',
        title: 'Prix initial après 30 % de remise',
        problem: 'Vous avez payé une veste 84 € avec 30 % de réduction. Quel était son prix d’origine ?',
        formula: 'Prix initial = 84 ÷ (1 − 0,30) = 84 ÷ 0,70',
        steps: [
          'Après 30 % de remise, vous payez 70 % (0,70) du prix initial.',
          'Divisez 84 € par 0,70 pour obtenir exactement 120,00 €.',
          'Économie réelle : 120 € − 84 € = 36 € (30 % de 120 €).',
        ],
        answer: '120,00 € (et non 109,20 €)',
      },
      {
        id: 'ex-remove-iva',
        category: 'Calcul TVA',
        title: 'Retirer 21 % de TVA d’une facture de 363 €',
        problem: 'Un fournisseur facture 363 € TTC avec 21 % de TVA incluse. Quelle est la base HT ?',
        formula: 'Base HT = 363 ÷ 1,21',
        steps: [
          'Le prix TTC correspond à 121 % du montant HT.',
          'Divisez 363 € par 1,21 pour obtenir la base HT : 300,00 €.',
          'La TVA correspond à la différence : 363 € − 300 € = 63,00 €.',
        ],
        answer: 'HT : 300,00 € · TVA : 63,00 €',
      },
      {
        id: 'ex-split-days',
        category: 'Répartition pondérée',
        title: 'Partager 450 € selon les jours de séjour',
        problem: 'Trois amis louent un logement pour 450 €. Ana reste 5 jours, Carlos 3 jours et Lucía 2 jours.',
        formula: 'Part i = 450 × (jours i ÷ 10 jours au total)',
        steps: [
          'Total des poids : 5 + 3 + 2 = 10 jours.',
          'Coût par jour : 450 € ÷ 10 = 45 €/jour.',
          'Ana paie 225 € (50 %), Carlos 135 € (30 %) et Lucía 90 € (20 %).',
        ],
        answer: '225 € · 135 € · 90 €',
      },
      {
        id: 'ex-rule-inverse',
        category: 'Règle de trois inverse',
        title: 'Ouvriers et jours pour un chantier',
        problem: 'Si 4 peintres mettent 6 jours pour peindre un local, combien de jours mettront 8 peintres ?',
        formula: 'X = (4 × 6) ÷ 8',
        steps: [
          'La relation est inverse : doubler l’équipe divise le temps par deux.',
          'Multipliez la paire connue : 4 × 6 = 24 jours-homme.',
          'Divisez par 8 peintres : 24 ÷ 8 = 3 jours.',
        ],
        answer: '3 jours',
      },
    ],
    mistakesTitle: 'Erreurs fréquentes avec les pourcentages et proportions',
    mistakesSubtitle: 'Pourquoi les raccourcis mentaux trompent et comment vérifier chaque calcul.',
    wrongLabel: 'Erreur fréquente',
    rightLabel: 'Méthode exacte',
    commonMistakes: [
      {
        title: 'Ajouter le % de remise au prix déjà soldé',
        wrongApproach: 'Multiplier le prix final par (1 + remise/100).',
        rightApproach: 'Diviser le prix final par (1 − remise/100).',
        numericalProof:
          'Pour 80 € payés après 20 % de remise, ajouter 20 % donnerait 96 € (faux). En divisant 80 ÷ 0,80, on retrouve exactement 100 €.',
      },
      {
        title: 'Soustraire 21 % directement pour retirer la TVA',
        wrongApproach: 'Calculer Total TTC × 0,79 pour estimer le HT.',
        rightApproach: 'Diviser le montant TTC par 1,21 (ou 1,10 pour une TVA à 10 %).',
        numericalProof:
          'Sur 121 € TTC, soustraire 21 % donne 95,59 € (erroné). Diviser 121 ÷ 1,21 restitue la base exacte de 100,00 €.',
      },
      {
        title: 'Utiliser la règle de trois directe pour un cas inverse',
        wrongApproach: 'Appliquer (B × C) ÷ A sur des problèmes vitesse/temps ou ouvriers/jours.',
        rightApproach: 'Vérifier si plus de A implique moins de B et appliquer X = (A × B) ÷ C.',
        numericalProof:
          'Si 2 robinets remplissent un bassin en 6 h, 4 robinets mettent (2 × 6) ÷ 4 = 3 h (et non 12 h).',
      },
    ],
    faqTitle: 'Questions fréquentes',
    faqSubtitle: 'Réponses claires aux questions courantes de gestion, facturation et partage.',
    goPercentages: 'Aller aux Pourcentages',
    goDistribution: 'Aller à la Répartition',
    goRuleOfThree: 'Aller à la Règle de trois',
    faqItems: [
      {
        question: 'Comment calculer le prix initial avant une réduction ?',
        answer:
          'Divisez le prix final payé par (1 − pourcentage/100). Par exemple, pour 75 € après 25 % de remise, calculez 75 ÷ 0,75 = 100 €.',
      },
      {
        question: 'Pourquoi ajouter le même pourcentage ne redonne pas le prix initial ?',
        answer:
          'Parce que la remise s’est appliquée sur une base plus grande (le prix d’origine), alors que l’ajout s’applique sur le prix réduit. −20 % suivi de +20 % donne toujours moins de 100 %.',
      },
      {
        question: 'Comment retirer la TVA (21 %, 10 % ou 4 %) d’une facture ?',
        answer:
          'Ouvrez « Retirer / Ajouter TVA », choisissez « Retirer TVA » et saisissez le TTC. L’outil divise par 1,21, 1,10 ou 1,04 pour extraire le HT exact.',
      },
      {
        question: 'Comment fonctionne l’arrondi exact au centime lors d’un partage ?',
        answer:
          'CalculaProporcion utilise la méthode du plus fort reste (Hamilton) : chaque part reçoit ses centimes entiers, puis les centimes résiduels sont attribués aux fractions décimales les plus élevées.',
      },
      {
        question: 'Quelle différence entre partage par pourcentage et par poids ?',
        answer:
          'En mode pourcentage vous saisissez directement des %, avec normalisation à 100 %. En mode poids vous indiquez des unités réelles (jours, heures, m²) converties automatiquement.',
      },
      {
        question: 'Mes données sont-elles envoyées vers un serveur ?',
        answer:
          'Non. Tous les calculs sont 100 % locaux dans votre navigateur. Le dernier état est stocké uniquement dans localStorage et le partage encode les valeurs dans l’URL.',
      },
    ],
    resourcesTitle: 'Ressources et outils recommandés',
    resourcesDisclosure: 'Sélection éditoriale · Liens externes et affiliés contextuels',
    resources: [
      {
        title: 'Calculatrices scientifiques et financières de bureau',
        category: 'Équipement de bureau',
        description:
          'Modèles solaires double ligne avec touches de pourcentage et taxe dédiées pour commerces et indépendants.',
        href: 'https://www.amazon.es/s?k=calculadora+financiera+oficina',
        ctaLabel: 'Voir les modèles',
      },
      {
        title: 'Logiciel de facturation et calcul automatique de TVA',
        category: 'Gestion indépendants',
        description:
          'Automatisez devis, factures récurrentes et déclarations trimestrielles de TVA sans tableurs manuels.',
        href: 'https://www.holded.com/es',
        ctaLabel: 'Découvrir l’outil',
      },
      {
        title: 'Tableurs collaboratifs dans le cloud',
        category: 'Productivité',
        description:
          'Créez vos modèles mensuels de dépenses partagées et budgets proportionnels en temps réel.',
        href: 'https://workspace.google.com/intl/es/products/sheets/',
        ctaLabel: 'Ouvrir Google Sheets',
      },
    ],
  },
  footer: {
    tagline:
      'Calculs mathématiques déterministes 100 % locaux dans votre navigateur · Règle de trois, pourcentage inversé et partage au centime.',
    navAria: 'Liens rapides du pied de page',
    linkPercentages: 'Pourcentage inversé & TVA',
    linkDistribution: 'Répartition proportionnelle',
    linkRuleOfThree: 'Règle de trois directe et inverse',
  },
};
