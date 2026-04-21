"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/get-dictionary";

export function NewsletterForm({ dict }: { dict: Dictionary }) {
  const h = dict.home;
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "");
    const consent = fd.get("consent") === "on";
    const company = String(fd.get("company") ?? "");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          consent: consent === true,
          company,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setError(h.newsletterError);
        return;
      }
      setOk(true);
      e.currentTarget.reset();
    } catch {
      setError(h.newsletterErrorNetwork);
    } finally {
      setPending(false);
    }
  }

  if (ok) {
    return (
      <p className="rounded-xl border border-cocobiches-vert/35 bg-white/80 px-6 py-4 text-center text-sm text-cocobiches-marine">
        {h.newsletterSuccess}
      </p>
    );
  }

  return (
    <form
      className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch"
      onSubmit={onSubmit}
    >
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="sr-only" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        disabled={pending}
        autoComplete="email"
        placeholder={h.newsletterPlaceholder}
        className="min-h-12 flex-1 rounded-full border border-cocobiches-border bg-white px-5 text-sm text-cocobiches-ink shadow-inner-soft outline-none ring-cocobiches-marine/30 transition placeholder:text-cocobiches-muted/80 focus:ring-2"
      />
      <label className="flex flex-1 items-center gap-2 text-left text-xs text-cocobiches-muted sm:min-w-full sm:basis-full">
        <input
          name="consent"
          type="checkbox"
          required
          disabled={pending}
          className="size-4 shrink-0 rounded border-cocobiches-marine text-cocobiches-marine focus:ring-cocobiches-marine"
        />
        <span>{h.newsletterConsent}</span>
      </label>
      {error ? (
        <p className="w-full text-center text-sm text-cocobiches-error sm:basis-full">{error}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="min-h-12 rounded-full bg-cocobiches-marine px-8 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-cocobiches-marine-800 disabled:opacity-60"
      >
        {pending ? h.newsletterSending : h.newsletterCta}
      </button>
    </form>
  );
}
