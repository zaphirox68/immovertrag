"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, FileSearch, TrendingUp, Handshake } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    label: "Betriebskostenanalyse",
    href: "#leistungen",
  },
  {
    icon: TrendingUp,
    label: "Wertsicherung",
    href: "#leistungen",
  },
  {
    icon: Handshake,
    label: "Mediation",
    href: "#leistungen",
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/hero-main.jpg')` }}
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(25,37,55,0.93) 0%, rgba(25,37,55,0.82) 50%, rgba(25,37,55,0.60) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[2] bg-cover bg-center mix-blend-lighten opacity-20"
        style={{ backgroundImage: `url('/backgrounddark.png')` }}
      />
      <div className="absolute inset-0 bg-noise opacity-20 z-[3]" />

      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center text-center drop-shadow-sm">
        <Image
          src="/rejas-logo-white.png"
          alt="REJAS"
          width={280}
          height={80}
          className="h-16 md:h-20 w-auto mb-12 opacity-90"
          style={{ width: "auto" }}
          priority
        />

        <div className="w-16 h-px bg-gold mb-10" />

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight tracking-wide max-w-3xl text-white">
          Klarheit in
          <br />
          <span className="text-gold">Immobilienfragen.</span>
        </h1>

        <p className="text-base md:text-lg mb-16 max-w-2xl mx-auto font-light leading-relaxed tracking-wide text-gray-400">
          Transparenz in Zahlen, Vertragstreue in der Umsetzung,
          Ruhe im Verhältnis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-3xl mb-16">
          {services.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="group flex flex-col items-center gap-3 py-6 px-4 rounded-2xl border border-white/10 bg-navy-900/40 backdrop-blur-md hover:bg-navy-900/50 hover:border-gold/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center transition-colors duration-500">
                <service.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300">
                {service.label}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="#kontakt"
          className="inline-flex items-center gap-2 text-sm text-gold/80 hover:text-gold border-b border-gold/30 hover:border-gold/60 pb-1 transition-all duration-300 tracking-wider uppercase"
        >
          Kontakt aufnehmen
        </Link>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce pointer-events-none z-10">
        <ArrowDown className="h-5 w-5 text-white/20" />
      </div>
    </section>
  );
};
