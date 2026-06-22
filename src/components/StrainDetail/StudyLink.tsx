export default function StudyLink({
  title,
  journal,
  year,
  url,
}: {
  title: string;
  journal: string;
  year: number;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-border-subtle bg-base px-4 py-3 transition-all hover:border-green-glow/30 hover:bg-elevated hover:-translate-y-px"
    >
      <div className="min-w-0 flex-1">
        <p className="truncate font-sans text-[12px] font-medium leading-snug text-text-primary group-hover:text-green-glow transition-colors">
          {title}
        </p>
        <p className="mt-0.5 font-sans text-[10px] text-text-faint">
          {journal} • {year}
        </p>
      </div>
      <span className="flex-shrink-0 rounded-md bg-green-glow/10 px-2.5 py-1 font-mono text-[9px] font-semibold text-green-glow group-hover:bg-green-glow/20 transition-colors">
        PubMed
      </span>
    </a>
  );
}
