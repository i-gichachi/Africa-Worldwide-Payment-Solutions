import { ArrowRight, CheckCircle, TrendingUp, Shield, Globe as GlobeIcon, Users, Zap, BarChart3, CreditCard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            {/* Hero Section - Navy Background with Orange Accents */}
            <section className="relative bg-gradient-to-br from-[#1B2A4E] via-[#1a2847] to-[#0f1829] text-white min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
                {/* Animated Background Shapes */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#F89542] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#F89542] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-20">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8 animate-fade-in">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#F89542] rounded-full animate-pulse"></span>
                            <span className="text-xs sm:text-sm font-medium text-white/90">Trusted by businesses across 12+ African countries</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-[1.1] tracking-tight text-white">
                            <span className="inline-block animate-fade-in-up">Seamless</span>{' '}
                            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Payment</span>{' '}
                            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Solutions</span>
                            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#F89542] to-[#ff9d5c] bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '0.4s' }}>
                                for Africa
                            </span>
                        </h1>

                        {/* Tagline */}
                        <p className="text-lg sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-[#F89542] font-semibold animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            Transforming Payments. Elevating Performance.
                        </p>

                        {/* Description */}
                        <p className="text-sm sm:text-lg lg:text-xl mb-8 sm:mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Empowering businesses across Africa with secure, fast, and reliable payment consulting services.
                            Optimize your payment systems, reduce costs, and scale operations.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <Link
                                to="/contact"
                                className="group inline-flex items-center justify-center gap-2 bg-[#F89542] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-2xl hover:bg-white hover:text-[#1B2A4E] transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Get Started Free
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/services"
                                className="group inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg backdrop-blur-sm hover:bg-white hover:text-[#1B2A4E] hover:border-white transition-all duration-300"
                            >
                                Explore Services
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                            {['No Setup Fees', '24/7 Support', 'Bank-Level Security'].map((item) => (
                                <div key={item} className="flex items-center gap-1.5 sm:gap-2">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#F89542]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0 text-white">
                    <svg viewBox="0 0 1440 100" className="w-full h-auto">
                        <path fill="currentColor" d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"></path>
                    </svg>
                </div>
            </section>

            {/* Stats Section - Clean White Background */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            { number: '150M+', label: 'Transactions Processed', Icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
                            { number: '1,200+', label: 'Active Merchants', Icon: Users, color: 'from-green-500 to-green-600' },
                            { number: '12', label: 'African Countries', Icon: GlobeIcon, color: 'from-purple-500 to-purple-600' },
                            { number: '99.9%', label: 'System Uptime', Icon: Shield, color: 'from-orange-500 to-orange-600' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                                        <stat.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                    </div>
                                    <p className="text-3xl sm:text-5xl font-extrabold text-[#1B2A4E] mb-2">{stat.number}</p>
                                    <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - Light Gray Background */}
            <section className="py-12 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B2A4E] mb-3 sm:mb-4">
                            Our Payment Solutions
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive payment consulting services designed for African businesses
                        </p>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                Icon: CreditCard,
                                title: 'Payment Gateway Consulting',
                                description: 'Expert guidance on selecting, implementing, and optimizing payment gateways. Accept cards, mobile money, and bank transfers seamlessly.',
                                features: ['Multi-channel acceptance', 'PCI DSS compliance', 'Integration strategy', 'Transaction optimization'],
                                gradient: 'from-blue-500 to-blue-600'
                            },
                            {
                                Icon: Smartphone,
                                title: 'Mobile Money Integration',
                                description: 'Tap into Africa\'s mobile money revolution. Strategic guidance on integrating M-Pesa, Airtel Money, MTN, and other mobile wallets.',
                                features: ['Multi-provider integration', 'Reconciliation systems', 'API implementation', 'Compliance advisory'],
                                gradient: 'from-green-500 to-green-600'
                            },
                            {
                                Icon: BarChart3,
                                title: 'Payment Optimization',
                                description: 'Transform your payment operations with data-driven insights. Reduce costs, increase acceptance rates, and enhance customer experience.',
                                features: ['Cost reduction', 'Success rate improvement', 'Fraud prevention', 'Performance analytics'],
                                gradient: 'from-purple-500 to-purple-600'
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                    <service.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-[#1B2A4E] mb-3 sm:mb-4 group-hover:text-[#F89542] transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#F89542] flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Learn More Link */}
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 text-[#F89542] font-bold text-sm sm:text-base hover:gap-4 transition-all"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-8 sm:mt-12">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-[#1B2A4E] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#F89542] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            View All Services
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA Section - Orange Gradient */}
            <section className="relative py-12 sm:py-20 bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
                        Ready to Transform Your Payment Experience?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto opacity-95">
                        Join hundreds of businesses already optimizing their payment systems with AWPS
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#F89542] px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#1B2A4E] hover:text-white transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
                        >
                            Schedule Free Consultation
                        </Link>
                        <Link
                            to="/pricing"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#F89542] transition-all duration-300"
                        >
                            View Pricing
                        </Link>
                    </div>

                    <p className="text-xs sm:text-sm opacity-90">No commitment required. Let's discuss your payment challenges.</p>
                </div>
            </section>
        </div>
    );
}
