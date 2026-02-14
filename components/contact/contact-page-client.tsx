"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapEmbed } from "@/components/map-embed"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Clock,
    Mail,
    MapPin,
    Phone,
    CheckCircle
} from "lucide-react"

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        details: ["+91 95130 60525"],
        action: "tel:+919513060525",
        actionText: "Call Now",
    },
    {
        icon: Mail,
        title: "Email",
        details: ["1488neha@gmail.com"],
        action: "mailto:1488neha@gmail.com",
        actionText: "Send Email",
    },
    {
        icon: MapPin,
        title: "Address",
        details: ["1st cross,1st main, Nagappareddy layout,", "Ramamurthy Nagar, Bangalore, India, 560016"],
        action: "https://maps.google.com",
        actionText: "Get Directions",
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: ["Monday to Saturday", "Morning Session - 10 am to 1 pm", "Evening Session - 4 pm to 7 pm"],
        action: null,
        actionText: null,
    },
]

const services = [
    "Orthopedic Rehabilitation",
    "Neurological Therapy",
    "Sports Injury Treatment",
    "Post-Surgical Rehab",
    "Geriatric Physiotherapy",
    "Home Visit Services",
    "Other / General Consultation",
]

const branches = [
    {
        id: "main-clinic",
        name: "Hope and Heal Physiotherapy",
        address: ["1st cross,1st main, Nagappareddy layout,", "Ramamurthy Nagar, Bangalore, India, 560016"],
        phone: "+91 95130 60525",
        email: "1488neha@gmail.com",
    },
]

export function ContactPageClient() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsLoading(false)
        setIsSubmitted(true)
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="border-b border-border bg-background py-12">
                    <div className="mx-auto max-w-6xl px-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contact PhysioCare</p>
                        <h1 className="mt-2 text-3xl font-semibold text-primary">Operational contacts and appointment pathways</h1>
                        <p className="mt-4 max-w-3xl text-sm text-foreground/80">
                            Use the directories below for direct phone, email, or branch-specific correspondence. Written communication is logged into the patient management system for traceability.
                        </p>
                    </div>
                </section>

                <section className="bg-secondary py-10">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {contactInfo.map((item) => (
                                <article key={item.title} className="border border-border bg-background p-4 text-sm text-foreground/80">
                                    <div className="flex items-center gap-2 text-primary">
                                        <item.icon className="h-4 w-4" />
                                        <p className="text-xs font-semibold uppercase tracking-wide">{item.title}</p>
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        {item.details.map((detail) => (
                                            <p key={detail}>{detail}</p>
                                        ))}
                                    </div>
                                    {item.action && (
                                        <a href={item.action} className="mt-3 inline-block text-primary underline">
                                            {item.actionText}
                                        </a>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-background py-12">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold text-primary">Appointment request form</h2>
                                <p className="mt-2 text-sm text-foreground/80">
                                    Provide the details below. Clinical notes or previous reports can be shared after we acknowledge your request.
                                </p>

                                {isSubmitted ? (
                                    <Card className="mt-6 border border-border">
                                        <CardContent className="py-10 text-center">
                                            <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle className="h-8 w-8 text-accent" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                                Appointment Request Submitted!
                                            </h3>
                                            <p className="text-muted-foreground mb-6">
                                                Thank you for reaching out. Our team will contact you shortly to confirm your appointment.
                                            </p>
                                            <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                                Submit another request
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <Card className="mt-6 border border-border">
                                        <CardContent className="pt-6">
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid gap-4 sm:grid-cols-2">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="firstName">First Name *</Label>
                                                        <Input
                                                            id="firstName"
                                                            placeholder="John"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="lastName">Last Name *</Label>
                                                        <Input
                                                            id="lastName"
                                                            placeholder="Doe"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid gap-4 sm:grid-cols-2">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="email">Email Address *</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            placeholder="john@example.com"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="phone">Phone Number *</Label>
                                                        <Input
                                                            id="phone"
                                                            type="tel"
                                                            placeholder="+91 95130 60525"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="service">Service Required *</Label>
                                                    <select
                                                        id="service"
                                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                                        required
                                                    >
                                                        <option value="">Select a service</option>
                                                        {services.map((service) => (
                                                            <option key={service} value={service}>
                                                                {service}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="preferredDate">Preferred Date</Label>
                                                    <Input
                                                        id="preferredDate"
                                                        type="date"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="message">Additional Message</Label>
                                                    <Textarea
                                                        id="message"
                                                        placeholder="Please describe your condition or any specific concerns..."
                                                        rows={4}
                                                    />
                                                </div>

                                                <Button type="submit" className="w-full" disabled={isLoading}>
                                                    {isLoading ? "Submitting..." : "Submit appointment request"}
                                                </Button>
                                            </form>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-primary">Primary clinic location</h2>
                                <p className="mt-2 text-sm text-foreground/80">
                                    The map below references the central clinic. Branch details are listed further below for quick reference.
                                </p>

                                <div className="mt-4">
                                    <MapEmbed />
                                </div>

                                <Card className="mt-6 border border-border">
                                    <CardHeader>
                                        <CardTitle className="text-base font-semibold">Immediate assistance</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-foreground/80">
                                            For urgent scheduling or clarification, call the clinic desk at <a href="tel:+919513060525" className="text-primary underline">+91 95130 60525</a>. Phone lines are monitored during operating hours.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-border bg-secondary py-12">
                    <div className="mx-auto max-w-6xl px-4 space-y-6">
                        <h2 className="text-2xl font-semibold text-primary">Branch directories</h2>
                        {branches.map((branch) => (
                            <article key={branch.id} id={branch.id} className="border border-border bg-background p-4 text-sm text-foreground/80">
                                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{branch.name}</p>
                                <div className="mt-2 space-y-1">
                                    {branch.address.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                </div>
                                <p className="mt-2">
                                    Phone: <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="text-primary underline">{branch.phone}</a>
                                </p>
                                <p>
                                    Email: <a href={`mailto:${branch.email}`} className="text-primary underline">{branch.email}</a>
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
