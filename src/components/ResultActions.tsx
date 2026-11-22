import { Check, Link2, MessageSquareText, Printer } from 'lucide-react';

interface ResultActionsProps {
  onCopyWhatsApp: () => void;
  whatsappCopied: boolean;
  onShareLink: () => void;
  linkCopied: boolean;
  disabled?: boolean;
}

export function ResultActions({
  onCopyWhatsApp,
  whatsappCopied,
  onShareLink,
  linkCopied,
  disabled = false,
}: ResultActionsProps) {
  return (
    <div className="no-print flex flex-wrap items-center gap-2 pt-4 border-t border-white/15">
      <button
        type="button"
        disabled={disabled}
        onClick={onCopyWhatsApp}
        className={`inline-flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-md px-3.5 py-2.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap min-h-[40px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
          whatsappCopied
            ? 'bg-[#0F766E] text-white'
            : 'bg-[#C2410C] text-white hover:bg-[#EA580C]'
        }`}
      >
        {whatsappCopied ? (
          <>
            <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Copiado para WhatsApp</span>
          </>
        ) : (
          <>
            <MessageSquareText className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Copiar para WhatsApp</span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={onShareLink}
        className={`inline-flex items-center justify-center gap-2 rounded-md border px-3.5 py-2.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap min-h-[40px] cursor-pointer ${
          linkCopied
            ? 'border-[#2DD4BF] bg-[#2DD4BF]/15 text-[#2DD4BF]'
            : 'border-white/20 bg-white/5 text-[#F4F4F5] hover:bg-white/10'
        }`}
      >
        {linkCopied ? (
          <>
            <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Enlace copiado</span>
          </>
        ) : (
          <>
            <Link2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Copiar enlace</span>
          </>
        )}
      </button>

      <button
        type="button"
        disabled={disabled}
        onClick={() => window.print()}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-transparent px-3.5 py-2.5 text-xs font-semibold text-[#D4D4D8] hover:text-white hover:bg-white/5 transition-colors duration-150 whitespace-nowrap min-h-[40px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Printer className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Imprimir / PDF</span>
      </button>
    </div>
  );
}
