import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Betriebskostenabrechnungsanalyse | REJAS",
  description:
    "Strukturierte Prüfung von Betriebskostenabrechnungen auf Vertragskonformität, Umlagefähigkeit und rechnerische Korrektheit.",
};

export default function BetriebskostenanalysePage() {
  return (
    <ServicePageLayout
      title="Betriebskosten­abrechnungs­analyse"
      nextService={{
        href: "/leistungen/wertsicherung",
        label: "Wertsicherungsüberprüfung",
      }}
    >
      <p className="text-lg text-navy-800 leading-relaxed font-light mb-10">
        Betriebskostenabrechnungen entscheiden oft darüber, ob ein
        Mietverhältnis transparent und konfliktfrei bleibt oder ob unnötige
        Reibung und Kosten entstehen. Eine strukturierte
        Betriebskostenabrechnungsanalyse schafft Klarheit, Sicherheit und
        Verhandlungsstärke.
      </p>

      <h2 className="font-heading text-2xl text-navy-900 mt-14 mb-5">
        Zentrale Prüfungsfragen
      </h2>
      <ul className="space-y-3 text-navy-700">
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          Stimmen Abrechnung und Vertrag überein?
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          Sind Positionen umlagefähig?
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          Wurden Verteilungsschlüssel korrekt angewendet?
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          Ist die Abrechnung schlüssig, prüffähig und rechnerisch korrekt?
        </li>
      </ul>

      <h2 className="font-heading text-2xl text-navy-900 mt-14 mb-5">
        Ergänzende Analysebausteine
      </h2>
      <ul className="space-y-4 text-navy-700">
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Formelle Prüfung</strong> – Zeiträume, Fristen, Vollständigkeit, Darstellung</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Beleg- &amp; Plausibilitätscheck</strong> – stichprobenartig, Mengen/Preise/Leistungsumfang</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Vergleich &amp; Auffälligkeiten</strong> – Vorjahresvergleich, Ausreißer, Kostenverschiebungen</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Zuordnung &amp; Abgrenzung</strong> – Objekt, Einheit, Kostenträger, Leerstand, Allgemeinflächen</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Optimierungsempfehlungen</strong> – Prozesse, Dokumentation, Abrechnungslogik</span>
        </li>
      </ul>

      <div className="mt-14 w-12 h-px bg-gold" />
      <p className="mt-6 text-navy-800 leading-relaxed">
        Damit endet es nicht bei der Analyse: Die Ergebnisse werden so
        aufbereitet, dass Mieter, Vermieter und Hausverwaltung offene Punkte
        sachlich klären können – mit dem Ziel, Kosten zu verstehen, Streit zu
        vermeiden und Entscheidungen sauber abzusichern.
      </p>
    </ServicePageLayout>
  );
}
