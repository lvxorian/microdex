import { NavLink, useNavigate } from "react-router-dom";
import t from "../../i18n/cs";

export default function TopNav({ onHomeClick }: { onHomeClick?: () => void }) {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onHomeClick) onHomeClick();
    else navigate("/");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-nav items-center border-b border-border-subtle bg-base/95 px-4 backdrop-blur">
      <button
        onClick={handleLogoClick}
        className="group flex items-center gap-1 font-sans text-base font-bold tracking-tight md:text-lg focus:outline-none"
        type="button"
        aria-label="Přejít na hlavní stránku"
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="flex-shrink-0 transition-transform group-hover:scale-110">
          <circle cx="13" cy="13" r="11" stroke="var(--green-glow)" strokeWidth="1.2" opacity="0.3" />
          <circle cx="13" cy="13" r="8" stroke="var(--green-glow)" strokeWidth="0.8" opacity="0.2" />
          <ellipse cx="13" cy="12" rx="4.5" ry="2.8" stroke="var(--green-glow)" strokeWidth="1.3" fill="none" />
          <circle cx="11" cy="11.5" r="1.2" fill="var(--green-glow)" opacity="0.7" />
          <circle cx="15.5" cy="11" r="0.8" fill="var(--green-glow)" opacity="0.5" />
          <path d="M14.5 15 L16 18 L13 17 Z" fill="var(--green-glow)" opacity="0.4" />
          <circle cx="13" cy="13" r="1" fill="var(--green-glow)" opacity="0.15" />
        </svg>
        <span className="text-text-primary">Micro</span>
        <span
          className="text-green-glow"
          style={{ textShadow: "0 0 12px var(--green-glow)" }}
        >
          Dex
        </span>
      </button>

      <span className="ml-3 hidden text-[11px] text-text-faint lg:inline">
        {t.appTagline}
      </span>

      <nav className="ml-auto flex gap-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              isActive
                ? "bg-green-glow/10 text-green-glow shadow-[0_0_12px_rgba(0,255,156,0.15)]"
                : "text-text-muted hover:text-text-primary"
            }`
          }
        >
          {t.navBrowse}
        </NavLink>
        <NavLink
          to="/symptomy"
          className={({ isActive }) =>
            `rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              isActive
                ? "bg-cyan-500/10 text-cyan-glow shadow-[0_0_12px_rgba(0,194,255,0.15)]"
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
