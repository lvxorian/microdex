import type { Study } from "../../types/strain";
import t from "../../i18n/cs";

export default function StudyLink({ study }: { study: Study }) {
  return (
    <a
      href={study.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded border border-border-subtle bg-base px-3 py-2 transition-all hover:border-border-accent hover:bg-elevated"
    >
      <div className="min-w-0 flex-1">
        <p className="truncate font-sans text-[12px] font-medium leading-snug text-text-primary group-hover:text-green-glow">
          {study.title}
        </p>
        <p className="mt-0.5 font-sans text-[10px] text-text-faint">
          {study.journal} • {study.year}
        </p>
      </div>
      <span className="flex-shrink-0 rounded bg-green-glow/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-green-glow">
        {t.studyPubMed}
      </span>
    </a>
  );
}
