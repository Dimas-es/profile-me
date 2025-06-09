import { Badge } from "@/components/ui/badge"

export function SkillsSidebar() {
  const skills = ["Photoshop", "Illustrator", "InDesign", "Visual Design", "Sketch", "UX Design", "UI Design"]
  return (
    <div className="bg-white rounded-none shadow-sm p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">Skills</h2>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="text-xs sm:text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
