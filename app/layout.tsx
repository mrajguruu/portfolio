import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import CursorGradient from '@/components/effects/CursorGradient'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production'
    ? 'https://mohitrajguru.com'
    : 'http://localhost:3000'
  ),
  title: 'Mohit Rajguru | Full-Stack Developer',
  description: 'Full-stack developer specializing in React, Next.js, and Node.js. Building modern web applications with exceptional user experiences.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Developer', 'Portfolio', 'Mohit Rajguru'],
  authors: [{ name: 'Mohit Rajguru' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohitrajguru.com',
    siteName: 'Mohit Rajguru Portfolio',
    title: 'Mohit Rajguru | Full-Stack Developer',
    description: 'Fresh graduate full-stack developer building modern web applications with React, Next.js, and Node.js',
    images: [
      {
        url: '/logos/mr logo.png',
        width: 795,
        height: 795,
        alt: 'Mohit Rajguru Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohit Rajguru | Full-Stack Developer',
    description: 'Fresh graduate full-stack developer building modern web applications',
    images: ['/logos/mr logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mohit Rajguru" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans bg-black text-white antialiased overflow-x-hidden">
        <CursorGradient />
        <Navbar />
        {children}
      </body>
    </html>
  )
}