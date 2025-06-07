import { ProfileHeader } from "@/components/profile-header"
import { NavigationTabs } from "@/components/navigation-tabs"
import { ProfileContent } from "@/components/profile-content"
import { ContactSidebar } from "@/components/contact-sidebar"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm">
              <ProfileHeader />
              <NavigationTabs activeTab="profile" />
              <div className="p-6">
                <ProfileContent />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
