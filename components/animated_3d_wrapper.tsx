"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"

interface Animated3DWrapperProps {
  children: React.ReactNode | ((props: { isHovered: boolean; mousePosition: { x: number; y: number } }) => React.ReactNode)
  className?: string
  intensity?: number
  glowEffect?: boolean
  lightReflection?: boolean
  shadowEffect?: boolean
  style?: React.CSSProperties
}

export default function Animated3DWrapper({
  children,
  className = "",
  intensity = 1,
  glowEffect = true,
  lightReflection = true,
  shadowEffect = true,
  style = {},
}: Animated3DWrapperProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return

    const rect = wrapperRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate mouse position relative to element center (-1 to 1)
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)

    setMousePosition({ x, y })
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  // Calculate transform values based on mouse position and intensity
  const rotateX = isHovered ? -mousePosition.y * 3 * intensity : 0
  const rotateY = isHovered ? mousePosition.x * 3 * intensity : 0
  const translateX = isHovered ? mousePosition.x * 10 * intensity : 0
  const translateY = isHovered ? mousePosition.y * 8 * intensity : 0
  const translateZ = isHovered ? 25 * intensity : 0
  const scale = isHovered ? 1 + (0.05 * intensity) : 1

  return (
    <div className="relative" style={{ perspective: "1200px" }}>
      {/* Glowing background gradients */}
      {glowEffect && (
        <>
          <div
            className="absolute inset-0 rounded-2xl blur-3xl transform rotate-1 transition-all duration-300"
            style={{
              background: isHovered
                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(147, 51, 234, 0.6) 100%)"
                : "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
              filter: isHovered ? "blur(40px)" : "blur(30px)",
            }}
          />
          <div
            className="absolute inset-0 rounded-2xl blur-2xl transform -rotate-1 transition-all duration-300"
            style={{
              background: isHovered
                ? "linear-gradient(45deg, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%)"
                : "linear-gradient(45deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)",
              filter: isHovered ? "blur(25px)" : "blur(20px)",
            }}
          />
        </>
      )}

      <div
        ref={wrapperRef}
        className={`relative transition-all duration-300 ease-out transform-gpu cursor-pointer ${className}`}
        style={{
          transformStyle: "preserve-3d",
          transform: `
            perspective(1200px)
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateX(${translateX}px) 
            translateY(${translateY}px) 
            translateZ(${translateZ}px) 
            scale(${scale})
          `,
          boxShadow: shadowEffect
            ? isHovered
              ? `${mousePosition.x * 15}px ${mousePosition.y * 15}px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)`
              : "0 25px 50px rgba(0,0,0,0.25)"
            : undefined,
          ...style,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dynamic light reflection */}
        {lightReflection && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x * 25}% ${50 + mousePosition.y * 25}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}

        {/* Content wrapper with relative positioning */}
        <div className="relative z-20">
          {typeof children === 'function' 
            ? children({ isHovered, mousePosition }) 
            : children}
        </div>
      </div>
    </div>
  )
}

// Hook for child components that need access to animation state
export function useAnimationState(intensity: number = 1) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const getChildTransform = (offsetZ: number = 0) => {
    return isHovered 
      ? `translateZ(${(offsetZ + mousePosition.x * 3) * intensity}px)` 
      : "translateZ(0px)"
  }

  return {
    mousePosition,
    isHovered,
    setMousePosition,
    setIsHovered,
    getChildTransform,
  }
}