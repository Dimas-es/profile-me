"use client"
import React from "react"
import { HeaderUtama } from "@/components/header/header-utama"
import { Input } from "@/components/ui/input"
import { SidebarKeahlian } from "@/components/sidebar/sidebar-keahlian"
import { SidebarNavigation } from "@/components/sidebar/sidebar-navigation"
import { MobileMenu } from "@/components/layout/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import type { MainLayoutProps } from "@/types"

/**
 * Komponen layout utama yang digunakan di seluruh aplikasi
 *
 * @component
 * @param {MainLayoutProps} props - Properti komponen
 * @param {React.ReactNode} props.children - Konten yang akan ditampilkan di dalam layout
 * @param {string} props.activeTab - Tab yang sedang aktif
 * @returns {JSX.Element} Komponen layout utama
 */
function LayoutUtamaBase({ children, activeTab }: MainLayoutProps) {
  const pathname = usePathname()
  const showSkills = pathname.startsWith("/projects") || pathname.startsWith("/project/")
  const isMobile = useMobile()

  return (
    <div className="min-h-screen bg-main-secondary">
      {/* Navigasi Atas - Lebar Penuh dan Sticky */}
      <div className="fixed top-0 left-0 right-0 w-full bg-main-primary border-b border-main-border py-2 sm:py-3 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4 flex-1">
            <Link href="/" className="shrink-0">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="LinkedIn"
                width={28}
                height={28}
                className="sm:w-8 sm:h-8"
              />
            </Link>
            <div className="relative max-w-md w-full hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main-text-third h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Cari"
                  className="bg-main-secondary border border-main-border pl-10 pr-4 py-1 h-8 text-sm focus:border-main-text-third focus:ring-1 focus:ring-main-text-third transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:inline-flex">
              <ThemeToggle />
            </div>
            {/* Mobile Menu Component */}
            <MobileMenu showSkills={showSkills} activeTab={activeTab} />
          </div>
        </div>
      </div>

      {/* Spacer untuk header tetap */}
      <div className="h-12"></div>

      {/* Kontainer untuk header */}
      <div className="w-full px-4 py-4 sm:py-6">
        <div className="max-w-[74rem] mx-auto">
          <HeaderUtama activeTab={activeTab} />
        </div>
      </div>

      {/* Jarak antara header dan konten */}
      <div className="h-4 sm:h-6 md:h-8"></div>

      {/* Kontainer untuk konten */}
      <div className="w-full px-4">
        <div className="max-w-[74rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Konten Utama - Lebar penuh di mobile, 3/4 di desktop */}
            <div className="lg:col-span-3 order-2 lg:order-1">{children}</div>

            {/* Sidebar - Tersembunyi di mobile (ditampilkan di sheet), 1/4 di desktop */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6 md:space-y-8 hidden lg:block order-1 lg:order-2">
              <div className="sticky top-24 space-y-4 sm:space-y-6 md:space-y-8">
                <SidebarNavigation activeTab={activeTab} />
                {showSkills && <SidebarKeahlian />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-16 sm:h-20 md:h-24"></div>
    </div>
  )
}

// Memoize the component to prevent unnecessary re-renders
export const LayoutUtama = React.memo(LayoutUtamaBase)
