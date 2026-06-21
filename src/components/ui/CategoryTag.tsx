export default function CategoryTag({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border-subtle bg-surface px-2.5 py-0.5 font-sans text-[11px] leading-relaxed text-text-muted">
      {category}
    </span>
  );
}
