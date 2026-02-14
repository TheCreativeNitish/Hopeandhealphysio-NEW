import { 
  Award, 
  Users, 
  Stethoscope, 
  TrendingUp, 
  HeartHandshake,
  Clock
} from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Licensed physiotherapists with 10+ years of experience and specialized training in advanced treatment techniques.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Personalized Treatment",
    description: "Custom treatment plans designed specifically for your condition, goals, and lifestyle needs.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Stethoscope,
    title: "Advanced Equipment",
    description: "State-of-the-art physiotherapy equipment and evidence-based treatment modalities.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "98% success rate with over 5000+ satisfied patients treated and restored to active life.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centric Care",
    description: "Compassionate care focused on your comfort, dignity, and rapid recovery throughout your journey.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient appointment times including same-day bookings and professional home visit services.",
    color: "from-indigo-500 to-blue-500"
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center fade-in">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-secondary">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl heading-animated">
            Excellence in <span className="text-gradient">Every Aspect</span> of Care
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            We combine expertise, technology, and compassion to deliver outstanding results
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/70">
                {feature.description}
              </p>
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} transition-all group-hover:w-full`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
