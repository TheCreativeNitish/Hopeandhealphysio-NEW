"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"

const services = [
    {
        image: "https://ik.imagekit.io/dvl5mhvik/premium_photo-1661672215321-e67893b20059.avif",
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
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&fit=max",
        icon: "💉",
        title: "Dry Needling Therapy",
        description: "Specialized technique using thin needles to release muscle knots and treat chronic pain.",
        detailedDescription: "Dry Needling is a specialized technique that uses thin monofilament needles to treat trigger points—knots in the muscle that cause pain and dysfunction. \n\nUnlike acupuncture, which focuses on energy flow, dry needling is based on Western anatomical and neurophysiological principles. \n\nIt effectively releases muscle tension, reduces pain signals, and promotes biochemical healing. It is highly effective for chronic pain syndromes, tension headaches, and overuse injuries.",
    },
    {
        image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=800&fit=max",
        icon: "🧘",
        title: "Cupping Therapy",
        description: "Ancient therapeutic technique using suction cups to improve blood flow and relieve muscle tension.",
        detailedDescription: "Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction. \n\nWe use it to help with pain, inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage. \n\nThe suction and negative pressure provided by cupping can loosen muscles, encourage blood flow, and sedate the nervous system (which makes it an excellent treatment for high blood pressure).",
    },
    {
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&fit=max",
        icon: "🔧",
        title: "IASTM Therapy",
        description: "Instrument Assisted Soft Tissue Mobilization to break down scar tissue and fascial restrictions.",
        detailedDescription: "IASTM (Instrument Assisted Soft Tissue Mobilization) involves using specialized instruments to massage and mobilize muscles, fascia, and tendons. \n\nIt effectively breaks down scar tissue and fascial restrictions, stimulating the body's natural healing response. \n\nThis technique is excellent for treating chronic tendinopathies, plantar fasciitis, and post-surgical scar tissue, helping to restore normal tissue texture and function.",
    },
    {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&fit=max",
        icon: "🏃",
        title: "Exercise & Sports Rehab",
        description: "Customized exercise programs for sports injuries, post-surgery recovery, and functional strength.",
        detailedDescription: "Our Exercise & Sports Rehabilitation program is designed to restore movement and function while preventing injury. We provide you with a dynamic, engaging, and progressive exercise regimen. \n\nEach session is guided by professionals who ensure correct form and technique to maximize benefits. \n\nFrom strengthening weakened muscles to improving flexibility and endurance, our exercise therapy is scientific, effective, and adapted to your fitness level, ensuring you get back to your active lifestyle stronger than before.",
    }
]

export function ServicesPageClient({ jsonLdData }: { jsonLdData: any }) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <JsonLd data={jsonLdData} />
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-teal-900 text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-800/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Specialised Services</h1>
                        <p className="text-lg sm:text-xl text-teal-100 max-w-2xl mx-auto">
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

                {/* CTA Section */}
                <section className="bg-teal-600 text-white py-16">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Not sure which treatment you need?</h2>
                        <p className="text-teal-100 text-lg mb-8">
                            Schedule a consultation with our experts. We will assess your condition and recommend the best treatment plan for you.
                        </p>
                        <Link
                            href="/appointment"
                            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Book Consultation
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
