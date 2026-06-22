import type { Strain } from "../../types/strain";
import t from "../../i18n/cs";
import BacteriaOrb from "./BacteriaOrb";
import MechanismList from "./MechanismList";
import StudyLink from "./StudyLink";
import StrainStats from "./StrainStats";
import RarityBadge from "../ui/RarityBadge";
import CategoryTag from "../ui/CategoryTag";

export default function StrainDetail({ strain }: { strain: Strain }) {
  return (
    <div className="animate-fade-in px-4 py-6 md:px-6 md:py-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex-shrink-0">
            <BacteriaOrb
              color={strain.color}
              glowColor={strain.glowColor}
              species={strain.species}
            />
          </div>
          <div className="min-w-0 flex-1 text-center sm:text-left sm:pt-1">
            <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
              <RarityBadge rarity={strain.rarity} />
              <span className="font-mono text-[11px] text-text-faint">
                #{strain.id}
              </span>
            </div>
            <h1 className="mb-1 font-sans text-xl font-bold leading-tight text-text-primary md:text-2xl">
              <span className="italic">{strain.genus} {strain.species}</span>
            </h1>
            <p
              className="mb-1 font-mono text-lg font-medium"
              style={{ color: strain.color, textShadow: `0 0 12px ${strain.glowColor}` }}
            >
              {strain.strain}
            </p>
            <p className="font-mono text-[11px] text-text-faint">
              {strain.fullName} • {strain.shortCode}
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5 sm:justify-start">
              {strain.category.map((c) => (
                <CategoryTag key={c} category={c} />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              <line x1="8" y1="7" x2="16" y2="7" />
              <line x1="8" y1="11" x2="16" y2="11" />
              <line x1="8" y1="15" x2="12" y2="15" />
            </svg>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              {t.sectionSummary}
            </h3>
          </div>
          <p className="rounded-xl border border-border-subtle bg-base/50 p-4 font-sans text-[13px] leading-relaxed text-text-muted">
            {strain.summary}
          </p>
        </div>

        <div className="mb-6">
          <StrainStats strain={strain} color={strain.color} />
        </div>

        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
              <path d="M9 13l-2 2 2 2" />
              <path d="M15 13l2 2-2 2" />
              <circle cx="9" cy="17" r="1.5" />
              <circle cx="15" cy="17" r="1.5" />
            </svg>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              {t.sectionMechanisms}
            </h3>
          </div>
          <MechanismList mechanisms={strain.mechanisms} color={strain.color} />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border-subtle bg-base/50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={strain.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="6" width="12" height="14" rx="3" />
                <line x1="12" y1="10" x2="12" y2="14" />
                <line x1="10" y1="12" x2="14" y2="12" />
              </svg>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                {t.sectionDosage}
              </h3>
            </div>
            <p className="font-mono text-[13px] text-text-primary">
              {strain.dosage}
            </p>
          </div>
          <div className="rounded-xl border border-border-subtle bg-base/50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={strain.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                {t.sectionSafety}
              </h3>
            </div>
            <p className="font-sans text-[12px] leading-relaxed text-text-muted">
              {strain.safety}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
              <circle cx="9" cy="10" r="1" fill="var(--green-glow)" opacity="0.3" />
              <circle cx="15" cy="8" r="1" fill="var(--green-glow)" opacity="0.3" />
            </svg>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              {t.sectionSymptoms}
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {strain.symptoms.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-border-subtle bg-surface px-2.5 py-1 font-sans text-[11px] text-text-muted transition-all hover:border-white/10 hover:text-text-primary hover:scale-105"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="9" y1="13" x2="15" y2="13" />
            </svg>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              {t.sectionStudies} ({strain.studies.length})
            </h3>
          </div>
          <div className="space-y-2">
            {strain.studies.map((study, i) => (
              <StudyLink key={i} {...study} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
