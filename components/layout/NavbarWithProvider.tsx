"use client"

import { HeroModeProvider } from "@/components/HeroModeContext"
import { Navbar } from "./Navbar"

export function NavbarWithProvider() {
  return (
    <HeroModeProvider>
      <Navbar />
    </HeroModeProvider>
  )
}
