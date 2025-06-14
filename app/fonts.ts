import localFont from 'next/font/local'

// Option 1: Self-hosted Helvetica Neue (requires license)
// Uncomment this section if you have the font files
/*
export const helveticaNeue = localFont({
  src: [
    {
      path: '../public/fonts/HelveticaNeue-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeue.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeue-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeue-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-neue',
  display: 'swap',
})
*/

export const geist = localFont({
  src: [
    {
      path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
})

// Option 2: System font fallback (default implementation)
// This doesn't require any additional setup
export const systemFont = {
  variable: "--font-sans",
}
