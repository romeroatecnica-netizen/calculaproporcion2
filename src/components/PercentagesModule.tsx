import { AlertTriangle, ArrowRightLeft, CheckCircle2, Info } from 'lucide-react';
import {
  CurrencyMode,
  NumberFormatMode,
  PercentageSubMode,
  PercentagesState,
} from '../types/calculator';
import { calculatePercentages, getCurrencySymbol, parseInputNumber } from '../utils/math';
import { ResultActions } from './ResultActions';

interface PercentagesModuleProps {
  state: PercentagesState;
  onChange: (next: PercentagesState) => void;
  numberFormat: NumberFormatMode;
  currency: CurrencyMode;
  onCopyWhatsApp: () => void;
  whatsappCopied: boolean;
  onShareLink: () => void;
  linkCopied: boolean;
}

interface PresetOption {
  id: string;
  label: string;
  subMode: PercentageSubMode;
  rate: string;
  fallbackAmount: string;
}

const PRESETS: PresetOption[] = [
  { id: 'dto-20', label: 'Precio tras 20 % dto.', subMode: 'inverse-discount', rate: '20', fallbackAmount: '80' },
  { id: 'dto-30', label: 'Precio tras 30 % dto.', subMode: 'inverse-discount', rate: '30', fallbackAmount: '70' },
  { id: 'iva-21', label: 'Quitar 21 % IVA', subMode: 'tax-remove', rate: '21', fallbackAmount: '121' },
  { id: 'iva-10', label: 'Quitar 10 % IVA', subMode: 'tax-remove', rate: '10', fallbackAmount: '110' },
];

