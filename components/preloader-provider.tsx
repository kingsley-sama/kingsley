"use client"

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

type TriggerOptions = {
  imageSrc?: string
  durationMs?: number // total visible duration before exit starts
  title?: string
}

type PreloaderContextType = {
  trigger: (opts?: TriggerOptions) => void
}

const PreloaderContext = createContext<PreloaderContextType | null>(null)

export function usePreloader() {
  const ctx = useContext(PreloaderContext)
  if (!ctx) throw new Error("usePreloader must be used within PreloaderProvider")
  return ctx
}

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>("/shadow_in_view.png")
  const [cycleKey, setCycleKey] = useState(0)
  const timeoutRef = useRef<number | null>(null)
  const [title, setTitle] = useState<string>("")

  const trigger = useCallback((opts?: TriggerOptions) => {
    const src = opts?.imageSrc || "/shadow_in_view.png"
    const duration = Math.max(800, Math.min(4000, opts?.durationMs ?? 2200))
    setImageSrc(src)
    setTitle(opts?.title ?? "")
    setCycleKey((k) => k + 1) // force new animation cycle
    setActive(true)
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => setActive(false), duration)
  }, [])

  const value = useMemo(() => ({ trigger }), [trigger])

  return (
    <PreloaderContext.Provider value={value}>
      {/* Overlay */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={cycleKey}
            className="fixed inset-0 z-[9999] bg-black"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={imageSrc}
                  alt="preloader-overlay"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover pointer-events-none select-none"
                />
              </motion.div>

              {/* Big route title overlay */}
              {title && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 1.02 }}
                    transition={{ delay: 0.45, duration: 0.65, ease: "easeOut" }}
                    className="text-black text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                  >
                    {title}
                  </motion.h1>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </PreloaderContext.Provider>
  )
}
