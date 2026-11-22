import { ModuleId } from '../types/calculator';

interface FooterProps {
  onSelectModule: (module: ModuleId) => void;
}

export function Footer({ onSelectModule }: FooterProps) {
  const handleNav = (module: ModuleId) => {
    onSelectModule(module);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D6CFC2] bg-[#FCFBF7] mt-14">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-display text-base font-bold text-[#18181B]">CalculaProporcion</p>
            <p className="text-xs text-[#52524E]">
              Cálculos matemáticos deterministas 100 % locales en tu navegador · Regla de tres, porcentaje inverso y reparto al céntimo.
            </p>
          </div>

          <nav aria-label="Accesos directos del pie" className="no-print flex flex-wrap items-center gap-4 text-xs font-medium text-[#52524E]">
            <button
              type="button"
              onClick={() => handleNav('percentages')}
              className="hover:text-[#C2410C] transition-colors cursor-pointer"
            >
              Porcentaje inverso e IVA
            </button>
            <span aria-hidden="true" className="text-[#BDB5A6]">·</span>
            <button
              type="button"
              onClick={() => handleNav('distribution')}
              className="hover:text-[#C2410C] transition-colors cursor-pointer"
            >
              Reparto proporcional
            </button>
            <span aria-hidden="true" className="text-[#BDB5A6]">·</span>
            <button
              type="button"
              onClick={() => handleNav('rule-of-three')}
              className="hover:text-[#C2410C] transition-colors cursor-pointer"
            >
              Regla de tres directa e inversa
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
