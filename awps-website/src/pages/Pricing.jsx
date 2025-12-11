import { Check, X, ArrowRight, Zap, Clock, Star, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [openFaq, setOpenFaq] = useState(null);

    const pricingTiers = [
        {
            name: 'Initial Consultation',
            price: '50,000',
            period: 'one-time',
            description: 'Perfect for businesses exploring payment optimization',
            features: [
                'Comprehensive payment system audit',
                '2-hour consultation session',
                'Written recommendations report',
                'Provider comparison analysis',
                'Cost savings projection',
                '30-day email support'
            ],
            notIncluded: [
                'Implementation support',
                'Ongoing optimization'
            ],
            cta: 'Book Consultation',
            gradient: 'from-blue-500 to-blue-600',
            popular: false
        },
        {
            name: 'Project-Based',
            price: '250,000',
            period: 'starting at',
            description: 'Ideal for businesses implementing new payment solutions',
            features: [
                'Everything in Consultation',
                'End-to-end implementation',
                'Provider negotiation support',
                'Technical integration guidance',
                'Testing and validation',
                'Staff training (up to 10 people)',
                '90-day post-launch support',
                'Performance monitoring setup'
            ],
            notIncluded: [],
            cta: 'Get Started',
            gradient: 'from-orange-500 to-orange-600',
            popular: true
        },
        {
            name: 'Monthly Retainer',
            price: '150,000',
            period: 'per month',
            description: 'Best for businesses requiring ongoing payment optimization',
            features: [
                'Everything in Project-Based',
                'Dedicated account manager',
                'Monthly strategy sessions',
                'Continuous optimization',
                'Priority support (24/7)',
                'Quarterly business reviews',
                'Cost reduction tracking',
                'Industry insights & updates',
                'Unlimited consultations'
            ],
            notIncluded: [],
            cta: 'Contact Sales',
            gradient: 'from-purple-500 to-purple-600',
            popular: false
        }
    ];

    const faqs = [
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept bank transfers (EFT), M-Pesa, and international wire transfers. Payment plans are available for Project-Based and Retainer packages.'
        },
        {
            question: 'Do you offer refunds?',
            answer: 'We offer a satisfaction guarantee. If you\'re not satisfied with your Initial Consultation, we\'ll refund 100% within 7 days. For Project-Based work, we structure payments in milestones.'
        },
        {
            question: 'Can I upgrade or downgrade my plan?',
            answer: 'Yes! You can upgrade from Consultation to Project-Based at any time. Retainer clients can adjust their commitment with 30 days notice.'
        },
        {
            question: 'What if I need services across multiple countries?',
            answer: 'Our pricing covers operations in up to 3 African countries. Additional countries can be added for a supplementary fee based on complexity.'
        },
        {
            question: 'Do you offer discounts for startups or NGOs?',
            answer: 'Yes, we offer 20% discounts for early-stage startups (< 2 years old) and registered non-profits. Contact us for eligibility verification.'
        },
        {
            question: 'What happens after the contract period ends?',
            answer: 'For Project-Based work, you receive all deliverables and documentation. Retainer clients can continue month-to-month or pause services anytime with 30 days notice.'
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section - Redesigned Pattern & No Wave */}
            <section className="relative bg-gradient-to-br from-[#1B2A4E] via-[#1a2847] to-[#0f1829] text-white py-12 sm:py-20 lg:py-32 overflow-hidden">
                {/* Animated Geometric Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-[#F89542] rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
                    <div className="absolute top-20 right-20 w-96 h-96 bg-[#F89542] rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-[#F89542] rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Glowing Orbs */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-[#F89542] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F89542] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up">
                            <Star className="w-4 h-4 text-[#F89542]" />
                            <span className="text-sm font-medium">Transparent, Value-Based Pricing</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Simple, <span className="text-[#F89542]">Fair Pricing</span>
                        </h1>
                        <p className="text-base sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Choose the package that fits your business needs. All prices in Kenyan Shillings (KES). No hidden fees.
                        </p>
                    </div>
                </div>

                {/* Subtle Gradient Fade at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F9FA] to-transparent opacity-10"></div>
            </section>

            {/* Pricing Cards - Light Gray Background */}
            <section className="py-12 sm:py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up ${tier.popular
                                        ? 'border-[#F89542] lg:-mt-4 lg:mb-4'
                                        : 'border-gray-100'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white px-6 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2">
                                            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                                            MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-6 sm:mb-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B2A4E] mb-3">
                                        {tier.name}
                                    </h3>
                                    <div className="flex items-baseline justify-center gap-2 mb-2">
                                        <span className="text-sm text-gray-600">KES</span>
                                        <span className="text-4xl sm:text-5xl font-extrabold text-[#1B2A4E]">
                                            {tier.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 font-medium">{tier.period}</p>
                                    <p className="text-sm sm:text-base text-gray-700 mt-4 leading-relaxed">
                                        {tier.description}
                                    </p>
                                </div>

                                <Link
                                    to="/contact"
                                    className={`block w-full text-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg mb-6 sm:mb-8 transition-all duration-300 ${tier.popular
                                            ? 'bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white hover:shadow-xl hover:scale-105'
                                            : 'bg-[#1B2A4E] text-white hover:bg-[#F89542]'
                                        }`}
                                >
                                    {tier.cta}
                                </Link>

                                <div className="space-y-3 sm:space-y-4 mb-6">
                                    <p className="text-xs sm:text-sm font-bold text-[#1B2A4E] uppercase tracking-wide">
                                        What's Included:
                                    </p>
                                    {tier.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600" />
                                            </div>
                                            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                    {tier.notIncluded.length > 0 && (
                                        <>
                                            {tier.notIncluded.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-3 opacity-50">
                                                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400" />
                                                    </div>
                                                    <span className="text-gray-500 text-xs sm:text-sm leading-relaxed">{feature}</span>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-xs sm:text-sm text-gray-400 mt-12">
            /* PLACEHOLDER PRICING - Client to provide actual pricing structure */
                    </p>
                </div>
            </section>

            {/* Enterprise Section - White Background */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-[#1B2A4E] to-[#0f1829] rounded-3xl p-8 sm:p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F89542] rounded-full blur-3xl animate-pulse"></div>
                            </div>

                            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                                        <Zap className="w-4 h-4 text-[#F89542]" />
                                        <span className="text-sm font-medium">Custom Solutions</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
                                        Enterprise Solutions
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                                        For large organizations with complex payment needs across multiple African markets
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 bg-[#F89542] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#1B2A4E] transition-all duration-300 shadow-lg"
                                    >
                                        Contact Sales
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        'Dedicated team of payment experts',
                                        'White-glove implementation support',
                                        'Custom SLA agreements',
                                        'Multi-country payment strategy',
                                        'Executive quarterly reviews',
                                        'Priority 24/7 support'
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-300">
                                            <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#F89542] flex-shrink-0" />
                                            <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Light Blue Tint Background */}
            <section className="py-12 sm:py-20 bg-[#F0F7FF]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl sm:text-5xl font-extrabold text-[#1B2A4E] mb-4">
                                Pricing <span className="text-[#F89542]">FAQs</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600">
                                Common questions about our pricing and packages
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-base sm:text-lg font-bold text-[#1B2A4E] pr-8">
                                            {faq.question}
                                        </span>
                                        <HelpCircle
                                            className={`w-5 h-5 sm:w-6 sm:h-6 text-[#F89542] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-6 pb-5 sm:px-8 sm:pb-6">
                                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-600 mb-6">Still have questions?</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-[#1B2A4E] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#F89542] transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-20 bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-base sm:text-xl mb-10 max-w-2xl mx-auto opacity-95">
                        Schedule a free discovery call to discuss which package is right for you
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-[#F89542] px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-[#1B2A4E] hover:text-white transition-all duration-300 shadow-2xl hover:scale-105"
                    >
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
