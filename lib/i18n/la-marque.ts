/** Contenu éditorial page La Marque · FR / EN (hors meta centralisé dans messages). */

export type LaMarqueLocale = "fr" | "en";

export const laMarqueMeta = {
  fr: {
    title: "Cocobiches, groupe hôtelier familial à Versailles",
    description:
      "Cocobiches réunit trois maisons indépendantes à Versailles. Une famille de propriétaires-exploitants, une hospitalité à taille humaine, à deux pas du Château.",
    ogTitle: "Cocobiches · une famille, trois maisons à Versailles",
    ogDescription:
      "À deux pas du Château, trois adresses indépendantes portées par une même équipe.",
  },
  en: {
    title: "Cocobiches · family hotel group in Versailles",
    description:
      "Cocobiches brings together three independent houses in Versailles. A family of owner-operators, human-scale hospitality, steps from the Palace.",
    ogTitle: "Cocobiches · one family, three houses in Versailles",
    ogDescription:
      "Steps from the Palace, three independent addresses run by the same team.",
  },
} as const;

export type LaMarqueDict = typeof laMarqueFr;

export const laMarqueFr = {
  hero: {
    micro: "La marque / Cocobiches",
    lines: ["Une maison.", "Trois adresses.", "Une même famille."],
    baseline: "Groupe hôtelier indépendant fondé à Versailles.",
    scroll: "Découvrir",
    imageAlt: "Façade d’une maison Cocobiches, lumière dorée du matin",
  },
  manifesto: {
    micro: "Notre manifeste",
    headline: "Nous tenons ces maisons\nnous-mêmes.",
    body:
      "Cocobiches est un groupe familial, indépendant, fondé à Versailles.\nPas d’actionnaire extérieur. Pas de franchise. Pas de délégation de marque.\n\nTrois adresses à deux minutes du Château, portées par une même équipe, dans une même ville que nous habitons nous aussi. Chaque décision se prend ici, pour nos hôtes et nos équipes, sans passer par un comité lointain.\n\nC’est peut-être vieux jeu. Nous pensons que c’est ce qui fait la différence.",
  },
  values: {
    micro: "Ce qui nous guide",
    title: "Quatre convictions simples.",
    subtitle: "Tenues depuis seize ans.",
    items: [
      {
        n: "01",
        title: "Famille",
        body:
          "Cocobiches est un groupe de famille, au sens propre comme au sens figuré. Les décisions se prennent entre propriétaires-exploitants, pour des maisons que nous connaissons chambre par chambre.",
        proof:
          "Nos trois hôtels appartiennent à la famille Comyn depuis leur acquisition. Aucun actionnaire extérieur. Aucun investisseur en embuscade.",
      },
      {
        n: "02",
        title: "Authenticité",
        body:
          "Des visages réels à la réception. Une cuisine sincère, préparée dans nos murs. Des lieux qui ont une âme, qu’on respecte sans chercher à les remettre à neuf pour remettre à neuf.",
        proof:
          "100 % de notre cuisine est préparée maison par notre brigade, menée par Maÿlis. Aucun prestataire extérieur.",
      },
      {
        n: "03",
        title: "Lifestyle",
        body:
          "Un séjour qui dépasse la simple nuitée. Le temps d’un café dans notre salon, d’une promenade dans le Parc, d’une recommandation de table que personne ne connaît. Versailles ne s’habite pas comme on y passe.",
        proof:
          "Nos équipes connaissent Versailles de l’intérieur. Carnet d’adresses partagé, conseils sur-mesure, accès privilégié à certains lieux.",
      },
      {
        n: "04",
        title: "Responsabilité",
        body:
          "Une démarche RSE mesurée et tenue. Produits de saison, circuits courts, matériaux durables, équipes en CDI. Rien de symbolique, rien de décoratif.",
        proof:
          "80 % de nos hôtes séminaires arrivent en transport en commun. 100 % de nos collaborateurs sont formés en interne.",
      },
    ],
  },
  history: {
    micro: "Notre histoire",
    title: "Seize ans,",
    titleLine2: "à Versailles.",
    intro:
      "Cocobiches n’est pas un coup marketing. C’est l’histoire d’une famille qui a patiemment construit, maison après maison, un groupe hôtelier indépendant au cœur de Versailles.",
    steps: [
      {
        year: "2010",
        title: "L’Hôtel d’Angleterre",
        text:
          "François reprend l’Hôtel d’Angleterre, adresse historique face au Château. Premier acte d’une aventure familiale. Pas de vision à dix ans, pas de business plan disruptif. Simplement l’envie de bien recevoir, dans une ville que nous aimons.",
        imageAlt: "Façade · Hôtel d’Angleterre",
      },
      {
        year: "2014",
        title: "L’Hôtel du Jeu de Paume",
        text:
          "Quatre ans plus tard, le groupe s’agrandit avec l’Hôtel du Jeu de Paume, rue de Fontenay. Un hôtel plus confidentiel, avec des espaces événementiels qui deviendront notre spécialité : une salle de séminaire lumineuse, puis plus tard, notre yourte signature.",
        imageAlt: "Entrée · Hôtel du Jeu de Paume",
      },
      {
        year: "2018",
        title: "Les Apparts de l’Oncle Louis",
        text:
          "Troisième maison, troisième format. Un appart-hôtel pensé pour les séjours longs, les familles, les missions professionnelles. Notre collection hôtelière versaillaise est complète.",
        imageAlt: "Détail de façade · Apparts de l’Oncle Louis",
      },
      {
        year: "2025",
        title: "La naissance de Cocobiches",
        text:
          "Après quinze ans, nous avons donné un nom à ce que nous construisions sans le dire : Cocobiches. Une marque ombrelle, une charte graphique, une promesse commune à nos trois maisons. L’acte de foi d’un groupe qui assume son ambition.",
        imageAlt: "Les trois maisons · aujourd’hui",
      },
    ],
  },
  stats: {
    micro: "En chiffres",
    title: "La mesure",
    titleLine2: "de notre engagement.",
    items: [
      {
        value: "16",
        unit: "ans",
        label:
          "À Versailles, sans interruption. Depuis la reprise de notre première maison en 2010.",
      },
      {
        value: "3",
        unit: "maisons",
        label:
          "Hôtel d’Angleterre, Hôtel du Jeu de Paume, Apparts de l’Oncle Louis. Un groupe à taille humaine.",
      },
      {
        value: "79",
        unit: "chambres et appartements",
        label: "Réparties sur nos trois adresses, à deux minutes du Château.",
      },
      {
        value: "100%",
        unit: "indépendant",
        label:
          "Aucun actionnaire extérieur, aucune franchise. Groupe familial, porté par ses propriétaires-exploitants.",
      },
      {
        value: "100%",
        unit: "cuisine maison",
        label:
          "Notre brigade, menée par Maÿlis, prépare chaque plat sur place. Zéro prestataire extérieur.",
      },
      {
        value: "5",
        unit: "minutes à pied de la gare",
        label:
          "Depuis Versailles Rive Gauche. 80 % de nos hôtes séminaires viennent en train.",
      },
    ],
  },
  teams: {
    micro: "Les équipes",
    title: "Derrière chaque maison,",
    titleLine2: "des visages.",
    intro:
      "Réception, cuisine, housekeeping, événementiel. Nos équipes forment un collectif fidèle, majoritairement en CDI, formé en interne. Nous ne faisons pas appel à des prestataires pour ce qui compte : l’accueil, la cuisine, le soin des chambres.\n\nC’est notre conviction la plus ancienne : un séjour réussi commence par une équipe qui aime ce qu’elle fait.",
    quote: "« Nous disons nous, pas je. Parce que rien ici ne repose sur une seule personne. »",
    quoteBy: "Elise Comyn (Ranjard), gérante",
    people: [
      {
        name: "Elise Comyn (Ranjard)",
        role: "Gérante du groupe Cocobiches",
        bio: "Après huit ans en private equity, Elise a pris les rênes du groupe familial en 2015. Elle dirige les trois maisons au quotidien, de l’opérationnel à la stratégie de marque.",
        initials: "EC",
      },
      {
        name: "François Comyn",
        role: "Propriétaire et fondateur",
        bio: "François a acquis notre premier hôtel en 2010. Propriétaire-exploitant, expert hôtelier, il est également structureur de clubs deals dans le secteur.",
        initials: "FC",
      },
      {
        name: "Maÿlis",
        role: "Cheffe, Hôtel du Jeu de Paume",
        bio: "Maÿlis mène notre brigade 100 % féminine. Cuisine maison, produits de saison, cartes renouvelées quatre fois par an.",
        initials: "M",
      },
      {
        name: "Fanny Colson",
        role: "Responsable événementiel",
        bio: "Fanny est votre interlocutrice dédiée pour les séminaires d’entreprise. De votre premier brief à votre feedback post-événement.",
        initials: "FC",
      },
      {
        name: "Sarah Aussant",
        role: "Directrice adjointe",
        bio: "Sarah pilote la coordination opérationnelle entre nos trois maisons et veille à l’homogénéité de l’accueil.",
        initials: "SA",
      },
    ],
    portraitPlaceholder: "Portrait à venir",
  },
  rse: {
    micro: "Nos engagements",
    title: "La RSE se prouve,",
    titleLine2: "elle ne se décore pas.",
    intro:
      "La démarche RSE de Cocobiches est imparfaite. Nous ne prétendons pas l’inverse. Ce que nous pouvons garantir, c’est qu’elle est réelle, mesurée, et qu’elle progresse chaque année. Voici ce que nous faisons concrètement.",
    items: [
      {
        title: "Mobilité douce",
        body:
          "Nos trois hôtels sont à cinq minutes à pied de la gare Versailles Rive Gauche. Nous encourageons systématiquement la venue en train. 80 % de nos hôtes séminaires arrivent en transport en commun.",
      },
      {
        title: "Cuisine locale",
        body:
          "Cartes saisonnières renouvelées quatre fois par an. Fournisseurs franciliens identifiés et fidélisés. Objectif 70 % de produits en circuits courts d’ici 2028.",
      },
      {
        title: "Équipes en CDI",
        body:
          "100 % de nos collaborateurs sont en contrat durable, formés en interne, fidélisés dans la durée. Pas de précarisation des métiers de l’hôtellerie.",
      },
      {
        title: "Matériaux durables",
        body:
          "Notre yourte événementielle est construite en bois et matériaux naturels. Éclairage LED sur l’ensemble des espaces. Suppression progressive du plastique à usage unique en chambre et en restauration.",
      },
    ],
    footnote:
      "Nous publions un rapport RSE annuel, disponible sur demande. Objectif de certification Clef Verte d’ici 2027.",
  },
  collection: {
    micro: "La collection",
    title: "Trois maisons.",
    titleLine2: "Trois personnalités.",
    titleLine3: "Une même famille.",
    intro:
      "Chacune de nos maisons a son caractère, son emplacement, son format. Mais toutes partagent la même équipe, la même exigence, la même envie de vous voir vous sentir chez vous.",
    houses: [
      {
        pretitle: "Face au Château",
        name: "Hôtel d’Angleterre",
        baseline: "L’écrin patrimonial.",
        desc:
          "Notre première maison. Hôtel de charme historique, en face directe du Château de Versailles. 29 chambres pour les voyageurs culturels, les familles, les amoureux de patrimoine.",
        cta: "Découvrir l’Hôtel d’Angleterre",
        url: "https://www.hotel-angleterre-versailles.fr/",
        image: "/hotel-angleterre/hotel-facade.jpg",
        imagePos: "object-[center_40%]",
      },
      {
        pretitle: "Rue de Fontenay",
        name: "Hôtel du Jeu de Paume",
        baseline: "La maison confidentielle.",
        desc:
          "Notre maison la plus lifestyle. 38 chambres, une salle de séminaire lumineuse et une yourte événementielle unique à Versailles. Pour les séjours et pour les séminaires d’entreprise.",
        cta: "Découvrir l’Hôtel du Jeu de Paume",
        url: "/hotel-jeu-de-paume",
        image: "/hotel-jeu-de-paume/hotel-facade.jpg",
        imagePos: "object-center",
        internal: true,
      },
      {
        pretitle: "Rue Satory",
        name: "Apparts de l’Oncle Louis",
        baseline: "Le chez-soi prolongé.",
        desc:
          "12 appartements hôteliers pour les séjours longs, les missions professionnelles, les familles qui veulent respirer. L’autonomie d’un appartement, avec le service d’un hôtel.",
        cta: "Découvrir les Apparts de l’Oncle Louis",
        url: "https://www.apparts-onclelouis-versailles.fr/",
        image: "/hotel-jeu-de-paume/carte-versailles.jpg",
        imagePos: "object-[center_35%]",
      },
    ],
  },
  signature: {
    line1: "Versailles, chez nous.",
    line2: "Et bientôt, chez vous.",
  },
  cta: {
    micro: "Prolonger l’expérience",
    title: "Et maintenant ?",
    blocks: [
      {
        title: "Réserver un séjour",
        desc: "Choisir l’une de nos trois maisons pour votre prochain séjour à Versailles.",
        linkLabel: "Voir les disponibilités",
        hash: "#nos-maisons",
      },
      {
        title: "Organiser un séminaire",
        desc: "Votre séminaire d’entreprise à l’Hôtel du Jeu de Paume, avec Fanny.",
        linkLabel: "Demander un devis",
        path: "/hotel-jeu-de-paume/seminaires",
      },
      {
        title: "Nous rencontrer",
        desc: "Journalistes, partenaires, curieux. Nous recevons avec plaisir.",
        linkLabel: "Prendre contact",
        path: "/contact",
      },
    ],
  },
} as const;

