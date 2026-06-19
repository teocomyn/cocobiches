import type { MetadataRoute } from "next";
import { getJournalPosts } from "@/lib/journal/posts";
import { locales } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import { getSiteUrl } from "@/lib/site-url";

const base = getSiteUrl();

const journalSlugs = getJournalPosts().map((p) => `/journal/${p.slug}`);

const paths = [
  "/",
  "/la-marque",
  "/engagements",
  "/presse",
  "/contact",
  "/partenaires",
  "/journal",
  ...journalSlugs,
  "/mentions-legales",
  "/politique-confidentialite",
  "/hotel-angleterre",
  "/hotel-angleterre/chambres",
  "/hotel-angleterre/galerie",
  "/apparts-oncle-louis",
  "/hotel-jeu-de-paume",
  "/hotel-jeu-de-paume/l-hotel",
  "/hotel-jeu-de-paume/chambres",
  "/hotel-jeu-de-paume/galerie",
  "/hotel-jeu-de-paume/vivre-versailles",
  "/hotel-jeu-de-paume/offres",
  "/hotel-jeu-de-paume/seminaires",
  "/hotel-jeu-de-paume/seminaires/demande-devis",
  "/hotel-jeu-de-paume/preparer-votre-sejour",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: `${base}${href(locale, path)}`,
        changeFrequency: "weekly",
        priority:
          path === "/"
            ? 1
            : path.startsWith("/hotel-jeu-de-paume")
              ? 0.85
              : path.startsWith("/journal")
                ? 0.75
                : 0.7,
      });
    }
  }
  return entries;
}
