"use client"

import type React from "react"
import { ExternalLink, Calendar, MapPin } from "lucide-react"

interface WorkExperience {
  id: number
  title: string
  company: string
  location: string
  duration: string
  description: string
  technologies: string[]
  link?: string
  image?: string
}

const MyWorksSection: React.FC = () => {
  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      title: "AI Automations Engineer",
      company: "propertyvisualizer",
      location: "Cyprus",
      duration: "2025 - Present",
      description:
        "Automated PM-Workflow using N8N and offic 365 tools via MicoroSoft Graph API",
      technologies: ["Javascript", "N8N", "Python", "Microsoft GraphAPI", "ClickUp"],
      link: "https://propertyvisualizer.com",
      image: "/projects_banner/property_visualizer_main.png",
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Kizush Constructions",
      location: "Ontario, Canada",
      duration: "2024 - 2025",
      description:
        "Built and maintained full-stack web applications from concept to deployment. Implemented RESTful APIs and integrated third-party services to enhance user experience.",
      technologies: ["React.js", "Fastapi", "AWS", "PostgreSQL",],
      link: "https://kizushconstruction.ca",
      image: "/projects_banner/kizush_main.png",
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      company: "Odomite Rentals",
      location: "New Wark, NJ",
      duration: "2021 - 2024",
      description:
        "Developed interactive websites and web applications for various clients. Focused on creating responsive designs and implementing modern JavaScript frameworks.",
      technologies: ["JavaScript", "NextJS", "TailwindCSS", "FireBase", "FireStore","Cloudinary",],
      link: "https://odomiterentals.com",
      image: "/projects_banner/odomite_alt.png",
    },
    {
      id: 3,
      title: "Full-Stack Developer/ Senior Technical Lead",
      company: "Sucasa.com",
      location: "Lagos, Nigeria",
      duration: "2020 - Till Date",
      description:
        "As sucasa CTO I was tasked with developing best practices for developing and scaling our platform to manage hundred of thousands of users via our dashboards and our api-offering. I built the platform alongsides a team of 10 including designers and other developers ",
      technologies: ["JavaScript", "NextJS", "FastAPI", "SuperBase", "Docker"],
      link: "https://sucasa.com",
      image: "/projects_banner/sucasa_main.png",
    },
  ]

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {workExperiences.map((work, index) => (
            <div
              key={work.id}
              className="opacity-0 animate-fade-in-up bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {work.image && (
                  <div className="lg:w-80 flex-shrink-0">
                    <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={`${work.company} project preview`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{work.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{work.company}</span>
                          {work.link && (
                            <a
                              href={work.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{work.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{work.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{work.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyWorksSection
