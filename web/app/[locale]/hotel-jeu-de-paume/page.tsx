import { HjpHome } from "@/components/hotel-jeu-de-paume/hjp-home";
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
  const m = getHjpContent(raw).meta.home;
  const path = href(raw, "/hotel-jeu-de-paume");
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/hotel-jeu-de-paume",
        en: "/en/hotel-jeu-de-paume",
      },
    },
    openGraph: { title: m.title, description: m.description, url: path },
  };
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
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelJsonLd(raw)),
        }}
      />
      <HjpHome locale={raw} />
    </>
  );
}
