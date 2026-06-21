import type { Strain } from "../../types/strain";
import t from "../../i18n/cs";
import useSymptomSearch from "../../hooks/useSymptomSearch";
import AIResultCard from "./AIResultCard";

interface Props {
  strains: Strain[];
  onStrainSelect: (id: number) => void;
}

export default function SymptomSearch({ strains, onStrainSelect }: Props) {
  const { symptoms, setSymptoms, results, loading, error, search } =
    useSymptomSearch(strains);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border-subtle p-4">
        <h1 className="mb-4 font-sans text-base font-semibold text-text-primary">
          {t.symptomTitle}
        </h1>

        <div className="flex flex-col gap-3">
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder={t.symptomPlaceholder}
            rows={3}
            className="w-full resize-none rounded-lg border border-border-subtle bg-elevated p-3 font-sans text-[13px] text-text-primary placeholder-text-faint outline-none transition-colors focus:border-border-accent"
          />

          <button
            type="button"
            onClick={search}
            disabled={loading || !symptoms.trim()}
            className="flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 py-2.5 font-sans text-[13px] font-semibold text-cyan-glow transition-all hover:bg-cyan-500/20 disabled:opacity-40"
          >
            {loading ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                {t.symptomSearching}
              </>
            ) : (
              t.symptomSearchButton
            )}
          </button>

          {error && (
            <p className="rounded border border-amber/30 bg-amber/5 p-2 font-sans text-[11px] text-amber">
              {error}
            </p>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {results && results.length > 0 && (
          <>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-text-muted">
                {t.symptomResults}
              </h2>
              <span className="font-mono text-[10px] text-text-faint">
                {results.length} {results.length === 1 ? "kmen" : results.length < 5 ? "kmeny" : "kmenů"}
              </span>
            </div>

            <div className="space-y-3">
              {results.map((r) => (
                <button
                  key={r.strainId}
                  type="button"
                  onClick={() => onStrainSelect(r.strainId)}
                  className="w-full text-left"
                >
                  <AIResultCard
                    recommendation={r}
                    strain={strains.find((s) => s.id === r.strainId)}
                  />
                </button>
              ))}
            </div>

            <p className="mt-4 border-t border-border-subtle pt-3 font-sans text-[10px] italic text-text-faint">
              {t.symptomDisclaimer}
            </p>
          </>
        )}

        {!results && !loading && !error && (
          <p className="pt-8 text-center font-sans text-[12px] text-text-faint">
            {t.symptomPlaceholder}
          </p>
        )}
      </div>
    </div>
  );
}
