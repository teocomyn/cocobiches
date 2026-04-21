import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";
import { href } from "@/lib/paths";

export function HjpHome({ locale }: { locale: Locale }) {
  const c = getHjpContent(locale);
  const h = c.home;

  return (
    <>
      {/* Hero · salon */}
      <section className="relative overflow-hidden bg-cocobiches-marine-900">
        <div className="absolute inset-0">
          <Image
            src="/hotel-jeu-de-paume/salon.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-cocobiches-marine-900/95 via-cocobiches-marine-900/55 to-hjp-teal/25"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgb(42_157_143/0.25),transparent_60%)]"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-hjp-mint/90">
            {h.hero.kicker}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-5xl lg:text-[3.1rem]">
            {h.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cocobiches-creme-100 md:text-lg">
            {h.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.hotel-jeudepaume.fr/"
              className="inline-flex rounded-full bg-hjp-teal px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-cocobiches-marine-900/30 transition hover:bg-hjp-teal-dark"
              rel="noopener noreferrer"
              target="_blank"
            >
              {c.nav.book}
            </a>
            <a
              href={`tel:${c.footer.phone.replace(/\s/g, "")}`}
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm hover:bg-white/15"
            >
              {c.nav.call}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-cocobiches-border/70 bg-cocobiches-creme-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-cocobiches-marine md:text-[2.1rem]">
              {h.intro.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {h.intro.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Carte + légendes */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-hjp-teal-dark">
                  {h.map.caption}
                </p>
                <h2 className="font-display mt-2 text-3xl font-semibold text-cocobiches-marine md:text-4xl">
                  {h.map.title}
                </h2>
              </div>
            </div>
          </FadeIn>
          <div className="mt-10 overflow-hidden rounded-[1.25rem] border border-cocobiches-border/80 bg-cocobiches-creme-50 shadow-card">
            <div className="relative aspect-[21/9] min-h-[220px] w-full md:aspect-[2.4/1]">
              <Image
                src="/hotel-jeu-de-paume/carte-versailles.png"
                alt=""
                fill
                className="object-cover object-[center_35%]"
                sizes="(min-width: 1024px) 1152px, 100vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900/35 to-transparent"
                aria-hidden
              />
            </div>
            <div className="flex flex-wrap gap-2 border-t border-cocobiches-border/60 p-5 md:p-6">
              {h.map.pins.map((pin) => (
                <span
                  key={pin}
                  className="rounded-full border border-cocobiches-border bg-white px-3 py-1.5 text-[0.7rem] font-medium text-cocobiches-marine"
                >
                  {pin}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cocobiches-marine via-cocobiches-marine-800 to-cocobiches-marine-900 py-20 text-white md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgb(196_165_116/0.15),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <FadeIn>
            <p className="font-display text-3xl font-medium leading-snug md:text-4xl md:leading-tight">
              {h.quote.line1}
              <br />
              <span className="text-hjp-mint">{h.quote.line2}</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Concierge */}
      <section className="bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-start md:gap-16 md:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-cocobiches-marine md:text-[2.1rem]">
              {h.concierge.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {h.concierge.body}
            </p>
            <Link
              href={href(locale, "/contact")}
              className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-hjp-teal-dark hover:underline"
            >
              {locale === "fr" ? "Écrire à la réception" : "Contact the front desk"} →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Charme */}
      <section className="border-y border-cocobiches-border/70 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display text-center text-3xl font-semibold leading-tight text-cocobiches-marine md:text-[2.15rem]">
              {h.charm.title}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {h.charm.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Accès */}
      <section className="bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-cocobiches-marine md:text-[2.1rem]">
              {h.access.title}
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              h.transport.rer,
              h.transport.chantiers,
              h.transport.riveDroite,
              h.transport.road,
            ].map((block) => (
              <FadeIn key={block.title}>
                <div className="h-full rounded-2xl border border-cocobiches-border bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-cocobiches-marine">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cocobiches-muted">
                    {block.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-hjp-teal/25 bg-white p-6">
                <h3 className="text-sm font-bold text-cocobiches-marine">
                  {h.parking.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cocobiches-muted">
                  {h.parking.cathedral}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cocobiches-muted">
                  {h.parking.street}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="rounded-2xl border border-cocobiches-border bg-cocobiches-marine p-6 text-cocobiches-creme-100">
                <h3 className="text-sm font-bold text-white">{h.taxi.title}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>{h.taxi.paris}</li>
                  <li>{h.taxi.orly}</li>
                  <li>{h.taxi.cdg}</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
