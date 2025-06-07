import { ProfileContent } from "@/components/profile-content"
import { MainLayout } from "@/components/layout/main-layout"

export default function ProfilePage() {
  return (
    <MainLayout activeTab="profile">
      <div className="bg-white rounded-none shadow-sm p-6">
        <ProfileContent />
      </div>
    </MainLayout>
  )
}
