"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookMenu } from "@/components/layout/book-menu";
import { CocobichesMark } from "@/components/logo/cocobiches-mark";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

const easeCb = "cubic-bezier(0.22, 1, 0.36, 1)";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const n = dict.nav;

  const links = [
    { href: href(locale, "/"), label: n.home },
    { href: href(locale, "/la-marque"), label: n.brand },
    { href: href(locale, "/engagements"), label: n.commitments },
    { href: href(locale, "/journal"), label: n.blog },
    { href: href(locale, "/presse"), label: n.press },
    { href: href(locale, "/partenaires"), label: n.partners },
    { href: href(locale, "/contact"), label: n.contact },
  ];

  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const y = window.scrollY > 24;
      setScrolled(y);
      root.style.setProperty("--site-header-height", y ? "3.5rem" : "4.5rem");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      root.style.removeProperty("--site-header-height");
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b text-cocobiches-creme transition-[height,background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-cocobiches-creme/[0.15] bg-[rgba(45,48,119,0.98)]"
          : "border-white/[0.07] bg-cocobiches-marine/95",
      )}
      style={{ transitionTimingFunction: easeCb }}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 transition-[height] duration-300 md:px-8",
          scrolled ? "h-14" : "h-[4.5rem]",
        )}
        style={{ transitionTimingFunction: easeCb }}
      >
        <Link
          href={href(locale)}
          className="flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocobiches-creme"
        >
          <CocobichesMark variant="creme" className="h-9 md:h-10" priority />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex"
          aria-label="Principal"
        >
          {links.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2 text-[0.8rem] font-medium tracking-wide text-cocobiches-creme-100 transition-colors duration-300 hover:text-white"
              style={{ transitionTimingFunction: easeCb }}
            >
              <span className="relative">
                {item.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-cocobiches-or transition-[width] duration-300 group-hover:w-full"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <BookMenu
            locale={locale}
            label={n.bookCta}
            className="hidden md:block"
            buttonClassName={cn(
              "rounded-full bg-cocobiches-creme px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-marine shadow-[0_8px_30px_rgb(0_0_0/0.18)] transition hover:scale-[1.02] hover:bg-white",
            )}
          />
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
        <nav className="mx-auto flex max-w-[1440px] flex-col gap-0.5 px-4 py-5" aria-label="Mobile">
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
          <BookMenu
            locale={locale}
            label={n.bookCta}
            className="mt-3 md:hidden"
            buttonClassName="w-full rounded-full bg-cocobiches-creme px-4 py-3.5 text-center text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine"
          />
        </nav>
      </div>
    </header>
  );
}
