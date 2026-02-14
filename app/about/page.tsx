import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTAStrip } from "@/components/home/cta-strip"
import { Award, GraduationCap, Heart, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Hope and Heal | Expert Physiotherapists in Bangalore",
  description: "Learn about Hope and Heal Physiotherapy's mission, values, and our expert team. over 15+ years of experience in orthopedic and neurological rehabilitation.",
  alternates: {
    canonical: "https://hopeandheal.vercel.app/about",
  },
}

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with empathy and understanding, ensuring their comfort throughout the healing process.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in clinical practice, using evidence-based treatments for optimal outcomes.",
  },
  {
    icon: Users,
    title: "Patient-First",
    description: "Every decision we make centers around what is best for our patients' health and well-being.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Our team stays updated with the latest advancements in physiotherapy to provide cutting-edge care.",
  },
]

const team = [
  {
    name: "Dr. Anil Sharma",
    role: "Founder & Lead Physiotherapist",
    image: "/images/doctor-profile.jpg",
    qualifications: "MPT (Orthopedics), MIAP",
    experience: "15+ years",
    specialization: "Orthopedic & Sports Rehabilitation",
  },
  {
    name: "Dr. Meera Patel",
    role: "Senior Physiotherapist",
    image: "/images/doctor-profile.jpg",
    qualifications: "MPT (Neurology), MIAP",
    experience: "10+ years",
    specialization: "Neurological Rehabilitation",
  },
  {
    name: "Dr. Vikram Singh",
    role: "Sports Physiotherapist",
    image: "/images/doctor-profile.jpg",
    qualifications: "MPT (Sports), CSCS",
    experience: "8+ years",
    specialization: "Sports Injury & Athletic Performance",
  },
]

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "5000+", label: "Patients Treated" },
  { value: "98%", label: "Success Rate" },
  { value: "15+", label: "Expert Therapists" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">About Hope and Heal</p>
            <h1 className="mt-2 text-3xl font-semibold text-primary">Operational overview of our physiotherapy practice</h1>
            <p className="mt-4 max-w-3xl text-sm text-foreground/80">
              Since 2014 we have functioned as a referral-centered clinic providing structured physiotherapy for musculoskeletal, neurological, and geriatric needs. We prioritise documentation, measurable outcomes, and professional communication over marketing elements.
            </p>
          </div>
        </section>

        <section className="bg-secondary py-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-border bg-background p-4 text-center">
                  <p className="text-2xl font-semibold text-primary">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-primary">Our story</h2>
            <div className="mt-4 space-y-4 text-sm text-foreground/80">
              <p>
                PhysioCare opened with a single therapist and two treatment bays. Growth has been steady and deliberate, driven by medical referrals and patient outcomes rather than advertising. Today we operate multiple specialized units while retaining our original evidence-based ethos.
              </p>
              <p>
                The clinic is led by Dr. Anil Sharma (MPT Orthopedics) with oversight from senior therapists heading neurology, sports, and geriatric services. Weekly clinical rounds ensure knowledge transfer and uniform quality across the team.
              </p>
              <p>
                Investment in equipment is governed by treatment utility: traction tables, electrotherapy units, gait trainers, and dedicated geriatric aids are maintained as shared resources accessible to every therapist.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-primary">Mission and values</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {values.map((value) => (
                <article key={value.title} className="border border-border p-4 text-sm text-foreground/80">
                  <div className="flex items-center gap-2 text-primary">
                    <value.icon className="h-4 w-4" />
                    <p className="text-xs font-semibold uppercase tracking-wide">{value.title}</p>
                  </div>
                  <p className="mt-2">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-b border-border bg-secondary py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-primary">Clinical leadership</h2>
            <div className="mt-6 space-y-4 text-sm text-foreground/80">
              {team.map((member) => (
                <article key={member.name} className="border border-border bg-background p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-foreground">{member.name}</p>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{member.role}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{member.qualifications} · {member.experience}</p>
                  <p className="mt-2">Specialisation: {member.specialization}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="careers" className="bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-primary">Careers at PhysioCare</h2>
            <p className="mt-4 text-sm text-foreground/80">
              We recruit physiotherapists, therapy assistants, and case coordinators on a rolling basis. Applicants must hold recognised credentials and be comfortable working within structured documentation systems. Please email an updated resume with relevant registrations to hr@physiocare.com. Shortlisted candidates are invited for a clinical discussion, skills assessment, and observation session on the treatment floor.
            </p>
            <p className="mt-4 text-sm text-foreground/80">
              Existing staff receive internal training modules every quarter covering patient safety, documentation updates, and new treatment protocols. Career progression is transparent with published competency frameworks for each role.
            </p>
          </div>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </div>
  )
}
