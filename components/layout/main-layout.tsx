"use client"

import { UnifiedHeader } from "@/components/unified-header"
import { Input } from "@/components/ui/input"
import { ContactSidebar } from "@/components/contact-sidebar"
import { SkillsSidebar } from "@/components/skills-sidebar"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MainLayoutProps {
  children: React.ReactNode
  activeTab: string
}

export function MainLayout({ children, activeTab }: MainLayoutProps) {
  const pathname = usePathname()
  const showSkills = pathname.startsWith("/projects") || pathname.startsWith("/project/")

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar - Full Width and Sticky */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white border-b py-2 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="LinkedIn"
              width={32}
              height={32}
              className="text-blue-600"
            />
          </Link>
          <div className="relative max-w-md w-full">
            <Input type="search" placeholder="Search" className="bg-gray-100 border-0 pl-4 pr-4 py-1 h-8 text-sm" />
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-12"></div>

      {/* Container untuk header yang lebih lebar */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <UnifiedHeader activeTab={activeTab} />
      </div>

      {/* Gap antara header dan content */}
      <div className="h-8"></div>

      {/* Container untuk content yang lebih sempit */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - Kiri */}
          <div className="lg:col-span-3">
            {children}
          </div>

          {/* Sidebars - Kanan */}
          <div className="lg:col-span-1 space-y-8">
            <ContactSidebar />
            {showSkills && <SkillsSidebar />}
          </div>
        </div>
      </div>
    </div>
  )
}
