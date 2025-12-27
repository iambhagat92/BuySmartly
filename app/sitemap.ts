import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts()

    const blogPosts = posts.map(post => ({
        url: `https://buysmartly.com/blog/${post.slug}`,
        lastModified: post.updateDate || post.publishDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: 'https://buysmartly.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://buysmartly.com/blog',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...blogPosts,
        {
            url: 'https://buysmartly.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://buysmartly.com/how-we-research',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://buysmartly.com/editorial-policy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
}
