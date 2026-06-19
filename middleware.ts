import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "./lib/i18n-config";

function pathnameHasLocale(pathname: string): boolean {
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

function localeFromPath(pathname: string): string | null {
  const seg = pathname.split("/")[1];
  return seg && isLocale(seg) ? seg : null;
}

function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  const primary = header.split(",")[0]?.split(";")[0]?.trim().toLowerCase();
  if (primary?.startsWith("en")) return "en";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (pathnameHasLocale(pathname)) {
    const response = NextResponse.next();
    const locale = localeFromPath(pathname);
    if (locale) response.headers.set("x-locale", locale);
    return response;
  }

  const locale = pathname === "/" ? localeFromAcceptLanguage(request.headers.get("accept-language")) : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
