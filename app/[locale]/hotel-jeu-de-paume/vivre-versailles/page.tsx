import { HjpVivrePageView } from "@/components/hotel-jeu-de-paume/hjp-vivre-page";
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
  const m = getHjpContent(locale).meta.vivre;
  const path = href(locale, "/hotel-jeu-de-paume/vivre-versailles");
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/hotel-jeu-de-paume/vivre-versailles",
        en: "/en/hotel-jeu-de-paume/vivre-versailles",
      },
    },
  };
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
