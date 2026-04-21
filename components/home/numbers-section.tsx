import { FadeIn } from "@/components/motion/fade-in";
import type { Dictionary } from "@/lib/get-dictionary";

const KEYS = ["houses", "rooms", "years", "rating"] as const;

export function NumbersSection({ dict }: { dict: Dictionary }) {
  const h = dict.home;
  const numbers = h.numbers;

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 cb-hairline"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div>
              <div className="flex items-center gap-3 text-cocobiches-or-muted">
                <span className="h-px w-10 bg-current opacity-70" aria-hidden />
                <p className="cb-eyebrow">{h.numbersEyebrow}</p>
              </div>
              <h2 className="font-display mt-5 text-[1.85rem] font-semibold leading-[1.12] tracking-[-0.022em] text-cocobiches-marine md:text-[2.5rem] md:leading-[1.1]">
                {h.numbersTitle}
              </h2>
            </div>
            <p className="self-end text-[1rem] leading-[1.7] text-cocobiches-muted md:pb-2">
              {h.numbersLead}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-cocobiches-marine/10 shadow-card md:mt-20 md:grid-cols-4">
          {KEYS.map((k, i) => {
            const n = numbers[k];
            return (
              <FadeIn key={k} delay={i * 0.06} className="bg-white">
                <div className="flex h-full flex-col gap-3 p-7 md:p-9">
                  <p className="font-display text-[3rem] font-bold leading-none tracking-[-0.035em] text-cocobiches-marine md:text-[3.5rem]">
                    {n.value}
                  </p>
                  <p className="text-[0.95rem] font-semibold leading-snug text-cocobiches-ink">
                    {n.label}
                  </p>
                  <p className="mt-auto text-[0.82rem] leading-snug text-cocobiches-muted">
                    {n.detail}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
