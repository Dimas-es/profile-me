import { ProjectsGrid } from "@/components/projects-grid"
import { MainLayout } from "@/components/layout/main-layout"
import { PageContainer } from "@/components/page-container"

export default function ProjectsPage() {
  return (
    <MainLayout activeTab="projects">
      <PageContainer>
        <ProjectsGrid />
      </PageContainer>
    </MainLayout>
  )
}
