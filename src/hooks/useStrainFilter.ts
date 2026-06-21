import { useMemo, useState } from "react";
import type { Strain } from "../types/strain";

export type SortKey = "name" | "rarity" | "species";

const rarityOrder: Record<string, number> = {
  legendary: 0,
  epic: 1,
  rare: 2,
  common: 3,
};

export default function useStrainFilter(strains: Strain[]) {
  const [query, setQuery] = useState("");
  const [genusFilter, setGenusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [rarityFilter, setRarityFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");

  const genera = useMemo(
    () => [...new Set(strains.map((s) => s.genus))].sort(),
    [strains],
  );

  const species = useMemo(() => {
    const set = new Set<string>();
    strains.forEach((s) => set.add(`${s.genus} ${s.species}`));
    return [...set].sort();
  }, [strains]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    strains.forEach((s) => s.category.forEach((c) => set.add(c)));
    return [...set].sort();
  }, [strains]);

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

    if (genusFilter) {
      result = result.filter((s) => s.genus === genusFilter);
    }

    if (speciesFilter) {
      result = result.filter(
        (s) => `${s.genus} ${s.species}` === speciesFilter,
      );
    }

    if (rarityFilter) {
      result = result.filter((s) => s.rarity === rarityFilter);
    }

    if (categoryFilter) {
      result = result.filter((s) => s.category.includes(categoryFilter));
    }

    result.sort((a, b) => {
      switch (sortKey) {
        case "rarity":
          return rarityOrder[a.rarity] - rarityOrder[b.rarity];
        case "species":
          return a.species.localeCompare(b.species);
        default:
          return a.fullName.localeCompare(b.fullName);
      }
    });

    return result;
  }, [strains, query, genusFilter, speciesFilter, rarityFilter, categoryFilter, sortKey]);

  return {
    query,
    setQuery,
    genusFilter,
    setGenusFilter,
    speciesFilter,
    setSpeciesFilter,
    rarityFilter,
    setRarityFilter,
    categoryFilter,
    setCategoryFilter,
    sortKey,
    setSortKey,
    genera,
    species,
    categories,
    filtered,
  };
}
