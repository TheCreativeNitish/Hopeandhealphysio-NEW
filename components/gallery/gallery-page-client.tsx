"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
        src: "https://images.unsplash.com/photo-1581594187555-4001d782ae36?q=80&w=800&fit=max",
        category: "Therapy",
        alt: "Physiotherapy Session"
    },
    {
        src: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&fit=max",
        category: "Equipment",
        alt: "Advanced Modalities"
    },
    {
        src: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?q=80&w=800&fit=max",
        category: "Clinic Team",
        alt: "Medical Professional"
    }
]

export function GalleryPageClient() {
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

                        <div className="mt-16 text-center bg-teal-50 rounded-2xl p-10">
                            <h3 className="text-2xl font-bold text-teal-900 mb-2">Visit Us in Person</h3>
                            <p className="text-teal-700 mb-6">Experience our facilities first-hand. We strictly maintain hygiene and safety protocols.</p>
                            <a href="/contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-700 transition shadow-lg">
                                Get Directions
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
