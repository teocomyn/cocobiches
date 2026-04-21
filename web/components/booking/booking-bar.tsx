"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/get-dictionary";
import { cn } from "@/lib/utils";

/** Sticky placeholder bar — connecte dates + moteur D-EDGE en phase 2. */
export function BookingBar({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const h = dict.hotels;

  return (
    <div
      className={cn(
        "sticky top-[var(--site-header-height)] z-30 border-b border-cocobiches-border/70 bg-white/75 backdrop-blur-2xl backdrop-saturate-150",
        open && "shadow-card",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="max-w-md text-[0.8rem] leading-relaxed text-cocobiches-muted">{h.bookingNote}</p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="rounded-full border border-cocobiches-border bg-white px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-marine shadow-inner-soft transition hover:border-cocobiches-marine/25"
            onClick={() => setOpen((v) => !v)}
          >
            Dates + voyageurs
          </button>
          <a
            className="inline-flex rounded-full bg-cocobiches-marine px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgb(45_48_119/0.25)] transition hover:bg-cocobiches-marine-800"
            href="https://www.hotel-angleterre.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {h.placeholderCta}
          </a>
        </div>
      </div>
    </div>
  );
}
