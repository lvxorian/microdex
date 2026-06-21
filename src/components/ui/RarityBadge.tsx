import type { Rarity } from "../../types/strain";
import t from "../../i18n/cs";

const rarityMap: Record<Rarity, { label: string; bg: string; text: string; border: string }> = {
  legendary: {
    label: t.rarityLegendary,
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30",
  },
  epic: {
    label: t.rarityEpic,
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/30",
  },
  rare: {
    label: t.rarityRare,
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
  },
  common: {
    label: t.rarityCommon,
    bg: "bg-gray-500/10",
    text: "text-gray-400",
    border: "border-gray-500/20",
  },
};

export default function RarityBadge({ rarity }: { rarity: Rarity }) {
  const s = rarityMap[rarity];
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest ${s.bg} ${s.text} ${s.border}`}
    >
      <span
        className="mr-1 h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: s.text.replace("text-", "var(--") }}
      />
      {s.label}
    </span>
  );
}
