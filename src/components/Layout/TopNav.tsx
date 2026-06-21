import { NavLink } from "react-router-dom";
import t from "../../i18n/cs";

export default function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-nav items-center border-b border-border-subtle bg-base/95 px-4 backdrop-blur">
      <NavLink
        to="/"
        className="flex items-center gap-1 font-sans text-lg font-bold tracking-tight"
      >
        <span className="text-text-primary">Micro</span>
        <span className="text-green-glow">Dex</span>
      </NavLink>

      <span className="ml-3 hidden text-[11px] text-text-faint sm:inline">
        {t.appTagline}
      </span>

      <nav className="ml-auto flex gap-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `rounded px-3 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? "bg-elevated text-green-glow"
                : "text-text-muted hover:text-text-primary"
            }`
          }
        >
          {t.navBrowse}
        </NavLink>
        <NavLink
          to="/symptomy"
          className={({ isActive }) =>
            `rounded px-3 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? "bg-elevated text-cyan-glow"
                : "text-text-muted hover:text-text-primary"
            }`
          }
        >
          {t.navSymptoms}
        </NavLink>
      </nav>
    </header>
  );
}
