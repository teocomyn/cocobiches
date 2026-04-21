import type { Locale } from "./i18n-config";

const dictionaries = {
  fr: () => import("../messages/fr.json").then((m) => m.default),
  en: () => import("../messages/en.json").then((m) => m.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["fr"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
