"use client";

import type { Dictionary } from "@/lib/get-dictionary";
import { cn } from "@/lib/utils";

type Props = {
  dict: Dictionary;
  /** Home : chevauche le bas du hero (-36px). */
  variant?: "default" | "home";
};

/** Barre réservation éditoriale — placeholders jusqu’à branchement moteur (D-EDGE / PMS). */
export function BookingBar({ dict, variant = "default" }: Props) {
  const h = dict.hotels;
  const isHome = variant === "home";

  return (
    <div
      className={cn(
        "sticky top-[var(--site-header-height)] z-30",
        isHome && "-mt-9",
      )}
    >
      <div className="mx-auto max-w-[1440px] rounded-lg border border-cocobiches-marine/[0.12] bg-cocobiches-creme px-4 py-4 shadow-card md:px-6 md:py-5">
        <p className="mb-4 hidden text-[0.8rem] leading-relaxed text-cocobiches-muted md:mb-6 md:block">
          {h.bookingNote}
        </p>
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end md:gap-0">
          <div className="relative border-cocobiches-marine/[0.12] md:border-r md:pr-6">
            <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-marine/60">
              {h.arrival}
            </label>
            <input
              type="text"
              readOnly
              placeholder="—"
              className="mt-2 w-full border-0 border-b border-cocobiches-marine/20 bg-transparent pb-2 text-sm font-medium text-cocobiches-marine placeholder:text-cocobiches-marine/40 focus:border-cocobiches-marine/40 focus:outline-none"
              aria-describedby="booking-note-mobile"
            />
          </div>
          <div className="relative border-cocobiches-marine/[0.12] md:border-r md:px-6">
            <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-marine/60">
              {h.departure}
            </label>
            <input
              type="text"
              readOnly
              placeholder="—"
              className="mt-2 w-full border-0 border-b border-cocobiches-marine/20 bg-transparent pb-2 text-sm font-medium text-cocobiches-marine placeholder:text-cocobiches-marine/40 focus:border-cocobiches-marine/40 focus:outline-none"
            />
          </div>
          <div className="relative border-cocobiches-marine/[0.12] md:border-r md:px-6">
            <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-marine/60">
              {h.guests}
            </label>
            <input
              type="text"
              readOnly
              placeholder={h.guestPlaceholder}
              className="mt-2 w-full border-0 border-b border-cocobiches-marine/20 bg-transparent pb-2 text-sm font-medium text-cocobiches-marine placeholder:text-cocobiches-marine/40 focus:border-cocobiches-marine/40 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 md:pl-6">
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cocobiches-marine px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-creme shadow-[0_10px_30px_rgb(45_48_119/0.25)] transition hover:bg-cocobiches-marine-800"
              href="https://www.hotel-jeudepaume.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {h.reserve}
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p id="booking-note-mobile" className="text-center text-[0.7rem] text-cocobiches-muted md:hidden">
              {h.bookingNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
