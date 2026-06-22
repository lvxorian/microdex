# MicroDex — Encyklopedie probiotických kmenů

## Přehled

MicroDex je interaktivní webová encyklopedie probiotických bakteriálních kmenů ve stylu Pokédexu. Aplikace je v češtině, s tmavým bioluminiscentním sci-fi designem. Slouží jako edukační nástroj pro zdravotníky, výzkumníky i laickou veřejnost se zájmem o probiotika a střevní mikrobiom.

**URL**: `https://microdex.vercel.app` (po deployi)

---

## Tech Stack

| Vrstva | Technologie |
|--------|-------------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 (utility-first) |
| Routing | React Router 6 (hash router) |
| AI | DeepSeek API (`deepseek-chat`) přes `fetch()` |
| Data | Statický TypeScript soubor, 133 kmenů |
| Deployment | Vercel (free tier, statická SPA) |
| Package manager | npm |

---

## Architektura

```
src/
├── main.tsx                     # Entry point, React root render
├── App.tsx                      # Router, global state, responsive layout
├── index.css                    # Tailwind directives, CSS variables, keyframe animace
├── vite-env.d.ts               # Vite type declarations
├── types/
│   └── strain.ts               # TypeScript interfaces (Strain, Study, AIRecommendation, etc.)
├── data/
│   └── strains.ts              # Kompletní databáze 133 probiotických kmenů
├── i18n/
│   └── cs.ts                   # Všechny české UI řetězce na jednom místě
├── hooks/
│   ├── useStrainFilter.ts      # Filtrování a řazení kmenů
│   ├── useSymptomSearch.ts     # AI volání DeepSeek API pro doporučení dle symptomů
│   └── useResponsive.ts        # Detekce mobil/desktop breakpointu
├── components/
│   ├── Background/
│   │   └── Particles.tsx       # Canvas pozadí s plovoucími částicemi (desktop)
│   ├── Layout/
│   │   ├── TopNav.tsx          # Horní navigace s logem MicroDex
│   │   └── SplitLayout.tsx     # Dvoupanelový layout (340px + flex-1)
│   ├── StrainList/
│   │   ├── Breadcrumb.tsx      # Drobečková navigace
│   │   ├── GenusList.tsx       # Mřížka karet rodů (úroveň 1)
│   │   ├── SpeciesList.tsx     # Seznam druhů (úroveň 2)
│   │   ├── SearchBar.tsx       # Vyhledávací pole
│   │   ├── StrainCard.tsx      # Karta kmene v seznamu
│   │   └── StrainList.tsx      # Hlavní komponenta seznamu
│   ├── StrainDetail/
│   │   ├── BacteriaOrb.tsx     # 3D animovaný vizuál bakterie
│   │   ├── MechanismList.tsx    # Seznam mechanismů s glow animací
│   │   ├── StrainStats.tsx     # Parametry kmene (5 metrik)
│   │   ├── StrainDetail.tsx    # Kompletní detail kmene
│   │   └── StudyLink.tsx       # Odkaz na PubMed studii
│   ├── SymptomSearch/
│   │   ├── AIResultCard.tsx    # Karta s AI doporučením
│   │   └── SymptomSearch.tsx   # Vyhledávání dle symptomů
│   └── ui/
│       ├── CategoryTag.tsx     # Tag kategorie
│       ├── GenusIcon.tsx       # 25+ geometrických SVG symbolů pro rody
│       ├── RarityBadge.tsx     # Badge rarity (legendary/epic/rare/common)
│       ├── SectionHeader.tsx   # Hlavička sekce s ikonou
│       └── StatBar.tsx         # Jednotlivý progress bar
```

---

## Design System

### Barvy

```css
--bg-base:          #080D0A    /* hlavní pozadí */
--bg-surface:       #0F1A13    /* karty, panely */
--bg-elevated:      #162018    /* hover stavy */
--border-subtle:    rgba(255,255,255,0.06)
--border-accent:    rgba(0,255,156,0.25)
--text-primary:     #F0FFF4
--text-muted:       rgba(240,255,244,0.5)
--text-faint:       rgba(240,255,244,0.3)
--green-glow:       #00FF9C    /* primární akcent */
--cyan-glow:        #00C2FF    /* sekundární akcent */
--amber:            #F59E0B    /* varování */
```

