import { AlertTriangle, ArrowRight, ArrowRightLeft, CheckCircle2 } from 'lucide-react';
import { TranslationDictionary } from '../i18n';
import { NumberFormatMode, RuleOfThreeState, RuleOfThreeType } from '../types/calculator';
import { calculateRuleOfThree } from '../utils/math';
import { ResultActions } from './ResultActions';

interface RuleOfThreeModuleProps {
  state: RuleOfThreeState;
  onChange: (next: RuleOfThreeState) => void;
  numberFormat: NumberFormatMode;
  onCopyWhatsApp: () => void;
  whatsappCopied: boolean;
  onShareLink: () => void;
  linkCopied: boolean;
  t: TranslationDictionary;
}

interface RuleExample {
  id: string;
  label: string;
  type: RuleOfThreeType;
  a: string;
  b: string;
  c: string;
  unitA: string;
  unitB: string;
}

export function RuleOfThreeModule({
  state,
  onChange,
  numberFormat,
  onCopyWhatsApp,
  whatsappCopied,
  onShareLink,
  linkCopied,
  t,
}: RuleOfThreeModuleProps) {
  const result = calculateRuleOfThree(state, numberFormat, t);
  const ui = t.ruleOfThreeUi;
  const unitADisplay = state.unitA.trim() || ui.defaultUnitA;
  const unitBDisplay = state.unitB.trim() || ui.defaultUnitB;

  const examples: RuleExample[] = [
    {
      id: 'receta',
      label: ui.examples.recipe.label,
      type: 'direct',
      a: '4',
      b: '300',
      c: '7',
      unitA: ui.examples.recipe.unitA,
      unitB: ui.examples.recipe.unitB,
    },
    {
      id: 'consumo',
      label: ui.examples.fuel.label,
      type: 'direct',
      a: '100',
      b: '6.2',
      c: '380',
      unitA: ui.examples.fuel.unitA,
      unitB: ui.examples.fuel.unitB,
    },
    {
      id: 'obreros',
      label: ui.examples.workers.label,
      type: 'inverse',
      a: '4',
      b: '6',
      c: '8',
      unitA: ui.examples.workers.unitA,
      unitB: ui.examples.workers.unitB,
    },
    {
      id: 'velocidad',
      label: ui.examples.speed.label,
      type: 'inverse',
      a: '90',
      b: '4',
      c: '120',
      unitA: ui.examples.speed.unitA,
      unitB: ui.examples.speed.unitB,
    },
  ];

  const loadExample = (ex: RuleExample) => {
    onChange({
      type: ex.type,
      a: ex.a,
      b: ex.b,
      c: ex.c,
      unitA: ex.unitA,
      unitB: ex.unitB,
      activeExampleId: ex.id,
    });
  };

  return (
    <section aria-label={ui.sectionAria} className="space-y-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
        {/* Left/Center Ivory Matrix */}
        <div className="lg:col-span-7 rounded-md border border-[#D6CFC2] bg-[#FCFBF7] p-5 sm:p-6 space-y-5 print-clean-card">
          {/* Direct vs Inverse Switch */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-1 rounded-sm border border-[#D6CFC2] bg-[#F3EFE6] p-1">
              <button
                type="button"
                onClick={() => onChange({ ...state, type: 'direct', activeExampleId: null })}
                className={`min-h-[42px] rounded-xs px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  state.type === 'direct'
                    ? 'bg-[#18181B] text-[#FCFBF7]'
                    : 'text-[#52524E] hover:text-[#18181B]'
                }`}
              >
                {ui.directBtn}
              </button>
              <button
                type="button"
                onClick={() => onChange({ ...state, type: 'inverse', activeExampleId: null })}
                className={`min-h-[42px] rounded-xs px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  state.type === 'inverse'
                    ? 'bg-[#18181B] text-[#FCFBF7]'
                    : 'text-[#52524E] hover:text-[#18181B]'
                }`}
              >
                {ui.inverseBtn}
              </button>
            </div>

            <p className="text-xs text-[#52524E]">
              {state.type === 'direct' ? ui.directDesc : ui.inverseDesc}
            </p>

            {/* Loadable Examples */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-medium text-[#52524E]">{ui.examplesLabel}</span>
              {examples.map((ex) => {
                const isSelected = state.activeExampleId === ex.id;
                return (
                  <button
                    key={ex.id}
                    type="button"
                    onClick={() => loadExample(ex)}
                    className={`rounded-sm border px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'border-[#C2410C] bg-[#C2410C]/10 text-[#C2410C] font-semibold'
                        : 'border-[#D6CFC2] bg-[#F3EFE6]/60 text-[#3F3F46] hover:border-[#18181B] hover:bg-[#FFFFFF]'
                    }`}
                  >
                    {ex.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Unit Labels */}
          <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[#D6CFC2]">
            <div className="pt-3">
              <label htmlFor="r3-unit-a" className="block text-xs font-medium text-[#52524E] mb-1">
                {ui.unitALabel}
              </label>
              <input
                id="r3-unit-a"
                type="text"
                value={state.unitA}
                onChange={(e) => onChange({ ...state, unitA: e.target.value, activeExampleId: null })}
                placeholder={ui.unitAPlaceholder}
                className="w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-3 py-2 text-xs font-medium text-[#18181B] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
              />
            </div>
            <div className="pt-3">
              <label htmlFor="r3-unit-b" className="block text-xs font-medium text-[#52524E] mb-1">
                {ui.unitBLabel}
              </label>
              <input
                id="r3-unit-b"
                type="text"
                value={state.unitB}
                onChange={(e) => onChange({ ...state, unitB: e.target.value, activeExampleId: null })}
                placeholder={ui.unitBPlaceholder}
                className="w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-3 py-2 text-xs font-medium text-[#18181B] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
              />
            </div>
          </div>

          {/* 2x2 Visual Proportion Matrix */}
          <div className="space-y-3 rounded-sm border border-[#D6CFC2] bg-[#F3EFE6]/70 p-4">
            {/* Row 1: A -> B */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-11 sm:items-center">
              <div className="sm:col-span-5">
                <label htmlFor="r3-a" className="block text-xs font-semibold text-[#52524E] mb-1">
                  {ui.ifA} ({unitADisplay})
                </label>
                <input
                  id="r3-a"
                  type="text"
                  inputMode="decimal"
                  value={state.a}
                  onChange={(e) => onChange({ ...state, a: e.target.value, activeExampleId: null })}
                  placeholder={ui.valAPlaceholder}
                  className="font-mono-num w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-3.5 py-2.5 text-lg font-semibold text-[#18181B] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                />
              </div>

              <div className="hidden sm:flex sm:col-span-1 justify-center pt-5 text-[#78716C]">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="sm:col-span-5">
                <label htmlFor="r3-b" className="block text-xs font-semibold text-[#52524E] mb-1">
                  {ui.equalsB} ({unitBDisplay})
                </label>
                <input
                  id="r3-b"
                  type="text"
                  inputMode="decimal"
                  value={state.b}
                  onChange={(e) => onChange({ ...state, b: e.target.value, activeExampleId: null })}
                  placeholder={ui.valBPlaceholder}
                  className="font-mono-num w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-3.5 py-2.5 text-lg font-semibold text-[#18181B] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                />
              </div>
            </div>

            {/* Row 2: C -> X */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-11 sm:items-center pt-3 border-t border-[#D6CFC2]">
              <div className="sm:col-span-5">
                <label htmlFor="r3-c" className="block text-xs font-semibold text-[#52524E] mb-1">
                  {ui.thenC} ({unitADisplay})
                </label>
                <input
                  id="r3-c"
                  type="text"
                  inputMode="decimal"
                  value={state.c}
                  onChange={(e) => onChange({ ...state, c: e.target.value, activeExampleId: null })}
                  placeholder={ui.valCPlaceholder}
                  className="font-mono-num w-full rounded-sm border border-[#BDB5A6] bg-[#FFFFFF] px-3.5 py-2.5 text-lg font-semibold text-[#18181B] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
                />
              </div>

              <div className="hidden sm:flex sm:col-span-1 justify-center pt-5 text-[#C2410C]">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="sm:col-span-5">
                <span className="block text-xs font-semibold text-[#C2410C] mb-1">
                  {ui.resultX} ({unitBDisplay})
                </span>
                <div className="font-mono-num w-full rounded-sm border border-[#18181B] bg-[#14171A] px-3.5 py-2.5 text-lg font-bold text-[#FDBA74]">
                  {result.valid ? result.formattedX : '—'}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() =>
                onChange({
                  ...state,
                  a: state.c,
                  c: state.a,
                  activeExampleId: null,
                })
              }
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#D6CFC2] bg-[#F3EFE6] px-3 py-1.5 text-xs font-medium text-[#3F3F46] hover:text-[#18181B] hover:border-[#18181B] transition-colors cursor-pointer"
            >
              <ArrowRightLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{ui.swapAC}</span>
            </button>
          </div>
        </div>

        {/* Right Obsidian Precision Readout */}
        <div className="lg:col-span-5 rounded-md border border-[#27272A] bg-[#14171A] text-[#FCFBF7] p-5 sm:p-6 flex flex-col justify-between gap-5 print-obsidian-reset">
          {!result.valid ? (
            <div className="rounded-sm border border-[#FBBF24]/40 bg-[#FBBF24]/10 p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-[#FBBF24] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#FDE68A]">{ui.checkValuesTitle}</p>
                <p className="text-xs text-[#FEF3C7]/90 leading-relaxed">{result.error}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="space-y-1.5 border-b border-white/15 pb-4">
                <p className="text-xs font-medium text-[#A1A1AA]">
                  {state.type === 'direct' ? ui.resultDirectLabel : ui.resultInverseLabel}
                </p>
                <p className="font-mono-num text-3xl sm:text-4xl font-bold tracking-tight text-[#FDBA74]">
                  {result.formattedX}{' '}
                  <span className="font-sans text-base font-medium text-[#A1A1AA]">{unitBDisplay}</span>
                </p>
              </div>

              <dl className="divide-y divide-white/10">
                <div className="flex items-center justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-[#A1A1AA]">{result.constantLabel}</dt>
                  <dd className="font-mono-num font-semibold text-[#FCFBF7]">{result.constantValue}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-[#A1A1AA]">{ui.appliedFormulaLabel}</dt>
                  <dd className="font-mono-num font-semibold text-[#FDBA74]">{result.formulaText}</dd>
                </div>
              </dl>

              <div className="rounded-sm border border-[#2DD4BF]/30 bg-[#0F766E]/20 p-3.5 flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-mono-num text-xs font-medium text-[#CCFBF1] leading-relaxed">
                  {result.verificationText}
                </p>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-[#E4E4E7]">{ui.stepsTitle}</p>
                <div className="font-mono-num rounded-sm bg-[#0B0D0F] border border-white/10 px-3 py-2 text-xs font-medium text-[#FDBA74]">
                  {result.substitutionText}
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
            t={t}
          />
        </div>
      </div>
    </section>
  );
}
