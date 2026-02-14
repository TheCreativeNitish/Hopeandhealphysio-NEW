import { Metadata } from 'next'
import { AppointmentPageClient } from "@/components/appointment/appointment-page-client"

export const metadata: Metadata = {
    title: 'Book Appointment | Hope and Heal Physiotherapy Bangalore',
    description: 'Schedule your physiotherapy session online. Easy booking for back pain, sports injuries, and rehabilitation services.',
    alternates: {
        canonical: 'https://hopeandheal.vercel.app/appointment',
    },
}

export default function AppointmentPage() {
    return <AppointmentPageClient />
}
