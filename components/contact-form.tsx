    "use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  })
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }) // Keep for internal calculations if needed, but not displayed
  const formRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Form submitted successfully!")
  }

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return

    const rect = formRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate mouse position relative to form center (-1 to 1)
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

  // Calculate transform values based on mouse position
  const rotateX = isHovered ? -mousePosition.y * 2 : 0 // Vertical tilt
  const rotateY = isHovered ? mousePosition.x * 2 : 0 // Horizontal tilt
  const translateX = isHovered ? mousePosition.x * 10 : 0 // Sideways movement
  const translateY = isHovered ? mousePosition.y * 8 : 0 // Vertical movement
  const translateZ = isHovered ? 25 : 0 // Forward movement
  const scale = isHovered ? 1.05 : 1 // Scale up

  return (
    <div  className="container bg-cover bg-neutral-950 bg-center font-sans mb-10">
      {/* Header */}
      <header className="bg-black bg-opacity-70 w-full p-0">
        <div className="w-full"></div>
      </header>
      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto mt-10 p-4">
        <div className="relative max-w-full mx-auto" style={{ perspective: "1200px" }}>
          {/* Enhanced glowing background gradient */}
          <div
            className="absolute inset-0 rounded-2xl blur-3xl transform rotate-1 transition-all duration-300"
            style={{
              background: isHovered
                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(147, 51, 234, 0.6) 100%)"
                : "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
              filter: isHovered ? "blur(40px)" : "blur(30px)",
            }}
          />

          {/* Additional glow layers for more intensity */}
          <div
            className="absolute inset-0 rounded-2xl blur-2xl transform -rotate-1 transition-all duration-300"
            style={{
              background: isHovered
                ? "linear-gradient(45deg, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%)"
                : "linear-gradient(45deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)",
              filter: isHovered ? "blur(25px)" : "blur(20px)",
            }}
          />

          <div
            ref={formRef}
            className="relative bg-neutral-950 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out transform-gpu cursor-pointer"
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
                ? `${mousePosition.x * 7.5}px ${mousePosition.y * 7.5}px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)`
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

            {/* Header with traffic lights (from your original component) */}
            <div className="bg-gradient-to-r from-neutral-950 to-neutral-800 px-4 sm:px-6 py-4 flex items-center space-x-2 relative z-20">
              <div className="ml-4 text-lg text-gray-200 font-medium hidden sm:block">CONTACT ME</div>
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-8 relative z-20">
              {/* Name Input */}
              <div className="mb-3">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full text-gray-100 text-lg font-normal leading-6 bg-transparent p-3 mb-3 border-0 border-b-2 border-gradient-to-br from-green-50 to-green-100 transition-all duration-400 ease-in-out"
                />
              </div>
              {/* Email Input */}
              <div className="mb-3">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full text-gray-100 text-lg font-normal leading-6 bg-transparent p-3 mb-3 border-0 border-b-2 border-gradient-to-br from-green-50 to-green-100transition-all duration-400 ease-in-out"
                />
              </div>
              {/* Comment Textarea */}
              <div className="mb-3">
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Comment"
                  rows={6}
                  className="w-full text-gray-100 text-lg font-normal leading-6 bg-transparent p-3 mb-3 border-0 border-b-2 border-gradient-to-br from-green-50 to-green-100 transition-all duration-400 ease-in-out"
                />
              </div>
              {/* Submit Button */}
              <div className="mt-2">
                <button
                  type="submit"
                  className="text-black text-md  bg-gradient-to-br from-green-50 to-green-100 p-2 px-5 rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
