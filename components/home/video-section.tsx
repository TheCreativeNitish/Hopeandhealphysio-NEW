import { Award, Users, Shield, Sparkles } from "lucide-react"

const facilityHighlights = [
  {
    icon: Award,
    title: "State-of-the-Art Equipment",
    detail: "Advanced physiotherapy equipment including electrotherapy, traction units, and rehabilitation technology",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Expert Team",
    detail: "Certified physiotherapists with 10+ years of specialized experience in diverse treatment modalities",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Hygiene Standards",
    detail: "Strict infection control protocols with daily sanitization and equipment sterilization procedures",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Sparkles,
    title: "Modern Facility",
    detail: "Comfortable, well-equipped treatment rooms designed for your privacy and optimal recovery experience",
    color: "from-orange-500 to-red-500"
  }
]

export function VideoSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center fade-in">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">
            Our Facility
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl heading-animated">
            World-<span className="text-highlight">Class Infrastructure</span> for Your Recovery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            Experience physiotherapy in a modern, comfortable, and fully-equipped facility
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {facilityHighlights.map((item, i) => (
            <article key={item.title} className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all hover:-translate-y-2 hover:shadow-2xl fade-in animate-delay-${i}`}>
              <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-all group-hover:scale-110`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/70">{item.detail}</p>
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.color} transition-all group-hover:w-full`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
