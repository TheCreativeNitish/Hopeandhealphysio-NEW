"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { useAppointmentModal } from "@/contexts/appointment-modal-context"

const services = [
    {
        image: "/services/electro-therapy.jpg",
        icon: "⚡",
        title: "Electrotherapy",
        description: "Advanced modalities including IFT, UST, TENS, Laser, and Deep Heat for pain relief and healing.",
        detailedDescription: "Electrotherapy is a cornerstone of modern physiotherapy for pain management and muscle re-education. We utilize state-of-the-art modality equipment including TENS (Transcutaneous Electrical Nerve Stimulation), IFT (Interferential Therapy), Ultrasound therapy, and High-Intensity Laser. \n\nThese non-invasive treatments help reduce inflammation, alleviate pain, improve circulation, and stimulate muscle repair without medication. \n\nIt is highly effective for conditions like arthritis, back pain, and sports injuries, providing immediate relief and accelerating the natural healing process.",
    },
    {
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&fit=max",
        icon: "🤲",
        title: "Manual Therapy",
        description: "Skilled hand movements to mobilize joints and soft tissues, reducing pain and improving range of motion.",
        detailedDescription: "Manual Therapy involves skilled hand movements and skilled passive movements of joints and soft tissue. Our specialists are trained in advanced techniques such as joint mobilization, manipulation, and myofascial release. \n\nThis hands-on approach is designed to induce relaxation, increase range of motion, and reduce pain. \n\nIt is particularly beneficial for stiff joints, frozen shoulder, neck pain, and back issues. We believe in the power of touch to heal and restore mechanical function to the body.",
    },
    {
        image: "/services/dry-needle.png",
        icon: "💉",
        title: "Dry Needling Therapy",
        description: "Specialized technique using thin needles to release muscle knots and treat chronic pain.",
        detailedDescription: "Dry Needling is a specialized technique that uses thin monofilament needles to treat trigger points—knots in the muscle that cause pain and dysfunction. \n\nUnlike acupuncture, which focuses on energy flow, dry needling is based on Western anatomical and neurophysiological principles. \n\nIt effectively releases muscle tension, reduces pain signals, and promotes biochemical healing. It is highly effective for chronic pain syndromes, tension headaches, and overuse injuries.",
    },
    {
        image: "/services/cupping-therapy.jpg",
        icon: "🧘",
        title: "Cupping Therapy",
        description: "Ancient therapeutic technique using suction cups to improve blood flow and relieve muscle tension.",
        detailedDescription: "Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction. \n\nWe use it to help with pain, inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage. \n\nThe suction and negative pressure provided by cupping can loosen muscles, encourage blood flow, and sedate the nervous system (which makes it an excellent treatment for high blood pressure).",
    },
    {
        image: "/services/dry-needle.png",
        icon: "💉",
        title: "Dry Needle Therapy",
        description: "Specialized technique using thin needles to release muscle knots and treat chronic pain.",
        detailedDescription: "Dry Needle Therapy is a specialized technique that uses thin monofilament needles to treat trigger points—knots in the muscle that cause pain and dysfunction. \n\nIt effectively releases muscle tension, reduces pain signals, and promotes biochemical healing. It is highly effective for chronic pain syndromes, tension headaches, and overuse injuries.",
    },
    {
        image: "/services/sports-rehab.jpg",
        icon: "🏃",
        title: "Exercise & Sports Rehab",
        description: "Customized exercise programs for sports injuries, post-surgery recovery, and functional strength.",
        detailedDescription: "Our Exercise & Sports Rehabilitation program is designed to restore movement and function while preventing injury. We provide you with a dynamic, engaging, and progressive exercise regimen. \n\nEach session is guided by professionals who ensure correct form and technique to maximize benefits. \n\nFrom strengthening weakened muscles to improving flexibility and endurance, our exercise therapy is scientific, effective, and adapted to your fitness level, ensuring you get back to your active lifestyle stronger than before.",
    }
]

export function ServicesPageClient({ jsonLdData }: { jsonLdData: any }) {
    const { openModal } = useAppointmentModal()

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <JsonLd data={jsonLdData} />
            <Header />

            <main className="flex-1">
                {/* Hero Section - Modernized */}
                <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-sky-50/40 py-16 sm:py-20 md:py-24 lg:py-28">
                    {/* Subtle background glow */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-teal-200/20 via-sky-100/10 to-transparent blur-3xl" />
                        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-bl from-teal-100/30 to-transparent blur-2xl" />
                    </div>

                    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                        <h1 className="mb-6 animate-fade-in text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-sky-600">
                            Our Specialised Services
                        </h1>
                        <p className="mx-auto max-w-[650px] animate-fade-in text-base leading-relaxed text-slate-600 sm:text-lg" style={{ animationDelay: '0.1s' }}>
                            We offer a wide range of advanced physiotherapy treatments designed to relieve pain, restore mobility, and enhance your quality of life.
                        </p>
                    </div>
                </section>

                {/* Services List */}
                <section className="py-16 sm:py-20 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="grid gap-12 lg:gap-16">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    {/* Image */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                            />
                                            <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-2xl shadow-lg">
                                                {service.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full lg:w-1/2 space-y-4">
                                        <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                                        <p className="text-lg font-medium text-teal-700">{service.description}</p>
                                        <div className="space-y-4 text-slate-600 leading-relaxed">
                                            {service.detailedDescription.split('\n\n').map((paragraph, idx) => (
                                                <p key={idx}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section - Enhanced */}
                <section className="relative overflow-hidden bg-teal-600 py-16 sm:py-20 md:py-24 lg:py-28">
                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800" />

                    {/* Radial glow */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-3xl" />
                    </div>

                    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                        <h2 className="mb-5 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-white">
                            Not sure which treatment you need?
                        </h2>
                        <p className="mx-auto mb-8 max-w-[650px] text-base leading-relaxed text-teal-50 sm:text-lg">
                            Schedule a consultation with our experts. We will assess your condition and recommend the best treatment plan for you.
                        </p>
                        <button
                            onClick={openModal}
                            className="inline-flex touch-manipulation items-center gap-2 rounded-full bg-white px-8 py-3.5 font-bold text-teal-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 w-full max-w-[280px] justify-center sm:w-auto"
                        >
                            Book Consultation
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
