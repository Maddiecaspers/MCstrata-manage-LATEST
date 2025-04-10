import Link from "next/link"
import { CalendarDays, ChevronRight, Clock, Home, Plus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MeetingsPage() {
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
          <Link href="/meetings" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            Meetings
          </Link>
          <Link
            href="/maintenance"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
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
          <h1 className="text-2xl font-bold tracking-tight">Meetings</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Schedule Meeting
          </Button>
        </div>
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Meetings</TabsTrigger>
            <TabsTrigger value="minutes">Meeting Minutes</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Annual General Meeting</CardTitle>
                  <CardDescription>Required for all owners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>May 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <Clock className="h-4 w-4" />
                    <span>7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <Users className="h-4 w-4" />
                    <span>All owners required</span>
                  </div>
                  <div className="mt-4 text-sm">
                    <p>Agenda:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Financial report for FY 2024-2025</li>
                      <li>Committee election</li>
                      <li>Capital works fund planning</li>
                      <li>Building maintenance schedule</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Committee Meeting</CardTitle>
                  <CardDescription>Committee members only</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>April 20, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <Clock className="h-4 w-4" />
                    <span>6:30 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <Users className="h-4 w-4" />
                    <span>Committee members only</span>
                  </div>
                  <div className="mt-4 text-sm">
                    <p>Agenda:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Review maintenance requests</li>
                      <li>AGM preparation</li>
                      <li>Budget review</li>
                      <li>Contractor quotes for lobby renovation</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Building Inspection</CardTitle>
                  <CardDescription>Committee representatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>June 5, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <Clock className="h-4 w-4" />
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <Users className="h-4 w-4" />
                    <span>Committee representatives</span>
                  </div>
                  <div className="mt-4 text-sm">
                    <p>Details:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Annual fire safety inspection</li>
                      <li>Building inspector from council</li>
                      <li>Access to common areas required</li>
                      <li>Report to be provided within 14 days</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="past" className="space-y-4">
            <div className="rounded-md border">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Past Meetings</h2>
                <p className="text-sm text-muted-foreground">View records of previous meetings</p>
              </div>
              <div className="border-t">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Committee Meeting</h3>
                    <p className="text-sm text-muted-foreground">March 15, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Minutes
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Special General Meeting</h3>
                    <p className="text-sm text-muted-foreground">February 20, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Minutes
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Committee Meeting</h3>
                    <p className="text-sm text-muted-foreground">January 10, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Minutes
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Committee Meeting</h3>
                    <p className="text-sm text-muted-foreground">December 5, 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Minutes
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="minutes" className="space-y-4">
            <div className="rounded-md border">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Meeting Minutes</h2>
                <p className="text-sm text-muted-foreground">Access and download meeting minutes</p>
              </div>
              <div className="border-t">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Committee Meeting Minutes</h3>
                    <p className="text-sm text-muted-foreground">March 15, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Special General Meeting Minutes</h3>
                    <p className="text-sm text-muted-foreground">February 20, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Committee Meeting Minutes</h3>
                    <p className="text-sm text-muted-foreground">January 10, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </div>
                <div className="border-t flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Annual General Meeting Minutes</h3>
                    <p className="text-sm text-muted-foreground">November 15, 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download PDF
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

