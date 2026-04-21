import type { Locale } from "./i18n-config";
import { isLocale } from "./i18n-config";

type LocaleParams = { locale: string };

/**
 * Résout le segment `[locale]` depuis les props Next.js.
 * Certains passages de prérendu peuvent omettre `params` — ne jamais destructurer sans garde.
 */
export async function getLocaleFromParams(
  params: Promise<LocaleParams> | LocaleParams | undefined,
): Promise<Locale | null> {
  if (params == null) return null;
  const p = await Promise.resolve(params);
  if (!p?.locale) return null;
  return isLocale(p.locale) ? p.locale : null;
}
