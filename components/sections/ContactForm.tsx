"use client"

import * as React from "react"
import { Forminit } from "forminit"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle, Mail, Phone } from "lucide-react"

const FORM_ID = "j4tq67i8iys"

export const ContactForm = () => {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null)
  const [agreed, setAgreed] = React.useState(false)
  const forminit = React.useMemo(() => new Forminit({ proxyUrl: "/api/forminit" }), [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agreed) return

    setStatus("sending")
    setErrorMsg(null)
    const form = e.currentTarget
    const formData = new FormData(form)

    const { data, error } = await forminit.submit(FORM_ID, {
      blocks: [
        {
          type: "sender",
          properties: {
            fullName: formData.get("name") as string,
            email: formData.get("email") as string,
            ...(formData.get("phone") ? { phone: formData.get("phone") as string } : {}),
          },
        },
        { type: "text", name: "message", value: formData.get("message") as string },
      ],
    })

    if (error) {
      setStatus("error")
      setErrorMsg(error.message)
      return
    }

    setStatus("success")
    form.reset()
    setAgreed(false)
  }

  return (
    <section
      id="kontakt"
      className="relative bg-cover bg-center bg-no-repeat bg-[url('/backgrounddark.png')] py-28 md:py-36"
    >
      <div className="absolute inset-0 bg-black/55 bg-gradient-to-b from-black/55 via-black/35 to-black/50" />
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4">
            Kontakt
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide mb-4">
            Sprechen wir über
            <br />
            Ihr Anliegen
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            Schreiben Sie mir – ich melde mich zeitnah bei Ihnen.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {[
                { icon: Mail, label: "E-Mail", value: "jakob.scherzenlehner@rejas.at", href: "mailto:jakob.scherzenlehner@rejas.at" },
                { icon: Phone, label: "Telefon", value: "+43 664 787 06 48", href: "tel:+436647870648" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-300 hover:text-gold transition-colors text-base whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-base whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="lg:col-span-3 border-0 shadow-2xl bg-[#f5f0e8] text-navy-900 rounded-2xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-gold to-gold-400" />
            <CardContent className="p-6 md:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="font-heading text-2xl text-navy-900 mb-2">Nachricht gesendet</h3>
                  <p className="text-muted-foreground">Vielen Dank – ich melde mich in Kürze bei Ihnen.</p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Neue Nachricht
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-medium text-navy-700 uppercase tracking-wider">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Ihr Name"
                        className="h-11 bg-white/70 border-gold/10 focus:bg-white focus:border-gold/50 transition-all rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-medium text-navy-700 uppercase tracking-wider">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+43 ..."
                        className="h-11 bg-white/70 border-gold/10 focus:bg-white focus:border-gold/50 transition-all rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-medium text-navy-700 uppercase tracking-wider">
                      E-Mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ihre@email.at"
                      className="h-11 bg-white/70 border-gold/10 focus:bg-white focus:border-gold/50 transition-all rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-medium text-navy-700 uppercase tracking-wider">
                      Nachricht
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Ihr Anliegen..."
                      className="bg-white/70 border-gold/10 focus:bg-white focus:border-gold/50 transition-all min-h-[120px] rounded-xl"
                    />
                  </div>

                  <div className="flex items-start space-x-3 pt-1">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-navy-900 focus:ring-navy-900"
                    />
                    <Label htmlFor="privacy" className="text-xs text-muted-foreground leading-normal font-normal cursor-pointer">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <a href="/datenschutz" className="underline hover:text-navy-900 transition-colors">Datenschutzerklärung</a>{" "}
                      zu.
                    </Label>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-xl p-3">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      {errorMsg || "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={!agreed || status === "sending"}
                    className="w-full font-medium h-12 rounded-xl transition-all duration-500 disabled:opacity-40 disabled:bg-navy-900/50 disabled:text-white/60 bg-gold text-navy-900 hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,180,122,0.3)]"
                  >
                    {status === "sending" ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Nachricht senden
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
