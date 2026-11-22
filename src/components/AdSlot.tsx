interface AdSlotProps {
  slotLabel: string;
  minHeightClass?: string;
}

export function AdSlot({ slotLabel, minHeightClass = 'min-h-[96px]' }: AdSlotProps) {
  return (
    <aside
      aria-label="Espacio publicitario"
      className={`no-print flex items-center justify-center rounded-md border border-dashed border-[#C8C0B0] bg-[#ECE7DC] px-4 py-4 text-center ${minHeightClass}`}
    >
      <div className="space-y-0.5">
        <p className="font-mono-num text-[11px] font-medium text-[#52524E]">
          Espacio publicitario reservado · {slotLabel}
        </p>
        <p className="text-xs text-[#78716C]">
          Altura mínima fija para estabilidad visual sin saltos de diseño
        </p>
      </div>
    </aside>
  );
}
