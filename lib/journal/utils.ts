import type { Dictionary } from "@/lib/get-dictionary";
import type { JournalCategoryId } from "./types";
import type { JournalArticleMeta } from "./types";

export function categoryLabel(
  id: JournalCategoryId,
  j: Dictionary["journalPage"],
): string {
  const map: Record<JournalCategoryId, keyof Dictionary["journalPage"]> = {
    guide: "filterGuide",
    coulisses: "filterCoulisses",
    gastronomie: "filterGastronomie",
    seminaires: "filterSeminaires",
    saisonnalite: "filterSaison",
  };
  return j[map[id]] as string;
}

export function sortByDateDesc(posts: JournalArticleMeta[]): JournalArticleMeta[] {
  return [...posts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}

export function formatJournalDate(iso: string, locale: "fr" | "en"): string {
  const d = new Date(iso);
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}
