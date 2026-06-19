import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/hotel-jeu-de-paume/salon.jpg";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.home;
  const welcomeParts = h.welcomeLine.split(/\s*·\s*/).filter(Boolean);

  const badges =
    locale === "fr"
      ? ["3 maisons", "À 5 min du Château", "Depuis 2010"]
      : ["3 houses", "5 min from the Palace", "Since 2010"];

  return (
    <section className="relative flex min-h-[100svh] max-h-[880px] items-end overflow-hidden bg-cocobiches-marine-900 md:items-center">
      <div className="absolute inset-0 cb-hero-image">
        <Image
          src={HERO_IMAGE}
          alt={
            locale === "fr"
              ? "Salon de l'Hôtel du Jeu de Paume, lumière chaude et ambiance cosy"
              : "Hôtel du Jeu de Paume lounge, warm light and cosy atmosphere"
          }
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="object-cover object-[center_40%]"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900/95 via-cocobiches-marine-900/45 to-cocobiches-marine-900/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(110deg,rgb(19_19_53/0.6)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_100%,rgb(19_19_53/0.75),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-5 pb-24 pt-32 md:px-10 md:pb-28 md:pt-36">
        <div className="max-w-3xl space-y-7 text-cocobiches-creme">
          <div className="cb-hero-fade flex items-center gap-4">
            <span
              className="h-px w-12 shrink-0 bg-cocobiches-or/80 md:w-16"
              aria-hidden
            />
            <p className="cb-eyebrow text-[0.7rem] text-cocobiches-creme-200/95 md:text-[0.75rem]">
              {h.kicker}
            </p>
          </div>

          <p
            className={cn(
              "cb-hero-fade cb-hero-fade-delay-1 text-xs font-bold uppercase tracking-[0.28em] text-cocobiches-creme-100/95 md:text-sm",
              "drop-shadow-[0_2px_24px_rgb(0_0_0/0.35)]",
            )}
          >
            {welcomeParts.map((word, i) => (
              <span key={`${word}-${i}`} className="inline">
                {i > 0 ? <span className="mx-2 opacity-45">·</span> : null}
                {word}
              </span>
            ))}
          </p>

          <h1 className="cb-hero-fade cb-hero-fade-delay-2 font-display text-[2.55rem] font-semibold uppercase leading-[0.98] tracking-[-0.04em] text-white drop-shadow-[0_4px_48px_rgb(0_0_0/0.45)] md:text-[4.1rem] lg:text-[4.6rem]">
            {h.title}
          </h1>

          <p className="cb-hero-fade cb-hero-fade-delay-3 max-w-xl font-sans text-[1rem] leading-[1.7] text-cocobiches-creme-100 md:text-[1.1rem] md:leading-[1.7]">
            {h.subtitle}
          </p>

          <ul className="cb-hero-fade cb-hero-fade-delay-4 flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
            {badges.map((b, i) => (
              <li
                key={b}
                className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cocobiches-creme-200/85"
              >
                {i > 0 ? (
                  <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-cocobiches-or/80" />
                ) : null}
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="cb-hero-fade cb-hero-fade-delay-5 flex flex-wrap items-center gap-4 pt-3">
            <Link
              href={`${href(locale)}#nos-maisons`}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-cocobiches-creme px-8 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine shadow-[0_16px_45px_rgb(0_0_0/0.25)] transition hover:bg-white"
            >
              <span className="relative z-10">{h.ctaDiscover}</span>
              <span
                aria-hidden
                className="relative z-10 inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href={href(locale, "/hotel-jeu-de-paume/seminaires")}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/[0.06] px-8 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-cocobiches-or/60 hover:bg-white/10"
            >
              {h.ctaSeminars}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
