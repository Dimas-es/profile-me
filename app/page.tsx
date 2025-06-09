/**
 * @fileoverview Halaman utama aplikasi
 * @author Tim Pengembang
 */

import { KontenProfil } from "@/components/profil/konten-profil"
import { LayoutUtama } from "@/components/layout/layout-utama"
import { KontainerHalaman } from "@/components/kontainer-halaman"

/**
 * Halaman utama aplikasi yang menampilkan profil pengguna
 *
 * @component
 * @returns {JSX.Element} Halaman utama
 */
export default function HomePage() {
  return (
    <LayoutUtama activeTab="profile">
      <KontainerHalaman>
        <KontenProfil />
      </KontainerHalaman>
    </LayoutUtama>
  )
}
