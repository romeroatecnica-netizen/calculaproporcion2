import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { COMMON_MISTAKES, FAQ_ITEMS, WORKED_EXAMPLES } from '../data/seoContent';
import { ModuleId } from '../types/calculator';

interface SeoAndFaqSectionProps {
  onLoadWorkedExample: (exampleId: string) => void;
  onSelectModule: (module: ModuleId) => void;
}

interface RecommendedResource {
  title: string;
  category: string;
  description: string;
  href: string;
  ctaLabel: string;
}

const RECOMMENDED_RESOURCES: RecommendedResource[] = [
  {
    title: 'Calculadoras científicas y financieras de escritorio',
    category: 'Material de oficina',
    description:
      'Modelos solares con doble línea de pantalla y tecla de porcentaje directo para comercios, autónomos y estudiantes.',
    href: 'https://www.amazon.es/s?k=calculadora+financiera+oficina',
    ctaLabel: 'Ver modelos recomendados',
  },
  {
    title: 'Software de facturación y desglose automático de IVA',
    category: 'Gestión para autónomos',
    description:
      'Automatiza presupuestos, facturas recurrentes y cálculo de impuestos trimestrales sin hojas manuales.',
    href: 'https://www.holded.com/es',
    ctaLabel: 'Explorar herramienta',
  },
  {
    title: 'Hojas de cálculo colaborativas en la nube',
    category: 'Productividad',
    description:
      'Crea plantillas de reparto mensual de gastos compartidos y presupuestos con fórmulas en tiempo real.',
    href: 'https://workspace.google.com/intl/es/products/sheets/',
    ctaLabel: 'Abrir Google Sheets',
  },
];

export function SeoAndFaqSection({
  onLoadWorkedExample,
  onSelectModule,
}: SeoAndFaqSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="guias-y-faq" className="space-y-14 pt-6">
      {/* Worked Step-by-Step Examples */}
      <div className="space-y-5">
        <div className="border-t-2 border-[#18181B] pt-4 space-y-1.5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B]">
            Ejemplos resueltos paso a paso
          </h2>
          <p className="text-sm text-[#52524E] max-w-3xl">
            Casos prácticos habituales de porcentaje inverso, desglose de IVA, reparto por días y regla de tres. Pulsa en cualquiera para cargarlo en la calculadora.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {WORKED_EXAMPLES.map((ex, idx) => (
            <article
              key={ex.id}
              className="rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-5 flex flex-col justify-between gap-4 print-clean-card"
            >
              <div className="space-y-2.5">
                <p className="font-mono-num text-[11px] font-semibold text-[#C2410C]">
                  0{idx + 1}. {ex.category}
                </p>
                <h3 className="font-display text-lg font-bold text-[#18181B]">{ex.title}</h3>
                <p className="text-sm text-[#52524E] leading-relaxed">{ex.problem}</p>
                <div className="font-mono-num rounded-sm border border-[#D6CFC2] bg-[#F3EFE6] px-3 py-2 text-xs font-semibold text-[#18181B]">
                  {ex.formula}
                </div>
                <ol className="space-y-1 text-xs text-[#52524E] list-decimal list-inside leading-relaxed tabular-nums">
                  {ex.steps.map((s, sIdx) => (
                    <li key={sIdx}>{s}</li>
                  ))}
                </ol>
              </div>

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#D6CFC2]">
                <span className="font-mono-num text-xs font-bold text-[#0F766E]">
                  Resultado: {ex.answer}
                </span>
                <button
                  type="button"
                  onClick={() => onLoadWorkedExample(ex.id)}
                  className="no-print text-xs font-semibold text-[#C2410C] hover:text-[#9A3412] underline underline-offset-2 whitespace-nowrap cursor-pointer"
                >
                  Cargar en calculadora
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="space-y-5">
        <div className="border-t-2 border-[#18181B] pt-4 space-y-1.5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B]">
            Errores frecuentes al calcular porcentajes y proporciones
          </h2>
          <p className="text-sm text-[#52524E] max-w-3xl">
            Por qué fallan los atajos mentales más comunes y cómo verificar cada operación en segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {COMMON_MISTAKES.map((mistake) => (
            <article
              key={mistake.title}
              className="rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-5 space-y-3 print-clean-card"
            >
              <h3 className="font-display text-base font-bold text-[#18181B]">{mistake.title}</h3>
              <div className="space-y-2 text-xs leading-relaxed">
                <p className="text-[#92400E] bg-[#FEF3C7]/60 border border-[#D97706]/30 rounded-sm p-2.5">
                  <strong>Error habitual:</strong> {mistake.wrongApproach}
                </p>
                <p className="text-[#115E59] bg-[#0F766E]/10 border border-[#0F766E]/30 rounded-sm p-2.5">
                  <strong>Método exacto:</strong> {mistake.rightApproach}
                </p>
              </div>
              <p className="text-xs text-[#52524E] leading-relaxed tabular-nums">
                {mistake.numericalProof}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Collapsible FAQ */}
      <div className="space-y-5">
        <div className="border-t-2 border-[#18181B] pt-4 flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B]">
              Preguntas frecuentes sobre porcentajes, reparto y regla de tres
            </h2>
            <p className="text-sm text-[#52524E]">
              Respuestas directas a las dudas más buscadas sobre cálculo comercial y doméstico.
            </p>
          </div>
          <div className="no-print flex items-center gap-3 text-xs font-semibold text-[#C2410C]">
            <button
              type="button"
              onClick={() => {
                onSelectModule('percentages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline cursor-pointer"
            >
              Ir a Porcentajes
            </button>
            <span aria-hidden="true" className="text-[#BDB5A6]">·</span>
            <button
              type="button"
              onClick={() => {
                onSelectModule('distribution');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline cursor-pointer"
            >
              Ir a Reparto
            </button>
            <span aria-hidden="true" className="text-[#BDB5A6]">·</span>
            <button
              type="button"
              onClick={() => {
                onSelectModule('rule-of-three');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline cursor-pointer"
            >
              Ir a Regla de Tres
            </button>
          </div>
        </div>

        <div className="divide-y divide-[#D6CFC2] rounded-md border border-[#D6CFC2] bg-[#FCFBF7] print-clean-card">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm sm:text-base font-semibold text-[#18181B] hover:bg-[#F3EFE6]/60 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#52524E] shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#C2410C]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-[#52524E] leading-relaxed tabular-nums">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Discreet Affiliate / Recommended Resources Block */}
      <aside
        aria-label="Recursos y herramientas recomendadas"
        className="no-print rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#D6CFC2] pb-3">
          <h2 className="font-display text-lg font-bold text-[#18181B]">
            Recursos y herramientas recomendadas
          </h2>
          <p className="text-xs text-[#52524E]">
            Selección editorial · Enlaces externos y afiliados contextuales
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {RECOMMENDED_RESOURCES.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="group rounded-sm border border-[#D6CFC2] bg-[#F3EFE6]/50 p-4 flex flex-col justify-between gap-3 hover:border-[#18181B] hover:bg-[#FFFFFF] transition-colors"
            >
              <div className="space-y-1.5">
                <p className="font-mono-num text-[11px] font-medium text-[#52524E]">{item.category}</p>
                <h3 className="text-sm font-bold text-[#18181B] group-hover:text-[#C2410C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#52524E] leading-relaxed">{item.description}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C]">
                <span>{item.ctaLabel}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </aside>
    </section>
  );
}
