import { FadeIn } from "@/components/motion/fade-in";
import { DotsPattern } from "@/components/patterns/dots-pattern";
import type { Dictionary } from "@/lib/get-dictionary";
import { NewsletterForm } from "@/components/home/newsletter-form";

export function NewsletterSection({ dict }: { dict: Dictionary }) {
  const h = dict.home;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cocobiches-marine-800 via-cocobiches-marine to-cocobiches-marine-900 py-24 text-cocobiches-creme md:py-32">
      <DotsPattern variant="creme-on-marine" className="opacity-[0.17]" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(196_165_116/0.15),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1240px] gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-20 md:px-10">
        <FadeIn>
          <div>
            <div className="flex items-center gap-3 text-cocobiches-or/90">
              <span className="h-px w-10 bg-current opacity-80" aria-hidden />
              <p className="cb-eyebrow">{h.newsletterEyebrow}</p>
            </div>
            <h2 className="font-display mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] md:text-[2.85rem]">
              {h.newsletterTitle}
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-[1.75] text-cocobiches-creme-100/90 md:text-[1.05rem]">
              {h.newsletterLead}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative overflow-hidden rounded-sm border border-white/[0.1] bg-white/[0.04] p-8 shadow-[inset_0_1px_0_rgb(255_255_255/0.07)] backdrop-blur-md md:p-10">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cocobiches-or/60 to-transparent"
              aria-hidden
            />
            <NewsletterForm dict={dict} />
            <p className="mt-6 text-[0.78rem] leading-[1.6] text-cocobiches-creme-200/75">
              {h.newsletterHint}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
