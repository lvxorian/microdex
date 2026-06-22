import { readFileSync, writeFileSync } from 'fs';

const data = JSON.parse(readFileSync('scripts/strain-data.json', 'utf8'));

let out = `import type { Strain } from "../types/strain";

const strains: Strain[] = [\n`;

data.strains.forEach((s, i) => {
  const id = i + 1;
  const fullName = `${s.genus} ${s.species} ${s.strain}`;
  out += `  {
    id: ${id},
    genus: ${JSON.stringify(s.genus)},
    species: ${JSON.stringify(s.species)},
    strain: ${JSON.stringify(s.strain)},
    fullName: ${JSON.stringify(fullName)},
    shortCode: ${JSON.stringify(s.shortCode)},
    color: ${JSON.stringify(s.color)},
    glowColor: ${JSON.stringify(s.glowColor)},
    rarity: ${JSON.stringify(s.rarity)},
    category: ${JSON.stringify(s.category)},
    symptoms: ${JSON.stringify(s.symptoms)},
    summary: ${JSON.stringify(s.summary)},
    mechanisms: ${JSON.stringify(s.mechanisms)},
    dosage: ${JSON.stringify(s.dosage)},
    safety: ${JSON.stringify(s.safety)},
    studies: ${JSON.stringify(s.studies)},
  },\n`;
});

out += `];

export default strains;\n`;

writeFileSync('src/data/strains.ts', out, 'utf8');
console.log(`Generated ${data.strains.length} strains to src/data/strains.ts`);
