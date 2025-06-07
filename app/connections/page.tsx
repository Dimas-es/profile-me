import { MainLayout } from "@/components/layout/main-layout"

export default function ConnectionsPage() {
  return (
    <MainLayout activeTab="connections">
      <div className="bg-white rounded-none shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-4">Connections</h1>
        <p className="text-gray-600">Your connections will appear here.</p>
      </div>
    </MainLayout>
  )
} 