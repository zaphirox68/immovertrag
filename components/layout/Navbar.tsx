"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => { setMounted(true) }, [])

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const navLinks = [
    { href: "/#leistungen", label: "Leistungen" },
    { href: "/#ueber-mich", label: "Über mich" },
    { href: "/#kontakt", label: "Kontakt" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-navy-900/60 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center group relative z-10">
            <Image
              src="/rejas-logo-white.png"
              alt="REJAS Immobilien & Management Holding GmbH"
              width={160}
              height={44}
              className="h-8 md:h-10 w-auto transition-all duration-500 group-hover:scale-[1.02]"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold transition-colors duration-300 relative group uppercase text-xs tracking-[0.15em]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Button
              asChild
              size="sm"
              className={cn(
                "transition-all duration-300 rounded-full px-5 text-xs tracking-wider",
                isScrolled
                  ? "bg-gold text-navy-900 hover:bg-gold-400"
                  : "border border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
              )}
            >
              <Link href="tel:+436647870648">
                <Phone className="mr-2 h-3.5 w-3.5" />
                +43 664 787 06 48
              </Link>
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-3 relative z-10">
            <button
              onClick={() => setMobileOpen(true)}
              className="text-white hover:text-gold transition-colors"
              aria-label="Menü öffnen"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Portal the mobile overlay to document.body so backdrop-filter on <header> cannot trap it */}
      {mounted && mobileOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-navy-900 md:hidden flex flex-col"
          style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}
        >
          <div className="absolute top-0 right-0 p-5">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-gold transition-colors"
              aria-label="Menü schließen"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-heading font-light text-white hover:text-gold transition-colors tracking-wide"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-12 h-px bg-gold/30 my-2" />
            <Button
              asChild
              className="bg-gold text-navy-900 hover:bg-gold-400 rounded-full px-8 py-3 text-base font-medium"
            >
              <Link href="tel:+436647870648" onClick={() => setMobileOpen(false)}>
                <Phone className="mr-2 h-4 w-4" />
                Anrufen
              </Link>
            </Button>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
