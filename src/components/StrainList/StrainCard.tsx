import type { Strain } from "../../types/strain";
import RarityBadge from "../ui/RarityBadge";

interface Props {
  strain: Strain;
  isSelected: boolean;
  onClick: () => void;
}

export default function StrainCard({ strain, isSelected, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full overflow-hidden border-b border-border-subtle px-4 py-3 text-left transition-all animate-slide-in hover:bg-elevated"
      style={{ borderColor: isSelected ? `${strain.color}55` : undefined }}
    >
      {isSelected && (
        <div
          className="absolute inset-y-0 left-0 w-0.5"
          style={{ backgroundColor: strain.color, boxShadow: `0 0 8px ${strain.glowColor}` }}
        />
      )}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="truncate font-sans text-[13px] font-semibold text-text-primary group-hover:text-white">
            <span className="italic">{strain.genus} {strain.species}</span>
          </p>
          <p className="truncate font-mono text-[11px] font-medium" style={{ color: strain.color }}>
            {strain.strain}
          </p>
          <p className="mt-1 font-mono text-[10px] text-text-faint">
            {strain.shortCode}
          </p>
        </div>
        <div className="mt-0.5 flex-shrink-0">
          <RarityBadge rarity={strain.rarity} />
        </div>
      </div>
    </button>
  );
}
