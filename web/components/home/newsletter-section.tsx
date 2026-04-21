import { FadeIn } from "@/components/motion/fade-in";
import type { Dictionary } from "@/lib/get-dictionary";

export function NewsletterSection({ dict }: { dict: Dictionary }) {
  const h = dict.home;

  return (
    <section className="border-t border-cocobiches-border/80 bg-cocobiches-creme-50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-[1.35rem] bg-white p-px shadow-lift">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cocobiches-or/20 via-transparent to-cocobiches-marine/10"
              aria-hidden
            />
            <div className="relative rounded-[1.3rem] bg-cocobiches-creme-50/90 p-9 backdrop-blur-sm md:p-11">
              <h2 className="font-display text-center text-3xl font-semibold tracking-[-0.02em] text-cocobiches-marine md:text-[2rem]">
                {h.newsletterTitle}
              </h2>
              <form
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch"
                action="#"
                method="post"
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={h.newsletterPlaceholder}
                  className="min-h-12 flex-1 rounded-full border border-cocobiches-border bg-white px-5 text-sm text-cocobiches-ink shadow-inner-soft outline-none ring-cocobiches-marine/30 transition placeholder:text-cocobiches-muted/80 focus:ring-2"
                />
                <button
                  type="submit"
                  className="min-h-12 rounded-full bg-cocobiches-marine px-8 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-cocobiches-marine-800"
                >
                  {h.newsletterCta}
                </button>
              </form>
              <p className="mt-4 text-center text-xs leading-relaxed text-cocobiches-muted">
                {h.newsletterHint}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
