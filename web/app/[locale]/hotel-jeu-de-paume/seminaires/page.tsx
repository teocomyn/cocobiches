import { HjpSeminairesPageView } from "@/components/hotel-jeu-de-paume/hjp-seminaires-page";
import { getHjpContent } from "@/lib/hjp-content";
import { isLocale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const m = getHjpContent(raw).meta.seminaires;
  const path = href(raw, "/hotel-jeu-de-paume/seminaires");
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
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  return <HjpSeminairesPageView locale={raw} />;
}
