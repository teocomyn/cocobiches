import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { LogoPattern } from "@/components/patterns/logo-pattern";
import {
  CONTACT_ADDRESS,
  CONTACT_DEPARTMENTS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/contact-data";
import { getContactPage } from "@/lib/i18n/contact-page";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/get-dictionary";
import { href } from "@/lib/paths";

export function ContactPageView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const d = getContactPage(locale);

  return (
    <article className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[68svh] max-h-[720px] overflow-hidden bg-cocobiches-marine-900">
        <Image
          src="/hotel-jeu-de-paume/salon.jpg"
          alt={d.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900 via-cocobiches-marine-900/60 to-cocobiches-marine-900/30"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-36">
          <div className="mx-auto w-full max-w-[1240px]">
            <p className="cb-eyebrow flex items-center gap-2 text-cocobiches-creme/75">
              <MessageCircle className="size-3.5" strokeWidth={2} aria-hidden />
              {d.hero.eyebrow}
            </p>
            <h1 className="font-display mt-6 max-w-[10ch] text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-white md:text-[4.5rem] lg:text-[5.25rem]">
              {d.hero.title}
              <span className="block text-cocobiches-creme-200">{d.hero.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-[1.72] text-cocobiches-creme-100 md:text-[1.1rem]">
              {d.hero.lead}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden bg-cocobiches-creme py-16 md:py-24">
        <LogoPattern className="opacity-[0.035]" />
        <div className="relative mx-auto max-w-[880px] px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-display text-[2rem] font-bold leading-[1.02] tracking-[-0.025em] text-cocobiches-marine md:text-[3.25rem]">
              {d.intro.quote}
              <span className="block font-light italic text-cocobiches-marine/85">
                {d.intro.quoteAccent}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-[1.75] text-cocobiches-muted md:text-lg">
              {d.intro.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="border-y border-cocobiches-border/70 bg-cocobiches-creme-50 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 md:px-10">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.reach.eyebrow}</p>
            <h2 className="font-display mt-4 text-[1.85rem] font-bold text-cocobiches-marine md:text-[2.25rem]">
              {d.reach.title}
            </h2>

            <ul className="mt-10 space-y-5">
              <li className="flex gap-4 rounded-sm border border-cocobiches-marine/8 bg-white p-5 shadow-sm">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cocobiches-creme-50 text-cocobiches-marine">
                  <Mail className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-marine/45">
                    {d.reach.emailLabel}
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 block text-[0.95rem] font-semibold text-cocobiches-marine hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-sm border border-cocobiches-marine/8 bg-white p-5 shadow-sm">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cocobiches-creme-50 text-cocobiches-marine">
                  <Phone className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-marine/45">
                    {d.reach.phoneLabel}
                  </p>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="mt-1 block text-[0.95rem] font-semibold text-cocobiches-marine hover:underline"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-sm border border-cocobiches-marine/8 bg-white p-5 shadow-sm">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cocobiches-creme-50 text-cocobiches-marine">
                  <MapPin className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-marine/45">
                    {d.reach.addressLabel}
                  </p>
                  <p className="mt-1 text-[0.95rem] text-cocobiches-ink/85">{CONTACT_ADDRESS}</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-sm border border-cocobiches-vert/15 bg-cocobiches-vert/[0.04] p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cocobiches-vert/10 text-cocobiches-vert-600">
                  <Clock className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-vert-600/80">
                    {d.reach.responseLabel}
                  </p>
                  <p className="mt-1 text-[0.95rem] font-semibold text-cocobiches-marine">
                    {d.reach.responseValue}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12">
              <p className="cb-eyebrow text-cocobiches-marine/60">{d.departments.eyebrow}</p>
              <h3 className="font-display mt-3 text-xl font-bold text-cocobiches-marine">
                {d.departments.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {CONTACT_DEPARTMENTS.map((dept) => {
                  const meta = d.departments.items[dept.id];
                  return (
                    <li key={dept.id}>
                      <a
                        href={`mailto:${dept.email}`}
                        className="group flex items-start justify-between gap-3 rounded-sm border border-cocobiches-marine/8 bg-white px-4 py-3.5 transition hover:border-cocobiches-marine/20 hover:shadow-sm"
                      >
                        <div>
                          <p className="text-[0.88rem] font-semibold text-cocobiches-marine">
                            {meta.title}
                          </p>
                          <p className="mt-0.5 text-[0.78rem] leading-snug text-cocobiches-muted">
                            {meta.desc}
                          </p>
                          <p className="mt-1.5 font-mono text-[0.72rem] text-cocobiches-marine/55 group-hover:text-cocobiches-marine">
                            {dept.email}
                          </p>
                        </div>
                        <ArrowUpRight
                          className="mt-1 size-4 shrink-0 text-cocobiches-marine/30 transition group-hover:text-cocobiches-marine"
                          aria-hidden
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-sm border border-cocobiches-marine/10 bg-white p-7 shadow-lift ring-1 ring-cocobiches-marine/[0.06] md:p-10 lg:sticky lg:top-[calc(var(--site-header-height)+2rem)]">
              <div className="cb-gold-line mb-8 h-px w-full opacity-70" aria-hidden />
              <p className="cb-eyebrow text-cocobiches-or-muted">{d.form.eyebrow}</p>
              <h2 className="font-display mt-3 text-[1.65rem] font-bold text-cocobiches-marine md:text-[1.85rem]">
                {d.form.title}
              </h2>
              <p className="mt-2 text-[0.82rem] text-cocobiches-muted">{d.form.subtitle}</p>
              <div className="mt-8">
                <ContactForm dict={dict} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SHORTCUTS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.shortcuts.eyebrow}</p>
            <h2 className="font-display mt-4 text-[1.85rem] font-bold text-cocobiches-marine md:text-[2.25rem]">
              {d.shortcuts.title}
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {d.shortcuts.items.map((item, i) => (
              <FadeIn key={item.href} delay={i * 0.05}>
                <Link
                  href={href(locale, item.href)}
                  className="group flex h-full flex-col rounded-sm border border-cocobiches-marine/10 bg-cocobiches-creme-50 p-7 transition duration-500 hover:-translate-y-1 hover:border-cocobiches-marine/20 hover:bg-white hover:shadow-lift"
                >
                  <h3 className="font-display text-lg font-bold text-cocobiches-marine">{item.title}</h3>
                  <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-cocobiches-muted">
                    {item.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine transition group-hover:gap-2">
                    {locale === "fr" ? "Accéder" : "Go"}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="relative overflow-hidden bg-cocobiches-marine py-20 text-cocobiches-creme md:py-28">
        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 md:grid-cols-2 md:items-center md:px-10">
          <FadeIn>
            <h2 className="font-display text-[2rem] font-bold md:text-[2.75rem]">{d.location.title}</h2>
            <p className="mt-5 text-[1.02rem] leading-[1.75] text-cocobiches-creme/85">{d.location.body}</p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <ul className="space-y-4 border-l border-cocobiches-creme/20 pl-6">
              <li className="text-[0.92rem] text-cocobiches-creme/90">{d.location.palace}</li>
              <li className="text-[0.92rem] text-cocobiches-creme/90">{d.location.train}</li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-sm ring-1 ring-white/10">
              <Image
                src="/hotel-jeu-de-paume/carte-versailles.jpg"
                alt={locale === "fr" ? "Carte de Versailles" : "Map of Versailles"}
                width={640}
                height={360}
                className="h-auto w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
