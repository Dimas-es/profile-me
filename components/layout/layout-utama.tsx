"use client"
import { HeaderUtama } from "@/components/header/header-utama"
import { Input } from "@/components/ui/input"
import { SidebarKontak } from "@/components/sidebar/sidebar-kontak"
import { SidebarKeahlian } from "@/components/sidebar/sidebar-keahlian"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import type { MainLayoutProps } from "@/types/komponen"

/**
 * Komponen layout utama yang digunakan di seluruh aplikasi
 *
 * @component
 * @param {MainLayoutProps} props - Properti komponen
 * @param {React.ReactNode} props.children - Konten yang akan ditampilkan di dalam layout
 * @param {string} props.activeTab - Tab yang sedang aktif
 * @returns {JSX.Element} Komponen layout utama
 *
 * @example
 * ```tsx
 * <LayoutUtama activeTab="profile">
 *   <KontenHalaman />
 * </LayoutUtama>
 * ```
 */
export function LayoutUtama({ children, activeTab }: MainLayoutProps) {
  const pathname = usePathname()
  const showSkills = pathname.startsWith("/projects") || pathname.startsWith("/project/")
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on client-side before using window
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="min-h-screen bg-main-primary">
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
                  type="search"
                  placeholder="Cari"
                  className="bg-main-secondary border border-main-border pl-10 pr-4 py-1 h-8 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Tombol menu mobile */}
          <div className="block lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-5 w-5 text-main-text" />
                  <span className="sr-only">Buka menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] sm:w-[385px] bg-main-secondary border-main-border">
                <div className="flex items-center justify-between mb-6">
                  <SheetTitle className="text-main-text">Menu</SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-5 w-5 text-main-text" />
                      <span className="sr-only">Tutup menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <div className="py-4 space-y-6">
                  <div className="px-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main-text-third h-4 w-4" />
                      <Input
                        type="search"
                        placeholder="Cari"
                        className="bg-main-secondary border-main-border pl-10 pr-4 py-1 h-9 text-sm"
                      />
                    </div>
                  </div>
                  <div className="border-t border-main-border pt-6">
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

      {/* Spacer untuk header tetap */}
      <div className="h-12"></div>

      {/* Kontainer untuk header */}
      <div className="w-full px-4 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto">
          <HeaderUtama activeTab={activeTab} />
        </div>
      </div>

      {/* Jarak antara header dan konten */}
      <div className="h-4 sm:h-6 md:h-8"></div>

      {/* Kontainer untuk konten */}
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Konten Utama - Lebar penuh di mobile, 3/4 di desktop */}
            <div className="lg:col-span-3 order-2 lg:order-1">{children}</div>

            {/* Sidebar - Tersembunyi di mobile (ditampilkan di sheet), 1/4 di desktop */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6 md:space-y-8 hidden lg:block order-1 lg:order-2">
              <div className="sticky top-24">
                <SidebarKontak />
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
