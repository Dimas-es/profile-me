/**
 * @fileoverview Professional header component with refined typography and design
 * @author Tim Pengembang
 */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { HeaderUtamaProps } from "@/types/komponen"
import { getNavigationTabs } from "@/utils/data-provider"

/**
 * Professional header component with elegant typography and refined styling
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
      {/* Professional Hero Background */}
      <div className="relative h-32 sm:h-48 lg:h-56 bg-gradient-to-br from-action-primary via-text-accent to-action-primary overflow-hidden">
        {/* Subtle Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-bg-main/5 to-bg-main/10" />

        {/* Professional Decorative Elements */}
        <div className="absolute top-6 right-6 w-6 h-6 bg-text-primary/8 rounded-full" />
        <div className="absolute top-12 right-12 w-4 h-4 bg-text-primary/12 rounded-full" />
        <div className="absolute bottom-8 left-8 w-8 h-8 bg-text-primary/8 rounded-full" />
        <div className="absolute bottom-12 right-20 w-3 h-3 bg-text-primary/10 rounded-full" />
      </div>

      {/* Professional Profile Section */}
      <div className="relative px-4 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-10 pt-0">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 lg:gap-8">
          {/* Professional Avatar */}
          <div className="md:absolute" style={{ top: "-3rem", left: "2rem" }}>
            <div className="relative group">
              <Avatar className="w-20 h-20 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-4 border-bg-component rounded-full shadow-professional-lg bg-bg-component group-hover:shadow-professional-xl transition-shadow duration-200">
                <AvatarImage src="/placeholder.svg?height=144&width=144" alt="Dimas Adijaya - Professional Profile" />
                <AvatarFallback className="bg-action-primary text-text-primary text-xl sm:text-2xl lg:text-3xl font-bold font-playfair">
                  DA
                </AvatarFallback>
              </Avatar>
              {/* Professional Status Indicator */}
              <div
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 bg-status-success rounded-full border-2 sm:border-4 border-bg-component"
                aria-label="Online status"
              />
            </div>
          </div>

          {/* Professional Profile Information */}
          <div className="flex-1 text-center md:text-left md:pl-36 lg:pl-40 pt-0 sm:pt-4 lg:pt-6 animate-slide-up">
            <h1 className="heading-1 mb-2 sm:mb-3">Dimas Adijaya</h1>
            <p className="text-base sm:text-lg lg:text-xl text-text-primary font-medium font-inter mb-2">
              Creative Designer & Visual Storyteller
            </p>
            <p className="body-text mb-4 sm:mb-6">San Francisco Bay Area • Available for Projects</p>

            {/* Professional Skill Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4 sm:mb-6">
              <span className="badge-primary">UI/UX Designer</span>
              <span className="badge-accent">Photographer</span>
              <span className="badge-secondary">Developer</span>
            </div>
          </div>

          {/* Professional Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-6 lg:pt-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Button className="btn-primary btn-md">Let's Connect</Button>
            <Button className="btn-outline btn-md">View Portfolio</Button>
          </div>
        </div>
      </div>

      {/* Professional Navigation */}
      <nav
        className="border-t border-border-primary bg-bg-component/50 backdrop-blur-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex overflow-x-auto px-4 sm:px-8 lg:px-12">
          {tabs.map((tab, index) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "nav-item whitespace-nowrap border-b-2 transition-all duration-200 font-inter",
                activeTab === tab.id
                  ? "border-text-accent text-text-accent nav-item-active"
                  : "border-transparent text-text-secondary hover:text-text-primary hover:border-border-secondary",
              )}
              aria-current={activeTab === tab.id ? "page" : undefined}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
