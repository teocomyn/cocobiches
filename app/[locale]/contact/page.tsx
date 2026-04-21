import { ContactForm } from "@/components/contact/contact-form";
import { PageIntro } from "@/components/pages/page-intro";
import { getDictionary } from "@/lib/get-dictionary";
import { getLocaleFromParams } from "@/lib/locale-params";
import { href } from "@/lib/paths";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    alternates: {
      canonical: href(locale, "/contact"),
      languages: { fr: "/fr/contact", en: "/en/contact" },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const dict = await getDictionary(locale);
  const c = dict.contact;

  return (
    <>
      <PageIntro title={c.title} lead={c.lead} />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <ContactForm dict={dict} />
      </div>
    </>
  );
}
