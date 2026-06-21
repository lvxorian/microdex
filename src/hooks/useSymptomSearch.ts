import { useCallback, useState } from "react";
import type { AIRecommendation, Strain } from "../types/strain";
import t from "../i18n/cs";

const DEEPSEEK_URL = "https://api.deepseek.com/v1/chat/completions";
const MODEL = "deepseek-chat";

export default function useSymptomSearch(strains: Strain[]) {
  const [symptoms, setSymptoms] = useState("");
  const [results, setResults] = useState<AIRecommendation[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = useCallback(async () => {
    const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY as string | undefined;

    if (!apiKey) {
      setError(t.symptomNoKey);
      return;
    }

    if (!symptoms.trim()) {
      setError(t.symptomEmpty);
      return;
    }

    setLoading(true);
    setError("");
    setResults(null);

    const strainContext = strains
      .map(
        (s) =>
          `ID:${s.id} | ${s.fullName} (${s.shortCode}) | Kategorie: ${s.category.join(", ")} | Symptomy: ${s.symptoms.join(", ")} | Shrnutí: ${s.summary}`,
      )
      .join("\n");

    const prompt = `Jsi expert na probiotika. Níže je databáze probiotických kmenů. Uživatel popsal své symptomy: "${symptoms}"

Na základě symptomů uživatele doporuč 3-5 NEJVHODNĚJŠÍCH kmenů z databáze.

ODPOVĚZ POUZE platným JSONEM v tomto přesném formátu:
{"recommendations":[{"strainId":<id_z_databáze>,"score":<0-100>,"reasoning":"<české vysvětlení proč je kmen vhodný, 1-2 věty>"}]}

Seřaď podle skóre od nejvyššího. Vysvětlení piš česky.

DATABÁZE KMENŮ:
${strainContext}`;

    try {
      const res = await fetch(DEEPSEEK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: "user", content: prompt }],
          temperature: 0.3,
          max_tokens: 2000,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err);
      }

      const data = await res.json() as {
        choices: { message: { content: string } }[];
      };

      const text = data.choices[0]?.message?.content ?? "";
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("Chyba parsování JSON odpovědi od AI");

      const parsed = JSON.parse(match[0]) as {
        recommendations: AIRecommendation[];
      };

      setResults(parsed.recommendations.filter((r) =>
        strains.some((s) => s.id === r.strainId),
      ));
    } catch (e) {
      setError(e instanceof Error ? e.message : t.symptomError);
    } finally {
      setLoading(false);
    }
  }, [symptoms, strains]);

  return { symptoms, setSymptoms, results, loading, error, search };
}
