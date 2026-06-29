import dynamic from "next/dynamic";
import { BookingBar } from "@/components/booking/booking-bar";
import { Hero } from "@/components/home/hero";
import { HotelsSection } from "@/components/home/hotels-section";
import { ManifestoSection } from "@/components/home/manifesto-section";
import { NumbersSection } from "@/components/home/numbers-section";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getDictionary } from "@/lib/get-dictionary";
import { jsonLdGraph, webSiteSchema } from "@/lib/json-ld";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const ValuesSection = dynamic(
  () =>
    import("@/components/blocks/values-section").then((mod) => ({
      default: mod.ValuesSection,
    })),
  { loading: () => null },
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/home/testimonials-section").then((mod) => ({
      default: mod.TestimonialsSection,
    })),
  { loading: () => null },
);

const JournalPreview = dynamic(
  () =>
    import("@/components/home/journal-preview").then((mod) => ({
      default: mod.JournalPreview,
    })),
  { loading: () => null },
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "",
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const dict = await getDictionary(locale);

  const orgJsonLd = {
    "@type": "Organization",
    name: "Cocobiches",
    url: "https://www.cocobiches.fr",
    description: dict.meta.home.description,
    areaServed: {
      "@type": "City",
      name: "Versailles",
      containedInPlace: { "@type": "Country", name: "France" },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Versailles",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "partenaires@cocobiches.com",
      availableLanguage: ["French", "English"],
    },
    subOrganization: [
      {
        "@type": "Hotel",
        name: "Hôtel d'Angleterre",
        url: "https://www.hotel-angleterre-versailles.fr/",
      },
      {
        "@type": "Hotel",
        name: "Hôtel du Jeu de Paume",
        url: "https://www.hotel-jeudepaume.fr/",
      },
      {
        "@type": "LodgingBusiness",
        name: "Apparts de l'Oncle Louis",
        url: "https://www.apparts-onclelouis-versailles.fr/",
      },
    ],
  };

  const jsonLd = jsonLdGraph(orgJsonLd, webSiteSchema(locale));

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <Hero locale={locale} dict={dict} />
      <div className="relative z-20 px-5 md:px-8 lg:px-10">
        <BookingBar dict={dict} locale={locale} variant="home" />
      </div>
      <HotelsSection dict={dict} locale={locale} />
      <ManifestoSection dict={dict} locale={locale} />
      <ValuesSection dict={dict} />
      <NumbersSection dict={dict} />
      <TestimonialsSection dict={dict} />
      <JournalPreview dict={dict} locale={locale} />
    </>
  );
}
