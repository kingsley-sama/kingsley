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
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description:
        "Led the development of responsive web applications using React and Next.js. Collaborated with design teams to implement pixel-perfect UI components and optimized application performance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      link: "https://techcorp.example.com",
      image: "/modern-tech-dashboard.png",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2020 - 2022",
      description:
        "Built and maintained full-stack web applications from concept to deployment. Implemented RESTful APIs and integrated third-party services to enhance user experience.",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "AWS"],
      link: "https://startupxyz.example.com",
      image: "/startup-web-app-interface.png",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      duration: "2018 - 2020",
      description:
        "Developed interactive websites and web applications for various clients. Focused on creating responsive designs and implementing modern JavaScript frameworks.",
      technologies: ["JavaScript", "React", "SCSS", "Webpack", "jQuery"],
      link: "https://digitalagencypro.example.com",
      image: "/creative-agency-website.png",
    },
  ]

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">My Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my professional journey as a web developer, featuring the projects and companies I've worked
            with.
          </p>
        </div>

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
