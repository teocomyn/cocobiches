import type { HotelRecord } from "./hotels-data";
import { HOTEL_NAP } from "./site-nap";
import type { Locale } from "./i18n-config";
import { hotelName } from "./hotels-data";
import { href } from "./paths";
import { absoluteUrl } from "./site-url";

export function buildHotelJsonLd(locale: Locale, record: HotelRecord) {
  const nap = HOTEL_NAP[record.id];
  const schemaType = record.id === "onclelouis" ? "LodgingBusiness" : "Hotel";

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: hotelName(record, locale),
    url: absoluteUrl(href(locale, record.internalPath)),
    telephone: nap.phone,
    email: nap.email,
    ...(record.stars
      ? { starRating: { "@type": "Rating", ratingValue: record.stars } }
      : {}),
    numberOfRooms: record.rooms,
    address: {
      "@type": "PostalAddress",
      ...nap.address,
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Cocobiches",
    },
  };
}
