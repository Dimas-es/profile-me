import type React from "react"
import type { Metadata } from "next"
import { systemFont } from "./fonts"
import { ThemeProvider } from "@/contexts/theme-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "DIMAS ADIJAYA",
  description: "Created with v0",
  generator: "v0.dev",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
