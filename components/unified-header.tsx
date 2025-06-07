import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface UnifiedHeaderProps {
  activeTab: string
}

export function UnifiedHeader({ activeTab }: UnifiedHeaderProps) {
  const tabs = [
    { id: "profile", label: "Profile", href: "/" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "activity", label: "Activity", href: "/activity" },
    { id: "connections", label: "Connections", href: "/connections" },
  ]

  return (
    <div className="bg-white rounded-none shadow-sm overflow-hidden">
      {/* Background Image Section */}
      <div className="relative h-44">
        <div className="absolute left-0 top-0 w-full h-full bg-gray-300" style={{backgroundImage: 'url(/bg-placeholder.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
      </div>
      {/* Profile Header Section */}
      <div className="relative px-24 pb-8 pt-0 flex items-start gap-6">
        {/* Avatar Overlap */}
        <div className="absolute" style={{top: '-40px', left: '50px'}}>
          <Avatar className="w-40 h-40 border-4 border-white rounded-full shadow-lg bg-white">
            <AvatarImage src="/placeholder.svg?height=160&width=160" alt="Sophia Liu" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 pl-40 pt-8">
          <h1 className="text-3xl font-bold text-gray-900">Sophia Liu</h1>
          <p className="text-gray-600 mt-2 text-lg">Designer & Photography in San Francisco Bay Area</p>
          <p className="text-gray-500 text-base mt-1">Self-Employed • Cal Poly San Luis Obispo</p>
        </div>
        <div className="flex gap-3 pt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-none px-6">Message</Button>
          <Button variant="outline" className="rounded-none px-6">
            More...
          </Button>
        </div>
      </div>
      {/* Navigation Tabs Section */}
      <div className="border-t">
        <nav className="flex px-8">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "px-6 py-4 text-base font-medium border-b-3 transition-colors",
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700",
              )}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
