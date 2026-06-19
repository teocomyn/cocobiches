import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { OncleLouisHeroSlider } from "@/components/hotel/oncle-louis-hero-slider";
import type { HotelRecord } from "@/lib/hotels-data";
import type { HotelLandingContent } from "@/lib/i18n/hotel-landings";
import type { Locale } from "@/lib/i18n-config";
import {
  ONCLE_LOUIS_GALLERY,
  oncleLouisAlt,
  oncleLouisImage,
} from "@/lib/oncle-louis-images";
import { href } from "@/lib/paths";

export function OncleLouisPageView({
  locale,
  hotel,
  content,
}: {
  locale: Locale;
  hotel: HotelRecord;
  content: HotelLandingContent;
}) {
  const isFr = locale === "fr";

  return (
    <>
      <section className="relative overflow-hidden bg-cocobiches-marine-900">
        <OncleLouisHeroSlider locale={locale} />
        <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-cocobiches-creme/80">
            {content.eyebrow}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-5xl lg:text-[3.1rem]">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cocobiches-creme-100 md:text-lg">
            {content.lead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={hotel.bookingUrl}
              className="inline-flex rounded-full bg-cocobiches-creme px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine shadow-lg transition hover:bg-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              {content.ctaBook}
            </a>
            <Link
              href={href(locale, "/contact")}
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/15"
            >
              {isFr ? "Nous écrire" : "Contact us"}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-cocobiches-border/70 bg-cocobiches-creme-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-cocobiches-marine md:text-[2.1rem]">
              {isFr ? "Douze appartements, un seul esprit Cocobiches" : "Twelve apartments, one Cocobiches spirit"}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {isFr
                ? "Studios, T2 et loft : cuisine équipée, salon, linge de maison et ménage assurés par nos équipes."
                : "Studios, one-bedroom units and a loft: fitted kitchen, living room, house linen and housekeeping by our team."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-cocobiches-marine/60">
              {isFr ? "Versailles à pied" : "Versailles on foot"}
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-cocobiches-marine md:text-4xl">
              {isFr ? "Rue de Satory, à deux pas du Château" : "Rue de Satory, steps from the Palace"}
            </h2>
          </FadeIn>
          <div className="mt-10 overflow-hidden rounded-[1.25rem] border border-cocobiches-border/80 bg-cocobiches-creme-50 shadow-card">
            <div className="relative aspect-[21/9] min-h-[220px] w-full md:aspect-[2.4/1]">
              <Image
                src={oncleLouisImage("carte").src}
                alt={oncleLouisAlt("carte", locale)}
                fill
                className="object-cover object-[center_35%]"
                sizes="(min-width: 1024px) 1152px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cocobiches-border/70 bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-cocobiches-marine md:text-4xl">
              {isFr ? "Galerie" : "Gallery"}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cocobiches-muted">
              {isFr
                ? "Façade, appartements et loft · visuels officiels de la résidence."
                : "Façade, apartments and loft · official photography of the residence."}
            </p>
          </FadeIn>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ONCLE_LOUIS_GALLERY.map((key, i) => (
              <FadeIn key={key} delay={i * 0.03}>
                <li className="group overflow-hidden rounded-[1.15rem] border border-cocobiches-border bg-white shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={oncleLouisImage(key).src}
                      alt={oncleLouisAlt(key, locale)}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-28">
        <ul className="grid gap-4 md:grid-cols-2">
          {content.highlights.map((item, i) => (
            <FadeIn key={item} delay={i * 0.05}>
              <li className="flex items-start gap-3 rounded-2xl border border-cocobiches-border bg-cocobiches-creme-50 p-6 shadow-sm">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cocobiches-vert" aria-hidden />
                <span className="text-[0.98rem] leading-relaxed text-cocobiches-muted">{item}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>
    </>
  );
}
