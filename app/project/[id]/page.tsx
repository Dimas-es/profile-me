/**
 * @fileoverview Halaman detail proyek dengan parameter ID
 * @author Tim Pengembang
 */

import { DetailProyek } from "@/components/proyek/detail-proyek"
import { LayoutUtama } from "@/components/layout/layout-utama"
import { KontainerHalaman } from "@/components/kontainer-halaman"

/**
 * Menghasilkan parameter statis untuk semua ID proyek
 *
 * @function
 * @returns {Array<{id: string}>} Array ID proyek yang mungkin
 */
export async function generateStaticParams() {
  // Mengembalikan array ID proyek yang mungkin
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }]
}

/**
 * Halaman detail proyek yang menampilkan informasi lengkap tentang proyek tertentu
 *
 * @component
 * @param {Object} props - Properti komponen
 * @param {Object} props.params - Parameter dari URL
 * @param {string} props.params.id - ID proyek dari URL
 * @returns {JSX.Element} Halaman detail proyek
 */
export default function ProjectDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <LayoutUtama activeTab="projects">
      <KontainerHalaman>
        <DetailProyek projectId={params.id} />
      </KontainerHalaman>
    </LayoutUtama>
  )
}
