"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "cocobiches-cookie-consent";

export function CookieBanner({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = window.localStorage.getItem(STORAGE_KEY);
      setVisible(!v);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  function reject() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "rejected");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  const c = dict.cookie;

  return (
    <div
      className={cn(
        "fixed inset-x-4 bottom-4 z-50 max-w-lg overflow-hidden rounded-2xl border border-cocobiches-border/90",
        "bg-white/92 p-px shadow-lift backdrop-blur-2xl md:left-auto md:right-8 md:max-w-md",
      )}
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="rounded-[0.95rem] bg-gradient-to-br from-white via-cocobiches-creme-50/80 to-white p-6 md:p-7">
        <h2
          id="cookie-title"
          className="font-display text-xl font-semibold text-cocobiches-marine"
        >
          {c.title}
        </h2>
        <p
          id="cookie-desc"
          className="mt-3 text-sm leading-relaxed text-cocobiches-muted"
        >
          {c.body}{" "}
          <Link
            className="font-medium text-cocobiches-marine underline decoration-cocobiches-or/50 underline-offset-4 transition hover:decoration-cocobiches-marine"
            href={href(locale, "/politique-confidentialite")}
          >
            {c.learn}
          </Link>
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-full bg-cocobiches-marine px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-cocobiches-marine-800"
            onClick={accept}
          >
            {c.accept}
          </button>
          <button
            type="button"
            className="rounded-full border border-cocobiches-border bg-white px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-cocobiches-marine transition hover:border-cocobiches-marine/40"
            onClick={reject}
          >
            {c.reject}
          </button>
        </div>
      </div>
    </div>
  );
}
