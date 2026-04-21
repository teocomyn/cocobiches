"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/get-dictionary";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-2xl border border-cocobiches-vert/40 bg-cocobiches-creme-50 px-6 py-5 text-cocobiches-marine">
        {c.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid max-w-xl gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-cocobiches-marine">
          {c.name}
        </label>
        <input
          id="name"
          name="name"
          required
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
          rows={6}
          className="mt-1 w-full rounded-xl border border-cocobiches-border bg-white px-4 py-3 text-sm outline-none ring-cocobiches-marine focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-fit rounded-full bg-cocobiches-marine px-6 py-3 text-sm font-semibold text-white transition hover:bg-cocobiches-marine-700"
      >
        {c.submit}
      </button>
    </form>
  );
}
