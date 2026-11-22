import { Check, Share2 } from 'lucide-react';
import { ModuleId } from '../types/calculator';

interface HeaderProps {
  activeModule: ModuleId;
  onSelectModule: (module: ModuleId) => void;
  onShareLink: () => void;
  linkCopied: boolean;
}

export function Header({
  activeModule,
  onSelectModule,
  onShareLink,
  linkCopied,
}: HeaderProps) {
  const navItems: Array<{ id: ModuleId; label: string }> = [
    { id: 'percentages', label: 'Porcentajes e IVA' },
    { id: 'distribution', label: 'Reparto' },
    { id: 'rule-of-three', label: 'Regla de Tres' },
  ];

  return (
    <header className="no-print sticky top-0 z-30 border-b border-[#D6CFC2] bg-[#FCFBF7]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Editorial Serif Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-xl font-bold tracking-tight text-[#18181B] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] rounded-xs"
        >
          CalculaProporcion
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav aria-label="Módulos de cálculo" className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeModule === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectModule(item.id)}
                className={`relative py-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] rounded-xs ${
                  isActive
                    ? 'text-[#C2410C] font-semibold'
                    : 'text-[#52524E] hover:text-[#18181B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[13px] h-[2px] bg-[#C2410C]"
                  />
                )}
              </button>
            );
          })}
          <a
            href="#guias-y-faq"
            className="py-1.5 text-[#52524E] hover:text-[#18181B] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] rounded-xs"
          >
            Guías y FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onShareLink}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C2410C] ${
              linkCopied
                ? 'bg-[#0F766E] text-[#FCFBF7]'
                : 'bg-[#18181B] text-[#FCFBF7] hover:bg-[#C2410C]'
            }`}
          >
            {linkCopied ? (
              <>
                <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Enlace copiado</span>
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Compartir cálculo</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
