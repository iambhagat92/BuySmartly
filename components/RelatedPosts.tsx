import Link from 'next/link';
import { getRelatedPosts } from '@/lib/blog-data';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
    currentSlug: string;
    limit?: number;
}

export default function RelatedPosts({ currentSlug, limit = 3 }: RelatedPostsProps) {
    const relatedPosts = getRelatedPosts(currentSlug, limit);

    if (relatedPosts.length === 0) {
        return null;
    }

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(post => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
}
