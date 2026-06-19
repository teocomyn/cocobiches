import { OncleLouisPageView } from "@/components/hotel/oncle-louis-page";
import { HOTELS } from "@/lib/hotels-data";
import { buildHotelJsonLd } from "@/lib/hotel-schema";
import { getHotelLandingContent } from "@/lib/i18n/hotel-landings";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import { OG_IMAGES } from "@/lib/og-images";
import type { Metadata } from "next";

const PATH = "/apparts-oncle-louis";
const hotel = HOTELS.onclelouis;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const content = getHotelLandingContent(locale, "onclelouis");
  return buildPageMetadata({
    locale,
    path: PATH,
    title: content.metaTitle,
    description: content.metaDescription,
    ogImagePath: OG_IMAGES.onclelouis,
    ogImageAlt: "Apparts de l'Oncle Louis · Versailles",
  });
}

export default async function AppartsOncleLouisPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const content = getHotelLandingContent(locale, "onclelouis");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildHotelJsonLd(locale, hotel)),
        }}
      />
      <OncleLouisPageView locale={locale} hotel={hotel} content={content} />
    </>
  );
}
