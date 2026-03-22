"use client"

import { useEffect, useRef, useState } from "react"

interface BlueprintRevealProps {
  gradient: string
  radius?: number
  revealStrength?: number
}

export function BlueprintReveal({ gradient, radius = 150, revealStrength = 0.55 }: BlueprintRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x >= -50 && x <= rect.width + 50 && y >= -50 && y <= rect.height + 50) {
        setPos({ x, y })
      } else {
        setPos(null)
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  const maskImage = pos
    ? `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, rgba(0,0,0,${revealStrength}) 0%, rgba(0,0,0,1) 100%)`
    : undefined

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-[2]"
      style={{
        background: gradient,
        WebkitMaskImage: maskImage,
        maskImage: maskImage,
      }}
    />
  )
}
