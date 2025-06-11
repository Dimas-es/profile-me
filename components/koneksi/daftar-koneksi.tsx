/**
 * @fileoverview Komponen daftar koneksi dengan grid layout
 * @author Tim Pengembang
 */

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import type { KoneksiMutual } from "@/types/komponen"
import {
  getConnectionsTitle,
  getMutualConnections,
  getNavigationButtons,
  getPlaceholders,
} from "@/app/utils/data-utils"

/**
 * Komponen untuk menampilkan daftar koneksi mutual
 *
 * @component
 * @returns {JSX.Element} Komponen daftar koneksi
 *
 * @example
 * ```tsx
 * <DaftarKoneksi />
 * ```
 */
export function DaftarKoneksi() {
  const title = getConnectionsTitle()
  const koneksiMutual = getMutualConnections()
  const buttons = getNavigationButtons()
  const placeholders = getPlaceholders()

  return (
    <div className="bg-white rounded-lg shadow-sm border w-full">
      {/* Header dengan jumlah koneksi dan search */}
      <div className="p-4 sm:p-6 border-b">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h2>

          {/* Search bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder={placeholders.search}
              className="pl-10 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Grid koneksi */}
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {koneksiMutual.map((koneksi) => (
            <KartuKoneksi key={koneksi.id} koneksi={koneksi} />
          ))}
        </div>

        {/* Tombol Show more */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            {buttons.showMore}
          </Button>
        </div>
      </div>
    </div>
  )
}

/**
 * Komponen kartu individual untuk setiap koneksi
 *
 * @component
 * @param {Object} props - Properti komponen
 * @param {KoneksiMutual} props.koneksi - Data koneksi
 * @returns {JSX.Element} Komponen kartu koneksi
 */
function KartuKoneksi({ koneksi }: { koneksi: KoneksiMutual }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
      {/* Avatar */}
      <Avatar className="w-12 h-12 flex-shrink-0">
        <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={koneksi.name} />
        <AvatarFallback className="bg-gray-200 text-gray-600 text-sm font-medium">{koneksi.avatar}</AvatarFallback>
      </Avatar>

      {/* Info koneksi */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 text-sm leading-tight mb-1 truncate">{koneksi.name}</h3>
        <p className="text-xs text-gray-600 mb-1 truncate">{koneksi.headline}</p>
        <p className="text-xs text-gray-500 truncate">{koneksi.company}</p>
      </div>
    </div>
  )
}
