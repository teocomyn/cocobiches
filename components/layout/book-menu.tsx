"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n-config";
import { HOTEL_LIST, hotelInternalHref, hotelName } from "@/lib/hotels-data";
import { cn } from "@/lib/utils";

export function BookMenu({
  locale,
  label,
  className,
  buttonClassName,
}: {
  locale: Locale;
  label: string;
  className?: string;
  buttonClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className={buttonClassName}
      >
        {label}
      </button>
      {open ? (
        <ul
          role="menu"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[16rem] overflow-hidden rounded-xl border border-cocobiches-border bg-white py-2 shadow-lift"
        >
          {HOTEL_LIST.map((hotel) => (
            <li key={hotel.id} role="none">
              <a
                role="menuitem"
                href={hotel.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm font-medium text-cocobiches-marine transition hover:bg-cocobiches-creme-50"
                onClick={() => setOpen(false)}
              >
                <span className="block">{hotelName(hotel, locale)}</span>
                <span className="mt-0.5 block text-xs font-normal text-cocobiches-muted">
                  {locale === "fr" ? "Disponibilités en direct" : "Live availability"} →
                </span>
              </a>
              <a
                role="menuitem"
                href={hotelInternalHref(locale, hotel.id)}
                className="block border-t border-cocobiches-border/60 px-4 py-2 text-xs text-cocobiches-muted transition hover:bg-cocobiches-creme-50 hover:text-cocobiches-marine"
                onClick={() => setOpen(false)}
              >
                {locale === "fr" ? "Découvrir la maison" : "Discover the house"}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
