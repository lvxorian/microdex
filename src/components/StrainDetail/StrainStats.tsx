import type { Strain } from "../../types/strain";

function computeStats(strain: Strain) {
  const catCount = strain.category.length;
  const mechCount = strain.mechanisms.length;
  const studyCount = strain.studies.length;
  const symCount = strain.symptoms.length;

  const rarityOrder = { legendary: 5, epic: 4, rare: 3, common: 2 };
  const rarityScore = rarityOrder[strain.rarity] * 15;

  const clinicalEvidence = Math.min(95, 20 + rarityScore + studyCount * 8);
  const effectStrength = Math.min(95, 10 + rarityScore + mechCount * 6 + catCount * 4);
  const safetyProfile = Math.min(95, 50 + (strain.safety.includes("GRAS") ? 20 : 0) + (strain.safety.includes("EFSA") ? 15 : 0) + (strain.safety.includes("desítky") || strain.safety.includes("30") || strain.safety.includes("40") || strain.safety.includes("80") ? 15 : 0));
  const indicationCoverage = Math.min(95, 10 + catCount * 18 + symCount * 2);
  const researchQuality = Math.min(95, 15 + studyCount * 15 + (rarityOrder[strain.rarity] >= 4 ? 10 : 0));

  return [
    { label: "Klinická evidence", value: clinicalEvidence },
    { label: "Síla účinku", value: effectStrength },
    { label: "Bezpečnostní profil", value: safetyProfile },
    { label: "Pokrytí indikací", value: indicationCoverage },
    { label: "Kvalita výzkumu", value: researchQuality },
  ];
}

interface Props {
  strain: Strain;
  color: string;
}

export default function StrainStats({ strain, color }: Props) {
  const stats = computeStats(strain);

  return (
    <div className="rounded-xl border border-border-subtle glass p-4">
      <div className="mb-3 flex items-center gap-2">
        <span style={{ color }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </span>
        <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
          Parametry kmene
        </h3>
      </div>
      {stats.map((stat) => (
        <div key={stat.label} className="mb-2.5 last:mb-0">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-sans text-[10px] uppercase tracking-wider text-text-faint">
              {stat.label}
            </span>
            <span
              className="font-mono text-[11px] font-bold"
              style={{ color }}
            >
              {Math.round(stat.value)}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-border-subtle">
            <div
              className="h-full animate-stat-fill rounded-full"
              style={{
                width: `${stat.value}%`,
                background: stat.value >= 70
                  ? `linear-gradient(90deg, ${color}66, ${color})`
                  : stat.value >= 40
                    ? `linear-gradient(90deg, ${color}44, ${color}88)`
                    : `linear-gradient(90deg, ${color}22, ${color}55)`,
                boxShadow: `0 0 8px ${color}22`,
                animationDuration: "0.8s",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
