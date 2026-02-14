"use client"

import { useState } from "react"
import { X, AlertCircle, Loader2 } from "lucide-react"
import { useAppointmentModal } from "@/contexts/appointment-modal-context"

const services = [
  { value: "orthopedic", label: "Orthopedic Rehabilitation" },
  { value: "neurological", label: "Neurological Therapy" },
  { value: "sports", label: "Sports Injury Treatment" },
  { value: "pediatric", label: "Pediatric Physiotherapy" },
  { value: "post-surgical", label: "Post-Surgical Recovery" },
  { value: "home-visits", label: "Home Visit Services" },
]

export function AppointmentBookingModal() {
  const { isOpen, closeModal } = useAppointmentModal()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Validation - Check required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service) {
      setError("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Phone validation - Indian format (10 digits, starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/
    const cleanPhone = formData.phone.replace(/\D/g, "")
    if (!phoneRegex.test(cleanPhone)) {
      setError("Please enter a valid Indian phone number (10 digits starting with 6-9)")
      setIsSubmitting(false)
      return
    }

    // Availability Check
    if (formData.preferredDate && formData.preferredTime) {
      try {
        const checkResponse = await fetch(
          "https://script.google.com/macros/s/AKfycbzTEJrBSktGVt66fU32QXx9Oi3tgOrjg4rQbsImUI70pcOu41Qby2h-1FzAhl87zbkFJQ/exec"
        )
        const checkResult = await checkResponse.json()

        if (checkResult.status === "success" && Array.isArray(checkResult.data)) {
          interface Appointment {
            appointmentDate: string
            timeSlot: string
          }
          const isTaken = checkResult.data.some((apt: Appointment) => {
            if (!apt.appointmentDate || !apt.timeSlot) return false

            // Compare Date
            // API now returns display values (strings) from sheet
            const aptDate = new Date(apt.appointmentDate)
            const selectedDate = new Date(formData.preferredDate)

            if (isNaN(aptDate.getTime()) || isNaN(selectedDate.getTime())) return false

            const isSameDate = (
              aptDate.getDate() === selectedDate.getDate() &&
              aptDate.getMonth() === selectedDate.getMonth() &&
              aptDate.getFullYear() === selectedDate.getFullYear()
            )

            if (!isSameDate) return false

            // Compare Time (String Match)
            // Existing: "14:30" or "14:30:00"
            // Selected: "14:30"
            let t1 = (apt.timeSlot || "").toString().trim()
            let t2 = formData.preferredTime.toString().trim()

            if (t1.length > 5) t1 = t1.substring(0, 5)
            if (t2.length > 5) t2 = t2.substring(0, 5)

            return t1 === t2
          })

          if (isTaken) {
            setError("This time slot is already booked. Please choose another time.")
            setIsSubmitting(false)
            return
          }
        }
      } catch (checkErr) {
        console.error("Availability check failed:", checkErr)
        // Optionally allow proceeding if check fails, or block. 
        // Blocking is safer for "Conflict Detection" feature.
      }
    }

    try {
      const payload = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        phoneNumber: formData.phone,
        email: formData.email,
        appointmentDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        reason: `${formData.service}${formData.message ? ` - ${formData.message}` : ""}`,
      }

      await fetch(
        "https://script.google.com/macros/s/AKfycbzTEJrBSktGVt66fU32QXx9Oi3tgOrjg4rQbsImUI70pcOu41Qby2h-1FzAhl87zbkFJQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(payload),
        }
      )

      setSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      })

      setTimeout(() => {
        setSubmitted(false)
        closeModal()
      }, 3000)
    } catch (err) {
      console.error("Submission error:", err)
      setError("Failed to submit booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-fadeIn">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white px-6 py-4 sm:px-8">
          <div>
            <h2 className="text-2xl font-bold text-primary">Book Your Appointment</h2>
            <p className="mt-1 text-sm text-foreground/70">Let's get you on the path to healing</p>
          </div>
          <button
            onClick={closeModal}
            className="rounded-lg p-2 transition hover:bg-muted"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-foreground/60" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8 sm:px-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Request Submitted!</h3>
                <p className="mt-2 text-foreground/70">
                  Thank you for booking with Hope and Heal. We'll contact you shortly to confirm your appointment.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex gap-3 rounded-lg bg-red-50 p-4 text-red-900">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Name Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-foreground">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground placeholder:text-foreground/40 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground placeholder:text-foreground/40 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-foreground">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground placeholder:text-foreground/40 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 95130 60525"
                    className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground placeholder:text-foreground/40 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground">
                  Service Required <span className="text-primary">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-foreground">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your condition or any specific concerns..."
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground placeholder:text-foreground/40 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2 sm:flex-row flex-col-reverse">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border-2 border-foreground/20 px-6 py-3 font-semibold text-foreground transition hover:bg-muted"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg bg-primary px-6 py-3 font-bold text-white shadow-lg transition hover:bg-primary/90 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    "Submit Appointment Request"
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-foreground/60">
                We'll contact you within 24 hours to confirm your appointment.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
