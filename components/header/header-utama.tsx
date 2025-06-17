/**
 * @fileoverview Komponen header utama dengan avatar dan navigasi
 * @author Tim Pengembang
 */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { HeaderUtamaProps } from "@/types/index.ts"
import {
  getProfileName,
  getProfileTitle,
  getProfileEducation,
  getNavigationButtons,
} from "@/app/utils/data-utils"
import { Download, UserPlus, Code, Building } from "lucide-react"
import { GitHubContributionBG } from "@/components/github/github-contribution-bg"

/**
 * Komponen header utama yang menampilkan profil
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
  const profileName = getProfileName()
  const profileTitle = getProfileTitle()
  const profileEducation = getProfileEducation()
  const buttons = getNavigationButtons()

  return (
    <div className="bg-main-secondary border border-main-border rounded-md shadow-sm overflow-hidden">
      {/* Bagian Gambar Latar Belakang */}
      <div className="relative h-24 sm:h-32 md:h-44">
        <div className="absolute left-0 top-0 w-full h-full">
          <GitHubContributionBG />
        </div>
        {/* Overlay gradient untuk memastikan teks tetap terbaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
      </div>

      {/* Bagian Header Profil */}
      <div className="relative px-4 sm:px-6 md:px-24 pb-4 sm:pb-6 md:pb-8 pt-0 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-6">
        {/* Avatar Overlap - Tengah di mobile, rata kiri di desktop */}
        <div
          className="-mt-12 z-10 sm:mt-0 sm:z-auto sm:absolute mx-auto sm:mx-0"
          style={{ top: "-40px", left: "50px" }}
        >
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 border-white rounded-full shadow-lg bg-white">
            <AvatarImage src="/images/Profileq.png" alt={profileName} className="object-cover object-[center_30%]" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
        </div>

        {/* Info profil - Tengah di mobile */}
        <div className="flex-1 text-center sm:text-left sm:pl-32 md:pl-40 pt-0 sm:pt-6 md:pt-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-main-text">{profileName}</h1>
          <p className="text-main-text-2 mt-1 sm:mt-2 text-sm sm:text-base md:text-lg flex items-center justify-center sm:justify-start gap-1">
            {profileTitle}
          </p>
          <p className="text-main-text-third text-xs sm:text-sm md:text-base mt-1 flex items-center justify-center sm:justify-start gap-1">
            {profileEducation}
          </p>
        </div>

        {/* Tombol aksi */}
        <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-6 md:pt-8">
          <Button
            variant="outline"
            size="responsive"
            className="bg-main-button hover:bg-main-button-hover border border-main-border text-main-text rounded-md flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Connect
          </Button>
          <Button
            variant="outline"
            size="responsive"
            className="bg-main-button-secondary border border-main-border text-main-text rounded-md flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>
      </div>
    </div>
  )
}
