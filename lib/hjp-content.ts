import type { Locale } from "./i18n-config";

export type HjpContent = {
  meta: {
    home: { title: string; description: string };
    hotel: { title: string; description: string };
    vivre: { title: string; description: string };
    offres: { title: string; description: string };
    seminaires: { title: string; description: string };
    prepare: { title: string; description: string };
  };
  nav: {
    back: string;
    brand: string;
    home: string;
    hotel: string;
    vivre: string;
    offers: string;
    seminars: string;
    prepare: string;
    book: string;
    call: string;
  };
  home: {
    hero: { title: string; subtitle: string; kicker: string };
    intro: { title: string; body: string };
    map: { title: string; caption: string; pins: string[] };
    quote: { line1: string; line2: string };
    concierge: { title: string; body: string };
    charm: { title: string; body: string };
    access: { title: string };
    transport: {
      rer: { title: string; body: string };
      chantiers: { title: string; body: string };
      riveDroite: { title: string; body: string };
      road: { title: string; body: string };
    };
    parking: {
      title: string;
      cathedral: string;
      street: string;
    };
    taxi: { title: string; paris: string; orly: string; cdg: string };
  };
  hotelPage: {
    intro: { title: string; lead: string; body: string };
    rooms: Array<{
      id: string;
      name: string;
      desc: string;
      specs: string[];
      amenities: string[];
    }>;
    servicesTitle: string;
    services: string[];
  };
  vivrePage: {
    intro: { title: string; lead: string; body: string };
    contactCta: string;
    halfDay: {
      title: string;
      chateau: { title: string; hoursLo: string; hoursHi: string; body: string };
      gardens: { title: string; hoursLo: string; hoursHi: string; body: string };
    };
    tabs: { half: string; one: string; two: string; three: string };
    coming: string;
  };
  seminarsPage: {
    hero: { kicker: string; title: string };
    intro1: string;
    intro2: string;
    atmosphere: {
      title: string;
      layouts: Array<{ name: string; capacity: string }>;
    };
    tools: { title: string; items: string[] };
    attentions: {
      title: string;
      lead: string;
      formulas: string[];
      beverages: string;
    };
    cta: { title: string; button: string };
  };
  offersPage: {
    hero: { kicker: string; title: string };
    intro: string;
    items: Array<{ id: string; title: string; lines: string[] }>;
    bookCta: string;
  };
  preparePage: {
    location: { title: string; body: string };
    parkingExtra: { title: string; items: string[] };
    discover: { title: string; body: string };
    faq: Array<{ q: string; a: string }>;
    contactCta: string;
  };
  footer: {
    address: string;
    phone: string;
    email: string;
    legal: string;
    privacy: string;
    cookies: string;
    customize: string;
    reviews: string;
    googleLabel: string;
  };
};

