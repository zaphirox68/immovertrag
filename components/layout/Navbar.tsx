"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X, Sun, Moon } from "lucide-react"
import { useHeroMode } from "@/components/HeroModeContext"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { mode, toggle } = useHeroMode()
  const pathname = usePathname()

  const isLightTop = mode === "light" && !isScrolled && pathname === "/"

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-navy-900/75 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group relative z-10">
          <Image
            src={isLightTop ? "/rejas-logo-dark.png" : "/rejas-logo-white.png"}
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
              className={cn(
                "hover:text-gold transition-colors duration-300 relative group uppercase text-xs tracking-[0.15em]",
                isLightTop ? "text-navy-900/70" : "text-gray-300"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Light/Dark hero toggle */}
          <button
            onClick={toggle}
            className={cn(
              "relative w-14 h-7 rounded-full border backdrop-blur-sm flex items-center transition-all duration-500 hover:border-gold/40 group",
              isLightTop
                ? "border-navy-900/15 bg-navy-900/5"
                : "border-white/15 bg-white/5"
            )}
            aria-label={mode === "dark" ? "Switch to light hero" : "Switch to dark hero"}
          >
            <div
              className={cn(
                "absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm",
                mode === "dark"
                  ? "left-1 bg-navy-800"
                  : "left-[calc(100%-1.5rem)] bg-gold"
              )}
            >
              {mode === "dark" ? (
                <Moon className="h-3 w-3 text-gold" strokeWidth={2} />
              ) : (
                <Sun className="h-3 w-3 text-navy-900" strokeWidth={2} />
              )}
            </div>
          </button>

          <Button
            asChild
            size="sm"
            className={cn(
              "transition-all duration-300 rounded-full px-5 text-xs tracking-wider",
              isScrolled
                ? "bg-gold text-navy-900 hover:bg-gold-400"
                : isLightTop
                  ? "border border-navy-900/20 text-navy-900/70 hover:bg-navy-900/5 bg-navy-900/5 backdrop-blur-sm"
                  : "border border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
            )}
          >
            <Link href="tel:+436647870648">
              <Phone className="mr-2 h-3.5 w-3.5" />
              +43 664 787 06 48
            </Link>
          </Button>
        </nav>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3 relative z-10">
          <button
            onClick={toggle}
            className={cn(
              "relative w-12 h-6 rounded-full border backdrop-blur-sm flex items-center",
              isLightTop
                ? "border-navy-900/15 bg-navy-900/5"
                : "border-white/15 bg-white/5"
            )}
            aria-label={mode === "dark" ? "Switch to light hero" : "Switch to dark hero"}
          >
            <div
              className={cn(
                "absolute w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm",
                mode === "dark"
                  ? "left-1 bg-navy-800"
                  : "left-[calc(100%-1.25rem)] bg-gold"
              )}
            >
              {mode === "dark" ? (
                <Moon className="h-2.5 w-2.5 text-gold" strokeWidth={2} />
              ) : (
                <Sun className="h-2.5 w-2.5 text-navy-900" strokeWidth={2} />
              )}
            </div>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "hover:text-gold transition-colors",
              isLightTop ? "text-navy-900" : "text-white"
            )}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-navy-900/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
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
      </div>
    </header>
  )
}
