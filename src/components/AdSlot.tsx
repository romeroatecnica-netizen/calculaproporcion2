import { TranslationDictionary } from '../i18n';

interface AdSlotProps {
  slotLabel: string;
  minHeightClass?: string;
  t: TranslationDictionary;
}

export function AdSlot({ slotLabel, minHeightClass = 'min-h-[96px]', t }: AdSlotProps) {
  return (
    <aside
      aria-label={t.adSlot.ariaLabel}
      className={`no-print flex items-center justify-center rounded-md border border-dashed border-[#C8C0B0] bg-[#ECE7DC] px-4 py-4 text-center ${minHeightClass}`}
    >
      <div className="space-y-0.5">
        <p className="font-mono-num text-[11px] font-medium text-[#52524E]">
          {t.adSlot.reservedPrefix} · {slotLabel}
        </p>
        <p className="text-xs text-[#78716C]">{t.adSlot.clsNote}</p>
      </div>
    </aside>
  );
}
