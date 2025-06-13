/**
 * @fileoverview Komponen header utama dengan avatar dan navigasi
 * @author Tim Pengembang
 */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { HeaderUtamaProps } from "@/types/komponen"
import {
  getNavigationTabs,
  getProfileName,
  getProfileTitle,
  getProfileEducation,
  getNavigationButtons,
} from "@/app/utils/data-utils"

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
  const profileName = getProfileName()
  const profileTitle = getProfileTitle()
  const profileEducation = getProfileEducation()
  const buttons = getNavigationButtons()

  return (
    <div className="bg-main-secondary border border-main-border rounded-none shadow-sm overflow-hidden">
      {/* Bagian Gambar Latar Belakang */}
      <div className="relative h-24 sm:h-32 md:h-44">
        <div
          className="absolute left-0 top-0 w-full h-full bg-gray-300"
          style={{ backgroundImage: "url(/bg-placeholder.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        />
      </div>

      {/* Bagian Header Profil */}
      <div className="relative px-4 sm:px-6 md:px-24 pb-4 sm:pb-6 md:pb-8 pt-0 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-6">
        {/* Avatar Overlap - Tengah di mobile, rata kiri di desktop */}
        <div
          className="-mt-12 z-10 sm:mt-0 sm:z-auto sm:absolute mx-auto sm:mx-0"
          style={{ top: "-40px", left: "50px" }}
        >
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 border-white rounded-full shadow-lg bg-white">
            <AvatarImage src="/placeholder.svg?height=160&width=160" alt={profileName} />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
        </div>

        {/* Info profil - Tengah di mobile */}
        <div className="flex-1 text-center sm:text-left sm:pl-32 md:pl-40 pt-0 sm:pt-6 md:pt-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-main-text">{profileName}</h1>
          <p className="text-main-text-2 mt-1 sm:mt-2 text-sm sm:text-base md:text-lg">{profileTitle}</p>
          <p className="text-main-text-third text-xs sm:text-sm md:text-base mt-1">{profileEducation}</p>
        </div>

        {/* Tombol aksi */}
        <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-6 md:pt-8">
          <Button size="responsive" className="bg-main-button hover:bg-main-button-hover text-main-text rounded-none">
            {buttons.message}
          </Button>
          <Button
            variant="outline"
            size="responsive"
            className="bg-main-button-secondary border border-main-border text-main-text rounded-none"
          >
            {buttons.more}
          </Button>
        </div>
      </div>

      {/* Bagian Tab Navigasi - Dapat di-scroll di mobile */}
      <div className="border-t-2 border-main-border overflow-x-auto">
        <nav className="flex px-2 sm:px-4 md:px-8 min-w-max">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium border-b-3 transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? "border-main-text-secondary text-main-text"
                  : "border-transparent text-main-text-third hover:text-main-text-2",
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
