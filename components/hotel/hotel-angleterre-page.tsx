import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { HotelAngleterreHeroSlider } from "@/components/hotel/hotel-angleterre-hero-slider";
import type { HotelRecord } from "@/lib/hotels-data";
import {
  ANGLETERRE_GALLERY,
  angleterreAlt,
  angleterreImage,
} from "@/lib/angleterre-images";
import type { HotelLandingContent } from "@/lib/i18n/hotel-landings";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";

export function HotelAngleterrePageView({
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
        <HotelAngleterreHeroSlider locale={locale} />
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
              {isFr
                ? "Un petit hôtel de caractère au plus proche du Château"
                : "A small character hotel closest to the Palace"}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {isFr
                ? "Niché dans une petite rue calme au cœur du quartier historique, à quelques pas du Château de Versailles."
                : "Tucked on a quiet street in the historic quarter, a few steps from the Palace of Versailles."}
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
              {isFr ? "À deux minutes du Château" : "Two minutes from the Palace"}
            </h2>
          </FadeIn>
          <div className="mt-10 overflow-hidden rounded-[1.25rem] border border-cocobiches-border/80 bg-cocobiches-creme-50 shadow-card">
            <div className="relative aspect-[21/9] min-h-[220px] w-full md:aspect-[2.4/1]">
              <Image
                src={angleterreImage("carte").src}
                alt={angleterreAlt("carte", locale)}
                fill
                className="object-cover object-[center_35%]"
                sizes="(min-width: 1024px) 1152px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-cocobiches-marine via-cocobiches-marine-800 to-cocobiches-marine-900 py-20 text-white md:py-28">
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <FadeIn>
            <p className="font-display text-3xl font-medium leading-snug md:text-4xl md:leading-tight">
              {isFr
                ? "Plongez dans l'univers singulier de l'Hôtel d'Angleterre"
                : "Step into the singular world of Hôtel d'Angleterre"}
            </p>
            <p className="mt-6 text-base leading-relaxed text-cocobiches-creme-100/90 md:text-lg">
              {isFr
                ? "Des chambres cosy et confortables, au décor parfaitement dosé entre pièces rétro et lignes actuelles."
                : "Cosy, comfortable rooms with decor balanced between retro pieces and contemporary lines."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-cocobiches-border/70 bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-14">
            <FadeIn>
              <h2 className="font-display text-3xl font-semibold leading-tight text-cocobiches-marine md:text-[2.15rem]">
                {isFr ? "Une expérience alignée sur vos envies" : "An experience aligned with what you want"}
              </h2>
              <p className="mt-8 text-base leading-relaxed text-cocobiches-muted md:text-lg">
                {isFr
                  ? "Chaque recoin a été investi pour votre bien-être. Notre équipe est attentive à vos besoins et propose des services soignés et personnalisés."
                  : "Every corner is designed for your comfort. Our team listens and offers thoughtful, personalised service."}
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[1.25rem] border border-cocobiches-border shadow-card">
                <Image
                  src={angleterreImage("experience").src}
                  alt={angleterreAlt("experience", locale)}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 420px, 100vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-cocobiches-marine md:text-4xl">
              {isFr ? "Galerie" : "Gallery"}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cocobiches-muted">
              {isFr
                ? "Façade, chambres et ambiance · les visuels officiels de la maison."
                : "Façade, rooms and atmosphere · the hotel's official photography."}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={href(locale, "/hotel-angleterre/chambres")}
                className="text-sm font-semibold text-cocobiches-marine underline-offset-4 hover:underline"
              >
                {isFr ? "Voir les chambres" : "View rooms"}
              </Link>
              <Link
                href={href(locale, "/hotel-angleterre/galerie")}
                className="text-sm font-semibold text-cocobiches-marine underline-offset-4 hover:underline"
              >
                {isFr ? "Galerie complète" : "Full gallery"}
              </Link>
            </div>
          </FadeIn>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ANGLETERRE_GALLERY.map((key, i) => (
              <FadeIn key={key} delay={i * 0.03}>
                <li className="group overflow-hidden rounded-[1.15rem] border border-cocobiches-border bg-white shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={angleterreImage(key).src}
                      alt={angleterreAlt(key, locale)}
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
        <FadeIn className="mt-12 text-center">
          <Link
            href={href(locale, "/journal/choisir-hotel-cocobiches")}
            className="text-sm font-semibold text-cocobiches-marine underline-offset-4 hover:underline"
          >
            {isFr ? "Quelle maison Cocobiches choisir ?" : "Which Cocobiches house to choose?"}
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
