import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] text-white/60 py-12 border-t border-white/10">
      <div className="absolute inset-0 bg-black/55"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold text-white mb-4 block">
              Dr. Müller Immobilienrecht
            </Link>
            <p className="text-sm max-w-xs leading-relaxed mb-6">
              Ihr Spezialist für Immobilienkaufverträge in ganz Österreich. 
              Transparent, sicher und zum Fixpreis.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-gold transition-colors">Impressum</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Datenschutz</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">AGB</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>1010 Wien</li>
              <li>Kärntner Ring 1</li>
              <li><a href="mailto:office@kanzlei.at" className="hover:text-gold">office@kanzlei.at</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Dr. Müller Immobilienrecht. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
