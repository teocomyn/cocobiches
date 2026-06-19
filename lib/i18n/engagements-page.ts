import type { Locale } from "../i18n-config";

export type EngagementsPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    imageAlt: string;
    updatedLabel: string;
  };
  manifesto: {
    quote: string;
    quoteAccent: string;
    body: string;
  };
  stats: {
    title: string;
    subtitle: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    items: Array<{
      n: string;
      title: string;
      body: string;
      proof: string;
    }>;
  };
  targets: {
    eyebrow: string;
    title: string;
    items: Array<{ year: string; label: string; done?: boolean }>;
  };
  kitchen: {
    eyebrow: string;
    title: string;
    body: string;
    imageAlt: string;
  };
  actions: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  transparency: {
    title: string;
    body: string;
    report: string;
    methodology: string;
    email: string;
  };
  cta: {
    journal: string;
    contact: string;
  };
};

const fr: EngagementsPageContent = {
  hero: {
    eyebrow: "Responsabilité · Cocobiches",
    title: "Nos engagements",
    titleAccent: "mesurés.",
    lead:
      "Réduire notre impact, soutenir les producteurs franciliens, offrir un cadre de travail digne. Des chiffres réels, mis à jour chaque trimestre — rien de symbolique, rien de décoratif.",
    imageAlt: "Jardin de l'Hôtel du Jeu de Paume, lumière naturelle et végétation",
    updatedLabel: "Dernière mise à jour",
  },
  manifesto: {
    quote: "La RSE se prouve,",
    quoteAccent: "elle ne se décore pas.",
    body:
      "Notre démarche est imparfaite. Nous ne prétendons pas l'inverse. Ce que nous garantissons : elle est réelle, chiffrée, et elle progresse saison après saison.",
  },
  stats: {
    title: "Le tableau de bord",
    subtitle: "Quatre indicateurs suivis trimestriellement · méthodologie disponible sur demande",
  },
  pillars: {
    eyebrow: "Quatre axes",
    title: "Là où nous agissons concrètement",
    items: [
      {
        n: "01",
        title: "Cuisine locale & de saison",
        body:
          "Cartes renouvelées quatre fois par an. Fournisseurs franciliens identifiés, visités, fidélisés. Moins de 100 km entre le producteur et l'assiette, autant que possible.",
        proof: "62 % de produits locaux en cuisine aujourd'hui · objectif 70 % d'ici 2028.",
      },
      {
        n: "02",
        title: "Déchets & matériaux",
        body:
          "Tri renforcé, compostage, suppression du plastique à usage unique en chambre et en restauration depuis 2023. Éclairage LED sur l'ensemble des espaces.",
        proof: "12 tonnes de déchets évitées vs. le trimestre précédent.",
      },
      {
        n: "03",
        title: "Équipes en CDI",
        body:
          "100 % de nos collaborateurs en contrat durable, formés en interne, fidélisés dans la durée. Pas de précarisation des métiers de l'hôtellerie.",
        proof: "48 collaborateurs en CDI toute l'année · turnover inférieur à la moyenne du secteur.",
      },
      {
        n: "04",
        title: "Mobilité douce",
        body:
          "Nos trois maisons sont à cinq minutes à pied de la gare. Nous encourageons systématiquement la venue en train et proposons des itinéraires vélo.",
        proof: "41 % de nos clients choisissent train, vélo ou marche · 80 % de nos hôtes séminaires arrivent en transport en commun.",
      },
    ],
  },
  targets: {
    eyebrow: "Feuille de route",
    title: "Ce que nous visons",
    items: [
      { year: "2023", label: "Zéro plastique à usage unique en chambre et restauration", done: true },
      { year: "2025", label: "Rapport RSE annuel publié et partagé sur demande", done: true },
      { year: "2027", label: "Certification Clef Verte", done: false },
      { year: "2028", label: "70 % de produits en circuits courts en cuisine", done: false },
    ],
  },
  kitchen: {
    eyebrow: "Dans nos cuisines",
    title: "De la ferme à l'assiette, à moins de cent kilomètres.",
    body:
          "Maÿlis et sa brigade travaillent avec une dizaine de producteurs franciliens : légumes, fromages, viandes, pains. Les cartes changent avec les saisons — printemps, été, automne, hiver.",
    imageAlt: "Salon et cuisine ouverte de l'Hôtel du Jeu de Paume",
  },
  actions: {
    eyebrow: "Au quotidien",
    title: "Ce que nous faisons déjà",
    items: [
      "Linge et produits d'accueil sans plastique jetable",
      "Ampoules LED dans 100 % des chambres et espaces communs",
      "Yourte événementielle en bois et matériaux naturels",
      "Tri sélectif et compostage en cuisine",
      "Formation interne continue pour toutes les équipes",
      "Recommandation systématique du train depuis Paris",
    ],
  },
  transparency: {
    title: "Transparence totale",
    body:
      "Nous ne greenwashons pas. Si un chiffre baisse, nous le disons. Si une action échoue, nous la reformulons. C'est la condition d'une hospitalité responsable crédible.",
    report: "Rapport RSE annuel disponible sur demande",
    methodology: "Méthodologie de calcul des indicateurs",
    email: "bonjour@cocobiches.com",
  },
  cta: {
    journal: "Lire notre vision de l'hôtellerie indépendante",
    contact: "Demander le rapport RSE",
  },
};

