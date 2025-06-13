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
    <div className="bg-main-secondary rounded-lg shadow-sm border border-main-border w-full">
      {/* Header dengan jumlah koneksi dan search */}
      <div className="p-4 sm:p-6 border-b border-main-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg sm:text-xl font-semibold text-main-text">{title}</h2>

          {/* Search bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main-text-third h-4 w-4" />
            <Input
              type="text"
              placeholder={placeholders.search}
              className="pl-10 bg-main-secondary border-main-border focus:border-main-border focus:ring-main-border text-main-text"
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
          <Button variant="ghost" className="text-main-text-secondary hover:text-main-text hover:bg-main-button/10">
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
    <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-main-primary/10 transition-colors cursor-pointer">
      {/* Avatar */}
      <Avatar className="w-12 h-12 flex-shrink-0">
        <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={koneksi.name} />
        <AvatarFallback className="bg-main-primary text-main-text text-sm font-medium">{koneksi.avatar}</AvatarFallback>
      </Avatar>

      {/* Info koneksi */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-main-text text-sm leading-tight mb-1 truncate">{koneksi.name}</h3>
        <p className="text-xs text-main-text-2 mb-1 truncate">{koneksi.headline}</p>
        <p className="text-xs text-main-text-third truncate">{koneksi.company}</p>
      </div>
    </div>
  )
}
