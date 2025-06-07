import { ProfileHeader } from "@/components/profile-header"
import { NavigationTabs } from "@/components/navigation-tabs"
import { ProjectsGrid } from "@/components/projects-grid"
import { ContactSidebar } from "@/components/contact-sidebar"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm">
              <ProfileHeader />
              <NavigationTabs activeTab="projects" />
              <div className="p-6">
                <ProjectsGrid />
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
