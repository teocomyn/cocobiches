import type { Dictionary } from "@/lib/get-dictionary";
import { NewsletterForm } from "@/components/home/newsletter-form";

export function NewsletterSection({ dict }: { dict: Dictionary }) {
  const h = dict.home;

  return (
    <section className="border-t border-cocobiches-border/80 bg-cocobiches-creme-50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative mx-auto max-w-xl overflow-hidden rounded-md bg-white p-px shadow-lift">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cocobiches-or/20 via-transparent to-cocobiches-marine/10"
            aria-hidden
          />
          <div className="relative rounded-[calc(0.375rem-1px)] bg-cocobiches-creme-50/90 p-9 backdrop-blur-sm md:p-11">
            <h2 className="font-display text-center text-3xl font-semibold tracking-[-0.02em] text-cocobiches-marine md:text-[2rem]">
              {h.newsletterTitle}
            </h2>
            <NewsletterForm dict={dict} />
            <p className="mt-4 text-center text-xs leading-relaxed text-cocobiches-muted">
              {h.newsletterHint}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
