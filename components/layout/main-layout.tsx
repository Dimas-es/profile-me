"use client"

import type React from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { Input } from "@/components/ui/input"
import { ContactSidebar } from "@/components/contact-sidebar"
import { SkillsSidebar } from "@/components/skills-sidebar"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MainLayoutProps {
  children: React.ReactNode
  activeTab: string
}

export function MainLayout({ children, activeTab }: MainLayoutProps) {
  const pathname = usePathname()
  const showSkills = pathname.startsWith("/projects") || pathname.startsWith("/project/")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar - Full Width and Sticky */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white border-b py-2 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <Link href="/" className="shrink-0">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="LinkedIn"
                width={32}
                height={32}
                className="text-blue-600"
              />
            </Link>
            <div className="relative max-w-md w-full hidden sm:block">
              <Input type="search" placeholder="Search" className="bg-gray-100 border-0 pl-4 pr-4 py-1 h-8 text-sm" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="block sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[385px]">
                <div className="py-6 space-y-6">
                  <div className="px-4">
                    <Input
                      type="search"
                      placeholder="Search"
                      className="bg-gray-100 border-0 pl-4 pr-4 py-1 h-8 text-sm"
                    />
                  </div>
                  <div className="border-t pt-6">
                    <ContactSidebar />
                    {showSkills && (
                      <div className="mt-6">
                        <SkillsSidebar />
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
      <div className="h-12"></div>

      {/* Container for header */}
      <div className="w-full px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <UnifiedHeader activeTab={activeTab} />
        </div>
      </div>

      {/* Gap between header and content */}
      <div className="h-4 sm:h-8"></div>

      {/* Container for content */}
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
            {/* Main Content - Full width on mobile, 3/4 on desktop */}
            <div className="lg:col-span-3 order-2 lg:order-1">{children}</div>

            {/* Sidebars - Hidden on mobile (shown in sheet), 1/4 on desktop */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-8 hidden lg:block order-1 lg:order-2">
              <ContactSidebar />
              {showSkills && <SkillsSidebar />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
