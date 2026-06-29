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
      metaTitle: "Hôtel d'Angleterre · Versailles, rue de Fontenay",
      metaDescription:
        "Hôtel de charme 3 étoiles rue de Fontenay à Versailles. 20 chambres, petit-déjeuner, hospitalité Cocobiches.",
      eyebrow: "Cocobiches · Hôtel d'Angleterre",
      title: "Rue de Fontenay, au calme.",
      lead: "Notre première maison, acquise en 2010. Vingt chambres aux volumes généreux, parquets d'époque, au calme du quartier historique.",
      highlights: [
        "20 chambres · 3 étoiles · depuis 2010",
        "À 5 min à pied du Château",
        "Petit-déjeuner servi jusqu'à 10h en semaine et 11h le week-end",
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
      lead: "Douze appartements pensés pour les séjours longs, les familles et les missions professionnelles. Cuisine, salon, machine à laver — avec le service discret de nos équipes.",
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
      metaTitle: "Hôtel d'Angleterre · Versailles, rue de Fontenay",
      metaDescription:
        "Charming 3-star hotel on rue de Fontenay in Versailles. 20 rooms, breakfast, Cocobiches hospitality.",
      eyebrow: "Cocobiches · Hôtel d'Angleterre",
      title: "Rue de Fontenay, in peace.",
      lead: "Our first house, acquired in 2010. Twenty rooms with generous volumes, period parquet, in the quiet historic quarter.",
      highlights: [
        "20 rooms · 3 stars · since 2010",
        "5 min walk to the Palace",
        "Breakfast served until 10am on weekdays and 11am at weekends",
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
      lead: "Twelve apartments for long stays, families and business trips. Kitchen, living room, washing machine — with our discreet team service.",
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
