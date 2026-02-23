import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WelcomeSection } from "@/components/home/welcome-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { GoogleReviewsSection } from "@/components/home/google-reviews-section"
import { InstagramFeedSection } from "@/components/home/instagram-feed-section"
import { VideoSection } from "@/components/home/video-section"
import { CTAStrip } from "@/components/home/cta-strip"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: 'Hope and Heal - Best Physiotherapy Clinic in Bangalore',
  description: 'Experience world-class physiotherapy at Hope and Heal, Bangalore. Specialized in back pain, sports injuries, and post-op rehab. Book your appointment now!',
  alternates: {
    canonical: 'https://hopeandheal.vercel.app',
  }
}

export default function Home() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Physiotherapy',
    name: 'Hope and Heal Physiotherapy',
    image: 'https://hopeandheal.vercel.app/images/logo.png',
    '@id': 'https://hopeandheal.vercel.app',
    url: 'https://hopeandheal.vercel.app',
    telephone: '+919513060525',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address', // Needs update
      addressLocality: 'Bangalore',
      addressRegion: 'KA',
      postalCode: '560001', // Needs update
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716, // Placeholder
      longitude: 77.5946, // Placeholder
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '14:00',
      }
    ],
    sameAs: [
      'https://www.facebook.com/hopeandheal',
      'https://www.instagram.com/hopeandheal',
      'https://www.linkedin.com/company/hopeandheal'
    ],
    priceRange: '₹₹'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={jsonLdData} />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WelcomeSection />
        <ServicesSection />
        <WhyChooseUs />

        <GoogleReviewsSection />
        <InstagramFeedSection />
        <VideoSection />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  )
}
