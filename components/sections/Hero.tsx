import { Button } from "@/components/ui/button";
import { Calculator, Phone } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/hero-premium-architecture.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center flex flex-col items-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold backdrop-blur-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-gold animate-pulse"></span>
          Immobilienrecht Österreich
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl">
          Ihr Immobilienkaufvertrag –<br />
          <span className="text-gold-gradient">Fixpreis-Garantie.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          1,5 % vom Kaufpreis + USt. Klare Abläufe. Keine versteckten Kosten.
          <br className="hidden md:block" />
          Ihre Kanzlei für stressfreie Immobilienabwicklung.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Button 
            size="lg" 
            className="bg-gold text-navy-900 hover:bg-white hover:text-navy-900 font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(212,180,122,0.2)] w-full sm:w-auto"
            asChild
          >
            <Link href="#rechner">
              <Calculator className="mr-2 h-5 w-5" />
              Kosten berechnen
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 w-full sm:w-auto"
            asChild
          >
            <Link href="#kontakt">
              Rückruf anfordern
              <Phone className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce duration-2000 pointer-events-none">
        <div className="h-10 w-6 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="h-1.5 w-1.5 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};
