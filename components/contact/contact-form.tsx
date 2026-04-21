"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/get-dictionary";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const fd = new FormData(e.currentTarget);
    const website = String(fd.get("website") ?? "");
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      website,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setError(c.error);
        return;
      }
      setSent(true);
      e.currentTarget.reset();
    } catch {
      setError(c.errorNetwork);
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <p className="rounded-2xl border border-cocobiches-vert/40 bg-cocobiches-creme-50 px-6 py-5 text-cocobiches-marine">
        {c.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative grid max-w-xl gap-4">
      {error ? (
        <p className="rounded-xl border border-cocobiches-error/40 bg-red-50/80 px-4 py-3 text-sm text-cocobiches-error">
          {error}
        </p>
      ) : null}
      {/* Honeypot · visible pour les bots, pas pour les humains */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-cocobiches-marine">
          {c.name}
        </label>
        <input
          id="name"
          name="name"
          required
          disabled={pending}
          className="mt-1 w-full rounded-xl border border-cocobiches-border bg-white px-4 py-3 text-sm outline-none ring-cocobiches-marine focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-cocobiches-marine">
          {c.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={pending}
          autoComplete="email"
          className="mt-1 w-full rounded-xl border border-cocobiches-border bg-white px-4 py-3 text-sm outline-none ring-cocobiches-marine focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-cocobiches-marine">
          {c.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={pending}
          rows={6}
          minLength={10}
          className="mt-1 w-full rounded-xl border border-cocobiches-border bg-white px-4 py-3 text-sm outline-none ring-cocobiches-marine focus:ring-2"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-fit rounded-full bg-cocobiches-marine px-6 py-3 text-sm font-semibold text-white transition hover:bg-cocobiches-marine-700 disabled:opacity-60"
      >
        {pending ? c.sending : c.submit}
      </button>
    </form>
  );
}
