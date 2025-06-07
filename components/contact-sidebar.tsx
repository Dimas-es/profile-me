import { Badge } from "@/components/ui/badge"
import { Mail, Instagram, Twitter, MessageSquare, DribbbleIcon as Behance } from "lucide-react"

export function ContactSidebar() {

  return (
    <div className="space-y-6">
      {/* Contact Section */}
      <div className="rounded-none shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Contact / More Profiles</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-gray-500" />
            <span>liu.sophiaa@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Instagram className="w-4 h-4 text-gray-500" />
            <span>@hastalasophia</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Twitter className="w-4 h-4 text-gray-500" />
            <span>@hastalasophia</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MessageSquare className="w-4 h-4 text-gray-500" />
            <span>@hastalasophia</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Behance className="w-4 h-4 text-gray-500" />
            <span>@studioscphy</span>
          </div>
        </div>
      </div>

      
    </div>
  )
}