const fr: HjpContent = {
  meta: {
    home: {
      title: "Hôtel du Jeu de Paume — Versailles",
      description:
        "À deux pas du château de Versailles : hôtel de charme, équipe engagée, idéal pour découvrir la ville à pied.",
    },
    hotel: {
      title: "L'hôtel — Chambres & confort",
      description:
        "Chambres lumineuses, déco N. Stadler, petit-déjeuner et services pour un séjour fluide à Versailles.",
    },
    vivre: {
      title: "Vivre Versailles — Itinéraires",
      description:
        "Conseils et parcours pour visiter le château, les jardins et Versailles selon votre temps sur place.",
    },
    offres: {
      title: "Nos offres exclusives — Hôtel du Jeu de Paume",
      description:
        "Séjour royal, early booking, long séjour, séjour romantique : avantages en réservant directement sur le site officiel.",
    },
    seminaires: {
      title: "Séminaires & événements — Hôtel du Jeu de Paume",
      description:
        "Salle modulable à Versailles, à deux pas du Château et du Palais des Congrès : journées d'étude, comités, formations, team building.",
    },
    prepare: {
      title: "Préparer votre séjour — Hôtel du Jeu de Paume",
      description:
        "Accès, stationnement, FAQ et conseils pour arriver sereinement à Versailles.",
    },
  },
  nav: {
    back: "Groupe Cocobiches",
    brand: "Hôtel du Jeu de Paume",
    home: "Accueil",
    hotel: "L'hôtel",
    vivre: "Vivre Versailles",
    offers: "Nos offres",
    seminars: "Séminaires & événements",
    prepare: "Préparer votre séjour",
    book: "Réserver",
    call: "Appeler",
  },
  home: {
    hero: {
      kicker: "Versailles",
      title: "À deux pas du château de Versailles, explorez un quartier chargé d'histoire… et de surprises.",
      subtitle:
        "Idéalement situé dans Versailles, l'Hôtel du Jeu de Paume vous permettra de visiter toutes les merveilles de la ville à pied. Grâce à sa localisation exceptionnelle, il est possible de rejoindre le château de Versailles en moins de 2 minutes.",
    },
    intro: {
      title: "Versailles, tout près",
      body: "Depuis l'hôtel, le patrimoine se découvre naturellement : le château, les jardins, le Grand Canal et les trésors moins connus du quartier.",
    },
    map: {
      title: "Une carte pour s'orienter",
      caption: "Quelques repères autour de l'hôtel",
      pins: [
        "La Galerie des Carrosses",
        "La salle du Jeu de Paume",
        "Le château de Versailles",
        "Les jardins et le parc",
        "L'Hôtel du Jeu de Paume",
        "Le Grand Canal",
      ],
    },
    quote: {
      line1: "On ne vous donne pas juste une clé.",
      line2: "On vous ouvre les portes de Versailles.",
    },
    concierge: {
      title: "Des séjours sur mesure",
      body: "Que vous séjourniez pour une nuit ou un week-end, nous vous accompagnons dans la découverte de Versailles avec attention et simplicité. Itinéraires sur mesure et bonnes adresses : l'équipe est à vos côtés pour vous faire vivre un séjour fluide, culturel et agréable.",
    },
    charm: {
      title: "Un hôtel de charme, tenu par une équipe engagée et disponible.",
      body: "Au Jeu de Paume, l'atmosphère est simple, élégante et accueillante. On y séjourne pour le calme, la lumière, le confort discret. Chaque espace a été imaginé pour que vous vous sentiez bien, et chaque attention portée par notre équipe vise à rendre votre passage aussi agréable que naturel.",
    },
    access: {
      title: "Rejoindre l'hôtel facilement, depuis Paris ou ailleurs.",
    },
    transport: {
      rer: {
        title: "RER C : Gare de Versailles Château Rive Gauche",
        body: "À 5 minutes à pied de l'hôtel. Accès direct à Paris : Tour Eiffel, Invalides, Notre-Dame…",
      },
      chantiers: {
        title: "SNCF Versailles-Chantiers",
        body: "12 min depuis Paris Montparnasse.",
      },
      riveDroite: {
        title: "SNCF Rive Droite",
        body: "25 min depuis Paris Saint-Lazare.",
      },
      road: {
        title: "Depuis Paris (Porte de Saint-Cloud)",
        body: "20 min via l'A13, sortie Versailles Centre.",
      },
    },
    parking: {
      title: "Stationnement à proximité",
      cathedral:
        "Parking de la Cathédrale Saint-Louis (3 min à pied). Profitez de 20 % de remise sur votre stationnement si vous séjournez chez nous.",
      street:
        "Stationnement possible dans la rue (gratuit 19h–9h & dimanche via PayByPhone).",
    },
    taxi: {
      title: "Transferts indicatifs",
      paris: "Paris centre — à partir de 30 €",
      orly: "Aéroport Orly — à partir de 35 €",
      cdg: "Aéroport Roissy CDG — à partir de 68 €",
    },
  },
  hotelPage: {
    intro: {
      title: "Des chambres lumineuses, confortables et pensées pour se sentir bien",
      lead: "Solo, duo ou famille",
      body: "Situé au cœur de Versailles, à quelques minutes à pied du Château, l'Hôtel du Jeu de Paume est un établissement au charme singulier. Installé dans un bâtiment réinventé avec soin, il propose des chambres pensées comme des cocons : décoration originale signée N. Stadler, confort moderne, et touches inattendues qui font la différence. Ici, tout est fait pour que vous vous sentiez bien.",
    },
    rooms: [
      {
        id: "petite",
        name: "Les petites chambres doubles",
        desc: "Un cocon douillet, parfait pour un court séjour. Idéale pour une personne seule ou un couple à la recherche de simplicité et de confort. Cette chambre optimisée vous offre l'essentiel dans une ambiance chaleureuse.",
        specs: ["12 à 16 m²", "1 à 2 personnes", "Lit Queen Size"],
        amenities: [
          "Douche",
          "Wi-Fi haut débit",
          "Télévision à écran plat",
          "Sèche-cheveux",
          "Plateau de courtoisie avec thé et café",
        ],
      },
      {
        id: "double",
        name: "Les chambres doubles",
        desc: "Spacieuse et baignée de lumière, la chambre double allie confort et élégance. Parfaite pour un séjour à deux, un week-end romantique à Versailles ou une escapade culturelle, elle offre un vrai coin détente.",
        specs: ["15 à 20 m²", "1 à 2 personnes", "King Size"],
        amenities: [
          "Baignoire ou douche",
          "Wi-Fi haut débit",
          "Télévision à écran plat",
          "Sèche-cheveux",
          "Plateau de courtoisie avec thé et café",
        ],
      },
      {
        id: "twin",
        name: "Les chambres twin",
        desc: "Avec ses deux lits simples, la chambre twin est pensée pour partager sans se gêner. Idéale pour des amis, des collègues ou un séjour professionnel à Versailles, elle combine indépendance, calme et confort, dans l'esprit discret du Jeu de Paume.",
        specs: ["15 m²", "1 à 2 personnes", "2 lits simples"],
        amenities: [
          "Baignoire",
          "Wi-Fi haut débit",
          "Télévision à écran plat",
          "Sèche-cheveux",
          "Plateau de courtoisie avec thé et café",
        ],
      },
      {
        id: "family",
        name: "Les chambres familiales",
        desc: "Spacieuse et sereine, la familiale accueille jusqu'à 4 personnes avec plusieurs couchages. On y trouve l'espace nécessaire pour se retrouver, se reposer, et profiter d'un séjour détendu à Versailles avec le plaisir de rentrer au calme.",
        specs: ["20 m²", "1 à 4 personnes", "1 King Size + canapé-lit ou futon"],
        amenities: [
          "Douche",
          "Wi-Fi haut débit",
          "Télévision à écran plat",
          "Sèche-cheveux",
          "Plateau de courtoisie avec thé et café",
        ],
      },
    ],
    servicesTitle: "Ici, tout est pensé pour votre confort.",
    services: [
      "Réception 24h/24",
      "Wi-Fi haut débit (fibre dédiée)",
      "Petit-déjeuner gourmand ou léger",
      "Ménage quotidien",
      "Service bagagerie",
      "Ascenseur & accès PMR",
      "Service de conciergerie",
      "Prêt de matériel (fer à repasser, adaptateurs, chargeurs…)",
    ],
  },
  vivrePage: {
    intro: {
      title: "Vivre Versailles",
      lead: "Le point de départ idéal",
      body: "Au cœur de Versailles, l'Hôtel du Jeu de Paume est le point de départ idéal pour découvrir la ville. Découvrez nos itinéraires et recommandations selon votre durée de séjour.",
    },
    contactCta:
      "Notre équipe reste disponible pour vous guider dans l'organisation de votre venue. N'hésitez pas à nous écrire : nous serons ravis de vous orienter.",
    halfDay: {
      title: "Visite en une demi-journée",
      chateau: {
        title: "L'intérieur du château de Versailles",
        hoursLo: "Basse saison : 9h – 17h30",
        hoursHi: "Haute saison : 9h – 18h30",
        body: "Visitez le bijou de Louis XIV, admirez la majestueuse Galerie des Glaces, les Grands Appartements du Roi et de la Reine. Pensez à réserver votre billet horodaté sur le site du Château de Versailles ou profitez de nos billets coupe-file !",
      },
      gardens: {
        title: "Les jardins du Château",
        hoursLo: "Basse saison : 8h – 19h",
        hoursHi: "Haute saison : 7h – 20h30",
        body: "Prenez une jolie photo depuis la perspective des jardins et du Grand Canal, sur le parterre de Latone. Le soleil se couche parfaitement dans l'axe. À droite le parterre du Nord avec, en contrebas, le bassin de Neptune ; à gauche le parterre du Midi avec l'Orangerie et la Pièce d'eau des Suisses dans le prolongement.",
      },
    },
    tabs: {
      half: "Un 1/2 jour",
      one: "1 jour",
      two: "2 jours",
      three: "3 jours",
    },
    coming:
      "Itinéraires détaillés 1, 2 et 3 jours : demandez la conciergerie ou revenez bientôt — nous enrichissons cette section.",
  },
  seminarsPage: {
    hero: {
      kicker: "Séminaires & événements",
      title: "Organisez vos séminaires comme à la maison, au cœur de Versailles",
    },
    intro1:
      "Situé à deux pas du Château de Versailles et du Palais des Congrès, la Maison de l'hôtel du Jeu de Paume offre un cadre de travail chaleureux et inspirant. Entre lumière naturelle, volumes agréables et ambiance de maison familiale, l'espace accueille vos réunions, séminaires et événements professionnels en toute simplicité. Modulable et confortable, il s'adapte à chaque format pour des moments de travail efficaces et conviviaux.",
    intro2:
      "Au Jeu de Paume, organisez votre séminaire à Versailles dans un cadre chaleureux et professionnel. Notre salle de réunion modulable accueille vos journées d'étude, comités de direction, formations ou team building, avec équipement complet et pauses sur-mesure. Proche du Château de Versailles et facile d'accès depuis Paris, le lieu peut aussi se privatiser pour un événement d'entreprise à votre image. Et pour prolonger l'expérience, optez pour un séminaire résidentiel grâce à nos chambres sur place.",
    atmosphere: {
      title: "Une atmosphère propice au travail et à la créativité.",
      layouts: [
        { name: "Disposition en U", capacity: "jusqu'à 26 personnes" },
        { name: "Disposition théâtre", capacity: "jusqu'à 50 personnes" },
        { name: "Disposition classe", capacity: "jusqu'à 24 personnes" },
        { name: "Table ovale", capacity: "jusqu'à 26 personnes" },
        { name: "Cocktail", capacity: "jusqu'à 70 personnes" },
      ],
    },
    tools: {
      title: "Des outils à la hauteur de vos enjeux.",
      items: [
        "Wi-Fi haut débit (fibre dédiée)",
        "Grand écran de projection",
        "Enceintes connectées",
        "Paperboards, papeterie, stylos…",
      ],
    },
    attentions: {
      title: "Des attentions sur-mesure, pendant et autour de votre événement.",
      lead: "Pour accompagner vos temps de travail, nous proposons différentes formules. Petit-déjeuners gourmands, déjeuners préparés par notre chef, cocktails dînatoires ou expériences à partager en équipe… Nous imaginons avec vous un programme à la hauteur de vos envies.",
      formulas: [
        "Petit-déjeuner et pauses gourmandes",
        "Déjeuner et dîner préparés par des chefs",
        "Cocktail déjeunatoire ou dînatoire",
        "Balades en Segway ou trottinette électrique",
        "Réservations de spectacles ou visites guidées",
        "Activités en intérieur ou extérieur possibles pour la cohésion d'équipe",
      ],
      beverages: "Boissons fraîches et chaudes à volonté",
    },
    cta: {
      title: "Vous avez un projet ?",
      button: "Discutons-en !",
    },
  },
  offersPage: {
    hero: {
      kicker: "Offres exclusives",
      title: "Nos offres exclusives, pour un séjour sur mesure.",
    },
    intro:
      "Que vous aimiez planifier à l'avance, prolonger vos séjours ou vivre des moments uniques à deux, nos offres ont été pensées pour vous offrir plus qu'une nuit à l'hôtel. En réservant directement sur notre site, vous bénéficiez d'avantages exclusifs… et d'un accueil toujours personnalisé.",
    items: [
      {
        id: "royal",
        title: "Séjour royal",
        lines: [
          "Chambre au Jeu de Paume",
          "+ Billets coupe-file pour le Château de Versailles",
        ],
      },
      {
        id: "early",
        title: "Réservez à l'avance",
        lines: [
          "Si vous réservez 90 jours en avance, obtenez 15 % de réduction sur le prix de la chambre.",
        ],
      },
      {
        id: "long",
        title: "Long séjour",
        lines: [
          "Si vous réservez pour au moins 4 nuits, obtenez 15 % de réduction sur le prix de la chambre.",
        ],
      },
      {
        id: "romantic",
        title: "Séjour romantique",
        lines: [
          "Chambre au Jeu de Paume",
          "+ Une demi-bouteille de Champagne",
        ],
      },
    ],
    bookCta: "Réserver sur le site",
  },
  preparePage: {
    location: {
      title: "Un emplacement privilégié au cœur de Versailles.",
      body: "Situé dans une rue paisible du quartier Saint-Louis, à deux pas des commerces, des restaurants et du Château, l'Hôtel du Jeu de Paume est le point de départ idéal pour découvrir Versailles à pied. Que vous veniez pour un séjour touristique, un séminaire ou un simple week-end de détente, tout est accessible sans effort.",
    },
    parkingExtra: {
      title: "Stationnement à proximité",
      items: [
        "Parking de la Cathédrale Saint-Louis (3 min à pied) — 20 % de remise sur votre stationnement si vous séjournez chez nous.",
        "Parking Place d'Armes",
        "Parking Avenue de Sceaux",
        "Stationnement possible dans la rue (gratuit 19h–9h & dimanche via PayByPhone).",
      ],
    },
    discover: {
      title: "Versailles, tout près",
      body: "Idéalement situé dans le centre de Versailles, l'Hôtel du Jeu de Paume est le point de départ parfait pour découvrir les merveilles historiques, culturelles et gourmandes de la ville.",
    },
    faq: [
      {
        q: "Vendez-vous des billets pour le château de Versailles ?",
        a: "Nous vous orientons vers les billets officiels et les créneaux horodatés ; nous pouvons aussi vous conseiller sur les options coupe-file selon les périodes.",
      },
      {
        q: "L'hôtel dispose-t-il d'un parking ?",
        a: "L'hôtel n'a pas de parking privé. Plusieurs parkings publics sont à proximité (Cathédrale Saint-Louis, Place d'Armes, Avenue de Sceaux). Une remise peut s'appliquer au parking Cathédrale pour nos clients.",
      },
      {
        q: "L'hôtel est-il accessible aux personnes à mobilité réduite ?",
        a: "Oui : l'hôtel dispose d'un ascenseur et d'accès adaptés. Précisez vos besoins à la réservation pour que nous vous attribuions la chambre la mieux adaptée.",
      },
      {
        q: "Est-ce que les chambres sont climatisées ?",
        a: "Oui, les chambres sont équipées de la climatisation.",
      },
      {
        q: "Les chambres sont-elles non-fumeurs ?",
        a: "Oui, l'ensemble de l'établissement est non-fumeur.",
      },
      {
        q: "Puis-je laisser mes bagages ?",
        a: "Oui, un service de bagagerie est disponible.",
      },
      {
        q: "Puis-je modifier ou annuler ma réservation ?",
        a: "Les conditions dépendent du tarif réservé. Consultez la confirmation ou contactez-nous : nous vous indiquerons la marche à suivre.",
      },
      {
        q: "À quelle heure est le check-in / check-out ?",
        a: "Les horaires habituels sont communiqués à la réservation et à l'arrivée. En cas de besoin, demandez la disponibilité pour un dépôt de bagages.",
      },
      {
        q: "Est-il possible de faire un check-in plus tôt ou un départ tardif ?",
        a: "Selon disponibilité le jour J : demandez à la réception, nous ferons le maximum.",
      },
      {
        q: "La réception est-elle ouverte 24h/24 ?",
        a: "Oui, la réception est ouverte 24h/24.",
      },
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "Les principaux moyens de paiement sont acceptés (cartes bancaires, etc.).",
      },
      {
        q: "Proposez-vous un remboursement en cas d'annulation ?",
        a: "Les conditions d'annulation et de remboursement dépendent du tarif réservé. Consultez la politique indiquée lors de la réservation ou écrivez-nous.",
      },
    ],
    contactCta:
      "Notre équipe reste disponible pour vous guider dans l'organisation de votre venue. N'hésitez pas à nous écrire : nous serons ravis de vous orienter.",
  },
  footer: {
    address: "5 bis rue de Fontenay — 78000 Versailles",
    phone: "01 30 84 14 00",
    email: "contact@hotel-jeudepaume.fr",
    legal: "Mentions légales",
    privacy: "Politique de protection des données personnelles",
    cookies: "Politique des cookies",
    customize: "Personnaliser mes préférences",
    reviews: "Commentaires clients",
    googleLabel: "Avis Google",
  },
};

