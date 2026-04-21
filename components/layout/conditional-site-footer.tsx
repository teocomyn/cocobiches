"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";

export function ConditionalSiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  if (pathname?.includes("/hotel-jeu-de-paume")) {
    return null;
  }
  return <SiteFooter locale={locale} dict={dict} />;
}
