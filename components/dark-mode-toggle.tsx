"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 border-2 border-black shadow-pixel transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      <div
        className={`absolute top-0 w-6 h-full bg-white border-r-2 border-black transition-transform duration-200 flex items-center justify-center ${
          theme === "dark" ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
      </div>
    </button>
  )
}
