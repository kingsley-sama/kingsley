"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// Remove this import
// import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreHorizontal, Calendar, DollarSign, Users, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

// Mock data
const projects = [
  {
    id: 1,
    name: "Website Redesign",
    client: "Acme Corporation",
    clientId: 1,
    status: "In Progress",
    progress: 65,
    startDate: "2024-01-15",
    endDate: "2024-04-15",
    budget: 50000,
    spent: 32500,
    team: [
      { name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "TechStart Inc",
    clientId: 2,
    status: "In Progress",
    progress: 30,
    startDate: "2024-02-01",
    endDate: "2024-08-01",
    budget: 75000,
    spent: 22500,
    team: [
      { name: "Mike Johnson", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Sarah Wilson", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Tom Brown", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    id: 3,
    name: "Brand Identity",
    client: "Creative Agency",
    clientId: 4,
    status: "Completed",
    progress: 100,
    startDate: "2023-11-01",
    endDate: "2024-01-01",
    budget: 25000,
    spent: 24000,
    team: [{ name: "Lisa Davis", avatar: "/placeholder.svg?height=32&width=32" }],
  },
  {
    id: 4,
    name: "E-commerce Platform",
    client: "Global Solutions",
    clientId: 3,
    status: "Planning",
    progress: 5,
    startDate: "2024-03-01",
    endDate: "2024-09-01",
    budget: 100000,
    spent: 5000,
    team: [
      { name: "Alex Chen", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Emma Taylor", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "default"
      case "In Progress":
        return "secondary"
      case "Planning":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">Manage your project portfolio</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/projects/add">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.filter((p) => p.status === "In Progress").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${projects.reduce((sum, project) => sum + project.budget, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.filter((p) => p.status === "Completed").length}</div>
              <p className="text-xs text-muted-foreground">This quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>
                    <Link href={`/dashboard/clients/${project.clientId}`} className="text-blue-600 hover:underline">
                      {project.client}
                    </Link>
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/projects/${project.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/projects/${project.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant={getStatusColor(project.status)}>{project.status}</Badge>
                  <span className="text-sm text-gray-600">{project.progress}% complete</span>
                </div>

                {/* Replace Progress component with a simple div: */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date(project.startDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="mr-2 h-4 w-4" />${project.spent.toLocaleString()} / $
                    {project.budget.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member, index) => (
                        <Avatar key={index} className="h-6 w-6 border-2 border-white">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback className="text-xs">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {project.team.length > 3 && (
                        <div className="h-6 w-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-gray-600">+{project.team.length - 3}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/dashboard/projects/${project.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
