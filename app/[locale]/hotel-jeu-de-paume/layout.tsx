import { HjpFooter } from "@/components/hotel-jeu-de-paume/hjp-footer";
import { HjpSubNav } from "@/components/hotel-jeu-de-paume/hjp-subnav";
import { notFound } from "next/navigation";
import { getLocaleFromParams } from "@/lib/locale-params";

export default async function HotelJdpLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }> | undefined;
}>) {
  const locale = await getLocaleFromParams(params);
  if (!locale) notFound();

  return (
    <div className="hjp-scope bg-cocobiches-creme-50">
      <HjpSubNav locale={locale} />
      {children}
      <HjpFooter locale={locale} />
    </div>
  );
}
