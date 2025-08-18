import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseClasses = "font-pixel text-xs border-2 border-black shadow-pixel pixel-bounce transition-all duration-75"

    const variants = {
      default: "bg-black text-white hover:bg-gray-800",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
    }

    const sizes = {
      sm: "px-3 py-2 text-[10px]",
      md: "px-4 py-3 text-xs",
      lg: "px-6 py-4 text-sm",
    }

    return (
      <Button ref={ref} className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
        {children}
      </Button>
    )
  },
)

PixelButton.displayName = "PixelButton"

export default PixelButton
