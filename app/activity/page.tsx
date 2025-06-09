/**
 * @fileoverview Halaman aktivitas pengguna
 * @author Tim Pengembang
 */

import { LayoutUtama } from "@/components/layout/layout-utama"
import { KontainerHalaman } from "@/components/kontainer-halaman"

/**
 * Halaman yang menampilkan aktivitas pengguna
 *
 * @component
 * @returns {JSX.Element} Halaman aktivitas
 */
export default function ActivityPage() {
  return (
    <LayoutUtama activeTab="activity">
      <KontainerHalaman>
        <h1 className="text-2xl font-bold mb-4">Aktivitas</h1>
        <p className="text-gray-600">Aktivitas terbaru Anda akan muncul di sini.</p>
      </KontainerHalaman>
    </LayoutUtama>
  )
}
