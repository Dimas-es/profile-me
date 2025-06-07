import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="p-6 border-b">
      <div className="flex items-start gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Sophia Liu" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">Sophia Liu</h1>
          <p className="text-gray-600 mt-1">Designer & Photography in San Francisco Bay Area</p>
          <p className="text-gray-500 text-sm mt-1">Self-Employed • Cal Poly San Luis Obispo</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <MessageCircle className="w-4 h-4 mr-2" />
            Message
          </Button>
          <Button variant="outline">More...</Button>
        </div>
      </div>
    </div>
  )
}
