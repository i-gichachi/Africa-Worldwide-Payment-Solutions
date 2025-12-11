import { CreditCard, Smartphone, Globe as GlobeIcon, BarChart3, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        {
            icon: CreditCard,
            title: 'Payment Gateway Consulting',
            shortDesc: 'Expert guidance on selecting, implementing, and optimizing payment gateways for African businesses.',
            longDesc: 'Navigate the complex landscape of payment gateways with confidence. We help you choose the right provider, negotiate favorable rates, and implement solutions that maximize acceptance rates while minimizing costs.',
            features: [
                'Gateway selection and vendor comparison',
                'Rate negotiation and cost optimization',
                'Technical integration support',
                'PCI DSS compliance guidance',
                'Multi-channel payment acceptance',
                'Fraud prevention strategy'
            ],
            benefits: [
                'Reduce payment processing costs by up to 30%',
                'Increase payment acceptance rates',
                'Accept payments from multiple countries',
                'Ensure regulatory compliance'
            ],
            gradient: 'from-blue-500 to-blue-600',
            bgGradient: 'from-blue-50 to-blue-100/50'
        },
        {
            icon: Smartphone,
            title: 'Mobile Money Integration',
            shortDesc: 'Tap into Africa\'s mobile money revolution with seamless integration across major providers.',
            longDesc: 'Mobile money is the backbone of digital payments in Africa. We help you integrate with M-Pesa, Airtel Money, MTN Mobile Money, and other providers to reach millions of customers across the continent.',
            features: [
                'Multi-provider integration (M-Pesa, Airtel, MTN)',
                'API implementation and testing',
                'Reconciliation system setup',
                'Transaction monitoring and reporting',
                'Customer experience optimization',
                'Compliance and regulatory guidance'
            ],
            benefits: [
                'Reach 80% of African consumers',
                'Reduce cash handling costs',
                'Enable instant settlements',
                'Expand to new markets quickly'
            ],
            gradient: 'from-green-500 to-green-600',
            bgGradient: 'from-green-50 to-green-100/50'
        },
        {
            icon: GlobeIcon,
            title: 'Cross-Border Payment Solutions',
            shortDesc: 'Enable seamless payments across African borders and beyond with optimized currency conversion.',
            longDesc: 'Expand your business across Africa without payment barriers. We design cross-border payment strategies that minimize FX costs, reduce settlement times, and ensure compliance across multiple jurisdictions.',
            features: [
                'Multi-currency payment acceptance',
                'Foreign exchange optimization',
                'Cross-border settlement strategy',
                'Regulatory compliance across countries',
                'Local payment method integration',
                'Currency hedging strategies'
            ],
            benefits: [
                'Operate in 12+ African countries',
                'Reduce FX conversion costs',
                'Faster cross-border settlements',
                'Simplified compliance management'
            ],
            gradient: 'from-purple-500 to-purple-600',
            bgGradient: 'from-purple-50 to-purple-100/50'
        },
        {
            icon: BarChart3,
            title: 'Payment Optimization & Analytics',
            shortDesc: 'Transform your payment operations with data-driven insights and continuous optimization.',
            longDesc: 'Turn your payment data into actionable insights. We analyze your payment flows, identify bottlenecks, and implement optimization strategies that reduce costs and improve customer experience.',
            features: [
                'Payment performance analysis',
                'Cost reduction strategies',
                'Success rate optimization',
                'Customer experience improvement',
                'Fraud detection and prevention',
                'Real-time reporting dashboards'
            ],
            benefits: [
                'Increase payment success rates by 15-25%',
                'Reduce total payment costs',
                'Improve customer conversion',
                'Data-driven decision making'
            ],
            gradient: 'from-orange-500 to-orange-600',
            bgGradient: 'from-orange-50 to-orange-100/50'
        }
    ];

    const whyChoose = [
        {
            icon: Award,
            title: 'Deep Expertise',
            description: 'Over 12 years of experience in African payment systems across 12+ countries'
        },
        {
            icon: Users,
            title: 'Client-Focused',
            description: 'We tailor solutions to your specific business needs and challenges'
        },
        {
            icon: Shield,
            title: 'Vendor Neutral',
            description: 'Unbiased recommendations focused solely on your best interests'
        },
        {
            icon: TrendingUp,
            title: 'Proven Results',
            description: 'Track record of reducing costs by 30% and increasing success rates'
        }
    ];

    // Background colors for alternating sections
    const getSectionBg = (index) => {
        switch (index % 4) {
            case 0: return 'bg-white';
            case 1: return 'bg-[#F8F9FA]'; // Light Gray
            case 2: return 'bg-[#F0F7FF]'; // Light Blue Tint
            case 3: return 'bg-[#FFF5EB]'; // Light Orange Tint
            default: return 'bg-white';
        }
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section - Redesigned without bottom line */}
            <section className="relative bg-gradient-to-br from-[#1B2A4E] via-[#1a2847] to-[#0f1829] text-white py-20 lg:py-32 overflow-hidden">
                {/* Geometric Pattern Background */}
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
                            <Zap className="w-4 h-4 text-[#F89542]" />
                            <span className="text-sm font-medium">Comprehensive Payment Solutions</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Our <span className="text-[#F89542]">Services</span>
                        </h1>
                        <p className="text-base sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Expert payment consulting services designed to help African businesses optimize their payment systems, reduce costs, and scale operations
                        </p>
                    </div>
                </div>

                {/* Subtle Gradient Fade at Bottom instead of Line */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-10"></div>
            </section>

            {/* Services Sections - Separate Full Width Sections */}
            <div className="flex flex-col">
                {services.map((service, index) => (
                    <section
                        key={index}
                        className={`py-16 lg:py-24 ${getSectionBg(index)} transition-colors duration-300`}
                    >
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}>
                                {/* Icon & Title Side */}
                                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in-up`}>
                                    <div className={`relative inline-block mb-6 sm:mb-8`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#F89542] to-[#ff9d5c] rounded-3xl transform rotate-6 opacity-20"></div>
                                        <div className={`relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-2xl`}>
                                            <service.icon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white" />
                                        </div>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#1B2A4E] mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                                        {service.longDesc}
                                    </p>

                                    <div className={`bg-gradient-to-br ${service.bgGradient} rounded-2xl p-6 mb-6 hover:shadow-lg transition-shadow duration-300`}>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#1B2A4E] mb-4 flex items-center gap-2">
                                            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#F89542]" />
                                            Key Benefits
                                        </h4>
                                        <ul className="space-y-2">
                                            {service.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#F89542] flex-shrink-0 mt-0.5" />
                                                    <span className="font-medium">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Features Side */}
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                                    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#1B2A4E] mb-6 flex items-center gap-2">
                                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#F89542]" />
                                            What's Included
                                        </h3>
                                        <ul className="space-y-4">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-[#F89542] to-[#ff9d5c] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                                    </div>
                                                    <span className="leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Why Choose AWPS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl sm:text-5xl font-extrabold text-[#1B2A4E] mb-4">
                            Why Choose <span className="text-[#F89542]">AWPS</span>?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            Partner with payment experts who understand the African market
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {whyChoose.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 bg-gradient-to-br from-[#F89542] to-[#ff9d5c] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#1B2A4E] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl sm:text-5xl font-extrabold text-[#1B2A4E] mb-4">
                            How We <span className="text-[#F89542]">Work</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            Our proven process for payment system optimization
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { step: '01', title: 'Discovery', desc: 'We analyze your current payment setup, challenges, and goals' },
                            { step: '02', title: 'Strategy', desc: 'We design a customized solution tailored to your business needs' },
                            { step: '03', title: 'Implementation', desc: 'We guide you through setup, integration, and testing' },
                            { step: '04', title: 'Optimization', desc: 'We monitor performance and continuously improve results' }
                        ].map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="text-center">
                                    <div className="text-5xl sm:text-6xl font-extrabold text-[#F89542] opacity-20 mb-4 animate-pulse" style={{ animationDuration: '3s' }}>
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B2A4E] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-[#F89542] opacity-30"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                        Ready to Optimize Your Payment Systems?
                    </h2>
                    <p className="text-base sm:text-xl mb-10 max-w-2xl mx-auto opacity-95">
                        Let's discuss how our services can help your business grow
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#F89542] px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-[#1B2A4E] hover:text-white transition-all duration-300 shadow-2xl hover:scale-105"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </Link>
                        <Link
                            to="/pricing"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#F89542] transition-all duration-300"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
