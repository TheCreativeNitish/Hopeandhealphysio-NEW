import { Metadata } from 'next'
import { GalleryPageClient } from "@/components/gallery/gallery-page-client"

export const metadata: Metadata = {
  title: 'Clinic Gallery - Hope and Heal Physiotherapy',
  description: 'View our modern physiotherapy clinic facilities, treatment rooms, and advanced equipment in Bangalore.',
  alternates: {
    canonical: 'https://hopeandheal.vercel.app/gallery',
  },
}

export default function GalleryPage() {
  return <GalleryPageClient />
}
