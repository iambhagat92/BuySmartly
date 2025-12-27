// JSON-LD Schema generation utilities for SEO

import { BlogPost, FAQ } from './types';

/**
 * Generates BlogPosting schema for blog articles
 */
export function generateBlogPostingSchema(post: BlogPost, url: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.featuredImage,
        datePublished: post.publishDate,
        dateModified: post.updateDate || post.publishDate,
        author: {
            '@type': 'Organization',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Buy Smartly',
            logo: {
                '@type': 'ImageObject',
                url: 'https://buysmartly.com/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    };
}

/**
 * Generates FAQ schema for FAQ sections
 */
export function generateFAQSchema(faqs: FAQ[]) {
    if (!faqs || faqs.length === 0) {
        return null;
    }

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generates Breadcrumb schema for navigation
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * Generates ItemList schema for "best of" lists
 */
export function generateItemListSchema(
    items: Array<{ name: string; description: string; position: number }>,
    listName: string,
    url: string
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: listName,
        url: url,
        itemListElement: items.map(item => ({
            '@type': 'ListItem',
            position: item.position,
            item: {
                '@type': 'Product',
                name: item.name,
                description: item.description,
            },
        })),
    };
}

/**
 * Generates Organization schema for the website
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Buy Smartly',
        url: 'https://buysmartly.com',
        logo: 'https://buysmartly.com/logo.png',
        sameAs: [
            // Add social media links when available
        ],
    };
}

/**
 * Generates Product schema for individual product pages
 */
export function generateProductSchema(product: {
    name: string;
    description: string;
    image: string;
    brand: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image,
        brand: {
            '@type': 'Brand',
            name: product.brand,
        },
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: '0',
            highPrice: '0',
            offerCount: '0',
            availability: 'https://schema.org/InStock',
        },
    };
}

/**
 * Helper to render schema as JSON-LD script tag
 */
export function renderSchema(schema: object): string {
    return JSON.stringify(schema, null, 2);
}
