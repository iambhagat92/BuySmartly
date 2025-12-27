import Link from 'next/link'
import { getLatestPosts } from '@/lib/blog-data'
import BlogCard from '@/components/BlogCard'

export default function Home() {
    const latestPosts = getLatestPosts(6)

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Make Smarter Buying Decisions
                        </h1>
                        <p className="text-xl text-primary-100 mb-8">
                            Expert product comparisons, buying guides, and price analysis to help you find the best deals on smartphones and electronics.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link href="/blog" className="btn-primary">
                                Read Our Blog
                            </Link>
                            <Link href="/guides" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                                Buying Guides
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Blog Posts */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
                    <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
                        View all →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map(post => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="bg-slate-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                        Why Trust Buy Smartly?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Expert Research</h3>
                            <p className="text-slate-600">
                                Our team conducts thorough research and testing to provide honest, unbiased recommendations.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Price Transparency</h3>
                            <p className="text-slate-600">
                                We track prices across platforms to help you find genuine deals and avoid inflated discounts.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Educational Content</h3>
                            <p className="text-slate-600">
                                Learn how to evaluate products, understand specifications, and make informed decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
