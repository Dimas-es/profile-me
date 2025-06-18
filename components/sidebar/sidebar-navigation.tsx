/**
 * @fileoverview Komponen navigasi sidebar dengan informasi kontak
 * @author Tim Pengembang
 */

import Link from "next/link"
import { cn } from "@/utils/responsive-utils"
import { getNavigationTabs, getSidebarContact } from "@/app/utils/data-utils"
import { User, Briefcase, Activity, Users, Mail, Instagram, Twitter, Github, Linkedin, ExternalLink } from "lucide-react"

interface SidebarNavigationProps {
  activeTab: string
}

/**
 * Komponen navigasi sidebar yang menampilkan tab navigasi dan informasi kontak
 *
 * @component
 * @param {SidebarNavigationProps} props - Properti komponen
 * @param {string} props.activeTab - Tab yang sedang aktif
 * @returns {JSX.Element} Komponen navigasi sidebar
 *
 * @example
 * ```tsx
 * <SidebarNavigation activeTab="profile" />
 * ```
 */
export function SidebarNavigation({ activeTab }: SidebarNavigationProps) {
  const navigation = getNavigationTabs()
  const contact = getSidebarContact()

  const getNavIcon = (id: string) => {
    switch (id) {
      case "profile":
        return <User className="w-4 h-4" />
      case "projects":
        return <Briefcase className="w-4 h-4" />
      case "activity":
        return <Activity className="w-4 h-4" />
      case "connections":
        return <Users className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col border-main-border h-full">
      {/* Navigation Section */}
      <nav className="flex flex-col">
        <h2 className="px-4 text-base font-medium text-main-text mb-2">{navigation.title}</h2>
        {navigation.tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={cn(
              "px-4 py-3 text-sm font-medium border-l-3 transition-colors flex items-center gap-3",
              activeTab === tab.id
                ? "border-main-text-secondary text-main-text bg-main-secondary"
                : "border-transparent text-main-text-third hover:text-main-text-2 hover:bg-main-secondary/50"
            )}
          >
            {getNavIcon(tab.id)}
            {tab.label}
          </Link>
        ))}
      </nav>

      {/* Contact Section */}
      <div className="mt-4 border-t border-main-border pt-4">
        <h2 className="px-4 text-base font-medium text-main-text mb-2">{contact.title}</h2>
        <div className="flex flex-col">
          {/* Ordered keys for contact links */}
          {[
            { key: "github", href: (v: string) => `https://github.com/${v}` },
            { key: "instagram", href: (v: string) => `https://instagram.com/${v}` },
            { key: "linkedin", href: (v: string) => `https://linkedin.com/in/${v}` },
            { key: "email", href: (v: string) => `mailto:${v}` },
            { key: "twitter", href: (v: string) => `https://twitter.com/${v}` },
          ].map(({ key, href }) => {
            const value = (contact as any)[key]
            if (!value) return null
            // Icon mapping
            const iconMap: Record<string, JSX.Element> = {
              github: <Github className="w-4 h-4" />,
              instagram: <Instagram className="w-4 h-4" />,
              linkedin: <Linkedin className="w-4 h-4" />,
              email: <Mail className="w-4 h-4" />,
              twitter: <Twitter className="w-4 h-4" />,
            }
            // For email, use label as email address, for others, use label as username/display
            const display = value.label
            const link = key === "email" ? href(display) : href(display)
            return (
              <a
                key={key}
                href={link}
                target={key === "email" ? undefined : "_blank"}
                rel={key === "email" ? undefined : "noopener noreferrer"}
                className="px-4 py-3 text-sm font-medium border-l-3 border-transparent text-main-text-third hover:text-main-text-2 hover:bg-main-secondary/50 transition-colors flex items-center justify-between gap-3"
              >
                <span className="flex items-center gap-3">
                  {iconMap[key]}
                  {display}
                </span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
} 