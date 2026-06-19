import { AngleterreGaleriePageView } from "@/components/hotel/angleterre-galerie-page";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import { OG_IMAGES } from "@/lib/og-images";
import type { Metadata } from "next";

const PATH = "/hotel-angleterre/galerie";

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
    title: isFr ? "Galerie · Hôtel d'Angleterre" : "Gallery · Hôtel d'Angleterre",
    description: isFr
      ? "Photos de l'Hôtel d'Angleterre à Versailles : façade, chambres et ambiance au cœur du quartier Saint-Louis."
      : "Photos of Hôtel d'Angleterre in Versailles: façade, rooms and atmosphere in the Saint-Louis district.",
    ogImagePath: OG_IMAGES.angleterre,
    ogImageAlt: "Hôtel d'Angleterre · Versailles",
  });
}

export default async function HotelAngleterreGaleriePage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  return <AngleterreGaleriePageView locale={locale} />;
}
