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
      <div className="border-b border-border-subtle p-4 md:p-6">
        <h1 className="mb-4 flex items-center gap-2 font-sans text-lg font-semibold text-text-primary">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-glow)" strokeWidth="1.5">
            <path d="M12 2a7 7 0 017 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 017-7z" />
            <path d="M9 21h6" strokeLinecap="round" />
          </svg>
          {t.symptomTitle}
        </h1>

        <div className="flex flex-col gap-3">
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder={t.symptomPlaceholder}
            rows={3}
            className="w-full resize-none rounded-xl border border-border-subtle bg-elevated p-3.5 font-sans text-[13px] text-text-primary placeholder-text-faint outline-none transition-all focus:border-cyan-500/30 focus:bg-[#1A231E]"
          />

          <button
            type="button"
            onClick={search}
            disabled={loading || !symptoms.trim()}
            className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/8 py-3 font-sans text-[13px] font-semibold text-cyan-glow transition-all hover:bg-cyan-500/15 hover:border-cyan-500/30 active:scale-[0.98] disabled:opacity-40"
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t.symptomSearching}
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                {t.symptomSearchButton}
              </>
            )}
          </button>

          {error && (
            <p className="rounded-xl border border-amber/30 bg-amber/5 p-3 font-sans text-[11px] text-amber">
              {error}
            </p>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {results && results.length > 0 && (
          <>
            <div className="mb-4 flex items-center justify-between">
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
            <p className="mt-6 border-t border-border-subtle pt-4 font-sans text-[10px] italic text-text-faint">
              {t.symptomDisclaimer}
            </p>
          </>
        )}

        {!results && !loading && !error && (
          <div className="flex flex-col items-center justify-center pt-12 text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="1" opacity="0.3">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <p className="mt-4 font-sans text-[12px] text-text-faint">
              Zadej své symptomy a AI ti doporučí vhodné probiotické kmeny
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
