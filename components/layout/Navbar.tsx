"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-navy-900/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-3 group">
          <div className="h-10 w-10 bg-gold text-navy-900 rounded-lg flex items-center justify-center font-serif text-xl font-bold shadow-gold/20 shadow-lg transition-transform group-hover:scale-105">
            M
          </div>
          <span className={cn("hidden md:inline-block transition-opacity duration-300", isScrolled ? "opacity-100" : "opacity-90")}>
            Dr. Müller
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#rechner" className="text-gray-300 hover:text-gold transition-colors relative group">
            Kostenrechner
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#leistungen" className="text-gray-300 hover:text-gold transition-colors relative group">
            Leistungen
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#kontakt" className="text-gray-300 hover:text-gold transition-colors relative group">
            Kontakt
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </Link>
          <Button
            asChild
            variant={isScrolled ? "premium" : "outline"}
            className={cn(
              "transition-all duration-300 rounded-full px-6",
              !isScrolled && "border-white/30 text-white hover:bg-white hover:text-navy-900 backdrop-blur-sm"
            )}
          >
            <Link href="tel:+43123456789">
              <Phone className="mr-2 h-4 w-4" />
              01 / 234 56 78
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menü öffnen</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-navy-900 border-l border-white/10 text-white w-[300px]">
            <div className="flex flex-col gap-8 mt-10">
              <Link href="/" className="text-2xl font-bold flex items-center gap-3">
                 <div className="h-10 w-10 bg-gold text-navy-900 rounded-lg flex items-center justify-center font-serif text-xl font-bold">
                  M
                </div>
                Dr. Müller
              </Link>
              <div className="flex flex-col gap-6">
                <Link href="#rechner" className="text-lg font-medium text-gray-300 hover:text-gold">
                  Kostenrechner
                </Link>
                <Link href="#leistungen" className="text-lg font-medium text-gray-300 hover:text-gold">
                  Leistungen
                </Link>
                <Link href="#kontakt" className="text-lg font-medium text-gray-300 hover:text-gold">
                  Kontakt
                </Link>
              </div>
              <div className="mt-auto mb-8">
                 <Button asChild className="w-full bg-gold text-navy-900 hover:bg-white rounded-xl py-6 text-lg">
                  <Link href="#kontakt">Termin vereinbaren</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

