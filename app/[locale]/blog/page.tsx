import { getLocaleFromParams } from "@/lib/locale-params";
import { href } from "@/lib/paths";
import { redirect } from "next/navigation";

/** @deprecated Ancienne URL /blog → /journal */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  redirect(href(locale, "/journal"));
}
