import type { Locale } from "../i18n-config";

export type PressePageContent = {
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
  downloads: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Record<"kit" | "logos" | "photos", { title: string; desc: string }>;
    downloadLabel: string;
  };
  facts: {
    eyebrow: string;
    title: string;
    items: Array<{ value: string; label: string }>;
  };
  angles: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
    ctaContact: string;
    ctaEmail: string;
  };
};

const fr: PressePageContent = {
  hero: {
    eyebrow: "Médias · Cocobiches",
    title: "Espace",
    titleAccent: "presse.",
    lead:
      "Dossier officiel, logos, banque d'images haute définition. Pour vos articles, reportages, podcasts et tournages à Versailles.",
    imageAlt: "Façade de l'Hôtel du Jeu de Paume, lumière du matin",
  },
  intro: {
    quote: "Trois maisons indépendantes,",
    quoteAccent: "une même famille versaillaise.",
    body:
      "Cocobiches est un groupe hôtelier familial fondé en 2010, sans actionnaire extérieur. Nous accueillons la presse avec plaisir — interviews, visites de coulisses, reportages photo.",
  },
  downloads: {
    eyebrow: "Ressources",
    title: "Téléchargements officiels",
    subtitle: "Libres de droits pour usage éditorial · crédit photo « Cocobiches » apprécié",
    items: {
      kit: {
        title: "Dossier de presse",
        desc: "Présentation du groupe, chiffres clés, biographies, contacts.",
      },
      logos: {
        title: "Logo officiel Cocobiches",
        desc: "Fichier PNG haute définition · charte couleurs marine et crème.",
      },
      photos: {
        title: "Banque d'images presse",
        desc: "Façades, chambres, salons, cuisine · archive ZIP.",
      },
    },
    downloadLabel: "Télécharger",
  },
  facts: {
    eyebrow: "En bref",
    title: "Le groupe en chiffres",
    items: [
      { value: "3", label: "maisons à Versailles" },
      { value: "72", label: "chambres & appartements" },
      { value: "2010", label: "année de fondation" },
      { value: "2 min", label: "à pied du Château" },
    ],
  },
  angles: {
    eyebrow: "Sujets",
    title: "Angles éditoriaux",
    items: [
      "Hôtellerie indépendante face aux grands groupes",
      "Versailles au-delà du Château : quartiers, adresses, saisons",
      "Famille Comyn, propriétaires-exploitants depuis quinze ans",
      "Séminaires et événements privés au Jeu de Paume",
      "Démarche RSE mesurée : circuits courts, CDI, mobilité douce",
    ],
  },
  contact: {
    title: "Une demande spécifique ?",
    body:
      "Interview, tournage, visuels sur mesure, privatisation d'espace : écrivez-nous directement. Nous répondons sous 48 h ouvrées.",
    emailLabel: "Contact presse",
    ctaContact: "Formulaire de contact",
    ctaEmail: "Écrire à la presse",
  },
};

const en: PressePageContent = {
  hero: {
    eyebrow: "Media · Cocobiches",
    title: "Press",
    titleAccent: "room.",
    lead:
      "Official kit, logos, high-resolution image bank. For your articles, features, podcasts and shoots in Versailles.",
    imageAlt: "Hôtel du Jeu de Paume façade, morning light",
  },
  intro: {
    quote: "Three independent houses,",
    quoteAccent: "one Versailles family.",
    body:
      "Cocobiches is a family hotel group founded in 2010, with no outside shareholders. We welcome the press — interviews, behind-the-scenes visits, photo shoots.",
  },
  downloads: {
    eyebrow: "Resources",
    title: "Official downloads",
    subtitle: "Free for editorial use · photo credit « Cocobiches » appreciated",
    items: {
      kit: {
        title: "Press kit",
        desc: "Group overview, key figures, biographies, contacts.",
      },
      logos: {
        title: "Official Cocobiches logo",
        desc: "High-definition PNG · navy and cream brand colours.",
      },
      photos: {
        title: "Press image bank",
        desc: "Façades, rooms, lounges, kitchen · ZIP archive.",
      },
    },
    downloadLabel: "Download",
  },
  facts: {
    eyebrow: "At a glance",
    title: "The group in figures",
    items: [
      { value: "3", label: "houses in Versailles" },
      { value: "72", label: "rooms & apartments" },
      { value: "2010", label: "year founded" },
      { value: "2 min", label: "walk from the Palace" },
    ],
  },
  angles: {
    eyebrow: "Topics",
    title: "Editorial angles",
    items: [
      "Independent hospitality vs. large groups",
      "Versailles beyond the Palace: neighbourhoods, addresses, seasons",
      "The Comyn family, owner-operators for fifteen years",
      "Seminars and private events at Jeu de Paume",
      "Measured CSR: short supply chains, permanent staff, soft mobility",
    ],
  },
  contact: {
    title: "A specific request?",
    body:
      "Interview, shoot, bespoke visuals, private hire: write to us directly. We reply within 48 business hours.",
    emailLabel: "Press contact",
    ctaContact: "Contact form",
    ctaEmail: "Email the press team",
  },
};

export function getPressePage(locale: Locale): PressePageContent {
  return locale === "fr" ? fr : en;
}
