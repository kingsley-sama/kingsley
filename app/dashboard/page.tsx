"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// Remove this import
// import { Progress } from "@/components/ui/progress"
import { Users, FolderOpen, DollarSign, TrendingUp, Calendar, Clock, Plus, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock data
const stats = {
  totalClients: 12,
  activeProjects: 8,
  totalRevenue: 245000,
  monthlyGrowth: 12.5,
}

const recentProjects = [
  {
    id: 1,
    name: "Website Redesign",
    client: "Acme Corporation",
    progress: 65,
    status: "In Progress",
    dueDate: "2024-04-15",
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "TechStart Inc",
    progress: 30,
    status: "In Progress",
    dueDate: "2024-08-01",
  },
  {
    id: 3,
    name: "E-commerce Platform",
    client: "Global Solutions",
    progress: 5,
    status: "Planning",
    dueDate: "2024-09-01",
  },
]

const recentClients = [
  {
    id: 1,
    name: "Acme Corporation",
    email: "contact@acme.com",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "TechStart Inc",
    email: "hello@techstart.com",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Creative Agency",
    email: "team@creative.com",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const upcomingTasks = [
  {
    id: 1,
    title: "Client meeting with Acme Corp",
    time: "10:00 AM",
    date: "Today",
  },
  {
    id: 2,
    title: "Project review - Website Redesign",
    time: "2:00 PM",
    date: "Today",
  },
  {
    id: 3,
    title: "Proposal deadline - Mobile App",
    time: "9:00 AM",
    date: "Tomorrow",
  },
]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your business today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalClients}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeProjects}</div>
              <p className="text-xs text-muted-foreground">3 due this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+{stats.monthlyGrowth}% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{stats.monthlyGrowth}%</div>
              <p className="text-xs text-muted-foreground">Monthly growth rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Projects */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Your latest project updates</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/projects">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{project.name}</p>
                      <p className="text-sm text-gray-600">{project.client}</p>
                    </div>
                    <Badge variant={project.status === "In Progress" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{project.progress}% complete</span>
                    <span className="text-gray-500">Due {new Date(project.dueDate).toLocaleDateString()}</span>
                  </div>
                  {/* Replace Progress component usage: */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <Link href="/dashboard/projects/add">
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Clients */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Clients</CardTitle>
                <CardDescription>Your newest client relationships</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/clients">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentClients.map((client) => (
                <div key={client.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                      <AvatarFallback>
                        {client.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-sm text-gray-600">{client.email}</p>
                    </div>
                  </div>
                  <Badge variant="default">{client.status}</Badge>
                </div>
              ))}
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <Link href="/dashboard/clients/add">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Client
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Your schedule for today and tomorrow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-gray-600">
                      {task.date} at {task.time}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
