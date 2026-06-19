import { HjpPreparePageView } from "@/components/hotel-jeu-de-paume/hjp-prepare-page";
import { getHjpContent } from "@/lib/hjp-content";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const PATH = "/hotel-jeu-de-paume/preparer-votre-sejour";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const m = getHjpContent(locale).meta.prepare;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: m.title,
    description: m.description,
  });
}

export default async function HotelJdpPreparePage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  return <HjpPreparePageView locale={locale} />;
}
