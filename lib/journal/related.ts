import { getJournalPosts } from "./posts";
import type { JournalArticleMeta } from "./types";
import { sortByDateDesc } from "./utils";

/** Up to three other articles, most recent first, excluding the current slug. */
export function getRelatedArticles(slug: string, limit = 3): JournalArticleMeta[] {
  const sorted = sortByDateDesc(getJournalPosts());
  return sorted.filter((a) => a.slug !== slug).slice(0, limit);
}
