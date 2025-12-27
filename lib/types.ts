// Content type definitions for the blog system

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    category: string;
    author: string;
    publishDate: string;
    updateDate?: string;
    featuredImage: string;
    tags: string[];
    excerpt: string;
    readingTime?: number;
}

export interface InternalLink {
    anchor: string;
    url: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

// Content categories
export const CATEGORIES = {
    BUYING_GUIDE: 'Buying Guides',
    COMPARISON: 'Comparisons',
    BEST_LIST: 'Best Lists',
    EDUCATION: 'Educational',
    FAQ: 'FAQ & Help',
} as const;

export type CategoryType = typeof CATEGORIES[keyof typeof CATEGORIES];
