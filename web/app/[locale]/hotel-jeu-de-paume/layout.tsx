import { HjpFooter } from "@/components/hotel-jeu-de-paume/hjp-footer";
import { HjpSubNav } from "@/components/hotel-jeu-de-paume/hjp-subnav";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n-config";

export default async function HotelJdpLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <div className="hjp-scope bg-cocobiches-creme-50">
      <HjpSubNav locale={locale} />
      {children}
      <HjpFooter locale={locale} />
    </div>
  );
}
