import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StickyCTA from '@/components/StickyCTA'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kwaret TN — Premium Upgrades & Digital Services',
  description: 'Get fast access to premium services like ChatGPT Plus, Spotify, Netflix, YouTube Premium, and Adobe Creative Cloud. Quick activation, full warranty, and 24/7 support in Tunisia.',
  keywords: 'Kwaret TN, premium upgrades, ChatGPT Plus, Spotify Premium, Netflix, YouTube Premium, Adobe Creative Cloud, Tunisia, digital services',
  authors: [{ name: 'Foued el Beji', url: 'https://kwaret.tn' }],
  creator: 'Kwaret TN',
  publisher: 'Kwaret TN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kwaret.tn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kwaret TN — Premium Upgrades & Digital Services',
    description: 'Get fast access to premium services like ChatGPT Plus, Spotify, Netflix, YouTube Premium, and Adobe Creative Cloud. Quick activation, full warranty, and 24/7 support in Tunisia.',
    url: 'https://kwaret.tn',
    siteName: 'Kwaret TN',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Kwaret TN - Premium Upgrades & Digital Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kwaret TN — Premium Upgrades & Digital Services',
    description: 'Get fast access to premium services like ChatGPT Plus, Spotify, Netflix, YouTube Premium, and Adobe Creative Cloud. Quick activation, full warranty, and 24/7 support in Tunisia.',
    images: ['/opengraph-image'],
    creator: '@kwaret',
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/logos/default-logo.png" />
        <link rel="apple-touch-icon" href="/logos/default-logo.png" />
        <meta name="theme-color" content="#FFD23F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-k-black text-k-white antialiased`}>
        {children}
        <StickyCTA />
      </body>
    </html>
  )
}
