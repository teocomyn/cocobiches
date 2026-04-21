import { FadeIn } from "@/components/motion/fade-in";
import { DotsPattern } from "@/components/patterns/dots-pattern";
import type { Dictionary } from "@/lib/get-dictionary";

type IconProps = { className?: string };

function IconFamily({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 20v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconBread({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4.5 10c0-2.8 3-4.5 7.5-4.5S19.5 7.2 19.5 10a3 3 0 0 1-3 3v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-5a3 3 0 0 1-3-3Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M9 14h6M9 17h6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}
function IconCompass({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="m15.5 8.5-2 5-5 2 2-5 5-2Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconLeaf({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 19c0-7 6-13 15-13-0 9-6 13-11 13-2 0-4-1-4-3Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M5 19c3-5 7-7 11-9" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

export function WhySection({ dict }: { dict: Dictionary }) {
  const h = dict.home;
  const pillars = [
    { title: h.why1Title, body: h.why1, Icon: IconFamily },
    { title: h.why2Title, body: h.why2, Icon: IconBread },
    { title: h.why3Title, body: h.why3, Icon: IconCompass },
    { title: h.why4Title, body: h.why4, Icon: IconLeaf },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cocobiches-marine-800 via-cocobiches-marine to-cocobiches-marine-900 py-24 text-cocobiches-creme md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgb(196_165_116/0.17),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgb(84_161_107/0.12),transparent_65%)]"
        aria-hidden
      />
      <DotsPattern variant="creme-on-marine" className="opacity-[0.18]" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-[1fr_1.05fr] md:items-end md:gap-16">
            <div>
              <div className="flex items-center gap-3 text-cocobiches-or/90">
                <span className="h-px w-10 bg-current opacity-80" aria-hidden />
                <p className="cb-eyebrow">{h.whyEyebrow}</p>
              </div>
              <h2 className="font-display mt-5 text-[2.05rem] font-semibold leading-[1.1] tracking-[-0.025em] md:text-[3rem] md:leading-[1.06]">
                {h.whyTitle}
              </h2>
            </div>
            <p className="text-[1rem] leading-[1.75] text-cocobiches-creme-100/90 md:pb-2 md:text-[1.05rem]">
              {h.whyLead}
            </p>
          </div>
        </FadeIn>

        <ul className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <li className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-white/[0.09] bg-white/[0.045] p-7 shadow-[inset_0_1px_0_rgb(255_255_255/0.07)] backdrop-blur-md transition hover:border-cocobiches-or/40 hover:bg-white/[0.07] md:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cocobiches-or/40 bg-cocobiches-or/10 text-cocobiches-or">
                    <p.Icon className="h-[1.15rem] w-[1.15rem]" />
                  </span>
                  <span
                    className="font-display text-[0.78rem] font-semibold tracking-[0.32em] text-cocobiches-or/70"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display mt-7 text-[1.08rem] font-semibold leading-tight tracking-[-0.012em] text-white md:text-[1.15rem]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-[1.65] text-cocobiches-creme-100/85">
                  {p.body}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-14 grid gap-6 rounded-sm border border-cocobiches-or/25 bg-cocobiches-marine-900/55 p-8 shadow-inner-soft backdrop-blur-sm md:mt-16 md:grid-cols-[auto_1fr] md:items-center md:gap-10 md:p-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cocobiches-or/50 bg-cocobiches-or/10 text-cocobiches-or">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden
              >
                <path
                  d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
            <h3 className="font-display text-[1.2rem] font-semibold text-white md:text-[1.35rem]">
              {h.mapTitle}
            </h3>
          </div>
          <p className="text-[0.96rem] leading-[1.7] text-cocobiches-creme-200/95 md:text-[1rem]">
            {h.mapBody}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
