import Link from "next/link";
import { CocobichesMark } from "@/components/logo/cocobiches-mark";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { COCO_INSTAGRAM_URL, COCO_LINKEDIN_URL } from "@/lib/cocobiches-social";
import { HOTEL_LIST, hotelInternalHref, hotelName } from "@/lib/hotels-data";
import { href } from "@/lib/paths";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const f = dict.footer;
  const year = new Date().getFullYear();

  const exploreLinks = [
    { href: href(locale, "/la-marque"), label: dict.nav.brand },
    { href: href(locale, "/engagements"), label: dict.nav.commitments },
    { href: href(locale, "/journal"), label: dict.nav.blog },
    { href: href(locale, "/presse"), label: dict.nav.press },
    { href: href(locale, "/partenaires"), label: dict.nav.partners },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-cocobiches-marine-800 to-cocobiches-marine-900 text-cocobiches-creme-50">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cocobiches-or/55 to-transparent"
        aria-hidden
      />

      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 py-20 md:grid-cols-12 md:gap-12 md:px-10 md:py-24">
        <div className="space-y-6 md:col-span-5">
          <Link
            href={href(locale)}
            className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocobiches-or/80"
          >
            <CocobichesMark variant="creme" className="h-11" />
          </Link>
          <p className="max-w-sm font-display text-[1.3rem] font-medium leading-[1.35] text-cocobiches-creme-100 md:text-[1.45rem]">
            {f.tagline}
          </p>
          <p className="max-w-sm text-[0.85rem] leading-[1.65] text-cocobiches-creme-200/80">
            {f.signature}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-creme-100 transition hover:border-cocobiches-or/60 hover:text-white"
              href={COCO_LINKEDIN_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
              <span aria-hidden>↗</span>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-creme-100 transition hover:border-cocobiches-or/60 hover:text-white"
              href={COCO_INSTAGRAM_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="cb-eyebrow text-cocobiches-or/90">{f.group}</p>
          <ul className="mt-6 space-y-3.5 text-sm">
            {HOTEL_LIST.map((hotel) => (
              <li key={hotel.id}>
                <Link
                  className="group inline-flex items-center gap-2 text-cocobiches-creme-100 transition hover:text-white"
                  href={hotelInternalHref(locale, hotel.id)}
                >
                  <span>{hotelName(hotel, locale)}</span>
                  <span aria-hidden className="opacity-50 group-hover:opacity-100">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="cb-eyebrow mt-10 text-cocobiches-or/90">{f.explore}</p>
          <ul className="mt-6 space-y-3 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link
                  className="text-cocobiches-creme-100 transition hover:text-white"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="cb-eyebrow text-cocobiches-or/90">{f.contactTitle}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                className="text-cocobiches-creme-100 transition hover:text-white"
                href={`mailto:${f.contactEmail}`}
              >
                {f.contactEmail}
              </a>
            </li>
            <li className="text-cocobiches-creme-100">{f.contactPhone}</li>
            <li className="text-cocobiches-creme-200/80">{f.addressLine}</li>
            <li>
              <Link
                className="inline-flex items-center gap-2 text-cocobiches-creme-100 transition hover:text-white"
                href={href(locale, "/contact")}
              >
                <span>{dict.nav.contact}</span>
                <span aria-hidden>→</span>
              </Link>
            </li>
          </ul>

          <p className="cb-eyebrow mt-10 text-cocobiches-or/90">{f.legal}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <Link
                className="text-cocobiches-creme-100 transition hover:text-white"
                href={href(locale, "/mentions-legales")}
              >
                {f.mentions}
              </Link>
            </li>
            <li>
              <Link
                className="text-cocobiches-creme-100 transition hover:text-white"
                href={href(locale, "/politique-confidentialite")}
              >
                {f.privacyLink}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-4 px-5 py-6 text-[0.72rem] tracking-wide text-cocobiches-creme-200/75 md:flex-row md:items-center md:gap-6 md:px-10">
          <span>© {year} Cocobiches · {f.rights}</span>
          <p className="text-cocobiches-creme-200/70">
            {f.madeBy}{" "}
            <a
              href="https://teocomyn.com/"
              className="text-cocobiches-creme-100 underline decoration-white/25 underline-offset-[3px] transition hover:text-white hover:decoration-white/50"
              rel="noopener noreferrer"
              target="_blank"
            >
              Teo Comyn
            </a>
            {" - "}
            <a
              href="https://experaise.com/"
              className="text-cocobiches-creme-100 underline decoration-white/25 underline-offset-[3px] transition hover:text-white hover:decoration-white/50"
              rel="noopener noreferrer"
              target="_blank"
            >
              Experaise
            </a>
          </p>
          <span className="text-cocobiches-creme-200/55">
            Versailles · France · 🤍
          </span>
        </div>
      </div>
    </footer>
  );
}
