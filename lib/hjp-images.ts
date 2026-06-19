import type { Locale } from "./i18n-config";

export type HjpImageMeta = {
  src: string;
  altFr: string;
  altEn: string;
  labelFr?: string;
  labelEn?: string;
};

/** Photos officielles · hotel-jeudepaume.fr (téléchargées en local). */
export const HJP_IMAGES = {
  facade: {
    src: "/hotel-jeu-de-paume/hotel-facade.jpg",
    altFr: "Façade de l'Hôtel du Jeu de Paume dans le quartier Saint-Louis",
    altEn: "Hôtel du Jeu de Paume façade in the Saint-Louis district",
    labelFr: "L'hôtel",
    labelEn: "The hotel",
  },
  chambre: {
    src: "/hotel-jeu-de-paume/chambre.jpg",
    altFr: "Chambre signée N. Stadler à l'Hôtel du Jeu de Paume",
    altEn: "N. Stadler-designed room at Hôtel du Jeu de Paume",
    labelFr: "Les chambres",
    labelEn: "Rooms",
  },
  jardin: {
    src: "/hotel-jeu-de-paume/jardin.jpg",
    altFr: "Jardin fleuri et calme de l'Hôtel du Jeu de Paume",
    altEn: "Quiet garden at Hôtel du Jeu de Paume",
    labelFr: "Le jardin",
    labelEn: "The garden",
  },
  salon: {
    src: "/hotel-jeu-de-paume/salon.jpg",
    altFr: "Salon chaleureux avec cheminée à l'Hôtel du Jeu de Paume",
    altEn: "Cosy lounge with fireplace at Hôtel du Jeu de Paume",
    labelFr: "Le salon",
    labelEn: "The lounge",
  },
  carte: {
    src: "/hotel-jeu-de-paume/carte-versailles.jpg",
    altFr: "Carte de Versailles et points d'intérêt autour de l'hôtel",
    altEn: "Map of Versailles and landmarks around the hotel",
  },
  ambiance: {
    src: "/hotel-jeu-de-paume/hotel-ambiance.png",
    altFr: "Ambiance et accueil de l'Hôtel du Jeu de Paume",
    altEn: "Atmosphere and welcome at Hôtel du Jeu de Paume",
  },
  chambrePetite: {
    src: "/hotel-jeu-de-paume/chambre-double-petite.jpg",
    altFr: "Petite chambre double à l'Hôtel du Jeu de Paume",
    altEn: "Small double room at Hôtel du Jeu de Paume",
  },
  chambreDouble: {
    src: "/hotel-jeu-de-paume/chambre-double.jpg",
    altFr: "Chambre double lumineuse à l'Hôtel du Jeu de Paume",
    altEn: "Bright double room at Hôtel du Jeu de Paume",
  },
  chambreTwin: {
    src: "/hotel-jeu-de-paume/chambre-twin.jpg",
    altFr: "Chambre twin à l'Hôtel du Jeu de Paume",
    altEn: "Twin room at Hôtel du Jeu de Paume",
  },
  chambreFamiliale: {
    src: "/hotel-jeu-de-paume/chambre-familiale.jpg",
    altFr: "Chambre familiale spacieuse à l'Hôtel du Jeu de Paume",
    altEn: "Spacious family room at Hôtel du Jeu de Paume",
  },
  seminaire1: {
    src: "/hotel-jeu-de-paume/seminaire-1.jpg",
    altFr: "Salle de séminaire modulable à l'Hôtel du Jeu de Paume",
    altEn: "Modular seminar room at Hôtel du Jeu de Paume",
  },
  seminaire2: {
    src: "/hotel-jeu-de-paume/seminaire-2.jpg",
    altFr: "Espace séminaire et réunion à Versailles",
    altEn: "Seminar and meeting space in Versailles",
  },
  seminaire4: {
    src: "/hotel-jeu-de-paume/seminaire-4.jpg",
    altFr: "Configuration théâtre pour événement professionnel",
    altEn: "Theatre setup for a professional event",
  },
  seminaire5: {
    src: "/hotel-jeu-de-paume/seminaire-5.jpg",
    altFr: "Yourte et espaces événementiels de l'hôtel",
    altEn: "Yurt and event spaces at the hotel",
  },
} as const satisfies Record<string, HjpImageMeta>;

export type HjpImageKey = keyof typeof HJP_IMAGES;

/** Carrousel accueil · même ordre que hotel-jeudepaume.fr */
export const HJP_HERO_SLIDES: HjpImageKey[] = ["facade", "chambre", "jardin", "salon"];

/** Galerie · ordre éditorial */
export const HJP_GALLERY: HjpImageKey[] = [
  "facade",
  "salon",
  "chambre",
  "jardin",
  "chambreDouble",
  "chambreTwin",
  "chambreFamiliale",
  "chambrePetite",
  "ambiance",
  "carte",
  "seminaire1",
  "seminaire2",
  "seminaire4",
  "seminaire5",
];

/** Chambres · correspondance types officiels */
export const HJP_ROOM_IMAGES: Record<string, HjpImageKey> = {
  petite: "chambrePetite",
  double: "chambreDouble",
  twin: "chambreTwin",
  family: "chambreFamiliale",
};

export function hjpImage(key: HjpImageKey): HjpImageMeta {
  return HJP_IMAGES[key];
}

export function hjpAlt(key: HjpImageKey, locale: Locale): string {
  const img = HJP_IMAGES[key];
  return locale === "fr" ? img.altFr : img.altEn;
}

export function hjpLabel(key: HjpImageKey, locale: Locale): string | undefined {
  const img = HJP_IMAGES[key];
  if (!("labelFr" in img) || !img.labelFr) return undefined;
  return locale === "fr" ? img.labelFr : img.labelEn;
}

export function hjpSrc(key: HjpImageKey): string {
  return HJP_IMAGES[key].src;
}
