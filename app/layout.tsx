import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { PlausibleAnalytics } from "@/components/analytics/plausible";
import { LenisProvider } from "@/components/layout/lenis-provider";
import "./globals.css";

/** Charte : Montserrat seule pour tout le texte (300–900). Montecatini réservé au logo (fichier image). */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cocobiches.fr"),
  title: {
    default: "Cocobiches",
    template: "%s | Cocobiches",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Cocobiches",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <PlausibleAnalytics />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
