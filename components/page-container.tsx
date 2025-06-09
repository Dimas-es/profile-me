import { ReactNode } from "react"

interface PageContainerProps {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="bg-white rounded-none shadow-sm p-6">
      {children}
    </div>
  )
} 