export function PercentagesModule({
  state,
  onChange,
  numberFormat,
  currency,
  onCopyWhatsApp,
  whatsappCopied,
  onShareLink,
  linkCopied,
}: PercentagesModuleProps) {
  const result = calculatePercentages(state, numberFormat, currency);
  const currencySymbol = getCurrencySymbol(currency);

  const handlePresetClick = (preset: PresetOption) => {
    const parsedCurrent = parseInputNumber(state.amount);
    const keepAmount = parsedCurrent !== null && parsedCurrent > 0 ? state.amount : preset.fallbackAmount;
    onChange({
      ...state,
      subMode: preset.subMode,
      rate: preset.rate,
      amount: keepAmount,
      activePresetId: preset.id,
    });
  };

  const handleSubModeSelect = (subMode: PercentageSubMode) => {
    onChange({
      ...state,
      subMode,
      activePresetId: null,
    });
  };

  const isTwoValueMode = state.subMode === 'part-of-whole' || state.subMode === 'pct-change';
  const isTaxMode = state.subMode === 'tax-remove' || state.subMode === 'tax-add';

  const quickRates =
    state.subMode === 'inverse-discount'
      ? ['10', '15', '20', '25', '30', '50']
      : ['4', '10', '21', '7', '15'];

  return (
    <section aria-label="Calculadora de porcentajes directos e inversos" className="space-y-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
        {/* Left/Center Ivory Ledger Worksheet */}
        <div className="lg:col-span-7 rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-5 sm:p-6 space-y-6 print-clean-card">
          {/* Sub-mode selector */}
          <div className="space-y-3">
            <div
              role="tablist"
              aria-label="Tipo de cálculo de porcentaje"
              className="grid grid-cols-2 gap-1 rounded-sm border border-[#D6CFC2] bg-[#F3EFE6] p-1 sm:grid-cols-4"
            >
              {[
                { id: 'inverse-discount' as const, label: 'Descuento inverso' },
                { id: 'tax-remove' as const, label: 'Quitar / Añadir IVA' },
                { id: 'part-of-whole' as const, label: 'Qué % es A de B' },
                { id: 'pct-change' as const, label: 'Variación %' },
              ].map((tab) => {
                const active =
                  tab.id === 'tax-remove'
                    ? state.subMode === 'tax-remove' || state.subMode === 'tax-add'
                    : state.subMode === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => handleSubModeSelect(tab.id)}
                    className={`min-h-[40px] rounded-xs px-3 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap truncate cursor-pointer ${
                      active
                        ? 'bg-[#18181B] text-[#FCFBF7]'
                        : 'text-[#52524E] hover:text-[#18181B]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-medium text-[#52524E]">Accesos rápidos:</span>
              {PRESETS.map((preset) => {
                const isSelected = state.activePresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    className={`rounded-sm border px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'border-[#C2410C] bg-[#C2410C]/10 text-[#C2410C] font-semibold'
                        : 'border-[#D6CFC2] bg-[#F3EFE6]/60 text-[#3F3F46] hover:border-[#18181B] hover:bg-[#FFFFFF]'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tax Remove vs Add Toggle */}
          {isTaxMode && (
            <div className="flex items-center gap-1.5 rounded-sm border border-[#D6CFC2] bg-[#F3EFE6] p-1">
              <button
                type="button"
                onClick={() => onChange({ ...state, subMode: 'tax-remove', activePresetId: null })}
                className={`flex-1 rounded-xs px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  state.subMode === 'tax-remove'
                    ? 'bg-[#C2410C] text-white'
                    : 'text-[#52524E] hover:text-[#18181B]'
                }`}
              >
                Quitar IVA (Total → Base)
              </button>
              <button
                type="button"
                onClick={() => onChange({ ...state, subMode: 'tax-add', activePresetId: null })}
                className={`flex-1 rounded-xs px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  state.subMode === 'tax-add'
                    ? 'bg-[#C2410C] text-white'
                    : 'text-[#52524E] hover:text-[#18181B]'
                }`}
              >
                Añadir IVA (Base → Total)
              </button>
            </div>
          )}

          {/* Input Fields */}
          {!isTwoValueMode ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 border-t border-[#D6CFC2] pt-5">
              <div>
                <label htmlFor="pct-amount" className="block text-sm font-semibold text-[#18181B] mb-1.5">
                  {state.subMode === 'inverse-discount' && 'Precio final pagado'}
                  {state.subMode === 'tax-remove' && 'Importe total (con IVA)'}
                  {state.subMode === 'tax-add' && 'Importe base (sin IVA)'}
                </label>
                <div className="relative">
                  <input
                    id="pct-amount"
                    type="text"
                    inputMode="decimal"
                    value={state.amount}
                    onChange={(e) =>
                      onChange({ ...state, amount: e.target.value, activePresetId: null })
                    }
                    placeholder="Ej. 80,00"
                    className="font-mono-num w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-4 py-3 pr-12 text-lg font-semibold text-[#18181B] placeholder:text-[#A1A1AA] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                  />
                  {currencySymbol && (
                    <span className="font-mono-num pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-[#52524E]">
                      {currencySymbol}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-xs text-[#52524E]">
                  {state.subMode === 'inverse-discount' && 'Importe abonado tras aplicarse la rebaja.'}
                  {state.subMode === 'tax-remove' && 'Importe bruto final del ticket o factura.'}
                  {state.subMode === 'tax-add' && 'Base imponible neta antes de impuestos.'}
                </p>
              </div>

              <div>
                <label htmlFor="pct-rate" className="block text-sm font-semibold text-[#18181B] mb-1.5">
                  {state.subMode === 'inverse-discount' ? 'Descuento aplicado' : 'Porcentaje de impuesto / IVA'}
                </label>
                <div className="relative">
                  <input
                    id="pct-rate"
                    type="text"
                    inputMode="decimal"
                    value={state.rate}
                    onChange={(e) =>
                      onChange({ ...state, rate: e.target.value, activePresetId: null })
                    }
                    placeholder="Ej. 20"
                    className="font-mono-num w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-4 py-3 pr-10 text-lg font-semibold text-[#18181B] placeholder:text-[#A1A1AA] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                  />
                  <span className="font-mono-num pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-[#52524E]">
                    %
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {quickRates.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => onChange({ ...state, rate: r, activePresetId: null })}
                      className={`font-mono-num rounded-xs border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        state.rate === r
                          ? 'border-[#C2410C] bg-[#C2410C] text-white'
                          : 'border-[#D6CFC2] bg-[#F3EFE6] text-[#3F3F46] hover:border-[#18181B]'
                      }`}
                    >
                      {r} %
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 border-t border-[#D6CFC2] pt-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="pct-val-a" className="block text-sm font-semibold text-[#18181B] mb-1.5">
                    {state.subMode === 'part-of-whole' ? 'Cantidad parcial (A)' : 'Valor inicial (A)'}
                  </label>
                  <input
                    id="pct-val-a"
                    type="text"
                    inputMode="decimal"
                    value={state.valueA}
                    onChange={(e) => onChange({ ...state, valueA: e.target.value })}
                    placeholder="Ej. 35"
                    className="font-mono-num w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-4 py-3 text-lg font-semibold text-[#18181B] placeholder:text-[#A1A1AA] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                  />
                </div>

                <div>
                  <label htmlFor="pct-val-b" className="block text-sm font-semibold text-[#18181B] mb-1.5">
                    {state.subMode === 'part-of-whole' ? 'Total de referencia (B)' : 'Valor final (B)'}
                  </label>
                  <input
                    id="pct-val-b"
                    type="text"
                    inputMode="decimal"
                    value={state.valueB}
                    onChange={(e) => onChange({ ...state, valueB: e.target.value })}
                    placeholder="Ej. 140"
                    className="font-mono-num w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-4 py-3 text-lg font-semibold text-[#18181B] placeholder:text-[#A1A1AA] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() =>
                    onChange({
                      ...state,
                      valueA: state.valueB,
                      valueB: state.valueA,
                    })
                  }
                  className="inline-flex items-center gap-1.5 rounded-sm border border-[#D6CFC2] bg-[#F3EFE6] px-3 py-1.5 text-xs font-medium text-[#3F3F46] hover:text-[#18181B] hover:border-[#18181B] transition-colors cursor-pointer"
                >
                  <ArrowRightLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Intercambiar A y B</span>
                </button>
              </div>
            </div>
          )}

          {/* Mobile immediate result banner */}
          <div className="lg:hidden rounded-sm border border-[#18181B] bg-[#14171A] p-4 text-[#FCFBF7]">
            {result.valid ? (
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-xs font-medium text-[#A1A1AA]">{result.primaryLabel}</span>
                <span className="font-mono-num text-2xl font-bold text-[#FDBA74]">
                  {result.primaryValue}
                </span>
              </div>
            ) : (
              <p className="text-xs font-medium text-[#FBBF24]">{result.error}</p>
            )}
          </div>

          {/* Common Mistake Warning */}
          {result.valid && result.commonMistakeNote && (
            <div className="rounded-sm border border-[#D97706]/40 bg-[#FEF3C7]/45 p-4">
              <div className="flex items-start gap-2.5">
                <Info className="h-4 w-4 text-[#B45309] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1 text-xs text-[#78350F] leading-relaxed">
                  <p className="font-semibold text-[#92400E]">
                    Por qué no es {result.commonMistakeNote.wrongValue}
                  </p>
                  <p>{result.commonMistakeNote.explanation}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Obsidian Precision Readout Panel */}
        <div className="lg:col-span-5 rounded-md border border-[#27272A] bg-[#14171A] text-[#FCFBF7] p-5 sm:p-6 flex flex-col justify-between gap-5 print-obsidian-reset">
          {!result.valid ? (
            <div className="rounded-sm border border-[#FBBF24]/40 bg-[#FBBF24]/10 p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-[#FBBF24] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#FDE68A]">Revisa los datos introducidos</p>
                <p className="text-xs text-[#FEF3C7]/90 leading-relaxed">{result.error}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Primary Result */}
              <div className="space-y-1.5 border-b border-white/15 pb-4">
                <p className="text-xs font-medium text-[#A1A1AA]">{result.primaryLabel}</p>
                <p className="font-mono-num text-3xl sm:text-4xl font-bold tracking-tight text-[#FDBA74]">
                  {result.primaryValue}
                </p>
              </div>

              {/* Secondary Metrics */}
              <dl className="divide-y divide-white/10">
                {result.secondaryMetrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                    <dt className="text-[#A1A1AA]">{metric.label}</dt>
                    <dd
                      className={`font-mono-num font-semibold ${
                        metric.tone === 'teal'
                          ? 'text-[#2DD4BF]'
                          : metric.tone === 'amber'
                          ? 'text-[#FBBF24]'
                          : 'text-[#FCFBF7]'
                      }`}
                    >
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Verification */}
              <div className="rounded-sm border border-[#2DD4BF]/30 bg-[#0F766E]/20 p-3.5 flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-mono-num text-xs font-medium text-[#CCFBF1] leading-relaxed">
                  {result.verificationText}
                </p>
              </div>

              {/* Formula & Step-by-Step */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-[#E4E4E7]">Fórmula y desarrollo paso a paso</p>
                <div className="font-mono-num rounded-sm bg-[#0B0D0F] border border-white/10 px-3 py-2 text-xs font-medium text-[#FDBA74]">
                  {result.formulaText}
                </div>
                <ol className="space-y-1.5 text-xs text-[#D4D4D8] leading-relaxed list-decimal list-inside tabular-nums">
                  {result.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          <ResultActions
            onCopyWhatsApp={onCopyWhatsApp}
            whatsappCopied={whatsappCopied}
            onShareLink={onShareLink}
            linkCopied={linkCopied}
            disabled={!result.valid}
          />
        </div>
      </div>
    </section>
  );
}
