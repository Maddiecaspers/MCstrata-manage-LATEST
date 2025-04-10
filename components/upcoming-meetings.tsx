import { CalendarDays, Users } from "lucide-react"

export function UpcomingMeetings() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="flex items-center justify-center rounded-md border p-2 mr-4">
          <CalendarDays className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Annual General Meeting</p>
          <p className="text-xs text-muted-foreground">May 15, 2025 • 7:00 PM</p>
          <div className="flex items-center pt-2">
            <Users className="h-3 w-3 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">All owners required</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center rounded-md border p-2 mr-4">
          <CalendarDays className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Committee Meeting</p>
          <p className="text-xs text-muted-foreground">April 20, 2025 • 6:30 PM</p>
          <div className="flex items-center pt-2">
            <Users className="h-3 w-3 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Committee members only</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center rounded-md border p-2 mr-4">
          <CalendarDays className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Building Inspection</p>
          <p className="text-xs text-muted-foreground">June 5, 2025 • 10:00 AM</p>
          <div className="flex items-center pt-2">
            <Users className="h-3 w-3 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Committee representatives</span>
          </div>
        </div>
      </div>
    </div>
  )
}

