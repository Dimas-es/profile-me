import * as React from "react"

import { cn } from "@/utils/responsive-utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 sm:h-10 w-full rounded-md border border-main-border bg-main-secondary px-3 py-2 text-sm sm:text-base text-main-text ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-main-text-third focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
