import { FadeIn } from "@/components/motion/fade-in";
import { LogoPattern } from "@/components/patterns/logo-pattern";
import type { Dictionary } from "@/lib/get-dictionary";

const KEYS = ["t1", "t2", "t3"] as const;

export function TestimonialsSection({ dict }: { dict: Dictionary }) {
  const h = dict.home;

  return (
    <section className="relative overflow-hidden bg-cocobiches-creme-50 py-24 md:py-32">
      <LogoPattern className="opacity-[0.04]" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-cocobiches-or-muted">
              <span className="h-px w-10 bg-current opacity-70" aria-hidden />
              <p className="cb-eyebrow">{h.testimonialsEyebrow}</p>
            </div>
            <h2 className="font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.022em] text-cocobiches-marine md:text-[2.75rem]">
              {h.testimonialsTitle}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {KEYS.map((k, i) => {
            const t = h[k];
            return (
              <FadeIn key={k} delay={i * 0.08}>
                <figure className="cb-card group flex h-full flex-col justify-between rounded-sm border border-cocobiches-marine/10 bg-white p-8 shadow-card hover:shadow-lift md:p-9">
                  <span
                    aria-hidden
                    className="font-display text-[4rem] leading-none text-cocobiches-or/45"
                  >
                    “
                  </span>
                  <blockquote className="-mt-4 text-[1.02rem] leading-[1.7] text-cocobiches-ink md:text-[1.05rem]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 border-t border-cocobiches-marine/10 pt-5">
                    <p className="font-display text-[0.95rem] font-semibold tracking-[-0.01em] text-cocobiches-marine">
                      {t.author}
                    </p>
                    <p className="mt-1 text-[0.78rem] uppercase tracking-[0.18em] text-cocobiches-muted">
                      {t.context}
                    </p>
                  </figcaption>
                </figure>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
