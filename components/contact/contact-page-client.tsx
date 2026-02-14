"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapEmbed } from "@/components/map-embed"
import { BookAppointmentButton } from "@/components/book-appointment-button"
import { useAppointmentModal } from "@/contexts/appointment-modal-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Clock,
    Mail,
    MapPin,
    Phone,
    CheckCircle,
    MessageCircle,
    Navigation
} from "lucide-react"

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        details: ["+91 95130 60525"],
        action: "tel:+919513060525",
        actionText: "Call Now",
        gradient: "from-blue-500 via-sky-500 to-cyan-500",
        delay: "0",
        type: "link" as const,
    },
    {
        icon: Mail,
        title: "Email",
        details: ["1488neha@gmail.com"],
        action: "mailto:1488neha@gmail.com?subject=Appointment%20Inquiry&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20physiotherapy%20services.",
        actionText: "Send Email",
        gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
        delay: "100",
        type: "link" as const,
    },
    {
        icon: MapPin,
        title: "Address",
        details: ["1st cross,1st main, Nagappareddy layout,", "Ramamurthy Nagar, Bangalore, India, 560016"],
        action: "https://www.google.com/maps/place/Hope%26Heal+Physiotherapy+Clinic+An+Advance+and+Best+Clinic+%26+Home+Visits+near+me+in+Ramamurthy+nagar/@13.010994,77.5262515,12z/data=!4m6!3m5!1s0x3bae11666cd7e741:0x60ce02a4bbe1ebd5!8m2!3d13.010994!4d77.5262515!16s%2Fg%2F11y2xsj_7q",
        actionText: "Get Directions",
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        delay: "200",
        type: "link" as const,
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: ["Monday to Saturday", "Morning Session - 10 am to 1 pm", "Evening Session - 4 pm to 7 pm"],
        action: "",
        actionText: "Book Now",
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        delay: "300",
        type: "modal" as const,
    },
]

const services = [
    "Orthopedic Rehabilitation",
    "Neurological Therapy",
    "Sports Injury Treatment",
    "Post-Surgical Rehab",
    "Geriatric Physiotherapy",
    "Home Visit Services",
    "Other / General Consultation",
]

