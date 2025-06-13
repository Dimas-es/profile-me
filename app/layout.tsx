import type React from "react"
import type { Metadata } from "next"
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Helvetica_Neue',Arial,Helvetica,sans-serif]">{children}</body>
    </html>
  )
}
