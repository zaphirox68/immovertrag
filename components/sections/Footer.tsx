import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] text-white/50 py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-black/70" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12 max-w-5xl mx-auto">
          <div className="md:col-span-1">
            <Image
              src="/rejas-logo-white.png"
              alt="REJAS"
              width={140}
              height={40}
              className="h-8 w-auto mb-5 opacity-70"
              style={{ width: "auto" }}
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Fokussierte, spezialisierte Leistungen an der Schnittstelle
              von Kosten, Verträgen und Kommunikation.
            </p>
          </div>

          <div>
            <h3 className="text-white/80 font-medium text-xs uppercase tracking-[0.15em] mb-5">
              Leistungen
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/leistungen/betriebskostenanalyse" className="hover:text-gold transition-colors duration-300">
                  Betriebskostenanalyse
                </Link>
              </li>
              <li>
                <Link href="/leistungen/wertsicherung" className="hover:text-gold transition-colors duration-300">
                  Wertsicherungsüberprüfung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/mediation" className="hover:text-gold transition-colors duration-300">
                  Mediation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/80 font-medium text-xs uppercase tracking-[0.15em] mb-5">
              Kontakt & Rechtliches
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:jakob.scherzenlehner@rejas.at" className="hover:text-gold transition-colors duration-300">
                  jakob.scherzenlehner@rejas.at
                </a>
              </li>
              <li>
                <a href="tel:+436647870648" className="hover:text-gold transition-colors duration-300">
                  +43 664 787 06 48
                </a>
              </li>
              <li className="pt-2">
                <Link href="/impressum" className="hover:text-gold transition-colors duration-300">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-gold transition-colors duration-300">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} REJAS Immobilien & Management
            Holding GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
