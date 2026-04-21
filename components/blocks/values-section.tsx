"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Heart, Leaf, Sparkles, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/lib/get-dictionary";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
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
        <Reveal>
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
        </Reveal>

        <div className="grid grid-cols-6 gap-4 md:gap-6">
          {/* 01 · Famille */}
          <Reveal className="col-span-6 lg:col-span-3" delay={0.05}>
            <Card className="group relative overflow-hidden border-cocobiches-marine/10 bg-white transition-all duration-700 hover:shadow-[0_20px_60px_rgba(45,48,119,0.1)]">
              <CardContent className="relative flex h-full min-h-[420px] flex-col justify-between p-8 md:p-12">
                <div
                  className="pointer-events-none absolute right-6 top-4 select-none font-display text-[160px] font-black leading-none text-cocobiches-marine/4"
                  aria-hidden
                >
                  01
                </div>
                <div className="relative flex size-14 items-center justify-center rounded-full border border-cocobiches-marine/15 before:absolute before:-inset-2 before:rounded-full before:border before:border-cocobiches-marine/10">
                  <Users className="size-5 text-cocobiches-marine" strokeWidth={1.5} aria-hidden />
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
          </Reveal>

          {/* 02 · Authenticité */}
          <Reveal className="col-span-6 sm:col-span-3 lg:col-span-3" delay={0.1}>
            <Card className="group relative overflow-hidden border-transparent bg-cocobiches-marine text-cocobiches-creme transition-all duration-700 hover:shadow-[0_20px_60px_rgba(45,48,119,0.2)]">
              <CardContent className="relative flex h-full min-h-[420px] flex-col justify-between p-8 md:p-12">
                <div
                  className="pointer-events-none absolute right-6 top-4 select-none font-display text-[160px] font-black leading-none text-cocobiches-creme/6"
                  aria-hidden
                >
                  02
                </div>
                <div className="relative flex size-14 items-center justify-center rounded-full border border-cocobiches-creme/20 before:absolute before:-inset-2 before:rounded-full before:border before:border-cocobiches-creme/10">
                  <Sparkles className="size-5 text-cocobiches-creme" strokeWidth={1.5} aria-hidden />
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
          </Reveal>

          {/* 03 · Lifestyle */}
          <Reveal className="col-span-6 lg:col-span-6" delay={0.12}>
            <Card className="group relative overflow-hidden border-cocobiches-marine/10 bg-white transition-all duration-700 hover:shadow-[0_20px_60px_rgba(45,48,119,0.1)]">
              <CardContent className="grid h-full min-h-[360px] gap-8 p-8 sm:grid-cols-2 md:gap-12 md:p-12">
                <div className="relative flex flex-col justify-between">
                  <div
                    className="pointer-events-none absolute -left-4 -top-4 select-none font-display text-[160px] font-black leading-none text-cocobiches-marine/4"
                    aria-hidden
                  >
                    03
                  </div>
                  <div className="relative flex size-14 items-center justify-center rounded-full border border-cocobiches-marine/15 before:absolute before:-inset-2 before:rounded-full before:border before:border-cocobiches-marine/10">
                    <Heart className="size-5 text-cocobiches-marine" strokeWidth={1.5} aria-hidden />
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
          </Reveal>

          {/* 04 · Responsabilité */}
          <Reveal className="col-span-6 lg:col-span-6" delay={0.15}>
            <Card className="group relative overflow-hidden border-transparent bg-cocobiches-marine text-cocobiches-creme transition-all duration-700 hover:shadow-[0_20px_60px_rgba(45,48,119,0.2)]">
              <CardContent className="grid h-full min-h-[360px] gap-8 p-8 sm:grid-cols-2 md:gap-12 md:p-12">
                <div className="relative flex flex-col justify-between">
                  <div
                    className="pointer-events-none absolute -left-4 -top-4 select-none font-display text-[160px] font-black leading-none text-cocobiches-creme/6"
                    aria-hidden
                  >
                    04
                  </div>
                  <div className="relative flex size-14 items-center justify-center rounded-full border border-cocobiches-creme/20 before:absolute before:-inset-2 before:rounded-full before:border before:border-cocobiches-creme/10">
                    <Leaf className="size-5 text-cocobiches-vert" strokeWidth={1.5} aria-hidden />
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
          </Reveal>
        </div>

        <div className="mt-12 text-center md:mt-16">
          <p className="mx-auto max-w-2xl text-sm italic text-cocobiches-marine/60">{v.footer}</p>
        </div>
      </div>
    </section>
  );
}
