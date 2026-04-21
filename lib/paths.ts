import type { Locale } from "./i18n-config";

/** Build a locale-prefixed path. Use "/" or "" for the homepage. */
export function href(locale: Locale, path: string = "/"): string {
  if (path === "/" || path === "") {
    return `/${locale}`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}
