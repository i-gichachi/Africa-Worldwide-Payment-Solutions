import { CreditCard, Smartphone, Globe as GlobeIcon, BarChart3, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        {
            icon: CreditCard,
            title: 'Payment Gateway Consulting',
            description: 'Expert guidance on selecting and implementing the right payment gateways for your business needs.',
            features: [
                'Gateway selection and vendor comparison',
                'Rate negotiation and cost optimization',
                'Technical integration support',
                'PCI DSS compliance guidance'
            ]
        },
        {
            icon: Smartphone,
            title: 'Mobile Money Integration',
            description: 'Seamless integration with major mobile money providers across Africa including M-Pesa and Airtel Money.',
            features: [
                'Multi-provider integration',
                'API implementation and testing',
                'Reconciliation system setup',
                'Transaction monitoring'
            ]
        },
        {
            icon: TrendingUp,
            title: 'Payment Optimization',
            description: 'Data-driven strategies to increase transaction success rates and reduce processing costs.',
            features: [
                'Payment performance analysis',
                'Success rate optimization',
                'Fraud detection strategies',
                'Real-time reporting dashboards'
            ]
        }
    ];

    const steps = [
        { title: "Discovery", desc: "We analyze your current infrastructure and business goals." },
        { title: "Strategy", desc: "We design a tailored payment roadmap and architecture." },
        { title: "Implementation", desc: "Seamless integration and rigorous testing of solutions." },
        { title: "Optimization", desc: "Continuous monitoring and performance tuning." }
    ];

    const reasons = [
        { icon: GlobeIcon, title: "Pan-African Expertise", desc: "Deep understanding of payment ecosystems across 12+ African countries." },
        { icon: Shield, title: "Vendor Neutral", desc: "Unbiased recommendations based solely on your business needs." },
        { icon: TrendingUp, title: "Proven Results", desc: "Track record of helping businesses optimize payment operations." },
        { icon: Users, title: "Dedicated Support", desc: "Ongoing partnership to ensure continued success." }
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            {/* Hero Section - Clean White */}
            <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-20 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Accent line */}
                        <div className="w-16 h-1 md:w-20 bg-gradient-to-r from-[#F89542] to-orange-300 mx-auto mb-6"></div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A4E] mb-4 md:mb-6">
                            Our <span className="text-[#F89542]">Services</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Comprehensive payment solutions tailored for the African market
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services Section - Premium Cards */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index}>
                                <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        {/* Icon with premium styling */}
                                        <div className="flex-shrink-0">
                                            <div className="relative">
                                                {/* Subtle background glow */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center border border-orange-100 group-hover:scale-105 transition-transform duration-300">
                                                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-[#F89542]" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            {/* Subtle number badge */}
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-xs font-semibold text-[#F89542] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                                                    Service 0{index + 1}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold text-[#1B2A4E] mb-4 leading-tight">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                                                {service.description}
                                            </p>

                                            {/* Features with better styling */}
                                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 group/item">
                                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center mt-0.5">
                                                            <CheckCircle className="w-4 h-4 text-[#F89542]" />
                                                        </div>
                                                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Premium CTA link */}
                                            <Link to="/contact" className="inline-flex items-center gap-2 text-[#F89542] font-semibold text-base hover:gap-3 transition-all group/link">
                                                <span>Learn More</span>
                                                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider between cards (except last one) */}
                                {index < services.length - 1 && (
                                    <div className="relative py-12 md:py-16">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-100"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <div className="bg-white px-4">
                                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F89542] to-orange-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work Section - Sophisticated */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header with accent */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-6">
                            <div className="w-2 h-2 rounded-full bg-[#F89542] animate-pulse"></div>
                            <span className="text-sm font-semibold text-[#F89542]">Our Process</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4E] mb-4">
                            How We Work
                        </h2>
                        <p className="text-lg text-gray-600">
                            A proven approach to transforming your payment infrastructure
                        </p>
                    </div>

                    {/* Steps with connecting lines */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Desktop connecting line */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 opacity-30"></div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {steps.map((step, index) => (
                                <div key={index} className="text-center group">
                                    {/* Number badge with premium styling */}
                                    <div className="relative inline-block mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#F89542] to-orange-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                        <div className="relative w-16 h-16 mx-auto rounded-full bg-white border-4 border-[#F89542] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                                            <span className="text-2xl font-bold text-[#1B2A4E]">{index + 1}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-[#1B2A4E] mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services - Sophisticated */}
            <section className="py-16 md:py-20 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4E] mb-4">
                            Why Choose Our Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Expertise that delivers measurable results
                        </p>
                    </div>

                    {/* Reasons grid with hover effects */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {reasons.map((item, index) => (
                            <div key={index} className="text-center group cursor-default">
                                {/* Icon with sophisticated background */}
                                <div className="relative inline-block mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-orange-50 to-white rounded-2xl flex items-center justify-center border border-orange-100 group-hover:border-[#F89542] transition-all duration-300">
                                        <item.icon className="w-8 h-8 text-[#F89542] group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-[#1B2A4E] mb-3 group-hover:text-[#F89542] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - Premium Styling */}
            <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Premium card wrapper */}
                        <div className="relative">
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 rounded-3xl blur-2xl opacity-30"></div>

                            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 md:p-16 shadow-xl">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2A4E] mb-6 leading-tight">
                                    Ready to Optimize Your Payment Systems?
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                    Let's discuss how our services can help your business grow and scale across Africa
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Link to="/contact" className="bg-[#F89542] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#e8854a] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                                        <span>Get Started</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link to="/pricing" className="border-2 border-[#1B2A4E] text-[#1B2A4E] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1B2A4E] hover:text-white transition-all duration-300">
                                        View Pricing
                                    </Link>
                                </div>

                                {/* Trust indicator */}
                                <p className="text-sm text-gray-500 mt-8">
                                    Join 1,200+ businesses optimizing their payments with AWPS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
