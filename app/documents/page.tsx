import Link from "next/link"
import { FileText, FolderOpen, Home, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentsPage() {
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
          <Link
            href="/maintenance"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Maintenance
          </Link>
          <Link href="/documents" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
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
          <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Upload Document
          </Button>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search documents..." />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="legal">Legal</TabsTrigger>
            <TabsTrigger value="minutes">Meeting Minutes</TabsTrigger>
            <TabsTrigger value="bylaws">By-Laws</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="rounded-md border">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Recent Documents</h2>
                <p className="text-sm text-muted-foreground">Recently added or updated documents</p>
              </div>
              <div className="border-t">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Q1 Financial Statement</h3>
                    <p className="text-sm text-muted-foreground">Added: April 2, 2025</p>
                    <p className="text-xs text-muted-foreground">Category: Financial Records</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Committee Meeting Minutes - March</h3>
                    <p className="text-sm text-muted-foreground">Added: March 18, 2025</p>
                    <p className="text-xs text-muted-foreground">Category: Meeting Minutes</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Building Insurance Certificate</h3>
                    <p className="text-sm text-muted-foreground">Added: March 15, 2025</p>
                    <p className="text-xs text-muted-foreground">Category: Legal</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Maintenance Schedule 2025</h3>
                    <p className="text-sm text-muted-foreground">Added: March 10, 2025</p>
                    <p className="text-xs text-muted-foreground">Category: Maintenance</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                    <FolderOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Financial Records</h3>
                    <p className="text-sm text-muted-foreground">12 documents</p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                    <FolderOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Legal Documents</h3>
                    <p className="text-sm text-muted-foreground">8 documents</p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                    <FolderOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Meeting Minutes</h3>
                    <p className="text-sm text-muted-foreground">24 documents</p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                    <FolderOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">By-Laws</h3>
                    <p className="text-sm text-muted-foreground">3 documents</p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                    <FolderOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Maintenance Records</h3>
                    <p className="text-sm text-muted-foreground">15 documents</p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border">
                    <FolderOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Insurance</h3>
                    <p className="text-sm text-muted-foreground">5 documents</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="financial" className="space-y-4">
            <div className="rounded-md border">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Financial Documents</h2>
                <p className="text-sm text-muted-foreground">Financial statements, budgets, and levy records</p>
              </div>
              <div className="border-t">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Q1 Financial Statement</h3>
                    <p className="text-sm text-muted-foreground">Added: April 2, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Annual Budget 2025</h3>
                    <p className="text-sm text-muted-foreground">Added: January 15, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Levy Schedule 2025</h3>
                    <p className="text-sm text-muted-foreground">Added: January 10, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="legal" className="space-y-4">
            <div className="rounded-md border">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Legal Documents</h2>
                <p className="text-sm text-muted-foreground">Contracts, agreements, and legal notices</p>
              </div>
              <div className="border-t">
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Building Insurance Certificate</h3>
                    <p className="text-sm text-muted-foreground">Added: March 15, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Cleaning Service Contract</h3>
                    <p className="text-sm text-muted-foreground">Added: February 10, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="flex items-center justify-center rounded-md border p-2 mr-4">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Strata Plan</h3>
                    <p className="text-sm text-muted-foreground">Added: January 5, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
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

