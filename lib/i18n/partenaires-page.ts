import type { Locale } from "../i18n-config";

export type PartenairesPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    imageAlt: string;
  };
  intro: {
    quote: string;
    quoteAccent: string;
    body: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  houses: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bookLabel: string;
  };
  profiles: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
    ctaEmail: string;
    ctaSeminars: string;
  };
};

const fr: PartenairesPageContent = {
  hero: {
    eyebrow: "Travel trade · Cocobiches",
    title: "Agences &",
    titleAccent: "partenaires.",
    lead:
      "Commission jusqu'à 15 %, surclassement selon disponibilité, interlocuteur commercial dédié. Nous travaillons avec les agences, DMC et réceptifs événementiels.",
    imageAlt: "Salon de l'Hôtel du Jeu de Paume, espace séminaire",
  },
  intro: {
    quote: "Trois formats,",
    quoteAccent: "un seul interlocuteur.",
    body:
      "Hôtel de charme, maison séminaires, appart-hôtel : trois maisons complémentaires à moins de dix minutes à pied les unes des autres. Réservation directe ou via GDS.",
  },
  benefits: {
    eyebrow: "Avantages",
    title: "Ce que nous proposons",
    items: [
      {
        title: "Commission jusqu'à 15 %",
        body: "Sur les séjours loisirs et corporate réservés via nos canaux partenaires.",
      },
      {
        title: "Surclassement",
        body: "Selon disponibilité, pour vos clients fidèles et vos dossiers premium.",
      },
      {
        title: "Contact dédié",
        body: "Un interlocuteur commercial unique pour les trois maisons · réponse sous 24 h.",
      },
      {
        title: "Séminaires & événements",
        body: "Un espace de séminaire jusqu'à 70 personnes.",
      },
    ],
  },
  houses: {
    eyebrow: "Les maisons",
    title: "Réserver pour vos clients",
    subtitle: "Sites officiels · meilleur tarif garanti",
    bookLabel: "Réserver",
  },
  profiles: {
    eyebrow: "Profils",
    title: "Avec qui nous travaillons",
    items: [
      "DMC et réceptifs événementiels Île-de-France",
      "Tour-operators culturels et city-break Versailles",
      "Agences MICE et organisateurs de séminaires",
    ],
  },
  contact: {
    title: "Parlons de votre prochain dossier",
    body:
      "Tarifs net, allotements, visites de presse trade, devis séminaire : notre équipe commerciale est à votre écoute.",
    emailLabel: "Contact commercial",
    ctaEmail: "Écrire au commercial",
    ctaSeminars: "Devis séminaire Jeu de Paume",
  },
};

const en: PartenairesPageContent = {
  hero: {
    eyebrow: "Travel trade · Cocobiches",
    title: "Agencies &",
    titleAccent: "partners.",
    lead:
      "Commission up to 15%, upgrade subject to availability, dedicated commercial contact. We work with travel agencies, DMCs and event partners.",
    imageAlt: "Hôtel du Jeu de Paume lounge, seminar space",
  },
  intro: {
    quote: "Three formats,",
    quoteAccent: "one point of contact.",
    body:
      "Character hotel, seminar house, apart-hotel: three complementary houses within ten minutes' walk of each other. Direct booking or via GDS.",
  },
  benefits: {
    eyebrow: "Benefits",
    title: "What we offer",
    items: [
      {
        title: "Commission up to 15%",
        body: "On leisure and corporate stays booked through our partner channels.",
      },
      {
        title: "Upgrades",
        body: "Subject to availability, for your loyal clients and premium files.",
      },
      {
        title: "Dedicated contact",
        body: "One commercial lead for all three houses · reply within 24 hours.",
      },
      {
        title: "Seminars & events",
        body: "One seminar space for up to 70 guests.",
      },
    ],
  },
  houses: {
    eyebrow: "The houses",
    title: "Book for your clients",
    subtitle: "Official sites · best rate guaranteed",
    bookLabel: "Book",
  },
  profiles: {
    eyebrow: "Profiles",
    title: "Who we work with",
    items: [
      "Travel agencies",
      "DMCs and Île-de-France event partners",
      "Cultural tour operators and Versailles city breaks",
      "MICE agencies and seminar organisers",
    ],
  },
  contact: {
    title: "Let's talk about your next file",
    body:
      "Net rates, allotments, trade press visits, seminar quotes: our commercial team is here for you.",
    emailLabel: "Commercial contact",
    ctaEmail: "Email commercial team",
    ctaSeminars: "Jeu de Paume seminar quote",
  },
};

export function getPartenairesPage(locale: Locale): PartenairesPageContent {
  return locale === "fr" ? fr : en;
}
