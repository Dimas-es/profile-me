/**
 * @fileoverview Halaman daftar proyek
 * @author Tim Pengembang
 */

import { GridProyek } from "@/components/proyek/grid-proyek"
import { LayoutUtama } from "@/components/layout/layout-utama"
import { KontainerHalaman } from "@/components/kontainer-halaman"

/**
 * Halaman yang menampilkan daftar proyek
 *
 * @component
 * @returns {JSX.Element} Halaman proyek
 */
export default function ProjectsPage() {
  return (
    <LayoutUtama activeTab="projects">
      <KontainerHalaman>
        <GridProyek />
      </KontainerHalaman>
    </LayoutUtama>
  )
}
