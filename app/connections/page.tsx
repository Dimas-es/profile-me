/**
 * @fileoverview Halaman koneksi pengguna dengan layout lengkap
 * @author Tim Pengembang
 */

import { LayoutUtama } from "@/components/layout/layout-utama"
import { KontainerHalaman } from "@/components/kontainer-halaman"
import { DaftarKoneksi } from "@/components/koneksi/daftar-koneksi"
import { SidebarKontak } from "@/components/koneksi/sidebar-kontak"

/**
 * Halaman yang menampilkan koneksi pengguna dengan layout grid
 *
 * @component
 * @returns {JSX.Element} Halaman koneksi lengkap
 */
export default function ConnectionsPage() {
  return (
    <LayoutUtama activeTab="connections">
      <KontainerHalaman>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main content - Daftar koneksi */}
          <div className="lg:col-span-3">
            <DaftarKoneksi />
          </div>

          {/* Sidebar - Kontak dan info tambahan */}
          <div className="lg:col-span-1">
            <SidebarKontak />
          </div>
        </div>
      </KontainerHalaman>
    </LayoutUtama>
  )
}
