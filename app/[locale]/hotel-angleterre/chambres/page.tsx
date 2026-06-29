import { AngleterreChambresPageView } from "@/components/hotel/angleterre-chambres-page";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import { OG_IMAGES } from "@/lib/og-images";
import type { Metadata } from "next";

const PATH = "/hotel-angleterre/chambres";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const isFr = locale === "fr";
  return buildPageMetadata({
    locale,
    path: PATH,
    title: isFr ? "Chambres · Hôtel d'Angleterre" : "Rooms · Hôtel d'Angleterre",
    description: isFr
      ? "20 chambres cosy à l'Hôtel d'Angleterre : doubles, supérieures et familiales, à deux minutes du Château de Versailles."
      : "20 cosy rooms at Hôtel d'Angleterre: doubles, superior and family rooms, two minutes from the Palace of Versailles.",
    ogImagePath: OG_IMAGES.angleterre,
    ogImageAlt: "Hôtel d'Angleterre · Versailles",
  });
}

export default async function HotelAngleterreChambresPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  return <AngleterreChambresPageView locale={locale} />;
}
