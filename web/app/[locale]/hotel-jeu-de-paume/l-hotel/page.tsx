import { HjpHotelPageView } from "@/components/hotel-jeu-de-paume/hjp-hotel-page";
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
  const m = getHjpContent(raw).meta.hotel;
  const path = href(raw, "/hotel-jeu-de-paume/l-hotel");
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/hotel-jeu-de-paume/l-hotel",
        en: "/en/hotel-jeu-de-paume/l-hotel",
      },
    },
  };
}

export default async function HotelJdpLHotelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  return <HjpHotelPageView locale={raw} />;
}
