import { Metadata } from "next"
import { ContactPageClient } from "@/components/contact/contact-page-client"

export const metadata: Metadata = {
  title: "Contact Hope and Heal | Book Physiotherapy Appointment",
  description: "Get in touch with Hope and Heal Physiotherapy in Bangalore. Call +91 95130 60525 or visit our clinic for expert assessment and treatment.",
  alternates: {
    canonical: "https://hopeandheal.vercel.app/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
