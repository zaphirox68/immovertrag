"use client"

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { HeroModeProvider } from "@/components/HeroModeContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

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
    <HeroModeProvider>
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Header -- dark with blueprint */}
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] pt-32 pb-20">
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-b from-black/55 via-black/40 to-black/55" />
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

      {/* Content -- light with blueprint background for CI consistency */}
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')] py-16 md:py-24">
        <div className="absolute inset-0 bg-white/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40" />
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

      {/* Interesse CTA -- dark with blueprint, matching hero/contact style */}
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] py-20">
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-b from-black/55 via-black/40 to-black/55" />
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
            className="group inline-flex items-center gap-2 bg-gold text-navy-900 hover:bg-white hover:text-navy-900 px-8 py-3.5 rounded-xl font-medium transition-all duration-500 tracking-wide shadow-[0_0_20px_rgba(201,176,122,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
    </HeroModeProvider>
  );
}
