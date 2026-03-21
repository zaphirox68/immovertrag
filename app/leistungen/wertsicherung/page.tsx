import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wertsicherungsüberprüfung | REJAS",
  description:
    "Überprüfung, ob vertraglich vereinbarte Wertsicherungsregelungen historisch und aktuell korrekt angewendet wurden.",
};

export default function WertsicherungPage() {
  return (
    <ServicePageLayout
      title="Wertsicherungs­überprüfung"
      prevService={{
        href: "/leistungen/betriebskostenanalyse",
        label: "Betriebskostenanalyse",
      }}
      nextService={{
        href: "/leistungen/mediation",
        label: "Mediation",
      }}
    >
      <p className="text-lg text-navy-800 leading-relaxed font-light mb-10">
        Wertsicherung wirkt unmittelbar auf Ertrag sowie Aufwand und ist
        gleichzeitig ein klassischer Fehlerpunkt in der Praxis. Eine
        Wertsicherungsüberprüfung schafft belastbare Klarheit.
      </p>

      <h2 className="font-heading text-2xl text-navy-900 mt-14 mb-5">
        Was wird geprüft?
      </h2>
      <p className="text-navy-700 leading-relaxed mb-8">
        Wurden die vertraglich vereinbarten Regeln korrekt übernommen und in der
        Historie sowie aktuell richtig angewendet? Stimmen Indexbezug,
        Stichtage, Bezugszeiträume, Schwellen/Staffeln, Intervalle und die
        konkrete Berechnungslogik? Sind die Mietanpassungen nachvollziehbar
        dokumentiert?
      </p>

      <h2 className="font-heading text-2xl text-navy-900 mt-14 mb-5">
        Konkreter Nutzen
      </h2>
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <div className="p-6 bg-white/80 rounded-xl border border-navy-900/5 shadow-sm hover:-translate-y-0.5 hover:border-gold/25 hover:shadow-md transition-all duration-300 cursor-default">
          <h3 className="font-medium text-navy-900 mb-2">Für Mieter</h3>
          <p className="text-sm text-navy-700 leading-relaxed">
            Sicherheit über die Richtigkeit des Aufwands und die Berechnungsbasis
          </p>
        </div>
        <div className="p-6 bg-white/80 rounded-xl border border-navy-900/5 shadow-sm hover:-translate-y-0.5 hover:border-gold/25 hover:shadow-md transition-all duration-300 cursor-default">
          <h3 className="font-medium text-navy-900 mb-2">Für Vermieter</h3>
          <p className="text-sm text-navy-700 leading-relaxed">
            Absicherung des Ertrags und eine prüffähige, sauber hergeleitete Umsetzung
          </p>
        </div>
      </div>

      <h2 className="font-heading text-2xl text-navy-900 mt-14 mb-5">
        Ergänzende Prüfbausteine
      </h2>
      <ul className="space-y-4 text-navy-700">
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Historien-Check &amp; Kettenlogik</strong> – keine &ldquo;falsche Basis&rdquo; über Jahre</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Formalia &amp; Wirksamkeit</strong> – Mitteilungen, Fristen, Auslöser</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Plausibilitäts- und Risikobewertung</strong> – Abweichungen, finanzielle Auswirkungen</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Klärung/Kommunikation</strong> – strukturierte Abstimmung mit allen Parteien</span>
        </li>
      </ul>

      <div className="mt-14 w-12 h-px bg-gold" />
      <p className="mt-6 text-navy-800 leading-relaxed">
        Bei Privatpersonen bzw. im wohnrechtlichen Kontext fließen zusätzlich
        die aktuellen gesetzlichen Rahmenbedingungen in die Beurteilung ein.
        Ergebnis ist eine klare Grundlage für Kalkulation, Entscheidung und
        saubere Umsetzung.
      </p>
    </ServicePageLayout>
  );
}
