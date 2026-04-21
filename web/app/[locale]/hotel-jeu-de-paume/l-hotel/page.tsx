import { HjpHotelPageView } from "@/components/hotel-jeu-de-paume/hjp-hotel-page";
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
  const m = getHjpContent(locale).meta.hotel;
  const path = href(locale, "/hotel-jeu-de-paume/l-hotel");
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
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  return <HjpHotelPageView locale={locale} />;
}
