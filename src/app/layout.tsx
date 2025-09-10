import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Revolutionary Ride-Hailing Platform | Ad-Supported Transportation in India',
  description: 'Experience affordable rides with zero driver commissions across Indian cities. Watch short ads, save money, and support fair earnings for drivers.',
  keywords: 'ride sharing India, transportation, advertising, fair earnings, affordable rides, Mumbai, Delhi, Bangalore, Chennai, Hyderabad',
  openGraph: {
    title: 'Revolutionary Ride-Hailing Platform',
    description: 'Ad-supported rides that benefit everyone',
    type: 'website',
    siteName: 'RideHail Platform',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revolutionary Ride-Hailing Platform',
    description: 'Ad-supported rides that benefit everyone',
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}