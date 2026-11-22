import { AlertTriangle, CheckCircle2, Plus, Scale, Trash2, Users } from 'lucide-react';
import {
  CurrencyMode,
  DistributionState,
  NumberFormatMode,
  ParticipantItem,
} from '../types/calculator';
import {
  calculateDistribution,
  formatMoney,
  formatNumber,
  getCurrencySymbol,
  parseInputNumber,
} from '../utils/math';
import { ResultActions } from './ResultActions';

interface DistributionModuleProps {
  state: DistributionState;
  onChange: (next: DistributionState) => void;
  numberFormat: NumberFormatMode;
  currency: CurrencyMode;
  onCopyWhatsApp: () => void;
  whatsappCopied: boolean;
  onShareLink: () => void;
  linkCopied: boolean;
}

export function DistributionModule({
  state,
  onChange,
  numberFormat,
  currency,
  onCopyWhatsApp,
  whatsappCopied,
  onShareLink,
  linkCopied,
}: DistributionModuleProps) {
  const result = calculateDistribution(state);
  const currencySymbol = getCurrencySymbol(currency);

  const handleAddParticipant = () => {
    const nextIdx = state.participants.length + 1;
    const newItem: ParticipantItem = {
      id: `p-${Date.now()}-${nextIdx}`,
      name: `Persona ${nextIdx}`,
      value: state.mode === 'weight' ? '1' : '0',
    };
    onChange({
      ...state,
      participants: [...state.participants, newItem],
    });
  };

  const handleRemoveParticipant = (id: string) => {
    if (state.participants.length <= 1) return;
    onChange({
      ...state,
      participants: state.participants.filter((p) => p.id !== id),
    });
  };

  const handleUpdateParticipant = (id: string, field: 'name' | 'value', val: string) => {
    onChange({
      ...state,
      participants: state.participants.map((p) => (p.id === id ? { ...p, [field]: val } : p)),
    });
  };

  const handleEqualSplit = () => {
    const count = state.participants.length;
    if (count === 0) return;

    if (state.mode === 'weight') {
      onChange({
        ...state,
        participants: state.participants.map((p) => ({ ...p, value: '1' })),
      });
      return;
    }

    const basePct = Math.floor(10000 / count) / 100;
    const remainder = Number((100 - basePct * count).toFixed(2));
    onChange({
      ...state,
      participants: state.participants.map((p, idx) => ({
        ...p,
        value: (idx === 0 ? basePct + remainder : basePct).toFixed(2).replace(/\.00$/, ''),
      })),
    });
  };

  const handleNormalizePercentages = () => {
    const numericValues = state.participants.map((p) => Math.max(0, parseInputNumber(p.value) ?? 0));
    const total = numericValues.reduce((acc, v) => acc + v, 0);
    if (total <= 0) {
      handleEqualSplit();
      return;
    }

    const scaled = numericValues.map((v) => Math.round(((v / total) * 100) * 100) / 100);
    const scaledSum = scaled.reduce((acc, v) => acc + v, 0);
    const diff = Math.round((100 - scaledSum) * 100) / 100;
    if (scaled.length > 0 && Math.abs(diff) > 0) {
      let maxIdx = 0;
      for (let i = 1; i < scaled.length; i++) {
        if (scaled[i] > scaled[maxIdx]) maxIdx = i;
      }
      scaled[maxIdx] = Math.round((scaled[maxIdx] + diff) * 100) / 100;
    }

    onChange({
      ...state,
      participants: state.participants.map((p, idx) => ({
        ...p,
        value: scaled[idx].toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1'),
      })),
    });
  };

  const loadPresetExample = (preset: 'trip' | 'invoice' | 'equal4') => {
    if (preset === 'trip') {
      onChange({
        totalAmount: '680',
        concept: 'Casa rural fin de semana',
        mode: 'weight',
        weightUnit: 'noches',
        participants: [
          { id: 'p-1', name: 'Elena', value: '4' },
          { id: 'p-2', name: 'Marcos', value: '3' },
          { id: 'p-3', name: 'Sofía', value: '2' },
          { id: 'p-4', name: 'David', value: '1' },
        ],
      });
    } else if (preset === 'invoice') {
      onChange({
        totalAmount: '1500',
        concept: 'Factura proyecto compartido',
        mode: 'percentage',
        weightUnit: 'partes',
        participants: [
          { id: 'p-1', name: 'Diseño y estrategia', value: '60' },
          { id: 'p-2', name: 'Desarrollo técnico', value: '40' },
        ],
      });
    } else {
      onChange({
        totalAmount: '250',
        concept: 'Cena en grupo',
        mode: 'percentage',
        weightUnit: 'partes',
        participants: [
          { id: 'p-1', name: 'Persona 1', value: '25' },
          { id: 'p-2', name: 'Persona 2', value: '25' },
          { id: 'p-3', name: 'Persona 3', value: '25' },
          { id: 'p-4', name: 'Persona 4', value: '25' },
        ],
      });
    }
  };

  const rowMap = new Map(result.rows.map((r) => [r.id, r]));

  return (
    <section aria-label="Calculadora de reparto proporcional" className="space-y-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
        {/* Left/Center Ivory Ledger Editor */}
        <div className="lg:col-span-7 rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-5 sm:p-6 space-y-5 print-clean-card">
          {/* Top Inputs */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="dist-total" className="block text-sm font-semibold text-[#18181B] mb-1.5">
                Importe total a repartir
              </label>
              <div className="relative">
                <input
                  id="dist-total"
                  type="text"
                  inputMode="decimal"
                  value={state.totalAmount}
                  onChange={(e) => onChange({ ...state, totalAmount: e.target.value })}
                  placeholder="Ej. 1200"
                  className="font-mono-num w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-4 py-3 pr-12 text-lg font-semibold text-[#18181B] placeholder:text-[#A1A1AA] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                />
                {currencySymbol && (
                  <span className="font-mono-num pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-[#52524E]">
                    {currencySymbol}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="dist-concept" className="block text-sm font-semibold text-[#18181B] mb-1.5">
                Concepto del reparto
              </label>
              <input
                id="dist-concept"
                type="text"
                value={state.concept}
                onChange={(e) => onChange({ ...state, concept: e.target.value })}
                placeholder="Ej. Gastos compartidos"
                className="w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#18181B] placeholder:text-[#A1A1AA] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
              />
            </div>
          </div>

          {/* Mode Toggle + Quick Examples */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-1 rounded-sm border border-[#D6CFC2] bg-[#F3EFE6] p-1">
              <button
                type="button"
                onClick={() => onChange({ ...state, mode: 'percentage' })}
                className={`min-h-[40px] rounded-xs px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  state.mode === 'percentage'
                    ? 'bg-[#18181B] text-[#FCFBF7]'
                    : 'text-[#52524E] hover:text-[#18181B]'
                }`}
              >
                Repartir por Porcentaje (%)
              </button>
              <button
                type="button"
                onClick={() => onChange({ ...state, mode: 'weight' })}
                className={`min-h-[40px] rounded-xs px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  state.mode === 'weight'
                    ? 'bg-[#18181B] text-[#FCFBF7]'
                    : 'text-[#52524E] hover:text-[#18181B]'
                }`}
              >
                Repartir por Pesos / Partes
              </button>
            </div>

            {state.mode === 'weight' && (
              <div className="flex flex-wrap items-center gap-2 rounded-sm border border-[#D6CFC2] bg-[#F3EFE6]/70 px-3 py-2.5 text-xs">
                <span className="font-medium text-[#52524E]">Unidad de peso:</span>
                {['días', 'horas', 'metros', 'partes', 'puntos'].map((unit) => (
                  <button
                    key={unit}
                    type="button"
                    onClick={() => onChange({ ...state, weightUnit: unit })}
                    className={`rounded-xs border px-2 py-1 font-medium transition-colors cursor-pointer ${
                      state.weightUnit === unit
                        ? 'border-[#C2410C] bg-[#C2410C] text-white'
                        : 'border-[#D6CFC2] bg-[#FCFBF7] text-[#52524E] hover:text-[#18181B]'
                    }`}
                  >
                    {unit}
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[#52524E]">Ejemplos:</span>
              <button
                type="button"
                onClick={() => loadPresetExample('trip')}
                className="rounded-sm border border-[#D6CFC2] bg-[#F3EFE6]/60 px-2.5 py-1 text-xs font-medium text-[#3F3F46] hover:bg-[#FFFFFF] hover:border-[#18181B] cursor-pointer"
              >
                Viaje por noches
              </button>
              <button
                type="button"
                onClick={() => loadPresetExample('invoice')}
                className="rounded-sm border border-[#D6CFC2] bg-[#F3EFE6]/60 px-2.5 py-1 text-xs font-medium text-[#3F3F46] hover:bg-[#FFFFFF] hover:border-[#18181B] cursor-pointer"
              >
                Factura 60 / 40
              </button>
              <button
                type="button"
                onClick={() => loadPresetExample('equal4')}
                className="rounded-sm border border-[#D6CFC2] bg-[#F3EFE6]/60 px-2.5 py-1 text-xs font-medium text-[#3F3F46] hover:bg-[#FFFFFF] hover:border-[#18181B] cursor-pointer"
              >
                4 personas iguales
              </button>
            </div>
          </div>

          {/* Quick Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#D6CFC2] pt-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleEqualSplit}
                className="inline-flex items-center gap-1.5 rounded-sm border border-[#D6CFC2] bg-[#FFFFFF] px-3 py-2 text-xs font-semibold text-[#18181B] hover:border-[#18181B] transition-colors whitespace-nowrap cursor-pointer"
              >
                <Users className="h-3.5 w-3.5 text-[#C2410C]" aria-hidden="true" />
                <span>Partes iguales</span>
              </button>

              {state.mode === 'percentage' && !result.isBalanced && (
                <button
                  type="button"
                  onClick={handleNormalizePercentages}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-[#B45309] bg-[#FEF3C7] px-3 py-2 text-xs font-semibold text-[#92400E] hover:bg-[#FDE68A] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Scale className="h-3.5 w-3.5 text-[#B45309]" aria-hidden="true" />
                  <span>Normalizar al 100 %</span>
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={handleAddParticipant}
              className="inline-flex items-center gap-1.5 rounded-sm bg-[#C2410C] px-3 py-2 text-xs font-semibold text-white hover:bg-[#9A3412] transition-colors whitespace-nowrap cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Añadir parte</span>
            </button>
          </div>

          {/* Percentage Warning or Balance Status */}
          {state.mode === 'percentage' && result.valid && (
            <div
              className={`rounded-sm border p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs ${
                result.isBalanced
                  ? 'border-[#0F766E]/35 bg-[#0F766E]/10 text-[#115E59]'
                  : 'border-[#B45309]/40 bg-[#FEF3C7]/60 text-[#78350F]'
              }`}
            >
              <div className="flex items-center gap-2">
                {result.isBalanced ? (
                  <CheckCircle2 className="h-4 w-4 text-[#0F766E] shrink-0" aria-hidden="true" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-[#B45309] shrink-0" aria-hidden="true" />
                )}
                <span className="font-mono-num font-medium">
                  {result.isBalanced
                    ? `Suma total: 100 % · Reparto cuadrado al céntimo.`
                    : result.pctDifference < 0
                    ? `Suma actual: ${formatNumber(result.sumInput, numberFormat, 2, true)} % · Faltan ${formatNumber(
                        Math.abs(result.pctDifference),
                        numberFormat,
                        2,
                        true
                      )} % (${formatMoney(Math.abs(result.unallocatedAmount), numberFormat, currency)} sin asignar).`
                    : `Suma actual: ${formatNumber(result.sumInput, numberFormat, 2, true)} % · Sobran ${formatNumber(
                        result.pctDifference,
                        numberFormat,
                        2,
                        true
                      )} % (${formatMoney(Math.abs(result.unallocatedAmount), numberFormat, currency)} de exceso).`}
                </span>
              </div>
              {!result.isBalanced && (
                <button
                  type="button"
                  onClick={handleNormalizePercentages}
                  className="font-semibold text-[#92400E] underline underline-offset-2 hover:text-[#78350F] cursor-pointer"
                >
                  Ajustar al 100 %
                </button>
              )}
            </div>
          )}

          {/* Participants Rows */}
          <div className="divide-y divide-[#D6CFC2] border-y border-[#D6CFC2]">
            {state.participants.map((item, idx) => {
              const rowCalc = rowMap.get(item.id);
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-12 items-center gap-2 py-2.5"
                >
                  <div className="col-span-6 sm:col-span-5">
                    <label htmlFor={`name-${item.id}`} className="sr-only">
                      Nombre del participante {idx + 1}
                    </label>
                    <input
                      id={`name-${item.id}`}
                      type="text"
                      value={item.name}
                      onChange={(e) => handleUpdateParticipant(item.id, 'name', e.target.value)}
                      placeholder={`Participante ${idx + 1}`}
                      className="w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-3 py-2 text-sm font-medium text-[#18181B] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-3 relative">
                    <label htmlFor={`val-${item.id}`} className="sr-only">
                      {state.mode === 'percentage' ? 'Porcentaje' : 'Peso'}
                    </label>
                    <input
                      id={`val-${item.id}`}
                      type="text"
                      inputMode="decimal"
                      value={item.value}
                      onChange={(e) => handleUpdateParticipant(item.id, 'value', e.target.value)}
                      className="font-mono-num w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-3 py-2 pr-8 text-sm font-semibold text-right text-[#18181B] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                    />
                    <span className="font-mono-num pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-xs font-medium text-[#52524E]">
                      {state.mode === 'percentage' ? '%' : 'u.'}
                    </span>
                  </div>

                  <div className="hidden sm:block sm:col-span-3 text-right pr-1">
                    <p className="font-mono-num text-sm font-bold text-[#C2410C]">
                      {rowCalc ? formatMoney(rowCalc.roundedAmount, numberFormat, currency) : '—'}
                    </p>
                    {rowCalc && state.mode === 'weight' && (
                      <p className="font-mono-num text-[11px] text-[#52524E]">
                        {formatNumber(rowCalc.realPct, numberFormat, 2, true)} %
                      </p>
                    )}
                  </div>

                  <div className="col-span-2 sm:col-span-1 flex justify-end">
                    <button
                      type="button"
                      disabled={state.participants.length <= 1}
                      onClick={() => handleRemoveParticipant(item.id)}
                      aria-label={`Eliminar ${item.name || `participante ${idx + 1}`}`}
                      className="rounded-sm p-2 text-[#78716C] hover:bg-[#F3EFE6] hover:text-[#DC2626] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Obsidian Precision Breakdown Panel */}
        <div className="lg:col-span-5 rounded-md border border-[#27272A] bg-[#14171A] text-[#FCFBF7] p-5 sm:p-6 flex flex-col justify-between gap-5 print-obsidian-reset">
          {!result.valid ? (
            <div className="rounded-sm border border-[#FBBF24]/40 bg-[#FBBF24]/10 p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-[#FBBF24] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#FDE68A]">Datos incompletos</p>
                <p className="text-xs text-[#FEF3C7]/90 leading-relaxed">{result.error}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
                <div>
                  <p className="text-xs font-medium text-[#A1A1AA]">
                    {state.concept.trim() || 'Total repartido'}
                  </p>
                  <p className="font-mono-num text-3xl font-bold text-[#FDBA74]">
                    {formatMoney(result.totalRoundedSum, numberFormat, currency)}
                  </p>
                </div>
                <div className="text-right font-mono-num text-xs text-[#A1A1AA]">
                  <p>Objetivo: {formatMoney(result.totalAmount, numberFormat, currency)}</p>
                  <p className="text-[#2DD4BF] font-semibold">
                    {state.mode === 'weight'
                      ? `${formatNumber(result.sumInput, numberFormat, 2, true)} ${state.weightUnit || 'partes'}`
                      : `${formatNumber(result.sumInput, numberFormat, 2, true)} %`}
                  </p>
                </div>
              </div>

              {/* Breakdown Table */}
              <div className="overflow-x-auto border-b border-white/15 pb-2">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/15 text-[#A1A1AA]">
                      <th className="py-2 pr-2 font-medium">Parte</th>
                      <th className="py-2 px-2 font-medium text-right">% real</th>
                      <th className="py-2 px-2 font-medium text-right hidden sm:table-cell">Exacto</th>
                      <th className="py-2 pl-2 font-medium text-right">Final</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {result.rows.map((row) => (
                      <tr key={row.id} className="hover:bg-white/[0.03]">
                        <td className="py-2.5 pr-2 font-medium text-[#FCFBF7]">
                          <div>{row.name}</div>
                          {state.mode === 'weight' && (
                            <div className="font-mono-num text-[11px] text-[#A1A1AA]">
                              {formatNumber(row.inputValue, numberFormat, 2, true)} {state.weightUnit || 'partes'}
                            </div>
                          )}
                        </td>
                        <td className="font-mono-num py-2.5 px-2 text-right text-[#D4D4D8]">
                          {formatNumber(row.realPct, numberFormat, 2, true)} %
                        </td>
                        <td className="font-mono-num py-2.5 px-2 text-right text-[#A1A1AA] hidden sm:table-cell">
                          {formatMoney(row.exactAmount, numberFormat, currency, 4)}
                        </td>
                        <td className="font-mono-num py-2.5 pl-2 text-right">
                          <span className="font-bold text-[#FDBA74]">
                            {formatMoney(row.roundedAmount, numberFormat, currency)}
                          </span>
                          {row.centAdjustment !== 0 && (
                            <div className="text-[11px] font-medium text-[#FBBF24]">
                              {row.centAdjustment > 0 ? '+' : '−'}
                              {formatMoney(Math.abs(row.centAdjustment), numberFormat, currency)} ajuste
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cent verification banner */}
              <div
                className={`rounded-sm border p-3.5 flex items-start gap-2.5 text-xs ${
                  result.isBalanced
                    ? 'border-[#2DD4BF]/30 bg-[#0F766E]/20 text-[#CCFBF1]'
                    : 'border-[#FBBF24]/40 bg-[#FBBF24]/10 text-[#FDE68A]'
                }`}
              >
                {result.isBalanced ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="leading-relaxed tabular-nums">
                      <strong>Cuadre exacto al céntimo:</strong> la suma de las {result.rows.length} partes (
                      {formatMoney(result.totalRoundedSum, numberFormat, currency)}) coincide al 100 % con el importe total.
                    </p>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-4 w-4 text-[#FBBF24] shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="leading-relaxed tabular-nums">
                      Los porcentajes suman {formatNumber(result.sumInput, numberFormat, 2, true)} %. Usa{' '}
                      <strong>Normalizar al 100 %</strong> para cuadrar el reparto completo.
                    </p>
                  </>
                )}
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
