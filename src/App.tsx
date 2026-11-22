import { useCallback, useEffect, useState } from 'react';
import { AdSlot } from './components/AdSlot';
import { DistributionModule } from './components/DistributionModule';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PercentagesModule } from './components/PercentagesModule';
import { PreferencesBar } from './components/PreferencesBar';
import { RuleOfThreeModule } from './components/RuleOfThreeModule';
import { SeoAndFaqSection } from './components/SeoAndFaqSection';
import { getDynamicSeoContext } from './data/seoContent';
import { AppState, CurrencyMode, ModuleId, NumberFormatMode } from './types/calculator';
import {
  DEFAULT_APP_STATE,
  buildShareUrl,
  buildWhatsAppSummary,
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

  const seo = getDynamicSeoContext(state);

  useEffect(() => {
    saveStateToStorage(state);
  }, [state]);

  useEffect(() => {
    document.title = seo.title;

    const updateMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="description"]', seo.metaDescription);
    updateMeta('meta[property="og:title"]', seo.title);
    updateMeta('meta[property="og:description"]', seo.metaDescription);
    updateMeta('meta[name="twitter:title"]', seo.title);
    updateMeta('meta[name="twitter:description"]', seo.metaDescription);
  }, [seo.title, seo.metaDescription]);

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
      if (prev.activeModule === 'percentages') {
        return { ...prev, percentages: DEFAULT_APP_STATE.percentages };
      }
      if (prev.activeModule === 'distribution') {
        return { ...prev, distribution: DEFAULT_APP_STATE.distribution };
      }
      return { ...prev, ruleOfThree: DEFAULT_APP_STATE.ruleOfThree };
    });
  }, []);

  const handleShareLink = useCallback(async () => {
    const shareUrl = buildShareUrl(state);
    try {
      window.history.replaceState(null, '', shareUrl);
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
    if (exampleId === 'ex-inverse-discount') {
      setState((prev) => ({
        ...prev,
        activeModule: 'percentages',
        percentages: {
          ...prev.percentages,
          subMode: 'inverse-discount',
          amount: '84',
          rate: '30',
          activePresetId: 'dto-30',
        },
      }));
    } else if (exampleId === 'ex-remove-iva') {
      setState((prev) => ({
        ...prev,
        activeModule: 'percentages',
        percentages: {
          ...prev.percentages,
          subMode: 'tax-remove',
          amount: '363',
          rate: '21',
          activePresetId: 'iva-21',
        },
      }));
    } else if (exampleId === 'ex-split-days') {
      setState((prev) => ({
        ...prev,
        activeModule: 'distribution',
        distribution: {
          totalAmount: '450',
          concept: 'Apartamento según días de estancia',
          mode: 'weight',
          weightUnit: 'días',
          participants: [
            { id: 'p-1', name: 'Ana', value: '5' },
            { id: 'p-2', name: 'Carlos', value: '3' },
            { id: 'p-3', name: 'Lucía', value: '2' },
          ],
        },
      }));
    } else if (exampleId === 'ex-rule-inverse') {
      setState((prev) => ({
        ...prev,
        activeModule: 'rule-of-three',
        ruleOfThree: {
          type: 'inverse',
          a: '4',
          b: '6',
          c: '8',
          unitA: 'pintores',
          unitB: 'días',
          activeExampleId: 'obreros',
        },
      }));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F3EFE6] text-[#18181B]">
      <Header
        activeModule={state.activeModule}
        onSelectModule={handleSelectModule}
        onShareLink={handleShareLink}
        linkCopied={linkCopied}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-7">
        {/* Print-only header */}
        <div className="hidden print-only border-b border-[#18181B] pb-3 mb-4">
          <p className="font-display text-lg font-bold text-[#18181B]">CalculaProporcion</p>
          <p className="text-xs text-[#52524E]">{seo.contextLabel}</p>
        </div>

        <PreferencesBar
          activeModule={state.activeModule}
          onSelectModule={handleSelectModule}
          numberFormat={state.numberFormat}
          onChangeNumberFormat={handleChangeNumberFormat}
          currency={state.currency}
          onChangeCurrency={handleChangeCurrency}
          onResetCurrentModule={handleResetCurrentModule}
          contextLabel={seo.contextLabel}
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
          />
        )}

        <AdSlot slotLabel="Banner intermedio 728×90 / adaptable" minHeightClass="min-h-[96px]" />

        <SeoAndFaqSection
          onLoadWorkedExample={handleLoadWorkedExample}
          onSelectModule={handleSelectModule}
        />

        <AdSlot slotLabel="Banner inferior 728×90 / adaptable" minHeightClass="min-h-[100px]" />
      </main>

      <Footer onSelectModule={handleSelectModule} />
    </div>
  );
}
