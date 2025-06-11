/**
 * @fileoverview Komponen grid untuk menampilkan daftar proyek
 * @author Tim Pengembang
 */

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import {
  getPersonalProjects,
  getTeamProjects,
  getProjectHeadings,
  getNavigationButtons,
  getPlaceholders,
} from "@/app/utils/data-utils"

/**
 * Komponen grid yang menampilkan daftar proyek personal dan tim
 *
 * @component
 * @returns {JSX.Element} Komponen grid proyek
 *
 * @example
 * ```tsx
 * <GridProyek />
 * ```
 */
export function GridProyek() {
  const projects = getPersonalProjects()
  const teamProjects = getTeamProjects()
  const headings = getProjectHeadings()
  const buttons = getNavigationButtons()
  const placeholders = getPlaceholders()

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{headings.personalProjects}</h2>
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder={placeholders.search} className="pl-10 w-full sm:w-64" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardContent className="p-5">
              <Link href={`/project/${project.id}`}>
                <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors">{project.title}</h3>
              </Link>
              <p className="text-blue-600 text-sm font-medium mt-1">{project.category}</p>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" className="rounded-full">
          {buttons.visitWebsite}
        </Button>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{headings.teamProjects}</h2>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder={placeholders.search} className="pl-10 w-full sm:w-64" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {teamProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4 sm:p-5">
                <h3 className="font-semibold text-base sm:text-lg">{project.title}</h3>
                <p className="text-blue-600 text-xs sm:text-sm font-medium mt-1">
                  {headings.projectRole}: {project.role}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-2">{project.description}</p>
                <div className="mt-3 sm:mt-4">
                  <h4 className="font-medium text-xs sm:text-sm mb-1 sm:mb-2">Tim</h4>
                  <div className="space-y-1">
                    {project.team.map((member, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium">{member.name}</p>
                          <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
