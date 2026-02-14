"use client"

import { Phone, MessageCircle } from "lucide-react"

export function StickyContactWidget() {
  return (
    <>
      {/* Mobile: WhatsApp Only - Left Bottom (Floating Glass) */}
      <div className="fixed left-4 bottom-6 z-50 flex md:hidden">
        <a
          href="https://wa.me/919513060525"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)]"
          aria-label="Message us on WhatsApp"
          title="Message us on WhatsApp"
        >
          {/* Subtle Shine */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </div>

          <MessageCircle className="relative h-7 w-7 text-white fill-white z-10" />

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full ring-2 ring-[#25D366]/50 animate-pulse" />
        </a>
      </div>

      {/* Desktop: Phone & WhatsApp - Right Bottom (Vertical Glass Stack) */}
      <div className="fixed right-8 bottom-12 z-50 hidden md:flex flex-col gap-6">

        {/* Phone Button */}
        <a
          href="tel:+919513060525"
          className="group relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#3B82F6] shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)]"
          aria-label="Call us"
          title="Call us"
        >
          {/* Shine */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </div>

          <Phone className="relative h-7 w-7 text-white fill-white z-10" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919513060525"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#25D366] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)]"
          aria-label="Message us on WhatsApp"
          title="Message us on WhatsApp"
        >
          {/* Shine */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </div>

          <MessageCircle className="relative h-8 w-8 text-white fill-white z-10" />
        </a>
      </div>
    </>
  )
}
