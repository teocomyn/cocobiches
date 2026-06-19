import { ContactPageView } from "@/components/brand/contact-page";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getDictionary } from "@/lib/get-dictionary";
import { contactPageSchema, jsonLdGraph } from "@/lib/json-ld";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import { OG_IMAGES } from "@/lib/og-images";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    ogImagePath: OG_IMAGES.contact,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const dict = await getDictionary(locale);

  const jsonLd = jsonLdGraph(
    contactPageSchema(locale, dict.meta.contact.title, dict.meta.contact.description),
  );

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <ContactPageView locale={locale} dict={dict} />
    </>
  );
}
