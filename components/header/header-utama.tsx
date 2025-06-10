/**
 * @fileoverview Professional header component with refined design
 * @author Tim Pengembang
 */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { HeaderUtamaProps } from "@/types/komponen"
import { getNavigationTabs } from "@/utils/data-provider"

/**
 * Professional header component with clean, refined styling
 *
 * @component
 * @param {HeaderUtamaProps} props - Component properties
 * @param {string} props.activeTab - Currently active tab
 * @returns {JSX.Element} Professional header component
 */
export function HeaderUtama({ activeTab }: HeaderUtamaProps) {
  const tabs = getNavigationTabs()

  return (
    <div className="card-elevated animate-fade-in">
      {/* Professional Background */}
      <div className="relative h-32 md:h-48 lg:h-56 bg-gradient-to-br from-action-primary via-text-accent to-action-primary overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/5 to-background/10" />

        {/* Professional Decorative Elements */}
        <div className="absolute top-6 right-6 w-6 h-6 bg-text-primary/10 rounded-full" />
        <div className="absolute top-12 right-12 w-4 h-4 bg-text-primary/15 rounded-full" />
        <div className="absolute bottom-8 left-8 w-8 h-8 bg-text-primary/10 rounded-full" />
      </div>

      {/* Professional Profile Section */}
      <div className="relative px-4 md:px-8 lg:px-12 pb-6 md:pb-8 pt-0">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 lg:gap-8">
          {/* Professional Avatar */}
          <div className="md:absolute" style={{ top: "-3rem", left: "2rem" }}>
            <div className="relative">
              <Avatar className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 border-4 border-surface-primary rounded-full shadow-professional-lg bg-surface-primary">
                <AvatarImage src="/placeholder.svg?height=144&width=144" alt="Dimas Adijaya" />
                <AvatarFallback className="bg-action-primary text-text-primary text-xl md:text-2xl lg:text-3xl font-bold">
                  DA
                </AvatarFallback>
              </Avatar>
              {/* Professional Status Indicator */}
              <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-4 h-4 md:w-6 md:h-6 bg-status-success rounded-full border-2 md:border-4 border-surface-primary" />
            </div>
          </div>

          {/* Professional Profile Info */}
          <div className="flex-1 text-center md:text-left md:pl-36 lg:pl-40 pt-0 md:pt-4 lg:pt-6 animate-slide-up">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">Dimas Adijaya</h1>
            <p className="text-base md:text-lg lg:text-xl text-text-primary font-medium mb-2">
              Creative Designer & Visual Storyteller
            </p>
            <p className="text-sm md:text-base text-text-secondary mb-4">
              San Francisco Bay Area • Available for Projects
            </p>

            {/* Professional Skill Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              <span className="badge-primary">UI/UX Designer</span>
              <span className="badge-accent">Photographer</span>
              <span className="badge-secondary">Developer</span>
            </div>
          </div>

          {/* Professional Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-6 lg:pt-8">
            <Button className="btn-primary">Let's Connect</Button>
            <Button className="btn-outline">View Portfolio</Button>
          </div>
        </div>
      </div>

      {/* Professional Navigation */}
      <nav className="border-t border-border-primary bg-surface-secondary/50">
        <div className="flex overflow-x-auto px-4 md:px-8 lg:px-12">
          {tabs.map((tab, index) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "nav-item whitespace-nowrap border-b-2 transition-all duration-200",
                activeTab === tab.id
                  ? "border-text-accent text-text-accent nav-item-active"
                  : "border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary",
              )}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
