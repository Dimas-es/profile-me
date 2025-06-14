import type React from "react"

/**
 * @fileoverview Centralized type definitions for the application
 */

/**
 * Layout and Component Props
 */
export interface MainLayoutProps {
  children: React.ReactNode
  activeTab: string
}

export interface HeaderUtamaProps {
  activeTab: string
}

export interface KontainerHalamanProps {
  children: React.ReactNode
}

export interface DetailProyekProps {
  projectId: string
}

export interface MobileMenuProps {
  showSkills: boolean
  activeTab: string
}

/**
 * Data Models
 */
export interface AnggotaTim {
  name: string
  role: string
  avatar: string
}

export interface Proyek {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

export interface ProyekTim {
  id: number
  title: string
  role: string
  description: string
  image: string
  team: Array<{ name: string; role: string }>
}

export interface TabNavigasi {
  id: string
  label: string
  href: string
}

export interface KoneksiMutual {
  id: number
  name: string
  headline: string
  company: string
  avatar: string
  mutualConnections: number
}

/**
 * Theme and UI Types
 */
export interface ThemeConfig {
  name: string
  colors: {
    background: string
    foreground: string
    primary: string
    secondary: string
    accent: string
    border: string
  }
}

/**
 * Responsive Types
 */
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
export type ResponsiveValue<T> = Partial<Record<Breakpoint, T>>
