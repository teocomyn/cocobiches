import { HjpGaleriePageView } from "@/components/hotel-jeu-de-paume/hjp-galerie-page";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import { HJP_GALLERY } from "@/lib/hjp-images";
import type { Metadata } from "next";

const PATH = "/hotel-jeu-de-paume/galerie";

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
    title: isFr ? "Galerie · Hôtel du Jeu de Paume" : "Gallery · Hôtel du Jeu de Paume",
    description: isFr
      ? "Photos de l'Hôtel du Jeu de Paume à Versailles : façade, salons, chambres, jardin et salle de séminaire."
      : "Photos of Hôtel du Jeu de Paume in Versailles: façade, lounges, rooms, garden and seminar room.",
  });
}

export default async function HotelJdpGaleriePage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;

  return <HjpGaleriePageView locale={locale} images={HJP_GALLERY} />;
}
