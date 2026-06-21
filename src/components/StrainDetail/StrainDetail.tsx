import type { Strain } from "../../types/strain";
import t from "../../i18n/cs";
import BacteriaOrb from "./BacteriaOrb";
import MechanismList from "./MechanismList";
import StudyLink from "./StudyLink";
import RarityBadge from "../ui/RarityBadge";
import CategoryTag from "../ui/CategoryTag";
import SectionLabel from "../ui/SectionLabel";

export default function StrainDetail({ strain }: { strain: Strain }) {
  return (
    <div className="animate-fade-in px-6 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-start gap-5">
          <div className="flex-shrink-0">
            <BacteriaOrb color={strain.color} species={strain.species} />
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <div className="mb-2 flex items-center gap-2">
              <RarityBadge rarity={strain.rarity} />
              <span className="font-mono text-[11px] text-text-faint">
                #{strain.id}
              </span>
            </div>

            <h1 className="mb-1 font-sans text-xl font-bold leading-tight text-text-primary">
              <span className="italic">{strain.genus} {strain.species}</span>
            </h1>

            <p className="mb-1 font-mono text-sm font-medium" style={{ color: strain.color }}>
              {strain.strain}
            </p>

            <p className="font-mono text-[11px] text-text-faint">
              {strain.fullName} • {strain.shortCode}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {strain.category.map((c) => (
                <CategoryTag key={c} category={c} />
              ))}
            </div>
          </div>
        </div>

        <section className="mb-6">
          <SectionLabel>{t.sectionSummary}</SectionLabel>
          <p className="font-sans text-[13px] leading-relaxed text-text-muted">
            {strain.summary}
          </p>
        </section>

        <section className="mb-6">
          <SectionLabel>{t.sectionMechanisms}</SectionLabel>
          <MechanismList mechanisms={strain.mechanisms} glowColor={strain.glowColor} />
        </section>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div>
            <SectionLabel>{t.sectionDosage}</SectionLabel>
            <p className="font-mono text-[12px] text-text-primary">
              {strain.dosage}
            </p>
          </div>
          <div>
            <SectionLabel>{t.sectionSafety}</SectionLabel>
            <p className="font-sans text-[12px] leading-relaxed text-text-muted">
              {strain.safety}
            </p>
          </div>
        </div>

        <section className="mb-6">
          <SectionLabel>{t.sectionSymptoms}</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {strain.symptoms.map((s) => (
              <span
                key={s}
                className="rounded border border-border-subtle bg-base px-2 py-0.5 font-sans text-[11px] text-text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>{t.sectionStudies}</SectionLabel>
          <div className="space-y-2">
            {strain.studies.map((study, i) => (
              <StudyLink key={i} study={study} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
