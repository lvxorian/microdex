export default function SectionLabel({ children }: { children: string }) {
  return (
    <h3 className="mb-3 border-b border-border-subtle pb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
      {children}
    </h3>
  );
}
