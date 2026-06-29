/** Name / Address / Phone — source unique pour tout le site. */

export type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
};

/** Total affiché pour le groupe (20 + 16 + 12 appartements). Ne pas recalculer depuis HOTELS. */
export const GROUP_TOTAL_ROOMS = 48;

export const GROUP_NAP = {
  name: "Cocobiches",
  email: "welcome@cocobiches.com",
  commercialEmail: "partenaires@cocobiches.com",
  eventsEmail: "events@cocobiches.com",
  pressEmail: "partenaires@cocobiches.com",
  /** Ligne principale groupe */
  phone: "+33139514350",
  phoneDisplay: "01 39 51 43 50",
  address: {
    streetAddress: "5 bis rue de Fontenay",
    addressLocality: "Versailles",
    postalCode: "78000",
    addressCountry: "FR",
  } satisfies PostalAddress,
} as const;

export const HOTEL_NAP = {
  angleterre: {
    phone: "+33139514350",
    phoneDisplay: "01 39 51 43 50",
    email: "contact@hotel-angleterre-versailles.fr",
    address: {
      streetAddress: "2 bis rue de Fontenay",
      addressLocality: "Versailles",
      postalCode: "78000",
      addressCountry: "FR",
    } satisfies PostalAddress,
  },
  jeudepaume: {
    phone: "+33139514350",
    phoneDisplay: "01 39 51 43 50",
    email: "contact@hotel-jeudepaume.fr",
    address: {
      streetAddress: "5 bis rue de Fontenay",
      addressLocality: "Versailles",
      postalCode: "78000",
      addressCountry: "FR",
    } satisfies PostalAddress,
  },
  onclelouis: {
    phone: "+33139514350",
    phoneDisplay: "01 39 51 43 50",
    email: "contact@apparts-oncle-louis-versailles.fr",
    address: {
      streetAddress: "Rue de Satory",
      addressLocality: "Versailles",
      postalCode: "78000",
      addressCountry: "FR",
    } satisfies PostalAddress,
  },
} as const;

export function formatAddressLine(address: PostalAddress): string {
  return `${address.streetAddress}, ${address.postalCode} ${address.addressLocality}`;
}
