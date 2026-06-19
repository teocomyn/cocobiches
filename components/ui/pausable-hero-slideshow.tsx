"use client";

import { Pause, Play } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n-config";
import { cn } from "@/lib/utils";

export function PausableHeroSlideshow({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const [paused, setPaused] = useState(false);
  const isFr = locale === "fr";

  return (
    <div className={cn("absolute inset-0", paused && "hero-slideshow-paused")}>
      {children}
      <button
        type="button"
        className="absolute right-5 top-24 z-20 flex size-10 items-center justify-center rounded-full border border-white/35 bg-cocobiches-marine/70 text-white backdrop-blur-sm transition hover:bg-cocobiches-marine/90 md:right-8 md:top-28"
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
        aria-label={
          paused
            ? isFr
              ? "Reprendre le diaporama"
              : "Resume slideshow"
            : isFr
              ? "Mettre en pause le diaporama"
              : "Pause slideshow"
        }
      >
        {paused ? <Play className="size-4" aria-hidden /> : <Pause className="size-4" aria-hidden />}
      </button>
    </div>
  );
}
