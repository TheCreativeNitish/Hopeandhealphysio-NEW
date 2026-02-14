import { Metadata } from "next"
import { ServicesPageClient } from "@/components/services/services-page-client"

export const metadata: Metadata = {
  title: "Specialized Physiotherapy Services | Hope and Heal Bangalore",
  description: "Comprehensive physiotherapy treatments including Orthopedic, Neurological, Pediatric, and Sports Rehabilitation. Expert care for lasting recovery.",
  alternates: {
    canonical: "https://hopeandheal.vercel.app/services",
  },
}

export default function ServicesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Physiotherapy",
    provider: {
      "@type": "Physiotherapy",
      name: "Hope and Heal Physiotherapy",
      image: "https://hopeandheal.vercel.app/images/logo.png",
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Physiotherapy Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Orthopedic Physiotherapy"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Neurological Rehabilitation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sports Injury Management"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pediatric Physiotherapy"
          }
        }
      ]
    }
  }

  return <ServicesPageClient jsonLdData={jsonLdData} />
}
