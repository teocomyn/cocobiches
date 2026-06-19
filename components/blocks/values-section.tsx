import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/lib/get-dictionary";
import { cn } from "@/lib/utils";

function ValueIcon({ name }: { name: "users" | "sparkles" | "heart" | "leaf" }) {
  const paths = {
    users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    sparkles: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.964 0z",
    heart: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    leaf: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
  } as const;

  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d={paths[name]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ValuesSection({ dict }: { dict: Dictionary }) {
  const v = dict.home.valuesSection;

  return (
    <section
      className="relative overflow-hidden bg-cocobiches-creme py-24 md:py-40"
      aria-labelledby="values-section-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cocobiches-marine/8"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cocobiches-marine/60">
              {v.eyebrow}
            </p>
            <h2
              id="values-section-title"
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-cocobiches-marine md:text-6xl"
            >
              {v.title1}
              <br />
              <span className="font-light italic">{v.title2}</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-6 gap-4 md:gap-6">
          <FadeIn className="col-span-6 lg:col-span-3" delay={0.05}>
            <Card className="group relative overflow-hidden border-cocobiches-marine/10 bg-white transition-[box-shadow,border-color] duration-700 hover:shadow-[0_20px_60px_rgba(45,48,119,0.1)]">
              <CardContent className="relative flex h-full min-h-[420px] flex-col justify-between p-8 md:p-12">
                <div
                  className="pointer-events-none absolute right-6 top-4 select-none font-display text-[160px] font-black leading-none text-cocobiches-marine/4"
                  aria-hidden
                >
                  01
                </div>
                <div className="relative flex size-14 items-center justify-center rounded-full border border-cocobiches-marine/15 text-cocobiches-marine before:absolute before:-inset-2 before:rounded-full before:border before:border-cocobiches-marine/10">
                  <ValueIcon name="users" />
                </div>
                <div className="relative z-10 mt-12">
                  <div className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine/50">
                    {v.c1.kicker}
                  </div>
                  <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-cocobiches-marine md:text-4xl">
                    {v.c1.title1}
                    <br />
                    {v.c1.title2}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-cocobiches-marine/80 md:text-lg">
                    {v.c1.body}
                  </p>
                  <div className="border-l-2 border-cocobiches-vert py-1 pl-4">
                    <p className="text-sm italic leading-relaxed text-cocobiches-marine/70">{v.c1.proof}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn className="col-span-6 sm:col-span-3 lg:col-span-3" delay={0.1}>
            <Card className="group relative overflow-hidden border-transparent bg-cocobiches-marine text-cocobiches-creme transition-[box-shadow,border-color] duration-700 hover:shadow-[0_20px_60px_rgba(45,48,119,0.2)]">
              <CardContent className="relative flex h-full min-h-[420px] flex-col justify-between p-8 md:p-12">
                <div
                  className="pointer-events-none absolute right-6 top-4 select-none font-display text-[160px] font-black leading-none text-cocobiches-creme/6"
                  aria-hidden
                >
                  02
                </div>
                <div className="relative flex size-14 items-center justify-center rounded-full border border-cocobiches-creme/20 text-cocobiches-creme before:absolute before:-inset-2 before:rounded-full before:border before:border-cocobiches-creme/10">
                  <ValueIcon name="sparkles" />
                </div>
                <div className="relative z-10 mt-12">
                  <div className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-creme/60">
                    {v.c2.kicker}
                  </div>
                  <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-cocobiches-creme md:text-4xl">
                    {v.c2.title1}
                    <br />
                    {v.c2.title2}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-cocobiches-creme/80 md:text-lg">
                    {v.c2.body}
                  </p>
                  <div className="border-l-2 border-cocobiches-vert py-1 pl-4">
                    <p className="text-sm italic leading-relaxed text-cocobiches-creme/75">{v.c2.proof}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn className="col-span-6 lg:col-span-6" delay={0.12}>
            <Card className="group relative overflow-hidden border-cocobiches-marine/10 bg-white transition-[box-shadow,border-color] duration-700 hover:shadow-[0_20px_60px_rgba(45,48,119,0.1)]">
              <CardContent className="grid h-full min-h-[360px] gap-8 p-8 sm:grid-cols-2 md:gap-12 md:p-12">
                <div className="relative flex flex-col justify-between">
                  <div
                    className="pointer-events-none absolute -left-4 -top-4 select-none font-display text-[160px] font-black leading-none text-cocobiches-marine/4"
                    aria-hidden
                  >
                    03
                  </div>
                  <div className="relative flex size-14 items-center justify-center rounded-full border border-cocobiches-marine/15 text-cocobiches-marine before:absolute before:-inset-2 before:rounded-full before:border before:border-cocobiches-marine/10">
                    <ValueIcon name="heart" />
                  </div>
                  <div className="relative z-10 mt-12">
                    <div className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine/50">
                      {v.c3.kicker}
                    </div>
                    <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-cocobiches-marine md:text-4xl">
                      {v.c3.title1}
                      <br />
                      <span className="font-light italic">{v.c3.titleItalic}</span>
                    </h3>
                    <p className="text-base leading-relaxed text-cocobiches-marine/80 md:text-lg">{v.c3.body}</p>
                  </div>
                </div>
                <div className="relative flex items-center border-cocobiches-marine/10 pl-0 sm:border-l sm:pl-8 md:pl-12">
                  <div className="w-full space-y-6">
                    {v.c3.stats.map((row, i) => (
                      <div
                        key={row.value}
                        className={cn(i < v.c3.stats.length - 1 && "border-b border-cocobiches-marine/10 pb-5")}
                      >
                        <div className="font-display text-5xl font-black leading-none text-cocobiches-marine md:text-6xl">
                          {row.value}
                        </div>
                        <div className="mt-2 text-sm text-cocobiches-marine/60">{row.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn className="col-span-6 lg:col-span-6" delay={0.15}>
            <Card className="group relative overflow-hidden border-transparent bg-cocobiches-marine text-cocobiches-creme transition-[box-shadow,border-color] duration-700 hover:shadow-[0_20px_60px_rgba(45,48,119,0.2)]">
              <CardContent className="grid h-full min-h-[360px] gap-8 p-8 sm:grid-cols-2 md:gap-12 md:p-12">
                <div className="relative flex flex-col justify-between">
                  <div
                    className="pointer-events-none absolute -left-4 -top-4 select-none font-display text-[160px] font-black leading-none text-cocobiches-creme/6"
                    aria-hidden
                  >
                    04
                  </div>
                  <div className="relative flex size-14 items-center justify-center rounded-full border border-cocobiches-creme/20 text-cocobiches-vert before:absolute before:-inset-2 before:rounded-full before:border before:border-cocobiches-creme/10">
                    <ValueIcon name="leaf" />
                  </div>
                  <div className="relative z-10 mt-12">
                    <div className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-creme/60">
                      {v.c4.kicker}
                    </div>
                    <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-cocobiches-creme md:text-4xl">
                      {v.c4.title1}
                      <br />
                      <span className="font-light italic">{v.c4.titleItalic}</span>
                    </h3>
                    <p className="text-base leading-relaxed text-cocobiches-creme/80 md:text-lg">{v.c4.body}</p>
                  </div>
                </div>
                <div className="relative grid grid-cols-2 content-center gap-4">
                  {v.c4.metrics.map((m) => (
                    <div
                      key={m.value + m.label}
                      className={cn(
                        "rounded-lg border border-cocobiches-creme/10 bg-cocobiches-creme/5 p-5",
                        "accent" in m && m.accent === "green" && "border-cocobiches-vert/40",
                      )}
                    >
                      <div
                        className={cn(
                          "font-display text-3xl font-bold text-cocobiches-creme",
                          "accent" in m && m.accent === "green" && "text-cocobiches-vert",
                        )}
                      >
                        {m.value}
                      </div>
                      <div className="mt-2 text-xs leading-relaxed text-cocobiches-creme/70">{m.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <div className="mt-12 text-center md:mt-16">
          <p className="mx-auto max-w-2xl text-sm italic text-cocobiches-marine/60">{v.footer}</p>
        </div>
      </div>
    </section>
  );
}
