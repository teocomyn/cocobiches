import type { Locale } from "./i18n-config";

export type OncleLouisImageMeta = {
  src: string;
  altFr: string;
  altEn: string;
  labelFr?: string;
  labelEn?: string;
};

export const ONCLE_LOUIS_IMAGES = {
  facade: {
    src: "/apparts-oncle-louis/facade.jpg",
    altFr: "Façade des Apparts de l'Oncle Louis, rue de Satory à Versailles",
    altEn: "Apparts de l'Oncle Louis façade on Rue de Satory in Versailles",
    labelFr: "La résidence",
    labelEn: "The residence",
  },
  appart1: {
    src: "/apparts-oncle-louis/appart-1.jpg",
    altFr: "Appartement lumineux avec salon et cuisine ouverte",
    altEn: "Bright apartment with living room and open kitchen",
    labelFr: "Appartements",
    labelEn: "Apartments",
  },
  appart2: {
    src: "/apparts-oncle-louis/appart-2.png",
    altFr: "Chambre et espace nuit dans un appartement Cocobiches",
    altEn: "Bedroom and sleeping area in a Cocobiches apartment",
    labelFr: "Appartements",
    labelEn: "Apartments",
  },
  loft: {
    src: "/apparts-oncle-louis/loft.jpg",
    altFr: "Loft spacieux avec volumes généreux",
    altEn: "Spacious loft with generous volumes",
    labelFr: "Loft",
    labelEn: "Loft",
  },
  studio: {
    src: "/apparts-oncle-louis/studio.jpg",
    altFr: "Studio fonctionnel pour séjour professionnel ou court",
    altEn: "Functional studio for business or short stays",
    labelFr: "Studio",
    labelEn: "Studio",
  },
  carte: {
    src: "/apparts-oncle-louis/carte-versailles.png",
    altFr: "Carte de Versailles et accès aux Apparts de l'Oncle Louis",
    altEn: "Map of Versailles and access to Apparts de l'Oncle Louis",
  },
} as const satisfies Record<string, OncleLouisImageMeta>;

export type OncleLouisImageKey = keyof typeof ONCLE_LOUIS_IMAGES;

export const ONCLE_LOUIS_HERO_SLIDES: OncleLouisImageKey[] = [
  "facade",
  "appart1",
  "loft",
  "studio",
];

export const ONCLE_LOUIS_GALLERY: OncleLouisImageKey[] = [
  "facade",
  "appart1",
  "appart2",
  "loft",
  "studio",
];

export function oncleLouisImage(key: OncleLouisImageKey): OncleLouisImageMeta {
  return ONCLE_LOUIS_IMAGES[key];
}

export function oncleLouisAlt(key: OncleLouisImageKey, locale: Locale): string {
  const img = ONCLE_LOUIS_IMAGES[key];
  return locale === "fr" ? img.altFr : img.altEn;
}

export function oncleLouisLabel(key: OncleLouisImageKey, locale: Locale): string | undefined {
  const img = ONCLE_LOUIS_IMAGES[key];
  if (!("labelFr" in img) || !img.labelFr) return undefined;
  return locale === "fr" ? img.labelFr : img.labelEn;
}
