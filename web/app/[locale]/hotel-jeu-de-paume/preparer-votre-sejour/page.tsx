import { HjpPreparePageView } from "@/components/hotel-jeu-de-paume/hjp-prepare-page";
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
  const m = getHjpContent(raw).meta.prepare;
  const path = href(raw, "/hotel-jeu-de-paume/preparer-votre-sejour");
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/hotel-jeu-de-paume/preparer-votre-sejour",
        en: "/en/hotel-jeu-de-paume/preparer-votre-sejour",
      },
    },
    openGraph: { title: m.title, description: m.description, url: path },
  };
}

export default async function HotelJdpPreparePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  return <HjpPreparePageView locale={raw} />;
}
