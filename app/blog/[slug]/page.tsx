import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"
import { JsonLd } from "@/components/json-ld"

// Blog posts for static generation
const blogPosts = [
  {
    slug: "understanding-chronic-back-pain",
    title: "Understanding Chronic Back Pain: Causes, Prevention, and Treatment Options",
    excerpt: "Back pain affects millions of people worldwide. Learn about the common causes, how to prevent it, and the most effective treatment approaches.",
    image: "/images/blog-back-pain.jpg",
    author: "Dr. Anil Sharma",
    authorImage: "/images/doctor-profile.jpg",
    authorRole: "Lead Physiotherapist",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Pain Management",
  },
  {
    slug: "exercise-tips-for-seniors",
    title: "Safe Exercise Tips for Seniors: Staying Active at Any Age",
    excerpt: "Discover gentle yet effective exercises that help seniors maintain mobility, strength, and independence.",
    image: "/images/blog-exercise.jpg",
    author: "Dr. Meera Patel",
    authorImage: "/images/doctor-profile.jpg",
    authorRole: "Senior Physiotherapist",
    date: "January 10, 2026",
    readTime: "6 min read",
    category: "Healthy Living",
  },
  {
    slug: "sports-injury-prevention",
    title: "5 Essential Warm-Up Routines to Prevent Sports Injuries",
    excerpt: "Proper warm-up is crucial for injury prevention. Learn the best routines to prepare your body for physical activity.",
    image: "/images/blog-sports.jpg",
    author: "Dr. Vikram Singh",
    authorImage: "/images/doctor-profile.jpg",
    authorRole: "Sports Medicine Specialist",
    date: "January 5, 2026",
    readTime: "5 min read",
    category: "Injury Prevention",
  },
  {
    slug: "post-surgery-recovery",
    title: "Your Complete Guide to Post-Surgery Recovery",
    excerpt: "What to expect after orthopedic surgery and how physiotherapy can accelerate your healing process.",
    image: "/images/clinic-interior.jpg",
    author: "Dr. Anil Sharma",
    authorImage: "/images/doctor-profile.jpg",
    authorRole: "Lead Physiotherapist",
    date: "December 28, 2025",
    readTime: "10 min read",
    category: "Recovery",
  },
  {
    slug: "ergonomic-workspace-setup",
    title: "Creating an Ergonomic Workspace: A Complete Guide",
    excerpt: "Learn how to set up your workspace to prevent repetitive strain injuries and maintain good posture.",
    image: "/images/blog-back-pain.jpg",
    author: "Dr. Meera Patel",
    authorImage: "/images/doctor-profile.jpg",
    authorRole: "Senior Physiotherapist",
    date: "December 20, 2025",
    readTime: "7 min read",
    category: "Pain Management",
  },
  {
    slug: "stretching-benefits",
    title: "The Science Behind Stretching: Why Flexibility Matters",
    excerpt: "Understanding the benefits of stretching and how it contributes to overall physical health and injury prevention.",
    image: "/images/blog-exercise.jpg",
    author: "Dr. Vikram Singh",
    authorImage: "/images/doctor-profile.jpg",
    authorRole: "Sports Medicine Specialist",
    date: "December 15, 2025",
    readTime: "6 min read",
    category: "Exercise Tips",
  },
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  return {
    title: post?.title ?? "Blog Article - Hope and Heal",
    description: post?.excerpt ?? "Expert physiotherapy articles and patient education.",
  }
}

