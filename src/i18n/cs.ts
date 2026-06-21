const t = {
  appName: "MicroDex",
  appTagline: "Encyklopedie probiotických kmenů",

  navBrowse: "Procházet",
  navSymptoms: "Symptomy",

  searchPlaceholder: "Hledat podle názvu, kódu nebo symptomu…",
  noResults: "Žádné kmeny neodpovídají zadanému filtru.",
  noStrainSelected: "Vyber kmen ze seznamu pro zobrazení detailu.",

  filterGenus: "Rod",
  filterSpecies: "Druh",
  filterRarity: "Rarita",
  filterCategory: "Kategorie",
  allOption: "Vše",
  sortByName: "Název",
  sortByRarity: "Rarita",
  sortBySpecies: "Druh",

  sectionSummary: "Popis",
  sectionMechanisms: "Mechanismy účinku",
  sectionDosage: "Dávkování",
  sectionSafety: "Bezpečnost",
  sectionStudies: "Vědecké studie",
  sectionSymptoms: "Symptomy",

  rarityLegendary: "Legendární",
  rarityEpic: "Epické",
  rarityRare: "Vzácné",
  rarityCommon: "Běžné",

  symptomTitle: "Vyhledávání podle symptomů",
  symptomPlaceholder: "Zadej své symptomy česky (např. nadýmání, únava, průjem)…",
  symptomSearchButton: "Analyzovat symptomy",
  symptomSearching: "AI analyzuje tvé symptomy…",
  symptomError: "Chyba při komunikaci s AI. Zkontroluj API klíč.",
  symptomNoKey: "API klíč DeepSeek není nastaven. Vytvoř soubor .env s VITE_DEEPSEEK_API_KEY.",
  symptomEmpty: "Zadej prosím popis svých symptomů.",
  symptomResults: "Doporučené kmeny",
  symptomDisclaimer: "Toto doporučení generuje AI a nenahrazuje lékařskou konzultaci.",

  studyPubMed: "PubMed",
  studyLink: "Otevřít studii",

  categoryDigestion: "Trávení",
  categoryImmunity: "Imunita",
  categoryMetabolism: "Metabolismus",
  categoryPsychiatry: "Psychika (osa střevo–mozek)",
  categorySkin: "Kůže",
  categoryUrogenital: "Urogenitální zdraví",
  categoryRespiration: "Respirace",
  categoryOral: "Ústní dutina",
  categoryAthletic: "Atletický výkon",
  categoryChildren: "Dětské zdraví",
  categorySenior: "Seniorní zdraví",
} as const;

export default t;
