import type { HotelId } from "@/lib/hotels-data";
import type { Locale } from "@/lib/i18n-config";

export type HotelLandingContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  highlights: string[];
  ctaDiscover: string;
  ctaBook: string;
};

const LANDINGS: Record<Locale, Record<Exclude<HotelId, "jeudepaume">, HotelLandingContent>> = {
  fr: {
    angleterre: {
      metaTitle: "Hôtel d'Angleterre · Versailles, face au Château",
      metaDescription:
        "Hôtel de charme 3 étoiles en face du Château de Versailles. 29 chambres, petit-déjeuner maison, hospitalité Cocobiches.",
      eyebrow: "Cocobiches · Hôtel d'Angleterre",
      title: "Face au Château, au calme.",
      lead: "Notre première maison, acquise en 2010. Vingt-neuf chambres aux volumes généreux, parquets d'époque, et cette vue sur la grille du Château que l'on n'oublie pas.",
      highlights: [
        "29 chambres · 3 étoiles · depuis 2010",
        "En face directe du Château de Versailles",
        "Petit-déjeuner maison servi jusqu'à 11h",
        "Parking privé sur demande",
      ],
      ctaDiscover: "Réserver une chambre",
      ctaBook: "Voir les disponibilités",
    },
    onclelouis: {
      metaTitle: "Apparts de l'Oncle Louis · Apparthôtel Versailles",
      metaDescription:
        "Douze appartements hôteliers à Versailles : studios, T2, cuisine équipée. Séjours longs et familles, service Cocobiches.",
      eyebrow: "Cocobiches · Apparts de l'Oncle Louis",
      title: "Comme chez soi, à Versailles.",
      lead: "Douze appartements pensés pour les séjours longs, les familles et les missions professionnelles. Cuisine, salon, linge de maison — avec le service discret de nos équipes.",
      highlights: [
        "12 appartements · studios à 2 chambres",
        "Cuisine équipée et espace de travail",
        "Ménage et linge assurés par nos équipes",
        "Tarifs dégressifs à partir d'une semaine",
      ],
      ctaDiscover: "Réserver un appartement",
      ctaBook: "Voir les disponibilités",
    },
  },
  en: {
    angleterre: {
      metaTitle: "Hôtel d'Angleterre · Versailles, facing the Palace",
      metaDescription:
        "Charming 3-star hotel facing the Palace of Versailles. 29 rooms, in-house breakfast, Cocobiches hospitality.",
      eyebrow: "Cocobiches · Hôtel d'Angleterre",
      title: "Facing the Palace, in peace.",
      lead: "Our first house, acquired in 2010. Twenty-nine rooms with generous volumes, period parquet, and that view of the Palace gates you never forget.",
      highlights: [
        "29 rooms · 3 stars · since 2010",
        "Directly facing the Palace of Versailles",
        "In-house breakfast served until 11am",
        "Private parking on request",
      ],
      ctaDiscover: "Book a room",
      ctaBook: "Check availability",
    },
    onclelouis: {
      metaTitle: "Apparts de l'Oncle Louis · Apart-hotel Versailles",
      metaDescription:
        "Twelve apart-hotel units in Versailles: studios, one-bedroom, fitted kitchen. Long stays and families, Cocobiches service.",
      eyebrow: "Cocobiches · Apparts de l'Oncle Louis",
      title: "At home in Versailles.",
      lead: "Twelve apartments for long stays, families and business trips. Kitchen, living room, house linen — with our discreet team service.",
      highlights: [
        "12 apartments · studio to two-bedroom",
        "Fitted kitchen and workspace",
        "Housekeeping and linen by our team",
        "Reduced rates from one week",
      ],
      ctaDiscover: "Book an apartment",
      ctaBook: "Check availability",
    },
  },
};

export function getHotelLandingContent(
  locale: Locale,
  id: Exclude<HotelId, "jeudepaume">,
): HotelLandingContent {
  return LANDINGS[locale][id];
}
