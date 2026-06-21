export default function MechanismList({
  mechanisms,
  glowColor,
}: {
  mechanisms: string[];
  glowColor: string;
}) {
  return (
    <ul className="space-y-2">
      {mechanisms.map((m, i) => (
        <li key={i} className="flex items-start gap-2">
          <span
            className="mt-[5px] block h-1.5 w-1.5 flex-shrink-0 rounded-full"
            style={{ backgroundColor: glowColor, boxShadow: `0 0 6px ${glowColor}` }}
          />
          <span className="font-sans text-[12px] leading-relaxed text-text-muted">
            {m}
          </span>
        </li>
      ))}
    </ul>
  );
}
