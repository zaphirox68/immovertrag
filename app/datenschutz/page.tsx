import { Navbar } from "@/components/layout/Navbar";
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
            Datenschutzerklärung
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
                1. Verantwortlicher
              </h2>
              <div className="space-y-1 text-navy-700 leading-relaxed">
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-navy-900 font-medium mt-2">
                  REJAS Immobilien & Management Holding GmbH
                </p>
                <p>Jakob Scherzenlehner</p>
                <p>Ernst-Melchior-Gasse 11/3/30, 1020 Wien</p>
                <p>
                  Kontakt:{" "}
                  <a
                    href="mailto:jakob.scherzenlehner@rejas.at"
                    className="text-navy-900 hover:text-gold transition-colors"
                  >
                    jakob.scherzenlehner@rejas.at
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                2. Zweck der Datenverarbeitung
              </h2>
              <p className="text-navy-700 leading-relaxed">
                Wir verarbeiten personenbezogene Daten (Name, E-Mail-Adresse,
                Telefonnummer, Nachrichteninhalt), die Sie über das
                Kontaktformular dieser Website übermitteln, ausschließlich zum
                Zweck der Bearbeitung und Beantwortung Ihrer Anfrage.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (vorvertragliche Maßnahmen bzw. Vertragsanbahnung) sowie
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Beantwortung von Anfragen).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                3. Kontaktformular & Forminit
              </h2>
              <p className="text-navy-700 leading-relaxed">
                Für die Verarbeitung der Kontaktformular-Eingaben nutzen wir
                den Dienst Forminit (Forminit Ltd.). Die von Ihnen eingegebenen
                Daten werden an Forminit übermittelt und dort gespeichert, um
                die Anfrage per E-Mail an uns weiterzuleiten.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an einer effizienten Bearbeitung von Anfragen).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                4. Hosting
              </h2>
              <p className="text-navy-700 leading-relaxed">
                Diese Website wird bei Vercel Inc. gehostet. Vercel verarbeitet
                Server-Logdaten (z.&nbsp;B. IP-Adresse, Zeitpunkt des Zugriffs)
                zur technischen Bereitstellung der Website. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                sicheren und effizienten Bereitstellung der Website). Vercel ist
                unter dem EU-US Data Privacy Framework (DPF) zertifiziert.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                5. Speicherdauer & Löschung
              </h2>
              <p className="text-navy-700 leading-relaxed">
                Die über das Kontaktformular übermittelten Daten werden so lange
                gespeichert, wie es für die Bearbeitung Ihrer Anfrage
                erforderlich ist. Nach Abschluss der Bearbeitung werden die
                Daten gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen
                (z.&nbsp;B. 7 Jahre nach UGB/BAO) entgegenstehen.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-navy-900 mb-4">
                6. Ihre Rechte
              </h2>
              <p className="text-navy-700 leading-relaxed mb-4">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit und
                Widerspruch gegen die Verarbeitung Ihrer personenbezogenen
                Daten.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten
                gegen das Datenschutzrecht verstößt, können Sie sich bei der
                österreichischen Datenschutzbehörde (Barichgasse 40-42,
                1030 Wien,{" "}
                <a
                  href="https://www.dsb.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 hover:text-gold transition-colors"
                >
                  www.dsb.gv.at
                </a>
                ) beschweren.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
