/** Name / Address / Phone — source unique pour tout le site. */

export type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
};

export const GROUP_NAP = {
  name: "Cocobiches",
  email: "bonjour@cocobiches.com",
  commercialEmail: "commercial@cocobiches.com",
  pressEmail: "presse@cocobiches.com",
  /** Ligne principale · Hôtel du Jeu de Paume (maison-mère) */
  phone: "+33130841400",
  phoneDisplay: "01 30 84 14 00",
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
    phone: "+33130841400",
    phoneDisplay: "01 30 84 14 00",
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
    email: "contact@apparts-onclelouis-versailles.fr",
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
