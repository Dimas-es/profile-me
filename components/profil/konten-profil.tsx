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
  getProfileCertifications,
} from "@/app/utils/data-utils"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiPostgresql, SiSupabase, SiGit, SiGithub, SiVercel } from "react-icons/si"
import { FaCode, FaHandshake, FaAward, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa"
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

const specialtyIcons: Record<string, { icon: IconType; color: string }> = {
  "Web Developer": { icon: FaCode, color: "#1572B6" },
  "Open to Collaborate": { icon: FaHandshake, color: "#1572B6" },
}

const certificationIcons: Record<string, { icon: IconType; color: string }> = {
  "Sololearn": { icon: FaAward, color: "#149EF2" },
}

interface Certification {
  title: string;
  issuer: string;
  period: string;
  logo?: string;
  url?: string;
}

const IconWrapper: FC<{ icon: IconType; className?: string; color?: string }> = ({ icon: Icon, ...props }) => {
  const IconComponent = Icon as unknown as FC<{ className?: string; color?: string }>;
  return <IconComponent {...props} />;
};

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
  const certifications = getProfileCertifications()

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
          <p className="text-main-text-2 mb-8" style={{ whiteSpace: 'pre-line' }}>
            {aboutText.split('\n\nMy Specialty:')[0]}
          </p>
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-xs text-main-text-third mb-2">My Specialty</div>
              <div className="flex flex-wrap gap-2">
                {aboutText.split('\n\nMy Specialty:')[1]?.split('\n').filter(Boolean).map((specialty) => {
                  const specialtyData = specialtyIcons[specialty];
                  if (!specialtyData) return null;
                  const { icon: Icon, color } = specialtyData;
                  return (
                    <Badge key={specialty} variant="outline" className="text-sm font-normal text-main-text-2 border-main-border flex items-center gap-1 hover:bg-main-primary cursor-pointer">
                      <IconWrapper icon={Icon} className="w-4 h-4" color={color} />
                      <span>{specialty}</span>
                    </Badge>
                  );
                })}
              </div>
            </div>
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
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-main-primary rounded-none flex items-center justify-center text-main-text font-bold text-sm sm:text-base overflow-hidden">
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  exp.company.charAt(0)
                )}
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

      {/* Certifications */}
      <Card className="bg-main-secondary border border-main-border">
        <CardHeader className="border-b border-main-border">
          <CardTitle className="text-main-text">Certifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {certifications.map((cert: Certification, index: number) => {
            const certData = certificationIcons[cert.issuer];
            return (
              <div key={index} className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-main-primary rounded-none flex items-center justify-center text-main-text font-bold text-sm sm:text-base overflow-hidden">
                  {cert.logo ? (
                    <Image
                      src={cert.logo}
                      alt={cert.issuer}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  ) : certData ? (
                    <IconWrapper icon={certData.icon} className="w-6 h-6" color={certData.color} />
                  ) : (
                    cert.issuer.charAt(0)
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {cert.url ? (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1"
                      >
                        <h3 className="font-semibold text-sm sm:text-base text-main-text group-hover:text-main-text-third transition-colors">
                          {cert.title}
                        </h3>
                        <IconWrapper icon={FaExternalLinkAlt} className="w-3 h-3 text-main-text-third group-hover:text-main-text transition-colors" />
                      </a>
                    ) : (
                      <h3 className="font-semibold text-sm sm:text-base text-main-text">
                        {cert.title}
                      </h3>
                    )}
                  </div>
                  <p className="text-main-text-2 text-xs sm:text-sm">{cert.issuer}</p>
                  <p className="text-main-text-third text-xs sm:text-sm">{cert.period}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="bg-main-secondary border border-main-border">
        <CardHeader className="border-b border-main-border">
          <CardTitle className="text-main-text">{sections.skills}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(groupedSkills).map(([group, skills]) => (
              <div key={group}>
                <div className="font-semibold text-xs text-main-text-third mb-2">{group}</div>
                <div className="flex flex-wrap gap-2">
                  {(skills as string[]).filter(skill => skillIcons[skill]).map((skill) => {
                    const skillData = skillIcons[skill];
                    if (!skillData) return null;
                    const { icon: Icon, color } = skillData;
                    return (
                      <Badge key={skill} variant="outline" className="text-sm font-normal text-main-text-2 border-main-border flex items-center gap-1 hover:bg-main-primary cursor-pointer">
                        <IconWrapper icon={Icon} className="w-4 h-4" color={color} />
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

      {/* Projects */}
      <Card className="bg-main-secondary border border-main-border">
        <CardHeader className="border-b border-main-border">
          <CardTitle className="text-main-text">Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-main-secondary border border-main-border"
              >
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-3 sm:p-4 md:p-5">
                  <h3 className="font-semibold text-base sm:text-lg transition-colors text-main-text">
                    {project.title}
                  </h3>
                  <p className="text-main-text-third text-xs sm:text-sm font-medium mt-1">{project.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button variant="link" className="text-main-text-third group">
              <span className="flex items-center gap-2">
                View all projects
                <IconWrapper icon={FaArrowRight} className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
