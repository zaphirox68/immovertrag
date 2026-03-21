"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type HeroMode = "dark" | "light"

interface HeroModeContextValue {
  mode: HeroMode
  toggle: () => void
}

const HeroModeContext = createContext<HeroModeContextValue>({
  mode: "dark",
  toggle: () => {},
})

export function HeroModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<HeroMode>("light")
  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"))
  return (
    <HeroModeContext.Provider value={{ mode, toggle }}>
      {children}
    </HeroModeContext.Provider>
  )
}

export function useHeroMode() {
  return useContext(HeroModeContext)
}
