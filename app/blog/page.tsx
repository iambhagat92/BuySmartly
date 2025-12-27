import { getAllPosts, getCategoriesWithCounts } from '@/lib/blog-data'
import BlogCard from '@/components/BlogCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog - Expert Product Buying Guides & Reviews | Buy Smartly',
    description: 'Read expert buying guides, product comparisons, and educational articles about smartphones, electronics, and smart shopping.',
}

export default function BlogPage() {
    const posts = getAllPosts()
    const categories = getCategoriesWithCounts()

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Expert Buying Guides & Product Reviews
                </h1>
                <p className="text-xl text-slate-600">
                    In-depth articles to help you make informed purchase decisions
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
                        <h2 className="font-bold text-lg mb-4">Categories</h2>
                        <ul className="space-y-2">
                            {categories.map(cat => (
                                <li key={cat.name}>
                                    <a
                                        href={`#${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-primary-50 text-slate-700 hover:text-primary-700"
                                    >
                                        <span>{cat.name}</span>
                                        <span className="text-sm text-slate-500">{cat.count}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Blog Posts Grid */}
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {posts.map(post => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
