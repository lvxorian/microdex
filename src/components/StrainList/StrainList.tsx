import type { Strain } from "../../types/strain";
import type { SortKey } from "../../hooks/useStrainFilter";
import t from "../../i18n/cs";
import SearchBar from "./SearchBar";
import StrainCard from "./StrainCard";

interface Props {
  strains: Strain[];
  filtered: Strain[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  query: string;
  onQueryChange: (v: string) => void;
  genusFilter: string;
  onGenusFilterChange: (v: string) => void;
  speciesFilter: string;
  onSpeciesFilterChange: (v: string) => void;
  rarityFilter: string;
  onRarityFilterChange: (v: string) => void;
  categoryFilter: string;
  onCategoryFilterChange: (v: string) => void;
  sortKey: SortKey;
  onSortKeyChange: (k: SortKey) => void;
  genera: string[];
  species: string[];
  categories: string[];
}

const rarityOptions = ["legendary", "epic", "rare", "common"] as const;

export default function StrainList(props: Props) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border-subtle p-3">
        <SearchBar value={props.query} onChange={props.onQueryChange} />

        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <select
            value={props.genusFilter}
            onChange={(e) => props.onGenusFilterChange(e.target.value)}
            className="rounded border border-border-subtle bg-elevated px-2 py-1.5 text-[11px] text-text-primary outline-none"
          >
            <option value="">{t.allOption} — {t.filterGenus}</option>
            {props.genera.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>

          <select
            value={props.rarityFilter}
            onChange={(e) => props.onRarityFilterChange(e.target.value)}
            className="rounded border border-border-subtle bg-elevated px-2 py-1.5 text-[11px] text-text-primary outline-none"
          >
            <option value="">{t.allOption} — {t.filterRarity}</option>
            {rarityOptions.map((r) => (
              <option key={r} value={r}>
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={props.speciesFilter}
            onChange={(e) => props.onSpeciesFilterChange(e.target.value)}
            className="rounded border border-border-subtle bg-elevated px-2 py-1.5 text-[11px] text-text-primary outline-none"
          >
            <option value="">{t.allOption} — {t.filterSpecies}</option>
            {props.species.map((sp) => (
              <option key={sp} value={sp}>
                {sp}
              </option>
            ))}
          </select>

          <select
            value={props.categoryFilter}
            onChange={(e) => props.onCategoryFilterChange(e.target.value)}
            className="rounded border border-border-subtle bg-elevated px-2 py-1.5 text-[11px] text-text-primary outline-none"
          >
            <option value="">{t.allOption} — {t.filterCategory}</option>
            {props.categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-2 flex gap-1">
          {(["name", "rarity", "species"] as SortKey[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => props.onSortKeyChange(k)}
              className={`rounded px-2 py-1 text-[10px] font-medium transition-colors ${
                props.sortKey === k
                  ? "bg-green-glow/10 text-green-glow"
                  : "text-text-faint hover:text-text-muted"
              }`}
            >
              {k === "name" ? t.sortByName : k === "rarity" ? t.sortByRarity : t.sortBySpecies}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {props.filtered.length === 0 ? (
          <p className="p-4 text-center text-[12px] text-text-faint">
            {t.noResults}
          </p>
        ) : (
          props.filtered.map((strain, i) => (
            <div key={strain.id} style={{ animationDelay: `${i * 20}ms` }} className="animate-slide-in">
              <StrainCard
                strain={strain}
                isSelected={props.selectedId === strain.id}
                onClick={() => props.onSelect(strain.id)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
