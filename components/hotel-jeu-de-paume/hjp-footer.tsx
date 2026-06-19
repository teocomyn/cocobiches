import Link from "next/link";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";
import { COCO_INSTAGRAM_URL, COCO_LINKEDIN_URL } from "@/lib/cocobiches-social";
import { href } from "@/lib/paths";

export function HjpFooter({ locale }: { locale: Locale }) {
  const f = getHjpContent(locale).footer;
  const t = getHjpContent(locale).nav;

  return (
    <footer className="border-t border-cocobiches-border bg-gradient-to-b from-white to-cocobiches-creme-50">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-cocobiches-marine">
              {t.brand}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cocobiches-muted">
              {f.address}
            </p>
            <p className="mt-2">
              <a
                className="text-sm font-semibold text-cocobiches-marine hover:underline"
                href={`tel:${f.phone.replace(/\s/g, "")}`}
              >
                {f.phone}
              </a>
            </p>
            <p className="mt-1">
              <a
                className="text-sm text-cocobiches-muted hover:text-cocobiches-marine hover:underline"
                href={`mailto:${f.email}`}
              >
                {f.email}
              </a>
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-marine">
              <a
                href={COCO_LINKEDIN_URL}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-hjp-teal-dark"
              >
                LinkedIn
              </a>
              <a
                href={COCO_INSTAGRAM_URL}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-hjp-teal-dark"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-cocobiches-border/80 bg-white p-6 shadow-card">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cocobiches-muted">
              {f.reviews}
            </p>
            <p className="mt-2 text-2xl tracking-tight text-amber-500" aria-hidden>
              ★★★★★
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=H%C3%B4tel+du+Jeu+de+Paume+Versailles"
              className="mt-4 inline-flex text-sm font-semibold text-cocobiches-marine hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              {f.googleLabel} →
            </a>
          </div>

          <div className="space-y-2 text-sm text-cocobiches-muted">
            <Link
              href={href(locale, "/mentions-legales")}
              className="block hover:text-cocobiches-marine"
            >
              {f.legal}
            </Link>
            <Link
              href={href(locale, "/politique-confidentialite")}
              className="block hover:text-cocobiches-marine"
            >
              {f.privacy}
            </Link>
            <Link
              href={`${href(locale, "/politique-confidentialite")}#cookies`}
              className="block hover:text-cocobiches-marine"
            >
              {f.cookies}
            </Link>
            <span className="block text-cocobiches-muted/80">{f.customize}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
