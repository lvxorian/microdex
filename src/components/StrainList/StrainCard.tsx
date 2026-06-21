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
      onClick={onClick}
      className={`w-full border-b border-border-subtle px-4 py-3 text-left transition-all animate-slide-in hover:bg-elevated ${
        isSelected
          ? "border-l-2 border-green-glow bg-elevated pl-[14px]"
          : "border-l-2 border-transparent"
      }`}
      type="button"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="truncate font-sans text-[13px] font-semibold text-text-primary">
            <span className="italic">{strain.genus} {strain.species}</span>
          </p>
          <p className="truncate font-mono text-[11px] text-text-muted">
            {strain.strain}
          </p>
        </div>
        <div className="mt-0.5 flex-shrink-0">
          <RarityBadge rarity={strain.rarity} />
        </div>
      </div>

      <div className="mt-2 flex gap-1 truncate">
        <span
          className="inline-block h-2 w-2 flex-shrink-0 rounded-full"
          style={{ backgroundColor: strain.color }}
        />
        <span className="truncate font-mono text-[10px] text-text-faint">
          {strain.shortCode}
        </span>
      </div>
    </button>
  );
}
