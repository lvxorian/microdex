import type { Strain } from "../../types/strain";
import SearchBar from "./SearchBar";
import StrainCard from "./StrainCard";
import GenusList from "./GenusList";
import SpeciesList from "./SpeciesList";
import Breadcrumb from "./Breadcrumb";
import t from "../../i18n/cs";

interface Props {
  strains: Strain[];
  filtered: Strain[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  query: string;
  onQueryChange: (v: string) => void;
  view: "genus" | "species" | "strain";
  selectedGenus: string | null;
  selectedSpecies: string | null;
  onSelectGenus: (g: string) => void;
  onSelectSpecies: (sp: string) => void;
  onBack: () => void;
  onHome: () => void;
}

export default function StrainList(props: Props) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border-subtle p-3">
        <SearchBar value={props.query} onChange={props.onQueryChange} />
        {(props.view === "species" || props.view === "strain") && (
          <button
            type="button"
            onClick={props.onHome}
            className="mt-2 flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] text-text-faint transition-colors hover:text-text-muted"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Všechny rody
          </button>
        )}
      </div>

      {props.view !== "genus" && (
        <Breadcrumb
          crumbs={[
            {
              label: props.selectedGenus || "",
              onClick: () => {
                if (props.view === "strain") {
                  props.onBack();
                }
              },
            },
            ...(props.view === "strain"
              ? [
                  {
                    label: props.selectedSpecies || "",
                    onClick: () => {},
                  },
                ]
              : []),
          ]}
        />
      )}

      <div className="flex-1 overflow-y-auto">
        {props.view === "genus" ? (
          props.query.trim() ? (
            props.filtered.length === 0 ? (
              <p className="p-4 text-center text-[12px] text-text-faint">{t.noResults}</p>
            ) : (
              <div className="animate-fade-in">
                {props.filtered.map((strain, i) => (
                  <div key={strain.id} style={{ animationDelay: `${i * 20}ms` }} className="animate-slide-in">
                    <StrainCard
                      strain={strain}
                      isSelected={props.selectedId === strain.id}
                      onClick={() => props.onSelect(strain.id)}
                    />
                  </div>
                ))}
              </div>
            )
          ) : (
            <GenusList strains={props.strains} onSelectGenus={props.onSelectGenus} />
          )
        ) : props.view === "species" ? (
          <SpeciesList
            genus={props.selectedGenus!}
            strains={props.filtered}
            onSelectSpecies={props.onSelectSpecies}
            onBack={props.onBack}
          />
        ) : (
          props.filtered.length === 0 ? (
            <p className="p-4 text-center text-[12px] text-text-faint">{t.noResults}</p>
          ) : (
            <div className="animate-fade-in">
              {props.filtered.map((strain, i) => (
                <div key={strain.id} style={{ animationDelay: `${i * 20}ms` }} className="animate-slide-in">
                  <StrainCard
                    strain={strain}
                    isSelected={props.selectedId === strain.id}
                    onClick={() => props.onSelect(strain.id)}
                  />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
