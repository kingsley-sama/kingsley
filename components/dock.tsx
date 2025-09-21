"use client"

import { useState } from "react"
import { Code, FolderOpen, Linkedin, Mail, Minus, Square, User, X } from "lucide-react"
import Animated3DWrapper from "./animated_3d_wrapper"

export function MacOSTopNav({ title = "Finder" }: { title?: string }) {
  return (
    <div className="flex items-center justify-between h-7 bg-gray-100 border-b border-gray-200 px-3 text-sm">
      {/* Traffic Light Buttons */}
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer flex items-center justify-center group">
          <X className="w-2 h-2 text-red-800 opacity-0 group-hover:opacity-100" />
        </div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer flex items-center justify-center group">
          <Minus className="w-2 h-2 text-yellow-800 opacity-0 group-hover:opacity-100" />
        </div>
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer flex items-center justify-center group">
          <Square className="w-1.5 h-1.5 text-green-800 opacity-0 group-hover:opacity-100" />
        </div>
      </div>

      {/* Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 font-medium text-gray-700">{title}</div>

      {/* Right side - empty for macOS */}
      <div></div>
    </div>
  )
}

export function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const apps = [
    { name: "Projects", icon: <FolderOpen className="text-green-50" /> },
    { name: "About Me", icon: <User className="text-purple-50"/> },
    { name: "Tech Stacks", icon: <Code className="text-red-50"/> },
    { name: "Email", icon: <Mail className="text-blue-50"/> },
    { name: "LinkedIn", icon: <Linkedin className="text-yellow-50"/> },
    

  ]

  return (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:right-4 md:left-auto md:transform-none  bg-black backdrop-blur supports-[backdrop-filter]:bg-black/40 rounded-2xl z-[60]">
      <div className="flex flex-row items-center space-x-2 md:flex-col md:items-end md:space-x-0 md:space-y-4  backdrop-blur-md rounded-2xl px-4 py-2 md:px-2.5 md:py-4">
        {apps.map((app, index) => (
          <div
            key={app.name}
            className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
              hoveredIndex === index ? "transform -translate-y-1.5 scale-125" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-lg md:text-2xl rounded-lg md:rounded-xl transition-colors">
              {app.icon}
            </div>
            {hoveredIndex === index && (
              <div className="absolute -top-8 md:-top-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                {app.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
