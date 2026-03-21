import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "REJAS | Betriebskosten, Wertsicherung & Mediation",
  description:
    "REJAS Immobilien & Management Holding GmbH – Spezialisierte Leistungen für Betriebskostenabrechnungsanalyse, Wertsicherungsüberprüfung und Mediation zwischen Mieter, Vermieter und Hausverwaltung.",
  openGraph: {
    title: "REJAS | Betriebskosten, Wertsicherung & Mediation",
    description:
      "Fokussierte Leistungen an der Schnittstelle von Kosten, Verträgen und Kommunikation.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={cn(
          inter.variable,
          cormorant.variable,
          "min-h-screen bg-white font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
