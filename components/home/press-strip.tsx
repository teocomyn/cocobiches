import Link from "next/link";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";

const OUTLETS = [
  "Condé Nast Traveler",
  "Le Figaro",
  "Monocle",
  "The Guardian",
  "Télérama",
  "Les Échos",
  "Madame Figaro",
  "The New York Times",
] as const;

export function PressStrip({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const h = dict.home;
  const row = [...OUTLETS, ...OUTLETS];

  return (
    <section className="relative overflow-hidden border-y border-cocobiches-marine/10 bg-white py-14 md:py-16">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-cocobiches-or-muted">
              <span className="h-px w-10 bg-current opacity-70" aria-hidden />
              <p className="cb-eyebrow">{h.pressEyebrow}</p>
            </div>
            <h2 className="font-display mt-3 text-[1.4rem] font-semibold tracking-[-0.02em] text-cocobiches-marine md:text-[1.75rem]">
              {h.pressTitle}
            </h2>
          </div>
          <Link
            href={href(locale, "/presse")}
            className="group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine transition hover:text-cocobiches-marine-800"
          >
            <span className="underline-offset-4 group-hover:underline">
              {h.pressCta}
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      <div
        className="cb-marquee-wrap relative mt-10 overflow-hidden"
        aria-hidden
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="cb-marquee">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-9 inline-flex shrink-0 items-center whitespace-nowrap font-display text-[1.15rem] font-semibold tracking-[0.02em] text-cocobiches-marine/55 md:mx-12 md:text-[1.35rem]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
