import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { getLocaleFromParams } from "@/lib/locale-params";
import { href } from "@/lib/paths";

export default async function LocaleNotFound({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = (await getLocaleFromParams(params)) ?? "fr";
  const dict = await getDictionary(locale);
  const n = dict.notFound;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cocobiches-creme-50 px-6 py-24 text-center text-cocobiches-marine">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cocobiches-muted">
        404
      </p>
      <h1 className="font-display mt-4 max-w-lg text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
        {n.title}
      </h1>
      <p className="mt-4 max-w-md text-cocobiches-muted">{n.body}</p>
      <Link
        href={href(locale)}
        className="mt-8 inline-flex rounded-full bg-cocobiches-marine px-6 py-3 text-sm font-semibold text-white transition hover:bg-cocobiches-marine-800"
      >
        {n.cta}
      </Link>
    </div>
  );
}
