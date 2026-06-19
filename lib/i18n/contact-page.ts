import type { Locale } from "../i18n-config";

export type ContactPageContent = {
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
  form: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  reach: {
    eyebrow: string;
    title: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    responseLabel: string;
    responseValue: string;
  };
  departments: {
    eyebrow: string;
    title: string;
    items: Record<
      "general" | "press" | "commercial" | "events",
      { title: string; desc: string }
    >;
  };
  shortcuts: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; desc: string; href: string; external?: boolean }>;
  };
  location: {
    title: string;
    body: string;
    train: string;
    palace: string;
  };
};

const fr: ContactPageContent = {
  hero: {
    eyebrow: "Cocobiches · Versailles",
    title: "Écrivez",
    titleAccent: "nous.",
    lead:
      "Une question sur le groupe, une idée de partenariat, un projet d'événement ? Nous lisons chaque message — et nous répondons avec attention.",
    imageAlt: "Accueil chaleureux au salon de l'Hôtel du Jeu de Paume",
  },
  intro: {
    quote: "Pas de call center,",
    quoteAccent: "pas de réponse automatique.",
    body:
      "Votre message arrive directement à notre équipe à Versailles. Presse, travel trade, séminaires ou simple curiosité : nous vous orientons vers la bonne personne.",
  },
  form: {
    eyebrow: "Formulaire",
    title: "Envoyez-nous un message",
    subtitle: "Réponse habituelle sous 24 à 48 h ouvrées",
  },
  reach: {
    eyebrow: "Coordonnées",
    title: "Nous joindre",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail général",
    addressLabel: "Adresse",
    responseLabel: "Délai de réponse",
    responseValue: "24–48 h ouvrées",
  },
  departments: {
    eyebrow: "Par sujet",
    title: "Le bon interlocuteur",
    items: {
      general: {
        title: "Questions générales",
        desc: "Séjour, groupe, information sur nos trois maisons.",
      },
      press: {
        title: "Presse & médias",
        desc: "Interview, reportage, visuels, dossier de presse.",
      },
      commercial: {
        title: "Agences & partenaires",
        desc: "Travel trade, commissions, codes GDS, tarifs net.",
      },
      events: {
        title: "Séminaires & événements",
        desc: "Devis MICE, privatisation, séminaire au Jeu de Paume.",
      },
    },
  },
  shortcuts: {
    eyebrow: "Accès direct",
    title: "Vous cherchez plutôt…",
    items: [
      {
        title: "Espace presse",
        desc: "Dossier, logos, banque d'images",
        href: "/presse",
      },
      {
        title: "Partenaires & GDS",
        desc: "Codes, commissions, contact commercial",
        href: "/partenaires",
      },
      {
        title: "Devis séminaire",
        desc: "Salles, yourte, restauration · Jeu de Paume",
        href: "/hotel-jeu-de-paume/seminaires/demande-devis",
      },
    ],
  },
  location: {
    title: "Au cœur de Versailles",
    body: "Nos trois maisons sont dans le quartier historique, à quelques minutes à pied les unes des autres.",
    train: "Gare Versailles Château Rive Gauche · 5 min à pied",
    palace: "Château de Versailles · 2 min à pied",
  },
};

const en: ContactPageContent = {
  hero: {
    eyebrow: "Cocobiches · Versailles",
    title: "Write",
    titleAccent: "to us.",
    lead:
      "A question about the group, a partnership idea, an event project? We read every message — and reply with care.",
    imageAlt: "Warm welcome in the Hôtel du Jeu de Paume lounge",
  },
  intro: {
    quote: "No call centre,",
    quoteAccent: "no auto-reply.",
    body:
      "Your message goes straight to our team in Versailles. Press, travel trade, seminars or simple curiosity: we'll point you to the right person.",
  },
  form: {
    eyebrow: "Form",
    title: "Send us a message",
    subtitle: "We usually reply within 24–48 business hours",
  },
  reach: {
    eyebrow: "Details",
    title: "Get in touch",
    phoneLabel: "Phone",
    emailLabel: "General email",
    addressLabel: "Address",
    responseLabel: "Response time",
    responseValue: "24–48 business hours",
  },
  departments: {
    eyebrow: "By topic",
    title: "The right contact",
    items: {
      general: {
        title: "General enquiries",
        desc: "Stay, group, information about our three houses.",
      },
      press: {
        title: "Press & media",
        desc: "Interview, feature, visuals, press kit.",
      },
      commercial: {
        title: "Agencies & partners",
        desc: "Travel trade, commission, GDS codes, net rates.",
      },
      events: {
        title: "Seminars & events",
        desc: "MICE quote, private hire, seminar at Jeu de Paume.",
      },
    },
  },
  shortcuts: {
    eyebrow: "Direct access",
    title: "Looking for…",
    items: [
      {
        title: "Press room",
        desc: "Kit, logos, image bank",
        href: "/presse",
      },
      {
        title: "Partners & GDS",
        desc: "Codes, commission, commercial contact",
        href: "/partenaires",
      },
      {
        title: "Seminar quote",
        desc: "Rooms, yurt, catering · Jeu de Paume",
        href: "/hotel-jeu-de-paume/seminaires/demande-devis",
      },
    ],
  },
  location: {
    title: "In the heart of Versailles",
    body: "Our three houses are in the historic quarter, a few minutes' walk from each other.",
    train: "Versailles Château Rive Gauche station · 5 min walk",
    palace: "Palace of Versailles · 2 min walk",
  },
};

export function getContactPage(locale: Locale): ContactPageContent {
  return locale === "fr" ? fr : en;
}