export const laMarqueEn = {
  hero: {
    micro: "The brand / Cocobiches",
    lines: ["One house.", "Three addresses.", "One family."],
    baseline: "Independent hotel group founded in Versailles.",
    scroll: "Discover",
    imageAlt: "Cocobiches house façade, golden morning light",
  },
  manifesto: {
    micro: "Our manifesto",
    headline: "We hold these houses\nourselves.",
    body:
      "Cocobiches is a family-led, independent group founded in Versailles.\nNo outside shareholder. No franchise. No licensed brand.\n\nThree addresses two minutes from the Palace, carried by one team, in a city we live in too. Every decision is made here, for our guests and our teams · not in a distant committee.\n\nSome may call it old-fashioned. We believe it is what makes the difference.",
  },
  values: {
    micro: "What guides us",
    title: "Four simple convictions.",
    subtitle: "Held for sixteen years.",
    items: [
      {
        n: "01",
        title: "Family",
        body:
          "Cocobiches is a family group in every sense. Decisions are made between owner-operators, for houses we know room by room.",
        proof:
          "Our three hotels have belonged to the Comyn family since acquisition. No outside shareholder. No silent investor.",
      },
      {
        n: "02",
        title: "Authenticity",
        body:
          "Real faces at reception. Honest cuisine prepared on site. Places with a soul · respected, not renovated for renovation’s sake.",
        proof:
          "100% of our food is prepared in-house by our brigade, led by Maÿlis. No outside caterer.",
      },
      {
        n: "03",
        title: "Lifestyle",
        body:
          "A stay beyond the night itself: time for coffee in our lounge, a walk in the Park, a restaurant tip no guidebook lists. Versailles is not a place you merely pass through.",
        proof:
          "Our teams know Versailles from the inside. Shared address book, tailored advice, privileged access to selected places.",
      },
      {
        n: "04",
        title: "Responsibility",
        body:
          "Measured CSR, consistently applied. Seasonal produce, short supply chains, durable materials, permanent contracts. Nothing cosmetic.",
        proof:
          "80% of our seminar guests arrive by public transport. 100% of our staff are trained in-house.",
      },
    ],
  },
  history: {
    micro: "Our story",
    title: "Sixteen years",
    titleLine2: "in Versailles.",
    intro:
      "Cocobiches is not a marketing stunt. It is the story of a family that patiently built, house after house, an independent hotel group at the heart of Versailles.",
    steps: [
      {
        year: "2010",
        title: "Hôtel d’Angleterre",
        text:
          "François takes over the Hôtel d’Angleterre, a historic address facing the Palace. First chapter of a family adventure · no ten-year vision deck, no disruptive pitch. Simply the desire to welcome well, in a city we love.",
        imageAlt: "Façade · Hôtel d’Angleterre",
      },
      {
        year: "2014",
        title: "Hôtel du Jeu de Paume",
        text:
          "Four years later, the group grows with the Hôtel du Jeu de Paume on rue de Fontenay. A more intimate hotel whose event spaces would become our signature: a bright seminar room, and later our iconic yurt.",
        imageAlt: "Entrance · Hôtel du Jeu de Paume",
      },
      {
        year: "2018",
        title: "Apparts de l’Oncle Louis",
        text:
          "Third house, third format. An aparthotel designed for longer stays, families, and business trips. Our Versailles collection was complete.",
        imageAlt: "Façade detail · Apparts de l’Oncle Louis",
      },
      {
        year: "2025",
        title: "The birth of Cocobiches",
        text:
          "After fifteen years, we gave a name to what we had been building: Cocobiches. An umbrella brand, a visual charter, one promise across our three houses. A statement of ambition from a group that owns it.",
        imageAlt: "Our three houses · today",
      },
    ],
  },
  stats: {
    micro: "In numbers",
    title: "The measure",
    titleLine2: "of our commitment.",
    items: [
      {
        value: "16",
        unit: "years",
        label:
          "In Versailles, without interruption. Since we took over our first house in 2010.",
      },
      {
        value: "3",
        unit: "houses",
        label:
          "Hôtel d’Angleterre, Hôtel du Jeu de Paume, Apparts de l’Oncle Louis. Human-scale group.",
      },
      {
        value: "79",
        unit: "rooms & apartments",
        label: "Across our three addresses, two minutes from the Palace.",
      },
      {
        value: "100%",
        unit: "independent",
        label:
          "No outside shareholder, no franchise. A family group run by its owner-operators.",
      },
      {
        value: "100%",
        unit: "in-house cuisine",
        label:
          "Our brigade, led by Maÿlis, cooks every dish on site. Zero outside catering.",
      },
      {
        value: "5",
        unit: "minutes’ walk from the station",
        label:
          "From Versailles Rive Gauche. 80% of our seminar guests arrive by train.",
      },
    ],
  },
  teams: {
    micro: "The teams",
    title: "Behind each house,",
    titleLine2: "people.",
    intro:
      "Front desk, kitchen, housekeeping, events. Our teams form a loyal collective, mostly on permanent contracts, trained in-house. We do not outsource what matters: welcome, cuisine, room care.\n\nOur oldest belief: a successful stay begins with people who love what they do.",
    quote:
      "“We say we, not I. Because nothing here rests on a single person.”",
    quoteBy: "Elise Comyn (Ranjard), Managing director",
    people: [
      {
        name: "Elise Comyn (Ranjard)",
        role: "Managing director, Cocobiches group",
        bio: "After eight years in private equity, Elise took the helm of the family group in 2015. She runs all three houses day to day · from operations to brand strategy.",
        initials: "EC",
      },
      {
        name: "François Comyn",
        role: "Owner & founder",
        bio: "François acquired our first hotel in 2010. Owner-operator, hospitality expert, and deal club structurer in the sector.",
        initials: "FC",
      },
      {
        name: "Maÿlis",
        role: "Head chef, Hôtel du Jeu de Paume",
        bio: "Maÿlis leads our all-female brigade. Home cooking, seasonal menus, menus renewed four times a year.",
        initials: "M",
      },
      {
        name: "Fanny Colson",
        role: "Events lead",
        bio: "Fanny is your dedicated contact for corporate seminars · from first brief to post-event feedback.",
        initials: "FC",
      },
      {
        name: "Sarah Aussant",
        role: "Deputy director",
        bio: "Sarah coordinates operations across our three houses and keeps the welcome consistent.",
        initials: "SA",
      },
    ],
    portraitPlaceholder: "Portrait coming soon",
  },
  rse: {
    micro: "Our commitments",
    title: "CSR is proven,",
    titleLine2: "not decorated.",
    intro:
      "Cocobiches’ CSR is imperfect. We do not claim otherwise. What we can guarantee is that it is real, measured, and improving every year. Here is what we do in practice.",
    items: [
      {
        title: "Soft mobility",
        body:
          "Our three hotels are five minutes’ walk from Versailles Rive Gauche station. We systematically encourage travel by train. 80% of our seminar guests use public transport.",
      },
      {
        title: "Local cuisine",
        body:
          "Seasonal menus renewed four times a year. Identified and loyal Île-de-France suppliers. Target: 70% short-circuit produce by 2028.",
      },
      {
        title: "Permanent contracts",
        body:
          "100% of our team are on stable contracts, trained in-house, retained over time. No precarious hospitality jobs.",
      },
      {
        title: "Sustainable materials",
        body:
          "Our event yurt is built from wood and natural materials. LED lighting throughout. Phasing out single-use plastic in rooms and dining.",
      },
    ],
    footnote:
      "We publish an annual CSR report on request. Target: Clef Verte certification by 2027.",
  },
  collection: {
    micro: "The collection",
    title: "Three houses.",
    titleLine2: "Three personalities.",
    titleLine3: "One family.",
    intro:
      "Each of our houses has its character, location, and format. But all share the same team, the same standards, and the same wish to make you feel at home.",
    houses: [
      {
        pretitle: "Facing the Palace",
        name: "Hôtel d’Angleterre",
        baseline: "The heritage setting.",
        desc:
          "Our first house. Historic charm hotel, directly opposite the Palace of Versailles. 29 rooms for culture seekers, families, and heritage lovers.",
        cta: "Discover Hôtel d’Angleterre",
        url: "https://www.hotel-angleterre-versailles.fr/",
        image: "/hotel-angleterre/hotel-facade.jpg",
        imagePos: "object-[center_40%]",
      },
      {
        pretitle: "Rue de Fontenay",
        name: "Hôtel du Jeu de Paume",
        baseline: "The intimate house.",
        desc:
          "Our most lifestyle-led address. 38 rooms, a bright seminar room, and a unique event yurt in Versailles. For stays and corporate seminars.",
        cta: "Discover Hôtel du Jeu de Paume",
        url: "/hotel-jeu-de-paume",
        image: "/hotel-jeu-de-paume/hotel-facade.jpg",
        imagePos: "object-center",
        internal: true,
      },
      {
        pretitle: "Rue Satory",
        name: "Apparts de l’Oncle Louis",
        baseline: "Home, extended.",
        desc:
          "Twelve serviced apartments for long stays, business trips, and families who want room to breathe. Apartment autonomy with hotel service.",
        cta: "Discover Apparts de l’Oncle Louis",
        url: "https://www.apparts-onclelouis-versailles.fr/",
        image: "/hotel-jeu-de-paume/carte-versailles.jpg",
        imagePos: "object-[center_35%]",
      },
    ],
  },
  signature: {
    line1: "Versailles, our home.",
    line2: "Soon, yours.",
  },
  cta: {
    micro: "Continue the experience",
    title: "What next?",
    blocks: [
      {
        title: "Book a stay",
        desc: "Choose one of our three houses for your next visit to Versailles.",
        linkLabel: "See availability",
        hash: "#nos-maisons",
      },
      {
        title: "Host a seminar",
        desc: "Your corporate seminar at Hôtel du Jeu de Paume, with Fanny.",
        linkLabel: "Request a quote",
        path: "/hotel-jeu-de-paume/seminaires",
      },
      {
        title: "Meet us",
        desc: "Press, partners, curious minds · we are glad to welcome you.",
        linkLabel: "Get in touch",
        path: "/contact",
      },
    ],
  },
} as const;

export function getLaMarque(locale: LaMarqueLocale) {
  return locale === "fr" ? laMarqueFr : laMarqueEn;
}

export const historyImages = [
  "/hotel-angleterre/hotel-facade.jpg",
  "/hotel-jeu-de-paume/hotel-facade.jpg",
  "/hotel-jeu-de-paume/carte-versailles.jpg",
  "/hotel-jeu-de-paume/salon.jpg",
] as const;
