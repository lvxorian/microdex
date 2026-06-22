interface Crumb {
  label: string;
  onClick: () => void;
}

interface Props {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: Props) {
  return (
    <nav className="flex items-center gap-1.5 px-4 py-2" aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <span className="font-mono text-[10px] text-text-faint">›</span>
          )}
          <button
            type="button"
            onClick={c.onClick}
            className={`font-sans text-[11px] transition-colors hover:text-green-glow ${
              i === crumbs.length - 1
                ? "font-semibold text-green-glow"
                : "text-text-muted"
            }`}
          >
            {c.label}
          </button>
        </span>
      ))}
    </nav>
  );
}
