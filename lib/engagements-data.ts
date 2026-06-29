export const ENGAGEMENTS_UPDATED = "2026-06-01";

export type EngagementStat = {
  id: "local" | "waste" | "team" | "transport";
  valueFr: string;
  valueEn: string;
  labelFr: string;
  labelEn: string;
  progress?: number;
  targetFr?: string;
  targetEn?: string;
  accent?: "green" | "marine" | "gold";
};

export const ENGAGEMENTS_STATS: EngagementStat[] = [
  {
    id: "local",
    valueFr: "62 %",
    valueEn: "62%",
    labelFr: "Produits locaux en cuisine",
    labelEn: "Local produce in the kitchen",
    progress: 62,
    targetFr: "Objectif 2028 · 70 %",
    targetEn: "2028 target · 70%",
    accent: "green",
  },
  {
    id: "waste",
    valueFr: "12 t",
    valueEn: "12 t",
    labelFr: "Déchets évités vs. trimestre précédent",
    labelEn: "Waste avoided vs. previous quarter",
    accent: "gold",
  },
  {
    id: "team",
    valueFr: "20",
    valueEn: "20",
    labelFr: "Collaborateurs en CDI toute l'année",
    labelEn: "Year-round permanent staff",
    progress: 100,
    targetFr: "100 % en contrat durable",
    targetEn: "100% on durable contracts",
    accent: "marine",
  },
  {
    id: "transport",
    valueFr: "41 %",
    valueEn: "41%",
    labelFr: "Clients en mobilités douces",
    labelEn: "Guests using soft mobility",
    progress: 41,
    targetFr: "80 % séminaires en transport en commun",
    targetEn: "80% seminars by public transport",
    accent: "green",
  },
];
