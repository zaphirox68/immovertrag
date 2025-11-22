import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] py-24">
      <div className="absolute inset-0 bg-black/55 bg-gradient-to-b from-black/55 via-black/35 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[128px]" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-700/50 rounded-full blur-[128px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Starten Sie jetzt Ihre <span className="text-gold">sichere Abwicklung.</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Keine Wartezeiten. Sofortige Terminvergabe. Wir begleiten Sie vom ersten Entwurf bis zur Schlüsselübergabe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gold text-navy-900 hover:bg-white hover:text-navy-900 font-semibold px-8 py-6 h-auto text-lg rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(212,180,122,0.25)]"
            asChild
          >
            <Link href="#kontakt">
              Kostenloses Erstgespräch
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-8 py-6 h-auto text-lg rounded-xl bg-transparent backdrop-blur-sm"
            asChild
          >
            <Link href="tel:+43123456789">
              Direkt anrufen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
