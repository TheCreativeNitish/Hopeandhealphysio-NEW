"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { ServiceDetailModal } from "./service-detail-modal"

const services = [
  {
    image: "https://ik.imagekit.io/dvl5mhvik/premium_photo-1661672215321-e67893b20059.avif",
    icon: "⚡",
    title: "Electrotherapy",
    description: "Advanced modalities including IFT, UST, TENS, Laser, and Deep Heat for pain relief and healing.",
    detailedDescription: "Electrotherapy is a cornerstone of modern physiotherapy for pain management and muscle re-education. We utilize state-of-the-art modality equipment including TENS (Transcutaneous Electrical Nerve Stimulation), IFT (Interferential Therapy), Ultrasound therapy, and High-Intensity Laser. \n\nThese non-invasive treatments help reduce inflammation, alleviate pain, improve circulation, and stimulate muscle repair without medication. \n\nIt is highly effective for conditions like arthritis, back pain, and sports injuries, providing immediate relief and accelerating the natural healing process.",
    href: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&fit=max",
    icon: "🤲",
    title: "Manual Therapy",
    description: "Skilled hand movements to mobilize joints and soft tissues, reducing pain and improving range of motion.",
    detailedDescription: "Manual Therapy involves skilled hand movements and skilled passive movements of joints and soft tissue. Our specialists are trained in advanced techniques such as joint mobilization, manipulation, and myofascial release. \n\nThis hands-on approach is designed to induce relaxation, increase range of motion, and reduce pain. \n\nIt is particularly beneficial for stiff joints, frozen shoulder, neck pain, and back issues. We believe in the power of touch to heal and restore mechanical function to the body.",
    href: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&fit=max",
    icon: "💉",
    title: "Dry Needling Therapy",
    description: "Specialized technique using thin needles to release muscle knots and treat chronic pain.",
    detailedDescription: "Dry Needling is a specialized technique that uses thin monofilament needles to treat trigger points—knots in the muscle that cause pain and dysfunction. \n\nUnlike acupuncture, which focuses on energy flow, dry needling is based on Western anatomical and neurophysiological principles. \n\nIt effectively releases muscle tension, reduces pain signals, and promotes biochemical healing. It is highly effective for chronic pain syndromes, tension headaches, and overuse injuries.",
    href: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=800&fit=max",
    icon: "🧘",
    title: "Cupping Therapy",
    description: "Ancient therapeutic technique using suction cups to improve blood flow and relieve muscle tension.",
    detailedDescription: "Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction. \n\nWe use it to help with pain, inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage. \n\nThe suction and negative pressure provided by cupping can loosen muscles, encourage blood flow, and sedate the nervous system (which makes it an excellent treatment for high blood pressure).",
    href: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&fit=max",
    icon: "🔧",
    title: "IASTM Therapy",
    description: "Instrument Assisted Soft Tissue Mobilization to break down scar tissue and fascial restrictions.",
    detailedDescription: "IASTM (Instrument Assisted Soft Tissue Mobilization) involves using specialized instruments to massage and mobilize muscles, fascia, and tendons. \n\nIt effectively breaks down scar tissue and fascial restrictions, stimulating the body's natural healing response. \n\nThis technique is excellent for treating chronic tendinopathies, plantar fasciitis, and post-surgical scar tissue, helping to restore normal tissue texture and function.",
    href: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&fit=max",
    icon: "🏃",
    title: "Exercise & Sports Rehab",
    description: "Customized exercise programs for sports injuries, post-surgery recovery, and functional strength.",
    detailedDescription: "Our Exercise & Sports Rehabilitation program is designed to restore movement and function while preventing injury. We provide you with a dynamic, engaging, and progressive exercise regimen. \n\nEach session is guided by professionals who ensure correct form and technique to maximize benefits. \n\nFrom strengthening weakened muscles to improving flexibility and endurance, our exercise therapy is scientific, effective, and adapted to your fitness level, ensuring you get back to your active lifestyle stronger than before.",
    href: "#"
  }
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center fade-in">
          <span className="inline-block rounded-full bg-teal-600/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-teal-600 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground heading-animated">
            What We're Offering
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-foreground/70">
            Comprehensive physiotherapy treatments tailored to your recovery needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Read More Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-2.5 rounded-lg transition-all hover:gap-3 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-teal-600 hover:text-white transition-all shadow-md hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      <ServiceDetailModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  )
}
