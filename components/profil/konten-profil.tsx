/**
 * @fileoverview Komponen konten profil untuk menampilkan informasi profil pengguna
 * @author Tim Pengembang
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  getProfileAbout,
  getProfileSkills,
  getProfileExperience,
  getProfileProjects,
  getSectionTitles,
  getNavigationButtons,
} from "@/app/utils/data-utils"

/**
 * Komponen yang menampilkan konten profil pengguna
 *
 * @component
 * @returns {JSX.Element} Komponen konten profil
 *
 * @example
 * ```tsx
 * <KontenProfil />
 * ```
 */
export function KontenProfil() {
  const aboutText = getProfileAbout()
  const skills = getProfileSkills()
  const experience = getProfileExperience()
  const projects = getProfileProjects()
  const sections = getSectionTitles()
  const buttons = getNavigationButtons()

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{sections.aboutMe}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{aboutText}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {projects.map((project, index) => (
          <Card key={index}>
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={project.title}
                fill
                className="object-cover rounded-t-none"
              />
            </div>
            <CardContent className="p-3 sm:p-4">
              <h3 className="font-medium text-xs sm:text-sm">{project.title}</h3>
              <p className="text-blue-600 text-xs mt-1">{project.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="link" className="text-blue-600">
          Lihat semua proyek
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{sections.skills}</CardTitle>
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

      <Card>
        <CardHeader>
          <CardTitle>{sections.experience}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-none flex items-center justify-center text-white font-bold text-sm sm:text-base">
                {exp.company.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm sm:text-base">{exp.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{exp.company}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{exp.period}</p>
                {exp.location && <p className="text-gray-500 text-xs sm:text-sm">{exp.location}</p>}
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
