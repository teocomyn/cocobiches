import { HjpVivrePageView } from "@/components/hotel-jeu-de-paume/hjp-vivre-page";
import { getHjpContent } from "@/lib/hjp-content";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const PATH = "/hotel-jeu-de-paume/vivre-versailles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const m = getHjpContent(locale).meta.vivre;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: m.title,
    description: m.description,
  });
}

export default async function HotelJdpVivrePage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  return <HjpVivrePageView locale={locale} />;
}
