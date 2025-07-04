"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SidebarKeahlian } from "@/components/sidebar/sidebar-keahlian"
import { SidebarNavigation } from "@/components/sidebar/sidebar-navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { getPlaceholders } from "@/app/utils/data-utils"
import type { MobileMenuProps } from "@/types"

export function MobileMenu({ showSkills, activeTab }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const placeholders = getPlaceholders()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5 text-main-text" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] sm:w-[385px] bg-main-secondary border-main-border p-4">
        <div className="flex items-center justify-between mb-6">
          <SheetTitle className="text-lg font-semibold text-main-text">Menu</SheetTitle>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpen(false)}>
              <X className="h-5 w-5 text-main-text" />
              <span className="sr-only">Tutup menu</span>
            </Button>
          </div>
        </div>
        <div className="py-4 space-y-6">
          <div className="px-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main-text-third h-4 w-4" />
              <Input
                type="search"
                placeholder={placeholders.search}
                className="bg-main-secondary border-main-border pl-10 pr-4 py-1 h-9 text-sm"
              />
            </div>
          </div>
          <div className="border-t border-main-border pt-6 space-y-6">
            <SidebarNavigation activeTab={activeTab} />
            {showSkills && <SidebarKeahlian />}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
