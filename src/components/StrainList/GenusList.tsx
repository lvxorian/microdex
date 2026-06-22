import type { Strain } from "../../types/strain";
import GenusIcon from "../ui/GenusIcon";

const genusColors: Record<string, string> = {
  Lactobacillus: "#4ADE80",
  Lacticaseibacillus: "#A3E635",
  Lactiplantibacillus: "#22C55E",
  Limosilactobacillus: "#F472B6",
  Ligilactobacillus: "#FB923C",
  Bifidobacterium: "#60A5FA",
  Bacillus: "#F59E0B",
  Saccharomyces: "#FACC15",
  Streptococcus: "#A78BFA",
  Enterococcus: "#FB7185",
  Escherichia: "#06B6D4",
  Clostridium: "#8B5CF6",
  Lactococcus: "#34D399",
  Pediococcus: "#F97316",
  Propionibacterium: "#E879F9",
  Akkermansia: "#2DD4BF",
  Faecalibacterium: "#818CF8",
  Weissella: "#C084FC",
  Leuconostoc: "#FCA5A5",
};

interface Props {
  strains: Strain[];
  onSelectGenus: (genus: string) => void;
}

export default function GenusList({ strains, onSelectGenus }: Props) {
  const genera = [...new Set(strains.map((s) => s.genus))].sort();
  const counts = new Map<string, number>();
  strains.forEach((s) => counts.set(s.genus, (counts.get(s.genus) || 0) + 1));

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {genera.map((genus, i) => {
        const c = genusColors[genus] || "#9CA3AF";
        return (
          <button
            key={genus}
            type="button"
            onClick={() => onSelectGenus(genus)}
            className="group relative flex flex-col items-center gap-3 rounded-xl border border-border-subtle bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-white/10 hover:bg-elevated animate-slide-up"
            style={{
              animationDelay: `${i * 30}ms`,
              ["--genus-color" as string]: c,
            }}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full transition-all group-hover:scale-110 animate-type-glow"
              style={{
                color: c,
                background: `${c}11`,
                boxShadow: `0 0 20px ${c}22`,
              }}
            >
              <GenusIcon genus={genus} size="lg" />
            </div>
            <div className="w-full text-center min-w-0">
              <p
                className="truncate font-sans text-[13px] font-semibold leading-tight px-1"
                style={{ color: c }}
                title={genus}
              >
                {genus}
              </p>
              <p className="font-mono text-[10px] text-text-faint">
                {counts.get(genus)} {counts.get(genus)! <= 4 ? "kmeny" : "kmenů"}
              </p>
            </div>
          </button>
        );
      })}
      </div>
    </div>
  );
}
