import { Navbar } from "@/components/layout/Navbar";
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
      <Navbar />

      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] pt-32 pb-20">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.30) 100%)",
          }}
        />
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

      <section className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')]">
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10">

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Medieninhaber & Herausgeber
              </h2>
              <div className="space-y-1 text-navy-700 leading-relaxed">
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
              <div className="space-y-1 text-navy-700 leading-relaxed">
                <p>FN: 647434i</p>
                <p>Firmenbuchgericht: Handelsgericht Wien</p>
                <p>Geschäftsführer: Jakob Scherzenlehner</p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Kontakt
              </h2>
              <div className="space-y-1 text-navy-700 leading-relaxed">
                <p>
                  E-Mail:{" "}
                  <a href="mailto:jakob.scherzenlehner@rejas.at" className="text-navy-900 hover:text-gold transition-colors">
                    jakob.scherzenlehner@rejas.at
                  </a>
                </p>
                <p>
                  Telefon:{" "}
                  <a href="tel:+436647870648" className="text-navy-900 hover:text-gold transition-colors">
                    +43 664 7870648
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Unternehmensgegenstand
              </h2>
              <p className="text-navy-700 leading-relaxed">
                Betriebswirtschaftliche Beratung, insbesondere die Analyse von
                Betriebskostenabrechnungen und Wertsicherungsprüfungen sowie
                Mediation.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Gewerbe- und berufsrechtliche Vorschriften
              </h2>
              <div className="space-y-1 text-navy-700 leading-relaxed">
                <p>Berufsbezeichnung: Unternehmensberater einschließlich der Unternehmensorganisation</p>
                <p>Verleihungsstaat: Österreich</p>
                <p>GISA-Zahl: 38379802</p>
                <p>Aufsichtsbehörde: Magistratisches Bezirksamt des 2/20 Bezirks</p>
                <p>Kammerzugehörigkeit: Mitglied der Wirtschaftskammer Wien, Fachgruppe Unternehmensberatung, Buchhaltung und Informationstechnologie</p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Anwendbare Rechtsvorschriften
              </h2>
              <p className="text-navy-700 leading-relaxed">
                Gewerbeordnung (GewO) sowie E-Commerce-Gesetz (ECG). Einsehbar
                unter:{" "}
                <a
                  href="https://www.ris.bka.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 hover:text-gold transition-colors"
                >
                  www.ris.bka.gv.at
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Hinweis auf Umsatzsteuer
              </h2>
              <p className="text-navy-700 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer: ATU81929102
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                Online-Streitbeilegung
              </h2>
              <p className="text-navy-700 leading-relaxed">
                Verbraucher haben die Möglichkeit, Beschwerden an die
                Online-Streitbeilegungsplattform der EU zu richten:{" "}
                <a
                  href="https://ec.europa.eu/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 hover:text-gold transition-colors"
                >
                  https://ec.europa.eu/odr
                </a>
                . Sie können allfällige Beschwerden auch an die oben angegebene
                E-Mail-Adresse richten.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
