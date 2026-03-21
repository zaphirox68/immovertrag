import Image from "next/image";

export const AboutMe = () => {
  return (
    <section id="ueber-mich" className="relative py-28 md:py-36 bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')]">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-50/20 via-navy-50/90 via-50% to-navy-50" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Über mich
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-navy-900 tracking-wide">
              Jakob Scherzenlehner
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl" />
                <Image
                  src="/jakob-portrait.jpg"
                  alt="Jakob Scherzenlehner"
                  width={400}
                  height={500}
                  className="relative rounded-2xl shadow-2xl object-cover w-full max-w-[340px] aspect-[4/5]"
                />
              </div>
            </div>

            <div className="md:col-span-3 relative group/frame">
              <div className="hidden md:block absolute -top-6 -left-8 w-[calc(100%+16px)] h-[calc(100%+24px)] pointer-events-none">
                <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-gold/35 rounded-tl-2xl transition-all duration-700 group-hover/frame:w-24 group-hover/frame:h-24 group-hover/frame:border-gold/70" />
                <div className="absolute top-20 left-0 w-px bg-gradient-to-b from-gold/35 to-transparent transition-all duration-700 group-hover/frame:from-gold/70" style={{ height: '60%' }} />
                <div className="absolute top-0 left-20 h-px bg-gradient-to-r from-gold/35 to-transparent w-1/2 transition-all duration-700 group-hover/frame:w-2/3 group-hover/frame:from-gold/70" />
              </div>
              <div className="space-y-6">
              <p className="text-lg text-navy-800 leading-relaxed font-light">
                Geschäftsführer und Gesellschafter der REJAS Immobilien &
                Management Holding GmbH. Seit vielen Jahren in der
                Immobilienbranche tätig mit umfassender praktischer Erfahrung in
                der Betreuung, Entwicklung und strategischen Weiterführung von
                Immobilienbeständen.
              </p>
              <p className="text-lg text-navy-800 leading-relaxed font-light">
                Mein Zugang ist dabei klar praxisorientiert: Ich verbinde
                operative Objekt- und Mieter-Themen mit Controlling- und
                Eigentümerlogik – somit Transparenz in Zahlen, saubere
                Grundlagen für Entscheidungen und Lösungen, die im Alltag auch
                umsetzbar sind.
              </p>
              <p className="text-lg text-navy-800 leading-relaxed font-light">
                Diese Kombination spiegelt sich auch in meinen beruflichen
                Verantwortungsbereichen wider – unter anderem
                Controlling-Strukturen, Reporting, Budget- und
                Liquiditätssteuerung sowie operative Steuerung von Beständen
                inklusive Mietverträgen und Betriebskosten.
              </p>

              <div className="pt-4">
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="text-navy-900 font-heading text-lg italic leading-relaxed">
                  &ldquo;REJAS steht für fokussierte, spezialisierte Leistungen
                  an der Schnittstelle von Kosten, Verträgen und Kommunikation –
                  dort, wo in der Praxis die meisten Reibungspunkte und
                  Potenziale liegen.&rdquo;
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
