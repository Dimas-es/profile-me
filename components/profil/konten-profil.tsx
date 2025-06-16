/**
 * @fileoverview Profile content component for displaying user profile information
 * @author Development Team
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
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiPostgresql, SiSupabase, SiGit, SiGithub, SiVercel } from "react-icons/si"
import type { IconType } from "react-icons"
import React from "react"
import type { FC } from "react"

const skillIcons: Record<string, { icon: IconType; color?: string } | undefined> = {
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss3, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub },
  Vercel: { icon: SiVercel, color: "#000000" },
}

/**
 * Component that displays user profile content
 *
 * @component
 * @returns {JSX.Element} Profile content component
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

  // Ambil groupedSkills dari profile.json
  const groupedSkills = (typeof window === 'undefined' ? require('@/app/data/profile.json').groupedSkills : undefined) || {};

  return (
    <div className="space-y-8">
      {/* About Me */}
      <Card className="bg-main-secondary border border-main-border">
        <CardHeader className="border-b border-main-border">
          <CardTitle className="text-main-text">{sections.aboutMe}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-main-text-2 mb-4" style={{ whiteSpace: 'pre-line' }}>{aboutText}</p>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="bg-main-secondary border border-main-border">
        <CardHeader className="border-b border-main-border">
          <CardTitle className="text-main-text">{sections.skills}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(groupedSkills).map(([group, skills]) => (
              <div key={group}>
                <div className="font-semibold text-xs text-main-text-third mb-2">{group}</div>
                <div className="flex flex-wrap gap-2">
                  {(skills as string[]).filter(skill => skillIcons[skill]).map((skill) => {
                    const skillData = skillIcons[skill];
                    if (!skillData) return null;
                    const { icon: Icon, color } = skillData;
                    return (
                      <Badge key={skill} variant="outline" className="text-sm text-main-text-2 border-main-border flex items-center gap-1">
                        {Icon && React.createElement(Icon, color ? { className: "w-4 h-4", color } : { className: "w-4 h-4" })}
                        <span>{skill}</span>
                      </Badge>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="bg-main-secondary border border-main-border">
        <CardHeader className="border-b border-main-border">
          <CardTitle className="text-main-text">{sections.experience}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-main-primary rounded-none flex items-center justify-center text-main-text font-bold text-sm sm:text-base">
                {exp.company.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm sm:text-base text-main-text">{exp.title}</h3>
                <p className="text-main-text-2 text-xs sm:text-sm">{exp.company}</p>
                <p className="text-main-text-third text-xs sm:text-sm">{exp.period}</p>
                {exp.location && <p className="text-main-text-third text-xs sm:text-sm">{exp.location}</p>}
                <p className="text-main-text-2 text-xs sm:text-sm mt-1 sm:mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="bg-main-secondary border border-main-border">
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={project.title}
                fill
                className="object-cover rounded-t-none"
              />
            </div>
            <CardContent className="p-3 sm:p-4">
              <h3 className="font-medium text-xs sm:text-sm text-main-text">{project.title}</h3>
              <p className="text-main-text-third text-xs mt-1">{project.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="link" className="text-main-text-third">
          View all projects
        </Button>
      </div>
    </div>
  )
}
