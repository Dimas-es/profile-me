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
 * Enhanced layout component with Supabase-inspired design
 *
 * @component
 * @param {MainLayoutProps} props - Component properties
 * @param {React.ReactNode} props.children - Content to display within layout
 * @param {string} props.activeTab - Currently active tab
 * @returns {JSX.Element} Enhanced main layout component
 */
export function LayoutUtama({ children, activeTab }: MainLayoutProps) {
  const pathname = usePathname()
  const showSkills = pathname.startsWith("/projects") || pathname.startsWith("/project/")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg-main relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-supabase-green-light/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-40 right-20 w-48 h-48 bg-accent-purple/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-56 h-56 bg-accent-blue/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Enhanced Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 w-full glass-effect border-b border-border-primary py-3 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <Link href="/" className="shrink-0 hover-lift">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-green">
                <span className="text-bg-main font-bold text-sm">P</span>
              </div>
            </Link>
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-4 h-4" />
              <Input type="search" placeholder="Search..." className="input-primary pl-10 pr-4 py-2 h-10 text-sm" />
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className="block sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 glass-effect hover:bg-supabase-green-light/20 text-text-primary"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[385px] bg-bg-component border-border-primary">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="py-6 space-y-6">
                  <div className="px-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-4 h-4" />
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="input-primary pl-10 pr-4 py-2 h-10 text-sm"
                      />
                    </div>
                  </div>
                  <div className="border-t border-border-primary pt-6">
                    <SidebarKontak />
                    {showSkills && (
                      <div className="mt-6">
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

      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Header container */}
      <div className="w-full px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <HeaderUtama activeTab={activeTab} />
        </div>
      </div>

      {/* Spacing between header and content */}
      <div className="h-4 sm:h-8"></div>

      {/* Content container */}
      <div className="w-full px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 order-2 lg:order-1 space-y-6">{children}</div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6 hidden lg:block order-1 lg:order-2">
              <div className="card-primary hover-lift">
                <SidebarKontak />
              </div>
              {showSkills && (
                <div className="card-highlight hover-lift">
                  <SidebarKeahlian />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-16"></div>
    </div>
  )
}
