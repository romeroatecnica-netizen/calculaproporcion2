import { ExternalLink, ShoppingBag } from 'lucide-react';
import {
  AMAZON_LINK_REL,
  AMAZON_LINK_TARGET,
  enforceAmazonEsAffiliateUrl,
} from '../config/affiliate';
import { TranslationDictionary } from '../i18n';
import { ModuleId } from '../types/calculator';

interface AffiliateRecommendationsProps {
  activeModule: ModuleId;
  t: TranslationDictionary;
}

export function AffiliateRecommendations({ activeModule, t }: AffiliateRecommendationsProps) {
  const ca = t.contextualAffiliate;
  const section = ca.byModule[activeModule];

  return (
    <aside
      aria-label={ca.ariaLabel}
      className="no-print rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-5 sm:p-6 space-y-4"
    >
      <div className="flex flex-col gap-2 border-b border-[#D6CFC2] pb-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-xs border border-[#D6CFC2] bg-[#F3EFE6] px-2 py-0.5 font-mono-num text-[11px] font-semibold text-[#18181B]">
              <ShoppingBag className="h-3 w-3 text-[#C2410C]" aria-hidden="true" />
              {ca.badgeLabel}
            </span>
            <h2 className="font-display text-base sm:text-lg font-bold text-[#18181B]">
              {section.title}
            </h2>
          </div>
          <p className="text-xs text-[#52524E]">{section.subtitle}</p>
        </div>

        <p className="text-[11px] text-[#52524E] sm:text-right max-w-md leading-snug">
          {ca.disclosureShort}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
        {section.items.map((item) => {
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
                <p className="font-mono-num text-[11px] font-medium text-[#52524E]">
                  {item.category}
                </p>
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
    </aside>
  );
}
