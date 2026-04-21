import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

export function HjpPreparePageView({ locale }: { locale: Locale }) {
  const c = getHjpContent(locale);
  const p = c.preparePage;
  const h = c.home;

  return (
    <>
      <section className="relative min-h-[40vh] overflow-hidden bg-cocobiches-marine-900 md:min-h-[44vh]">
        <Image
          src="/hotel-jeu-de-paume/facade.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-95"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-cocobiches-marine-900/88 via-cocobiches-marine-800/55 to-hjp-teal/20"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[40vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 md:min-h-[44vh] md:px-8 md:pb-14">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-hjp-mint">
            {locale === "fr" ? "Préparer votre séjour" : "Plan your stay"}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            {p.location.title}
          </h1>
        </div>
      </section>

      <section className="border-b border-cocobiches-border/70 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <p className="text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {p.location.body}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-cocobiches-marine md:text-[2.1rem]">
              {h.access.title}
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[h.transport.rer, h.transport.chantiers, h.transport.riveDroite, h.transport.road].map(
              (block) => (
                <FadeIn key={block.title}>
                  <div className="h-full rounded-2xl border border-cocobiches-border bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-cocobiches-marine">{block.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cocobiches-muted">
                      {block.body}
                    </p>
                  </div>
                </FadeIn>
              ),
            )}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-hjp-teal/25 bg-white p-6">
                <h3 className="text-sm font-bold text-cocobiches-marine">
                  {p.parkingExtra.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cocobiches-muted">
                  {p.parkingExtra.items.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-hjp-teal" aria-hidden>
                        ·
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
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

      <section className="border-t border-cocobiches-border/70 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-cocobiches-marine md:text-3xl">
              {p.discover.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {p.discover.body}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display text-center text-2xl font-semibold text-cocobiches-marine md:text-3xl">
              {locale === "fr" ? "Questions fréquentes" : "Frequently asked questions"}
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-3">
            {p.faq.map((item, i) => (
              <FadeIn key={item.q} delay={i * 0.02}>
                <details
                  className={cn(
                    "group rounded-2xl border border-cocobiches-border bg-white px-5 py-4 shadow-sm",
                    "open:border-hjp-teal/30 open:shadow-card",
                  )}
                >
                  <summary className="cursor-pointer list-none font-semibold text-cocobiches-marine [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-3">
                      {item.q}
                      <span className="text-hjp-teal transition group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-cocobiches-muted">{item.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cocobiches-border/70 bg-gradient-to-b from-white to-cocobiches-creme-50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <FadeIn>
            <p className="text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {p.contactCta}
            </p>
            <Link
              href={href(locale, "/contact")}
              className="mt-8 inline-flex rounded-full bg-cocobiches-marine px-8 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-cocobiches-marine-800"
            >
              {locale === "fr" ? "Nous écrire" : "Contact us"}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
