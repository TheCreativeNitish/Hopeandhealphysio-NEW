"use client"

import Link from "next/link"
import { Phone, MessageCircle, Calendar } from "lucide-react"
import { BookAppointmentButton } from "@/components/book-appointment-button"

export function CTAStrip() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          Ready to Start Your Recovery Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Don't let pain hold you back. Our expert physiotherapists are here to help you heal and get back to doing what you love.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/919513060525"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5 fill-white text-white" />
            <span>WhatsApp Now</span>
          </a>
          <a
            href="tel:+919513060525"
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-8 py-4 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] sm:w-auto"
          >
            <Phone className="h-5 w-5 fill-white text-white" />
            <span>Call Us Today</span>
          </a>
          <div className="relative group sm:w-auto w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-50 blur group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <BookAppointmentButton
              variant="primary"
              size="lg"
              className="relative w-full bg-slate-950 border border-white/10 text-white shadow-xl transition-all hover:bg-slate-900 sm:w-auto"
            >
              <Calendar className="h-5 w-5 mr-2 text-purple-400" />
              Book Appointment
            </BookAppointmentButton>
          </div>
        </div>

        <p className="mt-8 text-sm text-white/80">
          Available Mon - Sat • Same-day appointments available
        </p>
      </div>
    </section>
  )
}

