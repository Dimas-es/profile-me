import { Badge } from "@/components/ui/badge"

export function SkillsSidebar() {
     const skills = ["Photoshop", "Illustrator", "InDesign", "Visual Design", "Sketch", "UX Design", "UI Design"]
  return (
    <div className="bg-white rounded-none shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
  )
} 