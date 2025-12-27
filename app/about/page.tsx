import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us | Buy Smartly',
    description: 'Learn about Buy Smartly, our mission to help consumers make informed purchase decisions through expert research and honest reviews.',
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">About Buy Smartly</h1>

            <div className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 mb-8">
                    We&apos;re dedicated to helping you make smarter buying decisions through expert product research,
                    honest comparisons, and educational content.
                </p>

                <h2>Our Mission</h2>
                <p>
                    In an era of overwhelming choice and aggressive marketing, consumers need trustworthy guidance
                    more than ever. Buy Smartly exists to cut through the noise and provide clear, honest,
                    research-backed product recommendations.
                </p>

                <h2>How We Work</h2>
                <p>
                    Our editorial team conducts in-depth research on products, tracks prices across multiple platforms,
                    analyzes specifications, reads user reviews, and compares alternatives. We focus on real-world value
                    rather than marketing hype.
                </p>

                <h3>Our Process</h3>
                <ul>
                    <li>Comprehensive market research and price tracking</li>
                    <li>Specification analysis and real-world testing when possible</li>
                    <li>User review aggregation and sentiment analysis</li>
                    <li>Comparison with competing products</li>
                    <li>Clear, jargon-free presentation of findings</li>
                </ul>

                <h2>Editorial Independence</h2>
                <p>
                    While we participate in affiliate programs (including the Amazon Associates Program), our editorial
                    decisions are never influenced by potential commissions. We recommend products we genuinely believe
                    offer the best value, regardless of affiliate earnings potential.
                </p>

                <h2>Funding & Disclosure</h2>
                <p>
                    This website is funded through affiliate links. When you purchase a product through our links,
                    we may earn a commission at no extra cost to you. This allows us to provide free, high-quality
                    content while maintaining editorial independence.
                </p>

                <p className="bg-slate-50 border-l-4 border-primary-500 p-4 my-6">
                    <strong>Full Disclosure:</strong> This website contains affiliate links. As an Amazon Associate,
                    we earn from qualifying purchases at no extra cost to you.
                </p>

                <h2>Contact Us</h2>
                <p>
                    We value your feedback and suggestions. If you have questions about our research methodology,
                    want to suggest products to review, or have other inquiries, please reach out to us.
                </p>
            </div>
        </div>
    )
}
