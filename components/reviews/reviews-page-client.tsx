"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleReviewsSection } from "@/components/home/google-reviews-section"

export function ReviewsPageClient() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero */}
                <section className="bg-slate-50 py-16 text-center border-b border-gray-100">
                    <div className="mx-auto max-w-4xl px-4">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2 block">Testimonials</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Patient Success Stories</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Hear from our happy patients who have reclaimed their active lives with us.
                        </p>

                        <div className="mt-8 flex items-center justify-center gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-slate-900">4.9/5</p>
                                <div className="flex text-yellow-500 text-sm mt-1">
                                    {"★★★★★"}
                                </div>
                                <p className="text-xs text-slate-500 mt-1">Google Rating</p>
                            </div>
                            <div className="h-12 w-px bg-gray-200"></div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-slate-900">1000+</p>
                                <p className="text-sm font-medium text-teal-600 mt-1">Patients</p>
                                <p className="text-xs text-slate-500 mt-1">Recovered</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reviews Grid */}
                {/* Dynamic Google Reviews Section */}
                <GoogleReviewsSection showViewAllButton={false} />

            </main>

            <Footer />
        </div>
    )
}
