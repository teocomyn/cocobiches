import { HjpHome } from "@/components/hotel-jeu-de-paume/hjp-home";
import { getHjpContent } from "@/lib/hjp-content";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const PATH = "/hotel-jeu-de-paume";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const m = getHjpContent(locale).meta.home;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: m.title,
    description: m.description,
  });
}

const hotelJsonLd = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Hôtel du Jeu de Paume",
  url: `https://www.cocobiches.fr/${locale}/hotel-jeu-de-paume`,
  telephone: "+33130841400",
  email: "contact@hotel-jeudepaume.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 bis rue de Fontenay",
    postalCode: "78000",
    addressLocality: "Versailles",
    addressCountry: "FR",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Cocobiches",
  },
});

export default async function HotelJdpHomePage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelJsonLd(locale)),
        }}
      />
      <HjpHome locale={locale} />
    </>
  );
}
