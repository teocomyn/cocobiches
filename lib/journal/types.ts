export type JournalCategoryId =
  | "guide"
  | "coulisses"
  | "gastronomie"
  | "seminaires"
  | "saisonnalite"
  | "actualites";

export type ArticleBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "lead"; text: string }
  | { kind: "emphasis"; text: string }
  | { kind: "link"; label: string; href: string; external?: boolean }
  | {
      kind: "links";
      title: string;
      items: { label: string; href: string; external?: boolean }[];
    }
  | {
      kind: "faq";
      title: string;
      items: { q: string; a: string }[];
    };

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
  /** Title tag SEO (sans suffixe site) */
  metaTitleFr?: string;
  metaTitleEn?: string;
  /** Open Graph title (optionnel) */
  ogTitleFr?: string;
  ogTitleEn?: string;
};
