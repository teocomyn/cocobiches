import type { ArticleBlock } from "./types";
import * as a1 from "./content/visiter-versailles-autrement";
import * as a2 from "./content/seminaire-versailles-jeu-de-paume";
import * as a3 from "./content/ou-dejeuner-versailles";
import * as a4 from "./content/versailles-hiver-itineraire";
import * as a5 from "./content/cheffes-cuisine-jeu-de-paume";
import * as a6 from "./content/hotellerie-independante-cocobiches";
import * as a7 from "./content/yourte-jeu-de-paume-versailles";
import * as a8 from "./content/noel-versailles-traditions";
import * as a9 from "./content/domaine-marie-antoinette-guide";
import * as a10 from "./content/choisir-hotel-cocobiches";
import type { Locale } from "@/lib/i18n-config";

const registry: Record<string, { fr: ArticleBlock[]; en: ArticleBlock[] }> = {
  "visiter-versailles-autrement": { fr: a1.fr, en: a1.en },
  "seminaire-versailles-jeu-de-paume": { fr: a2.fr, en: a2.en },
  "ou-dejeuner-versailles": { fr: a3.fr, en: a3.en },
  "versailles-hiver-itineraire": { fr: a4.fr, en: a4.en },
  "cheffes-cuisine-jeu-de-paume": { fr: a5.fr, en: a5.en },
  "hotellerie-independante-cocobiches": { fr: a6.fr, en: a6.en },
  "yourte-jeu-de-paume-versailles": { fr: a7.fr, en: a7.en },
  "noel-versailles-traditions": { fr: a8.fr, en: a8.en },
  "domaine-marie-antoinette-guide": { fr: a9.fr, en: a9.en },
  "choisir-hotel-cocobiches": { fr: a10.fr, en: a10.en },
};

export function getArticleBlocks(slug: string, locale: Locale): ArticleBlock[] {
  const b = registry[slug];
  if (!b) return [];
  return locale === "fr" ? b.fr : b.en;
}
