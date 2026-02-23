import { Metadata } from 'next'
import { ReviewsPageClient } from "@/components/reviews/reviews-page-client"

export const metadata: Metadata = {
    title: 'Patient Reviews | Best Physiotherapy Feedback Bangalore',
    description: 'Read success stories and reviews from our happy patients. See why we are the top-rated physiotherapy clinic in Bangalore.',
    alternates: {
        canonical: 'https://hopeandheal.vercel.app/reviews',
    },
}

export default function ReviewsPage() {
    return <ReviewsPageClient />
}
