import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hopeandheal.vercel.app' // Replace with your actual domain

    // Define static routes
    const routes = [
        '',
        '/services',
        '/about-doctor',
        '/contact',
        '/gallery',
        '/reviews',
        '/blog',
    ]

    // Mock blog posts - in a real app, you'd fetch these from a database or CMS
    const blogPosts = [
        'understanding-chronic-back-pain',
        'exercise-tips-for-seniors',
        'sports-injury-prevention',
        'post-surgery-recovery',
        'ergonomic-workspace-setup',
        'stretching-benefits',
    ]

    const staticEntries = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const blogEntries = blogPosts.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticEntries, ...blogEntries]
}
