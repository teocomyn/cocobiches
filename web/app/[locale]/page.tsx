import { BookingBar } from "@/components/booking/booking-bar";
import { Hero } from "@/components/home/hero";
import { HotelsSection } from "@/components/home/hotels-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { WhySection } from "@/components/home/why-section";
import { getDictionary } from "@/lib/get-dictionary";
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
  const dict = await getDictionary(raw);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: {
      canonical: href(raw),
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: href(raw),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const locale = raw;
  const dict = await getDictionary(locale);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cocobiches",
    url: "https://www.cocobiches.fr",
    description: dict.meta.home.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Versailles",
      addressCountry: "FR",
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
      <BookingBar dict={dict} />
      <HotelsSection dict={dict} locale={locale} />
      <WhySection dict={dict} />
      <NewsletterSection dict={dict} />
    </>
  );
}
