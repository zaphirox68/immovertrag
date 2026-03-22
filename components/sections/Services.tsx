"use client"

import { FileSearch, TrendingUp, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlueprintReveal } from "@/components/BlueprintGlow";

const services = [
  {
    icon: FileSearch,
    title: "Betriebskosten\u00ADabrechnungs\u00ADanalyse",
    shortText:
      "Strukturierte Prüfung von Betriebskostenabrechnungen auf Vertragskonformität, Umlagefähigkeit, Verteilungsschlüssel sowie Nachvollziehbarkeit und rechnerische Korrektheit – inklusive Unterstützung bei der sachlichen Klärung zwischen Mieter, Vermieter und Hausverwaltung.",
    href: "/leistungen/betriebskostenanalyse",
  },
  {
    icon: TrendingUp,
    title: "Wertsicherungs\u00ADüberprüfung",
    shortText:
      "Überprüfung, ob vertraglich vereinbarte Wertsicherungsregelungen historisch und aktuell korrekt angewendet wurden (Index, Stichtage, Intervalle, Berechnungslogik) – als Grundlage für die Kalkulation von Aufwand bzw. Ertrag; bei Privatpersonen zusätzlich unter Berücksichtigung gesetzlicher Vorgaben.",
    href: "/leistungen/wertsicherung",
  },
  {
    icon: Handshake,
    title: "Mediation",
    shortText:
      "Neutrale Moderation zur Deeskalation und Entwicklung tragfähiger Lösungen – mit Fokus auf ein stabiles, wirtschaftlich sinnvolles Mietverhältnis, sowohl im laufenden Bestandsverhältnis als auch im Vermarktungsprozess.",
    href: "/leistungen/mediation",
  },
];

export const Services = () => {
  return (
    <section
      id="leistungen"
      className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')] py-28 md:py-36"
    >
      <BlueprintReveal
        gradient="linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.7) 100%)"
        radius={300}
        revealStrength={0}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 md:mb-20 -mt-5">
          <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-medium mb-4">
            Unsere Leistungen
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-navy-900 tracking-wide">
            Leistungsübersicht
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-white/80 backdrop-blur-md border border-navy-900/8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-12px_rgba(25,37,55,0.15)] hover:border-gold/30"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-gold/[0.03] to-transparent" />

              <div className="relative p-8 pt-10 pb-8">
                <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold flex items-center justify-center mb-7 shadow-lg shadow-navy-900/10 group-hover:shadow-gold/10 transition-shadow duration-500">
                  <service.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl font-medium mb-4 text-navy-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {service.shortText}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-navy-900 font-medium group-hover:text-gold transition-colors duration-300">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>

              <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
