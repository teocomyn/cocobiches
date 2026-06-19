import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { HjpVivreTabs } from "@/components/hotel-jeu-de-paume/hjp-vivre-tabs";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";
import { hjpAlt, hjpImage } from "@/lib/hjp-images";
import { href } from "@/lib/paths";

export function HjpVivrePageView({ locale }: { locale: Locale }) {
  const c = getHjpContent(locale);
  const v = c.vivrePage;

  return (
    <>
      <section className="relative min-h-[42vh] overflow-hidden bg-cocobiches-marine-900 md:min-h-[46vh]">
        <Image
          src={hjpImage("jardin").src}
          alt={hjpAlt("jardin", locale)}
          fill
          priority
          className="object-cover object-[center_40%] opacity-90"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-cocobiches-marine-900/88 via-cocobiches-marine-900/55 to-hjp-teal/25"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 md:min-h-[46vh] md:px-8 md:pb-14">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-hjp-mint">
            {v.intro.lead}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            {v.intro.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cocobiches-creme-100">
            {v.intro.body}
          </p>
        </div>
      </section>

      <section className="bg-cocobiches-creme-50 py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <div className="relative aspect-[21/9] min-h-[220px] overflow-hidden rounded-[1.25rem] border border-cocobiches-border shadow-card">
              <Image
                src={hjpImage("carte").src}
                alt={hjpAlt("carte", locale)}
                fill
                className="object-cover object-[center_35%]"
                sizes="(min-width: 1024px) 1152px, 100vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cocobiches-creme-50 py-14 md:py-20">
        <HjpVivreTabs locale={locale} />
      </section>

      <section className="border-t border-cocobiches-border/70 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <FadeIn>
            <p className="text-base leading-relaxed text-cocobiches-muted md:text-lg">
              {v.contactCta}
            </p>
            <Link
              href={href(locale, "/contact")}
              className="mt-8 inline-flex rounded-full bg-hjp-teal px-8 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition hover:bg-hjp-teal-dark"
            >
              {locale === "fr" ? "Nous écrire" : "Write to us"}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
