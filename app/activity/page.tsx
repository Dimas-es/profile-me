import { MainLayout } from "@/components/layout/main-layout"

export default function ActivityPage() {
  return (
    <MainLayout activeTab="activity">
      <div className="bg-white rounded-none shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-4">Activity</h1>
        <p className="text-gray-600">Your recent activities will appear here.</p>
      </div>
    </MainLayout>
  )
} 