/** Itinéraires Vivre Versailles · contenu éditorial JDP */
export type ItineraryStep = { time: string; title: string; body: string };

export type DayItinerary = { title: string; steps: readonly ItineraryStep[] };

export const HJP_ITINERARIES = {
  fr: {
    one: {
      title: "Une journée à Versailles",
      steps: [
        {
          time: "9h",
          title: "Petit-déjeuner à l'hôtel",
          body: "Viennoiseries maison, jus pressés. Partez sans vous presser : le Château ouvre à 9h en basse saison.",
        },
        {
          time: "10h – 13h",
          title: "Le Château",
          body: "Galerie des Glaces, appartements royaux, chapelle. Créneau horodaté recommandé. Comptez deux à trois heures.",
        },
        {
          time: "13h",
          title: "Déjeuner en ville",
          body: "Bouillon Notre-Dame ou Le Petit Versailles, à dix minutes à pied. Nos équipes réservent sur demande.",
        },
        {
          time: "15h – 18h",
          title: "Jardins et Grand Canal",
          body: "Promenade dans les jardins à la française. En été, location de barque sur le Canal. Retour à l'hôtel pour un thé au salon.",
        },
      ],
    },
    two: {
      title: "Deux jours · Château et Domaine",
      steps: [
        {
          time: "Jour 1 · matin",
          title: "Château et Galerie des Glaces",
          body: "Visite essentielle en fin de matinée, lumière douce dans la Galerie. Pause déjeuner au Bouillon Notre-Dame.",
        },
        {
          time: "Jour 1 · après-midi",
          title: "Quartier Notre-Dame",
          body: "Marché couvert, rues pavées, cafés. Flânerie versaillaise loin des foules du Parc.",
        },
        {
          time: "Jour 2 · matin",
          title: "Domaine de Marie-Antoinette",
          body: "Petit Trianon, jardins anglais, Hameau de la Reine. Prévoir trois heures, idéalement à vélo depuis le Parc.",
        },
        {
          time: "Jour 2 · après-midi",
          title: "Potager du Roi ou Musée Lambinet",
          body: "Selon la saison : le Potager en automne, Lambinet pour l'histoire de la ville. Dîner au Bistrot du 11.",
        },
      ],
    },
    three: {
      title: "Trois jours · Versailles à votre rythme",
      steps: [
        {
          time: "Jour 1",
          title: "Le grand Versailles",
          body: "Château le matin, jardins l'après-midi. Soirée libre en ville ou au salon de l'hôtel.",
        },
        {
          time: "Jour 2",
          title: "Marie-Antoinette et bosquets",
          body: "Domaine le matin. Après-midi dans les bosquets secrets du Parc (Colonnade, Encelade) hors Grandes Eaux.",
        },
        {
          time: "Jour 3",
          title: "Versailles des Versaillais",
          body: "Marché Notre-Dame, Cathédrale Saint-Louis, quartier Montreuil. Shopping rue de la Paroisse. Départ en fin de matinée.",
        },
      ],
    },
  },
  en: {
    one: {
      title: "One day in Versailles",
      steps: [
        {
          time: "9am",
          title: "Breakfast at the hotel",
          body: "House pastries and fresh juice. The Palace opens at 9am in low season — no need to rush.",
        },
        {
          time: "10am – 1pm",
          title: "The Palace",
          body: "Hall of Mirrors, royal apartments, chapel. Book a timed slot. Allow two to three hours.",
        },
        {
          time: "1pm",
          title: "Lunch in town",
          body: "Bouillon Notre-Dame or Le Petit Versailles, ten minutes on foot. We can reserve on request.",
        },
        {
          time: "3pm – 6pm",
          title: "Gardens and Grand Canal",
          body: "Stroll the formal gardens. In summer, hire a rowboat on the Canal. Tea in our lounge before dinner.",
        },
      ],
    },
    two: {
      title: "Two days · Palace and estate",
      steps: [
        {
          time: "Day 1 · morning",
          title: "Palace and Hall of Mirrors",
          body: "Core visit late morning for soft light in the Gallery. Lunch at Bouillon Notre-Dame.",
        },
        {
          time: "Day 1 · afternoon",
          title: "Notre-Dame district",
          body: "Covered market, cobbled streets, cafés. Versailles as locals live it.",
        },
        {
          time: "Day 2 · morning",
          title: "Marie-Antoinette's estate",
          body: "Petit Trianon, English gardens, Queen's Hamlet. Three hours; cycling from the Park is ideal.",
        },
        {
          time: "Day 2 · afternoon",
          title: "King's Kitchen Garden or Lambinet Museum",
          body: "Potager in autumn, Lambinet for city history. Dinner at Bistrot du 11.",
        },
      ],
    },
    three: {
      title: "Three days · Versailles at your pace",
      steps: [
        {
          time: "Day 1",
          title: "The grand tour",
          body: "Palace in the morning, gardens in the afternoon. Free evening in town or in our lounge.",
        },
        {
          time: "Day 2",
          title: "Marie-Antoinette and groves",
          body: "Estate in the morning. Afternoon in quiet park groves (Colonnade, Encelade) away from fountain crowds.",
        },
        {
          time: "Day 3",
          title: "Versailles like a local",
          body: "Notre-Dame market, Saint-Louis Cathedral, Montreuil district. Shopping on rue de la Paroisse. Leave late morning.",
        },
      ],
    },
  },
} as const;

export function getHjpItineraries(locale: "fr" | "en") {
  return HJP_ITINERARIES[locale];
}
