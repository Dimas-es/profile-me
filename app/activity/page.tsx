/**
 * @fileoverview Halaman aktivitas pengguna
 * @author Tim Pengembang
 */

import { LayoutUtama } from "@/components/layout/layout-utama"
import { KontainerHalaman } from "@/components/kontainer-halaman"
import { getActivityPageData } from "@/app/utils/data-utils"

/**
 * Halaman yang menampilkan aktivitas pengguna
 *
 * @component
 * @returns {JSX.Element} Halaman aktivitas
 */
export default function ActivityPage() {
  const activityData = getActivityPageData()

  return (
    <LayoutUtama activeTab="activity">
      <KontainerHalaman>
        <h1 className="text-2xl font-bold mb-4">{activityData.title}</h1>
        <p className="text-gray-600">{activityData.description}</p>
      </KontainerHalaman>
    </LayoutUtama>
  )
}
