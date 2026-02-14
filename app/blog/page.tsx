import { Metadata } from 'next'
import { BlogPageClient } from "@/components/blog/blog-page-client"

export const metadata: Metadata = {
  title: 'Health & Physiotherapy Blog | Hope and Heal Bangalore',
  description: 'Expert articles on physiotherapy, injury prevention, rehabilitation tips, and wellness advice from our certified team.',
  alternates: {
    canonical: 'https://hopeandheal.vercel.app/blog',
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
