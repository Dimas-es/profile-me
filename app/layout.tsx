import type React from "react"
import type { Metadata, Viewport } from "next"
import { geist, systemFont } from "./fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from 'next/script'

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
}

export const metadata: Metadata = {
  title: "Dimas Setiawan - Web Developer",
  description: "Professional profile of Dimas Setiawan - Web Developer",
  metadataBase: new URL('https://dimasadjy.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dimasadjy.vercel.app',
    title: 'Dimas Setiawan - Web Developer',
    description: 'Professional profile of Dimas Setiawan - Web Developer',
    siteName: 'Dimas Setiawan Portfolio',
    images: [
      {
        url: 'https://dimasadjy.vercel.app/og-image.jpg', // You should add this image
        width: 1200,
        height: 630,
        alt: 'Dimas Setiawan - Web Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimas Setiawan - Web Developer',
    description: 'Professional profile of Dimas Setiawan - Web Developer',
    images: ['https://dimasadjy.vercel.app/logoo.png'], // You should add this image
    creator: '@dimasadjy' // Add your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code if you have one
  },
  alternates: {
    canonical: 'https://dimasadjy.vercel.app'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${geist.variable} ${systemFont.variable}`} 
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Dimas Setiawan Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dimas Setiawan" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      </head>
      <body className="font-geist">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful');
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
