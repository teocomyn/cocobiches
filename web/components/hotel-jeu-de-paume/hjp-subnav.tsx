"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

type NavId = "home" | "hotel" | "vivre" | "offers" | "seminars" | "prepare";

export function HjpSubNav({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  const active: NavId = pathname?.includes("/seminaires")
    ? "seminars"
    : pathname?.includes("/preparer-votre-sejour")
      ? "prepare"
      : pathname?.includes("/offres")
        ? "offers"
        : pathname?.includes("/l-hotel")
          ? "hotel"
          : pathname?.includes("/vivre-versailles")
            ? "vivre"
            : "home";

  const t = getHjpContent(locale).nav;
  const base = "/hotel-jeu-de-paume";

  const navItems: Array<{
    id: NavId;
    label: string;
    href: string;
  }> = [
    { id: "home", label: t.home, href: href(locale, base) },
    { id: "hotel", label: t.hotel, href: href(locale, `${base}/l-hotel`) },
    {
      id: "vivre",
      label: t.vivre,
      href: href(locale, `${base}/vivre-versailles`),
    },
    {
      id: "offers",
      label: t.offers,
      href: href(locale, `${base}/offres`),
    },
    {
      id: "seminars",
      label: t.seminars,
      href: href(locale, `${base}/seminaires`),
    },
    {
      id: "prepare",
      label: t.prepare,
      href: href(locale, `${base}/preparer-votre-sejour`),
    },
  ];

  return (
    <div className="sticky top-[var(--site-header-height)] z-30 border-b border-cocobiches-border/80 bg-cocobiches-creme-50/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:justify-between md:px-8">
        <Link
          href={href(locale)}
          className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cocobiches-muted transition hover:text-cocobiches-marine"
        >
          ← {t.back}
        </Link>
        <p className="font-display text-lg font-semibold text-cocobiches-marine md:hidden">
          {t.brand}
        </p>
        <nav
          className="flex flex-wrap items-center gap-x-1 gap-y-2 md:justify-end"
          aria-label={t.brand}
        >
          {navItems.map((item) => {
            const isActive = item.id === active;
            const className = cn(
              "rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition",
              isActive
                ? "bg-cocobiches-marine text-white shadow-sm"
                : "text-cocobiches-muted hover:bg-white/80 hover:text-cocobiches-marine",
            );
            return (
              <Link key={item.id} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
