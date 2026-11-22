import { RotateCcw } from 'lucide-react';
import { CurrencyMode, ModuleId, NumberFormatMode } from '../types/calculator';

interface PreferencesBarProps {
  activeModule: ModuleId;
  onSelectModule: (module: ModuleId) => void;
  numberFormat: NumberFormatMode;
  onChangeNumberFormat: (format: NumberFormatMode) => void;
  currency: CurrencyMode;
  onChangeCurrency: (currency: CurrencyMode) => void;
  onResetCurrentModule: () => void;
  contextLabel: string;
}

export function PreferencesBar({
  activeModule,
  onSelectModule,
  numberFormat,
  onChangeNumberFormat,
  currency,
  onChangeCurrency,
  onResetCurrentModule,
  contextLabel,
}: PreferencesBarProps) {
  const mobileTabs: Array<{ id: ModuleId; label: string }> = [
    { id: 'percentages', label: 'Porcentajes e IVA' },
    { id: 'distribution', label: 'Reparto' },
    { id: 'rule-of-three', label: 'Regla de Tres' },
  ];

  return (
    <div className="no-print space-y-3">
      {/* Mobile 1-tap module switcher */}
      <div
        role="tablist"
        aria-label="Seleccionar calculadora"
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

      {/* Editorial Dateline & Format Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-[#D6CFC2] py-2.5 text-xs">
        <p className="font-mono-num text-[11px] font-medium tracking-wide text-[#52524E]">
          {contextLabel}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {/* Number separator toggle */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#52524E] hidden sm:inline">Separador:</span>
            <div className="inline-flex rounded-sm border border-[#D6CFC2] bg-[#FCFBF7] p-0.5">
              <button
                type="button"
                onClick={() => onChangeNumberFormat('es')}
                title="Separador europeo: punto de miles y coma decimal"
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
                title="Separador internacional: coma de miles y punto decimal"
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
            <span className="text-[#52524E] hidden sm:inline">Unidad:</span>
            <div className="inline-flex rounded-sm border border-[#D6CFC2] bg-[#FCFBF7] p-0.5">
              {(
                [
                  { id: 'EUR', label: '€' },
                  { id: 'USD', label: '$' },
                  { id: 'NONE', label: 'Sin símbolo' },
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
            <span>Restablecer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
