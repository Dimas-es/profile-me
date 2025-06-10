/**
 * @fileoverview Professional profile content with refined typography and design
 * @author Tim Pengembang
 */

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Award, Users, Code, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getSkills, getProfileProjects } from "@/utils/data-provider"

/**
 * Professional profile content with elegant typography and responsive design
 *
 * @component
 * @returns {JSX.Element} Professional profile content
 */
export function KontenProfil() {
  const skills = getSkills()
  const projects = getProfileProjects()

  const profileStats = [
    { icon: Award, label: "Years Experience", value: "5+", color: "text-text-accent" },
    { icon: Briefcase, label: "Projects Completed", value: "50+", color: "text-status-info" },
    { icon: Users, label: "Happy Clients", value: "20+", color: "text-status-success" },
    { icon: Code, label: "Technologies", value: "15+", color: "text-status-warning" },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "dimas@example.com", href: "mailto:dimas@example.com" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
    { icon: Calendar, label: "Available", value: "Open to opportunities", href: "#" },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-text-primary hover:border-text-primary",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-status-info hover:border-status-info",
    },
    {
      icon: ExternalLink,
      href: "https://portfolio.com",
      label: "Portfolio",
      color: "hover:text-text-accent hover:border-text-accent",
    },
  ]

  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in">
      {/* Professional Profile Header */}
      <div className="card-elevated">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-10">
          {/* Professional Avatar */}
          <div className="relative group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-action-primary rounded-2xl flex items-center justify-center shadow-professional-lg group-hover:shadow-professional-xl transition-all duration-200">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary font-playfair">DA</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-text-accent rounded-full border-4 border-bg-component flex items-center justify-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-bg-component rounded-full" />
            </div>
          </div>

          {/* Professional Information */}
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
            <div>
              <h1 className="heading-1 mb-2 sm:mb-3">Dimas Adijaya</h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-text-primary font-medium font-inter mb-2 sm:mb-3">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="body-text-large max-w-2xl">
                Passionate about creating scalable applications and beautiful user experiences. Specialized in modern
                web technologies with a focus on performance and accessibility.
              </p>
            </div>

            {/* Professional Contact Information */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 body-text">
                  <item.icon className="w-4 h-4 text-text-accent" aria-hidden="true" />
                  <span>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Professional Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-bg-secondary border border-border-primary rounded-lg flex items-center justify-center text-text-secondary ${social.color} transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-text-accent focus:ring-offset-2 focus:ring-offset-bg-main`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Professional Action Buttons */}
          <div className="flex flex-col gap-3">
            <Button className="btn-primary btn-md">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button className="btn-outline btn-md">
              <ExternalLink className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Professional Statistics Grid */}
      <div className="grid-responsive">
        {profileStats.map((stat, index) => (
          <div
            key={index}
            className="card-primary text-center hover-lift animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-3`} aria-hidden="true" />
            <div className={`text-xl sm:text-2xl lg:text-3xl font-bold ${stat.color} mb-1 font-playfair`}>
              {stat.value}
            </div>
            <div className="body-text-small font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Professional About Section */}
      <div className="card-primary hover-lift">
        <CardHeader>
          <CardTitle className="heading-3 flex items-center gap-3">
            <div className="w-1 h-6 bg-text-accent rounded-full" />
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          <p className="body-text-large">
            Creative and detail-oriented Full Stack Developer with 5+ years of experience building scalable web
            applications. Passionate about clean code, user experience, and staying current with emerging technologies.
          </p>
          <p className="body-text-large">
            I specialize in React, Next.js, Node.js, and modern database technologies. When I'm not coding, I enjoy
            contributing to open source projects and mentoring junior developers.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button className="btn-secondary btn-md">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Resume
            </Button>
            <Button className="btn-outline btn-md">
              <Github className="w-4 h-4 mr-2" />
              GitHub Profile
            </Button>
          </div>
        </CardContent>
      </div>

      {/* Professional Projects Section */}
      <div className="card-primary hover-lift">
        <CardHeader>
          <CardTitle className="heading-3 flex items-center gap-3">
            <div className="w-1 h-6 bg-status-info rounded-full" />
            Featured Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid-responsive">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="aspect-video relative bg-bg-secondary rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button className="btn-primary btn-sm w-full">View Project</Button>
                  </div>
                </div>
                <h3 className="font-semibold text-text-primary mb-1 group-hover:text-text-accent transition-colors font-inter">
                  {project.title}
                </h3>
                <p className="text-text-accent text-sm font-medium font-inter">{project.category}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button className="btn-outline btn-md">
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </div>
        </CardContent>
      </div>

      {/* Professional Skills Section */}
      <div className="card-primary hover-lift">
        <CardHeader>
          <CardTitle className="heading-3 flex items-center gap-3">
            <div className="w-1 h-6 bg-status-success rounded-full" />
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                className="badge-secondary hover:bg-bg-secondary transition-colors font-inter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Button className="btn-secondary btn-md">View Detailed Skills</Button>
          </div>
        </CardContent>
      </div>
    </div>
  )
}
