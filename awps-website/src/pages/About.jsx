import { Target, Eye, Award, Users, TrendingUp, Shield, Globe as GlobeIcon, Lightbulb, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            {/* Hero Section - Compact & Sophisticated */}
            <section className="relative bg-white pt-20 pb-12 md:pt-32 md:pb-20 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Subtle line accent */}
                        <div className="w-16 h-1 md:w-20 bg-gradient-to-r from-[#F89542] to-orange-300 mx-auto mb-6"></div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A4E] mb-4 md:mb-6">
                            About <span className="text-[#F89542]">AWPS</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Empowering African businesses through payment excellence
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Story Section - Compact */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-6 md:mb-8 text-center">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                            <p>
                                AWPS was founded in 2019 when our founder, June Ruhweza, witnessed firsthand the challenges African businesses faced with payment systems. As a consultant working with SMEs across East Africa, June repeatedly heard the same frustrations: payment solutions were either too expensive, too complicated, or simply didn't work reliably across different African countries.
                            </p>
                            <p>
                                The breaking point came when a promising Kenyan e-commerce startup lost a major contract because they couldn't efficiently process payments from customers in Tanzania and Uganda. June realized that while Africa was experiencing a digital payment revolution, businesses needed expert guidance to navigate this complex landscape.
                            </p>
                            <p>
                                AWPS was born from a simple vision: every African business, regardless of size or location, should have access to world-class payment expertise. We started by helping businesses in Kenya, and within our first year, we had supported over 50 companies in optimizing their payment systems.
                            </p>
                            <p>
                                Today, we work with businesses across 12 African countries, helping them reduce costs, increase payment acceptance rates, and scale their operations. We're not just consultants - we're partners in building the financial infrastructure for Africa's digital economy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section - Compact Side-by-Side */}
            <section className="py-12 md:py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {/* Mission Card */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <Target className="w-10 h-10 md:w-12 md:h-12 text-[#F89542] mb-4 md:mb-6" />
                            <h3 className="text-xl md:text-2xl font-bold text-[#1B2A4E] mb-3 md:mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                To democratize access to reliable payment solutions by empowering financial institutions and businesses of all sizes to thrive in the digital economy through secure, fast, and affordable payment services.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <Eye className="w-10 h-10 md:w-12 md:h-12 text-[#F89542] mb-4 md:mb-6" />
                            <h3 className="text-xl md:text-2xl font-bold text-[#1B2A4E] mb-3 md:mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                To become the most trusted partner for seamless and reliable payment experiences across the digital economy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section - Compact Grid */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-3 md:mb-4">
                            Our Values
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
                        {[
                            {
                                Icon: Lightbulb,
                                title: 'Innovation & Excellence',
                                description: 'We continuously seek cutting-edge payment solutions and best practices to provide our clients with the most advanced strategies available in the African market.'
                            },
                            {
                                Icon: Heart,
                                title: 'Client-Centricity',
                                description: 'Our clients\' success is our success. We listen, adapt, and build solutions that solve real business challenges, providing ongoing support to ensure lasting results.'
                            },
                            {
                                Icon: Shield,
                                title: 'Integrity & Transparency',
                                description: 'No hidden agendas, no vendor bias. We provide honest, transparent advice that puts our clients\' interests first. Clear communication in all our relationships.'
                            },
                            {
                                Icon: GlobeIcon,
                                title: 'Pan-African Focus',
                                description: 'We believe in the power of a connected Africa. Our expertise spans multiple markets, enabling seamless commerce across the continent.'
                            },
                            {
                                Icon: CheckCircle,
                                title: 'Reliability',
                                description: 'We build systems and strategies that you can count on. Uptime, security, and consistency are at the core of our recommendations.'
                            },
                            {
                                Icon: Users,
                                title: 'Collaboration',
                                description: 'We work closely with your team, transferring knowledge and building internal capacity for long-term success.'
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center">
                                <value.Icon className="w-8 h-8 md:w-10 md:h-10 text-[#F89542] mx-auto mb-3 md:mb-4" />
                                <h3 className="text-lg font-semibold text-[#1B2A4E] mb-2 md:mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section - Sophisticated Layout */}
            <section className="py-12 md:py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-3 md:mb-4">
                            Leadership
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            Payment experts dedicated to your success
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                                {/* Photo Placeholder */}
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-gray-100 flex items-center justify-center border-2 border-[#F89542]">
                                        <Users className="w-12 h-12 md:w-20 md:h-20 text-gray-400" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#1B2A4E] mb-1 md:mb-2">June Ruhweza</h3>
                                    <p className="text-[#F89542] font-semibold mb-3 md:mb-4 text-sm md:text-base">Director & Founder</p>

                                    <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                                        <p>
                                            June Ruhweza is the founder and director of AWPS. With over 12 years of experience in financial technology and business consulting across East Africa, June has dedicated her career to solving payment challenges for African businesses.
                                        </p>
                                        <p>
                                            June holds an MBA from Strathmore Business School and a Bachelor's degree in Computer Science from the University of Nairobi. She's a certified Payment Industry Professional and regularly speaks at fintech conferences across Africa.
                                        </p>
                                        <p>
                                            Under June's leadership, AWPS has grown to serve businesses across 12 African countries, helping them optimize payment systems and scale their operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Compact */}
            <section className="py-12 md:py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-3 md:mb-4">
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                            Let's discuss how we can help optimize your payment systems
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-[#F89542] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-[#e8854a] transition-colors shadow-md text-sm md:text-base"
                        >
                            Schedule Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
