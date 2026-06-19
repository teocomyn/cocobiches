import { HjpChambresPageView } from "@/components/hotel-jeu-de-paume/hjp-chambres-page";
import { getHjpContent } from "@/lib/hjp-content";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const PATH = "/hotel-jeu-de-paume/chambres";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const m = getHjpContent(locale).meta.hotel;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: locale === "fr" ? "Chambres · Hôtel du Jeu de Paume" : "Rooms · Hôtel du Jeu de Paume",
    description: m.description,
  });
}

export default async function HotelJdpChambresPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  return <HjpChambresPageView locale={locale} />;
}
