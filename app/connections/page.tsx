import { MainLayout } from "@/components/layout/main-layout"
import { PageContainer } from "@/components/page-container"

export default function ConnectionsPage() {
  return (
    <MainLayout activeTab="connections">
      <PageContainer>
        <h1 className="text-2xl font-bold mb-4">Connections</h1>
        <p className="text-gray-600">Your connections will appear here.</p>
      </PageContainer>
    </MainLayout>
  )
} 