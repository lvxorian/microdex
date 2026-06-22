import type { AIRecommendation, Strain } from "../../types/strain";
import RarityBadge from "../ui/RarityBadge";

interface Props {
  recommendation: AIRecommendation;
  strain?: Strain;
}

export default function AIResultCard({ recommendation, strain }: Props) {
  const scoreColor =
    recommendation.score >= 80
      ? "var(--green-glow)"
      : recommendation.score >= 50
        ? "var(--amber)"
        : "var(--text-muted)";

  return (
    <div className="glass rounded-xl p-4 transition-all hover:border-green-glow/20 hover:-translate-y-px">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          {strain && (
            <div
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
              style={{
                background: `${strain.color}18`,
                boxShadow: `0 0 16px ${strain.glowColor}`,
              }}
            >
              <span className="font-mono text-xs font-bold" style={{ color: strain.color }}>
                {strain.shortCode}
              </span>
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate font-sans text-[13px] font-semibold text-text-primary">
              {strain ? (
                <>
                  <span className="italic">{strain.genus} {strain.species}</span>
                </>
              ) : (
                `Kmen #${recommendation.strainId}`
              )}
            </p>
            {strain && (
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[11px]" style={{ color: strain.color }}>
                  {strain.strain}
                </span>
                <RarityBadge rarity={strain.rarity} />
              </div>
            )}
          </div>
        </div>
        <div className="flex-shrink-0 text-right">
          <span
            className="font-mono text-xl font-bold"
            style={{
              color: scoreColor,
              textShadow:
                recommendation.score >= 80
                  ? `0 0 16px ${scoreColor}`
                  : undefined,
            }}
          >
            {recommendation.score}
          </span>
          <span className="font-mono text-[10px]" style={{ color: scoreColor }}>%</span>
        </div>
      </div>

      <p className="mb-3 font-sans text-[12px] leading-relaxed text-text-muted">
        {recommendation.reasoning}
      </p>

      <div className="h-1 overflow-hidden rounded-full bg-border-subtle">
        <div
          className="h-full rounded-full"
          style={{
            width: `${recommendation.score}%`,
            background: `linear-gradient(90deg, ${scoreColor}66, ${scoreColor})`,
            boxShadow: recommendation.score >= 80 ? `0 0 8px ${scoreColor}` : undefined,
          }}
        />
      </div>
    </div>
  );
}
