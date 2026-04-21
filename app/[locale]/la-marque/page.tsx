import { LaMarquePage } from "@/components/brand/la-marque-page";
import { getLocaleFromParams } from "@/lib/locale-params";
import { laMarqueMeta } from "@/lib/i18n/la-marque";
import { href } from "@/lib/paths";
import type { Metadata } from "next";

const siteBase =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.cocobiches.fr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const m = laMarqueMeta[locale];
  const path = href(locale, "/la-marque");
  const ogUrl = `${siteBase}${path}`;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: { fr: "/fr/la-marque", en: "/en/la-marque" },
    },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: ogUrl,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      type: "website",
      siteName: "Cocobiches",
      images: [
        {
          url: `${siteBase}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: m.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.ogTitle,
      description: m.ogDescription,
    },
  };
}

function jsonLdBrand(locale: "fr" | "en") {
  const isFr = locale === "fr";
  const b = siteBase;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${b}/#organization`,
        name: "Cocobiches",
        url: b,
        description: laMarqueMeta[locale].description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Versailles",
          postalCode: "78000",
          addressCountry: "FR",
        },
        founder: [
          { "@type": "Person", name: "François Comyn", jobTitle: isFr ? "Propriétaire et fondateur" : "Owner & founder" },
          { "@type": "Person", name: "Elise Comyn (Ranjard)", jobTitle: isFr ? "Gérante" : "Managing director" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${b}/#localbusiness`,
        name: "Cocobiches",
        image: `${b}/brand/cocobiches-logo.png`,
        url: b,
        telephone: "+33139000000",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Versailles",
          addressLocality: "Versailles",
          postalCode: "78000",
          addressCountry: "FR",
        },
        parentOrganization: { "@id": `${b}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isFr ? "Accueil" : "Home",
            item: `${b}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isFr ? "La marque" : "The brand",
            item: `${b}${href(locale, "/la-marque")}`,
          },
        ],
      },
      {
        "@type": "Person",
        name: "Elise Comyn (Ranjard)",
        jobTitle: isFr ? "Gérante du groupe Cocobiches" : "Managing director, Cocobiches group",
        worksFor: { "@id": `${b}/#organization` },
      },
      {
        "@type": "Person",
        name: "François Comyn",
        jobTitle: isFr ? "Propriétaire et fondateur" : "Owner & founder",
        worksFor: { "@id": `${b}/#organization` },
      },
    ],
  };
}

export default async function BrandPageRoute({
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
          __html: JSON.stringify(jsonLdBrand(locale)),
        }}
      />
      <LaMarquePage locale={locale} />
    </>
  );
}
