import { ProjectDetail } from "@/components/project-detail"
import { MainLayout } from "@/components/layout/main-layout"
import { PageContainer } from "@/components/page-container"

// Define the static paths for all project IDs
export async function generateStaticParams() {
  // Return array of possible project IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <MainLayout activeTab="projects">
      <PageContainer>
        <ProjectDetail projectId={params.id} />
      </PageContainer>
    </MainLayout>
  )
}
