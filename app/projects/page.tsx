import { ProjectsGrid } from "@/components/projects-grid"
import { MainLayout } from "@/components/layout/main-layout"

export default function ProjectsPage() {
  return (
    <MainLayout activeTab="projects">
      <div className="bg-white rounded-none shadow-sm p-6">
        <ProjectsGrid />
      </div>
    </MainLayout>
  )
} 