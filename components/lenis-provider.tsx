"use client"

import { useEffect } from "react"

export function LenisProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({ lerp: 0.1 })
      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })
  }, [])
  return null
}
