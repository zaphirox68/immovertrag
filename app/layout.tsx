import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// We use Inter as a fallback/primary font. 
// Ideally, we would load 'Satoshi' locally here if we had the file.
// For now, we rely on the class 'font-heading' mapping to it.

export const metadata: Metadata = {
  title: "Immobilienkaufvertrag Österreich | Rechtssicher & Fixpreis",
  description: "Ihr Immobilienkaufvertrag – transparent, fix und ohne Überraschungen. Kanzlei für Immobilienrecht.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={cn(inter.variable, "min-h-screen bg-neutral-light font-sans")}>
        {children}
      </body>
    </html>
  );
}

