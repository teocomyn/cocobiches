"use client";

import type { Locale } from "@/lib/i18n-config";
import { useState } from "react";

const COPY = {
  fr: {
    name: "Nom et prénom",
    email: "Email professionnel",
    company: "Entreprise",
    phone: "Téléphone (optionnel)",
    dates: "Dates souhaitées",
    participants: "Nombre de participants",
    format: "Format du séminaire",
    formatOptions: {
      journee: "Journée d'étude",
      "demi-journee": "Demi-journée",
      residentiel: "Séminaire résidentiel",
      privatisation: "Privatisation",
    },
    yurt: "Intérêt pour la yourte événementielle",
    message: "Message (optionnel)",
    submit: "Envoyer la demande",
    sending: "Envoi en cours…",
    success:
      "Merci · votre demande de devis a bien été envoyée. Notre équipe événements vous recontactera rapidement.",
    error: "Impossible d'envoyer la demande. Vérifiez les champs et réessayez.",
    errorNetwork: "Erreur réseau. Réessayez dans un instant.",
  },
  en: {
    name: "Full name",
    email: "Work email",
    company: "Company",
    phone: "Phone (optional)",
    dates: "Preferred dates",
    participants: "Number of participants",
    format: "Seminar format",
    formatOptions: {
      journee: "Full study day",
      "demi-journee": "Half day",
      residentiel: "Residential seminar",
      privatisation: "Full privatisation",
    },
    yurt: "Interest in the event yurt",
    message: "Message (optional)",
    submit: "Send request",
    sending: "Sending…",
    success:
      "Thank you · your quote request has been sent. Our events team will get back to you shortly.",
    error: "Could not send the request. Check the fields and try again.",
    errorNetwork: "Network error. Please try again shortly.",
  },
} as const;

export function HjpDevisForm({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const fd = new FormData(e.currentTarget);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      phone: String(fd.get("phone") ?? "") || undefined,
      dates: String(fd.get("dates") ?? ""),
      participants: Number(fd.get("participants") ?? 0),
      format: String(fd.get("format") ?? "journee"),
      yurt: fd.get("yurt") === "on",
      message: String(fd.get("message") ?? "") || undefined,
      website: String(fd.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/seminaire-devis", {
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
      <p
        role="alert"
        className="rounded-2xl border border-hjp-teal/40 bg-hjp-mint/20 px-6 py-5 text-cocobiches-marine"
      >
        {c.success}
      </p>
    );
  }

  const inputClass =
    "mt-1 w-full rounded-xl border border-cocobiches-border bg-white px-4 py-3 text-sm outline-none ring-cocobiches-marine focus:ring-2";
  const labelClass = "text-sm font-semibold text-cocobiches-marine";

  return (
    <form onSubmit={onSubmit} className="relative grid max-w-2xl gap-5">
      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-cocobiches-error/40 bg-red-50/80 px-4 py-3 text-sm text-cocobiches-error"
        >
          {error}
        </p>
      ) : null}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            {c.company}
          </label>
          <input id="company" name="company" required disabled={pending} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {c.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            disabled={pending}
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="dates" className={labelClass}>
            {c.dates}
          </label>
          <input id="dates" name="dates" required disabled={pending} className={inputClass} />
        </div>
        <div>
          <label htmlFor="participants" className={labelClass}>
            {c.participants}
          </label>
          <input
            id="participants"
            name="participants"
            type="number"
            min={5}
            max={200}
            required
            disabled={pending}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="format" className={labelClass}>
          {c.format}
        </label>
        <select id="format" name="format" required disabled={pending} className={inputClass}>
          {(Object.keys(c.formatOptions) as Array<keyof typeof c.formatOptions>).map((key) => (
            <option key={key} value={key}>
              {c.formatOptions[key]}
            </option>
          ))}
        </select>
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm text-cocobiches-muted">
        <input
          type="checkbox"
          name="yurt"
          disabled={pending}
          className="mt-1 h-4 w-4 rounded border-cocobiches-border text-hjp-teal focus:ring-hjp-teal"
        />
        <span>{c.yurt}</span>
      </label>

      <div>
        <label htmlFor="message" className={labelClass}>
          {c.message}
        </label>
        <textarea
          id="message"
          name="message"
          disabled={pending}
          rows={5}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-fit rounded-full bg-hjp-teal px-8 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-hjp-teal-dark disabled:opacity-60"
      >
        {pending ? c.sending : c.submit}
      </button>
    </form>
  );
}
