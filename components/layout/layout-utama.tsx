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
 * Professional layout component with refined design and responsive optimization
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
    <div className="min-h-screen bg-background">
      {/* Professional Navigation Bar */}
      <header className="nav-primary">
        <div className="container-primary">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo and Search */}
            <div className="flex items-center gap-4 flex-1">
              <Link href="/" className="shrink-0 focus-ring rounded-lg">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-action-primary rounded-lg flex items-center justify-center">
                  <span className="text-text-primary font-bold text-sm md:text-base">P</span>
                </div>
              </Link>

              {/* Desktop Search */}
              <div className="relative max-w-md w-full hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-4 h-4" />
                <Input type="search" placeholder="Search..." className="input-search" aria-label="Search content" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="btn-ghost h-10 w-10" aria-label="Open navigation menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85%] sm:w-[400px] bg-surface-primary border-border-primary">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="py-6 space-y-6">
                    {/* Mobile Search */}
                    <div className="px-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-4 h-4" />
                        <Input
                          type="search"
                          placeholder="Search..."
                          className="input-search"
                          aria-label="Search content"
                        />
                      </div>
                    </div>

                    {/* Mobile Sidebar Content */}
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
      <main className="pt-6 md:pt-8">
        {/* Header Section */}
        <section className="container-primary mb-6 md:mb-8">
          <HeaderUtama activeTab={activeTab} />
        </section>

        {/* Content Grid */}
        <section className="container-primary">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="space-y-6 md:space-y-8">{children}</div>
            </div>

            {/* Desktop Sidebar */}
            <aside className="lg:col-span-1 order-1 lg:order-2 hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="card-primary hover-lift">
                  <SidebarKontak />
                </div>
                {showSkills && (
                  <div className="card-secondary hover-lift">
                    <SidebarKeahlian />
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>

        {/* Bottom Spacing */}
        <div className="h-16 md:h-20" />
      </main>
    </div>
  )
}
