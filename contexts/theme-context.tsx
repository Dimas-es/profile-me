"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system")

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <NextThemesProvider attribute="class" defaultTheme={theme} enableSystem>
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
