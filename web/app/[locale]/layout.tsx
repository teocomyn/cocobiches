import { notFound } from "next/navigation";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { ConditionalSiteFooter } from "@/components/layout/conditional-site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HtmlLang } from "@/components/shell/html-lang";
import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { getLocaleFromParams } from "@/lib/locale-params";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }> | undefined;
}>) {
  const locale = await getLocaleFromParams(params);
  if (!locale) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <HtmlLang locale={locale} />
      <div className="relative z-10 flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cocobiches-creme focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cocobiches-marine focus:shadow-lg"
        >
          {dict.nav.skip}
        </a>
        <SiteHeader locale={locale} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <ConditionalSiteFooter locale={locale} dict={dict} />
        <CookieBanner dict={dict} locale={locale} />
      </div>
    </>
  );
}
