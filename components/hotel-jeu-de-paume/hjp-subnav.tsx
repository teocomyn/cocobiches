"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

type NavId = "home" | "hotel" | "chambres" | "galerie" | "vivre" | "offers" | "seminars" | "devis" | "prepare";

export function HjpSubNav({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  const active: NavId = pathname?.includes("/demande-devis")
    ? "devis"
    : pathname?.includes("/seminaires")
      ? "seminars"
      : pathname?.includes("/preparer-votre-sejour")
        ? "prepare"
        : pathname?.includes("/offres")
          ? "offers"
          : pathname?.includes("/galerie")
            ? "galerie"
            : pathname?.includes("/chambres")
              ? "chambres"
              : pathname?.includes("/l-hotel")
                ? "hotel"
                : pathname?.includes("/vivre-versailles")
                  ? "vivre"
                  : "home";

  const t = getHjpContent(locale).nav;
  const base = "/hotel-jeu-de-paume";

  const navItems: Array<{ id: NavId; label: string; href: string }> = [
    { id: "home", label: t.home, href: href(locale, base) },
    { id: "hotel", label: t.hotel, href: href(locale, `${base}/l-hotel`) },
    { id: "chambres", label: t.chambres, href: href(locale, `${base}/chambres`) },
    { id: "galerie", label: t.galerie, href: href(locale, `${base}/galerie`) },
    { id: "vivre", label: t.vivre, href: href(locale, `${base}/vivre-versailles`) },
    { id: "offers", label: t.offers, href: href(locale, `${base}/offres`) },
    { id: "seminars", label: t.seminars, href: href(locale, `${base}/seminaires`) },
    { id: "devis", label: t.devis, href: href(locale, `${base}/seminaires/demande-devis`) },
    { id: "prepare", label: t.prepare, href: href(locale, `${base}/preparer-votre-sejour`) },
  ];

  return (
    <div className="border-b border-cocobiches-border/80 bg-cocobiches-creme-50 md:sticky md:top-[var(--site-header-height)] md:z-30 md:bg-cocobiches-creme-50/95 md:backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 py-3 md:px-8">
        <Link
          href={href(locale)}
          className="inline-block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cocobiches-muted transition hover:text-cocobiches-marine"
        >
          ← {t.back}
        </Link>
        <nav
          className="-mx-5 mt-3 flex items-center gap-1 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:mt-0 md:flex-wrap md:justify-end md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
          aria-label={t.brand}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition",
                item.id === active
                  ? "bg-cocobiches-marine text-white shadow-sm"
                  : "text-cocobiches-muted hover:bg-white/80 hover:text-cocobiches-marine",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
