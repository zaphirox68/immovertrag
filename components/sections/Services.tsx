import { Card, CardContent } from "@/components/ui/card";
import { FileText, MessageSquare, Landmark, FolderOpen, Euro, FileCheck } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Vertragserstellung",
    description: "Rechtssichere Erstellung des Kaufvertrags nach aktuellem österreichischem Recht."
  },
  {
    icon: MessageSquare,
    title: "Vertragserklärung",
    description: "Ausführliche Erläuterung aller Vertragsklauseln und rechtlichen Konsequenzen."
  },
  {
    icon: Landmark,
    title: "Treuhandschaft",
    description: "Sichere Abwicklung über das anwaltliche Treuhandbuch der Rechtsanwaltskammer."
  },
  {
    icon: FolderOpen,
    title: "Grundbuch",
    description: "Professionelle Begleitung aller Grundbucheintragungen und Löschungen."
  },
  {
    icon: Euro,
    title: "Finanzierung",
    description: "Koordination mit Ihrer finanzierenden Bank und Abwicklung der Pfandrechte."
  },
  {
    icon: FileCheck,
    title: "Steuermeldung",
    description: "Fristgerechte Berechnung und Meldung der Grunderwerbsteuer und Gebühren."
  }
];

export const Services = () => {
  return (
    <section id="leistungen" className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')] py-24">
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Leistungsübersicht</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Umfassender Service von der Vertragserstellung bis zur Eigentumsübertragung.
            Alles in der Pauschale enthalten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-white/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-md">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold flex items-center justify-center mb-6 shadow-lg shadow-navy-900/20">
                  <service.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-navy-900">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
