"use client"
import { HeaderUtama } from "@/components/header/header-utama"
import { Input } from "@/components/ui/input"
import { SidebarKontak } from "@/components/sidebar/sidebar-kontak"
import { SidebarKeahlian } from "@/components/sidebar/sidebar-keahlian"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import type { MainLayoutProps } from "@/types/komponen"

/**
 * Professional layout component with refined typography and responsive design
 *
 * @component
 * @param {MainLayoutProps} props - Component properties
 * @param {React.ReactNode} props.children - Content to display within layout
 * @param {string} props.activeTab - Currently active tab
 * @returns {JSX.Element} Professional main layout component
 */
export function LayoutUtama({ children, activeTab }: MainLayoutProps) {
  const pathname = usePathname()
  const showSkills = pathname.startsWith("/projects") || pathname.startsWith("/project/")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg-main font-inter">
      {/* Professional Navigation Header */}
      <header className="nav-primary">
        <div className="container-primary">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            {/* Brand and Search Section */}
            <div className="flex items-center gap-4 sm:gap-6 flex-1">
              {/* Professional Logo */}
              <Link
                href="/"
                className="shrink-0 focus:outline-none focus:ring-2 focus:ring-text-accent focus:ring-offset-2 focus:ring-offset-bg-main rounded-lg"
                aria-label="Go to homepage"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-action-primary hover:bg-action-primary-hover rounded-lg flex items-center justify-center transition-colors duration-200 shadow-professional-md">
                  <span className="text-text-primary font-bold text-sm sm:text-base lg:text-lg font-playfair">P</span>
                </div>
              </Link>

              {/* Desktop Search */}
              <div className="relative max-w-md w-full hidden md:block">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-4 h-4"
                  aria-hidden="true"
                />
                <Input
                  type="search"
                  placeholder="Search professionals, projects..."
                  className="input-search font-inter"
                  aria-label="Search content"
                />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="btn-ghost h-10 w-10" aria-label="Open navigation menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85%] sm:w-[400px] bg-bg-component border-border-primary">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="py-6 space-y-6">
                    {/* Mobile Search */}
                    <div className="px-4">
                      <div className="relative">
                        <Search
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-4 h-4"
                          aria-hidden="true"
                        />
                        <Input
                          type="search"
                          placeholder="Search..."
                          className="input-search font-inter"
                          aria-label="Search content"
                        />
                      </div>
                    </div>

                    {/* Mobile Navigation Content */}
                    <div className="border-t border-border-primary pt-6 space-y-6">
                      <div className="card-secondary">
                        <SidebarKontak />
                      </div>
                      {showSkills && (
                        <div className="card-secondary">
                          <SidebarKeahlian />
                        </div>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-6 sm:pt-8 lg:pt-10">
        {/* Header Section */}
        <section className="container-primary mb-6 sm:mb-8 lg:mb-10">
          <HeaderUtama activeTab={activeTab} />
        </section>

        {/* Content Grid Layout */}
        <section className="container-primary">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {/* Primary Content Area */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">{children}</div>
            </div>

            {/* Professional Sidebar */}
            <aside className="lg:col-span-1 order-1 lg:order-2 hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="card-primary hover-lift animate-fade-in">
                  <SidebarKontak />
                </div>
                {showSkills && (
                  <div className="card-secondary hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <SidebarKeahlian />
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>

        {/* Bottom Spacing */}
        <div className="h-16 sm:h-20 lg:h-24" />
      </main>
    </div>
  )
}
