import { Globe, RotateCcw } from 'lucide-react';
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES, SupportedLang } from '../config/seo';
import { TranslationDictionary } from '../i18n';
import { CurrencyMode, ModuleId, NumberFormatMode } from '../types/calculator';

interface PreferencesBarProps {
  lang: SupportedLang;
  onChangeLang: (lang: SupportedLang) => void;
  activeModule: ModuleId;
  onSelectModule: (module: ModuleId) => void;
  numberFormat: NumberFormatMode;
  onChangeNumberFormat: (format: NumberFormatMode) => void;
  currency: CurrencyMode;
  onChangeCurrency: (currency: CurrencyMode) => void;
  onResetCurrentModule: () => void;
  contextLabel: string;
  t: TranslationDictionary;
}

export function PreferencesBar({
  lang,
  onChangeLang,
  activeModule,
  onSelectModule,
  numberFormat,
  onChangeNumberFormat,
  currency,
  onChangeCurrency,
  onResetCurrentModule,
  contextLabel,
  t,
}: PreferencesBarProps) {
  const mobileTabs: Array<{ id: ModuleId; label: string }> = [
    { id: 'percentages', label: t.header.navPercentages },
    { id: 'distribution', label: t.header.navDistribution },
    { id: 'rule-of-three', label: t.header.navRuleOfThree },
  ];

  return (
    <div className="no-print space-y-3">
      {/* Mobile 1-tap module switcher */}
      <div
        role="tablist"
        aria-label={t.preferences.mobileTabsAria}
        className="grid grid-cols-3 gap-1 rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-1 md:hidden"
      >
        {mobileTabs.map((tab) => {
          const active = activeModule === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => onSelectModule(tab.id)}
              className={`min-h-[42px] rounded-sm px-2 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap truncate cursor-pointer ${
                active
                  ? 'bg-[#18181B] text-[#FCFBF7]'
                  : 'text-[#52524E] hover:bg-[#F3EFE6] hover:text-[#18181B]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Editorial Dateline, Language Switcher & Format Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-[#D6CFC2] py-2.5 text-xs">
        <p className="font-mono-num text-[11px] font-medium tracking-wide text-[#52524E]">
          {contextLabel}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {/* 5-Language Switcher */}
          <div className="flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5 text-[#52524E]" aria-hidden="true" />
            <span className="sr-only">{t.preferences.languageLabel}</span>
            <div className="inline-flex rounded-sm border border-[#D6CFC2] bg-[#FCFBF7] p-0.5">
              {SUPPORTED_LANGUAGES.map((code) => {
                const info = LANGUAGE_LABELS[code];
                const active = lang === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => onChangeLang(code)}
                    title={info.nativeName}
                    aria-label={info.nativeName}
                    aria-pressed={active}
                    className={`rounded-xs px-2 py-1 font-mono-num text-[11px] font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[#C2410C] text-white'
                        : 'text-[#52524E] hover:text-[#18181B]'
                    }`}
                  >
                    {info.code}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Number separator toggle */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#52524E] hidden sm:inline">{t.preferences.separatorLabel}</span>
            <div className="inline-flex rounded-sm border border-[#D6CFC2] bg-[#FCFBF7] p-0.5">
              <button
                type="button"
                onClick={() => onChangeNumberFormat('es')}
                title={t.preferences.separatorEsTitle}
                className={`rounded-xs px-2 py-1 font-mono-num text-[11px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  numberFormat === 'es'
                    ? 'bg-[#18181B] text-[#FCFBF7]'
                    : 'text-[#52524E] hover:text-[#18181B]'
                }`}
              >
                1.234,56
              </button>
              <button
                type="button"
                onClick={() => onChangeNumberFormat('us')}
                title={t.preferences.separatorUsTitle}
                className={`rounded-xs px-2 py-1 font-mono-num text-[11px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  numberFormat === 'us'
                    ? 'bg-[#18181B] text-[#FCFBF7]'
                    : 'text-[#52524E] hover:text-[#18181B]'
                }`}
              >
                1,234.56
              </button>
            </div>
          </div>

          {/* Currency selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#52524E] hidden sm:inline">{t.preferences.unitLabel}</span>
            <div className="inline-flex rounded-sm border border-[#D6CFC2] bg-[#FCFBF7] p-0.5">
              {(
                [
                  { id: 'EUR', label: '€' },
                  { id: 'USD', label: '$' },
                  { id: 'NONE', label: t.preferences.noSymbol },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onChangeCurrency(opt.id)}
                  className={`rounded-xs px-2 py-1 text-[11px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    currency === opt.id
                      ? 'bg-[#18181B] text-[#FCFBF7]'
                      : 'text-[#52524E] hover:text-[#18181B]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reset button */}
          <button
            type="button"
            onClick={onResetCurrentModule}
            className="inline-flex items-center gap-1.5 rounded-sm border border-[#D6CFC2] bg-[#FCFBF7] px-2.5 py-1.5 text-[11px] font-medium text-[#52524E] hover:border-[#18181B] hover:text-[#18181B] transition-colors whitespace-nowrap cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" aria-hidden="true" />
            <span>{t.preferences.reset}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