const en: HjpContent = {
  meta: {
    home: {
      title: "Hôtel du Jeu de Paume — Versailles",
      description:
        "Steps from the Palace of Versailles: a charming hotel, an attentive team, and the city on foot.",
    },
    hotel: {
      title: "The hotel — Rooms & comfort",
      description:
        "Bright rooms, designer touches, breakfast and services for a smooth stay in Versailles.",
    },
    vivre: {
      title: "Experience Versailles — Itineraries",
      description:
        "Ideas to visit the Palace, gardens and the city at your own pace.",
    },
    offres: {
      title: "Exclusive offers — Hôtel du Jeu de Paume",
      description:
        "Royal stay, advance booking, long stay, romantic package: perks when you book direct on the official website.",
    },
    seminaires: {
      title: "Seminars & events — Hôtel du Jeu de Paume",
      description:
        "Modular meeting space in Versailles, near the Palace and convention centre: study days, board meetings, training, team building.",
    },
    prepare: {
      title: "Plan your stay — Hôtel du Jeu de Paume",
      description:
        "Access, parking, FAQ and tips for a smooth arrival in Versailles.",
    },
  },
  nav: {
    back: "Cocobiches group",
    brand: "Hôtel du Jeu de Paume",
    home: "Home",
    hotel: "The hotel",
    vivre: "Experience Versailles",
    offers: "Our offers",
    seminars: "Seminars & events",
    prepare: "Plan your stay",
    book: "Book",
    call: "Call",
  },
  home: {
    hero: {
      kicker: "Versailles",
      title:
        "Steps from the Palace of Versailles, explore a neighbourhood full of history… and surprises.",
      subtitle:
        "Ideally located in Versailles, Hôtel du Jeu de Paume lets you discover the city on foot. The Palace is less than a 2-minute walk away.",
    },
    intro: {
      title: "Versailles, within reach",
      body: "From the hotel, heritage unfolds naturally: the Palace, gardens, Grand Canal and lesser-known gems nearby.",
    },
    map: {
      title: "Find your bearings",
      caption: "Landmarks around the hotel",
      pins: [
        "Carriage Gallery",
        "Jeu de Paume room",
        "Palace of Versailles",
        "Gardens & park",
        "Hôtel du Jeu de Paume",
        "Grand Canal",
      ],
    },
    quote: {
      line1: "We don't just hand you a key.",
      line2: "We open the doors to Versailles.",
    },
    concierge: {
      title: "Tailored stays",
      body: "Whether for one night or a weekend, we help you explore Versailles with care and simplicity. Custom routes and favourite addresses: our team is here for a smooth, cultural, enjoyable stay.",
    },
    charm: {
      title: "A charming hotel run by an engaged, available team.",
      body: "At Jeu de Paume, the mood is simple, elegant and welcoming. You come for calm, light and discreet comfort. Every space is designed to help you feel at ease — every gesture aims to make your stay as natural as possible.",
    },
    access: {
      title: "Getting here easily — from Paris or beyond.",
    },
    transport: {
      rer: {
        title: "RER C: Versailles Château Rive Gauche",
        body: "5 minutes on foot from the hotel. Direct access to Paris: Eiffel Tower, Invalides, Notre-Dame…",
      },
      chantiers: {
        title: "SNCF Versailles-Chantiers",
        body: "12 minutes from Paris Montparnasse.",
      },
      riveDroite: {
        title: "SNCF Rive Droite",
        body: "25 minutes from Paris Saint-Lazare.",
      },
      road: {
        title: "From Paris (Porte de Saint-Cloud)",
        body: "20 minutes via A13, Versailles Centre exit.",
      },
    },
    parking: {
      title: "Parking nearby",
      cathedral:
        "Saint-Louis Cathedral car park (3 minutes on foot). 20% off parking when you stay with us.",
      street:
        "On-street parking (free 7pm–9am & Sundays via PayByPhone).",
    },
    taxi: {
      title: "Indicative transfers",
      paris: "Central Paris — from €30",
      orly: "Orly Airport — from €35",
      cdg: "Roissy CDG — from €68",
    },
  },
  hotelPage: {
    intro: {
      title: "Bright, comfortable rooms designed to help you feel good",
      lead: "Solo, couple or family",
      body: "In the heart of Versailles, minutes from the Palace, Hôtel du Jeu de Paume has a singular charm. Thoughtfully reinvented, the building offers cocoon-like rooms: original décor by N. Stadler, modern comfort and thoughtful details. Everything is designed so you feel at home.",
    },
    rooms: [
      {
        id: "petite",
        name: "Compact double rooms",
        desc: "A cosy nest for a short stay — ideal solo or for two, warm and efficient.",
        specs: ["12–16 m²", "1–2 guests", "Queen bed"],
        amenities: [
          "Shower",
          "High-speed Wi-Fi",
          "Flat-screen TV",
          "Hairdryer",
          "Hospitality tray with tea & coffee",
        ],
      },
      {
        id: "double",
        name: "Double rooms",
        desc: "Spacious and bright — comfort and elegance for two, a romantic weekend or a cultural break.",
        specs: ["15–20 m²", "1–2 guests", "King bed"],
        amenities: [
          "Bath or shower",
          "High-speed Wi-Fi",
          "Flat-screen TV",
          "Hairdryer",
          "Hospitality tray with tea & coffee",
        ],
      },
      {
        id: "twin",
        name: "Twin rooms",
        desc: "Two single beds — friends, colleagues or business trips with independence and calm.",
        specs: ["15 m²", "1–2 guests", "Twin beds"],
        amenities: [
          "Bathtub",
          "High-speed Wi-Fi",
          "Flat-screen TV",
          "Hairdryer",
          "Hospitality tray with tea & coffee",
        ],
      },
      {
        id: "family",
        name: "Family rooms",
        desc: "Serene space for up to four — room to gather, rest and return in peace after Versailles.",
        specs: ["20 m²", "Up to 4 guests", "King + sofa bed or futon"],
        amenities: [
          "Shower",
          "High-speed Wi-Fi",
          "Flat-screen TV",
          "Hairdryer",
          "Hospitality tray with tea & coffee",
        ],
      },
    ],
    servicesTitle: "Everything thought through for your comfort.",
    services: [
      "24-hour front desk",
      "High-speed Wi-Fi (dedicated fibre)",
      "Hearty or light breakfast",
      "Daily housekeeping",
      "Luggage service",
      "Lift & accessible routes",
      "Concierge",
      "Loan items (iron, adapters, chargers…)",
    ],
  },
  vivrePage: {
    intro: {
      title: "Experience Versailles",
      lead: "The perfect starting point",
      body: "In the heart of Versailles, Hôtel du Jeu de Paume is the ideal base to explore the city. Discover our ideas and routes for the time you have.",
    },
    contactCta:
      "Our team can help you plan your visit — write to us, we will be glad to guide you.",
    halfDay: {
      title: "Half-day visit",
      chateau: {
        title: "Inside the Palace of Versailles",
        hoursLo: "Low season: 9am – 5:30pm",
        hoursHi: "High season: 9am – 6:30pm",
        body: "Discover Louis XIV’s masterpiece: Hall of Mirrors, King’s and Queen’s State Apartments. Book a timed ticket on the Palace website or ask us about skip-the-line options.",
      },
      gardens: {
        title: "Palace gardens",
        hoursLo: "Low season: 8am – 7pm",
        hoursHi: "High season: 7am – 8:30pm",
        body: "A beautiful photo from the gardens and Grand Canal axis, Latona parterre. Sunset aligns perfectly. To the right, the North parterre and Neptune fountain; to the left, the South parterre with the Orangery and Swiss Water feature beyond.",
      },
    },
    tabs: {
      half: "Half day",
      one: "1 day",
      two: "2 days",
      three: "3 days",
    },
    coming:
      "Detailed 1-, 2- and 3-day routes: ask concierge or check back soon — we are expanding this section.",
  },
  seminarsPage: {
    hero: {
      kicker: "Seminars & events",
      title: "Host your seminar like at home, in the heart of Versailles",
    },
    intro1:
      "Steps from the Palace of Versailles and the convention centre, the Maison at Hôtel du Jeu de Paume offers a warm, inspiring workspace. Natural light, generous volumes and a family-house feel welcome your meetings, seminars and corporate events with ease. Flexible and comfortable, the space adapts to every format for productive, convivial moments.",
    intro2:
      "At Jeu de Paume, plan your Versailles seminar in a professional yet welcoming setting. Our modular meeting room hosts study days, board meetings, training or team building, with full equipment and tailored breaks. Close to the Palace and easy to reach from Paris, the venue can be privatised for a bespoke corporate event — and you can extend the experience with an on-site residential seminar thanks to our rooms.",
    atmosphere: {
      title: "An atmosphere that supports focus and creativity.",
      layouts: [
        { name: "U-shape", capacity: "up to 26 people" },
        { name: "Theatre", capacity: "up to 50 people" },
        { name: "Classroom", capacity: "up to 24 people" },
        { name: "Oval table", capacity: "up to 26 people" },
        { name: "Cocktail", capacity: "up to 70 people" },
      ],
    },
    tools: {
      title: "Tools that match your ambitions.",
      items: [
        "High-speed Wi-Fi (dedicated fibre)",
        "Large projection screen",
        "Connected speakers",
        "Flipcharts, stationery, pens…",
      ],
    },
    attentions: {
      title: "Tailored attention during and around your event.",
      lead: "To support your working sessions, we offer different packages. Gourmet breakfasts, chef-prepared lunches, cocktail dinners or shared team experiences… We design a programme with you that matches your expectations.",
      formulas: [
        "Breakfast and gourmet breaks",
        "Lunch and dinner prepared by chefs",
        "Lunch or dinner cocktail",
        "Segway or e-scooter rides",
        "Theatre bookings or guided tours",
        "Indoor or outdoor activities for team cohesion",
      ],
      beverages: "Hot and cold drinks available throughout",
    },
    cta: {
      title: "Have a project in mind?",
      button: "Let's talk",
    },
  },
  offersPage: {
    hero: {
      kicker: "Exclusive offers",
      title: "Exclusive offers for a tailored stay.",
    },
    intro:
      "Whether you like to plan ahead, extend your stay or share special moments as a couple, our offers are designed to give you more than a night at the hotel. Book directly on our website for exclusive benefits — and a welcome that always feels personal.",
    items: [
      {
        id: "royal",
        title: "Royal stay",
        lines: [
          "Room at the Jeu de Paume",
          "+ Skip-the-line tickets for the Palace of Versailles",
        ],
      },
      {
        id: "early",
        title: "Book in advance",
        lines: [
          "Book 90 days ahead and get 15% off the room rate.",
        ],
      },
      {
        id: "long",
        title: "Long stay",
        lines: [
          "Stay at least 4 nights and get 15% off the room rate.",
        ],
      },
      {
        id: "romantic",
        title: "Romantic stay",
        lines: [
          "Room at the Jeu de Paume",
          "+ Half a bottle of Champagne",
        ],
      },
    ],
    bookCta: "Book on the website",
  },
  preparePage: {
    location: {
      title: "A prime location in the heart of Versailles.",
      body: "On a quiet street in Saint-Louis, steps from shops, restaurants and the Palace, Hôtel du Jeu de Paume is the ideal base to explore Versailles on foot — whether you come for leisure, a seminar or a relaxing weekend.",
    },
    parkingExtra: {
      title: "Parking nearby",
      items: [
        "Saint-Louis Cathedral car park (3 minutes on foot) — 20% off when you stay with us.",
        "Place d'Armes car park",
        "Avenue de Sceaux car park",
        "On-street parking (free 7pm–9am & Sundays via PayByPhone).",
      ],
    },
    discover: {
      title: "Versailles within reach",
      body: "Ideally located in central Versailles, Hôtel du Jeu de Paume is the perfect starting point to discover the city's historic, cultural and culinary highlights.",
    },
    faq: [
      {
        q: "Do you sell tickets for the Palace of Versailles?",
        a: "We guide you to official tickets and timed entry; we can also advise on skip-the-line options depending on the season.",
      },
      {
        q: "Does the hotel have parking?",
        a: "There is no private hotel parking. Several public car parks are nearby (Cathedral, Place d'Armes, Avenue de Sceaux). A discount may apply at the Cathedral car park for our guests.",
      },
      {
        q: "Is the hotel accessible for people with reduced mobility?",
        a: "Yes: lift and adapted access. Tell us your needs when booking so we can allocate the most suitable room.",
      },
      {
        q: "Are rooms air-conditioned?",
        a: "Yes, rooms are air-conditioned.",
      },
      {
        q: "Are rooms non-smoking?",
        a: "Yes, the entire property is non-smoking.",
      },
      {
        q: "Can I leave my luggage?",
        a: "Yes, a luggage service is available.",
      },
      {
        q: "Can I change or cancel my reservation?",
        a: "Conditions depend on the rate booked. Check your confirmation or contact us for the exact policy.",
      },
      {
        q: "What are check-in and check-out times?",
        a: "Standard times are confirmed at booking and on arrival. Luggage storage can be arranged if needed.",
      },
      {
        q: "Early check-in or late check-out?",
        a: "Subject to availability on the day — ask reception and we will do our best.",
      },
      {
        q: "Is reception open 24/7?",
        a: "Yes, reception is open 24 hours a day.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "Major cards and common payment methods are accepted.",
      },
      {
        q: "Do you offer refunds if I cancel?",
        a: "Cancellation and refund rules depend on the rate booked. See the policy at booking or write to us.",
      },
    ],
    contactCta:
      "Our team is here to help you plan your visit — get in touch, we will be glad to assist.",
  },
  footer: {
    address: "5 bis rue de Fontenay — 78000 Versailles",
    phone: "+33 1 30 84 14 00",
    email: "contact@hotel-jeudepaume.fr",
    legal: "Legal notice",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
    customize: "Cookie preferences",
    reviews: "Guest reviews",
    googleLabel: "Google reviews",
  },
};

export function getHjpContent(locale: Locale): HjpContent {
  return locale === "en" ? en : fr;
}
