import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavigationTabsProps {
  activeTab: string
}

export function NavigationTabs({ activeTab }: NavigationTabsProps) {
  const tabs = [
    { id: "profile", label: "Profile", href: "/profile" },
    { id: "projects", label: "Projects", href: "/" },
    { id: "activity", label: "Activity", href: "/activity" },
    { id: "connections", label: "Connections", href: "/connections" },
  ]

  return (
    <div className="border-b border-t">
      <nav className="flex">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={cn(
              "px-8 py-3 text-sm font-medium border-b-2 transition-colors",
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
  )
}
