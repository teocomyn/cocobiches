import { HjpOffresPageView } from "@/components/hotel-jeu-de-paume/hjp-offres-page";
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
  const m = getHjpContent(raw).meta.offres;
  const path = href(raw, "/hotel-jeu-de-paume/offres");
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/hotel-jeu-de-paume/offres",
        en: "/en/hotel-jeu-de-paume/offres",
      },
    },
    openGraph: { title: m.title, description: m.description, url: path },
  };
}

export default async function HotelJdpOffresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  return <HjpOffresPageView locale={raw} />;
}
