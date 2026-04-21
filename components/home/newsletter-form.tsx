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
      <p className="rounded-md border border-cocobiches-vert/40 bg-cocobiches-vert/15 px-6 py-5 text-center text-sm text-cocobiches-creme">
        {h.newsletterSuccess}
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch"
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
        className="min-h-12 flex-1 rounded-full border border-white/15 bg-white/[0.05] px-5 text-sm text-cocobiches-creme outline-none ring-cocobiches-or/40 transition placeholder:text-cocobiches-creme-200/50 focus:ring-2"
      />
      <button
        type="submit"
        disabled={pending}
        className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cocobiches-creme px-8 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine transition hover:bg-white disabled:opacity-60"
      >
        {pending ? h.newsletterSending : h.newsletterCta}
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
        >
          →
        </span>
      </button>
      <label className="flex flex-1 items-start gap-2 text-left text-[0.78rem] leading-snug text-cocobiches-creme-200/80 sm:min-w-full sm:basis-full">
        <input
          name="consent"
          type="checkbox"
          required
          disabled={pending}
          className="mt-0.5 size-4 shrink-0 rounded border-white/40 bg-white/10 text-cocobiches-or focus:ring-cocobiches-or/40"
        />
        <span>{h.newsletterConsent}</span>
      </label>
      {error ? (
        <p className="w-full text-left text-sm text-cocobiches-error sm:basis-full">{error}</p>
      ) : null}
    </form>
  );
}
