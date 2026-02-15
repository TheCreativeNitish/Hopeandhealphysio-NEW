import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { AppointmentModalProvider } from "@/contexts/appointment-modal-context"
import { Toaster } from "@/components/ui/toaster"
import { AppointmentBookingModal } from "@/components/appointment-booking-modal"
import { StickyCTA } from "@/components/sticky-cta"

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hopeandhealphysio.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hope and Heal - Expert Physiotherapy & Rehabilitation Center in Bangalore',
    template: '%s | Hope and Heal Physiotherapy'
  },
  description: 'Top-rated physiotherapy clinic in Bangalore offering specialized treatments for back pain, sports injuries, post-surgery recovery, and neurological rehab. Book your assessment today.',
  keywords: ['Physiotherapy Bangalore', 'Physiotherapist', 'Back Pain Treatment', 'Sports Injury Rehab', 'Post Surgery Rehabilitation', 'Hope and Heal'],
  authors: [{ name: 'Hope and Heal Team' }],
  creator: 'Hope and Heal',
  publisher: 'Hope and Heal',
  openGraph: {
    title: 'Hope and Heal - Expert Physiotherapy & Rehabilitation',
    description: 'Professional physiotherapy services for pain relief, injury recovery, and mobility restoration. Personalized treatment by certified physiotherapists.',
    url: SITE_URL,
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
    google: 'OFHG23dGA55typX18pDGBuiGlWa_eCt69AnCZZlfA5U',
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    "@id": SITE_URL,
    "name": "Hope and Heal Physiotherapy Clinic",
    "alternateName": "Hope and Heal",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo.png`,
    "image": `${SITE_URL}/images/og-image.jpg`,
    "description": "Top-rated physiotherapy clinic in Bangalore offering specialized treatments for back pain, sports injuries, post-surgery recovery, and neurological rehab.",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@hopeandheal.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/hopeandheal",
      "https://www.instagram.com/hopeandheal",
      "https://www.linkedin.com/company/hopeandheal"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Physiotherapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Back Pain Treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sports Injury Rehabilitation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Surgery Recovery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Neurological Rehabilitation"
          }
        }
      ]
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
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
            <StickyCTA />
          </AppointmentModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
