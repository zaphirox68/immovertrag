"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const ContactForm = () => {
  return (
    <section id="kontakt" className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] py-24">
      <div className="absolute inset-0 bg-black/55 bg-gradient-to-b from-black/55 via-black/35 to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Kostenloses <br/>
              <span className="text-gold">Erstgespräch vereinbaren</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Lassen Sie uns über Ihr Vorhaben sprechen. Wir prüfen Ihren Kaufvertrag und beraten Sie zu allen rechtlichen Fragen. Unverbindlich und transparent.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors flex items-center justify-center border border-white/20 text-gold font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white">Anfrage senden</h4>
                  <p className="text-sm text-gray-400">Füllen Sie das Formular aus.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors flex items-center justify-center border border-white/20 text-gold font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white">Rückruf erhalten</h4>
                  <p className="text-sm text-gray-400">Wir melden uns binnen 24h.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors flex items-center justify-center border border-white/20 text-gold font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sicher kaufen</h4>
                  <p className="text-sm text-gray-400">Wir starten die Abwicklung.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-2xl bg-white text-navy-900 rounded-[2rem] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-500 to-gold-100" />
            
            <CardHeader className="pb-6 bg-gray-50/80 border-b border-gray-100 pt-10">
              <CardTitle className="text-3xl text-navy-900">Kontaktformular</CardTitle>
              <CardDescription className="text-base">Wir freuen uns auf Ihre Nachricht.</CardDescription>
            </CardHeader>
            
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-navy-700">Name</Label>
                  <Input id="name" placeholder="Max Mustermann" className="h-11 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-navy-700">Telefon</Label>
                  <Input id="phone" placeholder="+43 664 ..." className="h-11 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-navy-700">E-Mail</Label>
                <Input id="email" type="email" placeholder="max@beispiel.at" className="h-11 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-navy-700">Nachricht / Kaufpreis (optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Ich interessiere mich für..." 
                  className="bg-gray-50 border-gray-200 focus:bg-white transition-all min-h-[120px]" 
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-xs text-muted-foreground leading-normal font-normal cursor-pointer">
                  Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
                </Label>
              </div>

              <Button className="w-full bg-navy-900 text-white hover:bg-gold hover:text-navy-900 font-bold text-lg h-14 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Jetzt kostenlos anfragen
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};
