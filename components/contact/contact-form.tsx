"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/lib/get-dictionary";
import { cn } from "@/lib/utils";

const inputClass =
  "mt-2 w-full rounded-sm border border-cocobiches-marine/12 bg-cocobiches-creme-50/50 px-4 py-3.5 text-[0.92rem] text-cocobiches-ink outline-none transition placeholder:text-cocobiches-muted/50 focus:border-cocobiches-marine/35 focus:bg-white focus:ring-2 focus:ring-cocobiches-marine/15 disabled:opacity-60";

const labelClass =
  "text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine/55";

export function ContactForm({ dict, className }: { dict: Dictionary; className?: string }) {
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
      <div
        className={cn(
          "flex flex-col items-center rounded-sm border border-cocobiches-vert/30 bg-cocobiches-vert/[0.06] px-8 py-12 text-center",
          className,
        )}
        role="status"
      >
        <CheckCircle2 className="size-10 text-cocobiches-vert" strokeWidth={1.5} aria-hidden />
        <p className="font-display mt-5 text-xl font-semibold text-cocobiches-marine">{c.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("relative grid gap-5", className)}>
      {error ? (
        <p
          className="rounded-sm border border-cocobiches-error/40 bg-red-50/90 px-4 py-3 text-sm text-cocobiches-error"
          role="alert"
        >
          {error}
        </p>
      ) : null}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          {c.name}
        </label>
        <input id="name" name="name" required disabled={pending} className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          {c.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={pending}
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {c.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={pending}
          rows={6}
          minLength={10}
          className={cn(inputClass, "resize-y min-h-[9rem]")}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocobiches-marine px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-creme shadow-[0_12px_32px_rgb(45_48_119/0.22)] transition hover:bg-cocobiches-marine-800 disabled:opacity-60 sm:w-auto"
      >
        {pending ? c.sending : c.submit}
        {!pending ? (
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
          >
            →
          </span>
        ) : null}
      </button>
    </form>
  );
}