// Article content mapping by slug
const articleContent: Record<string, { content: string }> = {
  "understanding-chronic-back-pain": {
    content: `
    <p>Back pain is one of the most common health complaints, affecting people of all ages. While it can be frustrating and debilitating, understanding its causes and treatment options can help you manage and overcome this condition effectively.</p>

    <h2>Common Causes of Back Pain</h2>
    <p>Back pain can arise from various factors, including:</p>
    <ul>
      <li><strong>Poor Posture:</strong> Sitting or standing incorrectly for prolonged periods puts strain on your spine.</li>
      <li><strong>Muscle Strain:</strong> Lifting heavy objects or sudden movements can strain back muscles.</li>
      <li><strong>Disc Problems:</strong> Herniated or degenerative discs can cause significant pain.</li>
      <li><strong>Arthritis:</strong> Spinal arthritis can narrow the space around the spinal cord.</li>
      <li><strong>Sedentary Lifestyle:</strong> Lack of physical activity weakens the muscles supporting your spine.</li>
    </ul>

    <h2>Prevention Strategies</h2>
    <p>Many cases of back pain can be prevented with these strategies:</p>
    <ol>
      <li><strong>Maintain Good Posture:</strong> Keep your back straight and shoulders relaxed when sitting or standing.</li>
      <li><strong>Exercise Regularly:</strong> Strengthen your core muscles to support your spine.</li>
      <li><strong>Lift Properly:</strong> Bend your knees and keep the load close to your body.</li>
      <li><strong>Stay Active:</strong> Avoid prolonged sitting; take regular breaks to move around.</li>
      <li><strong>Maintain a Healthy Weight:</strong> Excess weight puts additional stress on your back.</li>
    </ol>

    <h2>Treatment Options</h2>
    <p>When back pain occurs, several treatment approaches can help:</p>

    <h3>Physiotherapy</h3>
    <p>Physiotherapy is often the most effective treatment for back pain. A physiotherapist can design a personalized program that includes:</p>
    <ul>
      <li>Manual therapy techniques</li>
      <li>Targeted exercises to strengthen supporting muscles</li>
      <li>Postural correction guidance</li>
      <li>Pain management strategies</li>
    </ul>

    <h3>Lifestyle Modifications</h3>
    <p>Simple changes in daily habits can significantly reduce back pain:</p>
    <ul>
      <li>Using ergonomic furniture</li>
      <li>Taking regular breaks from sitting</li>
      <li>Sleeping on a supportive mattress</li>
      <li>Applying heat or cold therapy</li>
    </ul>

    <h2>When to Seek Professional Help</h2>
    <p>While mild back pain often resolves on its own, you should consult a physiotherapist if you experience:</p>
    <ul>
      <li>Pain that persists for more than two weeks</li>
      <li>Pain that radiates down your leg</li>
      <li>Numbness or tingling in your legs</li>
      <li>Pain accompanied by fever or unexplained weight loss</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Back pain doesn't have to control your life. With proper understanding, prevention strategies, and professional treatment when needed, you can maintain a healthy, pain-free back. If you're experiencing persistent back pain, don't hesitate to reach out to our team at PhysioCare for a personalized assessment and treatment plan.</p>
  `,
  },
}

const relatedPosts = [
  {
    id: 1,
    slug: "ergonomic-workspace-setup",
    title: "Creating an Ergonomic Workspace: A Complete Guide",
    image: "/images/blog-back-pain.jpg",
    category: "Pain Management",
  },
  {
    id: 2,
    slug: "stretching-benefits",
    title: "The Science Behind Stretching: Why Flexibility Matters",
    image: "/images/blog-exercise.jpg",
    category: "Exercise Tips",
  },
  {
    id: 3,
    slug: "post-surgery-recovery",
    title: "Your Complete Guide to Post-Surgery Recovery",
    image: "/images/clinic-interior.jpg",
    category: "Recovery",
  },
]

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  const content = articleContent[slug]?.content || ""

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary">Article not found</h1>
            <Link href="/blog" className="mt-4 inline-block text-primary underline">
              Return to blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.image ? `https://hopeandheal.vercel.app${post.image}` : undefined,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hope and Heal',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hopeandheal.vercel.app/images/logo.png'
      }
    },
    datePublished: new Date(post.date).toISOString(),
    description: post.excerpt,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={jsonLdData} />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-10">
          <div className="mx-auto max-w-4xl px-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to articles
            </Link>
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">{post.category}</p>
            <h1 className="mt-2 text-3xl font-semibold text-primary">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-foreground/80">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden border border-border">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wide text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-6">
          <div className="mx-auto max-w-5xl px-4">
            <div className="border border-border bg-background p-3 text-xs text-muted-foreground">
              Articles are prepared by treating therapists and reviewed quarterly. Kindly contact the clinic if you need clarifications or printable versions.
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-8">
          <div className="mx-auto max-w-5xl px-4">
            <div className="border border-border">
              <div className="relative aspect-[21/9] bg-secondary/40">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
              <article
                className="prose prose-sm max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <aside className="space-y-4 text-sm text-foreground/80">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Share</p>
                  <button className="mt-2 border border-border px-3 py-2 text-xs text-primary">
                    <Share2 className="mr-2 inline h-3.5 w-3.5" /> Copy link
                  </button>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Author</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="relative h-12 w-12 border border-border">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-10">
          <div className="mx-auto max-w-5xl px-4">
            <div className="border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Need assistance</p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-foreground/80">
                <p className="flex-1">
                  If you require supervised guidance for this condition, contact the coordination desk with the article title for appointment scheduling.
                </p>
                <Link href="/contact" className="border border-border px-3 py-2 text-sm font-semibold text-primary">
                  Contact clinic
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Related reading</p>
            <div className="mt-4 space-y-4">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="border border-border p-4 text-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{relatedPost.category}</p>
                  <Link href={`/blog/${relatedPost.slug}`} className="mt-1 inline-block font-semibold text-primary underline">
                    {relatedPost.title}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