### Rarity barvy

| Rarita | Barva |
|--------|-------|
| Legendary | `#F59E0B` (zlatá) |
| Epic | `#A78BFA` (fialová) |
| Rare | `#06B6D4` (cyan) |
| Common | `#9CA3AF` (šedá) |

### Typografie

- **UI text**: Inter (Google Fonts), 400–700 weight
- **Vědecké názvy**: Inter italic
- **Kódy kmenů, ID**: Fira Code monospace (Google Fonts)

### Layout

- **Desktop**: 340px sidebar + flex-1 detail panel, 56px TopNav
- **Mobile** (< 768px): Single column, detail jako overlay, bottom tab nav
- **Glass morphism**: `backdrop-blur` panely s poloprůhledným pozadím
- **Grid overlay**: Subtle `repeating-linear-gradient` pro sci-fi texturu

### Animace

- `pulse-glow` — box-shadow pulzace pro aktivní prvky
- `float` — jemné vznášení elementů
- `slide-in` / `slide-up` — vstupní animace karet
- `fade-in` — postupné zobrazení
- `orb-pulse` / `orb-spin` — animace BacteriaOrb
- `stat-fill` — animované plnění progress barů
- `ripple` — klik efekt na interaktivních prvcích
- `glow-border` — pulzující border efekt

---

## Datový model

### Strain
```typescript
interface Strain {
  id: number;              // 1–133
  genus: string;           // např. "Lactobacillus"
  species: string;         // např. "acidophilus"
  strain: string;          // např. "La-5"
  fullName: string;        // "Lactobacillus acidophilus La-5"
  shortCode: string;       // "LA5"
  color: string;           // unikátní hex barva
  glowColor: string;       // rgba s průhledností pro glow
  rarity: "legendary" | "epic" | "rare" | "common";
  category: string[];      // české kategorie
  symptoms: string[];      // česká klíčová slova
  summary: string;         // 3–5 vět česky
  mechanisms: string[];    // mechanismy účinku česky
  dosage: string;          // např. "10⁹ až 10¹⁰ CFU/den"
  safety: string;          // bezpečnostní popis česky
  studies: Study[];        // minimálně 2
}
```

### Study
```typescript
interface Study {
  title: string;    // název studie
  journal: string;  // název časopisu
  year: number;     // rok publikace
  url: string;      // https://pubmed.ncbi.nlm.nih.gov/PMID/
}
```

---

## Databáze kmenů

**133 kmenů** napříč 25+ rody, všechny s reálnými PubMed referencemi.

### Zastoupené rody

| Rod | Počet kmenů | Ikona |
|-----|-------------|-------|
| Lactobacillus | 6 | Tyčinka (bacil) |
| Lacticaseibacillus | 10 | Dvojitá tyčinka |
| Lactiplantibacillus | 7 | Rostlinný bacil |
| Limosilactobacillus | 10 | Zakřivený bacil |
| Ligilactobacillus | 4 | Kónický bacil |
| Bifidobacterium | 25 | Y-tvar (větvení) |
| Bacillus | 11 | Hexagon (spóra) |
| Saccharomyces | 1 | Kruh (kvasinka) |
| Streptococcus | 4 | Dvojitý kruh |
| Enterococcus | 1 | Párový kok |
| Escherichia | 1 | Tyčinka s bičíkem |
| Clostridium | 2 | Vřetenovitý tvar |
| Lactococcus | 2 | Koncentrické kruhy |
| Pediococcus | 1 | Triáda kruhů |
| Propionibacterium | 1 | Obdélník |
| Akkermansia | 1 | Elipsa |
| Faecalibacterium | 1 | Kapkovitý tvar |
| Weissella | 1 | Párový kruh |
| Leuconostoc | 1 | Křížový kruh |
| Ostatní | 4 | Generická ikona |

