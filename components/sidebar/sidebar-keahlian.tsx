/**
 * @fileoverview Komponen sidebar untuk menampilkan keahlian
 * @author Tim Pengembang
 */

import { Badge } from "@/components/ui/badge"
import { getSidebarSkills, getSidebarSkillsTitle } from "@/app/utils/data-utils"

/**
 * Komponen sidebar yang menampilkan daftar keahlian
 *
 * @component
 * @returns {JSX.Element} Komponen sidebar keahlian
 *
 * @example
 * ```tsx
 * <SidebarKeahlian />
 * ```
 */
export function SidebarKeahlian() {
  const skills = getSidebarSkills()
  const title = getSidebarSkillsTitle()

  return (
    <div className="bg-white rounded-none shadow-sm p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">{title}</h2>
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
