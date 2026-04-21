import { BookingBar } from "@/components/booking/booking-bar";
import { Hero } from "@/components/home/hero";
import { HotelsSection } from "@/components/home/hotels-section";
import { ManifestoSection } from "@/components/home/manifesto-section";
import { NumbersSection } from "@/components/home/numbers-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PressStrip } from "@/components/home/press-strip";
import { JournalPreview } from "@/components/home/journal-preview";
import { WhySection } from "@/components/home/why-section";
import { getDictionary } from "@/lib/get-dictionary";
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
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: {
      canonical: href(locale),
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: href(locale),
    },
  };
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
    "@context": "https://schema.org",
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
      email: "commercial@cocobiches.com",
      availableLanguage: ["French", "English"],
    },
    subOrganization: [
      {
        "@type": "Hotel",
        name: "Hôtel d'Angleterre",
        url: "https://www.hotel-angleterre.com/",
      },
      {
        "@type": "Hotel",
        name: "Hôtel du Jeu de Paume",
        url: "https://www.hotel-jeudepaume.fr/",
      },
      {
        "@type": "LodgingBusiness",
        name: "Apparts de l'Oncle Louis",
        url: "https://www.apparts-oncle-louis.fr/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Hero locale={locale} dict={dict} />
      <div className="relative z-20 px-4 md:px-8">
        <BookingBar dict={dict} variant="home" />
      </div>
      <HotelsSection dict={dict} locale={locale} />
      <ManifestoSection dict={dict} locale={locale} />
      <NumbersSection dict={dict} />
      <WhySection dict={dict} />
      <TestimonialsSection dict={dict} />
      <JournalPreview dict={dict} locale={locale} />
      <PressStrip dict={dict} locale={locale} />
      <NewsletterSection dict={dict} />
    </>
  );
}
