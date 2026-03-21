import { NavbarWithProvider } from "@/components/layout/NavbarWithProvider";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | REJAS",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <NavbarWithProvider />

      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] pt-32 pb-20">
        <div className="absolute inset-0 bg-navy-900/88" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="container relative z-10 mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-sm mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-navy-700 leading-relaxed mb-6">
              Die Datenschutzerklärung wird in Kürze ergänzt. Bei Fragen zum
              Datenschutz wenden Sie sich bitte an:
            </p>
            <p className="text-navy-900 font-medium">
              REJAS Immobilien &amp; Management Holding GmbH
            </p>
            <p className="text-navy-700">
              E-Mail:{" "}
              <a
                href="mailto:jakob.scherzenlehner@rejas.at"
                className="text-navy-900 hover:text-gold transition-colors"
              >
                jakob.scherzenlehner@rejas.at
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
