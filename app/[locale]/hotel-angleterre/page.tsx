import { HotelAngleterrePageView } from "@/components/hotel/hotel-angleterre-page";
import { HOTELS } from "@/lib/hotels-data";
import { buildHotelJsonLd } from "@/lib/hotel-schema";
import { getHotelLandingContent } from "@/lib/i18n/hotel-landings";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import { OG_IMAGES } from "@/lib/og-images";
import type { Metadata } from "next";

const PATH = "/hotel-angleterre";
const hotel = HOTELS.angleterre;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const content = getHotelLandingContent(locale, "angleterre");
  return buildPageMetadata({
    locale,
    path: PATH,
    title: content.metaTitle,
    description: content.metaDescription,
    ogImagePath: OG_IMAGES.angleterre,
    ogImageAlt: "Hôtel d'Angleterre · Versailles",
  });
}

export default async function HotelAngleterrePage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const content = getHotelLandingContent(locale, "angleterre");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildHotelJsonLd(locale, hotel)),
        }}
      />
      <HotelAngleterrePageView locale={locale} hotel={hotel} content={content} />
    </>
  );
}
