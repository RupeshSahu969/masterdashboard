'use client'

import { AuthContext } from '../Lead-to-order/auth-context.js'
import DashboardMetrics from '../Lead-to-order/dashboard/DashboardMetrics.jsx'
import DashboardCharts from '../Lead-to-order/dashboard/DashboardCharts.jsx'
import PendingTasks from '../Lead-to-order/dashboard/PendingTasks.jsx'
import RecentActivities from '../Lead-to-order/dashboard/RecentActivities.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Lightweight wrapper so Lead-to-order widgets work in the master dashboard without login.
const demoAuthValue = {
  currentUser: { username: 'Guest', id: 'guest' },
  userType: 'admin',
  isAuthenticated: true,
  isAdmin: () => true,
  login: async () => true,
  logout: () => {},
  showNotification: () => {},
  isLoading: false,
  fetchUserData: async () => {},
}

export default function LeadToOrderDashboard() {
  return (
    <AuthContext.Provider value={demoAuthValue as any}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Lead to Order</h1>
          <p className="text-muted-foreground mt-1">Lead, enquiry, quotation, and order overview</p>
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <DashboardMetrics />
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <DashboardCharts />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <PendingTasks />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentActivities />
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthContext.Provider>
  )
}
