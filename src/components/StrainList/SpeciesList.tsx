import type { Strain } from "../../types/strain";
import GenusIcon from "../ui/GenusIcon";

interface Props {
  genus: string;
  strains: Strain[];
  onSelectSpecies: (species: string) => void;
  onBack: () => void;
}

export default function SpeciesList({ genus, strains, onSelectSpecies, onBack }: Props) {
  const speciesSet = [...new Set(strains.map((s) => s.species))].sort();
  const counts = new Map<string, number>();
  strains.forEach((s) => counts.set(s.species, (counts.get(s.species) || 0) + 1));

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-border-subtle px-4 py-3">
        <div className="mb-2 flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            className="rounded p-1 text-text-faint transition-colors hover:text-text-primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <GenusIcon genus={genus} size="sm" />
          <span className="font-sans text-[13px] font-semibold text-text-primary">
            {genus}
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {speciesSet.map((sp, i) => (
          <button
            key={sp}
            type="button"
            onClick={() => onSelectSpecies(sp)}
            className="flex w-full items-center gap-3 border-b border-border-subtle px-4 py-3 text-left transition-colors hover:bg-elevated animate-slide-in"
            style={{ animationDelay: `${i * 20}ms` }}
          >
            <span className="font-sans text-[13px] font-medium italic text-text-primary">
              {sp}
            </span>
            <span className="ml-auto font-mono text-[10px] text-text-faint">
              {counts.get(sp)} {counts.get(sp)! === 1 ? "kmen" : "kmeny"}
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-faint">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
