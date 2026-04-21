import { HjpSeminairesPageView } from "@/components/hotel-jeu-de-paume/hjp-seminaires-page";
import { getHjpContent } from "@/lib/hjp-content";
import { getLocaleFromParams } from "@/lib/locale-params";
import { href } from "@/lib/paths";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const m = getHjpContent(locale).meta.seminaires;
  const path = href(locale, "/hotel-jeu-de-paume/seminaires");
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/hotel-jeu-de-paume/seminaires",
        en: "/en/hotel-jeu-de-paume/seminaires",
      },
    },
    openGraph: { title: m.title, description: m.description, url: path },
  };
}

export default async function HotelJdpSeminairesPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  return <HjpSeminairesPageView locale={locale} />;
}
