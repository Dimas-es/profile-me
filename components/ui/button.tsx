import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva("btn-base", {
  variants: {
    variant: {
      default: "btn-primary",
      destructive: "btn-danger",
      outline: "btn-outline",
      secondary: "btn-secondary",
      ghost: "btn-ghost",
      link: "text-text-accent underline-offset-4 hover:underline p-0 h-auto font-inter",
    },
    size: {
      default: "btn-md",
      sm: "btn-sm",
      lg: "btn-lg",
      xl: "btn-xl",
      icon: "h-10 w-10 p-0",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
