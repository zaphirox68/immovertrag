"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Euro, Info, ShieldCheck } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Calculator() {
  const [price, setPrice] = useState<number>(350000)

  // Constants
  const LAWYER_RATE = 0.015 // 1.5%
  const VAT_RATE = 0.2 // 20%
  const GRUNDERWERBSTEUER_RATE = 0.035 // 3.5%
  const EINTRAGUNGSGEBUEHR_RATE = 0.011 // 1.1%
  const ADMIN_FEES = 350 // Estimated

  // Calculations
  const lawyerFeeNet = price * LAWYER_RATE
  const lawyerFeeVat = lawyerFeeNet * VAT_RATE
  const lawyerFeeGross = lawyerFeeNet + lawyerFeeVat

  const grunderwerbsteuer = price * GRUNDERWERBSTEUER_RATE
  const eintragungsgebuehr = price * EINTRAGUNGSGEBUEHR_RATE

  const totalCost = price + lawyerFeeGross + grunderwerbsteuer + eintragungsgebuehr + ADMIN_FEES

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("de-AT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(val)
  }

  return (
    <section id="rechner" className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgroundlight.png')] py-24">
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Transparenzrechner</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Berechnen Sie unverbindlich die voraussichtlichen Kaufnebenkosten für Ihre Immobilie.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
          {/* Input Card */}
          <Card className="glass-light border-white/50 h-full rounded-2xl shadow-lg bg-white/60 backdrop-blur-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-navy-900">Kaufpreis eingeben</CardTitle>
              <CardDescription>Geben Sie den geplanten Kaufpreis der Immobilie ein.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-10">
              <div className="space-y-6">
                <div className="relative">
                  <Input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="pl-12 text-3xl font-bold h-20 border-slate-200 bg-white rounded-xl focus-visible:ring-navy-900 tabular-nums"
                  />
                  <Euro className="absolute left-4 top-7 h-6 w-6 text-slate-400" />
                </div>
                <Slider
                  value={[price]}
                  min={50000}
                  max={1500000}
                  step={5000}
                  onValueChange={(vals) => setPrice(vals[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground font-medium">
                  <span>€ 50.000</span>
                  <span>€ 1.500.000</span>
                </div>
              </div>
              
              <div className="bg-gold/10 p-5 rounded-xl border border-gold/20 text-sm text-navy-800/80 leading-relaxed flex gap-3 items-start">
                <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong>Hinweis:</strong> Diese Berechnung ist eine erste Orientierung. Beglaubigungskosten und Barauslagen werden gesondert verrechnet.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Result Card - Glass Dark */}
          <Card className="glass-dark text-white border-white/10 h-full rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
            
            <CardHeader className="pb-6 border-b border-white/10 relative z-10">
              <CardTitle className="text-2xl text-white">Kostenaufstellung</CardTitle>
              <CardDescription className="text-gray-400">Detaillierte Aufschlüsselung der Nebenkosten</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-0 pt-6 relative z-10">
              <div className="space-y-5 text-sm md:text-base">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Vertragserrichtung (1,5%)</span>
                  <span className="font-semibold tabular-nums">{formatCurrency(lawyerFeeNet)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Umsatzsteuer (20%)</span>
                  <span className="font-semibold tabular-nums">{formatCurrency(lawyerFeeVat)}</span>
                </div>
                <div className="my-4 border-t border-white/10"></div>
                <div className="flex justify-between items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-center gap-1 text-slate-300 hover:text-white cursor-help decoration-dotted underline underline-offset-4">
                        Grunderwerbsteuer (3,5%)
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Standardsteuersatz in Österreich</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="font-semibold tabular-nums">{formatCurrency(grunderwerbsteuer)}</span>
                </div>
                <div className="flex justify-between items-center">
                   <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-center gap-1 text-slate-300 hover:text-white cursor-help decoration-dotted underline underline-offset-4">
                        Grundbucheintrag (1,1%)
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Eintragungsgebühr für das Eigentumsrecht</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="font-semibold tabular-nums">{formatCurrency(eintragungsgebuehr)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Sonstige Barauslagen (ca.)</span>
                  <span className="font-semibold tabular-nums">{formatCurrency(ADMIN_FEES)}</span>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-white/10">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-lg font-medium text-slate-200">Gesamtkosten</span>
                  <div className="text-right">
                    <div className="text-sm text-slate-400 mb-1">Kaufpreis + Nebenkosten</div>
                    <span className="text-3xl md:text-4xl font-bold text-gold block leading-none tracking-tight tabular-nums">
                      {formatCurrency(totalCost)}
                    </span>
                  </div>
                </div>
                
                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 bg-white/5 rounded-full py-2 px-4 border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>Berechnung gemäß aktuellen Steuersätzen 2025 (Österreich)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
