import { MainLayout } from "@/components/layout/main-layout"
import { PageContainer } from "@/components/page-container"

export default function ActivityPage() {
  return (
    <MainLayout activeTab="activity">
      <PageContainer>
        <h1 className="text-2xl font-bold mb-4">Activity</h1>
        <p className="text-gray-600">Your recent activities will appear here.</p>
      </PageContainer>
    </MainLayout>
  )
} 