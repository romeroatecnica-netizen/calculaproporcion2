import { buildAmazonEsSearchUrl } from '../../config/affiliate';
import { TranslationDictionary } from '../types';

export const es: TranslationDictionary = {
  meta: {
    siteName: 'CalculaProporcion',
    appDescription:
      'Calcula al instante el precio original antes de un descuento, quita o añade IVA, reparte gastos por porcentajes o pesos al céntimo y resuelve reglas de tres directas e inversas.',
    howToName: 'Cómo calcular el precio original antes de un descuento (porcentaje inverso)',
    howToDescription:
      'Método exacto para obtener el precio inicial de un producto conociendo el precio final pagado y el porcentaje de descuento aplicado.',
    howToSteps: [
      {
        name: 'Convierte el porcentaje de descuento a proporción decimal',
        text: 'Divide el porcentaje de descuento entre 100. Por ejemplo, un 20 % equivale a 0,20.',
      },
      {
        name: 'Calcula el factor restante',
        text: 'Resta esa proporción a 1: 1 - 0,20 = 0,80. Significa que el precio final representa el 80 % del precio original.',
      },
      {
        name: 'Divide el precio final entre el factor restante',
        text: 'Divide el precio pagado entre 0,80. Si pagaste 80 €, el cálculo es 80 / 0,80 = 100 € de precio original (y no 96 € como ocurre al sumar el 20 % directamente).',
      },
    ],
  },
  header: {
    navPercentages: 'Porcentajes e IVA',
    navDistribution: 'Reparto',
    navRuleOfThree: 'Regla de Tres',
    navGuidesFaq: 'Guías y FAQ',
    shareCalculation: 'Compartir cálculo',
    linkCopied: 'Enlace copiado',
    navAriaLabel: 'Módulos de cálculo',
  },
  preferences: {
    mobileTabsAria: 'Seleccionar calculadora',
    separatorLabel: 'Separador:',
    separatorEsTitle: 'Separador europeo: punto de miles y coma decimal',
    separatorUsTitle: 'Separador internacional: coma de miles y punto decimal',
    unitLabel: 'Unidad:',
    noSymbol: 'Sin símbolo',
    languageLabel: 'Idioma:',
    reset: 'Restablecer',
  },
  actions: {
    copyWhatsApp: 'Copiar para WhatsApp',
    copiedWhatsApp: 'Copiado para WhatsApp',
    copyLink: 'Copiar enlace',
    linkCopied: 'Enlace copiado',
    printPdf: 'Imprimir / PDF',
  },
  adSlot: {
    ariaLabel: 'Espacio publicitario',
    reservedPrefix: 'Espacio publicitario reservado',
    intermediateLabel: 'Banner intermedio 728×90 / adaptable',
    bottomLabel: 'Banner inferior 728×90 / adaptable',
    clsNote: 'Altura mínima fija para estabilidad visual sin saltos de diseño',
  },
  seoByMode: {
    percentages: {
      'inverse-discount': {
        title: 'Calcular precio original con descuento (Porcentaje inverso) | CalculaProporcion',
        metaDescription:
          'Calcula al instante el precio original antes de un descuento aplicado. Evita errores de redondeo con nuestra fórmula exacta de porcentaje inverso.',
        h1: 'Cómo calcular el precio original antes de un descuento',
        subtitle:
          'Introduce el precio final pagado y el porcentaje de descuento para recuperar el importe original exacto y comprobar el ahorro real.',
        contextLabel: 'Módulo 01 · Porcentaje inverso',
      },
      'tax-remove': {
        title: 'Quitar el IVA a un precio (Calcular base imponible) | CalculaProporcion',
        metaDescription:
          'Desglosa el IVA de cualquier factura o ticket al instante. Calcula la base imponible exacta quitando el 21 %, 10 % o cualquier otro impuesto.',
        h1: 'Quitar el IVA a un precio y obtener la base imponible',
        subtitle:
          'Desglosa automáticamente la base neta y la cuota de IVA a partir del importe total con impuestos incluidos.',
        contextLabel: 'Módulo 01 · Desglose de IVA',
      },
      'tax-add': {
        title: 'Añadir IVA o porcentaje a una base imponible | CalculaProporcion',
        metaDescription:
          'Suma el 21 %, 10 % o cualquier porcentaje a un importe neto para obtener la cuota de impuesto y el precio final exacto.',
        h1: 'Añadir IVA o incremento porcentual a un importe base',
        subtitle:
          'Calcula la cuota exacta de impuesto o recargo y obtén el precio total final listo para facturar o presupuestar.',
        contextLabel: 'Módulo 01 · Añadir porcentaje',
      },
      'part-of-whole': {
        title: 'Calcular qué porcentaje es una cantidad de otra | CalculaProporcion',
        metaDescription:
          'Descubre qué porcentaje representa una cifra A respecto a un total B con fórmula paso a paso y proporción complementaria.',
        h1: 'Calcular qué porcentaje representa una cantidad sobre el total',
        subtitle:
          'Obtén la proporción exacta que supone un valor A respecto a una referencia B y comprueba el porcentaje restante.',
        contextLabel: 'Módulo 01 · Proporción porcentual',
      },
      'pct-change': {
        title: 'Calculadora de variación porcentual (subida o bajada) | CalculaProporcion',
        metaDescription:
          'Calcula el porcentaje de aumento o descuento entre un valor inicial y un valor final con diferencia absoluta y comprobación.',
        h1: 'Calcular la variación porcentual entre dos cantidades',
        subtitle:
          'Mide con precisión el porcentaje de subida o bajada entre un valor inicial A y un valor final B.',
        contextLabel: 'Módulo 01 · Variación porcentual',
      },
    },
    distribution: {
      percentage: {
        title: 'Repartir gasto o importe según porcentaje al céntimo | CalculaProporcion',
        metaDescription:
          'Calculadora de reparto proporcional por porcentajes. Normaliza al 100 %, reparte a partes iguales y ajusta céntimos para cuadrar el total.',
        h1: 'Repartir un gasto o importe según porcentaje',
        subtitle:
          'Distribuye facturas, presupuestos o premios entre varios participantes con normalización automática y ajuste exacto de céntimos.',
        contextLabel: 'Módulo 02 · Reparto por porcentajes',
      },
      weight: {
        title: 'Repartir gasto o lote según peso, días o partes | CalculaProporcion',
        metaDescription:
          'Divide facturas, gastos de viaje o beneficios proporcionalmente según días, horas, metros o participaciones con ajuste exacto al céntimo.',
        h1: 'Reparto proporcional según pesos, días, horas o partes',
        subtitle:
          'Asigna participaciones por estancia, consumo o unidades y obtén el importe exacto de cada persona con cuadre al céntimo.',
        contextLabel: 'Módulo 02 · Reparto por pesos',
      },
    },
    ruleOfThree: {
      direct: {
        title: 'Calculadora de Regla de Tres Directa online | CalculaProporcion',
        metaDescription:
          'Calcula reglas de tres directas al instante para recetas, presupuestos, conversiones o consumo con explicación paso a paso.',
        h1: 'Calculadora de regla de tres directa online',
        subtitle:
          'Calcula proporciones directas (a más de A, más de B) con desglose de razón unitaria, sustitución y comprobación automática.',
        contextLabel: 'Módulo 03 · Regla de tres directa',
      },
      inverse: {
        title: 'Calculadora de Regla de Tres Inversa paso a paso | CalculaProporcion',
        metaDescription:
          'Resuelve problemas de regla de tres inversa online (velocidad y tiempo, operarios y días, caudal) con desarrollo paso a paso y comprobación.',
        h1: 'Calculadora de regla de tres inversa paso a paso',
        subtitle:
          'Resuelve magnitudes inversamente proporcionales (a más cantidad, menos tiempo o recurso) con fórmula explicada y verificación.',
        contextLabel: 'Módulo 03 · Regla de tres inversa',
      },
    },
  },
  percentagesUi: {
    sectionAria: 'Calculadora de porcentajes directos e inversos',
    subModeAria: 'Tipo de cálculo de porcentaje',
    tabs: {
      inverseDiscount: 'Descuento inverso',
      tax: 'Quitar / Añadir IVA',
      partOfWhole: 'Qué % es A de B',
      pctChange: 'Variación %',
    },
    presetsLabel: 'Accesos rápidos:',
    presets: {
      dto20: 'Precio tras 20 % dto.',
      dto30: 'Precio tras 30 % dto.',
      iva21: 'Quitar 21 % IVA',
      iva10: 'Quitar 10 % IVA',
    },
    taxToggle: {
      remove: 'Quitar IVA (Total → Base)',
      add: 'Añadir IVA (Base → Total)',
    },
    labels: {
      finalPaid: 'Precio final pagado',
      totalWithTax: 'Importe total (con IVA)',
      netBase: 'Importe base (sin IVA)',
      discountApplied: 'Descuento aplicado',
      taxRate: 'Porcentaje de impuesto / IVA',
      partA: 'Cantidad parcial (A)',
      initialA: 'Valor inicial (A)',
      wholeB: 'Total de referencia (B)',
      finalB: 'Valor final (B)',
    },
    hints: {
      inverseDiscount: 'Importe abonado tras aplicarse la rebaja.',
      taxRemove: 'Importe bruto final del ticket o factura.',
      taxAdd: 'Base imponible neta antes de impuestos.',
    },
    placeholders: {
      amount: 'Ej. 80,00',
      rate: 'Ej. 20',
      valA: 'Ej. 35',
      valB: 'Ej. 140',
    },
    swapAB: 'Intercambiar A y B',
    checkInputsTitle: 'Revisa los datos introducidos',
    avoidClassicError: 'Por qué no es',
    formulaStepsTitle: 'Fórmula y desarrollo paso a paso',
  },
  percentagesMath: {
    inverseDiscount: {
      primaryLabel: 'Precio original antes del descuento',
      missingError: 'Introduce el precio final pagado y el porcentaje de descuento para calcular el precio original.',
      negativePriceError: 'El precio final no puede ser negativo.',
      over100Error: 'El descuento no puede ser igual o superior al 100 % (implicaría división entre cero o precio negativo).',
      negativePctError: 'El porcentaje de descuento debe ser igual o mayor que 0 %.',
      formulaBase: 'Precio original = Precio final ÷ (1 − Descuento / 100)',
      formulaLabel: 'Precio original',
      realSavings: 'Ahorro real obtenido',
      paidPctOfTotal: 'Porcentaje pagado del total',
      divisorFactor: 'Factor divisor aplicado',
      step1: (d, paid) => `Si te han descontado un ${d} %, el importe pagado representa el ${paid} % del precio original.`,
      step2: (d, factor) => `Calculamos el factor multiplicador restante: 1 − (${d} ÷ 100) = ${factor}.`,
      step3: (f, factor, orig) => `Dividimos el precio final entre ese factor: ${f} ÷ ${factor} = ${orig}.`,
      step4: (orig, f, sav) => `Ahorro real: ${orig} − ${f} = ${sav}.`,
      verify: (orig, d, sav, checkVal) => `Comprobación directa: ${orig} − ${d} % (${sav}) = ${checkVal}.`,
      mistakeExplain: (d, f, mult, wrong, diff) =>
        `Error frecuente evitado: si sumaras el ${d} % directamente al precio rebajado (${f} × ${mult}), obtendrías ${wrong}, quedándote ${diff} por debajo del precio real.`,
    },
    taxRemove: {
      primaryLabel: 'Base imponible (importe sin IVA)',
      missingError: 'Introduce el importe total con impuesto incluido y el porcentaje de IVA o recargo.',
      invalidRateError: 'El porcentaje de impuesto debe ser superior a −100 %.',
      formulaBase: 'Base imponible = Total ÷ (1 + IVA / 100)',
      formulaLabel: 'Base',
      taxAmountLabel: (pct) => `Cuota de impuesto (${pct} %)`,
      totalWithTaxLabel: 'Importe total con IVA',
      divisorLabel: 'Divisor aplicado',
      step1: (pct, totalPct) => `El total pagado incluye el 100 % de la base más el ${pct} % de impuesto, es decir, un ${totalPct} %.`,
      step2: (pct, div) => `Convertimos a divisor decimal: 1 + (${pct} ÷ 100) = ${div}.`,
      step3: (div, totalNum, base) => `Dividimos el total entre ${div}: ${totalNum} ÷ ${div} = ${base}.`,
      step4: (totalMoney, base, taxMoney) => `La cuota del impuesto corresponde a: ${totalMoney} − ${base} = ${taxMoney}.`,
      verify: (base, pct, taxCheck, totalCheck) =>
        `Comprobación: ${base} + ${pct} % (${taxCheck}) = ${totalCheck}.`,
      mistakeExplain: (pct, wrong, diff) =>
        `Si restaras el ${pct} % directamente al total (${wrong}), cometerías un error de ${diff} porque el IVA se calcula sobre la base, no sobre el total.`,
    },
    taxAdd: {
      primaryLabel: 'Importe total con porcentaje añadido',
      missingError: 'Introduce el importe base y el porcentaje a añadir.',
      formulaBase: 'Total = Base × (1 + Porcentaje / 100)',
      formulaLabel: 'Total',
      addedAmountLabel: (pct) => `Importe añadido (${pct} %)`,
      initialBaseLabel: 'Base inicial',
      multiplierLabel: 'Factor multiplicador',
      step1: (base, pct, taxMoney) => `Calculamos la parte proporcional: ${base} × (${pct} ÷ 100) = ${taxMoney}.`,
      step2: (base, taxMoney, total) => `Sumamos la base y el importe añadido: ${base} + ${taxMoney} = ${total}.`,
      verify: (total, factor, checkBase) => `Comprobación inversa: ${total} ÷ ${factor} = ${checkBase}.`,
    },
    partOfWhole: {
      primaryLabel: 'Porcentaje que representa A sobre B',
      missingError: 'Introduce la cantidad A y el total de referencia B.',
      zeroDivisorError: 'El valor de referencia B no puede ser 0 porque no es posible dividir entre cero.',
      formulaBase: 'Porcentaje = (A ÷ B) × 100',
      remainingTo100: 'Restante hasta el 100 %',
      differenceBA: 'Diferencia (B − A)',
      decimalRatio: 'Proporción decimal (A / B)',
      step1: (a, b, ratio) => `Dividimos la parte (A) entre el total (B): ${a} ÷ ${b} = ${ratio}.`,
      step2: (ratio, pct) => `Multiplicamos por 100 para expresar en porcentaje: ${ratio} × 100 = ${pct} %.`,
      verify: (pct, b, checkVal) => `Comprobación: el ${pct} % de ${b} es ${checkVal}.`,
    },
    pctChange: {
      missingError: 'Introduce el valor inicial (A) y el valor final (B) para calcular la variación porcentual.',
      zeroInitialError: 'El valor inicial (A) no puede ser 0 para calcular una variación porcentual.',
      formulaBase: 'Variación % = ((B − A) ÷ |A|) × 100',
      increase: 'Incremento (subida)',
      decrease: 'Reducción (bajada)',
      noChange: 'Sin variación',
      primaryPrefix: 'Variación porcentual',
      absDiffLabel: 'Diferencia absoluta (B − A)',
      ratioLabel: 'Ratio (B ÷ A)',
      step1: (b, a, diff) => `Calculamos la diferencia absoluta entre el valor final y el inicial: ${b} − ${a} = ${diff}.`,
      step2: (diff, absA, ratio) => `Dividimos la diferencia entre el valor inicial: ${diff} ÷ ${absA} = ${ratio}.`,
      step3: (pctStr) => `Multiplicamos por 100: ${pctStr} %.`,
      verify: (a, op, factorStr, b) => `Comprobación: ${a} × (1 ${op} ${factorStr}) = ${b}.`,
    },
  },
  distributionUi: {
    sectionAria: 'Calculadora de reparto proporcional',
    totalLabel: 'Importe total a repartir',
    totalPlaceholder: 'Ej. 1200',
    conceptLabel: 'Concepto del reparto',
    conceptPlaceholder: 'Ej. Gastos compartidos',
    defaultConcept: 'Reparto proporcional',
    modePct: 'Repartir por Porcentaje (%)',
    modeWeight: 'Repartir por Pesos / Partes',
    weightUnitLabel: 'Unidad de peso:',
    weightUnits: ['días', 'horas', 'metros', 'partes', 'puntos'],
    examplesLabel: 'Ejemplos:',
    examples: {
      trip: 'Viaje por noches',
      invoice: 'Factura 60 / 40',
      equal4: '4 personas iguales',
    },
    exampleData: {
      tripConcept: 'Casa rural fin de semana',
      tripUnit: 'noches',
      invoiceConcept: 'Factura proyecto compartido',
      invoicePart1: 'Diseño y estrategia',
      invoicePart2: 'Desarrollo técnico',
      equalConcept: 'Cena en grupo',
      personPrefix: 'Persona',
      partPrefix: 'Parte',
    },
    equalSplitBtn: 'Partes iguales',
    normalizeBtn: 'Normalizar al 100 %',
    addPartBtn: 'Añadir parte',
    adjust100Link: 'Ajustar al 100 %',
    statusBalanced: 'Suma total: 100 % · Reparto cuadrado al céntimo.',
    statusMissing: (sum, missing, money) =>
      `Suma actual: ${sum} % · Faltan ${missing} % (${money} sin asignar).`,
    statusExcess: (sum, excess, money) =>
      `Suma actual: ${sum} % · Sobran ${excess} % (${money} de exceso).`,
    participantNameAria: (idx) => `Nombre del participante ${idx}`,
    participantPlaceholder: (idx) => `Participante ${idx}`,
    pctInputAria: 'Porcentaje',
    weightInputAria: 'Peso',
    unitShort: 'u.',
    removeAria: (name) => `Eliminar ${name}`,
    incompleteTitle: 'Datos incompletos',
    targetLabel: 'Objetivo',
    defaultUnitLabel: 'partes',
    tableHeaders: {
      part: 'Parte',
      realPct: '% real',
      exact: 'Exacto',
      final: 'Final',
    },
    adjustmentTag: 'ajuste',
    centExactOk: (count, totalStr) =>
      `Cuadre exacto al céntimo: la suma de las ${count} partes (${totalStr}) coincide al 100 % con el importe total.`,
    centUnbalancedNote: (sumStr) =>
      `Los porcentajes suman ${sumStr} %. Usa Normalizar al 100 % para cuadrar el reparto completo.`,
    invalidTotalError: 'Introduce un importe total válido (igual o mayor que 0) para realizar el reparto.',
    noParticipantsError: 'Añade al menos un participante o concepto para repartir el importe.',
    negativeValuesError: 'Los porcentajes o pesos no pueden ser valores negativos.',
    zeroWeightError: 'La suma de pesos debe ser mayor que 0 para calcular la proporción.',
  },
  ruleOfThreeUi: {
    sectionAria: 'Calculadora de regla de tres directa e inversa',
    directBtn: 'Regla de Tres Directa',
    inverseBtn: 'Regla de Tres Inversa',
    directDesc: 'Proporción directa: si aumenta la magnitud A, también aumenta la magnitud B en la misma proporción.',
    inverseDesc: 'Proporción inversa: si aumenta la magnitud A, disminuye la magnitud B (ej. más velocidad = menos tiempo).',
    examplesLabel: 'Ejemplos:',
    examples: {
      recipe: { label: 'Receta (comensales)', unitA: 'comensales', unitB: 'gramos' },
      fuel: { label: 'Consumo (km / litros)', unitA: 'km', unitB: 'litros' },
      workers: { label: 'Obreros y días', unitA: 'obreros', unitB: 'días' },
      speed: { label: 'Velocidad y tiempo', unitA: 'km/h', unitB: 'horas' },
    },
    unitALabel: 'Etiqueta columna A (opcional)',
    unitAPlaceholder: 'Ej. comensales, obreros...',
    unitBLabel: 'Etiqueta columna B (opcional)',
    unitBPlaceholder: 'Ej. gramos, días, €...',
    defaultUnitA: 'unidades A',
    defaultUnitB: 'unidades B',
    ifA: 'Si A',
    equalsB: 'Equivale a B',
    thenC: 'Entonces C',
    resultX: 'Resultado X',
    valAPlaceholder: 'Valor A',
    valBPlaceholder: 'Valor B',
    valCPlaceholder: 'Valor C',
    swapAC: 'Intercambiar A y C',
    checkValuesTitle: 'Revisa los valores',
    resultDirectLabel: 'Resultado (Regla de Tres Directa)',
    resultInverseLabel: 'Resultado (Regla de Tres Inversa)',
    appliedFormulaLabel: 'Fórmula aplicada',
    stepsTitle: 'Desarrollo paso a paso',
  },
  ruleOfThreeMath: {
    missingError: 'Completa los valores A, B y C para calcular el resultado X.',
    directZeroAError: 'El valor A no puede ser 0 en una regla de tres directa (no se puede dividir entre cero).',
    inverseZeroCError: 'El valor C no puede ser 0 en una regla de tres inversa (implica división entre cero).',
    inverseZeroAError: 'El valor inicial A debe ser distinto de 0 para establecer una proporción inversa.',
    directConstantLabel: 'Razón unitaria (B ÷ A)',
    inverseConstantLabel: 'Producto constante (A × B)',
    perOneUnit: (unitA) => `Por cada 1 ${unitA}`,
    unitRateValue: (rate, unitB) => `${rate} ${unitB}`,
    directSteps: (uA, uB, a, b, c, rate, prod, x) => [
      `Relación directa: al variar ${uA}, ${uB} varía en la misma proporción.`,
      `Calculamos la razón por cada unidad de A: ${b} ÷ ${a} = ${rate} ${uB} por cada 1 ${uA}.`,
      `Multiplicamos en cruz (B × C): ${b} × ${c} = ${prod}.`,
      `Dividimos entre A: ${prod} ÷ ${a} = ${x} ${uB}.`,
    ],
    directVerify: (ba, xc) => `Comprobación de proporcionalidad: B/A = ${ba} y X/C = ${xc}.`,
    inverseSteps: (uA, uB, a, b, c, prod, x) => [
      `Relación inversa: si aumenta ${uA}, disminuye ${uB} (y viceversa), manteniendo constante su producto.`,
      `Multiplicamos en línea la pareja conocida (A × B): ${a} × ${b} = ${prod}.`,
      `Dividimos ese producto total entre C: ${prod} ÷ ${c} = ${x} ${uB}.`,
    ],
    inverseVerify: (ab, cx) => `Comprobación inversa: A × B = ${ab} y C × X = ${cx}.`,
  },
  whatsapp: {
    pendingPct: 'CalculaProporcion — Cálculo pendiente de completar.',
    pendingDist: 'CalculaProporcion — Reparto pendiente de completar.',
    pendingRule: 'CalculaProporcion — Regla de tres pendiente de completar.',
    resultWord: 'Resultado',
    formulaWord: 'Fórmula',
    totalToSplit: 'Total a repartir',
    totalAllocated: 'Total asignado',
    directTitle: 'Regla de Tres Directa',
    inverseTitle: 'Regla de Tres Inversa',
    ifWord: 'Si',
    forWord: 'Para',
  },
  contextualAffiliate: {
    ariaLabel: 'Productos y material recomendado en Amazon España',
    badgeLabel: 'Amazon.es',
    disclosureShort:
      'Enlaces de afiliado · En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.',
    byModule: {
      percentages: {
        title: 'Material recomendado para IVA, precios y márgenes',
        subtitle: 'Herramientas prácticas de escritorio para tus cálculos de descuentos e impuestos',
        items: [
          {
            title: 'Calculadora financiera y de IVA de escritorio',
            category: 'IVA y precios',
            description:
              'Calculadora solar de oficina con teclas dedicadas TAX+/TAX− y margen para comprobar facturas al instante.',
            href: buildAmazonEsSearchUrl('calculadora financiera oficina impuestos'),
            ctaLabel: 'Ver en Amazon.es',
          },
          {
            title: 'Libro de contabilidad, ingresos y gastos',
            category: 'Autónomos y pymes',
            description:
              'Registro físico estructurado para anotar bases imponibles, cuotas de IVA y tickets diarios.',
            href: buildAmazonEsSearchUrl('libro contabilidad ingresos gastos autonomos'),
            ctaLabel: 'Ver en Amazon.es',
          },
          {
            title: 'Calculadora de escritorio 12 dígitos gran pantalla',
            category: 'Comercio y oficina',
            description:
              'Pantalla inclinada de alta legibilidad con teclas directas de porcentaje y gran total.',
            href: buildAmazonEsSearchUrl('calculadora escritorio 12 digitos gran pantalla'),
            ctaLabel: 'Ver en Amazon.es',
          },
        ],
      },
      distribution: {
        title: 'Herramientas útiles para presupuestos y gastos compartidos',
        subtitle: 'Organizadores físicos para ordenar facturas, viajes y tickets de grupo',
        items: [
          {
            title: 'Carpeta organizadora de presupuesto y ahorro',
            category: 'Hogar y viajes',
            description:
              'Carpeta con sobres y hojas de control para repartir presupuestos compartidos y gastos por partidas.',
            href: buildAmazonEsSearchUrl('carpeta presupuesto ahorro sobres gastos'),
            ctaLabel: 'Ver en Amazon.es',
          },
          {
            title: 'Archivador acordeón para facturas y tickets',
            category: 'Documentación',
            description:
              'Clasificador extensible por compartimentos para separar recibos de piso compartido o viajes.',
            href: buildAmazonEsSearchUrl('archivador acordeon facturas recibos'),
            ctaLabel: 'Ver en Amazon.es',
          },
          {
            title: 'Calculadora de oficina doble pantalla 12 dígitos',
            category: 'Comprobación',
            description:
              'Revisa totales repartidos y suma partidas paso a paso con total comodidad en mesa.',
            href: buildAmazonEsSearchUrl('calculadora escritorio 12 digitos doble pantalla'),
            ctaLabel: 'Ver en Amazon.es',
          },
        ],
      },
      'rule-of-three': {
        title: 'Instrumentos recomendados para medidas y escalado',
        subtitle: 'Precisión física para recetas, bricolaje, obra y estudio técnico',
        items: [
          {
            title: 'Báscula digital de cocina precisión 1 g',
            category: 'Recetas y proporciones',
            description:
              'Báscula de acero inoxidable con función tara para escalar ingredientes por regla de tres.',
            href: buildAmazonEsSearchUrl('bascula cocina digital precision gramos'),
            ctaLabel: 'Ver en Amazon.es',
          },
          {
            title: 'Medidor láser de distancia para obra y hogar',
            category: 'Bricolaje y reformas',
            description:
              'Mide superficies al milímetro para calcular litros de pintura, materiales y rendimientos.',
            href: buildAmazonEsSearchUrl('medidor laser distancia obra bricolaje'),
            ctaLabel: 'Ver en Amazon.es',
          },
          {
            title: 'Calculadora científica con fracciones naturales',
            category: 'Estudio e ingeniería',
            description:
              'Pantalla natural para resolver proporciones, conversiones de unidades y ejercicios técnicos.',
            href: buildAmazonEsSearchUrl('calculadora cientifica casio fx'),
            ctaLabel: 'Ver en Amazon.es',
          },
        ],
      },
    },
  },
  seoSection: {
    examplesTitle: 'Ejemplos resueltos paso a paso',
    examplesSubtitle:
      'Casos prácticos habituales de porcentaje inverso, desglose de IVA, reparto por días y regla de tres. Pulsa en cualquiera para cargarlo en la calculadora.',
    loadInCalculator: 'Cargar en calculadora',
    resultPrefix: 'Resultado',
    workedExamples: [
      {
        id: 'ex-inverse-discount',
        category: 'Porcentaje inverso',
        title: 'Precio original tras un 30 % de descuento',
        problem: 'Has comprado una chaqueta por 84 € que tenía un 30 % de descuento aplicado. ¿Cuánto costaba originalmente?',
        formula: 'Precio original = 84 ÷ (1 − 0,30) = 84 ÷ 0,70',
        steps: [
          'Al descontar un 30 %, estás pagando el 70 % (0,70) del precio inicial.',
          'Divides 84 € entre 0,70 y obtienes exactamente 120,00 €.',
          'Ahorro real: 120 € − 84 € = 36 € (el 30 % de 120 €).',
        ],
        answer: '120,00 € (no 109,20 €)',
      },
      {
        id: 'ex-remove-iva',
        category: 'Desglose de IVA',
        title: 'Quitar el 21 % de IVA a una factura de 363 €',
        problem: 'Un proveedor te pasa un recibo total de 363 € con el 21 % de IVA incluido. ¿Cuál es la base imponible?',
        formula: 'Base = 363 ÷ 1,21',
        steps: [
          'El precio final equivale al 121 % de la base imponible.',
          'Divides 363 € entre 1,21 para obtener la base neta: 300,00 €.',
          'La cuota de IVA corresponde a la diferencia: 363 € − 300 € = 63,00 €.',
        ],
        answer: 'Base: 300,00 € · IVA: 63,00 €',
      },
      {
        id: 'ex-split-days',
        category: 'Reparto por pesos',
        title: 'Repartir una factura de 450 € según días de estancia',
        problem: 'Tres amigos alquilan un apartamento por 450 €. Ana se queda 5 días, Carlos 3 días y Lucía 2 días.',
        formula: 'Parte i = 450 × (días i ÷ 10 días totales)',
        steps: [
          'Sumas el peso total: 5 + 3 + 2 = 10 días.',
          'Coste por día: 450 € ÷ 10 = 45 €/día.',
          'Ana paga 225 € (50 %), Carlos 135 € (30 %) y Lucía 90 € (20 %).',
        ],
        answer: '225 € · 135 € · 90 €',
      },
      {
        id: 'ex-rule-inverse',
        category: 'Regla de tres inversa',
        title: 'Obreros y días para terminar una reforma',
        problem: 'Si 4 pintores tardan 6 días en pintar una nave, ¿cuántos días tardarán 8 pintores al mismo ritmo?',
        formula: 'X = (4 × 6) ÷ 8',
        steps: [
          'Es inversa porque al duplicar pintores se reduce el tiempo necesario.',
          'Multiplicas la pareja conocida: 4 × 6 = 24 jornadas de trabajo.',
          'Divides entre los 8 pintores disponibles: 24 ÷ 8 = 3 días.',
        ],
        answer: '3 días',
      },
    ],
    mistakesTitle: 'Errores frecuentes al calcular porcentajes y proporciones',
    mistakesSubtitle:
      'Por qué fallan los atajos mentales más comunes y cómo verificar cada operación en segundos.',
    wrongLabel: 'Error habitual',
    rightLabel: 'Método exacto',
    commonMistakes: [
      {
        title: 'Sumar el % de descuento al precio ya rebajado',
        wrongApproach: 'Multiplicar el precio final por (1 + descuento/100).',
        rightApproach: 'Dividir el precio final entre (1 − descuento/100).',
        numericalProof:
          'Si pagas 80 € tras un 20 % de descuento, sumar el 20 % daría 96 € (incorrecto, pues el 20 % de 96 € sería 19,20 € y dejaría el precio en 76,80 €). Dividiendo 80 ÷ 0,80 obtienes 100 € exactos.',
      },
      {
        title: 'Restar el 21 % directamente para quitar el IVA',
        wrongApproach: 'Calcular Total × 0,79 para intentar hallar la base imponible.',
        rightApproach: 'Dividir el importe total entre 1,21 (o 1,10 para IVA reducido).',
        numericalProof:
          'En una compra de 121 €, restar el 21 % daría 95,59 €, lo que es erróneo. Dividiendo 121 ÷ 1,21 recuperas la base exacta de 100,00 €.',
      },
      {
        title: 'Usar regla de tres directa cuando la relación es inversa',
        wrongApproach: 'Aplicar (B × C) ÷ A en problemas de velocidad/tiempo u operarios/días.',
        rightApproach: 'Comprobar si al aumentar A disminuye B y aplicar X = (A × B) ÷ C.',
        numericalProof:
          'Si 2 grifos llenan un depósito en 6 horas, 4 grifos no tardan 12 horas (directa), sino (2 × 6) ÷ 4 = 3 horas (inversa).',
      },
    ],
    faqTitle: 'Preguntas frecuentes sobre porcentajes, reparto y regla de tres',
    faqSubtitle: 'Respuestas directas a las dudas más buscadas sobre cálculo comercial y doméstico.',
    goPercentages: 'Ir a Porcentajes',
    goDistribution: 'Ir a Reparto',
    goRuleOfThree: 'Ir a Regla de Tres',
    faqItems: [
      {
        question: '¿Cómo calcular el precio original antes de un descuento?',
        answer:
          'Divide el precio final pagado entre (1 − porcentaje/100). Por ejemplo, si un artículo cuesta 75 € después de un 25 % de descuento, divide 75 ÷ 0,75 = 100 €. El ahorro real es de 25 €.',
      },
      {
        question: '¿Por qué no funciona sumar el mismo porcentaje para revertir una rebaja?',
        answer:
          'Porque el descuento se calculó sobre un precio mayor (el original), mientras que al intentar revertirlo sumando ese porcentaje lo estarías aplicando sobre una base más pequeña (el precio rebajado). Por eso un −20 % seguido de un +20 % siempre da menos del 100 % inicial.',
      },
      {
        question: '¿Cómo quito el IVA (21 %, 10 % o 4 %) a un ticket o factura?',
        answer:
          'Selecciona la pestaña «Quitar / Añadir IVA», marca «Quitar IVA» e introduce el importe total. La calculadora divide el total entre 1,21 (para el 21 %), 1,10 (para el 10 %) o 1,04 (para el 4 %) para darte la base imponible y la cuota exacta.',
      },
      {
        question: '¿Cómo cuadra al céntimo el reparto proporcional entre personas?',
        answer:
          'Al dividir importes con decimales pueden sobrar o faltar 1 o 2 céntimos por el redondeo estándar. CalculaProporcion aplica el método del resto mayor (Hamilton): asigna primero los céntimos enteros a cada parte y reparte los céntimos residuales entre quienes tienen la fracción decimal más alta.',
      },
      {
        question: '¿Qué diferencia hay entre repartir por porcentaje y repartir por pesos?',
        answer:
          'En el reparto por porcentaje asignas directamente qué % paga cada persona (y puedes normalizar al 100 % en un clic). En el reparto por pesos introduces unidades reales como días de estancia, metros cuadrados o horas trabajadas, y la herramienta calcula el porcentaje equivalente.',
      },
      {
        question: '¿Se guardan mis datos o se envían a algún servidor?',
        answer:
          'No. Todos los cálculos se ejecutan de forma 100 % local y determinista en tu navegador. El último cálculo se guarda únicamente en tu almacenamiento local (localStorage) y, al compartir, los valores se codifican dentro del enlace.',
      },
    ],
    resourcesTitle: 'Equipamiento y herramientas recomendadas en Amazon.es',
    resourcesDisclosure: 'Selección afiliada · Enlaces exclusivos a Amazon.es',
    resourcesLegalNotice:
      'Aviso legal de afiliados: En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables. Todos los enlaces de productos dirigen exclusivamente a www.amazon.es.',
    resources: [
      {
        title: 'Calculadoras financieras y de IVA para escritorio',
        category: 'Oficina y comercios',
        description:
          'Modelos solares con doble línea de pantalla y tecla directa de impuestos para comercios, autónomos y despachos.',
        href: buildAmazonEsSearchUrl('calculadora financiera oficina casio'),
        ctaLabel: 'Ver en Amazon.es',
      },
      {
        title: 'Calculadoras científicas para proporciones y estudio',
        category: 'Educación e ingeniería',
        description:
          'Calculadoras con escritura natural de fracciones para regla de tres, porcentajes y cálculo técnico.',
        href: buildAmazonEsSearchUrl('calculadora cientifica escolar universidad'),
        ctaLabel: 'Ver en Amazon.es',
      },
      {
        title: 'Libros de contabilidad y control de gastos',
        category: 'Autónomos y hogar',
        description:
          'Cuadernos contables y clasificadores de facturas para llevar el control diario de gastos, tickets e IVA.',
        href: buildAmazonEsSearchUrl('libro contabilidad ingresos gastos autonomos'),
        ctaLabel: 'Ver en Amazon.es',
      },
      {
        title: 'Básculas digitales de precisión en gramos',
        category: 'Cocina y taller',
        description:
          'Pesaje exacto gramo a gramo para adaptar recetas, mezclas e ingredientes mediante regla de tres.',
        href: buildAmazonEsSearchUrl('bascula cocina digital precision gramos'),
        ctaLabel: 'Ver en Amazon.es',
      },
    ],
  },
  footer: {
    tagline:
      'Cálculos matemáticos deterministas 100 % locales en tu navegador · Regla de tres, porcentaje inverso y reparto al céntimo.',
    affiliateNotice:
      'Aviso de afiliados: En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables a través de los enlaces a Amazon.es.',
    navAria: 'Accesos directos del pie',
    linkPercentages: 'Porcentaje inverso e IVA',
    linkDistribution: 'Reparto proporcional',
    linkRuleOfThree: 'Regla de tres directa e inversa',
  },
};
