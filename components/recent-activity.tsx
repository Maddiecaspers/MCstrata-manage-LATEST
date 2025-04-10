import { FileText, MessageSquare, PenToolIcon as Tool, User } from "lucide-react"

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="flex items-center justify-center rounded-md border p-2 mr-4">
          <Tool className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Maintenance Request: Lobby Light Replacement</p>
          <p className="text-xs text-muted-foreground">Submitted by Unit 12 • 2 days ago</p>
          <p className="text-xs text-muted-foreground mt-1">Status: Pending contractor assignment</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center rounded-md border p-2 mr-4">
          <FileText className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Document Added: Q1 Financial Statement</p>
          <p className="text-xs text-muted-foreground">Added by Treasurer • 3 days ago</p>
          <p className="text-xs text-muted-foreground mt-1">Category: Financial Records</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center rounded-md border p-2 mr-4">
          <MessageSquare className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Notice: Water Shutdown for Maintenance</p>
          <p className="text-xs text-muted-foreground">Sent by Secretary • 5 days ago</p>
          <p className="text-xs text-muted-foreground mt-1">Scheduled for April 10, 9AM-12PM</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center rounded-md border p-2 mr-4">
          <User className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-sm font-medium">New Resident: Unit 8</p>
          <p className="text-xs text-muted-foreground">Registered • 1 week ago</p>
          <p className="text-xs text-muted-foreground mt-1">Contact details added to directory</p>
        </div>
      </div>
    </div>
  )
}

