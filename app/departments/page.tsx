import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTAStrip } from "@/components/home/cta-strip"
import { 
  Bone, 
  Brain, 
  Activity, 
  Baby, 
  Users, 
  Heart
} from "lucide-react"

export const metadata: Metadata = {
  title: "Departments & Conditions - Hope and Heal",
  description: "Explore our specialized departments treating orthopedic, neurological, sports, pediatric, geriatric, and women's health conditions.",
}

const departments = [
  {
    id: "orthopedic",
    icon: Bone,
    title: "Orthopedic Department",
    description: "Specialized treatment for bones, joints, muscles, ligaments, and tendons.",
    conditions: [
      { name: "Back Pain & Sciatica", description: "Treatment for lower back pain, herniated discs, and sciatica." },
      { name: "Neck Pain & Cervical Issues", description: "Relief from neck stiffness, cervical spondylosis, and whiplash." },
      { name: "Arthritis Management", description: "Care for osteoarthritis and rheumatoid arthritis symptoms." },
      { name: "Frozen Shoulder", description: "Treatment for adhesive capsulitis and shoulder stiffness." },
      { name: "Knee Problems", description: "Rehabilitation for ligament injuries, meniscus tears, and knee pain." },
      { name: "Fracture Rehabilitation", description: "Post-fracture recovery and strengthening programs." },
    ],
  },
  {
    id: "neurological",
    icon: Brain,
    title: "Neurological Department",
    description: "Expert care for conditions affecting the brain, spinal cord, and nervous system.",
    conditions: [
      { name: "Stroke Rehabilitation", description: "Comprehensive recovery programs for stroke survivors." },
      { name: "Parkinson's Disease", description: "Movement therapy and balance training for Parkinson's patients." },
      { name: "Multiple Sclerosis", description: "Symptom management and mobility maintenance for MS patients." },
      { name: "Spinal Cord Injuries", description: "Rehabilitation for partial and complete spinal cord injuries." },
      { name: "Bell's Palsy", description: "Facial muscle rehabilitation and recovery support." },
      { name: "Peripheral Neuropathy", description: "Treatment for nerve damage and associated symptoms." },
    ],
  },
  {
    id: "sports",
    icon: Activity,
    title: "Sports Injury Department",
    description: "Specialized rehabilitation for athletes and sports-related injuries.",
    conditions: [
      { name: "ACL/PCL Injuries", description: "Pre and post-surgical rehabilitation for knee ligament injuries." },
      { name: "Tennis/Golfer's Elbow", description: "Treatment for repetitive strain injuries of the elbow." },
      { name: "Rotator Cuff Injuries", description: "Shoulder injury rehabilitation and prevention." },
      { name: "Ankle Sprains", description: "Recovery programs for ligament injuries and instability." },
      { name: "Muscle Strains", description: "Treatment for pulled muscles and soft tissue injuries." },
      { name: "Shin Splints", description: "Relief from exercise-induced lower leg pain." },
    ],
  },
  {
    id: "pediatric",
    icon: Baby,
    title: "Pediatric Department",
    description: "Gentle, specialized care for children's physical development and conditions.",
    conditions: [
      { name: "Cerebral Palsy", description: "Movement therapy and developmental support for CP children." },
      { name: "Developmental Delays", description: "Early intervention for motor skill development." },
      { name: "Torticollis", description: "Treatment for congenital muscular torticollis in infants." },
      { name: "Scoliosis", description: "Management and therapy for spinal curvature in children." },
      { name: "Coordination Disorders", description: "Help for children with motor coordination difficulties." },
      { name: "Sports Injuries in Children", description: "Age-appropriate rehabilitation for young athletes." },
    ],
  },
  {
    id: "geriatric",
    icon: Users,
    title: "Geriatric Department",
    description: "Specialized care for elderly patients focusing on mobility and independence.",
    conditions: [
      { name: "Balance Disorders", description: "Fall prevention and balance improvement programs." },
      { name: "Osteoporosis", description: "Safe exercise programs for bone health maintenance." },
      { name: "Joint Replacements", description: "Post-surgical rehabilitation for hip and knee replacements." },
      { name: "Chronic Pain Management", description: "Long-term pain relief strategies for seniors." },
      { name: "Mobility Limitations", description: "Programs to maintain and improve daily function." },
      { name: "Post-Fall Recovery", description: "Rehabilitation and confidence building after falls." },
    ],
  },
  {
    id: "womens-health",
    icon: Heart,
    title: "Women's Health Department",
    description: "Specialized physiotherapy addressing women's unique health needs.",
    conditions: [
      { name: "Prenatal Care", description: "Safe exercise and pain management during pregnancy." },
      { name: "Postnatal Recovery", description: "Postpartum rehabilitation and core strengthening." },
      { name: "Pelvic Floor Dysfunction", description: "Treatment for incontinence and pelvic organ prolapse." },
      { name: "Diastasis Recti", description: "Abdominal separation recovery after pregnancy." },
      { name: "Lymphedema", description: "Management of post-mastectomy lymphedema." },
      { name: "Menopause-Related Issues", description: "Bone health and mobility maintenance." },
    ],
  },
]

export default function DepartmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Departments & conditions</p>
            <h1 className="mt-2 text-3xl font-semibold text-primary">Specialized Treatment Units at Hope and Heal</h1>
            <p className="mt-4 text-sm text-foreground/80">
              Use the list below to review conditions managed by each department. Each condition leads to a structured assessment form and treatment pathway documented in the patient record.
            </p>
          </div>
        </section>

        <section className="bg-secondary py-8">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Quick navigation</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {departments.map((dept) => (
                <Link key={dept.id} href={`#${dept.id}`} className="border border-border bg-background px-3 py-1 text-foreground/80 hover:text-primary">
                  {dept.title.replace(" Department", "")}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="space-y-10">
              {departments.map((dept) => (
                <article key={dept.id} id={dept.id} className="border border-border p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-primary">
                      <dept.icon className="h-5 w-5" />
                      <p className="text-xs font-semibold uppercase tracking-wide">{dept.title}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{dept.conditions.length} key indications</span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/80">{dept.description}</p>
                  <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                    {dept.conditions.map((condition) => (
                      <li key={condition.name} className="border-t border-dashed border-border pt-3">
                        <p className="font-semibold text-foreground">{condition.name}</p>
                        <p className="mt-1">{condition.description}</p>
                        <Link href="/contact" className="mt-1 inline-block text-primary underline">Discuss treatment plan</Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-10">
          <div className="mx-auto max-w-6xl px-4 text-sm text-foreground/80">
            <h2 className="text-xl font-semibold text-primary">Not sure which department applies?</h2>
            <p className="mt-3">
              Share your prescription or diagnostic summary with our coordination desk via the contact form. We recommend a department after reviewing symptoms, imaging, and doctor notes.
            </p>
          </div>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </div>
  )
}
