import { AppState, SeoContext } from '../types/calculator';

export function getDynamicSeoContext(state: AppState): SeoContext {
  const { activeModule, percentages, distribution, ruleOfThree } = state;

  if (activeModule === 'percentages') {
    switch (percentages.subMode) {
      case 'inverse-discount':
        return {
          title: 'Calcular precio original con descuento (Porcentaje inverso) | CalculaProporcion',
          metaDescription:
            'Calcula al instante el precio original antes de un descuento aplicado. Evita errores de redondeo con nuestra fórmula exacta de porcentaje inverso.',
          h1: 'Cómo calcular el precio original antes de un descuento',
          subtitle:
            'Introduce el precio final pagado y el porcentaje de descuento para recuperar el importe original exacto y comprobar el ahorro real.',
          contextLabel: 'Módulo 1 · Porcentaje inverso',
        };
      case 'tax-remove':
        return {
          title: 'Quitar el IVA a un precio (Calcular base imponible) | CalculaProporcion',
          metaDescription:
            'Desglosa el IVA de cualquier factura o ticket al instante. Calcula la base imponible exacta quitando el 21 %, 10 % o cualquier otro impuesto.',
          h1: 'Quitar el IVA a un precio y obtener la base imponible',
          subtitle:
            'Desglosa automáticamente la base neta y la cuota de IVA a partir del importe total con impuestos incluidos.',
          contextLabel: 'Módulo 1 · Desglose de IVA',
        };
      case 'tax-add':
        return {
          title: 'Añadir IVA o porcentaje a una base imponible | CalculaProporcion',
          metaDescription:
            'Suma el 21 %, 10 % o cualquier porcentaje a un importe neto para obtener la cuota de impuesto y el precio final exacto.',
          h1: 'Añadir IVA o incremento porcentual a un importe base',
          subtitle:
            'Calcula la cuota exacta de impuesto o recargo y obtén el precio total final listo para facturar o presupuestar.',
          contextLabel: 'Módulo 1 · Añadir porcentaje',
        };
      case 'part-of-whole':
        return {
          title: 'Calcular qué porcentaje es una cantidad de otra | CalculaProporcion',
          metaDescription:
            'Descubre qué porcentaje representa una cifra A respecto a un total B con fórmula paso a paso y proporción complementaria.',
          h1: 'Calcular qué porcentaje representa una cantidad sobre el total',
          subtitle:
            'Obtén la proporción exacta que supone un valor A respecto a una referencia B y comprueba el porcentaje restante.',
          contextLabel: 'Módulo 1 · Proporción porcentual',
        };
      case 'pct-change':
        return {
          title: 'Calculadora de variación porcentual (subida o bajada) | CalculaProporcion',
          metaDescription:
            'Calcula el porcentaje de aumento o descuento entre un valor inicial y un valor final con diferencia absoluta y comprobación.',
          h1: 'Calcular la variación porcentual entre dos cantidades',
          subtitle:
            'Mide con precisión el porcentaje de subida o bajada entre un valor inicial A y un valor final B.',
          contextLabel: 'Módulo 1 · Variación porcentual',
        };
    }
  }

  if (activeModule === 'distribution') {
    if (distribution.mode === 'weight') {
      return {
        title: 'Repartir gasto o lote según peso, días o partes | CalculaProporcion',
        metaDescription:
          'Divide facturas, gastos de viaje o beneficios proporcionalmente según días, horas, metros o participaciones con ajuste exacto al céntimo.',
        h1: 'Reparto proporcional según pesos, días, horas o partes',
        subtitle:
          'Asigna participaciones por estancia, consumo o unidades y obtén el importe exacto de cada persona con cuadre al céntimo.',
        contextLabel: 'Módulo 2 · Reparto por pesos',
      };
    }
    return {
      title: 'Repartir gasto o importe según porcentaje al céntimo | CalculaProporcion',
      metaDescription:
        'Calculadora de reparto proporcional por porcentajes. Normaliza al 100 %, reparte a partes iguales y ajusta céntimos para cuadrar el total.',
      h1: 'Repartir un gasto o importe según porcentaje',
      subtitle:
        'Distribuye facturas, presupuestos o premios entre varios participantes con normalización automática y ajuste exacto de céntimos.',
      contextLabel: 'Módulo 2 · Reparto por porcentajes',
    };
  }

  if (ruleOfThree.type === 'inverse') {
    return {
      title: 'Calculadora de Regla de Tres Inversa paso a paso | CalculaProporcion',
      metaDescription:
        'Resuelve problemas de regla de tres inversa online (velocidad y tiempo, operarios y días, caudal) con desarrollo paso a paso y comprobación.',
      h1: 'Calculadora de regla de tres inversa paso a paso',
      subtitle:
        'Resuelve magnitudes inversamente proporcionales (a más cantidad, menos tiempo o recurso) con fórmula explicada y verificación.',
      contextLabel: 'Módulo 3 · Regla de tres inversa',
    };
  }

  return {
    title: 'Calculadora de Regla de Tres Directa online | CalculaProporcion',
    metaDescription:
      'Calcula reglas de tres directas al instante para recetas, presupuestos, conversiones o consumo con explicación paso a paso.',
    h1: 'Calculadora de regla de tres directa online',
    subtitle:
      'Calcula proporciones directas (a más de A, más de B) con desglose de razón unitaria, sustitución y comprobación automática.',
    contextLabel: 'Módulo 3 · Regla de tres directa',
  };
}

export interface WorkedExample {
  id: string;
  category: string;
  title: string;
  problem: string;
  formula: string;
  steps: string[];
  answer: string;
}

export const WORKED_EXAMPLES: WorkedExample[] = [
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
];

export interface CommonMistake {
  title: string;
  wrongApproach: string;
  rightApproach: string;
  numericalProof: string;
}

export const COMMON_MISTAKES: CommonMistake[] = [
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
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
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
      'Selecciona la pestaña «Quitar / Añadir IVA», marca «Quitar impuesto» e introduce el importe total. La calculadora divide el total entre 1,21 (para el 21 %), 1,10 (para el 10 %) o 1,04 (para el 4 %) para darte la base imponible y la cuota exacta.',
  },
  {
    question: '¿Cómo cuadra al céntimo el reparto proporcional entre personas?',
    answer:
      'Al dividir importes con decimales pueden sobrar o faltar 1 o 2 céntimos por el redondeo estándar. CalculaProporcion aplica el método del resto mayor (Hamilton): asigna primero los céntimos enteros a cada parte y reparte los céntimos residuales entre quienes tienen la fracción decimal más alta, indicando el ajuste exacto.',
  },
  {
    question: '¿Qué diferencia hay entre repartir por porcentaje y repartir por pesos?',
    answer:
      'En el reparto por porcentaje asignas directamente qué % paga cada persona (y puedes normalizar al 100 % en un clic). En el reparto por pesos introduces unidades reales como días de estancia, metros cuadrados, horas trabajadas o participaciones, y la herramienta calcula automáticamente el porcentaje equivalente de cada uno.',
  },
  {
    question: '¿Se guardan mis datos o se envían a algún servidor?',
    answer:
      'No. Todos los cálculos se ejecutan de forma 100 % local y determinista en tu navegador. El último cálculo se guarda únicamente en tu propio almacenamiento local (localStorage) y, cuando pulsas «Compartir cálculo», los valores se codifican dentro del propio enlace para que puedas enviarlo por WhatsApp o correo.',
  },
];
