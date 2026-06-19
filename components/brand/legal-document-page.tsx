import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { LogoPattern } from "@/components/patterns/logo-pattern";
import type { LegalPageContent } from "@/lib/i18n/legal-page";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";

export function LegalDocumentPageView({
  locale,
  content,
}: {
  locale: Locale;
  content: LegalPageContent;
}) {
  const isFr = locale === "fr";

  return (
    <>
      <section className="relative overflow-hidden bg-cocobiches-marine text-cocobiches-creme">
        <LogoPattern className="absolute inset-0 opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-br from-cocobiches-marine via-cocobiches-marine-800 to-cocobiches-marine-900" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-cocobiches-creme/70">
            Cocobiches
          </p>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cocobiches-creme-100/90 md:text-lg">
            {content.heroLead}
          </p>
          <p className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-cocobiches-creme/60">
            {content.updated}
          </p>
        </div>
      </section>

      <section className="bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="space-y-12">
            {content.sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.04}>
                <article className="rounded-sm border border-cocobiches-border/80 bg-white p-8 shadow-card md:p-10">
                  <h2 className="font-display text-xl font-semibold text-cocobiches-marine md:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-relaxed text-cocobiches-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-14 text-center">
            <Link
              href={href(locale, "/contact")}
              className="inline-flex rounded-full bg-cocobiches-marine px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-creme transition hover:bg-cocobiches-marine-800"
            >
              {isFr ? "Nous contacter" : "Contact us"}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
