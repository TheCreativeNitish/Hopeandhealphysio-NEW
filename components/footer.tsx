"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Youtube, Calendar } from "lucide-react"
import { Logo } from "@/components/logo"
import { useAppointmentModal } from "@/contexts/appointment-modal-context"
import { MapEmbed } from "@/components/map-embed"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Careers", href: "/about#careers" },
  { name: "Contact", href: "/contact" },
  { name: "Feedback", href: "https://docs.google.com/forms/d/e/1FAIpQLSc2N2QffJTg0Jj1FbePEeM73sW9WwiIXXEs-Jue1Bb8cHFOgA/viewform?usp=publish-editor" },
]

const services = [
  { name: "Orthopedic Rehab", href: "/services#orthopedic" },
  { name: "Sports Injury", href: "/services#sports" },
  { name: "Neurological Care", href: "/services#neuro" },
  { name: "Post-Surgery Recovery", href: "/services#post-surgical" },
]

export function Footer() {
  const { openModal } = useAppointmentModal()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <Logo size="lg" className="mb-6" />
            <p className="mt-4 leading-relaxed text-white/80">
              Your trusted partner in pain relief, injury recovery, and mobility restoration.
              We provide expert physiotherapy care with a personal touch.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/90">
              <a href="tel:+919513060525" className="flex items-center gap-2 transition hover:text-whatsapp">
                <Phone className="h-4 w-4" /> +91 95130 60525
              </a>
              <a href="mailto:1488neha@gmail.com" className="flex items-center gap-2 transition hover:text-whatsapp">
                <Mail className="h-4 w-4" /> 1488neha@gmail.com
              </a>
              <p className="flex items-start gap-2 text-white">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                1st cross,1st main, Nagappareddy layout, Ramamurthy Nagar, Bangalore, India, 560016
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 transition hover:text-whatsapp">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/80 transition hover:text-whatsapp">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Find Us On The Map</h3>
          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {/* Map */}
            <div className="lg:col-span-2">
              <MapEmbed />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-3">Location</h4>
                <p className="text-white text-sm leading-relaxed">
                  1st cross,1st main, Nagappareddy layout, Ramamurthy Nagar, Bangalore, India, 560016
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Our Working Hours</h4>
                <p className="text-white text-sm leading-relaxed">
                  Monday to Saturday<br />
                  Morning Session - 10 am to 1 pm<br />
                  Evening Session - 4 pm to 7 pm
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Contact</h4>
                <div className="space-y-2 text-sm">
                  <a href="tel:+919513060525" className="flex items-center gap-2 text-white/80 hover:text-white transition">
                    <Phone className="h-4 w-4" />
                    +91 95130 60525
                  </a>
                  <a href="mailto:1488neha@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition">
                    <Mail className="h-4 w-4" />
                    1488neha@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-2xl bg-primary/10 border border-primary/20 p-8 text-center backdrop-blur">
          <h3 className="text-2xl font-bold">Ready to Start Your Recovery Journey?</h3>
          <p className="mt-3 text-white/80">Book your appointment today and take the first step towards a pain-free life</p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/919513060525"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-3.5 font-bold text-sm sm:text-base text-slate-900 shadow-lg transition-all hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href="tel:+919513060525"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-3.5 font-bold text-sm sm:text-base text-slate-900 shadow-lg transition-all hover:scale-105 w-full sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <button
              onClick={openModal}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-3.5 font-bold text-sm sm:text-base text-slate-900 shadow-lg transition-all hover:scale-105 w-full sm:w-auto"
            >
              <Calendar className="h-5 w-5" />
              Book Online
            </button>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Hope and Heal Physiotherapy Clinic. All rights reserved.
            <span className="mx-2 text-white/20">|</span>
            <Link href="/admin" className="hover:text-white transition">Admin</Link>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/people/HopeHeal-Physiotherapy-Clinic/100063745584977/" target="_blank" rel="noreferrer" className="text-white/60 transition hover:text-whatsapp" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/cuppingwithneha/reels/" target="_blank" rel="noreferrer" className="text-white/60 transition hover:text-whatsapp" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="text-white/60 transition hover:text-whatsapp" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
