"use client"

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, FileSearch, TrendingUp, Handshake } from "lucide-react";
import { useHeroMode } from "@/components/HeroModeContext";

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

const heroImages = [
  { src: "/hero-premium-architecture.jpg", label: "Current" },
  { src: "/hero-option-1.png", label: "Option 1" },
  { src: "/hero-option-2.png", label: "Option 2" },
  { src: "/hero-option-3.jpg", label: "Option 3" },
  { src: "/hero-option-4.jpg", label: "Option 4" },
  { src: "/hero-option-5.jpg", label: "Option 5" },
  { src: "/hero-option-6.jpg", label: "Option 6" },
  { src: "/hero-option-7.jpg", label: "Option 7" },
  { src: "/hero-option-8.jpg", label: "Option 8" },
  { src: "/hero-option-9.jpg", label: "Option 9" },
  { src: "/hero-option-10.jpg", label: "Option 10" },
];

export const Hero = () => {
  const [current, setCurrent] = useState(5);
  const { mode } = useHeroMode();
  const isLight = mode === "light";

  const next = useCallback(() => setCurrent((i) => (i + 1) % heroImages.length), []);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + heroImages.length) % heroImages.length), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url('${img.src}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay: radial gradient — stronger in center, fading at edges */}
      <div
        className="absolute inset-0 z-[1] transition-all duration-700"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at center, rgba(245,241,235,0.93) 0%, rgba(245,241,235,0.80) 50%, rgba(245,241,235,0.48) 100%)"
            : "radial-gradient(ellipse at center, rgba(25,37,55,0.93) 0%, rgba(25,37,55,0.82) 50%, rgba(25,37,55,0.60) 100%)",
        }}
      />
      <div
        className={`absolute inset-0 z-[2] bg-cover bg-center mix-blend-lighten transition-opacity duration-700 ${isLight ? "opacity-10" : "opacity-20"}`}
        style={{ backgroundImage: `url('/backgrounddark.png')` }}
      />
      <div className="absolute inset-0 bg-noise opacity-20 z-[3]" />

      {/* Arrow navigation */}
      <button
        onClick={prev}
        className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 transition-colors duration-300 ${
          isLight ? "text-navy-900/30 hover:text-navy-900/70" : "text-white/30 hover:text-white/70"
        }`}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1} />
      </button>
      <button
        onClick={next}
        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 transition-colors duration-300 ${
          isLight ? "text-navy-900/30 hover:text-navy-900/70" : "text-white/30 hover:text-white/70"
        }`}
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1} />
      </button>

      {/* Image label + dot indicators */}
      <div className="absolute bottom-14 left-0 right-0 z-20 flex flex-col items-center gap-3">
        <span className={`text-xs tracking-wider uppercase transition-colors duration-500 ${
          isLight ? "text-navy-900/40" : "text-white/40"
        }`}>
          {heroImages[current].label}
        </span>
        <div className="flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-gold w-6"
                  : isLight
                    ? "bg-navy-900/20 hover:bg-navy-900/40"
                    : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center text-center drop-shadow-sm">
        <Image
          src={isLight ? "/rejas-logo-dark.png" : "/rejas-logo-white.png"}
          alt="REJAS"
          width={280}
          height={80}
          className="h-16 md:h-20 w-auto mb-12 opacity-90 transition-opacity duration-500"
          style={{ width: "auto" }}
          priority
        />

        <div className="w-16 h-px bg-gold mb-10" />

        <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight tracking-wide max-w-3xl transition-colors duration-500 ${
          isLight ? "text-navy-900" : "text-white"
        }`}>
          Kosten. Verträge.
          <br />
          <span className="text-gold">Kommunikation.</span>
        </h1>

        <p className={`text-base md:text-lg mb-16 max-w-2xl mx-auto font-light leading-relaxed tracking-wide transition-colors duration-500 ${
          isLight ? "text-navy-700" : "text-gray-400"
        }`}>
          Fokussierte Leistungen dort, wo in der Praxis die meisten
          Reibungspunkte und Potenziale liegen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-3xl mb-16">
          {services.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className={`group flex flex-col items-center gap-3 py-6 px-4 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                isLight
                  ? "border-navy-900/15 bg-white/40 shadow-lg shadow-navy-900/5 hover:bg-white/55 hover:border-gold/40 hover:shadow-xl"
                  : "border-white/10 bg-navy-900/40 hover:bg-navy-900/50 hover:border-gold/20"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                isLight ? "bg-gold/15 group-hover:bg-gold/25" : "bg-gold/10 group-hover:bg-gold/20"
              }`}>
                <service.icon className={`h-5 w-5 ${isLight ? "text-gold-700" : "text-gold"}`} strokeWidth={1.5} />
              </div>
              <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isLight
                  ? "text-navy-800 group-hover:text-navy-900"
                  : "text-gray-300 group-hover:text-white"
              }`}>
                {service.label}
              </span>
            </Link>
          ))}
        </div>

        {isLight ? (
          <Link
            href="#kontakt"
            className="group inline-flex items-center gap-2 bg-[#D4B47A] text-navy-900 hover:bg-[#e0c48e] px-8 py-3 rounded-xl font-semibold transition-all duration-500 tracking-wide shadow-[0_0_24px_rgba(212,180,122,0.35)] hover:shadow-[0_0_36px_rgba(212,180,122,0.55)] text-sm uppercase"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        ) : (
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm text-gold/80 hover:text-gold border-b border-gold/30 hover:border-gold/60 pb-1 transition-all duration-300 tracking-wider uppercase"
          >
            Kontakt aufnehmen
          </Link>
        )}
      </div>

      <div className={`absolute bottom-4 left-0 right-0 flex justify-center animate-bounce pointer-events-none z-10`}>
        <ArrowDown className={`h-5 w-5 ${isLight ? "text-navy-900/20" : "text-white/20"}`} />
      </div>
    </section>
  );
};
