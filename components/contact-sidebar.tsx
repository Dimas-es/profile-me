import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Instagram, Twitter, MessageSquare, DribbbleIcon as Behance } from "lucide-react"

export function ContactSidebar() {
  const skills = ["Photoshop", "Illustrator", "InDesign", "Visual Design", "Sketch", "UX Design", "UI Design"]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Contact / More Profiles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-gray-500" />
            <span>lu.sophia@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Instagram className="w-4 h-4 text-gray-500" />
            <span>@hastalasophia</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Twitter className="w-4 h-4 text-gray-500" />
            <span>@hastalasophia</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MessageSquare className="w-4 h-4 text-gray-500" />
            <span>@hastalasophia</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Behance className="w-4 h-4 text-gray-500" />
            <span>@studioscphy</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
