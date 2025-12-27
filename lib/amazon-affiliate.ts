// Amazon affiliate configuration and utilities

export const AMAZON_ASSOCIATE_TAG = 'realminj-21';

export const AFFILIATE_DISCLOSURE =
    'This website contains affiliate links. As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.';

/**
 * Generates an Amazon affiliate link with the tracking tag
 * @param productId - Amazon product ASIN or product URL
 * @returns Complete affiliate link with tracking tag
 */
export function generateAmazonLink(productId: string): string {
    // If it's already a full URL
    if (productId.startsWith('http')) {
        const url = new URL(productId);
        url.searchParams.set('tag', AMAZON_ASSOCIATE_TAG);
        return url.toString();
    }

    // If it's just an ASIN
    return `https://www.amazon.in/dp/${productId}?tag=${AMAZON_ASSOCIATE_TAG}`;
}

/**
 * Checks if a URL is an Amazon link
 */
export function isAmazonLink(url: string): boolean {
    return url.includes('amazon.in') || url.includes('amazon.com');
}

/**
 * Ensures an Amazon link has the correct affiliate tag
 */
export function ensureAffiliateTag(url: string): string {
    if (!isAmazonLink(url)) {
        return url;
    }

    try {
        const urlObj = new URL(url);
        urlObj.searchParams.set('tag', AMAZON_ASSOCIATE_TAG);
        return urlObj.toString();
    } catch {
        return url;
    }
}

/**
 * Product link configuration for common smartphones
 * In a real application, this would come from a database
 */
export interface ProductLink {
    name: string;
    asin: string;
    category: string;
}

export const FEATURED_PRODUCTS: ProductLink[] = [
    {
        name: 'Example Smartphone',
        asin: 'B08EXAMPLE',
        category: 'Smartphones',
    },
    // Add more products as needed
];

/**
 * Get Amazon link for a product by name
 */
export function getProductAmazonLink(productName: string): string | null {
    const product = FEATURED_PRODUCTS.find(p =>
        p.name.toLowerCase().includes(productName.toLowerCase())
    );

    if (!product) {
        return null;
    }

    return generateAmazonLink(product.asin);
}
