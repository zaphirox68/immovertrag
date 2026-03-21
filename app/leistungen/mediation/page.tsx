import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediation | REJAS",
  description:
    "Professionelle Mediation zwischen Mieter, Vermieter und Hausverwaltung – neutral, strukturiert und lösungsorientiert.",
};

export default function MediationPage() {
  return (
    <ServicePageLayout
      title="Mediation zwischen Mieter, Vermieter und Hausverwaltung"
      prevService={{
        href: "/leistungen/wertsicherung",
        label: "Wertsicherungsüberprüfung",
      }}
    >
      <p className="text-navy-700 leading-relaxed mb-10">
        Wenn Kommunikation stockt, leidet meist nicht nur das Klima – sondern
        auch Zeit, Geld und Stabilität des Mietverhältnisses. Eine
        professionelle Mediation stellt Struktur her, reduziert Eskalation und
        führt schneller zu Lösungen, die beide Seiten mittragen.
      </p>

      <p className="text-navy-700 leading-relaxed mb-10">
        Als neutrale Schnittstelle werden Themen geklärt, Interessen sauber
        herausgearbeitet und umsetzbare Vereinbarungen verhandelt.
      </p>

      <div className="w-12 h-px bg-gold mb-6" />
      <p className="text-navy-900 font-heading text-lg italic leading-relaxed mb-14">
        &ldquo;Im Mittelpunkt steht der gemeinsame Vorteil: ein stabiles,
        wirtschaftlich sinnvolles Mietverhältnis, das langfristig
        funktioniert – fair für beide Seiten.&rdquo;
      </p>

      <h2 className="font-heading text-2xl text-navy-900 mt-14 mb-5">
        Kernbestandteile der Vorgehensweise
      </h2>
      <ul className="space-y-4 text-navy-700">
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Struktur &amp; Moderation</strong> – klare Agenda, Faktenbasis, nachvollziehbare Schritte</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Lösungsentwicklung</strong> – konkrete Optionen statt Positionen</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Vereinbarungen mit Substanz</strong> – Zuständigkeiten, Fristen, Dokumentation</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          <span><strong>Deeskalation</strong> – Kommunikation wieder handlungsfähig machen</span>
        </li>
      </ul>

      <h2 className="font-heading text-2xl text-navy-900 mt-14 mb-5">
        Einsatzbereiche
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-6 bg-white/80 rounded-xl border border-navy-900/5 shadow-sm hover:-translate-y-0.5 hover:border-gold/25 hover:shadow-md transition-all duration-300 cursor-default">
          <h3 className="font-medium text-navy-900 mb-2">Bestandsverhältnis</h3>
          <p className="text-sm text-navy-700 leading-relaxed">
            Betriebskosten, Wertsicherung, Mängel, Prozesse, Zuständigkeiten
          </p>
        </div>
        <div className="p-6 bg-white/80 rounded-xl border border-navy-900/5 shadow-sm hover:-translate-y-0.5 hover:border-gold/25 hover:shadow-md transition-all duration-300 cursor-default">
          <h3 className="font-medium text-navy-900 mb-2">Vermarktungsprozess</h3>
          <p className="text-sm text-navy-700 leading-relaxed">
            Übergaben, Vertragsverhandlungen, Klärungen vor Neuvermietung
          </p>
        </div>
      </div>

      <h2 className="font-heading text-2xl text-navy-900 mt-14 mb-5">
        Ziel
      </h2>
      <ul className="space-y-3 text-navy-700">
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          Reibungspunkte reduzieren
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          Entscheidungsfähigkeit herstellen
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-gold mt-1.5 text-xs">&#9670;</span>
          Wirtschaftlich tragfähige Lösungen ermöglichen
        </li>
      </ul>
    </ServicePageLayout>
  );
}
