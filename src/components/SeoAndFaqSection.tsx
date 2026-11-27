import { useState } from 'react';
import { ChevronDown, ExternalLink, ShoppingBag } from 'lucide-react';
import {
  AMAZON_LINK_REL,
  AMAZON_LINK_TARGET,
  enforceAmazonEsAffiliateUrl,
} from '../config/affiliate';
import { TranslationDictionary } from '../i18n';
import { ModuleId } from '../types/calculator';

interface SeoAndFaqSectionProps {
  onLoadWorkedExample: (exampleId: string) => void;
  onSelectModule: (module: ModuleId) => void;
  t: TranslationDictionary;
}

export function SeoAndFaqSection({
  onLoadWorkedExample,
  onSelectModule,
  t,
}: SeoAndFaqSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const s = t.seoSection;

  return (
    <section id="guias-y-faq" className="space-y-14 pt-6">
      {/* Worked Step-by-Step Examples */}
      <div className="space-y-5">
        <div className="border-t-2 border-[#18181B] pt-4 space-y-1.5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B]">
            {s.examplesTitle}
          </h2>
          <p className="text-sm text-[#52524E] max-w-3xl">{s.examplesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {s.workedExamples.map((ex, idx) => (
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
                  {ex.steps.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#D6CFC2]">
                <span className="font-mono-num text-xs font-bold text-[#0F766E]">
                  {s.resultPrefix}: {ex.answer}
                </span>
                <button
                  type="button"
                  onClick={() => onLoadWorkedExample(ex.id)}
                  className="no-print text-xs font-semibold text-[#C2410C] hover:text-[#9A3412] underline underline-offset-2 whitespace-nowrap cursor-pointer"
                >
                  {s.loadInCalculator}
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
            {s.mistakesTitle}
          </h2>
          <p className="text-sm text-[#52524E] max-w-3xl">{s.mistakesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {s.commonMistakes.map((mistake) => (
            <article
              key={mistake.title}
              className="rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-5 space-y-3 print-clean-card"
            >
              <h3 className="font-display text-base font-bold text-[#18181B]">{mistake.title}</h3>
              <div className="space-y-2 text-xs leading-relaxed">
                <p className="text-[#92400E] bg-[#FEF3C7]/60 border border-[#D97706]/30 rounded-sm p-2.5">
                  <strong>{s.wrongLabel}:</strong> {mistake.wrongApproach}
                </p>
                <p className="text-[#115E59] bg-[#0F766E]/10 border border-[#0F766E]/30 rounded-sm p-2.5">
                  <strong>{s.rightLabel}:</strong> {mistake.rightApproach}
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
              {s.faqTitle}
            </h2>
            <p className="text-sm text-[#52524E]">{s.faqSubtitle}</p>
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
              {s.goPercentages}
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
              {s.goDistribution}
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
              {s.goRuleOfThree}
            </button>
          </div>
        </div>

        <div className="divide-y divide-[#D6CFC2] rounded-md border border-[#D6CFC2] bg-[#FCFBF7] print-clean-card">
          {s.faqItems.map((faq, idx) => {
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

      {/* Curated Amazon.es Gear & Legal Affiliate Disclosure */}
      <aside
        aria-label={s.resourcesTitle}
        className="no-print rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#D6CFC2] pb-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-[#C2410C] shrink-0" aria-hidden="true" />
            <h2 className="font-display text-lg font-bold text-[#18181B]">{s.resourcesTitle}</h2>
          </div>
          <p className="font-mono-num text-[11px] font-medium text-[#52524E]">{s.resourcesDisclosure}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.resources.map((item) => {
            const safeHref = enforceAmazonEsAffiliateUrl(item.href);
            return (
              <a
                key={item.title}
                href={safeHref}
                target={AMAZON_LINK_TARGET}
                rel={AMAZON_LINK_REL}
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
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>

        <p className="border-t border-[#D6CFC2] pt-3 text-[11px] text-[#52524E] leading-relaxed">
          {s.resourcesLegalNotice}
        </p>
      </aside>
    </section>
  );
}
