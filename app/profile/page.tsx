import { ProfileContent } from "@/components/profile-content"
import { MainLayout } from "@/components/layout/main-layout"
import { PageContainer } from "@/components/page-container"

export default function ProfilePage() {
  return (
    <MainLayout activeTab="profile">
      <PageContainer>
        <ProfileContent />
      </PageContainer>
    </MainLayout>
  )
}
