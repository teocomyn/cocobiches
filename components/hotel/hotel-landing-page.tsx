import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import type { HotelRecord } from "@/lib/hotels-data";
import { hotelImageAlt } from "@/lib/hotels-data";
import type { HotelLandingContent } from "@/lib/i18n/hotel-landings";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";

export function HotelLandingPageView({
  locale,
  hotel,
  content,
}: {
  locale: Locale;
  hotel: HotelRecord;
  content: HotelLandingContent;
}) {
  return (
    <>
      <header className="relative overflow-hidden bg-cocobiches-marine text-cocobiches-creme">
        <div className="absolute inset-0">
          <Image
            src={hotel.image}
            alt={hotelImageAlt(hotel, locale)}
            fill
            className="object-cover opacity-35"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cocobiches-marine via-cocobiches-marine/90 to-cocobiches-marine/70" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-5 py-24 md:px-10 md:py-32">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cocobiches-creme/70">
            {content.eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-[16ch] text-[2.5rem] font-bold leading-[1.05] tracking-[-0.02em] md:text-[4rem]">
            {content.title}
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.65] text-cocobiches-creme/90">
            {content.lead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={hotel.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-cocobiches-creme px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine transition hover:bg-white"
            >
              {content.ctaBook} →
            </a>
            <Link
              href={href(locale, "/contact")}
              className="inline-flex rounded-full border border-cocobiches-creme/40 px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-creme transition hover:border-cocobiches-creme"
            >
              {locale === "fr" ? "Nous écrire" : "Contact us"}
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 md:py-28">
        <ul className="grid gap-4 md:grid-cols-2">
          {content.highlights.map((item, i) => (
            <FadeIn key={item} delay={i * 0.05}>
              <li className="flex items-start gap-3 rounded-2xl border border-cocobiches-border bg-white p-6 shadow-sm">
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
            {locale === "fr" ? "Quelle maison Cocobiches choisir ?" : "Which Cocobiches house to choose?"}
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
