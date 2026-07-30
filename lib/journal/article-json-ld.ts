import { HOTEL_NAP } from "@/lib/site-nap";
import type { Locale } from "@/lib/i18n-config";
import { getArticleBlocks } from "./get-blocks";
import type { JournalArticleMeta } from "./types";
import { absoluteUrl } from "@/lib/site-url";
import { href } from "@/lib/paths";
import { breadcrumbList, jsonLdGraph } from "@/lib/json-ld";

const ANGLETERRE_RENO_SLUG = "hotel-angleterre-versailles-renovation-classement-3-etoiles";

export function buildJournalArticleJsonLd(
  post: JournalArticleMeta,
  locale: Locale,
  title: string,
  description: string,
) {
  const url = absoluteUrl(href(locale, `/journal/${post.slug}`));
  const isFr = locale === "fr";

  const baseArticle = {
    "@type": "NewsArticle" as const,
    headline: title,
    description,
    image: [absoluteUrl(post.heroImage)],
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    inLanguage: isFr ? "fr-FR" : "en-GB",
    author: {
      "@type": "Organization" as const,
      name: "Cocobiches",
    },
    publisher: {
      "@type": "Organization" as const,
      name: "Cocobiches",
      logo: {
        "@type": "ImageObject" as const,
        url: absoluteUrl("/brand/cocobiches-logo.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage" as const,
      "@id": url,
    },
  };

  if (post.slug !== ANGLETERRE_RENO_SLUG) {
    return jsonLdGraph(
      { ...baseArticle, "@type": "Article" },
      breadcrumbList(locale, [
        { name: isFr ? "Accueil" : "Home", path: "" },
        { name: "Journal", path: "/journal" },
        { name: title, path: `/journal/${post.slug}` },
      ]),
    );
  }

  const blocks = getArticleBlocks(post.slug, locale);
  const faqBlock = blocks.find((b) => b.kind === "faq");
  const faqItems =
    faqBlock && faqBlock.kind === "faq"
      ? faqBlock.items.map((item) => ({
          "@type": "Question" as const,
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer" as const,
            text: item.a,
          },
        }))
      : [];

  const angleterreAddress = HOTEL_NAP.angleterre.address;

  return jsonLdGraph(
    baseArticle,
    {
      "@type": "Hotel",
      "@id": `${absoluteUrl(href(locale, "/hotel-angleterre"))}#hotel-angleterre`,
      name: "Hôtel d'Angleterre Versailles",
      starRating: { "@type": "Rating", ratingValue: "3" },
      numberOfRooms: "20",
      address: {
        "@type": "PostalAddress",
        streetAddress: angleterreAddress.streetAddress,
        postalCode: angleterreAddress.postalCode,
        addressLocality: angleterreAddress.addressLocality,
        addressRegion: "Île-de-France",
        addressCountry: angleterreAddress.addressCountry,
      },
      url: "https://www.hotel-angleterre-versailles.fr/",
      parentOrganization: {
        "@type": "Organization",
        name: "Cocobiches",
      },
      nearbyAttraction: {
        "@type": "TouristAttraction",
        name: isFr ? "Château de Versailles" : "Palace of Versailles",
      },
    },
    ...(faqItems.length > 0
      ? [
          {
            "@type": "FAQPage" as const,
            mainEntity: faqItems,
          },
        ]
      : []),
    breadcrumbList(locale, [
      { name: isFr ? "Accueil" : "Home", path: "" },
      { name: "Journal", path: "/journal" },
      { name: title, path: `/journal/${post.slug}` },
    ]),
  );
}

export { ANGLETERRE_RENO_SLUG };
