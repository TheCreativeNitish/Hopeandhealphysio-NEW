import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Back Pain Recovery",
    rating: 5,
    quote: "After years of chronic back pain, I finally found relief at Hope and Heal. The personalized treatment plan and dedicated care from the team helped me get back to my normal life within weeks. Truly life-changing!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Sports Injury Rehabilitation",
    rating: 5,
    quote: "As an athlete, getting back to the field was my top priority. The sports rehabilitation program here was exactly what I needed. Professional, thorough, and incredibly effective. I'm back to competing at my best!",
  },
  {
    id: 3,
    name: "Anand Mehta",
    role: "Post-Surgery Recovery",
    rating: 5,
    quote: "The post-surgical rehab program exceeded my expectations. The physiotherapists were incredibly knowledgeable, patient, and supportive throughout my entire recovery journey. I couldn't have asked for better care.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center fade-in">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl heading-animated">
            What Our <span className="text-highlight">Patients</span> Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            Real stories from real patients who experienced transformation at Hope and Heal
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <article key={testimonial.id} className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/10" />
              <div className="relative">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-foreground/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
