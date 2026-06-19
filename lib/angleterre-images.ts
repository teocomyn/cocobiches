import type { Locale } from "./i18n-config";

export type AngleterreImageMeta = {
  src: string;
  altFr: string;
  altEn: string;
  labelFr?: string;
  labelEn?: string;
};

/** Photos officielles · hotel-angleterre-versailles.fr */
export const ANGLETERRE_IMAGES = {
  facade: {
    src: "/hotel-angleterre/hotel-facade.jpg",
    altFr: "Façade de l'Hôtel d'Angleterre dans une rue calme du quartier Saint-Louis",
    altEn: "Hôtel d'Angleterre façade on a quiet Saint-Louis district street",
    labelFr: "L'hôtel",
    labelEn: "The hotel",
  },
  chambre1: {
    src: "/hotel-angleterre/chambre-1.jpg",
    altFr: "Chambre cosy et élégamment décorée à l'Hôtel d'Angleterre",
    altEn: "Cosy, elegantly decorated room at Hôtel d'Angleterre",
    labelFr: "Les chambres",
    labelEn: "Rooms",
  },
  ambiance: {
    src: "/hotel-angleterre/ambiance-paysage.jpg",
    altFr: "Ambiance chaleureuse · décor rétro et lignes actuelles",
    altEn: "Warm atmosphere · retro pieces and contemporary lines",
    labelFr: "L'ambiance",
    labelEn: "The atmosphere",
  },
  chambre2: {
    src: "/hotel-angleterre/chambre-2.jpg",
    altFr: "Chambre intimiste au cœur du quartier historique de Versailles",
    altEn: "Intimate room in the heart of historic Versailles",
    labelFr: "Les chambres",
    labelEn: "Rooms",
  },
  carte: {
    src: "/hotel-angleterre/carte-versailles.png",
    altFr: "Carte de Versailles et points d'intérêt autour de l'Hôtel d'Angleterre",
    altEn: "Map of Versailles and landmarks around Hôtel d'Angleterre",
  },
  experience: {
    src: "/hotel-angleterre/experience.png",
    altFr: "Accueil chaleureux et ambiance familiale à l'Hôtel d'Angleterre",
    altEn: "Warm welcome and family atmosphere at Hôtel d'Angleterre",
  },
  salon: {
    src: "/hotel-angleterre/salon.jpg",
    altFr: "Espace commun et accueil de l'Hôtel d'Angleterre",
    altEn: "Common area and welcome at Hôtel d'Angleterre",
  },
  chambreDouble: {
    src: "/hotel-angleterre/chambre-double.jpg",
    altFr: "Chambre double confortable à l'Hôtel d'Angleterre",
    altEn: "Comfortable double room at Hôtel d'Angleterre",
  },
  chambreSuperieure: {
    src: "/hotel-angleterre/chambre-superieure.jpg",
    altFr: "Chambre supérieure lumineuse à l'Hôtel d'Angleterre",
    altEn: "Bright superior room at Hôtel d'Angleterre",
  },
  chambreFamiliale: {
    src: "/hotel-angleterre/chambre-familiale.jpg",
    altFr: "Chambre familiale spacieuse à l'Hôtel d'Angleterre",
    altEn: "Spacious family room at Hôtel d'Angleterre",
  },
  galerie01: {
    src: "/hotel-angleterre/galerie-01.png",
    altFr: "Détail de décoration · Hôtel d'Angleterre",
    altEn: "Decor detail · Hôtel d'Angleterre",
  },
  galerie02: {
    src: "/hotel-angleterre/galerie-02.png",
    altFr: "Chambre feutrée · Hôtel d'Angleterre",
    altEn: "Cosy room · Hôtel d'Angleterre",
  },
  galerie03: {
    src: "/hotel-angleterre/galerie-03.png",
    altFr: "Ambiance chambre · Hôtel d'Angleterre",
    altEn: "Room atmosphere · Hôtel d'Angleterre",
  },
  galerie04: {
    src: "/hotel-angleterre/galerie-04.png",
    altFr: "Intérieur de chambre · Hôtel d'Angleterre",
    altEn: "Room interior · Hôtel d'Angleterre",
  },
  galerie05: {
    src: "/hotel-angleterre/galerie-05.png",
    altFr: "Décor et lumière · Hôtel d'Angleterre",
    altEn: "Decor and light · Hôtel d'Angleterre",
  },
} as const satisfies Record<string, AngleterreImageMeta>;

export type AngleterreImageKey = keyof typeof ANGLETERRE_IMAGES;

export const ANGLETERRE_HERO_SLIDES: AngleterreImageKey[] = [
  "facade",
  "chambre1",
  "ambiance",
  "chambre2",
];

export const ANGLETERRE_GALLERY: AngleterreImageKey[] = [
  "facade",
  "chambre1",
  "ambiance",
  "chambre2",
  "experience",
  "salon",
  "chambreDouble",
  "chambreSuperieure",
  "chambreFamiliale",
  "galerie01",
  "galerie02",
  "galerie03",
  "galerie04",
  "galerie05",
];

export function angleterreImage(key: AngleterreImageKey): AngleterreImageMeta {
  return ANGLETERRE_IMAGES[key];
}

export function angleterreAlt(key: AngleterreImageKey, locale: Locale): string {
  const img = ANGLETERRE_IMAGES[key];
  return locale === "fr" ? img.altFr : img.altEn;
}

export function angleterreLabel(key: AngleterreImageKey, locale: Locale): string | undefined {
  const img = ANGLETERRE_IMAGES[key];
  if (!("labelFr" in img) || !img.labelFr) return undefined;
  return locale === "fr" ? img.labelFr : img.labelEn;
}

export function angleterreSrc(key: AngleterreImageKey): string {
  return ANGLETERRE_IMAGES[key].src;
}
