import type { MetadataRoute } from "next";
import { getJournalPosts } from "@/lib/journal/posts";
import { locales } from "@/lib/i18n-config";
import { href } from "@/lib/paths";

const base =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.cocobiches.fr";

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
  "/hotel-jeu-de-paume",
  "/hotel-jeu-de-paume/l-hotel",
  "/hotel-jeu-de-paume/vivre-versailles",
  "/hotel-jeu-de-paume/offres",
  "/hotel-jeu-de-paume/seminaires",
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
