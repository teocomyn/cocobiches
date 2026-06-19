import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { LogoPattern } from "@/components/patterns/logo-pattern";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import {
  HOTEL_LIST,
  hotelImageAlt,
  hotelInternalHref,
  hotelName,
  hotelTag,
} from "@/lib/hotels-data";

const ACCENTS: Record<string, string> = {
  angleterre: "from-cocobiches-marine-900/90 via-cocobiches-marine-900/35 to-transparent",
  jeudepaume: "from-cocobiches-marine-900/85 via-cocobiches-marine-900/30 to-transparent",
  onclelouis: "from-cocobiches-marine-900/90 via-cocobiches-marine-900/35 to-transparent",
};

const POSITIONS: Record<string, string> = {
  angleterre: "object-[center_45%]",
  jeudepaume: "object-center",
  onclelouis: "object-[center_40%]",
};

export function HotelsSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const h = dict.home;

  return (
    <section
      id="nos-maisons"
      className="relative overflow-hidden bg-cocobiches-creme-50 py-24 md:py-36"
    >
      <LogoPattern className="opacity-[0.04]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-cocobiches-or-muted">
                <span className="h-px w-10 bg-current opacity-70" aria-hidden />
                <p className="cb-eyebrow">{h.hotelsEyebrow}</p>
              </div>
              <h2 className="font-display mt-5 text-[2.35rem] font-semibold tracking-[-0.025em] text-cocobiches-marine md:text-[3.15rem] md:leading-[1.05]">
                {h.hotelsTitle}
              </h2>
            </div>
            <p className="max-w-md text-[1.02rem] leading-relaxed text-cocobiches-muted md:text-right">
              {h.hotelsLead}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-7">
          {HOTEL_LIST.map((hotel, i) => {
            const copy = h[hotel.id];
            const features: readonly string[] = copy.features;

            return (
              <FadeIn key={hotel.id} delay={i * 0.08}>
                <article className="cb-card group relative flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-card ring-1 ring-cocobiches-marine/[0.1] hover:shadow-lift hover:ring-cocobiches-marine/20">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={hotelImageAlt(hotel, locale)}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className={`object-cover transition duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] ${POSITIONS[hotel.id]}`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${ACCENTS[hotel.id]}`}
                      aria-hidden
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-white/80">
                        {hotelTag(hotel, locale)}
                      </p>
                      <h3 className="font-display mt-2 text-[1.55rem] font-semibold leading-[1.12] tracking-[-0.022em] md:text-[1.7rem]">
                        {hotelName(hotel, locale)}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-6 p-7 md:p-8">
                    <p className="text-[0.95rem] leading-[1.65] text-cocobiches-muted">{copy.desc}</p>
                    <ul className="space-y-2.5 border-t border-cocobiches-marine/10 pt-5">
                      {features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-[0.85rem] leading-snug text-cocobiches-ink/80"
                        >
                          <span
                            aria-hidden
                            className="mt-[0.55rem] inline-block h-1 w-1 shrink-0 rounded-full bg-cocobiches-or-muted/90"
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={hotelInternalHref(locale, hotel.id)}
                      className="group/cta mt-auto inline-flex items-center justify-between gap-2 rounded-full border border-cocobiches-marine/15 bg-cocobiches-marine/[0.03] py-3.5 pl-5 pr-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine transition hover:border-cocobiches-marine hover:bg-cocobiches-marine hover:text-white"
                    >
                      <span>{copy.cta}</span>
                      <span aria-hidden className="text-lg leading-none transition-transform group-hover/cta:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
