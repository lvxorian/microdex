interface Props {
  label: string;
  value: number;
  color?: string;
}

export default function StatBar({ label, value, color = "var(--green-glow)" }: Props) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="font-sans text-[11px] font-medium uppercase tracking-wider text-text-muted">
          {label}
        </span>
        <span
          className="font-mono text-[11px] font-bold"
          style={{ color }}
        >
          {Math.round(value)}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border-subtle">
        <div
          className="h-full animate-stat-fill rounded-full"
          style={{
            width: `${value}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}44`,
            animationDuration: `${0.6 + value * 0.01}s`,
          }}
        />
      </div>
    </div>
  );
}
