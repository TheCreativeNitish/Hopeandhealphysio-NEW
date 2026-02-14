"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, Mail, Clock, Facebook, Instagram, MessageCircle, MapPin, Youtube } from "lucide-react"
import { Logo } from "@/components/logo"
import { BookAppointmentButton } from "@/components/book-appointment-button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Doctor", href: "/about-doctor" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/reviews" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      {/* Dark Top Info Bar */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">
          {/* Left: Phone and Email */}
          <div className="flex flex-col items-start gap-1.5 sm:gap-3 lg:flex-row lg:items-center lg:gap-6">
            <a href="tel:+919513060525" className="flex items-center gap-1.5 sm:gap-2 transition hover:text-orange-400">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>+91 95130 60525</span>
            </a>
            <a href="mailto:1488neha@gmail.com" className="flex items-center gap-1.5 sm:gap-2 transition hover:text-orange-400">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span>1488neha@gmail.com</span>
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a href="https://www.facebook.com/people/HopeHeal-Physiotherapy-Clinic/100063745584977/" className="flex items-center gap-1 transition hover:text-orange-400" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a href="https://www.instagram.com/cuppingwithneha/reels/" className="flex items-center gap-1 transition hover:text-orange-400" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="https://m.youtube.com/%40synchroself?fbclid=PAb21jcAPv1idleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadQm6zp2jtKMBQCXyOBD5KoC9V6FnCcGOrpyasyEx27R2xwtrDZkhM8jl4xwQ_aem_H1jfW_nNthqsru0kzq12vA" className="flex items-center gap-1 transition hover:text-orange-400" target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
            <a href="https://wa.me/919513060525" className="flex items-center gap-1 transition hover:text-orange-400" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 sm:px-4 py-3 sm:py-4">
          <Logo size="md" />

          <div className="flex lg:hidden items-center gap-2">
            {/* Location Icon - Mobile View - Right Side */}
            <a
              href="https://www.google.com/maps/place/Hope%26Heal+Physiotherapy+Clinic+An+Advance+and+Best+Clinic+%26+Home+Visits+near+me+in+Ramamurthy+nagar/@13.0109938,77.6786868,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae11666cd7e741:0x60ce02a4bbe1ebd5!8m2!3d13.0109938!4d77.6786868!16s%2Fg%2F11t_0k0yjr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full p-2 transition hover:bg-primary/10"
              aria-label="View location on map"
              title="View location on map"
            >
              <MapPin className="h-5 w-5 text-primary" />
            </a>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition hover:text-primary ${pathname === item.href ? "text-primary border-b-2 border-primary" : "text-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Location Icon - Desktop */}
            <a
              href="https://www.google.com/maps/place/Hope%26Heal+Physiotherapy+Clinic+An+Advance+and+Best+Clinic+%26+Home+Visits+near+me+in+Ramamurthy+nagar/@13.0109938,77.6786868,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae11666cd7e741:0x60ce02a4bbe1ebd5!8m2!3d13.0109938!4d77.6786868!16s%2Fg%2F11t_0k0yjr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full p-2 transition hover:bg-primary/10"
              aria-label="View location on map"
              title="View location on map"
            >
              <MapPin className="h-5 w-5 text-primary" />
            </a>
            <BookAppointmentButton size="sm" />
          </div>
        </div>
      </nav>


      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[100px] z-40 h-[calc(100vh-100px)] bg-white overflow-y-auto lg:hidden">
          <div className="px-4 py-6">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg border px-4 py-3 text-base font-semibold transition hover:bg-muted ${pathname === item.href
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border text-foreground"
                    }`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border pt-4 mt-4">
                <p className="text-xs font-bold uppercase text-muted-foreground mb-3">Quick Contact</p>
                <a
                  href="tel:+919513060525"
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-4 py-3 text-base font-bold text-primary transition hover:bg-primary/5 mb-3"
                  onClick={closeMobileMenu}
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919513060525"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-3 text-base font-bold text-white transition hover:bg-whatsapp/90 mb-3"
                  onClick={closeMobileMenu}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <BookAppointmentButton className="w-full" size="md" onClick={closeMobileMenu} />
              </div>
            </div>
            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center rounded-lg border border-border px-4 py-3 text-base font-semibold transition hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="mr-2 h-5 w-5" /> Close Menu
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
