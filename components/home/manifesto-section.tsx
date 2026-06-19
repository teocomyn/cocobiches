import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { DotsPattern } from "@/components/patterns/dots-pattern";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";

const MANIFESTO_IMAGE = "/hotel-angleterre/experience.png";

export function ManifestoSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const h = dict.home;

  return (
    <section className="relative overflow-hidden bg-cocobiches-creme py-24 md:py-36">
      <DotsPattern variant="marine-on-creme" className="opacity-[0.1]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px cb-gold-line"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px cb-gold-line"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1240px] gap-14 px-5 md:grid-cols-[auto_1fr] md:gap-x-12 md:gap-y-14 md:px-10 lg:grid-cols-[auto_1fr_minmax(0,26rem)] lg:items-start lg:gap-x-16 xl:grid-cols-[auto_1fr_minmax(0,28rem)]">
        <FadeIn>
          <div className="flex items-start gap-4 md:sticky md:top-32">
            <span
              aria-hidden
              className="mt-3 hidden h-20 w-px bg-cocobiches-or/50 md:block"
            />
            <p className="cb-eyebrow text-cocobiches-or-muted md:[writing-mode:vertical-rl] md:tracking-[0.45em]">
              {h.manifestoEyebrow}
            </p>
          </div>
        </FadeIn>

        <div className="min-w-0 lg:max-w-none">
          <FadeIn>
            <h2 className="font-display text-[2.05rem] font-semibold leading-[1.12] tracking-[-0.022em] text-cocobiches-marine md:text-[3rem] md:leading-[1.08]">
              <span className="relative">
                <span
                  aria-hidden
                  className="absolute -left-4 top-0 font-display text-[5rem] leading-none text-cocobiches-or/40 md:-left-8 md:top-2 md:text-[7rem]"
                >
                  “
                </span>
                {h.manifestoTitle}
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mt-8 text-[1.06rem] leading-[1.78] text-cocobiches-ink/80 md:mt-10 md:text-[1.12rem] md:leading-[1.78]">
              {h.manifestoBody}
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="mt-10 flex flex-col items-start gap-7 md:mt-12 md:flex-row md:items-center md:gap-10">
              <p className="font-display text-sm font-medium tracking-wide text-cocobiches-marine">
                {h.manifestoSignature}
              </p>
              <span className="hidden h-px w-12 bg-cocobiches-or/60 md:block" aria-hidden />
              <Link
                href={href(locale, "/la-marque")}
                className="group inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-cocobiches-marine transition hover:text-cocobiches-marine-800"
              >
                <span className="underline-offset-4 group-hover:underline">
                  {h.manifestoCta}
                </span>
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-3">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-sm border border-cocobiches-marine/10 shadow-card ring-1 ring-cocobiches-marine/[0.06] lg:mx-0 lg:max-w-none">
            <Image
              src={MANIFESTO_IMAGE}
              alt={
                locale === "fr"
                  ? "Accueil chaleureux à l'Hôtel d'Angleterre, ambiance familiale Cocobiches"
                  : "Warm welcome at Hôtel d'Angleterre, Cocobiches family atmosphere"
              }
              fill
              sizes="(min-width: 1024px) 28rem, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
