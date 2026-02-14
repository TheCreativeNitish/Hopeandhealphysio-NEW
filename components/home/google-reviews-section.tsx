"use client"

import Script from "next/script"
import { ArrowRight } from "lucide-react"

interface GoogleReviewsSectionProps {
    showViewAllButton?: boolean
}

export function GoogleReviewsSection({ showViewAllButton = true }: GoogleReviewsSectionProps) {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="mb-10 text-center fade-in">
                    <span className="inline-block rounded-full bg-teal-600/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-teal-600 mb-4">
                        Patient Feedback
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Trusted by Our Community
                    </h2>
                </div>

                <div className="min-h-[400px]">
                    {/* Elfsight Google Reviews Widget */}
                    <div className="elfsight-app-dc30789c-92f3-48bd-9072-e34fcb5e95db" data-elfsight-app-lazy></div>
                </div>

                {showViewAllButton && (
                    <div className="mt-8 text-center">
                        <a
                            href="/reviews"
                            className="inline-flex items-center gap-2 text-slate-600 font-semibold hover:text-teal-600 transition"
                        >
                            Read More Reviews
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                )}
            </div>
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        </section>
    )
}
