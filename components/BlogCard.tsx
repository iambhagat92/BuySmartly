import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';
import { format } from 'date-fns';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="card-hover block">
            <article className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                <div className="relative h-48 w-full">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                            {post.category}
                        </span>
                        <span className="text-sm text-slate-500">
                            {format(new Date(post.publishDate), 'MMM d, yyyy')}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-slate-600 line-clamp-3 mb-4">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">
                            {post.readingTime} min read
                        </span>
                        <span className="text-primary-600 font-medium text-sm hover:text-primary-700">
                            Read more →
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
