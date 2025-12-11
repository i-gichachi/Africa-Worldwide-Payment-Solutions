import { Check, X, ArrowRight, Zap, Clock, Star, HelpCircle, MessageCircle, ChevronDown, Building2, TrendingUp, Briefcase, Sparkles, Crown, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Pricing() {
    const [openFaq, setOpenFaq] = useState(null);

    const pricingTiers = [
        {
            name: 'Starter',
            badge: 'For Small Businesses',
            icon: Building2,
            price: '49,999',
            period: '/month',
            description: 'Perfect for small businesses starting their payment optimization journey',
            features: [
                'Initial payment system audit',
                'Basic provider comparison',
                'Email support (48h response)',
                'Monthly performance report'
            ],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Professional',
            badge: 'For Growing Businesses',
            icon: TrendingUp,
            price: '99,999',
            period: '/month',
            description: 'Comprehensive solutions for businesses ready to scale',
            features: [
                'Everything in Starter',
                'Advanced provider negotiation',
                'Priority email & phone support',
                'Bi-weekly strategy calls',
                'Fraud prevention setup',
                'Technical integration support'
            ],
            cta: 'Get Started',
            popular: true
        },
        {
            name: 'Enterprise',
            badge: 'For Large Organizations',
            icon: Briefcase,
            price: 'Custom',
            period: '',
            description: 'Tailored solutions for complex, multi-country operations',
            features: [
                'Everything in Professional',
                'Dedicated account manager',
                '24/7 priority support',
                'Custom SLA agreement',
                'Multi-country strategy',
                'On-site training workshops'
            ],
            cta: 'Contact Sales',
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

    const enterpriseFeatures = [
        { icon: Zap, title: 'Dedicated Account Manager', description: 'Your personal point of contact for all payment needs' },
        { icon: Shield, title: 'Custom SLA Agreements', description: 'Guaranteed response times and performance metrics' },
        { icon: Crown, title: 'Multi-Country Strategy', description: 'Unified payment solutions across borders' },
        { icon: MessageCircle, title: 'On-Site Training', description: 'Hands-on workshops for your finance team' },
        { icon: Star, title: 'Quarterly Business Reviews', description: 'Strategic planning and performance analysis' },
        { icon: Clock, title: 'Priority 24/7 Support', description: 'Round-the-clock assistance for critical issues' }
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            {/* Hero Section - Clean White */}
            <section className="relative bg-white pt-20 pb-12 md:pt-32 md:pb-20 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Accent line */}
                        <div className="w-16 h-1 md:w-20 bg-gradient-to-r from-[#F89542] to-orange-300 mx-auto mb-6"></div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A4E] mb-4 md:mb-6">
                            <span className="text-[#F89542]">Transparent</span> Pricing
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Choose the perfect package for your business needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers - Sophisticated Cards */}
            <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-start">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm transition-all duration-500 group ${tier.popular
                                    ? 'border-4 border-[#F89542] md:scale-105 shadow-2xl hover:scale-110 z-10'
                                    : 'border-2 border-gray-200 hover:shadow-xl'
                                    }`}
                            >
                                {/* Background Effects */}
                                {tier.popular ? (
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-orange-50/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                )}

                                {/* Most Popular Badge */}
                                {tier.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#F89542] to-orange-400 rounded-full blur-md"></div>
                                            <div className="relative bg-gradient-to-r from-[#F89542] to-orange-400 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold shadow-xl flex items-center gap-2">
                                                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className={`relative z-10 ${tier.popular ? 'mt-4' : ''}`}>
                                    {/* Tier badge with icon */}
                                    <div className={`flex items-center gap-2 text-xs md:text-sm font-semibold mb-4 ${tier.popular ? 'text-[#F89542]' : 'text-gray-600'}`}>
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tier.popular ? 'bg-gradient-to-br from-orange-50 to-orange-100' : 'bg-gray-100'}`}>
                                            <tier.icon className={`w-4 h-4 ${tier.popular ? 'text-[#F89542]' : 'text-gray-600'}`} />
                                        </div>
                                        <span>{tier.badge}</span>
                                    </div>

                                    {/* Tier name */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#1B2A4E] mb-4">
                                        {tier.name}
                                    </h3>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2">
                                            {tier.price !== 'Custom' && <span className="text-sm text-gray-500 font-medium">KES</span>}
                                            <span className={`text-4xl md:text-5xl font-bold ${tier.popular ? 'bg-gradient-to-r from-[#1B2A4E] to-[#2a3f6e] bg-clip-text text-transparent' : 'text-[#1B2A4E]'}`}>
                                                {tier.price}
                                            </span>
                                            <span className="text-gray-600 font-medium text-sm">{tier.period}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-8 text-sm leading-relaxed min-h-[40px]">
                                        {tier.description}
                                    </p>

                                    {/* CTA Button */}
                                    <Link
                                        to="/contact"
                                        className={`w-full block text-center px-6 py-4 rounded-xl font-bold transition-all duration-300 mb-8 group/btn text-sm md:text-base ${tier.popular
                                            ? 'bg-gradient-to-r from-[#F89542] to-orange-400 text-white hover:from-[#e8854a] hover:to-orange-500 shadow-xl hover:shadow-2xl hover:scale-105'
                                            : 'bg-white border-2 border-[#1B2A4E] text-[#1B2A4E] hover:bg-[#1B2A4E] hover:text-white'
                                            }`}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            {tier.cta}
                                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>

                                    {/* Divider */}
                                    <div className={`border-t mb-6 ${tier.popular ? 'border-orange-200' : 'border-gray-200'}`}></div>

                                    {/* Features */}
                                    <div className="space-y-4">
                                        {tier.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3 group/item">
                                                <div className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center mt-0.5 transition-transform group-hover/item:scale-110 ${tier.popular
                                                    ? 'bg-gradient-to-br from-[#F89542] to-orange-400 shadow-md'
                                                    : 'bg-gradient-to-br from-orange-50 to-orange-100'
                                                    }`}>
                                                    <Check className={`w-3 h-3 md:w-4 md:h-4 font-bold ${tier.popular ? 'text-white' : 'text-[#F89542]'}`} />
                                                </div>
                                                <span className="text-xs md:text-sm text-gray-700 leading-relaxed font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise Features - Sophisticated */}
            <section className="py-12 md:py-20 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12">

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-4">
                            Enterprise-Grade Solutions
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            For organizations with complex requirements
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {enterpriseFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#F89542]" />
                                </div>
                                <h3 className="text-base md:text-lg font-bold text-[#1B2A4E] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs - Sophisticated Styling */}
            <section className="py-12 md:py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-3 md:mb-4">
                                Pricing <span className="text-[#F89542]">FAQs</span>
                            </h2>
                            <p className="text-sm md:text-base text-gray-600">
                                Common questions about our packages
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between text-left group"
                                    >
                                        <span className="text-sm md:text-base font-bold text-[#1B2A4E] pr-8 group-hover:text-[#F89542] transition-colors">
                                            {faq.question}
                                        </span>
                                        <div className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-50 flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-[#F89542]' : ''}`}>
                                            <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${openFaq === index ? 'text-white' : 'text-[#F89542]'}`} />
                                        </div>
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-5 pb-5 md:px-6 md:pb-6 animate-fadeIn">
                                            <div className="pt-2 border-t border-gray-100">
                                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-3 md:mt-4">{faq.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA - Premium Card Wrapper */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 rounded-3xl blur-3xl opacity-20"></div>

                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-16 shadow-2xl text-center">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B2A4E] mb-4 md:mb-6">
                                    Ready to Get Started?
                                </h2>
                                <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Schedule a free discovery call to discuss which package is right for your business
                                </p>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F89542] to-orange-400 text-white px-8 py-4 md:px-12 md:py-5 rounded-xl font-bold text-base md:text-lg hover:from-[#e8854a] hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                                >
                                    <Clock className="w-5 h-5 md:w-6 md:h-6" />
                                    <span>Book Free Consultation</span>
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                </Link>

                                {/* Trust indicator */}
                                <p className="text-xs md:text-sm text-gray-500 mt-6 md:mt-8 flex items-center justify-center gap-2">
                                    <Shield className="w-3 h-3 md:w-4 md:h-4" />
                                    <span>No commitment required • 30-minute session</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
