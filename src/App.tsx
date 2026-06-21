import { useState, useCallback } from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import strains from "./data/strains";
import t from "./i18n/cs";
import TopNav from "./components/Layout/TopNav";
import SplitLayout from "./components/Layout/SplitLayout";
import StrainList from "./components/StrainList/StrainList";
import StrainDetail from "./components/StrainDetail/StrainDetail";
import SymptomSearch from "./components/SymptomSearch/SymptomSearch";
import useStrainFilter from "./hooks/useStrainFilter";

function BrowseLayout() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  const filter = useStrainFilter(strains);
  const selected = selectedId ? strains.find((s) => s.id === selectedId) : null;

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const handleSymptomStrainSelect = useCallback(
    (id: number) => {
      setSelectedId(id);
      navigate("/");
    },
    [navigate],
  );

  return (
    <Routes>
      <Route
        index
        element={
          <SplitLayout
            left={
              <StrainList
                strains={strains}
                filtered={filter.filtered}
                selectedId={selectedId}
                onSelect={handleSelect}
                query={filter.query}
                onQueryChange={filter.setQuery}
                genusFilter={filter.genusFilter}
                onGenusFilterChange={filter.setGenusFilter}
                speciesFilter={filter.speciesFilter}
                onSpeciesFilterChange={filter.setSpeciesFilter}
                rarityFilter={filter.rarityFilter}
                onRarityFilterChange={filter.setRarityFilter}
                categoryFilter={filter.categoryFilter}
                onCategoryFilterChange={filter.setCategoryFilter}
                sortKey={filter.sortKey}
                onSortKeyChange={filter.setSortKey}
                genera={filter.genera}
                species={filter.species}
                categories={filter.categories}
              />
            }
            right={
              selected ? (
                <StrainDetail strain={selected} />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="text-center font-sans text-[13px] text-text-faint">
                    {t.noStrainSelected}
                  </p>
                </div>
              )
            }
          />
        }
      />
      <Route
        path="/symptomy"
        element={
          <div className="h-[calc(100vh-56px)]">
            <SymptomSearch
              strains={strains}
              onStrainSelect={handleSymptomStrainSelect}
            />
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
        <BrowseLayout />
      </div>
    </HashRouter>
  );
}
