"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WelcomeSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 heading-animated">
            Best Physiotherapy Treatment Center in Bangalore
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in space-y-6">
            {/* Welcome Heading */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Welcome to Hope And Heal
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
            </div>

            {/* Mobile Image: Visible only on small screens, inserted between Heading and Description */}
            <div className="lg:hidden fade-in relative h-[350px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl my-6">
              <img
                src="/images/neha-doctor.jpg"
                alt="Neha Sharma - Physiotherpist"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg">
                <p className="text-teal-800 font-bold text-base mb-0.5">Neha Sharma (PT)</p>
                <p className="text-teal-600 font-semibold text-xs">10+ Years of Excellence</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-foreground/80">
              <p className="text-base sm:text-lg leading-relaxed">
                Hope and Heal Physiotherapy Clinic (Bangalore, India) has a special significance in the overall healthcare industry of Bangalore and particularly in South India. With a commitment to excellence and patient care, we've established ourselves as a leading physiotherapy center.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Our clinic is built on the foundation of core values: compassion, expertise, and innovation. We believe in providing clinically guided, AI-driven care that focuses on pain relief, functional recovery, and long-term everyday performance enhancement.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Our team of certified physiotherapists brings decades of combined experience in diverse treatment modalities, utilizing state-of-the-art equipment and modern techniques to ensure optimal patient outcomes.
              </p>
            </div>

            {/* Doctor/Expert Info */}
            <div className="pt-4 border-l-4 border-teal-500 pl-6">
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-1">
                Our Expert Team
              </p>
              <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                Expert Physiotherapists
              </h4>
              <p className="text-foreground/70 text-base">
                B.P.T, MIAP, Certified Cupping, Dry Needling, Manual & IASTM Therapist
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <a href="/about-doctor">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image: Visible only on Large screens */}
          <div className="hidden lg:block fade-in relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            {/* Image Container with gradient overlay */}
            <img
              src="/images/neha-doctor.jpg"
              alt="Neha Sharma - Physiotherpist"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
              <p className="text-teal-800 font-extrabold text-lg mb-1">Neha Sharma (PT)</p>
              <p className="text-teal-600 font-bold text-sm">10+ Years of Excellence</p>
              <p className="text-foreground/70 text-xs">in Physiotherapy Care</p>
            </div>

            {/* Top accent */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20 blur-xl" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "1000+", label: "Happy Patients" },
            { number: "10+", label: "Years Experience" },
            { number: "25+", label: "Treatment Types" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-sm sm:text-base font-semibold text-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