const en: EngagementsPageContent = {
  hero: {
    eyebrow: "Responsibility · Cocobiches",
    title: "Our commitments,",
    titleAccent: "measured.",
    lead:
      "Reduce our impact, support Île-de-France producers, offer a dignified workplace. Real figures, updated every quarter — nothing symbolic, nothing decorative.",
    imageAlt: "Hôtel du Jeu de Paume garden, natural light and greenery",
    updatedLabel: "Last updated",
  },
  manifesto: {
    quote: "CSR is proven,",
    quoteAccent: "not decorated.",
    body:
      "Our approach is imperfect. We do not claim otherwise. What we guarantee: it is real, quantified, and it improves season after season.",
  },
  stats: {
    title: "The dashboard",
    subtitle: "Four indicators tracked quarterly · methodology available on request",
  },
  pillars: {
    eyebrow: "Four pillars",
    title: "Where we act concretely",
    items: [
      {
        n: "01",
        title: "Local, seasonal cuisine",
        body:
          "Menus renewed four times a year. Identified, visited, loyal Île-de-France suppliers. Under 100 km from producer to plate, as far as possible.",
        proof: "62% local produce in the kitchen today · 70% target by 2028.",
      },
      {
        n: "02",
        title: "Waste & materials",
        body:
          "Enhanced sorting, composting, single-use plastic removed from rooms and dining since 2023. LED lighting throughout.",
        proof: "12 tonnes of waste avoided vs. the previous quarter.",
      },
      {
        n: "03",
        title: "Permanent staff",
        body:
          "100% of our team on durable contracts, trained in-house, retained over time. No precarious hospitality jobs.",
        proof: "48 employees on year-round permanent contracts · turnover below sector average.",
      },
      {
        n: "04",
        title: "Soft mobility",
        body:
          "All three houses are five minutes' walk from the station. We systematically encourage travel by train and suggest cycling routes.",
        proof: "41% of guests choose train, bike or walking · 80% of seminar guests arrive by public transport.",
      },
    ],
  },
  targets: {
    eyebrow: "Roadmap",
    title: "What we're aiming for",
    items: [
      { year: "2023", label: "Zero single-use plastic in rooms and dining", done: true },
      { year: "2025", label: "Annual CSR report published and shared on request", done: true },
      { year: "2027", label: "Clef Verte certification", done: false },
      { year: "2028", label: "70% short-supply produce in the kitchen", done: false },
    ],
  },
  kitchen: {
    eyebrow: "In our kitchens",
    title: "From farm to plate, under a hundred kilometres.",
    body:
      "Maÿlis and her brigade work with a dozen Île-de-France producers: vegetables, cheeses, meats, breads. Menus follow the seasons — spring, summer, autumn, winter.",
    imageAlt: "Hôtel du Jeu de Paume lounge and open kitchen",
  },
  actions: {
    eyebrow: "Day to day",
    title: "What we already do",
    items: [
      "Linens and amenities without disposable plastic",
      "LED bulbs in 100% of rooms and common areas",
      "Event yurt in wood and natural materials",
      "Selective sorting and kitchen composting",
      "Ongoing in-house training for all teams",
      "Systematic recommendation of the train from Paris",
    ],
  },
  transparency: {
    title: "Full transparency",
    body:
      "We do not greenwash. If a figure drops, we say so. If an action fails, we rethink it. That is the condition for credible responsible hospitality.",
    report: "Annual CSR report available on request",
    methodology: "Indicator calculation methodology",
    email: "bonjour@cocobiches.com",
  },
  cta: {
    journal: "Read our take on independent hospitality",
    contact: "Request the CSR report",
  },
};

export function getEngagementsPage(locale: Locale): EngagementsPageContent {
  return locale === "fr" ? fr : en;
}
