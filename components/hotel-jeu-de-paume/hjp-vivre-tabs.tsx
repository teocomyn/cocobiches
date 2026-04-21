"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";
import { cn } from "@/lib/utils";

type Tab = "half" | "one" | "two" | "three";

export function HjpVivreTabs({ locale }: { locale: Locale }) {
  const c = getHjpContent(locale);
  const v = c.vivrePage;
  const [tab, setTab] = useState<Tab>("half");

  const tabs: { id: Tab; label: string }[] = [
    { id: "half", label: v.tabs.half },
    { id: "one", label: v.tabs.one },
    { id: "two", label: v.tabs.two },
    { id: "three", label: v.tabs.three },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <div
        className="flex flex-wrap gap-2 border-b border-cocobiches-border/80 pb-4"
        role="tablist"
        aria-label="Durée de visite"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={cn(
              "rounded-full px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] transition",
              tab === t.id
                ? "bg-cocobiches-marine text-white shadow-sm"
                : "bg-white text-cocobiches-muted ring-1 ring-cocobiches-border hover:text-cocobiches-marine",
            )}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-10" role="tabpanel">
        {tab === "half" && (
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <article className="rounded-2xl border border-cocobiches-border bg-white p-7 shadow-card">
                <h3 className="font-display text-xl font-semibold text-cocobiches-marine">
                  {v.halfDay.chateau.title}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-cocobiches-muted">
                  {v.halfDay.chateau.hoursLo}
                </p>
                <p className="text-xs font-medium uppercase tracking-wide text-cocobiches-muted">
                  {v.halfDay.chateau.hoursHi}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cocobiches-muted">
                  {v.halfDay.chateau.body}
                </p>
              </article>
            </FadeIn>
            <FadeIn delay={0.06}>
              <article className="rounded-2xl border border-cocobiches-border bg-white p-7 shadow-card">
                <h3 className="font-display text-xl font-semibold text-cocobiches-marine">
                  {v.halfDay.gardens.title}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-cocobiches-muted">
                  {v.halfDay.gardens.hoursLo}
                </p>
                <p className="text-xs font-medium uppercase tracking-wide text-cocobiches-muted">
                  {v.halfDay.gardens.hoursHi}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cocobiches-muted">
                  {v.halfDay.gardens.body}
                </p>
              </article>
            </FadeIn>
          </div>
        )}

        {tab !== "half" && (
          <FadeIn>
            <p className="max-w-2xl rounded-2xl border border-dashed border-hjp-teal/40 bg-hjp-mint/10 px-6 py-8 text-center text-sm leading-relaxed text-cocobiches-muted">
              {v.coming}
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
