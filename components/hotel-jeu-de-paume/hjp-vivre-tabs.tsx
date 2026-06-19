"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import { getHjpContent } from "@/lib/hjp-content";
import { getHjpItineraries, type DayItinerary } from "@/lib/hjp-itineraries";
import { cn } from "@/lib/utils";

type Tab = "half" | "one" | "two" | "three";

export function HjpVivreTabs({ locale }: { locale: Locale }) {
  const c = getHjpContent(locale);
  const v = c.vivrePage;
  const itineraries = getHjpItineraries(locale);
  const [tab, setTab] = useState<Tab>("half");

  const tabs: { id: Tab; label: string }[] = [
    { id: "half", label: v.tabs.half },
    { id: "one", label: v.tabs.one },
    { id: "two", label: v.tabs.two },
    { id: "three", label: v.tabs.three },
  ];

  const tabLabel =
    locale === "fr" ? "Durée de visite à Versailles" : "Length of stay in Versailles";

  function renderItinerary(day: DayItinerary) {
    return (
      <div className="space-y-4">
        <h3 className="font-display text-xl font-semibold text-cocobiches-marine">{day.title}</h3>
        {day.steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.04}>
            <article className="rounded-2xl border border-cocobiches-border bg-white p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-hjp-teal">{step.time}</p>
              <h4 className="font-display mt-2 text-lg font-semibold text-cocobiches-marine">{step.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-cocobiches-muted">{step.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <div
        className="flex flex-wrap gap-2 border-b border-cocobiches-border/80 pb-4"
        role="tablist"
        aria-label={tabLabel}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
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

      <div className="mt-10" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
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

        {tab === "one" && renderItinerary(itineraries.one)}
        {tab === "two" && renderItinerary(itineraries.two)}
        {tab === "three" && renderItinerary(itineraries.three)}
      </div>
    </div>
  );
}
