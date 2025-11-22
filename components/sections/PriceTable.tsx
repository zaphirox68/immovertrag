import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PriceTable() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] py-24">
      <div className="absolute inset-0 bg-black/55 bg-gradient-to-b from-black/55 via-black/35 to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-dark rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative">
             {/* Gold Top Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-yellow-200 to-gold-500" />

            <div className="flex flex-col md:flex-row">
              {/* Left Side - Content */}
              <div className="p-10 md:p-12 md:w-3/5 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Unser Pauschalangebot</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Keine versteckten Kosten. Keine Stundensätze. Wir vereinbaren ein fixes Pauschalhonorar für die gesamte
                    Abwicklung.
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    "Erstgespräch inklusive",
                    "Vertragserstellung",
                    "Treuhandabwicklung (RAK)",
                    "Grundbuchsgesuch",
                    "Steuerberechnung & Meldung",
                    "Übernahme gesamte Korrespondenz",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4 group">
                      <div className="bg-gold/20 p-1.5 rounded-full shrink-0 group-hover:bg-gold transition-colors duration-300">
                        <Check className="h-4 w-4 text-gold group-hover:text-navy-900 transition-colors duration-300" />
                      </div>
                      <span className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Price */}
              <div className="md:w-2/5 p-10 md:p-12 flex flex-col justify-center items-center text-center relative bg-white/5 backdrop-blur-md">
                <div className="hidden md:block absolute left-0 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                
                <span className="text-gold font-medium mb-2 tracking-wide uppercase text-xs">Honorar ab</span>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-7xl font-bold tracking-tighter text-white">1,5</span>
                  <span className="text-3xl font-bold text-gold">%</span>
                </div>
                <p className="text-sm text-gray-400 mb-8">+ 20% USt. vom Kaufpreis</p>
                
                <Button
                  className="w-full bg-gold text-navy-900 hover:bg-white hover:text-navy-900 font-bold shadow-[0_0_20px_rgba(212,180,122,0.3)] h-14 text-lg rounded-xl transition-all hover:scale-105"
                  size="lg"
                  asChild
                >
                  <Link href="#kontakt">Jetzt anfragen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
