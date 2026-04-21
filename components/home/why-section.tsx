import { FadeIn } from "@/components/motion/fade-in";
import { DotsPattern } from "@/components/patterns/dots-pattern";
import type { Dictionary } from "@/lib/get-dictionary";

export function WhySection({ dict }: { dict: Dictionary }) {
  const h = dict.home;
  const items = [h.why1, h.why2, h.why3];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cocobiches-marine-800 via-cocobiches-marine to-cocobiches-marine-900 py-24 text-cocobiches-creme md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(196_165_116/0.15),transparent_55%)]"
        aria-hidden
      />
      <DotsPattern variant="creme-on-marine" className="opacity-[0.2]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-cocobiches-or/90">
            Cocobiches
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.02em] md:text-[2.65rem] md:leading-[1.12]">
            {h.whyTitle}
          </h2>
        </FadeIn>
        <ul className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {items.map((text, i) => (
            <FadeIn key={text} delay={i * 0.08}>
              <li className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.04] p-7 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-md md:p-8">
                <span
                  className="font-display text-3xl font-semibold text-cocobiches-or/90"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-cocobiches-creme-100 md:text-[0.95rem]">
                  {text}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-14 max-w-3xl rounded-2xl border border-cocobiches-or/25 bg-cocobiches-marine-900/50 p-8 shadow-inner-soft backdrop-blur-sm md:p-10">
          <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
            {h.mapTitle}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cocobiches-creme-200 md:text-base">
            {h.mapBody}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
