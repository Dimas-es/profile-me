/**
 * @fileoverview Komponen sidebar untuk menampilkan informasi kontak
 * @author Tim Pengembang
 */

import { Mail, Instagram, Twitter, MessageSquare, DribbbleIcon as Behance } from "lucide-react"
import { getSidebarContact } from "@/app/utils/data-utils"

/**
 * Komponen sidebar yang menampilkan informasi kontak dan profil sosial media
 *
 * @component
 * @returns {JSX.Element} Komponen sidebar kontak
 *
 * @example
 * ```tsx
 * <SidebarKontak />
 * ```
 */
export function SidebarKontak() {
  const contact = getSidebarContact()

  return (
    <div className="bg-main-secondary border border-main-border rounded-none shadow-sm p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-main-text">{contact.title}</h2>
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-main-text-2">
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-main-text-third" />
          <span>{contact.email}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-main-text-2">
          <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-main-text-third" />
          <span>{contact.instagram}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-main-text-2">
          <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-main-text-third" />
          <span>{contact.twitter}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-main-text-2">
          <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-main-text-third" />
          <span>{contact.messenger}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-main-text-2">
          <Behance className="w-3 h-3 sm:w-4 sm:h-4 text-main-text-third" />
          <span>{contact.behance}</span>
        </div>
      </div>
    </div>
  )
}
