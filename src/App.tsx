import { useCallback, useEffect, useState } from 'react';
import { AdSlot } from './components/AdSlot';
import { DistributionModule } from './components/DistributionModule';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PercentagesModule } from './components/PercentagesModule';
import { PreferencesBar } from './components/PreferencesBar';
import { RuleOfThreeModule } from './components/RuleOfThreeModule';
import { SeoAndFaqSection } from './components/SeoAndFaqSection';
import { SupportedLang, getAlternateLinks, getCanonicalUrl } from './config/seo';
import { buildStructuredDataJson, getDynamicSeoContext } from './data/seoContent';
import { getTranslations } from './i18n';
import { AppState, CurrencyMode, ModuleId, NumberFormatMode } from './types/calculator';
import {
  buildRelativeHistoryUrl,
  buildShareUrl,
  buildWhatsAppSummary,
  getDefaultState,
  loadInitialState,
  saveStateToStorage,
} from './utils/statePersistence';

function copyTextFallback(text: string): boolean {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return copyTextFallback(text);
    }
  }
  return copyTextFallback(text);
}

export default function App() {
  const [state, setState] = useState<AppState>(() => loadInitialState());
  const [linkCopied, setLinkCopied] = useState(false);
  const [whatsappCopied, setWhatsappCopied] = useState(false);

  const t = getTranslations(state.lang);
  const seo = getDynamicSeoContext(state);

  useEffect(() => {
    saveStateToStorage(state);
  }, [state]);

  // Keep <head> canonical URL, hreflang alternates, og:url, JSON-LD, and metadata synced to CANONICAL_ORIGIN
  useEffect(() => {
    document.documentElement.lang = state.lang;
    document.title = seo.title;

    const canonicalHref = getCanonicalUrl(state.lang);

    const updateMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="description"]', seo.metaDescription);
    updateMeta('meta[property="og:title"]', seo.title);
    updateMeta('meta[property="og:description"]', seo.metaDescription);
    updateMeta('meta[property="og:url"]', canonicalHref);
    updateMeta('meta[name="twitter:title"]', seo.title);
    updateMeta('meta[name="twitter:description"]', seo.metaDescription);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalHref);

    for (const alt of getAlternateLinks()) {
      let altEl = document.querySelector(`link[rel="alternate"][hreflang="${alt.hreflang}"]`);
      if (!altEl) {
        altEl = document.createElement('link');
        altEl.setAttribute('rel', 'alternate');
        altEl.setAttribute('hreflang', alt.hreflang);
        document.head.appendChild(altEl);
      }
      altEl.setAttribute('href', alt.href);
    }

    const ldJsonEl = document.getElementById('structured-data');
    if (ldJsonEl) {
      ldJsonEl.textContent = buildStructuredDataJson(state);
    }
  }, [state, seo.title, seo.metaDescription]);

  const handleChangeLang = useCallback((nextLang: SupportedLang) => {
    setState((prev) => {
      const next: AppState = {
        ...prev,
        lang: nextLang,
      };
      try {
        window.history.replaceState(null, '', buildRelativeHistoryUrl(next, false));
      } catch {
        // Ignore history restrictions
      }
      return next;
    });
  }, []);

  const handleSelectModule = useCallback((activeModule: ModuleId) => {
    setState((prev) => ({ ...prev, activeModule }));
  }, []);

  const handleChangeNumberFormat = useCallback((numberFormat: NumberFormatMode) => {
    setState((prev) => ({ ...prev, numberFormat }));
  }, []);

  const handleChangeCurrency = useCallback((currency: CurrencyMode) => {
    setState((prev) => ({ ...prev, currency }));
  }, []);

  const handleResetCurrentModule = useCallback(() => {
    setState((prev) => {
      const defaults = getDefaultState(prev.lang);
      if (prev.activeModule === 'percentages') {
        return { ...prev, percentages: defaults.percentages };
      }
      if (prev.activeModule === 'distribution') {
        return { ...prev, distribution: defaults.distribution };
      }
      return { ...prev, ruleOfThree: defaults.ruleOfThree };
    });
  }, []);

  const handleShareLink = useCallback(async () => {
    const shareUrl = buildShareUrl(state);
    try {
      window.history.replaceState(null, '', buildRelativeHistoryUrl(state, true));
    } catch {
      // Ignore history errors
    }
    const ok = await copyToClipboard(shareUrl);
    if (ok) {
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2400);
    }
  }, [state]);

  const handleCopyWhatsApp = useCallback(async () => {
    const summary = buildWhatsAppSummary(state);
    const ok = await copyToClipboard(summary);
    if (ok) {
      setWhatsappCopied(true);
      window.setTimeout(() => setWhatsappCopied(false), 2400);
    }
  }, [state]);

  const handleLoadWorkedExample = useCallback((exampleId: string) => {
    setState((prev) => {
      const loc = getTranslations(prev.lang);
      if (exampleId === 'ex-inverse-discount') {
        return {
          ...prev,
          activeModule: 'percentages',
          percentages: {
            ...prev.percentages,
            subMode: 'inverse-discount',
            amount: '84',
            rate: '30',
            activePresetId: 'dto-30',
          },
        };
      }
      if (exampleId === 'ex-remove-iva') {
        return {
          ...prev,
          activeModule: 'percentages',
          percentages: {
            ...prev.percentages,
            subMode: 'tax-remove',
            amount: '363',
            rate: '21',
            activePresetId: 'iva-21',
          },
        };
      }
      if (exampleId === 'ex-split-days') {
        return {
          ...prev,
          activeModule: 'distribution',
          distribution: {
            totalAmount: '450',
            concept: loc.distributionUi.exampleData.tripConcept,
            mode: 'weight',
            weightUnit: loc.distributionUi.weightUnits[0],
            participants: [
              { id: 'p-1', name: 'Ana', value: '5' },
              { id: 'p-2', name: 'Carlos', value: '3' },
              { id: 'p-3', name: 'Lucía', value: '2' },
            ],
          },
        };
      }
      if (exampleId === 'ex-rule-inverse') {
        return {
          ...prev,
          activeModule: 'rule-of-three',
          ruleOfThree: {
            type: 'inverse',
            a: '4',
            b: '6',
            c: '8',
            unitA: loc.ruleOfThreeUi.examples.workers.unitA,
            unitB: loc.ruleOfThreeUi.examples.workers.unitB,
            activeExampleId: 'obreros',
          },
        };
      }
      return prev;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F3EFE6] text-[#18181B]">
      <Header
        activeModule={state.activeModule}
        onSelectModule={handleSelectModule}
        onShareLink={handleShareLink}
        linkCopied={linkCopied}
        t={t}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-7">
        {/* Print-only header */}
        <div className="hidden print-only border-b border-[#18181B] pb-3 mb-4">
          <p className="font-display text-lg font-bold text-[#18181B]">{t.meta.siteName}</p>
          <p className="text-xs text-[#52524E]">{seo.contextLabel}</p>
        </div>

        <PreferencesBar
          lang={state.lang}
          onChangeLang={handleChangeLang}
          activeModule={state.activeModule}
          onSelectModule={handleSelectModule}
          numberFormat={state.numberFormat}
          onChangeNumberFormat={handleChangeNumberFormat}
          currency={state.currency}
          onChangeCurrency={handleChangeCurrency}
          onResetCurrentModule={handleResetCurrentModule}
          contextLabel={seo.contextLabel}
          t={t}
        />

        {/* Editorial Hero Headline */}
        <div className="space-y-2.5 max-w-4xl">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#18181B] [text-wrap:balance] leading-[1.15]">
            {seo.h1}
          </h1>
          <p className="text-sm sm:text-base text-[#52524E] leading-relaxed max-w-3xl">
            {seo.subtitle}
          </p>
        </div>

        {/* Active Calculator Module */}
        {state.activeModule === 'percentages' && (
          <PercentagesModule
            state={state.percentages}
            onChange={(percentages) => setState((prev) => ({ ...prev, percentages }))}
            numberFormat={state.numberFormat}
            currency={state.currency}
            onCopyWhatsApp={handleCopyWhatsApp}
            whatsappCopied={whatsappCopied}
            onShareLink={handleShareLink}
            linkCopied={linkCopied}
            t={t}
          />
        )}

        {state.activeModule === 'distribution' && (
          <DistributionModule
            state={state.distribution}
            onChange={(distribution) => setState((prev) => ({ ...prev, distribution }))}
            numberFormat={state.numberFormat}
            currency={state.currency}
            onCopyWhatsApp={handleCopyWhatsApp}
            whatsappCopied={whatsappCopied}
            onShareLink={handleShareLink}
            linkCopied={linkCopied}
            t={t}
          />
        )}

        {state.activeModule === 'rule-of-three' && (
          <RuleOfThreeModule
            state={state.ruleOfThree}
            onChange={(ruleOfThree) => setState((prev) => ({ ...prev, ruleOfThree }))}
            numberFormat={state.numberFormat}
            onCopyWhatsApp={handleCopyWhatsApp}
            whatsappCopied={whatsappCopied}
            onShareLink={handleShareLink}
            linkCopied={linkCopied}
            t={t}
          />
        )}

        <AdSlot slotLabel={t.adSlot.intermediateLabel} minHeightClass="min-h-[96px]" t={t} />

        <SeoAndFaqSection
          onLoadWorkedExample={handleLoadWorkedExample}
          onSelectModule={handleSelectModule}
          t={t}
        />

        <AdSlot slotLabel={t.adSlot.bottomLabel} minHeightClass="min-h-[100px]" t={t} />
      </main>

      <Footer onSelectModule={handleSelectModule} t={t} />
    </div>
  );
}
