import { ArrowRight, CheckCircle, TrendingUp, Shield, Globe as GlobeIcon, Users, Zap, BarChart3, CreditCard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);

        const observerOptions = {
            threshold: 0.1, // Lower threshold to trigger sooner
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.counter');

                    counters.forEach(counter => {
                        const target = counter.getAttribute('data-target');
                        // Handle commas and decimals
                        const cleanTarget = target.replace(/,/g, '');
                        const numericValue = parseFloat(cleanTarget);
                        const isFloat = target.includes('.');
                        // Extract suffix (everything that is not a number or dot or comma)
                        const suffix = target.replace(/[0-9.,]/g, '');

                        const duration = 2000; // 2 seconds
                        const steps = 60; // 60fps approx
                        const increment = numericValue / steps;
                        let current = 0;

                        // Use requestAnimationFrame for smooth animation
                        let startTime = null;

                        const animate = (timestamp) => {
                            if (!startTime) startTime = timestamp;
                            const progress = timestamp - startTime;

                            if (progress < duration) {
                                // Ease out function for smoother effect
                                const easeOutQuart = 1 - Math.pow(1 - progress / duration, 4);
                                current = numericValue * easeOutQuart;

                                let formattedNumber;
                                if (isFloat) {
                                    formattedNumber = current.toFixed(1);
                                } else {
                                    formattedNumber = Math.floor(current).toLocaleString();
                                }

                                counter.textContent = formattedNumber + suffix;
                                requestAnimationFrame(animate);
                            } else {
                                counter.textContent = target;
                            }
                        };

                        requestAnimationFrame(animate);
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const stats = [
        { value: '150M+', label: 'Transactions Processed', icon: TrendingUp },
        { value: '1,200+', label: 'Active Merchants', icon: Users },
        { value: '12+', label: 'African Countries', icon: GlobeIcon },
        { value: '99.9%', label: 'System Uptime', icon: Shield },
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            {/* Hero Section - Clean White Background */}
            <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-20 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Subtle line accent */}
                        <div className="w-20 h-1 bg-gradient-to-r from-[#F89542] to-orange-300 mx-auto mb-6"></div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A4E] mb-6 leading-tight">
                            Transforming Payments. <span className="text-[#F89542]">Elevating Performance.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Expert payment consulting solutions empowering businesses across Africa
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Link to="/contact" className="bg-[#F89542] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-[#e8854a] transition-colors shadow-md text-sm sm:text-base">
                                Request Consultation
                            </Link>
                            <Link to="/services" className="border-2 border-[#1B2A4E] text-[#1B2A4E] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-[#1B2A4E] hover:text-white transition-colors text-sm sm:text-base">
                                Our Services
                            </Link>
                        </div>

                        {/* Trust Indicator (subtle) */}
                        <p className="text-sm text-gray-500">
                            Trusted by businesses across 12+ African countries
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section - Glassmorphism & Animation */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4E] mb-4">
                            Our Track Record
                        </h2>
                        <p className="text-lg text-gray-600">
                            Leading businesses across the continent rely on AWPS for their payment infrastructure
                        </p>
                    </div>

                    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 stats-grid">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm bg-white/60 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                {/* Gradient overlay for glassmorphism */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent pointer-events-none"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-[#F89542] mx-auto mb-4" />

                                    {/* Animated counter */}
                                    <div
                                        className="text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-2 counter"
                                        data-target={stat.value}
                                    >
                                        0
                                    </div>

                                    <div className="text-sm md:text-base text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview Section - White Background */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-4">How We Help</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive payment solutions tailored for the African market
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Payment Gateway Consulting',
                                description: 'Expert guidance on selecting and implementing the right payment gateways for your business needs.',
                                icon: CreditCard
                            },
                            {
                                title: 'Mobile Money Integration',
                                description: 'Seamless integration with major mobile money providers across Africa including M-Pesa and Airtel Money.',
                                icon: Smartphone
                            },
                            {
                                title: 'Payment Optimization',
                                description: 'Data-driven strategies to increase transaction success rates and reduce processing costs.',
                                icon: TrendingUp
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#F89542] mb-6" />
                                <h3 className="text-lg sm:text-xl font-bold text-[#1B2A4E] mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                <Link to="/services" className="text-[#F89542] font-semibold hover:text-[#e8854a] inline-flex items-center gap-2">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Light Gray Background */}
            <section className="py-16 md:py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-4">Why Work With Us</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Your trusted partner in navigating the complex African payment landscape
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                        {[
                            { title: 'Pan-African Expertise', desc: 'Deep understanding of local markets and payment behaviors across 12+ countries.', icon: GlobeIcon },
                            { title: 'Technical Excellence', desc: 'Robust, secure, and scalable solutions built on modern technology stacks.', icon: Shield },
                            { title: 'Strategic Partnership', desc: 'We work as an extension of your team, aligned with your growth goals.', icon: Users },
                            { title: 'Regulatory Compliance', desc: 'Navigating complex financial regulations and compliance requirements.', icon: CheckCircle },
                            { title: '24/7 Support', desc: 'Dedicated support team ensuring your operations run smoothly around the clock.', icon: Zap },
                            { title: 'Data-Driven Insights', desc: 'Actionable analytics to optimize performance and drive decision making.', icon: BarChart3 },
                        ].map((feature, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#F89542] mb-4" />
                                <h3 className="text-base sm:text-lg font-bold text-[#1B2A4E] mb-2">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - White Background */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-4">Client Success Stories</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                quote: "AWPS transformed our payment infrastructure. We've seen a 40% increase in successful transactions since partnering with them.",
                                author: "Sarah Ochieng",
                                role: "CTO, FinTech Kenya",
                                company: "Nairobi"
                            },
                            {
                                quote: "Their deep knowledge of mobile money integration helped us expand into three new markets in under six months.",
                                author: "David Mensah",
                                role: "Operations Director",
                                company: "WestPay Solutions"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-bold text-[#1B2A4E]">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section - White Background */}
            <section className="py-16 md:py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-4">How We Work</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discovery', desc: 'We analyze your current infrastructure and business goals.' },
                            { step: '02', title: 'Strategy', desc: 'We design a tailored payment roadmap and architecture.' },
                            { step: '03', title: 'Implementation', desc: 'Seamless integration and rigorous testing of solutions.' },
                            { step: '04', title: 'Optimization', desc: 'Continuous monitoring and performance tuning.' },
                        ].map((process, index) => (
                            <div key={index} className="relative">
                                <div className="w-12 h-12 rounded-full border-2 border-[#F89542] flex items-center justify-center text-[#1B2A4E] font-bold mb-4 bg-white">
                                    {process.step}
                                </div>
                                <h3 className="text-xl font-bold text-[#1B2A4E] mb-2">{process.title}</h3>
                                <p className="text-gray-600">{process.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section - Subtle Gradient */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-orange-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-6">
                        Ready to Transform Your Payment Experience?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Join leading businesses across Africa optimizing their payments with AWPS.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#F89542] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#e8854a] transition-colors shadow-md"
                    >
                        Schedule Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
