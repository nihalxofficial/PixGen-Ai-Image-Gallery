import Link from 'next/link';

export const metadata= {
    title: 'Pricing | AI Gallery',
    description: 'Choose the perfect plan for your AI image generation needs.',
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Generate stunning AI images with flexible plans for everyone.
                        Start free and upgrade as you grow.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Free</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Perfect for trying things out</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-5xl font-bold text-gray-900 dark:text-white">$0</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    10 image generations per day
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Basic resolution (512x512)
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Standard generation speed
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Community support
                                </li>
                            </ul>
                            <Link href="/signup">
                                <button className="w-full cursor-pointer py-3 px-4 rounded-xl font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border-2 border-purple-500 dark:border-purple-400 overflow-hidden relative hover:shadow-2xl transition-shadow">
                        <div className="absolute top-0 right-0">
                            <div className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                POPULAR
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pro</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Best for creators & designers</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-5xl font-bold text-gray-900 dark:text-white">$12</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    500 image generations per month
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    HD resolution (1024x1024)
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Priority generation speed
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Advanced AI models (SDXL, DALL-E 3)
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Remove background & upscale
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Email support within 24h
                                </li>
                            </ul>
                            <Link href="/signup?plan=pro">
                                <button className="w-full cursor-pointer py-3 px-4 rounded-xl font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/25">
                                    Start Pro Trial
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">For teams & large scale projects</p>
                            </div>
                            <div className="text-center mb-6">
                                <span className="text-5xl font-bold text-gray-900 dark:text-white">Custom</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Unlimited generations
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    4K resolution & batch processing
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Dedicated GPU instances
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    API access & webhooks
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    SSO & advanced security
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Priority 24/7 phone support
                                </li>
                            </ul>
                            <Link href="/contact">
                                <button className="w-full cursor-pointer py-3 px-4 rounded-xl font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    Contact Sales
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mt-20">
                    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Can I cancel my subscription anytime?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Yes, you can cancel or change your plan at any time. No hidden fees or long-term contracts.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Do I own the images I generate?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Absolutely! You retain full commercial rights to all images generated with our platform.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                What payment methods do you accept?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                We accept all major credit cards, PayPal, and cryptocurrency for Pro and Enterprise plans.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Is there a free trial for Pro?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Yes, we offer a 7-day free trial on the Pro plan. No credit card required to start.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        🔒 Secure payments • 30-day money-back guarantee • Cancel anytime
                    </p>
                </div>
            </div>
        </div>
    );
}