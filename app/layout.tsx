import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Dock } from "@/components/dock"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kingsley Okpo",
  description: "I help businesses streamline their online presence to align with their unique goals and needs.",
  generator: 'Kingsley',
  applicationName: 'Kingsley Okpo Portfolio',
  authors: [{ name: 'Kingsley Okpo' }],
  keywords: ['Kingsley Okpo', 'Software Engineer', 'Full Stack Developer', 'React', 'Node.js', 'TypeScript'],
  creator: 'Kingsley Okpo',
  publisher: 'Kingsley Okpo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', rel: 'android-chrome' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', rel: 'android-chrome' }
    ]
  },
  manifest: '/favicon_io/site.webmanifest',
  themeColor: '#000000',
  colorScheme: 'dark',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicons are now handled by Next.js metadata API above */}
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Dock />
        {children}
      </body>
    </html>
  )
}
