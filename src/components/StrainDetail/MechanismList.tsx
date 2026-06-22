export default function MechanismList({
  mechanisms,
  color,
}: {
  mechanisms: string[];
  color: string;
}) {
  return (
    <ul className="space-y-2.5">
      {mechanisms.map((m, i) => (
        <li
          key={i}
          className="flex items-start gap-3 rounded-lg bg-base/50 px-3 py-2 border border-border-subtle"
        >
          <span
            className="mt-[6px] block h-2 w-2 flex-shrink-0 rounded-full animate-pulse-glow"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 6px ${color}`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
          <span className="font-sans text-[12px] leading-relaxed text-text-muted">
            {m}
          </span>
        </li>
      ))}
    </ul>
  );
}
