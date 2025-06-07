import { ProjectDetail } from "@/components/project-detail"
import { MainLayout } from "@/components/layout/main-layout"

export default function ProjectDetailPage() {
  return (
    <MainLayout activeTab="projects">
      <div className="bg-white rounded-none shadow-sm p-6">
        <ProjectDetail />
      </div>
    </MainLayout>
  )
}
