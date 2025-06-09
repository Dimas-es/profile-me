/**
 * @fileoverview Komponen header utama dengan avatar dan navigasi
 * @author Tim Pengembang
 */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { HeaderUtamaProps } from "@/types/komponen"
import { getNavigationTabs } from "@/utils/data-provider"

/**
 * Komponen header utama yang menampilkan profil dan navigasi
 *
 * @component
 * @param {HeaderUtamaProps} props - Properti komponen
 * @param {string} props.activeTab - Tab yang sedang aktif
 * @returns {JSX.Element} Komponen header utama
 *
 * @example
 * ```tsx
 * <HeaderUtama activeTab="profile" />
 * ```
 */
export function HeaderUtama({ activeTab }: HeaderUtamaProps) {
  const tabs = getNavigationTabs()

  return (
    <div className="bg-white rounded-none shadow-sm overflow-hidden">
      {/* Bagian Gambar Latar Belakang */}
      <div className="relative h-24 sm:h-44">
        <div
          className="absolute left-0 top-0 w-full h-full bg-gray-300"
          style={{ backgroundImage: "url(/bg-placeholder.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        />
      </div>

      {/* Bagian Header Profil */}
      <div className="relative px-4 sm:px-24 pb-4 sm:pb-8 pt-0 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
        {/* Avatar Overlap - Tengah di mobile, rata kiri di desktop */}
        <div className="sm:absolute mx-auto sm:mx-0" style={{ top: "-40px", left: "50px" }}>
          <Avatar className="w-24 h-24 sm:w-40 sm:h-40 border-4 border-white rounded-full shadow-lg bg-white">
            <AvatarImage src="/placeholder.svg?height=160&width=160" alt="Sophia Liu" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
        </div>

        {/* Info profil - Tengah di mobile */}
        <div className="flex-1 text-center sm:text-left sm:pl-40 pt-0 sm:pt-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dimas Adijaya</h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-base sm:text-lg">
            Designer & Photography in San Francisco Bay Area
          </p>
          <p className="text-gray-500 text-sm sm:text-base mt-1">Self-Employed • Cal Poly San Luis Obispo</p>
        </div>

        {/* Tombol aksi */}
        <div className="flex gap-3 pt-2 sm:pt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-none px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base">
            Pesan
          </Button>
          <Button variant="outline" className="rounded-none px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base">
            Lainnya...
          </Button>
        </div>
      </div>

      {/* Bagian Tab Navigasi - Dapat di-scroll di mobile */}
      <div className="border-t overflow-x-auto">
        <nav className="flex px-2 sm:px-8 min-w-max">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium border-b-3 transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700",
              )}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
