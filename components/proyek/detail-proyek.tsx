/**
 * @fileoverview Komponen detail proyek untuk menampilkan informasi lengkap proyek
 * @author Tim Pengembang
 */

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import type { DetailProyekProps } from "@/types/komponen"
import {
  getFeaturedProject,
  getMoreProjects,
  getProjectHeadings,
  getNavigationButtons,
  getPlaceholders,
} from "@/app/utils/data-utils"

/**
 * Komponen yang menampilkan detail lengkap dari sebuah proyek
 *
 * @component
 * @param {DetailProyekProps} props - Properti komponen
 * @param {string} props.projectId - ID proyek yang akan ditampilkan
 * @returns {JSX.Element} Komponen detail proyek
 *
 * @example
 * ```tsx
 * <DetailProyek projectId="1" />
 * ```
 */
export function DetailProyek({ projectId }: DetailProyekProps) {
  const featuredProject = getFeaturedProject()
  const moreProjects = getMoreProjects()
  const headings = getProjectHeadings()
  const buttons = getNavigationButtons()
  const placeholders = getPlaceholders()

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 text-gray-600">
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        <Link href="/projects" className="text-xs sm:text-sm hover:text-blue-600">
          {buttons.back}
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{featuredProject.title}</h1>
            <p className="text-blue-600 font-medium text-sm">{featuredProject.category}</p>
          </div>

          <div className="prose max-w-none">
            {featuredProject.description.map((paragraph, index) => (
              <p key={index} className="text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <div className="aspect-video relative rounded-none overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={featuredProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-none overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={`${featuredProject.title} Mobile View`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">{headings.teamProject}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredProject.teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">
                        {headings.projectRole}: {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline">{buttons.learnMore}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-lg sm:text-xl font-semibold">{headings.exploreMore}</h2>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder={placeholders.search} className="pl-10 w-full sm:w-64" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {moreProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/placeholder.svg?height=200&width=300" alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg">{project.title}</h3>
                <p className="text-blue-600 text-xs sm:text-sm font-medium mt-1">{project.category}</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
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
      </div>
    </div>
  )
}
