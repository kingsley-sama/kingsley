"use client"

import { useState } from "react"
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Cloud, 
  Layers, 
  Zap,
  Box,
  Settings,
  Network,
  Activity,
  Palette,
  FileCode,
  Terminal,
  Container,
  Workflow,
  Shield,
  Cpu,
  Route,
  CloudLightningIcon
} from "lucide-react"
import Animated3DWrapper from "./animated_3d_wrapper"

interface TechStack {
  name: string
  icon: React.ReactNode
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Cloud" | "Architecture"
  color: string
}

export function TechStacks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const techStacks: TechStack[] = [
    // Frontend
    { name: "React.js", icon: <Code className="text-blue-400" />, category: "Frontend", color: "bg-blue-500/20" },
    { name: "Next.js", icon: <Globe className="text-gray-300" />, category: "Frontend", color: "bg-gray-500/20" },
    { name: "TypeScript", icon: <FileCode className="text-blue-600" />, category: "Frontend", color: "bg-blue-600/20" },
    { name: "Tailwind CSS", icon: <Palette className="text-cyan-400" />, category: "Frontend", color: "bg-cyan-500/20" },
    { name: "CSS/Sass", icon: <Palette className="text-pink-400" />, category: "Frontend", color: "bg-pink-500/20" },
    { name: "Framer Motion", icon: <Zap className="text-purple-400" />, category: "Frontend", color: "bg-purple-500/20" },
    
    // Backend
    { name: "Node.js", icon: <Server className="text-green-400" />, category: "Backend", color: "bg-green-500/20" },
    { name: "Express.js", icon: <Terminal className="text-gray-400" />, category: "Backend", color: "bg-gray-600/20" },
    { name: "FastAPI", icon: <CloudLightningIcon className="text-blue-300" />, category: "Backend", color: "bg-blue-400/20" },
    { name: "REST APIs", icon: <Network className="text-orange-400" />, category: "Backend", color: "bg-orange-500/20" },
    { name: "GraphQL", icon: <Activity className="text-pink-500" />, category: "Backend", color: "bg-pink-600/20" },
    
    // Database
    { name: "MongoDB", icon: <Database className="text-green-500" />, category: "Database", color: "bg-green-600/20" },
    { name: "PostgreSQL", icon: <Database className="text-blue-500" />, category: "Database", color: "bg-blue-500/20" },
    
    // DevOps
    { name: "Docker", icon: <Container className="text-blue-400" />, category: "DevOps", color: "bg-blue-400/20" },
    { name: "Kubernetes", icon: <Box className="text-blue-600" />, category: "DevOps", color: "bg-blue-600/20" },
    { name: "Jenkins", icon: <Settings className="text-red-400" />, category: "DevOps", color: "bg-red-500/20" },
    { name: "GitHub Actions", icon: <Workflow className="text-gray-400" />, category: "DevOps", color: "bg-gray-500/20" },
    { name: "Nginx", icon: <Shield className="text-green-600" />, category: "DevOps", color: "bg-green-600/20" },
    
    // Cloud
    { name: "AWS", icon: <Cloud className="text-orange-500" />, category: "Cloud", color: "bg-orange-500/20" },
    
    // Architecture
    { name: "Microservices", icon: <Layers className="text-indigo-400" />, category: "Architecture", color: "bg-indigo-500/20" },
    { name: "Load Balancing", icon: <Route className="text-yellow-400" />, category: "Architecture", color: "bg-yellow-500/20" },
    { name: "Event-Driven Architecture", icon: <Cpu className="text-purple-500" />, category: "Architecture", color: "bg-purple-600/20" },
  ]

  const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "Cloud", "Architecture"]

  const filteredStacks = selectedCategory === "All" 
    ? techStacks 
    : techStacks.filter(stack => stack.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 max-w-6xl mt-20">
      <Animated3DWrapper className="bg-neutral-950 rounded-2xl shadow-2xl overflow-hidden">
        {({ isHovered, mousePosition }) => (
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Tech Stack
                </h2>
                <p className="text-gray-400 text-lg">
                  Technologies I work with to build amazing solutions
                </p>
              </div>
              <span className={`text-4xl font-bold transition-colors duration-300 ${
                isHovered ? 'text-green-100' : 'text-gray-500'
              }`}>
                05
              </span>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {filteredStacks.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    hoveredIndex === index ? "transform -translate-y-2 scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`
                    relative p-4 rounded-xl backdrop-blur-sm border border-white/10
                    transition-all duration-300 group-hover:border-white/30
                    ${tech.color}
                  `}>
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-3">
                      <div className="text-3xl">
                        {tech.icon}
                      </div>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-white text-sm font-medium text-center leading-tight">
                      {tech.name}
                    </h3>
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-xs px-2 py-1 bg-black/50 text-gray-300 rounded-full">
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  {/* Hover tooltip */}
                  {hoveredIndex === index && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap z-20">
                      {tech.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                  {techStacks.filter(t => t.category === "Frontend").length}
                </div>
                <div className="text-gray-400 text-sm">Frontend</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                  {techStacks.filter(t => t.category === "Backend").length}
                </div>
                <div className="text-gray-400 text-sm">Backend</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                  {techStacks.filter(t => t.category === "DevOps").length}
                </div>
                <div className="text-gray-400 text-sm">DevOps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">
                  {techStacks.length}
                </div>
                <div className="text-gray-400 text-sm">Total</div>
              </div>
            </div>
          </div>
        )}
      </Animated3DWrapper>
    </div>
  )
}
