import { ShieldCheck, Gavel, Clock, Euro } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    text: "Rechtssicher & Haftpflichtversichert",
  },
  {
    icon: Euro,
    text: "Pauschalpreis ohne Überraschungen",
  },
  {
    icon: Gavel,
    text: "Unparteiische Treuhandabwicklung",
  },
  {
    icon: Clock,
    text: "Schnelle Grundbuchseintragung",
  },
];

export const USPStrip = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')] border-y border-white/5 py-8 z-20">
      <div className="absolute inset-0 bg-navy-900/95"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center justify-center md:justify-start gap-4 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <div className="bg-white/5 p-3 rounded-full border border-white/10">
                <feature.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <span className="font-medium text-sm md:text-base">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
