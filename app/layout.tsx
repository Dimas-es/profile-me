import type React from "react"
import type { Metadata, Viewport } from "next"
import { systemFont } from "./fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Profile Me",
  description: "Your professional profile",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={systemFont.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
