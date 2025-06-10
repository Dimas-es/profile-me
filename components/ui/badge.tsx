import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-supabase-green text-bg-main hover:bg-supabase-green-hover",
        secondary: "border-border-primary bg-bg-secondary text-text-primary hover:bg-border-secondary",
        destructive: "border-transparent bg-error text-text-primary hover:bg-error/80",
        outline:
          "border-supabase-green-light text-supabase-green-light hover:bg-supabase-green-light hover:text-bg-main",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
