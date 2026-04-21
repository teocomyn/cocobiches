import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import { HJP_BOOKING_URL } from "@/lib/cocobiches-social";
import { getHjpContent } from "@/lib/hjp-content";

export function HjpOffresPageView({ locale }: { locale: Locale }) {
  const c = getHjpContent(locale);
  const o = c.offersPage;

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
            {o.hero.kicker}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            {o.hero.title}
          </h1>
        </div>
      </section>

      <section className="border-b border-cocobiches-border/70 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <p className="text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {o.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {o.items.map((item) => (
              <FadeIn key={item.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-cocobiches-border bg-white shadow-sm">
                  {item.id === "royal" ? (
                    <>
                      <div className="relative aspect-[21/10] w-full shrink-0">
                        <Image
                          src="/hotel-jeu-de-paume/chateau-versailles.png"
                          alt={
                            locale === "fr"
                              ? "Château de Versailles, vue depuis les jardins"
                              : "Palace of Versailles from the gardens"
                          }
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-8">
                        <h2 className="font-display text-xl font-semibold text-cocobiches-marine md:text-2xl">
                          {item.title}
                        </h2>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-cocobiches-muted md:text-base">
                          {item.lines.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full flex-col p-8">
                      <h2 className="font-display text-xl font-semibold text-cocobiches-marine md:text-2xl">
                        {item.title}
                      </h2>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-cocobiches-muted md:text-base">
                        {item.lines.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-12 flex justify-center">
              <a
                href={HJP_BOOKING_URL}
                className="inline-flex rounded-full bg-hjp-teal px-8 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-cocobiches-marine-900/15 transition hover:bg-hjp-teal-dark"
                rel="noopener noreferrer"
                target="_blank"
              >
                {o.bookCta}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
