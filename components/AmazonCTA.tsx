import Link from 'next/link';
import { generateAmazonLink } from '@/lib/amazon-affiliate';

interface AmazonCTAProps {
    productUrl?: string;
    productId?: string;
    text?: string;
}

export default function AmazonCTA({
    productUrl,
    productId,
    text = 'Check Latest Price on Amazon'
}: AmazonCTAProps) {
    const link = productUrl
        ? generateAmazonLink(productUrl)
        : productId
            ? generateAmazonLink(productId)
            : '#';

    return (
        <Link
            href={link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="affiliate-link"
        >
            <span>{text}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </Link>
    );
}
