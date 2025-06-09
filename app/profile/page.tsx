/**
 * @fileoverview Halaman profil pengguna
 * @author Tim Pengembang
 */

import { KontenProfil } from "@/components/profil/konten-profil"
import { LayoutUtama } from "@/components/layout/layout-utama"
import { KontainerHalaman } from "@/components/kontainer-halaman"

/**
 * Halaman profil pengguna yang menampilkan informasi profil
 *
 * @component
 * @returns {JSX.Element} Halaman profil
 */
export default function ProfilePage() {
  return (
    <LayoutUtama activeTab="profile">
      <KontainerHalaman>
        <KontenProfil />
      </KontainerHalaman>
    </LayoutUtama>
  )
}
