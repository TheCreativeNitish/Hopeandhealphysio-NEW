import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { AppointmentModalProvider } from "@/contexts/appointment-modal-context"
import { Toaster } from "@/components/ui/toaster"
import { AppointmentBookingModal } from "@/components/appointment-booking-modal"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hopeandheal.vercel.app'),
  title: {
    default: 'Hope and Heal - Expert Physiotherapy & Rehabilitation Center in Bangalore',
    template: '%s | Hope and Heal Physiotherapy'
  },
  description: 'Top-rated physiotherapy clinic in Bangalore offering specialized treatments for back pain, sports injuries, post-surgery recovery, and neurological rehab. Book your assessment today.',
  keywords: ['Physiotherapy Bangalore', 'Physiotherapist', 'Back Pain Treatment', 'Sports Injury Rehab', 'Post Surgery Rehabilitation', 'Hope and Heal'],
  authors: [{ name: 'Hope and Heal Team' }],
  creator: 'Hope and Heal',
  publisher: 'Hope and Heal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Hope and Heal - Expert Physiotherapy & Rehabilitation',
    description: 'Professional physiotherapy services for pain relief, injury recovery, and mobility restoration. Personalized treatment by certified physiotherapists.',
    url: 'https://hopeandheal.vercel.app',
    siteName: 'Hope and Heal Physiotherapy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hope and Heal Physiotherapy Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hope and Heal - Expert Physiotherapy & Rehabilitation',
    description: 'Leading physiotherapy clinic in Bangalore. Expert care for pain relief and recovery.',
    images: ['/images/og-image.jpg'],
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
    google: 'verification_token',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppointmentModalProvider>
            {children}
            <AppointmentBookingModal />
            <Toaster />
          </AppointmentModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
