import { BlogPost, CATEGORIES } from './types';

// Sample blog posts - in production, these would come from a CMS or markdown files
export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'how-to-choose-smartphone-2025',
        title: 'How to Choose the Right Smartphone in 2025',
        description: 'Complete guide to selecting the perfect smartphone based on your needs, budget, and preferences in 2025.',
        excerpt: 'Choosing the right smartphone can be overwhelming with so many options. This expert guide breaks down everything you need to know.',
        category: CATEGORIES.BUYING_GUIDE,
        author: 'Editorial Team',
        publishDate: '2025-01-15',
        featuredImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
        tags: ['smartphone', 'buying-guide', 'mobile', '2025'],
        readingTime: 12,
    },
    {
        slug: 'things-check-buying-phone-online',
        title: 'Essential Checklist: Buying Phones Online Safely',
        description: 'Everything you need to verify before purchasing a smartphone online to avoid scams and ensure authenticity.',
        excerpt: 'Online phone shopping offers great deals, but requires caution. Follow this comprehensive checklist for a safe purchase.',
        category: CATEGORIES.BUYING_GUIDE,
        author: 'Editorial Team',
        publishDate: '2025-01-20',
        featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
        tags: ['online-shopping', 'safety', 'smartphone', 'checklist'],
        readingTime: 10,
    },
    {
        slug: 'why-phone-prices-change-online',
        title: 'Why Do Phone Prices Change So Frequently Online?',
        description: 'Understanding dynamic pricing, algorithms, and market factors that cause smartphone prices to fluctuate on e-commerce platforms.',
        excerpt: 'Ever noticed phone prices changing multiple times a day? Learn the science behind dynamic pricing and how to get the best deals.',
        category: CATEGORIES.EDUCATION,
        author: 'Editorial Team',
        publishDate: '2025-01-18',
        featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        tags: ['pricing', 'online-shopping', 'education', 'deals'],
        readingTime: 8,
    },
    {
        slug: 'is-buying-phones-online-safe',
        title: 'Is Buying Phones Online Safe? Complete Safety Guide',
        description: 'Expert analysis of online smartphone shopping safety, including how to avoid scams and protect yourself.',
        excerpt: 'Millions buy phones online safely every day. Learn how to join them with proper precautions and smart shopping habits.',
        category: CATEGORIES.FAQ,
        author: 'Editorial Team',
        publishDate: '2025-01-22',
        featuredImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
        tags: ['safety', 'faq', 'online-shopping', 'consumer-protection'],
        readingTime: 15,
    },
    {
        slug: 'oneplus-vs-samsung-mid-range',
        title: 'OnePlus vs Samsung Mid-Range Phones: Which Should You Buy?',
        description: 'Detailed comparison of OnePlus and Samsung mid-range smartphones covering performance, camera, battery, and value.',
        excerpt: 'Both OnePlus and Samsung offer excellent mid-range phones. We compare them across key parameters to help you decide.',
        category: CATEGORIES.COMPARISON,
        author: 'Editorial Team',
        publishDate: '2025-01-25',
        featuredImage: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e8a3?w=800',
        tags: ['oneplus', 'samsung', 'comparison', 'mid-range'],
        readingTime: 10,
    },
];

// Get all posts
export function getAllPosts(): BlogPost[] {
    return BLOG_POSTS.sort(
        (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

// Get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find(post => post.slug === slug);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
    return BLOG_POSTS.filter(post => post.category === category).sort(
        (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

// Get related posts
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
    const currentPost = getPostBySlug(currentSlug);
    if (!currentPost) return [];

    const allPosts = BLOG_POSTS.filter(p => p.slug !== currentSlug);

    // Score posts based on relevance
    const scoredPosts = allPosts.map(post => {
        let score = 0;

        // Same category
        if (post.category === currentPost.category) score += 10;

        // Shared tags
        const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
        score += sharedTags.length * 5;

        return { post, score };
    });

    return scoredPosts
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.post);
}

// Get latest posts
export function getLatestPosts(limit: number = 6): BlogPost[] {
    return getAllPosts().slice(0, limit);
}

// Get all categories with post counts
export function getCategoriesWithCounts(): Array<{ name: string; count: number }> {
    const categoryCounts = new Map<string, number>();

    BLOG_POSTS.forEach(post => {
        categoryCounts.set(post.category, (categoryCounts.get(post.category) || 0) + 1);
    });

    return Array.from(categoryCounts.entries()).map(([name, count]) => ({
        name,
        count,
    }));
}
