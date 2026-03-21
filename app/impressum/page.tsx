import { NavbarWithProvider } from "@/components/layout/NavbarWithProvider";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | REJAS",
};

export default function ImpressumPage() {
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
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Angaben gemäß § 5 ECG
              </h2>
              <div className="space-y-1 text-muted-foreground leading-relaxed">
                <p className="text-navy-900 font-medium">
                  REJAS Immobilien & Management Holding GmbH
                </p>
                <p>Ernst-Melchior-Gasse 11/3/30</p>
                <p>1020 Wien</p>
                <p>Österreich</p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Unternehmensregister
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p>FN: 647434i</p>
                <p>Firmenbuchgericht: Handelsgericht Wien</p>
                <p>UID-Nr.: ATU81929102</p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Vertretungsbefugt
              </h2>
              <p className="text-muted-foreground">
                Geschäftsführer: Jakob Scherzenlehner
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Kontakt
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:jakob.scherzenlehner@rejas.at"
                    className="text-navy-900 hover:text-gold transition-colors"
                  >
                    jakob.scherzenlehner@rejas.at
                  </a>
                </p>
                <p>
                  Telefon:{" "}
                  <a
                    href="tel:+436647870648"
                    className="text-navy-900 hover:text-gold transition-colors"
                  >
                    +43 664 787 06 48
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
