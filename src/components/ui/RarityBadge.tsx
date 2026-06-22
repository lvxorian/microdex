import type { Rarity } from "../../types/strain";
import t from "../../i18n/cs";

const colorMap: Record<Rarity, string> = {
  legendary: "#F59E0B",
  epic: "#A78BFA",
  rare: "#06B6D4",
  common: "#9CA3AF",
};

const labelMap: Record<Rarity, string> = {
  legendary: t.rarityLegendary,
  epic: t.rarityEpic,
  rare: t.rarityRare,
  common: t.rarityCommon,
};

export default function RarityBadge({ rarity }: { rarity: Rarity }) {
  const c = colorMap[rarity];
  return (
    <span
      className="inline-flex items-center rounded border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest"
      style={{
        backgroundColor: `${c}18`,
        borderColor: `${c}44`,
        color: c,
      }}
    >
      <span
        className="mr-1 h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: c, boxShadow: `0 0 6px ${c}66` }}
      />
      {labelMap[rarity]}
    </span>
  );
}
