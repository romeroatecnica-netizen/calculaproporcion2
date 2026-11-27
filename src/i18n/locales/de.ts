import { buildAmazonEsSearchUrl } from '../../config/affiliate';
import { TranslationDictionary } from '../types';

export const de: TranslationDictionary = {
  meta: {
    siteName: 'CalculaProporcion',
    appDescription:
      'Berechnen Sie sofort den Originalpreis vor Rabatt, ziehen Sie MwSt. ab oder fügen Sie sie hinzu, teilen Sie Beträge centgenau auf und lösen Sie den Dreisatz.',
    howToName: 'Originalpreis vor einem Rabatt berechnen (umgekehrter Prozentsatz)',
    howToDescription:
      'Exakte Methode zur Berechnung des ursprünglichen Preises anhand des gezahlten Endpreises und des gewährten Rabattsatzes.',
    howToSteps: [
      {
        name: 'Rabattsatz in einen Dezimalwert umwandeln',
        text: 'Teilen Sie den Rabatt durch 100. Zum Beispiel entspricht 20 % dem Wert 0,20.',
      },
      {
        name: 'Verbleibenden Faktor berechnen',
        text: 'Ziehen Sie diesen Anteil von 1 ab: 1 - 0,20 = 0,80. Der Endpreis entspricht 80 % des Ausgangspreises.',
      },
      {
        name: 'Endpreis durch den verbleibenden Faktor teilen',
        text: 'Teilen Sie den gezahlten Preis durch 0,80. Bei 80 € ergibt 80 / 0,80 = 100 € Originalpreis (nicht 96 €).',
      },
    ],
  },
  header: {
    navPercentages: 'Prozente & MwSt.',
    navDistribution: 'Aufteilung',
    navRuleOfThree: 'Dreisatz',
    navGuidesFaq: 'Anleitung & FAQ',
    shareCalculation: 'Berechnung teilen',
    linkCopied: 'Link kopiert',
    navAriaLabel: 'Rechner-Module',
  },
  preferences: {
    mobileTabsAria: 'Rechner auswählen',
    separatorLabel: 'Format:',
    separatorEsTitle: 'Europäisches Format: Punkt als Tausendertrennzeichen, Komma als Dezimaltrennzeichen',
    separatorUsTitle: 'Internationales Format: Komma als Tausendertrennzeichen, Punkt als Dezimaltrennzeichen',
    unitLabel: 'Einheit:',
    noSymbol: 'Ohne Symbol',
    languageLabel: 'Sprache:',
    reset: 'Zurücksetzen',
  },
  actions: {
    copyWhatsApp: 'Für WhatsApp kopieren',
    copiedWhatsApp: 'Für WhatsApp kopiert',
    copyLink: 'Link kopieren',
    linkCopied: 'Link kopiert',
    printPdf: 'Drucken / PDF',
  },
  adSlot: {
    ariaLabel: 'Werbefläche',
    reservedPrefix: 'Reservierter Werbeplatz',
    intermediateLabel: 'Mittleres Banner 728×90 / responsiv',
    bottomLabel: 'Unteres Banner 728×90 / responsiv',
    clsNote: 'Feste Mindesthöhe zur Vermeidung von Layout-Verschiebungen (CLS = 0)',
  },
  seoByMode: {
    percentages: {
      'inverse-discount': {
        title: 'Originalpreis vor Rabatt berechnen (Rückwärts-Prozent) | CalculaProporcion',
        metaDescription:
          'Berechnen Sie sofort den ursprünglichen Preis vor einem Rabatt. Vermeiden Sie typische Rechenfehler mit der exakten Formel.',
        h1: 'Originalpreis vor einem Rabatt berechnen',
        subtitle:
          'Geben Sie den gezahlten Endpreis und den Rabatt in Prozent ein, um den exakten Ausgangspreis und die echte Ersparnis zu ermitteln.',
        contextLabel: 'Modul 01 · Rückwärts-Prozent',
      },
      'tax-remove': {
        title: 'Mehrwertsteuer aus Bruttopreis herausrechnen (Netto berechnen) | CalculaProporcion',
        metaDescription:
          'Rechnen Sie MwSt. oder USt. aus jeder Rechnung sofort heraus. Exakter Nettobetrag bei 21 %, 19 %, 10 % oder jedem Steuersatz.',
        h1: 'Mehrwertsteuer abziehen und Nettobetrag berechnen',
        subtitle:
          'Ermitteln Sie automatisch den Nettobetrag und den Steueranteil ausgehend vom Bruttobetrag.',
        contextLabel: 'Modul 01 · MwSt. abziehen',
      },
      'tax-add': {
        title: 'Mehrwertsteuer oder Aufschlag zu Nettobetrag hinzufügen | CalculaProporcion',
        metaDescription:
          'Addieren Sie 21 %, 19 %, 10 % oder einen beliebigen Prozentsatz zum Nettobetrag für den exakten Bruttopreis.',
        h1: 'Mehrwertsteuer oder Prozentsatz auf einen Basisbetrag aufschlagen',
        subtitle:
          'Berechnen Sie den genauen Steuerbetrag und den Endpreis für Angebote oder Rechnungen.',
        contextLabel: 'Modul 01 · Prozent aufschlagen',
      },
      'part-of-whole': {
        title: 'Wie viel Prozent sind A von B Rechner | CalculaProporcion',
        metaDescription:
          'Finden Sie heraus, wie viel Prozent ein Teilwert A vom Gesamtwert B ausmacht – inklusive Schritt-für-Schritt-Erklärung.',
        h1: 'Berechnen, wie viel Prozent eine Menge vom Ganzen ist',
        subtitle:
          'Erhalten Sie den genauen Prozentanteil von Wert A an der Gesamtgröße B samt Restanteil.',
        contextLabel: 'Modul 01 · Prozentanteil',
      },
      'pct-change': {
        title: 'Prozentuale Veränderung berechnen (Anstieg / Rückgang) | CalculaProporcion',
        metaDescription:
          'Berechnen Sie die prozentuale Steigerung oder Senkung zwischen Ausgangs- und Endwert samt absoluter Differenz.',
        h1: 'Prozentuale Veränderung zwischen zwei Werten berechnen',
        subtitle:
          'Messen Sie exakt den prozentualen Anstieg oder Rückgang von einem Anfangswert A zu einem Endwert B.',
        contextLabel: 'Modul 01 · Prozentuale Änderung',
      },
    },
    distribution: {
      percentage: {
        title: 'Ausgaben nach Prozent centgenau aufteilen | CalculaProporcion',
        metaDescription:
          'Rechner für proportionale Kostenaufteilung nach Prozenten. 100-%-Normalisierung per Klick und centgenauer Rundungsausgleich.',
        h1: 'Ausgaben oder Beträge nach Prozent aufteilen',
        subtitle:
          'Verteilen Sie Rechnungen, Budgets oder Gewinne mit automatischer 100-%-Normalisierung und centgenauem Ausgleich.',
        contextLabel: 'Modul 02 · Prozent-Aufteilung',
      },
      weight: {
        title: 'Proportionale Aufteilung nach Gewichten, Tagen oder Anteilen | CalculaProporcion',
        metaDescription:
          'Teilen Sie Reisekosten, Rechnungen oder Erträge proportional nach Tagen, Stunden, Quadratmetern oder Anteilen centgenau auf.',
        h1: 'Proportionale Aufteilung nach Gewichten, Tagen oder Anteilen',
        subtitle:
          'Vergeben Sie Anteile nach Aufenthaltsdauer, Verbrauch oder Einheiten für einen centgenauen Endbetrag.',
        contextLabel: 'Modul 02 · Gewichtete Aufteilung',
      },
    },
    ruleOfThree: {
      direct: {
        title: 'Gerader Dreisatz Rechner mit Lösungsweg | CalculaProporcion',
        metaDescription:
          'Lösen Sie den geraden Dreisatz online für Rezepte, Verbrauch, Angebote und Umrechnungen Schritt für Schritt.',
        h1: 'Gerader Dreisatz Rechner online',
        subtitle:
          'Berechnen Sie direkte Proportionen (je mehr A, desto mehr B) mit Einheitswert, Einsetzung und Gegenprobe.',
        contextLabel: 'Modul 03 · Gerader Dreisatz',
      },
      inverse: {
        title: 'Ungerader (umgekehrter) Dreisatz Rechner Schritt für Schritt | CalculaProporcion',
        metaDescription:
          'Lösen Sie den umgekehrten Dreisatz online (Geschwindigkeit/Zeit, Arbeiter/Tage) mit verständlichem Rechenweg.',
        h1: 'Ungerader Dreisatz Rechner Schritt für Schritt',
        subtitle:
          'Lösen Sie antiproportionale Größen (mehr Ressourcen = weniger Zeit) mit Formel und Produktkontrolle.',
        contextLabel: 'Modul 03 · Ungerader Dreisatz',
      },
    },
  },
  percentagesUi: {
    sectionAria: 'Prozent- und Rückwärts-Prozentrechner',
    subModeAria: 'Berechnungsart wählen',
    tabs: {
      inverseDiscount: 'Rabatt rückwärts',
      tax: 'MwSt. abziehen / addieren',
      partOfWhole: 'Anteil A von B (%)',
      pctChange: '% Veränderung',
    },
    presetsLabel: 'Schnellwahl:',
    presets: {
      dto20: 'Preis nach 20 % Rabatt',
      dto30: 'Preis nach 30 % Rabatt',
      iva21: '21 % MwSt. abziehen',
      iva10: '10 % MwSt. abziehen',
    },
    taxToggle: {
      remove: 'MwSt. abziehen (Brutto → Netto)',
      add: 'MwSt. addieren (Netto → Brutto)',
    },
    labels: {
      finalPaid: 'Gezahlter Endpreis',
      totalWithTax: 'Gesamtbetrag (Brutto)',
      netBase: 'Basisbetrag (Netto)',
      discountApplied: 'Gewährter Rabatt',
      taxRate: 'Steuer- / MwSt.-Satz',
      partA: 'Teilmenge (A)',
      initialA: 'Ausgangswert (A)',
      wholeB: 'Bezugsgröße (B)',
      finalB: 'Endwert (B)',
    },
    hints: {
      inverseDiscount: 'Betrag nach Abzug des Rabatts.',
      taxRemove: 'Brutto-Endbetrag auf Quittung oder Rechnung.',
      taxAdd: 'Steuerpflichtiger Nettobetrag vor Steuer.',
    },
    placeholders: {
      amount: 'z. B. 80,00',
      rate: 'z. B. 20',
      valA: 'z. B. 35',
      valB: 'z. B. 140',
    },
    swapAB: 'A und B tauschen',
    checkInputsTitle: 'Eingaben prüfen',
    avoidClassicError: 'Warum es nicht',
    formulaStepsTitle: 'Formel & Rechenweg Schritt für Schritt',
  },
  percentagesMath: {
    inverseDiscount: {
      primaryLabel: 'Originalpreis vor Rabatt',
      missingError: 'Geben Sie den gezahlten Endpreis und den Rabatt in % ein.',
      negativePriceError: 'Der Endpreis darf nicht negativ sein.',
      over100Error: 'Der Rabatt darf nicht 100 % oder höher sein (Division durch Null).',
      negativePctError: 'Der Rabatt muss mindestens 0 % betragen.',
      formulaBase: 'Originalpreis = Endpreis ÷ (1 − Rabatt / 100)',
      formulaLabel: 'Originalpreis',
      realSavings: 'Tatsächliche Ersparnis',
      paidPctOfTotal: 'Gezahlter Anteil vom Original',
      divisorFactor: 'Verwendeter Divisor',
      step1: (d, paid) => `Bei ${d} % Rabatt entspricht der gezahlte Betrag ${paid} % des Originalpreises.`,
      step2: (d, factor) => `Restfaktor berechnen: 1 − (${d} ÷ 100) = ${factor}.`,
      step3: (f, factor, orig) => `Endpreis durch diesen Faktor teilen: ${f} ÷ ${factor} = ${orig}.`,
      step4: (orig, f, sav) => `Echte Ersparnis: ${orig} − ${f} = ${sav}.`,
      verify: (orig, d, sav, checkVal) => `Gegenprobe: ${orig} − ${d} % (${sav}) = ${checkVal}.`,
      mistakeExplain: (d, f, mult, wrong, diff) =>
        `Häufiger Fehler vermieden: Wer ${d} % einfach auf den reduzierten Preis aufschlägt (${f} × ${mult}), erhält ${wrong} und liegt um ${diff} zu niedrig.`,
    },
    taxRemove: {
      primaryLabel: 'Nettobetrag (ohne MwSt.)',
      missingError: 'Geben Sie den Bruttobetrag und den Steuersatz ein.',
      invalidRateError: 'Der Steuersatz muss größer als −100 % sein.',
      formulaBase: 'Netto = Brutto ÷ (1 + MwSt. / 100)',
      formulaLabel: 'Netto',
      taxAmountLabel: (pct) => `Steuerbetrag (${pct} %)`,
      totalWithTaxLabel: 'Bruttobetrag (inkl. MwSt.)',
      divisorLabel: 'Angewendeter Divisor',
      step1: (pct, totalPct) => `Der Bruttobetrag umfasst 100 % Netto plus ${pct} % Steuer, also ${totalPct} %.`,
      step2: (pct, div) => `Dezimaldivisor: 1 + (${pct} ÷ 100) = ${div}.`,
      step3: (div, totalNum, base) => `Brutto durch ${div} teilen: ${totalNum} ÷ ${div} = ${base}.`,
      step4: (totalMoney, base, taxMoney) => `Der Steueranteil beträgt: ${totalMoney} − ${base} = ${taxMoney}.`,
      verify: (base, pct, taxCheck, totalCheck) =>
        `Gegenprobe: ${base} + ${pct} % (${taxCheck}) = ${totalCheck}.`,
      mistakeExplain: (pct, wrong, diff) =>
        `Wer ${pct} % direkt vom Brutto abzieht (${wrong}), macht einen Fehler von ${diff}, da die Steuer vom Nettobetrag berechnet wird.`,
    },
    taxAdd: {
      primaryLabel: 'Bruttobetrag inklusive Aufschlag',
      missingError: 'Geben Sie den Basisbetrag und den Prozentsatz ein.',
      formulaBase: 'Brutto = Basis × (1 + Satz / 100)',
      formulaLabel: 'Brutto',
      addedAmountLabel: (pct) => `Aufschlag (${pct} %)`,
      initialBaseLabel: 'Ausgangsbasis',
      multiplierLabel: 'Multiplikator',
      step1: (base, pct, taxMoney) => `Aufschlag berechnen: ${base} × (${pct} ÷ 100) = ${taxMoney}.`,
      step2: (base, taxMoney, total) => `Basis und Aufschlag addieren: ${base} + ${taxMoney} = ${total}.`,
      verify: (total, factor, checkBase) => `Rückprobe: ${total} ÷ ${factor} = ${checkBase}.`,
    },
    partOfWhole: {
      primaryLabel: 'Prozentanteil von A an B',
      missingError: 'Geben Sie den Teilwert A und den Gesamtwert B ein.',
      zeroDivisorError: 'Der Gesamtwert B darf nicht 0 sein.',
      formulaBase: 'Prozent = (A ÷ B) × 100',
      remainingTo100: 'Rest bis 100 %',
      differenceBA: 'Differenz (B − A)',
      decimalRatio: 'Dezimalverhältnis (A / B)',
      step1: (a, b, ratio) => `Teilwert (A) durch Gesamtwert (B) teilen: ${a} ÷ ${b} = ${ratio}.`,
      step2: (ratio, pct) => `Mit 100 multiplizieren: ${ratio} × 100 = ${pct} %.`,
      verify: (pct, b, checkVal) => `Gegenprobe: ${pct} % von ${b} sind ${checkVal}.`,
    },
    pctChange: {
      missingError: 'Geben Sie Ausgangswert (A) und Endwert (B) ein.',
      zeroInitialError: 'Der Ausgangswert (A) darf für die prozentuale Änderung nicht 0 sein.',
      formulaBase: 'Änderung % = ((B − A) ÷ |A|) × 100',
      increase: 'Anstieg',
      decrease: 'Rückgang',
      noChange: 'Keine Änderung',
      primaryPrefix: 'Prozentuale Änderung',
      absDiffLabel: 'Absolute Differenz (B − A)',
      ratioLabel: 'Verhältnis (B ÷ A)',
      step1: (b, a, diff) => `Absolute Differenz berechnen: ${b} − ${a} = ${diff}.`,
      step2: (diff, absA, ratio) => `Durch Ausgangswert teilen: ${diff} ÷ ${absA} = ${ratio}.`,
      step3: (pctStr) => `Mit 100 multiplizieren: ${pctStr} %.`,
      verify: (a, op, factorStr, b) => `Gegenprobe: ${a} × (1 ${op} ${factorStr}) = ${b}.`,
    },
  },
  distributionUi: {
    sectionAria: 'Proportionaler Aufteilungsrechner',
    totalLabel: 'Aufzuteilender Gesamtbetrag',
    totalPlaceholder: 'z. B. 1200',
    conceptLabel: 'Verwendungszweck',
    conceptPlaceholder: 'z. B. Gemeinsame Ausgaben',
    defaultConcept: 'Proportionale Aufteilung',
    modePct: 'Nach Prozent (%) aufteilen',
    modeWeight: 'Nach Gewichten / Anteilen',
    weightUnitLabel: 'Einheit:',
    weightUnits: ['Tage', 'Stunden', 'Meter', 'Anteile', 'Punkte'],
    examplesLabel: 'Beispiele:',
    examples: {
      trip: 'Reise nach Nächten',
      invoice: 'Rechnung 60 / 40',
      equal4: '4 gleiche Anteile',
    },
    exampleData: {
      tripConcept: 'Ferienhaus Wochenende',
      tripUnit: 'Nächte',
      invoiceConcept: 'Gemeinsame Projektrechnung',
      invoicePart1: 'Design & Strategie',
      invoicePart2: 'Technische Umsetzung',
      equalConcept: 'Gruppenessen',
      personPrefix: 'Person',
      partPrefix: 'Anteil',
    },
    equalSplitBtn: 'Gleiche Teile',
    normalizeBtn: 'Auf 100 % normalisieren',
    addPartBtn: 'Anteil hinzufügen',
    adjust100Link: 'Auf 100 % anpassen',
    statusBalanced: 'Gesamtsumme: 100 % · Centgenau ausgeglichen.',
    statusMissing: (sum, missing, money) =>
      `Aktuelle Summe: ${sum} % · Es fehlen ${missing} % (${money} nicht zugewiesen).`,
    statusExcess: (sum, excess, money) =>
      `Aktuelle Summe: ${sum} % · Überschuss von ${excess} % (${money} zu viel).`,
    participantNameAria: (idx) => `Name von Teilnehmer ${idx}`,
    participantPlaceholder: (idx) => `Teilnehmer ${idx}`,
    pctInputAria: 'Prozentsatz',
    weightInputAria: 'Gewicht',
    unitShort: 'Einh.',
    removeAria: (name) => `${name} entfernen`,
    incompleteTitle: 'Unvollständige Daten',
    targetLabel: 'Ziel',
    defaultUnitLabel: 'Anteile',
    tableHeaders: {
      part: 'Anteil',
      realPct: 'Real %',
      exact: 'Exakt',
      final: 'Endbetrag',
    },
    adjustmentTag: 'Ausgl.',
    centExactOk: (count, totalStr) =>
      `Centgenauer Abgleich: Die Summe aller ${count} Anteile (${totalStr}) entspricht exakt 100 % des Gesamtbetrags.`,
    centUnbalancedNote: (sumStr) =>
      `Die Prozentsätze ergeben ${sumStr} %. Klicken Sie auf Auf 100 % normalisieren.`,
    invalidTotalError: 'Geben Sie einen gültigen Gesamtbetrag (>= 0) ein.',
    noParticipantsError: 'Fügen Sie mindestens einen Anteil hinzu.',
    negativeValuesError: 'Prozentsätze oder Gewichte dürfen nicht negativ sein.',
    zeroWeightError: 'Die Summe der Gewichte muss größer als 0 sein.',
  },
  ruleOfThreeUi: {
    sectionAria: 'Dreisatzrechner (gerade und ungerade)',
    directBtn: 'Gerader Dreisatz',
    inverseBtn: 'Ungerader Dreisatz',
    directDesc: 'Direkt proportional: Steigt A, so steigt B im gleichen Verhältnis.',
    inverseDesc: 'Antiproportional: Steigt A, so sinkt B (z. B. höhere Geschwindigkeit = kürzere Fahrzeit).',
    examplesLabel: 'Beispiele:',
    examples: {
      recipe: { label: 'Rezept (Portionen)', unitA: 'Portionen', unitB: 'Gramm' },
      fuel: { label: 'Verbrauch (km / Liter)', unitA: 'km', unitB: 'Liter' },
      workers: { label: 'Arbeiter & Tage', unitA: 'Arbeiter', unitB: 'Tage' },
      speed: { label: 'Tempo & Zeit', unitA: 'km/h', unitB: 'Stunden' },
    },
    unitALabel: 'Spalte A Einheit (optional)',
    unitAPlaceholder: 'z. B. Portionen, Arbeiter...',
    unitBLabel: 'Spalte B Einheit (optional)',
    unitBPlaceholder: 'z. B. Gramm, Tage, €...',
    defaultUnitA: 'Einheiten A',
    defaultUnitB: 'Einheiten B',
    ifA: 'Wenn A',
    equalsB: 'Entspricht B',
    thenC: 'Dann C',
    resultX: 'Ergebnis X',
    valAPlaceholder: 'Wert A',
    valBPlaceholder: 'Wert B',
    valCPlaceholder: 'Wert C',
    swapAC: 'A und C tauschen',
    checkValuesTitle: 'Werte prüfen',
    resultDirectLabel: 'Ergebnis (Gerader Dreisatz)',
    resultInverseLabel: 'Ergebnis (Ungerader Dreisatz)',
    appliedFormulaLabel: 'Angewendete Formel',
    stepsTitle: 'Lösungsweg Schritt für Schritt',
  },
  ruleOfThreeMath: {
    missingError: 'Füllen Sie A, B und C aus, um X zu berechnen.',
    directZeroAError: 'Wert A darf beim geraden Dreisatz nicht 0 sein.',
    inverseZeroCError: 'Wert C darf beim ungeraden Dreisatz nicht 0 sein.',
    inverseZeroAError: 'Ausgangswert A muss ungleich 0 sein.',
    directConstantLabel: 'Einheitsverhältnis (B ÷ A)',
    inverseConstantLabel: 'Konstantes Produkt (A × B)',
    perOneUnit: (unitA) => `Pro 1 ${unitA}`,
    unitRateValue: (rate, unitB) => `${rate} ${unitB}`,
    directSteps: (uA, uB, a, b, c, rate, prod, x) => [
      `Direkte Proportion: Ändert sich ${uA}, ändert sich ${uB} im gleichen Verhältnis.`,
      `Einheitswert pro 1 ${uA}: ${b} ÷ ${a} = ${rate} ${uB}.`,
      `Überkreuz multiplizieren (B × C): ${b} × ${c} = ${prod}.`,
      `Durch A teilen: ${prod} ÷ ${a} = ${x} ${uB}.`,
    ],
    directVerify: (ba, xc) => `Verhältnisprüfung: B/A = ${ba} und X/C = ${xc}.`,
    inverseSteps: (uA, uB, a, b, c, prod, x) => [
      `Antiproportional: Steigt ${uA}, sinkt ${uB} bei konstantem Produkt.`,
      `Bekanntes Paar multiplizieren (A × B): ${a} × ${b} = ${prod}.`,
      `Durch C teilen: ${prod} ÷ ${c} = ${x} ${uB}.`,
    ],
    inverseVerify: (ab, cx) => `Produktprüfung: A × B = ${ab} und C × X = ${cx}.`,
  },
  whatsapp: {
    pendingPct: 'CalculaProporcion — Berechnung unvollständig.',
    pendingDist: 'CalculaProporcion — Aufteilung unvollständig.',
    pendingRule: 'CalculaProporcion — Dreisatz unvollständig.',
    resultWord: 'Ergebnis',
    formulaWord: 'Formel',
    totalToSplit: 'Gesamtbetrag',
    totalAllocated: 'Aufgeteilte Summe',
    directTitle: 'Gerader Dreisatz',
    inverseTitle: 'Ungerader Dreisatz',
    ifWord: 'Wenn',
    forWord: 'Für',
  },
  contextualAffiliate: {
    ariaLabel: 'Empfohlene Produkte und Büroausstattung auf Amazon Spanien',
    badgeLabel: 'Amazon.es',
    disclosureShort:
      'Affiliate-Links · Als Amazon-Partner verdiene ich an qualifizierten Verkäufen über Amazon.es.',
    byModule: {
      percentages: {
        title: 'Empfohlene Tools für MwSt., Preise & Margen',
        subtitle: 'Praktische Schreibtischhelfer passend zu Ihren Rabatt- und Steuerberechnungen',
        items: [
          {
            title: 'Kaufmännischer Tischrechner mit Steuertasten',
            category: 'MwSt. & Kalkulation',
            description:
              'Solar-Tischrechner mit dedizierten TAX+/TAX−-Tasten und Margenberechnung für schnelle Belegprüfungen.',
            href: buildAmazonEsSearchUrl('calculadora financiera oficina impuestos'),
            ctaLabel: 'Bei Amazon.es ansehen',
          },
          {
            title: 'Kassenbuch für Einnahmen, Ausgaben & MwSt.',
            category: 'Selbstständige & KMU',
            description:
              'Strukturiertes Buchführungstagebuch für Nettobeträge, Steueranteile und tägliche Belege.',
            href: buildAmazonEsSearchUrl('libro contabilidad ingresos gastos autonomos'),
            ctaLabel: 'Bei Amazon.es ansehen',
          },
          {
            title: '12-stelliger Büro-Tischrechner mit Großdisplay',
            category: 'Handel & Büro',
            description:
              'Geneigtes, gut ablesbares Display mit direkter Prozent- und Gesamtsummentaste.',
            href: buildAmazonEsSearchUrl('calculadora escritorio 12 digitos gran pantalla'),
            ctaLabel: 'Bei Amazon.es ansehen',
          },
        ],
      },
      distribution: {
        title: 'Nützliche Helfer für gemeinsame Budgets & Belege',
        subtitle: 'Physische Organizer für Gruppenrechnungen, Reisen und Haushaltskassen',
        items: [
          {
            title: 'Budget-Organizer mit Umschlägen & Sparblättern',
            category: 'Haushalt & Reisen',
            description:
              'Ordner mit Reißverschlusstaschen zur übersichtlichen Aufteilung gemeinsamer Ausgaben.',
            href: buildAmazonEsSearchUrl('carpeta presupuesto ahorro sobres gastos'),
            ctaLabel: 'Bei Amazon.es ansehen',
          },
          {
            title: 'Fächermappe für Rechnungen & Quittungen',
            category: 'Belegablage',
            description:
              'Ausziehbare Dokumentenmappe zum Sortieren von WG-, Reise- und Lieferantenbelegen.',
            href: buildAmazonEsSearchUrl('archivador acordeon facturas recibos'),
            ctaLabel: 'Bei Amazon.es ansehen',
          },
          {
            title: '12-stelliger Doppelanzeige-Tischrechner',
            category: 'Gegenprüfung',
            description:
              'Prüfen Sie aufgeteilte Beträge und Einzelposten bequem direkt am Schreibtisch.',
            href: buildAmazonEsSearchUrl('calculadora escritorio 12 digitos doble pantalla'),
            ctaLabel: 'Bei Amazon.es ansehen',
          },
        ],
      },
      'rule-of-three': {
        title: 'Empfohlene Messgeräte für Skalierung & Dreisatz',
        subtitle: 'Präzisionswerkzeuge für Rezepte, Heimwerken, Baustelle und Studium',
        items: [
          {
            title: 'Digitale Präzisions-Küchenwaage (1 g)',
            category: 'Rezepte & Verhältnisse',
            description:
              'Edelstahlwaage mit Tarafunktion zum exakten Hoch- und Herunterrechnen von Zutaten.',
            href: buildAmazonEsSearchUrl('bascula cocina digital precision gramos'),
            ctaLabel: 'Bei Amazon.es ansehen',
          },
          {
            title: 'Laser-Entfernungsmesser für Bau & DIY',
            category: 'Renovierung & Handwerk',
            description:
              'Messen Sie Raumflächen exakt aus, um Farbbedarf, Materialmengen und Zeiten zu berechnen.',
            href: buildAmazonEsSearchUrl('medidor laser distancia obra bricolaje'),
            ctaLabel: 'Bei Amazon.es ansehen',
          },
          {
            title: 'Wissenschaftlicher Taschenrechner (Brüche)',
            category: 'Schule & Technik',
            description:
              'Natürliche Darstellung für Brüche, Verhältnisse und technische Umrechnungen.',
            href: buildAmazonEsSearchUrl('calculadora cientifica casio fx'),
            ctaLabel: 'Bei Amazon.es ansehen',
          },
        ],
      },
    },
  },
  seoSection: {
    examplesTitle: 'Gelöste Praxisbeispiele Schritt für Schritt',
    examplesSubtitle:
      'Typische Aufgaben zu Rückwärts-Prozent, MwSt.-Abzug, Aufteilung nach Tagen und Dreisatz. Klicken Sie auf ein Beispiel zum Laden.',
    loadInCalculator: 'In Rechner laden',
    resultPrefix: 'Ergebnis',
    workedExamples: [
      {
        id: 'ex-inverse-discount',
        category: 'Rückwärts-Prozent',
        title: 'Originalpreis nach 30 % Rabatt',
        problem: 'Sie kaufen eine Jacke für 84 € mit 30 % Rabatt. Wie hoch war der ursprüngliche Preis?',
        formula: 'Originalpreis = 84 ÷ (1 − 0,30) = 84 ÷ 0,70',
        steps: [
          'Nach 30 % Rabatt zahlen Sie 70 % (0,70) des Ausgangspreises.',
          'Teilen Sie 84 € durch 0,70 und Sie erhalten exakt 120,00 €.',
          'Echte Ersparnis: 120 € − 84 € = 36 € (30 % von 120 €).',
        ],
        answer: '120,00 € (nicht 109,20 €)',
      },
      {
        id: 'ex-remove-iva',
        category: 'MwSt.-Abzug',
        title: '21 % MwSt. aus einer 363-€-Rechnung herausrechnen',
        problem: 'Eine Rechnung lautet auf 363 € brutto inklusive 21 % MwSt. Wie hoch ist der Nettobetrag?',
        formula: 'Netto = 363 ÷ 1,21',
        steps: [
          'Der Bruttopreis entspricht 121 % der Nettobasis.',
          'Teilen Sie 363 € durch 1,21 für das Netto: 300,00 €.',
          'Die Mehrwertsteuer beträgt 363 € − 300 € = 63,00 €.',
        ],
        answer: 'Netto: 300,00 € · MwSt.: 63,00 €',
      },
      {
        id: 'ex-split-days',
        category: 'Gewichtete Aufteilung',
        title: '450 € Miete nach Aufenthaltstagen teilen',
        problem: 'Drei Freunde mieten eine Wohnung für 450 €. Ana bleibt 5 Tage, Carlos 3 Tage und Lucía 2 Tage.',
        formula: 'Anteil i = 450 × (Tage i ÷ 10 Gesamttage)',
        steps: [
          'Summe der Tage: 5 + 3 + 2 = 10 Tage.',
          'Tageskosten: 450 € ÷ 10 = 45 €/Tag.',
          'Ana zahlt 225 € (50 %), Carlos 135 € (30 %) und Lucía 90 € (20 %).',
        ],
        answer: '225 € · 135 € · 90 €',
      },
      {
        id: 'ex-rule-inverse',
        category: 'Ungerader Dreisatz',
        title: 'Arbeiter und Tage für einen Auftrag',
        problem: 'Wenn 4 Maler 6 Tage benötigen, wie viele Tage brauchen 8 Maler im gleichen Tempo?',
        formula: 'X = (4 × 6) ÷ 8',
        steps: [
          'Antiproportional: Doppelte Teamgröße halbiert die Dauer.',
          'Bekanntes Paar multiplizieren: 4 × 6 = 24 Arbeitstage.',
          'Durch 8 Maler teilen: 24 ÷ 8 = 3 Tage.',
        ],
        answer: '3 Tage',
      },
    ],
    mistakesTitle: 'Häufige Rechenfehler bei Prozenten und Proportionen',
    mistakesSubtitle: 'Warum Kopfrechen-Abkürzungen scheitern und wie die Gegenprobe funktioniert.',
    wrongLabel: 'Typischer Fehler',
    rightLabel: 'Exakte Methode',
    commonMistakes: [
      {
        title: 'Den Rabatt-% wieder auf den Endpreis addieren',
        wrongApproach: 'Endpreis mit (1 + Rabatt/100) multiplizieren.',
        rightApproach: 'Endpreis durch (1 − Rabatt/100) teilen.',
        numericalProof:
          'Bei 80 € nach 20 % Rabatt ergibt +20 % falsche 96 €. Erst 80 ÷ 0,80 liefert den echten Originalpreis von 100 €.',
      },
      {
        title: '21 % direkt vom Bruttobetrag abziehen',
        wrongApproach: 'Brutto × 0,79 rechnen, um Netto zu erhalten.',
        rightApproach: 'Bruttobetrag durch 1,21 teilen (bzw. 1,10 bei 10 %).',
        numericalProof:
          'Bei 121 € brutto ergibt −21 % falsche 95,59 €. Durch 121 ÷ 1,21 erhält man exakte 100,00 € netto.',
      },
      {
        title: 'Geraden Dreisatz bei umgekehrter Proportion anwenden',
        wrongApproach: '(B × C) ÷ A bei Tempo/Zeit oder Arbeiter/Tage nutzen.',
        rightApproach: 'Prüfen, ob mehr A weniger B bedeutet, und X = (A × B) ÷ C anwenden.',
        numericalProof:
          'Wenn 2 Hähne ein Becken in 6 Stunden füllen, brauchen 4 Hähne (2 × 6) ÷ 4 = 3 Stunden (nicht 12 Stunden).',
      },
    ],
    faqTitle: 'Häufig gestellte Fragen',
    faqSubtitle: 'Direkte Antworten rund um Rabattrechnung, Steuern, Aufteilung und Dreisatz.',
    goPercentages: 'Zu Prozente',
    goDistribution: 'Zur Aufteilung',
    goRuleOfThree: 'Zum Dreisatz',
    faqItems: [
      {
        question: 'Wie berechne ich den ursprünglichen Preis vor einem Rabatt?',
        answer:
          'Teilen Sie den Endpreis durch (1 − Rabatt/100). Bei 75 € Endpreis nach 25 % Rabatt rechnen Sie 75 ÷ 0,75 = 100 €.',
      },
      {
        question: 'Warum hebt +20 % einen Rabatt von −20 % nicht wieder auf?',
        answer:
          'Weil der Rabatt auf dem höheren Ausgangspreis berechnet wurde, der spätere Aufschlag aber auf dem niedrigeren Endpreis. Darum ergibt −20 % und danach +20 % immer weniger als 100 %.',
      },
      {
        question: 'Wie rechne ich die MwSt. (21 %, 19 %, 10 %) aus einem Betrag heraus?',
        answer:
          'Wählen Sie «MwSt. abziehen / addieren», aktivieren Sie «MwSt. abziehen» und geben Sie den Bruttobetrag ein. Der Rechner teilt durch 1,21 bzw. 1 + Satz/100.',
      },
      {
        question: 'Wie funktioniert die centgenaue Aufteilung?',
        answer:
          'CalculaProporcion verwendet das Verfahren des größten Rests (Hamilton): Zuerst werden volle Cent verteilt, danach Restcent nach dem höchsten Nachkomma-Rest vergeben.',
      },
      {
        question: 'Was ist der Unterschied zwischen Prozent- und Gewichtungsaufteilung?',
        answer:
          'Bei Prozenten geben Sie direkt Anteile in % ein (inkl. 100-%-Normalisierung). Bei Gewichten tragen Sie reale Einheiten wie Tage, Stunden oder Quadratmeter ein.',
      },
      {
        question: 'Werden meine Eingaben an einen Server gesendet?',
        answer:
          'Nein. Alle Berechnungen laufen zu 100 % lokal im Browser. Der letzte Stand wird nur im localStorage gespeichert und beim Teilen in der URL kodiert.',
      },
    ],
    resourcesTitle: 'Empfohlene Ausstattung & Werkzeuge auf Amazon.es',
    resourcesDisclosure: 'Affiliate-Auswahl · Links ausschließlich zu Amazon.es',
    resourcesLegalNotice:
      'Affiliate-Hinweis: Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Alle Produktempfehlungen verweisen ausschließlich auf www.amazon.es.',
    resources: [
      {
        title: 'Kaufmännische und Finanz-Tischrechner',
        category: 'Büro & Steuern',
        description:
          'Solarbetriebene Zweizeilen-Rechner mit direkter Prozent- und Steuertaste für Handel und Selbstständige.',
        href: buildAmazonEsSearchUrl('calculadora financiera oficina casio'),
        ctaLabel: 'Bei Amazon.es ansehen',
      },
      {
        title: 'Wissenschaftliche Rechner für Dreisatz & Studium',
        category: 'Schule & Technik',
        description:
          'Rechner mit natürlicher Bruchdarstellung für Proportionen, Umrechnungen und Naturwissenschaften.',
        href: buildAmazonEsSearchUrl('calculadora cientifica escolar universidad'),
        ctaLabel: 'Bei Amazon.es ansehen',
      },
      {
        title: 'Kassen- und Ausgabenbücher für Belege',
        category: 'Buchhaltung & Haushalt',
        description:
          'Physische Kontobücher und Belegordner für gemeinsame Ausgaben, Quittungen und Steuerübersichten.',
        href: buildAmazonEsSearchUrl('libro contabilidad ingresos gastos autonomos'),
        ctaLabel: 'Bei Amazon.es ansehen',
      },
      {
        title: 'Digitale Präzisionswaagen auf das Gramm genau',
        category: 'Küche & Werkstatt',
        description:
          'Ideal, um Rezepte oder Mischungsverhältnisse per Dreisatz exakt abzuwiegen.',
        href: buildAmazonEsSearchUrl('bascula cocina digital precision gramos'),
        ctaLabel: 'Bei Amazon.es ansehen',
      },
    ],
  },
  footer: {
    tagline:
      '100 % lokale deterministische Berechnungen im Browser · Dreisatz, Rückwärts-Prozent und centgenaue Aufteilung.',
    affiliateNotice:
      'Affiliate-Hinweis: Als Amazon-Partner verdiene ich an qualifizierten Verkäufen über die Produktlinks zu Amazon.es.',
    navAria: 'Fußzeilen-Navigation',
    linkPercentages: 'Rückwärts-Prozent & MwSt.',
    linkDistribution: 'Proportionale Aufteilung',
    linkRuleOfThree: 'Gerader & ungerader Dreisatz',
  },
};
