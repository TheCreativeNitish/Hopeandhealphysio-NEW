"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight } from 'lucide-react'

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
    {
        id: 1,
        title: "Understanding Chronic Back Pain: Causes and Treatments",
        excerpt: "Back pain is one of the most common reasons people seek medical help or miss work. Learn about the different types of back pain and how physiotherapy can provide lasting relief.",
        author: "Dr. Neha Sharma",
        date: "October 15, 2023",
        category: "Pain Management",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&fit=max",
        slug: "understanding-chronic-back-pain"
    },
    {
        id: 2,
        title: "The Importance of Post-Surgery Rehabilitation",
        excerpt: "Surgery is just the first step in recovery. Discover why structured rehabilitation is crucial for regaining full mobility and strength after an orthopedic procedure.",
        author: "Dr. Anil Sharma",
        date: "September 28, 2023",
        category: "Rehabilitation",
        image: "https://images.unsplash.com/photo-1581594187555-4001d782ae36?q=80&w=800&fit=max",
        slug: "post-surgery-rehabilitation"
    },
    {
        id: 3,
        title: "5 Simple Exercises for Better Posture",
        excerpt: "Poor posture can lead to a host of health issues. Incorporate these five simple exercises into your daily routine to improve your posture and reduce strain.",
        author: "Dr. Meera Patel",
        date: "September 10, 2023",
        category: "Wellness",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&fit=max",
        slug: "exercises-for-posture"
    }
]

export function BlogPageClient() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-slate-900 py-16 text-center text-white">
                    <div className="mx-auto max-w-4xl px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & Wellness Blog</h1>
                        <p className="text-slate-300 text-lg">
                            Expert insights, tips, and news from our team of physiotherapists to help you stay healthy and active.
                        </p>
                    </div>
                </section>

                {/* Featured Post (Optional - using first post as featured) */}
                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={blogPosts[0].image}
                                        alt={blogPosts[0].title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 space-y-4">
                                <div className="flex items-center gap-4 text-sm text-teal-600 font-medium">
                                    <span className="bg-teal-50 px-3 py-1 rounded-full">{blogPosts[0].category}</span>
                                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {blogPosts[0].date}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 hover:text-teal-700 transition-colors">
                                    <Link href={`/blog/${blogPosts[0].slug}`}>{blogPosts[0].title}</Link>
                                </h2>
                                <p className="text-slate-600 text-lg line-clamp-3">
                                    {blogPosts[0].excerpt}
                                </p>
                                <Link href={`/blog/${blogPosts[0].slug}`} className="inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-3 transition-all">
                                    Read Article <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Post Grid */}
                <section className="py-16 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.slice(1).map((post) => (
                                <article key={post.id} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                            <span className="text-teal-600 font-semibold uppercase tracking-wide">{post.category}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-teal-600 transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                                                <User className="h-3 w-3" />
                                                {post.author}
                                            </div>
                                            <Link href={`/blog/${post.slug}`} className="text-teal-600 text-sm font-semibold hover:underline">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter / CTA */}
                <section className="bg-teal-50 py-16">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h2 className="text-3xl font-bold text-teal-900 mb-4">Stay Updated with Our Latest News</h2>
                        <p className="text-teal-700 mb-8 max-w-2xl mx-auto">
                            Subscribe to our newsletter to receive physiotherapy tips, health advice, and clinic updates directly to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-teal-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-teal-700 transition shadow-md"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
