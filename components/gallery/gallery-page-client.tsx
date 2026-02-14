"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAppointmentModal } from "@/contexts/appointment-modal-context"
import { MapPin, Calendar } from "lucide-react"

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&fit=max",
        category: "Clinic Interior",
        alt: "Modern Clinic Waiting Area"
    },
    {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&fit=max",
        category: "Treatment Room",
        alt: "Private Treatment Room"
    },
    {
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&fit=max",
        category: "Equipment",
        alt: "Exercise Equipment"
    },
    {
        src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&fit=max",
        category: "Therapy",
        alt: "Physiotherapy Session"
    },
    {
        src: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=800&fit=max",
        category: "Therapy Session",
        alt: "Patient Rehabilitation Treatment"
    },
    {
        src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&fit=max",
        category: "Clinic Facilities",
        alt: "Modern Physiotherapy Clinic Interior"
    },
    {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&fit=max",
        category: "Treatment",
        alt: "Professional Physiotherapy Treatment"
    },
    {
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&fit=max",
        category: "Recovery",
        alt: "Patient Recovery and Rehabilitation"
    },
    {
        src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&fit=max",
        category: "Clinic Space",
        alt: "Spacious Treatment Area"
    }
]

export function GalleryPageClient() {
    const { openModal } = useAppointmentModal()

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero */}
                <section className="bg-slate-900 py-16 text-center text-white">
                    <div className="mx-auto max-w-4xl px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Clinic Gallery</h1>
                        <p className="text-slate-300 text-lg">
                            Take a tour of our modern facilities and state-of-the-art equipment designed for your recovery.
                        </p>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-16 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((img, i) => (
                                <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <p className="text-white font-bold text-lg">{img.category}</p>
                                            <p className="text-white/80 text-sm">{img.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 rounded-2xl p-10 md:p-16 text-center">
                            {/* Subtle radial glow */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-3xl" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Us in Person</h3>
                                <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Experience our state-of-the-art facilities and meet our expert team. We maintain the highest standards of hygiene and patient care.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                                    <a
                                        href="https://www.google.com/maps/place/Hope%26Heal+Physiotherapy+Clinic+An+Advance+and+Best+Clinic+%26+Home+Visits+near+me+in+Ramamurthy+nagar/@13.0109938,77.6786868,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae11666cd7e741:0x60ce02a4bbe1ebd5!8m2!3d13.0109938!4d77.6786868!16s%2Fg%2F11t_0k0yjr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full sm:w-auto touch-manipulation items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-teal-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                                    >
                                        <MapPin className="h-5 w-5" />
                                        Get Directions
                                    </a>
                                    <button
                                        onClick={openModal}
                                        className="inline-flex w-full sm:w-auto touch-manipulation items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-teal-700 hover:shadow-xl active:translate-y-0"
                                    >
                                        <Calendar className="h-5 w-5" />
                                        Book Appointment
                                    </button>
                                </div>

                                <p className="mt-6 text-teal-100 text-sm">
                                    📍 1st cross, 1st main, Nagappareddy layout, Ramamurthy Nagar, Bangalore - 560016
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
