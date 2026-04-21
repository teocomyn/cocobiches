import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";

export function HjpHotelPageView({ locale }: { locale: Locale }) {
  const c = getHjpContent(locale);
  const p = c.hotelPage;

  return (
    <>
      <section className="relative min-h-[48vh] overflow-hidden bg-cocobiches-marine-900 md:min-h-[52vh]">
        <Image
          src="/hotel-jeu-de-paume/facade.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900 via-cocobiches-marine-900/45 to-hjp-teal/20"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[48vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-32 md:min-h-[52vh] md:px-8 md:pb-16">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-hjp-mint">
            {p.intro.lead}
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            {p.intro.title}
          </h1>
        </div>
      </section>

      <section className="border-b border-cocobiches-border/70 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <p className="text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {p.intro.body}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {p.rooms.map((room, i) => (
              <FadeIn key={room.id} delay={i * 0.04}>
                <article className="flex h-full flex-col rounded-[1.25rem] border border-cocobiches-border bg-white p-7 shadow-card md:p-8">
                  <h2 className="font-display text-2xl font-semibold text-cocobiches-marine">
                    {room.name}
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {room.specs.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-cocobiches-marine/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-cocobiches-marine"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-cocobiches-muted">
                    {room.desc}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-cocobiches-border/80 pt-6 text-sm text-cocobiches-muted">
                    {room.amenities.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="text-hjp-teal" aria-hidden>
                          ✓
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cocobiches-border/70 bg-gradient-to-b from-white to-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display text-center text-3xl font-semibold text-cocobiches-marine md:text-[2rem]">
              {p.servicesTitle}
            </h2>
          </FadeIn>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.services.map((s, i) => (
              <FadeIn key={s} delay={i * 0.03}>
                <li className="rounded-2xl border border-cocobiches-border/80 bg-white px-4 py-4 text-center text-sm font-medium text-cocobiches-marine shadow-sm">
                  {s}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
