export interface Study {
  title: string;
  journal: string;
  year: number;
  url: string;
}

export type Rarity = "legendary" | "epic" | "rare" | "common";

export interface Strain {
  id: number;
  genus: string;
  species: string;
  strain: string;
  fullName: string;
  shortCode: string;
  color: string;
  glowColor: string;
  rarity: Rarity;
  category: string[];
  symptoms: string[];
  summary: string;
  mechanisms: string[];
  dosage: string;
  safety: string;
  studies: Study[];
}

export interface AIRecommendation {
  strainId: number;
  score: number;
  reasoning: string;
}

export interface AIResponse {
  recommendations: AIRecommendation[];
}
