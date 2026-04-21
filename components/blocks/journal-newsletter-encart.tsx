"use client";

import { NewsletterForm } from "@/components/home/newsletter-form";
import type { Dictionary } from "@/lib/get-dictionary";

export function JournalNewsletterEncart({
  dict,
  title,
  lead,
}: {
  dict: Dictionary;
  title: string;
  lead: string;
}) {
  return (
    <aside className="relative overflow-hidden rounded-2xl bg-cocobiches-marine px-6 py-12 text-cocobiches-creme md:px-12 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgb(84_161_107/0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-xl text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-cocobiches-creme md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-cocobiches-creme/85 md:text-base">{lead}</p>
        <div className="mt-8 text-left">
          <NewsletterForm dict={dict} />
        </div>
      </div>
    </aside>
  );
}
