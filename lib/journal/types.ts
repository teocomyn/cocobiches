export type JournalCategoryId = "guide" | "coulisses" | "gastronomie" | "seminaires" | "saisonnalite";

export type ArticleBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "lead"; text: string };

export type JournalArticleMeta = {
  slug: string;
  category: JournalCategoryId;
  dateISO: string;
  readingMinutes: number;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  excerptFr: string;
  excerptEn: string;
  /** Hero + OG (16:9 or wide) */
  heroImage: string;
  /** Secondary inline images */
  inlineImages?: { src: string; altFr: string; altEn: string }[];
  featured?: boolean;
};
