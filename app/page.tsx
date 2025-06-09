import { ProfileContent } from "@/components/profile-content"
import { MainLayout } from "@/components/layout/main-layout"
import { PageContainer } from "@/components/page-container"

export default function HomePage() {
  return (
    <MainLayout activeTab="profile">
      <PageContainer>
        <ProfileContent />
      </PageContainer>
    </MainLayout>
  )
}
