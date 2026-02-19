

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    Award,
    Stethoscope,
    Heart,
    Brain,
    CheckCircle2,
    GraduationCap
} from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Meet Dr. Neha Sharma (PT) | Best Lady Physiotherapist in Bangalore",
    description: "Dr. Neha Sharma is a senior physiotherapist with 10+ years of experience in orthopedic and sports rehabilitation. Founder of Hope and Heal.",
    alternates: {
        canonical: "https://hopeandheal.vercel.app/about-doctor",
    },
}

export default function AboutDoctorPage() {
    const qualifications = [
        "B.P.T (Bachelor of Physiotherapy)",
        "MIAP (Member of Indian Association of Physiotherapists)",
        "Certified Cupping Therapist",
        "Certified Dry Needling Therapist",
        "Certified Manual Therapist"
    ]

    const coreValues = [
        {
            icon: Heart,
            title: "Compassion",
            description: "Treating every patient with empathy, understanding, and personal care."
        },
        {
            icon: Award,
            title: "Expertise",
            description: "Leveraging over a decade of specialized experience and continuous learning."
        },
        {
            icon: Brain,
            title: "Innovation",
            description: "Integrating modern technology and AI-driven insights for faster recovery."
        }
    ]

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Image Column */}
                            <div className="relative order-2 lg:order-1">
                                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                                    <img
                                        src="/images/neha-doctor.jpg"
                                        alt="Dr. Neha Sharma (PT)"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-teal-500/20 rounded-3xl -z-10" />
                                <div className="absolute -bottom-4 -right-4 w-full h-full bg-teal-500/5 rounded-3xl -z-10" />
                            </div>

                            {/* Content Column */}
                            <div className="order-1 lg:order-2 space-y-6">
                                <div>
                                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                                        Dr. Neha Sharma <span className="text-teal-600">(PT)</span>
                                    </h1>
                                    <p className="text-xl text-foreground/70 font-medium">
                                        Senior Physiotherapist & Founder
                                    </p>
                                    <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
                                </div>

                                <p className="text-lg leading-relaxed text-foreground/80">
                                    Welcome to Hope and Heal Physiotherapy Clinic. I am Dr. Neha Sharma, dedicated to transforming lives through expert physiotherapy care. With over 10 years of clinical excellence, my mission is to provide personalized, non-invasive treatments that not only relieve pain but also restore strength and mobility.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="bg-white/80 backdrop-blur border border-teal-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                                        <div className="bg-teal-100 p-2 rounded-lg">
                                            <Stethoscope className="h-6 w-6 text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground">10+ Years</p>
                                            <p className="text-sm text-foreground/60">Experience</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur border border-blue-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                                        <div className="bg-blue-100 p-2 rounded-lg">
                                            <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground">1000+</p>
                                            <p className="text-sm text-foreground/60">Patients Healed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Credentials & Philosophy Section */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Credentials */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                        <GraduationCap className="h-8 w-8 text-teal-500" />
                                        Qualifications & Certifications
                                    </h2>
                                    <div className="space-y-4">
                                        {qualifications.map((qual, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 transition-colors"
                                            >
                                                <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                                <span className="font-medium text-foreground/80">{qual}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                                    <h3 className="text-xl font-bold mb-4">My Philosophy</h3>
                                    <p className="leading-relaxed text-white/90">
                                        "I believe in a holistic approach to healing. It's not just about treating the symptoms, but understanding the root cause. By combining clinical expertise with advanced AI-driven diagnostics, I ensure that every patient receives a treatment plan that is as unique as they are. Your recovery is my priority."
                                    </p>
                                </div>
                            </div>

                            {/* Core Values */}
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Us?</h2>
                                <div className="space-y-8">
                                    {coreValues.map((value, index) => (
                                        <div key={index} className="flex gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center border border-teal-100">
                                                    <value.icon className="h-7 w-7 text-teal-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                                                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="mt-8 pt-8 border-t border-gray-100">
                                        <p className="text-lg font-medium text-foreground mb-6">
                                            We focus on pain relief, functional recovery, and long-term everyday performance enhancement.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-500/25"
                                        >
                                            Book Consultation
                                        </a>
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
