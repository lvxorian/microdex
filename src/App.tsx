import { useState, useCallback, useMemo } from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import strains from "./data/strains";
import t from "./i18n/cs";
import TopNav from "./components/Layout/TopNav";
import SplitLayout from "./components/Layout/SplitLayout";
import StrainList from "./components/StrainList/StrainList";
import StrainDetail from "./components/StrainDetail/StrainDetail";
import SymptomSearch from "./components/SymptomSearch/SymptomSearch";
import useResponsive from "./hooks/useResponsive";

type ViewLevel = "genus" | "species" | "strain";

function BrowseView() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [selectedGenus, setSelectedGenus] = useState<string | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const navigate = useNavigate();
  const bp = useResponsive();

  const view: ViewLevel = selectedGenus && selectedSpecies
    ? "strain"
    : selectedGenus
      ? "species"
      : "genus";

  const resetToHome = useCallback(() => {
    setSelectedGenus(null);
    setSelectedSpecies(null);
    setSelectedId(null);
    setQuery("");
    navigate("/");
  }, [navigate]);

  const filtered = useMemo(() => {
    let result = [...strains];
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (s) =>
          s.fullName.toLowerCase().includes(q) ||
          s.shortCode.toLowerCase().includes(q) ||
          s.symptoms.some((sym) => sym.toLowerCase().includes(q)) ||
          s.summary.toLowerCase().includes(q),
      );
    }
    if (selectedGenus) {
      result = result.filter((s) => s.genus === selectedGenus);
    }
    if (selectedSpecies) {
      result = result.filter((s) => s.species === selectedSpecies);
    }
    return result;
  }, [query, selectedGenus, selectedSpecies]);

  const selected = selectedId ? strains.find((s) => s.id === selectedId) : null;

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const handleSelectGenus = useCallback((g: string) => {
    setSelectedGenus(g);
    setSelectedSpecies(null);
    setSelectedId(null);
  }, []);

  const handleSelectSpecies = useCallback((sp: string) => {
    setSelectedSpecies(sp);
    setSelectedId(null);
  }, []);

  const handleBack = useCallback(() => {
    if (view === "strain") {
      setSelectedId(null);
      return;
    }
    if (view === "species") {
      setSelectedGenus(null);
      return;
    }
    resetToHome();
  }, [view, selectedId, selectedGenus, resetToHome]);

  const handleSymptomStrainSelect = useCallback(
    (id: number) => {
      resetToHome();
      setSelectedId(id);
    },
    [resetToHome],
  );

  const listPanel = (
    <StrainList
      strains={strains}
      filtered={filtered}
      selectedId={selectedId}
      onSelect={handleSelect}
      query={query}
      onQueryChange={setQuery}
      view={view}
      selectedGenus={selectedGenus}
      selectedSpecies={selectedSpecies}
      onSelectGenus={handleSelectGenus}
      onSelectSpecies={handleSelectSpecies}
      onBack={handleBack}
      onHome={resetToHome}
    />
  );

  const detailPanel = selected ? (
    <div className="flex h-full flex-col">
      {bp !== "mobile" && (
        <div className="border-b border-border-subtle px-4 py-2">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] text-text-muted transition-colors hover:text-text-primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Zpět na rody
          </button>
        </div>
      )}
      <div className="flex-1 overflow-y-auto">
        <StrainDetail strain={selected} />
      </div>
    </div>
  ) : (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="0.75" opacity="0.3">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" fill="var(--text-faint)" opacity="0.1" />
        <path d="M12 3v2m0 14v2M3 12h2m14 0h2" strokeWidth="1" />
      </svg>
      <p className="text-center font-sans text-[13px] text-text-faint">
        {t.noStrainSelected}
      </p>
    </div>
  );

  const showFullWidth = view === "genus" && !query.trim() && !selected;

  const goHome = () => resetToHome();

  return (
    <Routes>
      <Route
        index
        element={
          <>
            <div className="hidden md:block">
              {showFullWidth ? (
                <div className="flex h-[calc(100vh-56px)] overflow-y-auto bg-surface">
                  {listPanel}
                </div>
              ) : (
                <SplitLayout left={listPanel} right={detailPanel} />
              )}
            </div>
            <div className="md:hidden">
              {selected ? (
                <div className="flex h-[calc(100vh-56px)] flex-col">
                  <div className="flex items-center gap-2 border-b border-border-subtle px-3 py-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-lg p-1.5 text-text-muted transition-colors hover:text-text-primary"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <span className="truncate font-sans text-[13px] font-medium text-text-primary">
                      {selected.genus} {selected.species}
                    </span>
                    <button
                      type="button"
                      onClick={goHome}
                      className="ml-auto rounded-lg px-2 py-1 text-[10px] text-text-faint transition-colors hover:text-text-muted"
                    >
                      Rody
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <StrainDetail strain={selected} />
                  </div>
                </div>
              ) : (
                <div className="h-[calc(100vh-56px)]">
                  {listPanel}
                </div>
              )}
            </div>
          </>
        }
      />
      <Route
        path="/symptomy"
        element={
          <div className="h-[calc(100vh-56px)]">
            <SymptomSearch strains={strains} onStrainSelect={handleSymptomStrainSelect} />
          </div>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <TopNav />
      <div className="pt-nav">
        <BrowseView />
      </div>
    </HashRouter>
  );
}
