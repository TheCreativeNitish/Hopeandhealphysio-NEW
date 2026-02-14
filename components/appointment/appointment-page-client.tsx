"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAppointmentModal } from "@/contexts/appointment-modal-context"
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"

export function AppointmentPageClient() {
    const { openModal } = useAppointmentModal()

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-slate-900 text-white py-12 lg:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            Take the first step towards a pain-free life. Schedule your visit with our expert physiotherapists today.
                        </p>
                    </div>
                </section>

                <section className="py-12 lg:py-16 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Contact Info Sidebar */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-teal-600" />
                                        Clinic Hours
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                                            <span className="font-medium">Monday - Saturday</span>
                                            <span className="text-teal-700 font-semibold">9:00 AM - 8:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                                            <span className="font-medium">Sunday</span>
                                            <span className="text-gray-500 italic">Closed</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-teal-600 text-white p-6 rounded-2xl shadow-md">
                                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                                    <div className="space-y-4">
                                        <a href="tel:+919513060525" className="flex items-center gap-3 hover:text-teal-100 transition">
                                            <Phone className="h-5 w-5" />
                                            <span className="font-medium">+91 95130 60525</span>
                                        </a>
                                        <a href="mailto:1488neha@gmail.com" className="flex items-center gap-3 hover:text-teal-100 transition">
                                            <Mail className="h-5 w-5" />
                                            <span className="font-medium">1488neha@gmail.com</span>
                                        </a>
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 mt-1" />
                                            <span className="text-sm">1st cross,1st main, Nagappareddy layout, Ramamurthy Nagar, Bangalore, India, 560016</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Form */}
                            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                    <Calendar className="h-10 w-10 text-teal-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Schedule?</h2>
                                <p className="text-slate-600 max-w-md mx-auto mb-8">
                                    Click the button below to open our booking form. You can choose your preferred service, date, and time.
                                </p>

                                <div className="w-full max-w-xs">
                                    <button
                                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
                                        onClick={openModal}
                                    >
                                        <Calendar className="h-5 w-5" />
                                        Open Booking Form
                                    </button>
                                    <p className="text-xs text-gray-400 mt-4">
                                        * A booking window will appear
                                    </p>
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
