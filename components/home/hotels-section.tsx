import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { LogoPattern } from "@/components/patterns/logo-pattern";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href as localeHref } from "@/lib/paths";

const HOTELS = [
  {
    key: "angleterre" as const,
    url: "https://www.hotel-angleterre.com/",
    image: "/hotel-jeu-de-paume/chateau-versailles.png",
    imagePosition: "object-[center_45%]",
    tone: "from-cocobiches-marine-900/85 via-cocobiches-marine-900/35 to-transparent",
  },
  {
    key: "jeudepaume" as const,
    url: "__INTERNAL_JDP__",
    image: "/hotel-jeu-de-paume/facade.png",
    imagePosition: "object-center",
    tone: "from-cocobiches-marine-900/80 via-cocobiches-marine-900/30 to-transparent",
  },
  {
    key: "onclelouis" as const,
    url: "https://www.apparts-oncle-louis.fr/",
    image: "/hotel-jeu-de-paume/carte-versailles.png",
    imagePosition: "object-[center_40%]",
    tone: "from-cocobiches-marine-900/85 via-cocobiches-marine-900/35 to-transparent",
  },
];

export function HotelsSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const h = dict.home;

  return (
    <section
      id="nos-maisons"
      className="relative overflow-hidden bg-cocobiches-creme-50 py-24 md:py-32"
    >
      <LogoPattern className="opacity-[0.035]" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-cocobiches-or-muted">
                Versailles
              </p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.02em] text-cocobiches-marine md:text-[2.65rem] md:leading-[1.1]">
                {h.hotelsTitle}
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-cocobiches-muted md:text-right">
              {h.hotelsLead}
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-7">
          {HOTELS.map((hotel, i) => {
            const copy = h[hotel.key];
            return (
              <FadeIn key={hotel.key} delay={i * 0.08}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-md bg-white shadow-lift ring-1 ring-cocobiches-marine/[0.12] transition duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className={`object-cover transition duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] ${hotel.imagePosition}`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${hotel.tone}`}
                      aria-hidden
                    />
                    <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/75">
                        {copy.tag}
                      </p>
                      <h3 className="font-display mt-2 text-2xl font-semibold leading-tight tracking-[-0.02em]">
                        {copy.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 p-7 md:p-8">
                    <p className="text-sm leading-relaxed text-cocobiches-muted md:text-[0.95rem]">
                      {copy.desc}
                    </p>
                    {hotel.url === "__INTERNAL_JDP__" ? (
                      <Link
                        href={localeHref(locale, "/hotel-jeu-de-paume")}
                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-cocobiches-marine/15 bg-cocobiches-marine/[0.03] py-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-marine transition hover:border-cocobiches-marine hover:bg-cocobiches-marine hover:text-white"
                      >
                        {copy.cta}
                        <span aria-hidden className="text-lg leading-none">
                          →
                        </span>
                      </Link>
                    ) : (
                      <Link
                        href={hotel.url}
                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-cocobiches-marine/15 bg-cocobiches-marine/[0.03] py-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-marine transition hover:border-cocobiches-marine hover:bg-cocobiches-marine hover:text-white"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {copy.cta}
                        <span aria-hidden className="text-lg leading-none">
                          →
                        </span>
                      </Link>
                    )}
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
