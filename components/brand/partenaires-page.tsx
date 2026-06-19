import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Handshake,
  Mail,
  Percent,
  Sparkles,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { LogoPattern } from "@/components/patterns/logo-pattern";
import { getPartenairesPage } from "@/lib/i18n/partenaires-page";
import type { Locale } from "@/lib/i18n-config";
import { HOTEL_LIST, hotelName } from "@/lib/hotels-data";
import { PARTNERS_EMAIL } from "@/lib/partners-data";
import { href } from "@/lib/paths";

const BENEFIT_ICONS = [Percent, Sparkles, Users, Building2] as const;

export function PartenairesPageView({ locale }: { locale: Locale }) {
  const d = getPartenairesPage(locale);
  const isFr = locale === "fr";

  return (
    <article className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[72svh] max-h-[760px] overflow-hidden bg-cocobiches-marine-900">
        <Image
          src="/hotel-jeu-de-paume/seminaire-1.jpg"
          alt={d.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900 via-cocobiches-marine-900/65 to-cocobiches-marine-900/30"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-36">
          <div className="mx-auto w-full max-w-[1240px]">
            <p className="cb-eyebrow flex items-center gap-2 text-cocobiches-creme/75">
              <Handshake className="size-3.5" strokeWidth={2} aria-hidden />
              {d.hero.eyebrow}
            </p>
            <h1 className="font-display mt-6 max-w-[14ch] text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-white md:text-[4.5rem] lg:text-[5.25rem]">
              {d.hero.title}
              <span className="block text-cocobiches-creme-200">{d.hero.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-[1.02rem] leading-[1.72] text-cocobiches-creme-100 md:text-[1.1rem]">
              {d.hero.lead}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden bg-cocobiches-creme py-20 md:py-28">
        <LogoPattern className="opacity-[0.035]" />
        <div className="relative mx-auto max-w-[880px] px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-display text-[2.1rem] font-bold leading-[1.02] tracking-[-0.025em] text-cocobiches-marine md:text-[3.5rem]">
              {d.intro.quote}
              <span className="block font-light italic text-cocobiches-marine/85">
                {d.intro.quoteAccent}
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-[1.02rem] leading-[1.75] text-cocobiches-muted md:text-lg">
              {d.intro.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-cocobiches-border/70 bg-cocobiches-creme-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-or-muted">{d.benefits.eyebrow}</p>
            <h2 className="font-display mt-4 text-[2rem] font-semibold tracking-[-0.02em] text-cocobiches-marine md:text-[2.75rem]">
              {d.benefits.title}
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {d.benefits.items.map((item, i) => {
              const Icon = BENEFIT_ICONS[i] ?? Handshake;
              return (
                <FadeIn key={item.title} delay={i * 0.05}>
                  <div className="group flex h-full gap-5 rounded-sm border border-cocobiches-marine/10 bg-white p-7 shadow-card ring-1 ring-cocobiches-marine/[0.06] transition duration-500 hover:shadow-lift md:p-8">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cocobiches-marine/12 bg-cocobiches-creme-50 text-cocobiches-marine">
                      <Icon className="size-4.5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-cocobiches-marine md:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-cocobiches-muted">{item.body}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOUSES */}
      <section className="bg-cocobiches-marine py-24 text-cocobiches-creme md:py-32">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-creme/60">{d.houses.eyebrow}</p>
            <h2 className="font-display mt-4 text-[2rem] font-bold md:text-[2.75rem]">{d.houses.title}</h2>
            <p className="mt-3 text-cocobiches-creme/70">{d.houses.subtitle}</p>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HOTEL_LIST.map((hotel, i) => (
              <FadeIn key={hotel.id} delay={i * 0.06}>
                <article className="group overflow-hidden rounded-sm bg-cocobiches-marine-800/40 ring-1 ring-white/10 transition hover:ring-white/20">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={isFr ? hotel.imageAltFr : hotel.imageAltEn}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900/80 to-transparent" />
                    <p className="absolute bottom-4 left-4 font-display text-lg font-bold">
                      {hotelName(hotel, locale)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <span className="text-[0.78rem] text-cocobiches-creme/65">
                      {hotel.rooms} {isFr ? hotel.roomLabelFr : hotel.roomLabelEn}
                    </span>
                    <a
                      href={hotel.bookingUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="rounded-full border border-white/25 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] transition hover:bg-white/10"
                    >
                      {d.houses.bookLabel} →
                    </a>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILES + CONTACT */}
      <section className="bg-cocobiches-creme-50 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-5 md:grid-cols-2 md:gap-20 md:px-10">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.profiles.eyebrow}</p>
            <h2 className="font-display mt-4 text-[1.85rem] font-bold text-cocobiches-marine md:text-[2.25rem]">
              {d.profiles.title}
            </h2>
            <ul className="mt-10 space-y-3">
              {d.profiles.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-sm border border-cocobiches-marine/8 bg-white px-4 py-3.5 shadow-sm"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cocobiches-or" aria-hidden />
                  <span className="text-[0.9rem] leading-relaxed text-cocobiches-ink/85">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex h-full flex-col justify-center rounded-sm border border-cocobiches-marine/10 bg-white p-8 shadow-card md:p-10">
              <Mail className="size-8 text-cocobiches-marine/70" strokeWidth={1.5} aria-hidden />
              <h2 className="font-display mt-6 text-[1.75rem] font-bold text-cocobiches-marine md:text-[2rem]">
                {d.contact.title}
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-cocobiches-muted">{d.contact.body}</p>
              <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine/45">
                {d.contact.emailLabel}
              </p>
              <a
                href={`mailto:${PARTNERS_EMAIL}`}
                className="mt-1 font-mono text-sm font-semibold text-cocobiches-marine hover:underline"
              >
                {PARTNERS_EMAIL}
              </a>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${PARTNERS_EMAIL}?subject=${encodeURIComponent(
                    isFr ? "Demande partenaire Cocobiches" : "Cocobiches partner request",
                  )}`}
                  className="inline-flex justify-center rounded-full bg-cocobiches-marine px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-creme transition hover:bg-cocobiches-marine-800"
                >
                  {d.contact.ctaEmail}
                </a>
                <Link
                  href={href(locale, "/hotel-jeu-de-paume/seminaires")}
                  className="inline-flex justify-center rounded-full border border-cocobiches-marine/20 px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-marine transition hover:border-cocobiches-marine hover:bg-cocobiches-marine/[0.04]"
                >
                  {d.contact.ctaSeminars} →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
