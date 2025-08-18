"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export function BackToHome({ className = "" }: { className?: string }) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push("/")}
      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-lg ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm font-medium">Back to Home</span>
    </button>
  )
}
