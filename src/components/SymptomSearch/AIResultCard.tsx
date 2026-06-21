import type { AIRecommendation, Strain } from "../../types/strain";

interface Props {
  recommendation: AIRecommendation;
  strain?: Strain;
}

export default function AIResultCard({ recommendation, strain }: Props) {
  const scoreColor =
    recommendation.score >= 80
      ? "text-green-glow"
      : recommendation.score >= 50
        ? "text-amber"
        : "text-text-muted";

  return (
    <div className="rounded border border-border-subtle bg-base p-4 transition-all hover:border-border-accent">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {strain && (
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: strain.color }}
            />
          )}
          <p className="font-sans text-[13px] font-semibold text-text-primary">
            {strain ? (
              <>
                <span className="italic">{strain.genus} {strain.species}</span>{" "}
                <span className="font-mono text-[11px]">{strain.strain}</span>
              </>
            ) : (
              `Kmen #${recommendation.strainId}`
            )}
          </p>
        </div>
        <span
          className={`font-mono text-sm font-bold ${scoreColor}`}
          style={{ textShadow: recommendation.score >= 80 ? `0 0 12px var(--green-glow)` : "none" }}
        >
          {recommendation.score}%
        </span>
      </div>

      <p className="mb-3 font-sans text-[12px] leading-relaxed text-text-muted">
        {recommendation.reasoning}
      </p>

      {strain && (
        <div className="flex flex-wrap gap-1">
          {strain.category.slice(0, 3).map((c) => (
            <span
              key={c}
              className="rounded-full bg-surface px-2 py-0.5 font-sans text-[10px] text-text-muted"
            >
              {c}
            </span>
          ))}
          {strain.dosage && (
            <span className="font-mono text-[10px] text-text-faint">
              {strain.dosage}
            </span>
          )}
        </div>
      )}

      <div
        className="mt-2 h-1 overflow-hidden rounded-full bg-border-subtle"
        title={`Skóre: ${recommendation.score}`}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${recommendation.score}%`,
            backgroundColor:
              recommendation.score >= 80
                ? "var(--green-glow)"
                : recommendation.score >= 50
                  ? "var(--amber)"
                  : "var(--text-muted)",
          }}
        />
      </div>
    </div>
  );
}
