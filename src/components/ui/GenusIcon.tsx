interface Props {
  genus: string;
  size?: "sm" | "md" | "lg";
}

const icons: Record<string, (size: number) => JSX.Element> = {
  Lactobacillus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="8" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="6" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="6" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="16" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="16" x2="16" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  Lacticaseibacillus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="9" width="16" height="6" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="7" y1="6" x2="7" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="6" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="12" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="14" cy="12" r="1.2" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  Lactiplantibacillus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="10" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.4" />
      <line x1="12" y1="4" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Limosilactobacillus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 12C6 8 8 6 12 6C16 6 18 8 18 12C18 16 16 18 12 18C8 18 6 16 6 12Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="14" cy="14" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  Ligilactobacillus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M5 10h14v5a3 3 0 01-3 3H8a3 3 0 01-3-3v-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 10a3 3 0 013-3h8a3 3 0 013 3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="11.5" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  Bifidobacterium: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 4v7m0 0l-5 5m5-5l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Bacillus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  Saccharomyces: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" opacity="0.2" />
      <circle cx="15" cy="10" r="1" fill="currentColor" opacity="0.25" />
    </svg>
  ),
  Streptococcus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="17" cy="12" r="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  Enterococcus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="11" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="14" cy="13" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  Escherichia: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="7" width="16" height="10" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="9" x2="8" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="16" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  ),
  Clostridium: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 3v18m0-18c3 0 6 2 6 5s-3 4-6 4m0-9c-3 0-6 2-6 5s3 4 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="20" r="1" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  Lactococcus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="10" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  Pediococcus: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Propionibacterium: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="8" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="9" cy="12" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="15" cy="12" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  Akkermansia: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="8" ry="5" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="3" ry="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  Faecalibacterium: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 14a4 4 0 014-4h4a4 4 0 014 4v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="9" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="14" cy="9" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  Weissella: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="15" cy="14" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  Leuconostoc: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  ),
};

const defaultIcon = (s: number) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
  </svg>
);

export function getGenusIcon(genus: string) {
  return icons[genus] || defaultIcon;
}

export default function GenusIcon({ genus, size = "md" }: Props) {
  const px = size === "sm" ? 20 : size === "lg" ? 40 : 28;
  const render = getGenusIcon(genus);
  return (
    <span className="inline-flex flex-shrink-0" style={{ color: "inherit" }}>
      {render(px)}
    </span>
  );
}
