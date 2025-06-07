import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function ProfileHeader() {
  return (
    <div className="p-6">
      <div className="flex items-start gap-4">
        <Avatar className="w-24 h-24 border-4 border-white rounded-full">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Sophia Liu" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">Sophia Liu</h1>
          <p className="text-gray-600 mt-1">Designer & Photography in San Francisco Bay Area</p>
          <p className="text-gray-500 text-sm mt-1">Self-Employed • Cal Poly San Luis Obispo</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">Message</Button>
          <Button variant="outline" className="rounded-full">
            More...
          </Button>
        </div>
      </div>
    </div>
  )
}
