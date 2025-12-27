import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog-data'
import {
    HOW_TO_CHOOSE_SMARTPHONE_CONTENT,
    THINGS_TO_CHECK_CONTENT,
    WHY_PRICES_CHANGE_CONTENT,
    IS_BUYING_SAFE_CONTENT,
    ONEPLUS_VS_SAMSUNG_CONTENT
} from '@/lib/blog-content'
import { generateBlogPostingSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { format } from 'date-fns'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorBox from '@/components/AuthorBox'
import RelatedPosts from '@/components/RelatedPosts'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'

type Props = {
    params: { slug: string }
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.title + ' | Buy Smartly',
        description: post.description,
        keywords: post.tags.join(', '),
        openGraph: {
            title: post.title,
            description: post.description,
            images: [post.featuredImage],
            type: 'article',
            publishedTime: post.publishDate,
            modifiedTime: post.updateDate || post.publishDate,
        },
    }
}

// Content mapping
const CONTENT_MAP: Record<string, string> = {
    'how-to-choose-smartphone-2025': HOW_TO_CHOOSE_SMARTPHONE_CONTENT,
    'things-check-buying-phone-online': THINGS_TO_CHECK_CONTENT,
    'why-phone-prices-change-online': WHY_PRICES_CHANGE_CONTENT,
    'is-buying-phones-online-safe': IS_BUYING_SAFE_CONTENT,
    'oneplus-vs-samsung-mid-range': ONEPLUS_VS_SAMSUNG_CONTENT,
};

export default function BlogPost({ params }: Props) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const content = CONTENT_MAP[post.slug] || '<p>Content coming soon...</p>'
    const blogPostingSchema = generateBlogPostingSchema(post, `https://buysmartly.com/blog/${post.slug}`)
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Blog', url: 'https://buysmartly.com/blog' },
        { name: post.title, url: `https://buysmartly.com/blog/${post.slug}` },
    ])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Breadcrumbs
                    items={[
                        { label: 'Blog', href: '/blog' },
                        { label: post.category, href: '/blog' },
                        { label: post.title, href: `/blog/${post.slug}` },
                    ]}
                />

                <header className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-medium px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                            {post.category}
                        </span>
                        <time className="text-slate-600" dateTime={post.publishDate}>
                            {format(new Date(post.publishDate), 'MMMM d, yyyy')}
                        </time>
                        {post.updateDate && post.updateDate !== post.publishDate && (
                            <span className="text-sm text-slate-500">
                                (Updated: {format(new Date(post.updateDate), 'MMM d, yyyy')})
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        {post.title}
                    </h1>

                    <p className="text-xl text-slate-600 mb-6">
                        {post.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.readingTime} min read</span>
                    </div>
                </header>

                <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                <div className="mt-12 pt-8 border-t border-slate-200">
                    <AffiliateDisclosure />
                </div>

                <div className="mt-12">
                    <AuthorBox author={post.author} />
                </div>

                <RelatedPosts currentSlug={post.slug} />
            </article>
        </>
    )
}
