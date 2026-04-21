"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n-config";
import { isLocale, locales } from "@/lib/i18n-config";

const labels: Record<Locale, string> = { fr: "FR", en: "EN" };

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const restSegments =
    first && isLocale(first) ? segments.slice(1) : segments;
  const rest = restSegments.length ? `/${restSegments.join("/")}` : "";

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-white/[0.12] bg-black/10 p-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] backdrop-blur-md"
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          className={cn(
            "rounded-full px-2.5 py-1.5 transition-all duration-300",
            l === locale
              ? "bg-cocobiches-creme text-cocobiches-marine shadow-[0_2px_12px_rgb(0_0_0/0.15)]"
              : "text-cocobiches-creme-100 hover:text-white",
          )}
          hrefLang={l}
          lang={l}
        >
          {labels[l]}
        </Link>
      ))}
    </div>
  );
}