### Rarity distribuce
- **Legendary** (12): LGG, LP299V, Shirota, DSM 17938, BB-12, HN019, CNCM I-745, Nissle 1917, 299v, NCFM, ME-3, BB536
- **Epic** (30): Kmeny s rozsáhlou klinickou evidencí
- **Rare** (47): Středně známé kmeny s dokumentovanými účinky
- **Common** (44): Méně známé, ale dokumentované kmeny

---

## Funkce

### Browse mode (`/`)
- **Hierarchické procházení**: Rod → Druh → Kmen
- **Fulltextové vyhledávání**: Název, kód, symptomy, popis
- **Filtry**: Rod, druh, rarita, kategorie
- **Řazení**: Dle názvu, rarity, druhu
- **Detail kmene**: BacteriaOrb, 5 metrik, mechanismy, dávkování, bezpečnost, studie

### Symptom mode (`/symptomy`)
- Uživatel zadá symptomy česky
- DeepSeek AI analyzuje a doporučí 3–5 nejvhodnějších kmenů
- Každé doporučení obsahuje skóre (0–100), vysvětlení a odkaz na detail

### Interaktivní prvky
- **BacteriaOrb**: 5-vrstvý animovaný vizuál (glow, spin, plasma, core)
- **GenusIcon**: 25+ unikátních geometrických SVG symbolů
- **StrainStats**: 5 metrik (klinická evidence, síla účinku, bezpečnost, pokrytí indikací, kvalita výzkumu)
- **Animované karty**: Slide-in, hover efekty, glow borders
- **Glass morphism**: Poloprůhledné panely s backdrop blur
- **Particles**: Canvas pozadí s plovoucími částicemi (desktop)

### Responzivita
- **Desktop** (>768px): Dvoupanelový layout
- **Mobile** (<768px): Single column, detail jako overlay, tlačítka zpět

---

## AI Integrace (Symptom Search)

- **API**: `https://api.deepseek.com/v1/chat/completions`
- **Model**: `deepseek-chat`
- **Prompt**: V češtině — AI dostane seznam kmenů (ID, název, kategorie, symptomy, shrnutí) a uživatelský vstup
- **Response**: JSON `{ recommendations: [{ strainId, score, reasoning }] }`
- **API klíč**: `VITE_DEEPSEEK_API_KEY` v `.env` (není v gitu)

---

## Vývoj

### Instalace
```bash
npm install
```

### Vývojový server
```bash
npm run dev
# → http://localhost:5173
```

### Build
```bash
npm run build
# → dist/
```

### Type check
```bash
npm run typecheck
```

### Struktura skriptů
```
scripts/
├── strain-data.json         # JSON data pro všechny kmeny
└── generate-strains.mjs     # Generátor src/data/strains.ts
```

Pro přidání nového kmene:
1. Přidej záznam do `scripts/strain-data.json`
2. Spusť `node scripts/generate-strains.mjs`
3. Buildni `npm run build`

---

## Deployment (Vercel)

1. Pushni repozitář na GitHub
2. Importuj do Vercelu
3. Nastav environment variable `VITE_DEEPSEEK_API_KEY`
4. Vercel automaticky detekuje Vite + `vercel.json`

Soubor `vercel.json` zajišťuje SPA rewrites:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

---

## Bezpečnostní poznámky

- **API klíč**: `VITE_DEEPSEEK_API_KEY` je v produkčním bundlu viditelný — Vite `VITE_` proměnné jsou public. Pro produkci s citlivými klíči zvaž proxy vrstvu.
- **Data**: Všechna data jsou statická, žádný backend. Žádné osobní údaje nejsou ukládány.
- **PubMed odkazy**: Všechny URL vedou na reálné PubMed články s ověřenými PMID.

---

## Česká lokalizace

Veškerý UI text je v `src/i18n/cs.ts`. Překlady pokrývají:
- Navigační prvky
- Filtry a řazení
- Popisky sekcí
- Rarity
- Chybové hlášky
- Placeholdery
- AI komunikace

---

## Licence a zdroje

- Data o kmenech jsou založena na veřejně dostupných vědeckých publikacích indexovaných v PubMed
- Všechny PubMed reference jsou ověřeny přes NCBI E-utilities API
- Mikrobiomová taxonomie ověřena proti Human Gut Microbiome Atlas (microbiomeatlas.org)
