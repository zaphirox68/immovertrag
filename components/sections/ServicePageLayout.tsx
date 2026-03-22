"use client"

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { BlueprintReveal } from "@/components/BlueprintGlow";

interface ServicePageLayoutProps {
  title: string;
  children: ReactNode;
  prevService?: { href: string; label: string };
  nextService?: { href: string; label: string };
}

export function ServicePageLayout({
  title,
  children,
  prevService,
  nextService,
}: ServicePageLayoutProps) {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Header -- dark with blueprint, stronger at edges */}
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
            href="/#leistungen"
            className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-sm mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide">
            {title}
          </h1>
        </div>
      </section>

      {/* Content -- light with blueprint, same as Leistungsübersicht but 20% more visible */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/backgroundlight.png')",
            backgroundRepeat: "repeat-x",
            transform: "translateX(-7%)",
          }}
        />
        <BlueprintReveal
          gradient="linear-gradient(to right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0.92) 35%, rgba(255,255,255,0.92) 65%, rgba(255,255,255,0.65) 80%, rgba(255,255,255,0.3) 100%)"
          radius={300}
          revealStrength={0}
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {children}
          </div>
        </div>
      </section>

      {/* Prev/Next navigation */}
      <section className="border-t border-gray-100 py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            {prevService ? (
              <Link
                href={prevService.href}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-navy-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                {prevService.label}
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                href={nextService.href}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-navy-900 transition-colors"
              >
                {nextService.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Interesse CTA -- dark with blueprint, stronger at edges */}
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] py-20">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.30) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-4 tracking-wide">
            Interesse geweckt?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Kontaktieren Sie mich für ein unverbindliches Gespräch.
          </p>
          <Link
            href="/#kontakt"
            className="group inline-flex items-center gap-2 bg-gold text-navy-900 hover:bg-[#f5f0e8] hover:text-navy-900 px-8 py-3.5 rounded-xl font-medium transition-all duration-500 tracking-wide shadow-[0_0_20px_rgba(201,176,122,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
