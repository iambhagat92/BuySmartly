import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { generateOrganizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
    title: 'Buy Smartly - Expert Product Comparisons & Buying Guides',
    description: 'Make informed purchase decisions with our expert product comparisons, buying guides, and price analysis. Find the best deals on smartphones and electronics.',
    keywords: 'price comparison, product reviews, buying guides, smartphones, electronics, best deals',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateOrganizationSchema()),
                    }}
                />
            </head>
            <body>
                <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <Link href="/" className="text-2xl font-bold text-primary-600">
                                Buy Smartly
                            </Link>
                            <div className="flex gap-6">
                                <Link href="/blog" className="text-slate-700 hover:text-primary-600 font-medium">
                                    Blog
                                </Link>
                                <Link href="/guides" className="text-slate-700 hover:text-primary-600 font-medium">
                                    Guides
                                </Link>
                                <Link href="/best" className="text-slate-700 hover:text-primary-600 font-medium">
                                    Best Lists
                                </Link>
                                <Link href="/about" className="text-slate-700 hover:text-primary-600 font-medium">
                                    About
                                </Link>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>{children}</main>
                <footer className="bg-slate-900 text-white mt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Buy Smartly</h3>
                                <p className="text-slate-300 text-sm">
                                    Expert product comparisons and buying guides to help you make informed decisions.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Resources</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/blog" className="text-slate-300 hover:text-white">Blog</Link></li>
                                    <li><Link href="/guides" className="text-slate-300 hover:text-white">Buying Guides</Link></li>
                                    <li><Link href="/best" className="text-slate-300 hover:text-white">Best Lists</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Company</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/about" className="text-slate-300 hover:text-white">About Us</Link></li>
                                    <li><Link href="/how-we-research" className="text-slate-300 hover:text-white">How We Research</Link></li>
                                    <li><Link href="/editorial-policy" className="text-slate-300 hover:text-white">Editorial Policy</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Legal</h4>
                                <p className="text-slate-300 text-xs">
                                    This website contains affiliate links. As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
                            <p>&copy; {new Date().getFullYear()} Buy Smartly. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
