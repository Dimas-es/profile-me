import type React from "react"
import type { Metadata } from "next"
import { systemFont } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "DIMAS ADIJAYA",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={systemFont.variable}>
      <body>{children}</body>
    </html>
  )
}
