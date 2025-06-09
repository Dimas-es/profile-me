/**
 * @fileoverview Komponen sidebar untuk menampilkan informasi kontak
 * @author Tim Pengembang
 */

import { Mail, Instagram, Twitter, MessageSquare, DribbbleIcon as Behance } from "lucide-react"

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
  return (
    <div className="bg-white rounded-none shadow-sm p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">Kontak / Profil Lainnya</h2>
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          <span>liu.sophiaa@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
          <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          <span>@hastalasophia</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
          <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          <span>@hastalasophia</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
          <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          <span>@hastalasophia</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
          <Behance className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          <span>@studioscphy</span>
        </div>
      </div>
    </div>
  )
}
