import type { Metadata } from 'next'
// Removed next/font/google (Inter) to avoid build-time network fetch causing ETIMEDOUT.
// Using system font stack via global CSS instead. Add local font files later if needed.
import './globals.css'

export const metadata: Metadata = {
  title: 'Gokhush - Zero Commission Rides | Ad-Supported Transportation in India',
  description: 'Experience affordable rides with zero driver commissions. Watch short ads, save money, and support fair earnings for drivers. Live in Hyderabad.',
  keywords: 'gokhush, ride sharing India, zero commission, transportation, advertising, fair earnings, affordable rides, Hyderabad',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Gokhush - Zero Commission Rides',
    description: 'Ad-supported rides that benefit everyone',
    type: 'website',
    siteName: 'Gokhush',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gokhush - Zero Commission Rides',
    description: 'Ad-supported rides that benefit everyone',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00FF88" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}