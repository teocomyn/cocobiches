import type { JournalArticleMeta } from "./types";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const JOURNAL_ARTICLES: JournalArticleMeta[] = [
  {
    slug: "visiter-versailles-autrement",
    category: "guide",
    dateISO: "2025-09-12",
    readingMinutes: 8,
    titleFr: "Dix idées pour visiter Versailles autrement",
    titleEn: "Ten ways to see Versailles differently",
    descriptionFr:
      "Au-delà du Château et de la Galerie des Glaces, découvrez les jardins secrets, les petites tables et les balades d'après-midi de Versailles. Le guide Cocobiches.",
    descriptionEn:
      "Beyond the Palace and the Hall of Mirrors: secret gardens, small tables and afternoon walks in Versailles. The Cocobiches guide.",
    excerptFr:
      "Au-delà de la Galerie des Glaces : jardins secrets, petites tables, balades d'après-midi. Nos équipes partagent leurs adresses : celles que l'on ne trouve pas dans les guides.",
    excerptEn:
      "Beyond the Hall of Mirrors: secret gardens, small tables, afternoon walks. Our teams share addresses you won't find in guidebooks.",
    heroImage: u("photo-1564585222527-c2777a5bc6cb"),
    featured: true,
    inlineImages: [
      {
        src: u("photo-1589978006229-8b2b2e6e6c6f"),
        altFr: "Allées et perspective dans les jardins à la française près de Versailles",
        altEn: "Formal garden alleys and perspective near Versailles",
      },
    ],
  },
  {
    slug: "seminaire-versailles-jeu-de-paume",
    category: "seminaires",
    dateISO: "2025-10-03",
    readingMinutes: 9,
    titleFr: "Organiser un séminaire à Versailles, mode d'emploi",
    titleEn: "How to plan a seminar in Versailles",
    descriptionFr:
      "Séminaire d'entreprise à Versailles : salle, yourte, cuisine maison, team-building. Découvrez le format Hôtel du Jeu de Paume, à deux minutes du Château.",
    descriptionEn:
      "Corporate seminars in Versailles: meeting room, yurt, in-house kitchen, team building. Discover the Hôtel du Jeu de Paume format, steps from the Palace.",
    excerptFr:
      "Le Jeu de Paume propose deux salles jusqu'à 40 personnes, une cuisine sur place, et un salon pour les pauses. Voici comment nous travaillons avec vos équipes.",
    excerptEn:
      "Jeu de Paume offers two rooms for up to 40 guests, on-site catering and a lounge for breaks. Here's how we work with your teams.",
    heroImage: u("photo-1524178232363-1fb2b075b655"),
    inlineImages: [
      {
        src: u("photo-1497366216548-37526070297c"),
        altFr: "Espace de réunion lumineux avec grande table",
        altEn: "Bright meeting space with a large table",
      },
    ],
  },
  {
    slug: "ou-dejeuner-versailles",
    category: "gastronomie",
    dateISO: "2025-10-18",
    readingMinutes: 8,
    titleFr: "Où déjeuner à Versailles, notre sélection de tables",
    titleEn: "Where to lunch in Versailles: our table picks",
    descriptionFr:
      "Les meilleures tables de Versailles sélectionnées par nos équipes : bistrots, cuisines étoilées, adresses locales. Le guide gastronomique Cocobiches.",
    descriptionEn:
      "The best tables in Versailles, picked by our teams: bistros, starred kitchens, local favourites. The Cocobiches food guide.",
    excerptFr:
      "Une sélection courte de tables versaillaises testées par nos équipes, par budget et par quartier. Des bistrots de vingt couverts aux cuisines étoilées.",
    excerptEn:
      "A short, team-tested selection of Versailles tables, by budget and neighbourhood. From 20-seat bistros to starred kitchens.",
    heroImage: u("photo-1414235077428-338989a2e8c0"),
    inlineImages: [
      {
        src: u("photo-1559339352-11d035aa65de"),
        altFr: "Table dressée, vaisselle et repas en lumière douce",
        altEn: "Set table, tableware and meal in soft light",
      },
    ],
  },
  {
    slug: "versailles-hiver-itineraire",
    category: "saisonnalite",
    dateISO: "2025-11-07",
    readingMinutes: 9,
    titleFr: "Versailles en hiver, l'itinéraire parfait pour deux jours",
    titleEn: "Versailles in winter: a two-day itinerary",
    descriptionFr:
      "Versailles hors saison, sous la brume ou le soleil d'hiver. Notre itinéraire pour deux jours entre le Château, les marchés et les bonnes tables.",
    descriptionEn:
      "Versailles off-season, in mist or winter sun. Our two-day itinerary between the Palace, markets and great tables.",
    excerptFr:
      "L'hiver est notre saison préférée à Versailles. La lumière devient plus rare, les foules disparaissent. Voici notre itinéraire pour deux jours.",
    excerptEn:
      "Winter is our favourite season in Versailles. The light grows precious, crowds thin. Here is our two-day itinerary.",
    heroImage: u("photo-1494790369323-3d0815218e0e"),
    inlineImages: [
      {
        src: u("photo-1519681393784-d120267933ba"),
        altFr: "Paysage d'hiver, arbres et lumière douce",
        altEn: "Winter landscape with trees and soft light",
      },
    ],
  },
  {
    slug: "cheffes-cuisine-jeu-de-paume",
    category: "coulisses",
    dateISO: "2025-11-22",
    readingMinutes: 8,
    titleFr: "Les Cheffes du Jeu de Paume, cuisine maison et saveurs de saison",
    titleEn: "The Jeu de Paume chefs: in-house cuisine and seasonal flavours",
    descriptionFr:
      "Rencontre avec Maÿlis et notre brigade 100% féminine. Cuisine maison, produits de saison, exigence du fait-maison à l'Hôtel du Jeu de Paume.",
    descriptionEn:
      "Meet Maÿlis and our all-women brigade. In-house cooking, seasonal produce, and our made-from-scratch ethos at Hôtel du Jeu de Paume.",
    excerptFr:
      "À l'Hôtel du Jeu de Paume, la cuisine n'est pas un service annexe. C'est une signature. Voici ce que cela change pour vos séjours et vos séminaires.",
    excerptEn:
      "At Jeu de Paume, the kitchen is not an afterthought. It's a signature. Here's what that means for your stays and seminars.",
    heroImage: u("photo-1556912172-45b7abe8b7e1"),
    inlineImages: [
      {
        src: u("photo-1556910103-1c02745aae4d"),
        altFr: "Dressage de plat en cuisine, mains du chef",
        altEn: "Plating in the kitchen, chef's hands",
      },
    ],
  },
  {
    slug: "hotellerie-independante-cocobiches",
    category: "coulisses",
    dateISO: "2025-12-05",
    readingMinutes: 7,
    titleFr: "Pourquoi choisir un hôtel indépendant plutôt qu'une chaîne",
    titleEn: "Why choose an independent hotel over a chain",
    descriptionFr:
      "Les avantages d'un hôtel indépendant : personnalisation, équipe stable, authenticité. Notre vision de l'hospitalité chez Cocobiches à Versailles.",
    descriptionEn:
      "What an independent hotel offers: personalisation, a stable team, authenticity. Our take on hospitality at Cocobiches in Versailles.",
    excerptFr:
      "On nous pose souvent la question : pourquoi choisir un hôtel indépendant plutôt qu'une grande chaîne ? La réponse tient en trois arguments.",
    excerptEn:
      "People often ask: why pick an independent hotel over a big chain? Our answer comes down to three points.",
    heroImage: u("photo-1564501049412-61c2a3083791"),
    inlineImages: [
      {
        src: u("photo-1505693416388-ac5ce068fe85"),
        altFr: "Salon d'hôtel chaleureux, canapé et lumière naturelle",
        altEn: "Cosy hotel lounge with sofa and natural light",
      },
    ],
  },
  {
    slug: "yourte-jeu-de-paume-versailles",
    category: "coulisses",
    dateISO: "2025-12-18",
    readingMinutes: 8,
    titleFr: "La yourte du Jeu de Paume, un lieu unique à Versailles",
    titleEn: "The Jeu de Paume yurt: a one-of-a-kind venue in Versailles",
    descriptionFr:
      "Découvrez la yourte événementielle de l'Hôtel du Jeu de Paume. Dîners, cocktails, ateliers, séminaires : un lieu rare au cœur de Versailles.",
    descriptionEn:
      "Discover the event yurt at Hôtel du Jeu de Paume. Dinners, cocktails, workshops, seminars: a rare space in the heart of Versailles.",
    excerptFr:
      "Au fond de notre cour-jardin, il y a notre yourte. Elle est devenue la signature la plus reconnaissable de l'Hôtel du Jeu de Paume.",
    excerptEn:
      "At the back of our courtyard-garden stands our yurt. It has become Jeu de Paume's most recognisable signature.",
    heroImage: u("photo-1528605248644-14dd04022da1"),
    inlineImages: [
      {
        src: u("photo-1517248135467-4c7edcad34c4"),
        altFr: "Ambiance de dîner convivial, tables dressées",
        altEn: "Convivial dinner setting with dressed tables",
      },
    ],
  },
  {
    slug: "noel-versailles-traditions",
    category: "saisonnalite",
    dateISO: "2025-12-28",
    readingMinutes: 8,
    titleFr: "Noël à Versailles, notre guide des traditions et découvertes",
    titleEn: "Christmas in Versailles: traditions and discoveries",
    descriptionFr:
      "Noël à Versailles : marché de Noël, Château illuminé, messes de minuit, bonnes tables. Le guide Cocobiches pour vivre Noël à Versailles.",
    descriptionEn:
      "Christmas in Versailles: Christmas market, illuminated Palace, midnight mass, great tables. The Cocobiches guide to the season.",
    excerptFr:
      "Noël à Versailles a quelque chose de particulier. La ville se pare de lumières avec retenue. Voici notre guide pour vivre cette période chez nous.",
    excerptEn:
      "Christmas in Versailles has a special feel. The city lights up with restraint. Here's our guide to experiencing it with us.",
    heroImage: u("photo-1512389142860-9c54e756aca1"),
    inlineImages: [
      {
        src: u("photo-1482517967863-00e15c9b44be"),
        altFr: "Lumières festives et ambiance hivernale en ville",
        altEn: "Festive lights and winter city atmosphere",
      },
    ],
  },
  {
    slug: "domaine-marie-antoinette-guide",
    category: "guide",
    dateISO: "2026-01-10",
    readingMinutes: 9,
    titleFr: "Domaine de Marie-Antoinette, visite complète et conseils",
    titleEn: "Marie-Antoinette's estate: full visit and tips",
    descriptionFr:
      "Petit Trianon, Hameau de la Reine, jardins anglais. Le guide Cocobiches du Domaine de Marie-Antoinette à Versailles, loin des foules du Château.",
    descriptionEn:
      "Petit Trianon, Queen's Hamlet, English gardens. The Cocobiches guide to Marie-Antoinette's estate, away from Palace crowds.",
    excerptFr:
      "Quand on dit Versailles, on pense au Château. Mais à un kilomètre, il y a un lieu que nous préférons même : le Domaine de Marie-Antoinette.",
    excerptEn:
      "When people say Versailles, they think of the Palace. But a kilometre away lies a place we love even more: Marie-Antoinette's estate.",
    heroImage: u("photo-1591608971362-cb6b1a0a0f9a"),
    inlineImages: [
      {
        src: u("photo-1564585222527-c2777a5bc6cb"),
        altFr: "Architecture et perspective du domaine royal de Versailles",
        altEn: "Architecture and perspective of the Versailles royal estate",
      },
    ],
  },
  {
    slug: "choisir-hotel-cocobiches",
    category: "coulisses",
    dateISO: "2026-01-20",
    readingMinutes: 8,
    titleFr: "Quel hôtel Cocobiches choisir à Versailles, notre guide",
    titleEn: "Which Cocobiches house to choose in Versailles: our guide",
    descriptionFr:
      "Hôtel d'Angleterre, Hôtel du Jeu de Paume, Apparts de l'Oncle Louis. Nos trois maisons à Versailles, pour quel séjour, pour qui. Le guide Cocobiches.",
    descriptionEn:
      "Hôtel d'Angleterre, Hôtel du Jeu de Paume, Apparts de l'Oncle Louis. Our three houses in Versailles: who each is for. The Cocobiches guide.",
    excerptFr:
      "Cocobiches, c'est trois maisons à deux minutes du Château. Elles partagent notre équipe, notre hospitalité, notre vision. Mais elles sont différentes.",
    excerptEn:
      "Cocobiches is three houses minutes from the Palace. They share our team, our hospitality, our vision. But they are different.",
    heroImage: u("photo-1505693416388-ac5ce068fe85"),
    inlineImages: [
      {
        src: u("photo-1566073771259-6a8506099945"),
        altFr: "Façade d'hôtel de caractère au crépuscule",
        altEn: "Character hotel façade at dusk",
      },
    ],
  },
];

export function getJournalPosts(): JournalArticleMeta[] {
  return JOURNAL_ARTICLES;
}

export function getArticleMeta(slug: string): JournalArticleMeta | undefined {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}

export function getFeaturedPost(): JournalArticleMeta | undefined {
  return JOURNAL_ARTICLES.find((a) => a.featured) ?? JOURNAL_ARTICLES[0];
}
