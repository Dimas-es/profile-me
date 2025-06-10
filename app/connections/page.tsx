/**
 * @fileoverview Halaman koneksi pengguna dengan layout lengkap
 * @author Tim Pengembang
 */

import { LayoutUtama } from "@/components/layout/layout-utama"
import { KontainerHalaman } from "@/components/kontainer-halaman"
import { DaftarKoneksi } from "@/components/koneksi/daftar-koneksi"

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
        <DaftarKoneksi />
      </KontainerHalaman>
    </LayoutUtama>
  )
}
