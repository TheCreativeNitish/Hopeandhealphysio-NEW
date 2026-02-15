"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useAppointmentModal } from "@/contexts/appointment-modal-context"
import { useIsMobile } from "@/hooks/use-mobile"

// Animation styles
const animationStyles = `
  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .animate-slide-in {
    animation: slideInFromRight 1s ease-out forwards;
  }
  .hero-title {
    color: #ff5252;
    font-weight: 900;
    letter-spacing: 0.04em;
    -webkit-text-stroke: 1.5px #1a1a1a;
    paint-order: stroke fill;
    text-shadow: 
      2px 2px 0px #000000,
      4px 4px 0px rgba(0, 0, 0, 0.7),
      6px 6px 15px rgba(0, 0, 0, 0.8),
      0 0 30px rgba(255, 82, 82, 0.4);
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.6));
  }
`

const desktopHeroImages = [
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&fit=max",
    alt: "Professional Physiotherapy Treatment"
  },
  {
    src: "https://ik.imagekit.io/dvl5mhvik/423.jpg?tr=w-2070,h-800,c-fill",
    alt: "Advanced Physiotherapy Facility"
  },
  {
    src: "https://ik.imagekit.io/dvl5mhvik/shoulder.jpg?tr=w-2070,h-800,c-fill",
    alt: "Shoulder Physiotherapy Treatment"
  },
  {
    src: "https://ik.imagekit.io/dvl5mhvik/tech.jpg?tr=w-2070,h-800,c-fill",
    alt: "Advanced Physiotherapy Technology"
  },
  {
    src: "https://ik.imagekit.io/dvl5mhvik/Spine.jpg?tr=w-2070,h-800,c-fill",
    alt: "Spine Physiotherapy Treatment"
  }
]

const mobileHeroImages = [
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&fit=max",
    alt: "Professional Physiotherapy Treatment - Mobile"
  },
  {
    src: "https://ik.imagekit.io/dvl5mhvik/423.jpg?tr=w-800,h-600,c-fill",
    alt: "Advanced Physiotherapy Facility - Mobile"
  },
  {
    src: "https://ik.imagekit.io/dvl5mhvik/shoulder.jpg?tr=w-800,h-600,c-fill",
    alt: "Shoulder Physiotherapy Treatment - Mobile"
  },
  {
    src: "https://ik.imagekit.io/dvl5mhvik/tech.jpg?tr=w-800,h-600,c-fill",
    alt: "Advanced Physiotherapy Technology - Mobile"
  },
  {
    src: "https://ik.imagekit.io/dvl5mhvik/Spine.jpg?tr=w-800,h-600,c-fill",
    alt: "Spine Physiotherapy Treatment - Mobile"
  }
]

export function HeroSection() {
  const { openModal } = useAppointmentModal()
  const isMobile = useIsMobile()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Select images based on device type
  const heroImages = isMobile ? mobileHeroImages : desktopHeroImages

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }, [heroImages.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [heroImages.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered, nextSlide])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }
    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  return (
    <>
      <section
        className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[90vh] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        {/* Navigation Arrows - Hidden on Mobile */}
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 p-2.5 sm:p-3 shadow-lg transition-all hover:bg-white hover:scale-110 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 p-2.5 sm:p-3 shadow-lg transition-all hover:bg-white hover:scale-110 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-3 sm:px-6 md:px-8">
          <div className="w-full max-w-4xl text-center">
            <style>{animationStyles}</style>
            {/* Quote Section */}
            <div className="mb-8 bg-gradient-to-r from-teal-600 to-teal-700 py-5 px-4 sm:px-8 md:px-10 rounded-2xl shadow-xl backdrop-blur-sm border border-teal-400/30 flex items-center justify-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
              <p className="text-white italic font-bold text-xs sm:text-lg md:text-2xl tracking-wide whitespace-nowrap sm:whitespace-normal animate-slide-in m-0 leading-none">
                "Our Spirit of Service is the highest form of Worship"
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-[0.02em] mb-6 hero-title">
              <span className="block">GET THE BEST PHYSIOTHERAPY</span>
              <span className="block">TREATMENT AT "HOPE AND HEAL"</span>
              <span className="block text-base sm:text-2xl md:text-3xl mt-2 font-normal">- BANGALORE -</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
              Welcome to Hope and Heal Physiotherapy, Bangalore - expert care for pain relief, injury recovery, and specialised rehabilitation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center w-full px-2">
              <a
                href="https://wa.me/919513060525?text=Hello%20Hope%20%26%20Heal%20Team%2C%0AI%20would%20like%20to%20schedule%20an%20appointment.%20Kindly%20share%20available%20slots%20and%20consultation%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-teal-500/80 hover:bg-teal-500 px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl backdrop-blur-sm w-full sm:w-auto text-sm sm:text-base"
              >
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <button
                onClick={openModal}
                className="flex items-center justify-center gap-2 rounded-full bg-white hover:bg-white/90 px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-slate-900 shadow-lg transition-all hover:scale-105 hover:shadow-xl w-full sm:w-auto text-sm sm:text-base"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="relative w-full h-20 lg:h-24 -mt-1 overflow-hidden bg-white">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 Q300,20 600,40 T1200,40 L1200,0 L0,0 Z" fill="currentColor" className="text-primary/10" opacity="0.3"></path>
          <path d="M0,50 Q300,30 600,50 T1200,50 L1200,0 L0,0 Z" fill="currentColor" className="text-primary/10" opacity="0.2"></path>
        </svg>
      </div>
    </>
  )
}
