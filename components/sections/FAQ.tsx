import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const glossaryTerms = [
  {
    term: "Grunderwerbsteuer",
    content: "Die Grunderwerbsteuer ist eine einmalige Steuer, die beim Erwerb von Grundstücken in Österreich anfällt. Sie beträgt in der Regel 3,5 % vom Kaufpreis bei unentgeltlichem Grundstückserwerb oder bei Erwerb von mehr als einem halben Prozent Anteil. Die Steuer ist innerhalb eines Monats nach Vertragsabschluss an das zuständige Finanzamt zu entrichten. Bei verwandtschaftlichen Schenkungen gelten reduzierte Steuersätze (0,5 % bzw. 2 %). Die Grunderwerbsteuer ist vom Käufer zu tragen, sofern vertraglich nichts anderes vereinbart wurde. Sie wird auf Basis des Kaufpreises oder des Grundstückswerts berechnet."
  },
  {
    term: "Eintragungsgebühr",
    content: "Die Eintragungsgebühr ist eine bundesgesetzliche Abgabe für die Eintragung ins Grundbuch. Sie beträgt 1,1 % der Bemessungsgrundlage (in der Regel der Kaufpreis). Diese Gebühr deckt alle notwendigen Grundbucheintragungen ab, einschließlich der Eigentumsübertragung und eventueller Pfandrechte. Die Eintragungsgebühr wird bei Einreichung des Grundbuchsantrags fällig und ist Voraussetzung für die Bearbeitung durch das Grundbuchsgericht. Zusätzlich können geringe Eingabegebühren für das Grundbuchsgesuch anfallen. Die Gebühr ist nicht steuerlich absetzbar."
  },
  {
    term: "Grundbuch",
    content: "Das Grundbuch ist ein öffentliches Register, in dem alle Grundstücke und die dazugehörigen Rechte erfasst sind. Es wird von den Bezirksgerichten geführt und ist für jedermann einsehbar. Das Grundbuch gliedert sich in das Hauptbuch (mit Gutsbestandsblatt, Eigentumsblatt und Lastenblatt) und die Urkundensammlung. Im Grundbuch werden Eigentumsverhältnisse, Pfandrechte (Hypotheken), Dienstbarkeiten und andere dingliche Rechte eingetragen. Das Grundbuch genießt öffentlichen Glauben – wer gutgläubig darauf vertraut, wird geschützt. Eintragungen erfolgen nur aufgrund gerichtlicher Beschlüsse nach Prüfung aller Voraussetzungen."
  },
  {
    term: "EZ (Einlagezahl)",
    content: "Die Einlagezahl (EZ) ist die eindeutige Nummer, unter der ein oder mehrere Grundstücke im Grundbuch geführt werden. Sie entspricht einem 'Grundbuchskörper' und kann mehrere Katastralgemeinden und Grundstücksnummern umfassen. Jede EZ hat ein eigenes Hauptbuch mit Eigentumsblatt und Lastenblatt. Bei Immobilientransaktionen ist die Angabe der korrekten EZ essentiell, da sie das betreffende Grundstück eindeutig identifiziert. Die EZ bleibt bei Eigentümerwechseln bestehen, kann aber bei Grundstücksteilungen oder -zusammenlegungen geändert werden. Über die EZ können alle rechtlichen Verhältnisse eines Grundstücks abgerufen werden."
  },
  {
    term: "KG (Katastralgemeinde)",
    content: "Die Katastralgemeinde ist die kleinste Verwaltungseinheit im österreichischen Kataster- und Grundbuchssystem. Jede KG hat eine eindeutige Nummer und einen Namen, meist historisch gewachsen. Grundstücke werden innerhalb einer KG mit Grundstücksnummern identifiziert. Für grundbuchsrechtliche Eintragungen ist stets die genaue Bezeichnung der KG erforderlich. Die KG-Grenzen entsprechen oft historischen Ortsgrenzen und können von den heutigen politischen Gemeindegrenzen abweichen. Jede KG verfügt über eigene Grundbuchseinlagen. Die korrekte Angabe von KG und Grundstücksnummer ist für alle Grundbuchsangelegenheiten unerlässlich."
  },
  {
    term: "Treuhandschaft",
    content: "Die Treuhandschaft ist eine sichere Abwicklungsform beim Immobilienkauf, bei der der Rechtsanwalt den Kaufpreis auf einem speziellen Treuhandkonto verwahrt. Gemäß Rechtsanwaltsordnung (RAO) ist der Treuhänder verpflichtet, das Geld nur nach vorher festgelegten Bedingungen auszuzahlen. Der Käufer überweist den Betrag auf das Treuhandkonto, das Geld wird aber erst an den Verkäufer ausgezahlt, wenn alle Voraussetzungen erfüllt sind (z.B. lastenfreie Eigentumsübertragung). Dies schützt beide Vertragsparteien vor Risiken. Treuhandkonten unterliegen strengen gesetzlichen Vorschriften und werden von der Rechtsanwaltskammer überwacht."
  },
  {
    term: "Aufsandungserklärung",
    content: "Die Aufsandungserklärung ist die notwendige Einwilligung des Verkäufers zur Eigentumsübertragung im Grundbuch. Diese rechtsverbindliche Erklärung ist Voraussetzung dafür, dass der Käufer als neuer Eigentümer eingetragen werden kann. Sie muss entweder in Form eines Notariatsakts oder in einem gerichtlichen Protokoll abgegeben werden, alternativ kann sie auch in einem schriftlichen Kaufvertrag enthalten sein, der von beiden Parteien unterschrieben ist. Die Aufsandungserklärung ist unwiderruflich und kann nur in Ausnahmefällen (z.B. bei Willensmängeln) angefochten werden. Sie wird dem Grundbuchsantrag beigelegt."
  }
];

export const FAQ = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')] py-20">
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Häufige Fragen</h2>
          <p className="text-muted-foreground text-lg">
            Wichtige Begriffe rund um den Immobilienkauf einfach erklärt.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {glossaryTerms.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-5 shadow-sm bg-white/80 backdrop-blur-sm data-[state=open]:border-gold/50 data-[state=open]:bg-white transition-all duration-200"
            >
              <AccordionTrigger className="text-left font-semibold text-base py-4 text-navy-900 hover:no-underline hover:text-gold transition-colors">
                {item.term}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
