/**
 * @fileoverview Halaman koneksi pengguna
 * @author Tim Pengembang
 */

import { LayoutUtama } from "@/components/layout/layout-utama"
import { KontainerHalaman } from "@/components/kontainer-halaman"

/**
 * Halaman yang menampilkan koneksi pengguna
 *
 * @component
 * @returns {JSX.Element} Halaman koneksi
 */
export default function ConnectionsPage() {
  return (
    <LayoutUtama activeTab="connections">
      <KontainerHalaman>
        <h1 className="text-2xl font-bold mb-4">Koneksi</h1>
        <p className="text-gray-600">Koneksi Anda akan muncul di sini.</p>
      </KontainerHalaman>
    </LayoutUtama>
  )
}
