import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import { PlausibleAnalytics } from "@/components/analytics/plausible";
import { isLocale } from "@/lib/i18n-config";
import { getMetadataBase } from "@/lib/metadata";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "600", "700"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Cocobiches",
    template: "%s | Cocobiches",
  },
  icons: {
    icon: "/brand/cocobiches-logo.png",
    apple: "/brand/cocobiches-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Cocobiches",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const localeHeader = h.get("x-locale");
  const lang = localeHeader && isLocale(localeHeader) ? localeHeader : "fr";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <PlausibleAnalytics />
        {children}
      </body>
    </html>
  );
}
