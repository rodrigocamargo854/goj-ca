import type React from "react"
import { cn } from "@/lib/utils"

interface PixelCardProps {
  children: React.ReactNode
  className?: string
}

export default function PixelCard({ children, className }: PixelCardProps) {
  return <div className={cn("bg-card border-2 border-black shadow-pixel p-4", className)}>{children}</div>
}
