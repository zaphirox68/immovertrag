import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { USPStrip } from "@/components/sections/USPStrip";
import { Calculator } from "@/components/sections/Calculator";
import { CTASection } from "@/components/sections/CTASection";
import { Services } from "@/components/sections/Services";
import { SocialProof } from "@/components/sections/SocialProof";
import { PriceTable } from "@/components/sections/PriceTable";
import { FAQ } from "@/components/sections/FAQ";
import { Partners } from "@/components/sections/Partners";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-light overflow-x-hidden relative pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <USPStrip />
      <Calculator />
      <CTASection />
      <Services />
      <SocialProof />
      <PriceTable />
      <FAQ />
      <Partners />
      <ContactForm />
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-lg border-t border-gray-200 md:hidden flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <Button asChild className="flex-1 bg-navy-900 text-white hover:bg-navy-800 font-semibold h-12 rounded-xl shadow-lg">
          <Link href="tel:+43123456789">
            <Phone className="mr-2 h-4 w-4 fill-current" />
            Anrufen
          </Link>
        </Button>
        <Button asChild className="flex-1 bg-gold text-navy-900 hover:bg-gold/90 font-bold h-12 rounded-xl shadow-lg">
          <Link href="#rechner">
            Kosten berechnen
          </Link>
        </Button>
      </div>
    </main>
  );
}
