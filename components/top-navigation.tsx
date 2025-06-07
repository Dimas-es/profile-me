import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export function TopNavigation() {
  return (
    <div className="bg-white border-b py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="LinkedIn"
            width={32}
            height={32}
            className="text-blue-600"
          />
        </Link>
        <div className="relative max-w-md w-full">
          <Input type="search" placeholder="Search" className="bg-gray-100 border-0 pl-4 pr-4 py-1 h-8 text-sm" />
        </div>
      </div>
    </div>
  )
}