export function ContactPageClient() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { openModal } = useAppointmentModal()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsLoading(false)
        setIsSubmitted(true)
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section - Modern & Clean */}
                <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 md:py-28">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>
                    
                    <div className="relative mx-auto max-w-6xl px-4 text-center">
                        <div className="animate-fade-in">
                            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                                Get In Touch With{" "}
                                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                                    Hope and Heal
                                </span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
                                We're here to help you on your journey to recovery. Reach out to schedule an appointment or ask any questions.
                            </p>
                            
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <BookAppointmentButton 
                                    variant="primary"
                                    size="lg"
                                    className="w-full sm:w-auto shadow-2xl hover:shadow-sky-500/50"
                                >
                                    Book Appointment
                                </BookAppointmentButton>
                                
                                <a 
                                    href="tel:+919513060525"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-sky-600 bg-white px-8 py-4 text-lg font-bold text-sky-600 shadow-lg transition-all hover:scale-105 hover:bg-sky-50 hover:shadow-xl sm:w-auto"
                                >
                                    <Phone className="h-5 w-5" />
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards - Premium Design */}
                <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-20">
                    {/* Decorative Background Elements */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
                        <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-blue-200 blur-3xl"></div>
                        <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-purple-200 blur-3xl"></div>
                    </div>
                    
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
                            {contactInfo.map((item, index) => (
                                <article 
                                    key={item.title} 
                                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                                    style={{ 
                                        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                                    }}
                                >
                                    {/* Gradient Top Border with Shimmer Effect */}
                                    <div className="pointer-events-none relative h-1 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient}`}></div>
                                        <div className="absolute inset-0 animate-shimmer"></div>
                                    </div>
                                    
                                    {/* Animated Background Gradient on Hover */}
                                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}></div>
                                    
                                    {/* Floating Orb Effect */}
                                    <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-20`}></div>
                                    
                                    <div className="relative p-5 sm:p-6">
                                        {/* Icon with Animated Ring */}
                                        <div className="relative mb-5 sm:mb-6">
                                            <div className={`pointer-events-none absolute inset-0 h-14 w-14 animate-pulse rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-md transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:animate-ping group-hover:opacity-30 sm:h-16 sm:w-16`}></div>
                                            <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-2xl sm:h-16 sm:w-16`}>
                                                <item.icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.5} />
                                            </div>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-gray-700 sm:mb-3">
                                            {item.title}
                                        </h3>
                                        
                                        {/* Details */}
                                        <div className="mb-5 min-h-[4rem] space-y-1 sm:mb-6 sm:min-h-[4.5rem]">
                                            {item.details.map((detail) => (
                                                <p key={detail} className="text-sm font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-gray-800">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                        
                                        {/* CTA Button - Functional for all cards */}
                                        {item.type === "modal" ? (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    openModal();
                                                }}
                                                className={`relative z-50 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${item.gradient} px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 sm:py-3 cursor-pointer touch-manipulation`}
                                            >
                                                <span>{item.actionText}</span>
                                                <svg 
                                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </button>
                                        ) : (
                                            <a 
                                                href={item.action}
                                                {...(item.action.startsWith('http') && {
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer'
                                                })}
                                                className={`relative z-50 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${item.gradient} px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 sm:py-3 cursor-pointer no-underline touch-manipulation`}
                                                aria-label={item.actionText}
                                            >
                                                <span>{item.actionText}</span>
                                                <svg 
                                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    
                                    {/* Decorative Corner Elements */}
                                    <div className="pointer-events-none absolute -bottom-1 -right-1 h-16 w-16 rounded-tl-full bg-gradient-to-tl from-gray-100/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:h-20 sm:w-20"></div>
                                    
                                    {/* Subtle Border Glow on Hover */}
                                    <div className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} style={{
                                        boxShadow: `inset 0 0 20px rgba(56, 189, 248, 0.1)`
                                    }}></div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Appointment Request Form & Map Section */}
                <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
                            {/* Form Column */}
                            <div>
                                <div className="mb-6 md:mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                                        Request An Appointment
                                    </h2>
                                    <p className="mt-2 text-base text-gray-600 md:mt-3 md:text-lg">
                                        Fill out the form below and we'll get back to you shortly to confirm your appointment.
                                    </p>
                                </div>

                                {isSubmitted ? (
                                    <div className="rounded-xl bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8 md:p-12">
                                        <div className="text-center">
                                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                                                <CheckCircle className="h-10 w-10 text-green-600" />
                                            </div>
                                            <h3 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
                                                Request Received!
                                            </h3>
                                            <p className="mb-8 text-sm text-gray-600 md:text-base">
                                                Thank you for reaching out. Our team will contact you shortly to confirm your appointment details.
                                            </p>
                                            <Button 
                                                onClick={() => setIsSubmitted(false)} 
                                                variant="outline"
                                                className="rounded-xl px-6 py-3"
                                            >
                                                Submit Another Request
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="rounded-xl bg-white p-5 shadow-2xl sm:rounded-2xl sm:p-8 md:p-12">
                                        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                                                        First Name *
                                                    </Label>
                                                    <Input
                                                        id="firstName"
                                                        placeholder="John"
                                                        required
                                                        className="rounded-xl border-gray-300 px-4 py-3 transition-all focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                                                        Last Name *
                                                    </Label>
                                                    <Input
                                                        id="lastName"
                                                        placeholder="Doe"
                                                        required
                                                        className="rounded-xl border-gray-300 px-4 py-3 transition-all focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                                        Email Address *
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        required
                                                        className="rounded-xl border-gray-300 px-4 py-3 transition-all focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                                                        Phone Number *
                                                    </Label>
                                                    <Input
                                                        id="phone"
                                                        type="tel"
                                                        placeholder="+91 95130 60525"
                                                        required
                                                        className="rounded-xl border-gray-300 px-4 py-3 transition-all focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="service" className="text-sm font-semibold text-gray-700">
                                                    Service Required *
                                                </Label>
                                                <select
                                                    id="service"
                                                    className="flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-base transition-all focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                                    required
                                                >
                                                    <option value="">Select a service</option>
                                                    {services.map((service) => (
                                                        <option key={service} value={service}>
                                                            {service}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="preferredDate" className="text-sm font-semibold text-gray-700">
                                                    Preferred Date
                                                </Label>
                                                <Input
                                                    id="preferredDate"
                                                    type="date"
                                                    className="rounded-xl border-gray-300 px-4 py-3 transition-all focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                                                    Additional Message
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Please describe your condition or any specific concerns..."
                                                    rows={4}
                                                    className="rounded-xl border-gray-300 px-4 py-3 transition-all focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                                                />
                                            </div>

                                            <Button 
                                                type="submit" 
                                                className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 py-5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl disabled:hover:scale-100 sm:py-6 sm:text-lg" 
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    <span className="flex items-center justify-center gap-2">
                                                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Submitting...
                                                    </span>
                                                ) : "Submit Appointment Request"}
                                            </Button>
                                        </form>
                                    </div>
                                )}
                            </div>

                            {/* Map Column */}
                            <div>
                                <div className="mb-6 md:mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                                        Our Location
                                    </h2>
                                    <p className="mt-2 text-base text-gray-600 md:mt-3 md:text-lg">
                                        Visit us at our primary clinic in Bangalore.
                                    </p>
                                </div>

                                <div className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-sky-500/20 sm:rounded-2xl">
                                    <MapEmbed />
                                    <a 
                                        href="https://www.google.com/maps/place/Hope%26Heal+Physiotherapy+Clinic+An+Advance+and+Best+Clinic+%26+Home+Visits+near+me+in+Ramamurthy+nagar/@13.010994,77.5262515,12z/data=!4m6!3m5!1s0x3bae11666cd7e741:0x60ce02a4bbe1ebd5!8m2!3d13.010994!4d77.5262515!16s%2Fg%2F11y2xsj_7q"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-sky-600 shadow-lg transition-all hover:scale-105 hover:bg-sky-600 hover:text-white sm:bottom-4 sm:right-4 sm:px-6 sm:py-3 sm:text-base"
                                        aria-label="Get directions to Hope and Heal Physiotherapy Clinic"
                                    >
                                        <Navigation className="h-4 w-4 sm:h-5 sm:w-5" />
                                        <span className="hidden sm:inline">Get Directions</span>
                                        <span className="sm:hidden">Directions</span>
                                    </a>
                                </div>

                                {/* Urgent Assistance Card */}
                                <div className="mt-6 overflow-hidden rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 p-5 shadow-2xl sm:mt-8 sm:rounded-2xl sm:p-8">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm sm:h-12 sm:w-12">
                                            <Phone className="h-5 w-5 animate-pulse text-white sm:h-6 sm:w-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                                                Need Urgent Assistance?
                                            </h3>
                                            <p className="mb-3 text-xs text-sky-100 sm:mb-4 sm:text-sm">
                                                Our team is available during working hours for immediate support and scheduling.
                                            </p>
                                            <a 
                                                href="tel:+919513060525"
                                                className="mb-3 block text-xl font-bold text-white sm:text-2xl md:text-3xl"
                                            >
                                                +91 95130 60525
                                            </a>
                                            <a 
                                                href="tel:+919513060525"
                                                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-sky-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
                                            >
                                                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                                                Call Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
