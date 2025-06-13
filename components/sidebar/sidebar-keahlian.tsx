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
    <div className="bg-main-secondary border border-main-border rounded-none shadow-sm p-3 sm:p-4 md:p-6">
      <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 text-main-text">{title}</h2>
      <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="text-xs sm:text-sm text-main-text-2 border-main-border">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
