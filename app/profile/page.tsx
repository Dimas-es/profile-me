import { ProfileContent } from "@/components/profile-content"
import { ContactSidebar } from "@/components/contact-sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { UnifiedHeader } from "@/components/unified-header"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      {/* Container untuk header yang lebih lebar */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <UnifiedHeader activeTab="profile" />
      </div>

      {/* Gap antara header dan content */}
      <div className="h-8"></div>

      {/* Container untuk content yang lebih sempit */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contact Sidebar - Kiri */}
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>

          {/* Main Content - Kanan */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ProfileContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
