import type { Locale } from "./i18n-config";
import { href } from "./paths";
import { absoluteUrl } from "./site-url";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbList(locale: Locale, items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(href(locale, item.path)),
    })),
  };
}

export function webSiteSchema(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": `${absoluteUrl(href(locale))}#website`,
    name: "Cocobiches",
    url: absoluteUrl(href(locale)),
    inLanguage: locale === "fr" ? "fr-FR" : "en-GB",
    publisher: {
      "@type": "Organization",
      name: "Cocobiches",
      url: absoluteUrl(href("fr")),
    },
  };
}

export function contactPageSchema(locale: Locale, title: string, description: string) {
  return {
    "@type": "ContactPage",
    name: title,
    description,
    url: absoluteUrl(href(locale, "/contact")),
    mainEntity: {
      "@type": "Organization",
      name: "Cocobiches",
      email: "commercial@cocobiches.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "commercial@cocobiches.com",
        availableLanguage: ["French", "English"],
      },
    },
  };
}

export function blogSchema(locale: Locale, title: string, description: string) {
  return {
    "@type": "Blog",
    name: title,
    description,
    url: absoluteUrl(href(locale, "/journal")),
    publisher: {
      "@type": "Organization",
      name: "Cocobiches",
    },
    inLanguage: locale === "fr" ? "fr-FR" : "en-GB",
  };
}

export function jsonLdGraph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
