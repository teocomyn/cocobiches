import type { Locale } from "./i18n-config";
import { HOTEL_NAP } from "./site-nap";
import { href } from "./paths";

export type HotelId = "angleterre" | "jeudepaume" | "onclelouis";

export type HotelRecord = {
  id: HotelId;
  nameFr: string;
  nameEn: string;
  stars?: number;
  rooms: number;
  roomLabelFr: string;
  roomLabelEn: string;
  opened: number;
  /** Chemin interne sur cocobiches.fr (sans locale) */
  internalPath: string;
  /** Moteur de réservation / site hôtel */
  bookingUrl: string;
  email: string;
  phone: string;
  image: string;
  imageAltFr: string;
  imageAltEn: string;
};

export const HOTELS: Record<HotelId, HotelRecord> = {
  angleterre: {
    id: "angleterre",
    nameFr: "Hôtel d'Angleterre",
    nameEn: "Hôtel d'Angleterre",
    stars: 3,
    rooms: 29,
    roomLabelFr: "chambres",
    roomLabelEn: "rooms",
    opened: 2010,
    internalPath: "/hotel-angleterre",
    bookingUrl: "https://www.hotel-angleterre-versailles.fr/",
    email: HOTEL_NAP.angleterre.email,
    phone: HOTEL_NAP.angleterre.phone,
    image: "/hotel-angleterre/hotel-facade.jpg",
    imageAltFr: "Façade de l'Hôtel d'Angleterre à Versailles, à deux pas du Château",
    imageAltEn: "Hôtel d'Angleterre façade in Versailles, steps from the Palace",
  },
  jeudepaume: {
    id: "jeudepaume",
    nameFr: "Hôtel du Jeu de Paume",
    nameEn: "Hôtel du Jeu de Paume",
    stars: 3,
    rooms: 38,
    roomLabelFr: "chambres",
    roomLabelEn: "rooms",
    opened: 2014,
    internalPath: "/hotel-jeu-de-paume",
    bookingUrl: "https://www.hotel-jeudepaume.fr/",
    email: HOTEL_NAP.jeudepaume.email,
    phone: HOTEL_NAP.jeudepaume.phone,
    image: "/hotel-jeu-de-paume/hotel-facade.jpg",
    imageAltFr: "Façade de l'Hôtel du Jeu de Paume à Versailles",
    imageAltEn: "Hôtel du Jeu de Paume façade in Versailles",
  },
  onclelouis: {
    id: "onclelouis",
    nameFr: "Apparts de l'Oncle Louis",
    nameEn: "Apparts de l'Oncle Louis",
    rooms: 12,
    roomLabelFr: "appartements",
    roomLabelEn: "apartments",
    opened: 2018,
    internalPath: "/apparts-oncle-louis",
    bookingUrl: "https://www.apparts-onclelouis-versailles.fr/",
    email: HOTEL_NAP.onclelouis.email,
    phone: HOTEL_NAP.onclelouis.phone,
    image: "/apparts-oncle-louis/facade.jpg",
    imageAltFr: "Façade des Apparts de l'Oncle Louis, rue de Satory à Versailles",
    imageAltEn: "Apparts de l'Oncle Louis façade on rue de Satory, Versailles",
  },
};

export const HOTEL_LIST: HotelRecord[] = [
  HOTELS.angleterre,
  HOTELS.jeudepaume,
  HOTELS.onclelouis,
];

export function hotelName(hotel: HotelRecord, locale: Locale): string {
  return locale === "fr" ? hotel.nameFr : hotel.nameEn;
}

export function hotelTag(hotel: HotelRecord, locale: Locale): string {
  const rooms = `${hotel.rooms} ${locale === "fr" ? hotel.roomLabelFr : hotel.roomLabelEn}`;
  if (hotel.id === "jeudepaume") {
    return locale === "fr"
      ? `${hotel.stars} étoiles · ${rooms} · séminaires`
      : `${hotel.stars} stars · ${rooms} · seminars`;
  }
  if (hotel.id === "onclelouis") {
    return locale === "fr"
      ? `Apparthôtel · ${rooms} · depuis ${hotel.opened}`
      : `Apart-hotel · ${rooms} · since ${hotel.opened}`;
  }
  return locale === "fr"
    ? `${hotel.stars} étoiles · ${rooms} · depuis ${hotel.opened}`
    : `${hotel.stars} stars · ${rooms} · since ${hotel.opened}`;
}

export function hotelInternalHref(locale: Locale, id: HotelId): string {
  return href(locale, HOTELS[id].internalPath);
}

export function hotelImageAlt(hotel: HotelRecord, locale: Locale): string {
  return locale === "fr" ? hotel.imageAltFr : hotel.imageAltEn;
}
