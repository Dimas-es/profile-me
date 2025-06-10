/**
 * @fileoverview Enhanced header component with Supabase-inspired design
 * @author Tim Pengembang
 */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { HeaderUtamaProps } from "@/types/komponen"
import { getNavigationTabs } from "@/utils/data-provider"

/**
 * Enhanced header component with modern Supabase-inspired styling
 *
 * @component
 * @param {HeaderUtamaProps} props - Component properties
 * @param {string} props.activeTab - Currently active tab
 * @returns {JSX.Element} Enhanced header component
 */
export function HeaderUtama({ activeTab }: HeaderUtamaProps) {
  const tabs = getNavigationTabs()

  return (
    <div className="card-primary rounded-xl overflow-hidden hover-lift animate-fade-in-scale">
      {/* Enhanced Background with Supabase-inspired gradients */}
      <div className="relative h-24 sm:h-44 bg-gradient-to-br from-supabase-green via-accent-purple to-supabase-green-light animate-gradient-x overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-text-primary/20 rounded-full animate-float" />
        <div
          className="absolute top-8 left-8 w-6 h-6 bg-accent-purple/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-6 right-12 w-4 h-4 bg-text-primary/25 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-bg-main/10 to-bg-main/20" />
      </div>

      {/* Enhanced Profile Section */}
      <div className="relative px-4 sm:px-24 pb-4 sm:pb-8 pt-0 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
        {/* Avatar with enhanced glow */}
        <div className="sm:absolute mx-auto sm:mx-0" style={{ top: "-40px", left: "50px" }}>
          <div className="relative">
            <Avatar className="w-24 h-24 sm:w-40 sm:h-40 border-4 border-supabase-green-light rounded-full shadow-glow-green bg-bg-component animate-pulse-glow hover-lift">
              <AvatarImage src="/placeholder.svg?height=160&width=160" alt="Dimas Adijaya" />
              <AvatarFallback className="bg-gradient-primary text-bg-main text-2xl font-bold">DA</AvatarFallback>
            </Avatar>
            {/* Enhanced status indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 status-online rounded-full border-4 border-bg-component animate-pulse" />
          </div>
        </div>

        {/* Enhanced profile info */}
        <div className="flex-1 text-center sm:text-left sm:pl-40 pt-0 sm:pt-8 animate-slide-in-up">
          <h1 className="text-2xl sm:text-3xl font-bold gradient-text-primary mb-2">Dimas Adijaya</h1>
          <p className="text-text-primary mt-1 sm:mt-2 text-base sm:text-lg font-medium">
            Creative Designer & Visual Storyteller
          </p>
          <p className="text-text-secondary text-sm sm:text-base mt-1">
            San Francisco Bay Area • Available for Projects
          </p>

          {/* Enhanced skill tags */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
            <span className="px-3 py-1 bg-gradient-primary text-bg-main text-xs font-medium rounded-full shadow-glow-green">
              UI/UX Designer
            </span>
            <span className="px-3 py-1 bg-gradient-secondary text-text-primary text-xs font-medium rounded-full shadow-glow-purple">
              Photographer
            </span>
            <span className="px-3 py-1 bg-accent-blue text-text-primary text-xs font-medium rounded-full shadow-glow-blue">
              Developer
            </span>
          </div>
        </div>

        {/* Enhanced action buttons */}
        <div className="flex gap-3 pt-2 sm:pt-8 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          <Button className="btn-primary">Let's Connect</Button>
          <Button className="btn-outline">View Portfolio</Button>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <div className="border-t border-supabase-green-light/20 overflow-x-auto bg-bg-component/50 backdrop-blur-sm">
        <nav className="flex px-2 sm:px-8 min-w-max">
          {tabs.map((tab, index) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap relative border-b-2",
                activeTab === tab.id
                  ? "border-supabase-green-light text-supabase-green-light"
                  : "border-transparent text-text-secondary hover:text-supabase-green-light hover:border-supabase-green-light/50",
                "animate-slide-in-up",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
