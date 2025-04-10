import Link from "next/link"
import { AlertCircle, CheckCircle, Clock, Home, Plus, PenToolIcon as Tool } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Home className="h-6 w-6" />
          <span>Strata Manager</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Dashboard
          </Link>
          <Link
            href="/meetings"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Meetings
          </Link>
          <Link href="/maintenance" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            Maintenance
          </Link>
          <Link
            href="/documents"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Documents
          </Link>
          <Link
            href="/finances"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Finances
          </Link>
          <Link
            href="/residents"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Residents
          </Link>
        </nav>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Maintenance</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Request
          </Button>
        </div>
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList>
            <TabsTrigger value="active">Active Requests</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Maintenance</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Lobby Light Replacement</CardTitle>
                    <Badge variant="outline" className="bg-yellow-50">
                      <Clock className="h-3 w-3 mr-1" />
                      Pending
                    </Badge>
                  </div>
                  <CardDescription>Submitted by Unit 12</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Tool className="h-4 w-4" />
                    <span>Electrical</span>
                  </div>
                  <div className="mt-4 text-sm">
                    <p>
                      Two ceiling lights in the main lobby are not working. Need replacement bulbs and possibly fixture
                      repair.
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">Reported: April 3, 2025</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Assign Contractor
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Garage Door Malfunction</CardTitle>
                    <Badge variant="outline" className="bg-yellow-50">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Urgent
                    </Badge>
                  </div>
                  <CardDescription>Submitted by Unit 5</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Tool className="h-4 w-4" />
                    <span>Mechanical</span>
                  </div>
                  <div className="mt-4 text-sm">
                    <p>
                      Garage door is stuck halfway and won't respond to remote controls. Security concern as the
                      building is not secure.
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">Reported: April 5, 2025</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Assign Contractor
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Water Leak in Common Area</CardTitle>
                    <Badge variant="outline" className="bg-yellow-50">
                      <Clock className="h-3 w-3 mr-1" />
                      In Progress
                    </Badge>
                  </div>
                  <CardDescription>Submitted by Unit 18</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Tool className="h-4 w-4" />
                    <span>Plumbing</span>
                  </div>
                  <div className="mt-4 text-sm">
                    <p>
                      Water leaking from ceiling near the 2nd floor stairwell. Plumber scheduled for inspection
                      tomorrow.
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">Reported: April 2, 2025</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Update Status
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <div className="rounded-md border">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Completed Maintenance</h2>
                <p className="text-sm text-muted-foreground">Recently completed maintenance requests</p>
              </div>
              <div className="border-t">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Hallway Carpet Cleaning</h3>
                    <p className="text-sm text-muted-foreground">Completed: March 28, 2025</p>
                    <Badge className="mt-2 bg-green-50">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Intercom System Repair</h3>
                    <p className="text-sm text-muted-foreground">Completed: March 15, 2025</p>
                    <Badge className="mt-2 bg-green-50">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Gym Equipment Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Completed: March 10, 2025</p>
                    <Badge className="mt-2 bg-green-50">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="scheduled" className="space-y-4">
            <div className="rounded-md border">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Scheduled Maintenance</h2>
                <p className="text-sm text-muted-foreground">Upcoming planned maintenance</p>
              </div>
              <div className="border-t">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Annual Fire Safety Inspection</h3>
                    <p className="text-sm text-muted-foreground">Scheduled: April 15, 2025</p>
                    <p className="text-sm text-muted-foreground">All common areas and fire equipment</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Quarterly Pest Control</h3>
                    <p className="text-sm text-muted-foreground">Scheduled: May 5, 2025</p>
                    <p className="text-sm text-muted-foreground">All common areas and perimeter</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">HVAC System Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Scheduled: May 20, 2025</p>
                    <p className="text-sm text-muted-foreground">Building central air conditioning system</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

