"use client";

import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { HOTEL_LIST, type HotelId } from "@/lib/hotels-data";
import { cn } from "@/lib/utils";

type Props = {
  dict: Dictionary;
  locale: Locale;
  variant?: "default" | "home";
};

const HOTEL_SHORT: Record<HotelId, { fr: string; en: string }> = {
  angleterre: { fr: "Angleterre", en: "Angleterre" },
  jeudepaume: { fr: "Jeu de Paume", en: "Jeu de Paume" },
  onclelouis: { fr: "Oncle Louis", en: "Oncle Louis" },
};

export function BookingBar({ dict, locale, variant = "default" }: Props) {
  const h = dict.hotels;
  const isFr = locale === "fr";
  const [hotelId, setHotelId] = useState<HotelId>("jeudepaume");
  const hotel = HOTEL_LIST.find((x) => x.id === hotelId) ?? HOTEL_LIST[1];
  const isHome = variant === "home";

  return (
    <div
      className={cn(
        "sticky top-[var(--site-header-height)] z-30",
        isHome && "-mt-12 md:-mt-16",
      )}
    >
      <div
        className={cn(
          "mx-auto overflow-hidden rounded-2xl bg-white/95 shadow-lift ring-1 ring-cocobiches-marine/[0.1] backdrop-blur-md",
          isHome ? "max-w-[1180px]" : "max-w-[1440px]",
        )}
      >
        <div className="cb-gold-line h-px w-full opacity-80" aria-hidden />

        <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:gap-6 md:p-6 lg:gap-8 lg:p-7">
          <div className="md:max-w-[11.5rem] lg:max-w-[13.5rem]">
            <p className="inline-flex items-center gap-2 rounded-full bg-cocobiches-vert/[0.1] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-vert-600">
              <BadgeCheck className="size-3.5 shrink-0" aria-hidden strokeWidth={2.25} />
              {isFr ? "Meilleur tarif garanti" : "Best rate guaranteed"}
            </p>
            <p className="mt-3 hidden text-[0.82rem] leading-relaxed text-cocobiches-muted lg:block">
              {h.bookingNote}
            </p>
          </div>

          <div className="min-w-0 flex-1 border-cocobiches-border/80 md:border-l md:pl-6 lg:pl-8">
            <p
              id="booking-hotel-label"
              className="mb-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-cocobiches-marine/55"
            >
              {h.selectHotel}
            </p>
            <div
              role="radiogroup"
              aria-labelledby="booking-hotel-label"
              className="flex flex-wrap gap-2"
            >
              {HOTEL_LIST.map((item) => {
                const selected = item.id === hotelId;
                const label = isFr ? HOTEL_SHORT[item.id].fr : HOTEL_SHORT[item.id].en;

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setHotelId(item.id)}
                    className={cn(
                      "rounded-full border px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      selected
                        ? "border-cocobiches-marine bg-cocobiches-marine text-cocobiches-creme shadow-[0_8px_24px_rgb(45_48_119/0.22)]"
                        : "border-cocobiches-marine/12 bg-cocobiches-creme-50/80 text-cocobiches-marine hover:border-cocobiches-marine/30 hover:bg-white",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 md:items-stretch">
            <a
              className="group inline-flex min-h-[3rem] items-center justify-center gap-2.5 rounded-full bg-cocobiches-marine px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-creme shadow-[0_12px_32px_rgb(45_48_119/0.28)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-cocobiches-marine-800 md:min-w-[11.5rem]"
              href={hotel.bookingUrl}
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
            <p className="text-center text-[0.72rem] leading-relaxed text-cocobiches-muted lg:hidden">
              {h.bookingNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
