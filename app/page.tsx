"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Users,
  FolderOpen,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  TrendingUp,
  Clock,
  Award,
  Sparkles,
  Play,
  Menu,
  GitBranch,
  Github,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AnimatedDashboard from "@/components/about-me"
import ContactForm from "@/components/contact-form"
import Projects from "@/components/projects"
import AboutMeComponent from "@/components/about"
import { Dock } from "@/components/dock"
import DownBar from "@/components/bottom_nav"
import { SiteMap } from "@/components/site-map"
import { TechStacks } from "@/components/tech-stacks"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Users,
      title: "HR Management Softwares",
      description: "Comprehensive client profiles with contact information and project history",
      color: "bg-blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FolderOpen,
      title: "Ecommerce Platforms",
      description: "Organize and monitor all your projects with detailed progress tracking",
      color: "bg-green-500",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Real-time insights into your business performance and project status",
      color: "bg-purple-500",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "AI Softwares",
      description: "Admin and user roles with appropriate permissions and access control",
      color: "bg-orange-500",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const stats = [
    { number: "50K+", label: "Active Users", icon: Users },
    { number: "1M+", label: "Projects Managed", icon: FolderOpen },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "4.9/5", label: "User Rating", icon: Star },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "ClientManager transformed our business operations. We've seen 40% increase in productivity!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Project Manager, Acme Corp",
      content: "The best investment we've made. Our client satisfaction scores have never been higher.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Agency",
      content: "Intuitive, powerful, and reliable. ClientManager is essential for any growing business.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "Reviews", href: "#testimonials" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    // Smooth scroll to section
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
    <div className="min-h-screen bg-neutral-950 overflow-hidden">

      
        {/* Hero Image/Dashboard Preview */}
      <AnimatedDashboard />
      <AboutMeComponent />
      <Projects />
      <ContactForm />
      
      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-neutral-950">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-100">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-6">
              Everything You Need to
              <span className="block p-3 text-3xl text-blue-600 md:text-5xl ">Scale Your Business</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get Growth Strategy consultation for your next software idea. Get AI first developers to Build and ship it Fast.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-green-100 transform hover:-translate-y-2 text-gray-900"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900  transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-900 leading-relaxed text-sm sm:text-base g">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="mt-20 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-gray-700 mb-6 hover:text-green-100"><Github/> Git History</h3>
              <div className="space-y-4">
                {[
                  "Real-time collaboration tools",
                  "Advanced reporting & analytics",
                  "Mobile-first responsive design",
                  "Enterprise-grade security",
                  "API integrations & automation",
                  "24/7 customer support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 ">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base hover:text-green-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20" />
              <Card className="relative border-0 shadow-2xl">
                <CardContent className="p-6 sm:p-8 rounded-md bg-neutral-900">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12  rounded-full flex items-center justify-center bg-purple-50">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-200 text-sm sm:text-base">Project Milestone</div>
                        <div className="text-xs sm:text-sm text-gray-500">Website Redesign - 85% Complete</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                      <div className="bg-purple-600 h-2 sm:h-3 rounded-full w-4/5" />
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                      <span>Started: Jan 15</span>
                      <span>Due: Mar 30</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <TechStacks />
      <SiteMap />
      <DownBar />
    </div>
    </>
  )
}
