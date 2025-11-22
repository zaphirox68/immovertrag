import { Building2, Landmark, FileText, Shield } from "lucide-react";

const partners = [
  { name: "Rechtsanwaltskammer", icon: Shield },
  { name: "Notariatskammer", icon: FileText },
  { name: "Immobilien Verband", icon: Building2 },
  { name: "Banken & Finanzierung", icon: Landmark }
];

export const Partners = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')] py-16 border-t border-gray-200">
      <div className="absolute inset-0 bg-white/35"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-navy-900">Partner-Netzwerk</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <partner.icon className="h-10 w-10 text-gray-400 group-hover:text-gold transition-colors mb-4" strokeWidth={1.5} />
              <span className="text-sm font-medium text-center text-gray-600 group-hover:text-navy-900">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
