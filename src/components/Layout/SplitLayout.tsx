import type { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
}

export default function SplitLayout({ left, right }: Props) {
  return (
    <div className="flex h-[calc(100vh-56px)]">
      <aside className="w-panel flex-shrink-0 border-r border-border-subtle bg-base">
        {left}
      </aside>
      <main className="flex-1 overflow-y-auto bg-surface">
        {right}
      </main>
    </div>
  );
}
