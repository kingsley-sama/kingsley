"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Edit, Mail, Phone, MapPin, Globe, Building, Calendar, DollarSign, FolderOpen } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock data - in real app, you'd fetch this based on the ID
const client = {
  id: 1,
  name: "Acme Corporation",
  email: "contact@acme.com",
  phone: "+1 (555) 123-4567",
  company: "Acme Corporation",
  website: "https://acme.com",
  address: "123 Business Ave",
  city: "New York",
  state: "NY",
  zipCode: "10001",
  country: "United States",
  status: "Active",
  notes: "Long-term client with multiple ongoing projects. Prefers weekly updates and detailed reporting.",
  avatar: "/placeholder.svg?height=80&width=80",
  joinDate: "2023-01-15",
  totalProjects: 3,
  activeProjects: 2,
  totalRevenue: 125000,
}

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    startDate: "2024-01-15",
    budget: 50000,
  },
  {
    id: 2,
    name: "Mobile App Development",
    status: "In Progress",
    startDate: "2024-02-01",
    budget: 75000,
  },
  {
    id: 3,
    name: "Brand Identity",
    status: "Completed",
    startDate: "2023-11-01",
    budget: 25000,
  },
]

export default function ClientProfilePage() {
  const params = useParams()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/clients">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Clients
              </Link>
            </Button>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                <AvatarFallback className="text-lg">
                  {client.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{client.name}</h1>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant={client.status === "Active" ? "default" : "secondary"}>{client.status}</Badge>
                  <span className="text-sm text-gray-500">
                    Client since {new Date(client.joinDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Button asChild>
            <Link href={`/dashboard/clients/${params.id}/edit`}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Client
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-gray-600">{client.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-gray-600">{client.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Company</p>
                      <p className="text-sm text-gray-600">{client.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Website</p>
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {client.website}
                      </a>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-gray-600">
                      {client.address}
                      <br />
                      {client.city}, {client.state} {client.zipCode}
                      <br />
                      {client.country}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>All projects associated with this client</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FolderOpen className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">{project.name}</p>
                          <p className="text-sm text-gray-600">
                            Started {new Date(project.startDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">${project.budget.toLocaleString()}</p>
                          <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                            {project.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/dashboard/projects/${project.id}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{client.notes}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FolderOpen className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Total Projects</span>
                  </div>
                  <span className="font-semibold">{client.totalProjects}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Active Projects</span>
                  </div>
                  <span className="font-semibold">{client.activeProjects}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Total Revenue</span>
                  </div>
                  <span className="font-semibold">${client.totalRevenue.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/projects/add">
                    <FolderOpen className="h-4 w-4 mr-2" />
                    New Project
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
