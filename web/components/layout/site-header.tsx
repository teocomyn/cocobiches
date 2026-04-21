"use client";

import Link from "next/link";
import { useState } from "react";
import { CocobichesMark } from "@/components/logo/cocobiches-mark";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const n = dict.nav;

  const links = [
    { href: href(locale, "/"), label: n.home },
    { href: href(locale, "/la-marque"), label: n.brand },
    { href: href(locale, "/engagements"), label: n.commitments },
    { href: href(locale, "/blog"), label: n.blog },
    { href: href(locale, "/presse"), label: n.press },
    { href: href(locale, "/partenaires"), label: n.partners },
    { href: href(locale, "/contact"), label: n.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-cocobiches-marine/92 text-cocobiches-creme shadow-[0_1px_0_rgb(255_255_255/0.04)_inset] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[var(--site-header-height)] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link
          href={href(locale)}
          className="flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocobiches-creme"
        >
          <CocobichesMark variant="creme" className="h-7 md:h-8" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {links.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2 text-[0.8rem] font-medium tracking-wide text-cocobiches-creme-100 transition hover:text-white"
            >
              <span className="relative">
                {item.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cocobiches-or to-cocobiches-or-muted transition-all duration-300 group-hover:w-full"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <a
            href="https://www.hotel-jeudepaume.fr/"
            className="hidden rounded-full bg-cocobiches-creme px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-marine shadow-[0_8px_30px_rgb(0_0_0/0.18)] transition hover:bg-white md:inline-flex"
            rel="noopener noreferrer"
            target="_blank"
          >
            {n.book}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cocobiches-creme transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? n.menuClose : n.menuOpen}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn("block h-0.5 w-5 bg-current transition", open && "opacity-0")}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-cocobiches-marine-800/98 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-0.5 px-4 py-5" aria-label="Mobile">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-cocobiches-creme-100 transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.hotel-jeudepaume.fr/"
            className="mt-3 rounded-full bg-cocobiches-creme px-4 py-3.5 text-center text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine"
            rel="noopener noreferrer"
            target="_blank"
          >
            {n.book}
          </a>
        </nav>
      </div>
    </header>
  );
}
