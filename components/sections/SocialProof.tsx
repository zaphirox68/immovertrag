import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Klare Erklärung aller Schritte. Professionelle Vertragserstellung ohne versteckte Kosten. Wir haben uns sehr gut aufgehoben gefühlt.",
    author: "Familie Maier",
    role: "Wohnungskauf Wien"
  },
  {
    text: "Schnelle Abwicklung und kompetente Beratung. Die Treuhandschaft gab uns die notwendige Sicherheit bei der Transaktion.",
    author: "Andreas K.",
    role: "Hauskauf Niederösterreich"
  },
  {
    text: "Transparente Kommunikation und faire Preisgestaltung während des gesamten Prozesses. Absolut empfehlenswert.",
    author: "Dr. Schmidt",
    role: "Eigentumswohnung Graz"
  }
];

export const SocialProof = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')] py-24 border-y border-gray-100">
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span>Exzellente Bewertungen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Vertrauen durch Erfahrung</h2>
          <p className="text-lg text-muted-foreground">146 Immobilienkaufverträge erfolgreich abgewickelt (2024)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300">
              <CardContent className="pt-8 pb-8 px-8 flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-navy-800/80 mb-6 leading-relaxed italic flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <p className="font-bold text-navy-900">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
