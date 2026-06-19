import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";
import { hjpAlt, hjpImage } from "@/lib/hjp-images";
import { href } from "@/lib/paths";

export function HjpSeminairesPageView({ locale }: { locale: Locale }) {
  const c = getHjpContent(locale);
  const s = c.seminarsPage;

  return (
    <>
      <section className="relative min-h-[52vh] overflow-hidden bg-cocobiches-marine-900 md:min-h-[56vh]">
        <Image
          src={hjpImage("seminaire1").src}
          alt={hjpAlt("seminaire1", locale)}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-cocobiches-marine-900/95 via-cocobiches-marine-800/70 to-hjp-teal/30"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-5 pb-14 pt-32 md:min-h-[56vh] md:px-8 md:pb-16">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-hjp-mint">
            {s.hero.kicker}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-3xl font-semibold leading-[1.12] text-white md:text-5xl md:leading-tight">
            {s.hero.title}
          </h1>
        </div>
      </section>

      <section className="border-b border-cocobiches-border/70 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8 px-5 md:px-8">
          <FadeIn>
            <p className="text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {s.intro1}
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {s.intro2}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display text-center text-3xl font-semibold text-cocobiches-marine md:text-[2.1rem]">
              {s.atmosphere.title}
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.atmosphere.layouts.map((layout, i) => (
              <FadeIn key={layout.name} delay={i * 0.04}>
                <div className="rounded-2xl border border-cocobiches-border bg-white p-6 shadow-card transition hover:border-hjp-teal/35 hover:shadow-lift">
                  <p className="font-display text-xl font-semibold text-cocobiches-marine">
                    {layout.name}
                  </p>
                  <p className="mt-2 text-sm font-medium text-hjp-teal-dark">{layout.capacity}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cocobiches-border/70 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-cocobiches-marine md:text-3xl">
                {s.tools.title}
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-cocobiches-muted md:text-base">
                {s.tools.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 text-hjp-teal" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="rounded-[1.25rem] border border-hjp-teal/25 bg-gradient-to-br from-hjp-mint/15 to-white p-8 shadow-inner-soft">
                <h2 className="font-display text-2xl font-semibold text-cocobiches-marine md:text-3xl">
                  {s.attentions.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-cocobiches-muted md:text-base">
                  {s.attentions.lead}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-cocobiches-muted">
                  {s.attentions.formulas.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-cocobiches-or" aria-hidden>
                        ·
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-cocobiches-border/80 pt-6 text-sm font-semibold text-cocobiches-marine">
                  {s.attentions.beverages}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-cocobiches-marine via-cocobiches-marine-800 to-cocobiches-marine-900 py-16 text-center md:py-24">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              {s.cta.title}
            </h2>
            <Link
              href={href(locale, "/hotel-jeu-de-paume/seminaires/demande-devis")}
              className="mt-8 inline-flex rounded-full bg-hjp-teal px-10 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition hover:bg-hjp-teal-dark"
            >
              {s.cta.button}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
