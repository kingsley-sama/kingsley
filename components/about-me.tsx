"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Box, FolderOpen, Square, TrendingUp, X } from "lucide-react"
import Image from "next/image"

export default function AnimatedDashboard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate mouse position relative to card center (-1 to 1)
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

  // Calculate heavy transform values based on mouse position
  const rotateX = isHovered ? -mousePosition.y * 3 : 0 // Heavy vertical tilt
  const rotateY = isHovered ? mousePosition.x * 3: 0 // Heavy horizontal tilt
  const translateX = isHovered ? mousePosition.x * 10 : 0 // Sideways movement
  const translateY = isHovered ? mousePosition.y * 8 : 0 // Vertical movement
  const translateZ = isHovered ? 25 : 0 // Forward movement
  const scale = isHovered ? 1.05 : 1 // Scale up

  const neonTextShadow = {
    textShadow: `
      0 0 5px rgba(6, 182, 212, 0.8),
      0 0 10px rgba(6, 182, 212, 0.6),
      0 0 15px rgba(6, 182, 212, 0.4)
    `,
  }

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="relative max-w-6xl mx-auto" style={{ perspective: "1200px" }}>
        {/* Enhanced glowing background gradient */}
        <div
          className="absolute inset-0 rounded-sm blur-3xl transform rotate-1 transition-all duration-300"
          style={{
            background: isHovered
              ? "linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(147, 51, 234, 0.6) 100%)"
              : "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
            filter: isHovered ? "blur(40px)" : "blur(30px)",
          }}
        />

        {/* Additional glow layers for more intensity */}
        <div
          className="absolute inset-0 rounded-sm blur-2xl transform -rotate-1 transition-all duration-300"
          style={{
            background: isHovered
              ? "linear-gradient(45deg, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%)"
              : "linear-gradient(45deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)",
            filter: isHovered ? "blur(25px)" : "blur(20px)",
          }}
        />

        <div
          ref={cardRef}
          className="relative bg-neutral-950 rounded-md shadow-2xl overflow-hidden transition-all duration-300 ease-out transform-gpu cursor-pointer"
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
            boxShadow: isHovered
              ? `${mousePosition.x * 15}px ${mousePosition.y * 15}px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)`
              : "0 25px 50px rgba(0,0,0,0.25)",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dynamic light reflection */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x * 25}% ${50 + mousePosition.y * 25}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Header with traffic lights */}
          <div className="bg-gradient-to-r from-neutral-950 to-neutral-800 px-4 sm:px-6 py-4 flex items-center space-x-2 relative z-20">
            <div className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 bg-red-400 rounded-full p-1" ><X className="h-3 w-3 font-bold"/></div>
            <div className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 bg-yellow-400 rounded-full" >-</div>
            <div className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 bg-green-400 rounded-full" ><Square className="h-2 w-2 font-bold"/></div>
            <div className="ml-4 text-md sm:text-lg text-gray-200 font-medium  sm:block">Kingsley Okpo</div>
          </div>

          {/* Main content */}
          <div className="p-4 sm:p-8 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Card
                className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 transition-transform duration-200"
                style={{
                  transform: isHovered ? `translateZ(${5 + mousePosition.x * 3}px)` : "translateZ(0px)",
                }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Image
                      src={"/head_shot.png"}
                      width={150}
                      height={150}
                      alt="developer_headshot"
                      className="rounded-full"
                    />
                    <Badge className="bg-blue-600 text-xs">+12% over last year</Badge>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">1,234</div>
                  <div className="text-sm sm:text-base text-gray-600">GitHub Contributions in the last Year</div>
                </CardContent>
              </Card>

              <Card
                className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 transition-transform duration-200"
                style={{
                  transform: isHovered ? `translateZ(${8 + mousePosition.y * 2}px)` : "translateZ(0px)",
                }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <FolderOpen className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                    <Badge className="bg-green-600 text-xs">+8%</Badge>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">67+</div>
                  <div className="text-sm sm:text-base text-gray-600">Projects</div>
                </CardContent>
              </Card>

              <Card
                className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 transition-transform duration-200"
                style={{
                  transform: isHovered ? `translateZ(${6 + mousePosition.x * -2}px)` : "translateZ(0px)",
                }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                    <Badge className="bg-purple-600 text-xs">+24%</Badge>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm sm:text-base text-gray-600">Reviewed PRs</div>
                </CardContent>
              </Card>
            </div>

            <div
              className="h-fit pt-2 min-h-fit bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center transition-transform duration-200"
              style={{
                transform: isHovered ? `translateZ(${4 + mousePosition.y * 1.5}px)` : "translateZ(0px)",
              }}
            >
              <div className="text-gray-500 font-medium text-sm sm:text-base p-4">
                Experienced software engineer with 7+ years developing scalable applications and microservices in agile
                environments. Proficient in leveraging CI/CD and DevOps practices to enhance deployment efficiency and
                system quality. Skilled in JavaScript and Python, with a strong focus on building user-centric,
                high-performance solutions. Demonstrated ability to optimize performance and streamline processes across
                diverse tech stacks.
              </div>
            </div>
          </div>
          {isHovered && (
            <div className="absolute top-4 right-4 z-30">
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
