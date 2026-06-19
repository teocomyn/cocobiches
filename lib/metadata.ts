import type { Metadata } from "next";
import type { Locale } from "./i18n-config";
import { href } from "./paths";
import { absoluteUrl, getSiteUrl } from "./site-url";

type PageMetaInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  openGraphType?: "website" | "article";
  noIndex?: boolean;
  /** Chemin public absolu depuis / (ex. /hotel-jeu-de-paume/salon.jpg) */
  ogImagePath?: string;
  ogImageAlt?: string;
};

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  openGraphType = "website",
  noIndex = false,
  ogImagePath,
  ogImageAlt = "Cocobiches",
}: PageMetaInput): Metadata {
  const canonical = href(locale, path);
  const ogImage = ogImagePath
    ? absoluteUrl(ogImagePath)
    : absoluteUrl(href(locale, "/opengraph-image"));

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: href("fr", path),
        en: href("en", path),
        "x-default": href("fr", path),
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonical),
      type: openGraphType,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      siteName: "Cocobiches",
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}

type ArticleMetaInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  publishedTime: string;
  image: string;
  imageAlt: string;
};

export function buildArticleMetadata({
  locale,
  path,
  title,
  description,
  publishedTime,
  image,
  imageAlt,
}: ArticleMetaInput): Metadata {
  const canonical = href(locale, path);
  const pageTitle = `${title} · Cocobiches`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical,
      languages: {
        fr: href("fr", path),
        en: href("en", path),
        "x-default": href("fr", path),
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url: absoluteUrl(canonical),
      type: "article",
      publishedTime,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      siteName: "Cocobiches",
      images: [{ url: image, width: 1600, height: 900, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
  };
}
