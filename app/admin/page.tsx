"use client"

import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  FolderOpen,
  Shield,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Server,
} from "lucide-react"

// Mock admin data
const adminStats = {
  totalUsers: 156,
  totalClients: 89,
  totalProjects: 234,
  systemHealth: 99.8,
  activeUsers: 42,
  pendingApprovals: 7,
}

const recentActivity = [
  {
    id: 1,
    user: "John Doe",
    action: "Created new client",
    target: "Acme Corporation",
    timestamp: "2 minutes ago",
    type: "create",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "Updated project status",
    target: "Website Redesign",
    timestamp: "15 minutes ago",
    type: "update",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "Deleted project",
    target: "Old Mobile App",
    timestamp: "1 hour ago",
    type: "delete",
  },
  {
    id: 4,
    user: "Sarah Wilson",
    action: "Added new user",
    target: "tom.brown@example.com",
    timestamp: "2 hours ago",
    type: "create",
  },
]

const systemAlerts = [
  {
    id: 1,
    type: "warning",
    message: "Database backup scheduled for tonight at 2 AM",
    timestamp: "1 hour ago",
  },
  {
    id: 2,
    type: "info",
    message: "7 users pending approval",
    timestamp: "3 hours ago",
  },
  {
    id: 3,
    type: "success",
    message: "System update completed successfully",
    timestamp: "1 day ago",
  },
]

export default function AdminDashboard() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "create":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "update":
        return <Clock className="w-4 h-4 text-blue-500" />
      case "delete":
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      default:
        return <Activity className="w-4 h-4 text-gray-500" />
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "info":
        return <Activity className="w-4 h-4 text-blue-500" />
      default:
        return <Activity className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">System overview and management controls</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">{adminStats.activeUsers} active now</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.totalClients}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.totalProjects}</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Server className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.systemHealth}%</div>
              <p className="text-xs text-green-600">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest user actions and system events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-sm text-gray-600">{activity.target}</p>
                    </div>
                    <div className="text-xs text-gray-500">{activity.timestamp}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Important notifications and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-4 p-3 border rounded-lg">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex-col space-y-2 bg-transparent" variant="outline">
                <Users className="w-6 h-6" />
                <span>Manage Users</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-transparent" variant="outline">
                <Database className="w-6 h-6" />
                <span>Database Backup</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-transparent" variant="outline">
                <Shield className="w-6 h-6" />
                <span>Security Settings</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-transparent" variant="outline">
                <TrendingUp className="w-6 h-6" />
                <span>View Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        {adminStats.pendingApprovals > 0 && (
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <span>Pending Approvals</span>
                <Badge variant="secondary">{adminStats.pendingApprovals}</Badge>
              </CardTitle>
              <CardDescription>Users waiting for account approval</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Review Pending Users</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  )
}
