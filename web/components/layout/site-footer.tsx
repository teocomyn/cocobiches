import Link from "next/link";
import { CocobichesMark } from "@/components/logo/cocobiches-mark";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { COCO_INSTAGRAM_URL, COCO_LINKEDIN_URL } from "@/lib/cocobiches-social";
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

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-cocobiches-marine-800 to-cocobiches-marine-900 text-cocobiches-creme-50">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cocobiches-or/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-8 md:py-24">
        <div className="space-y-6 md:col-span-5">
          <Link href={href(locale)} className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cocobiches-or/80">
            <CocobichesMark variant="creme" className="h-10 md:h-11" />
          </Link>
          <p className="max-w-sm font-display text-xl font-medium leading-snug text-cocobiches-creme-100">
            {f.tagline}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-cocobiches-or/90">
            {f.group}
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                className="text-cocobiches-creme-100 transition hover:text-white"
                href="https://www.hotel-angleterre.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Hôtel d&apos;Angleterre
              </a>
            </li>
            <li>
              <a
                className="text-cocobiches-creme-100 transition hover:text-white"
                href="https://www.hotel-jeudepaume.fr/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Hôtel du Jeu de Paume
              </a>
            </li>
            <li>
              <a
                className="text-cocobiches-creme-100 transition hover:text-white"
                href="https://www.apparts-oncle-louis.fr/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Apparts de l&apos;Oncle Louis
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-cocobiches-or/90">
            {f.legal}
          </p>
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
            <li>
              <Link
                className="text-cocobiches-creme-100 transition hover:text-white"
                href={href(locale, "/contact")}
              >
                {dict.nav.contact}
              </Link>
            </li>
          </ul>
          <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs tracking-wide text-cocobiches-creme-200/90">
            <span>{f.follow}</span>
            <span aria-hidden>·</span>
            <a
              className="text-cocobiches-creme-100 transition hover:text-white"
              href={COCO_LINKEDIN_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <span aria-hidden>·</span>
            <a
              className="text-cocobiches-creme-100 transition hover:text-white"
              href={COCO_INSTAGRAM_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/[0.06] py-8 text-center text-[0.7rem] tracking-wide text-cocobiches-creme-200/80">
        © {year} Cocobiches — {f.rights}
      </div>
    </footer>
  );
}
