/**
 * Provider tema untuk aplikasi yang mengelola tema gelap/terang
 * Menggunakan next-themes untuk manajemen tema
 * 
 * @component
 * @param {ThemeProviderProps} props - Properti komponen
 * @param {ReactNode} props.children - Konten yang akan dibungkus oleh provider
 * @param {NextThemeProviderProps} props...props - Properti tambahan dari next-themes
 * @returns {JSX.Element} Provider tema
 * 
 * @example
 * ```tsx
 * <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *   <App />
 * </ThemeProvider>
 * ```
 */
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes'
import type { ReactNode } from 'react'

interface ThemeProviderProps extends NextThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
