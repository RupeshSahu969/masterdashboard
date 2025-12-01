'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PlanningDashboard() {
  return (
    <div className="space-y-6">
      <Card className="border border-dashed">
        <CardHeader>
          <CardTitle>12 Week Planning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-muted-foreground">This dashboard is under active development.</p>
          <p className="text-muted-foreground">Content will appear here once it is ready.</p>
        </CardContent>
      </Card>
    </div>
  )
}
