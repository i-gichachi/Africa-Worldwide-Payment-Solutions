import { Target, Eye, Award, Users, TrendingUp, Shield, Globe as GlobeIcon, Lightbulb, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#1B2A4E] via-[#1a2847] to-[#0f1829] text-white py-12 sm:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#F89542] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
                            About <span className="text-[#F89542]">AWPS</span>
                        </h1>
                        <p className="text-base sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                            Empowering African Businesses Through Payment Excellence
                        </p>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0 text-white">
                    <svg viewBox="0 0 1440 100" className="w-full h-auto">
                        <path fill="currentColor" d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"></path>
                    </svg>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Left: Image/Graphic */}
                        <div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F89542] to-[#ff9d5c] rounded-3xl transform rotate-3"></div>
                                <div className="relative bg-gradient-to-br from-[#1B2A4E] to-[#0f1829] rounded-3xl p-8 sm:p-12 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <GlobeIcon className="w-full h-auto text-[#F89542] opacity-20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <p className="text-4xl sm:text-6xl font-bold mb-2">12+</p>
                                            <p className="text-lg sm:text-xl">African Countries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Story Content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A4E] mb-4 sm:mb-6">
                                Our Story
                            </h2>

                            <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 space-y-4">
                                <p className="leading-relaxed">
                                    {/* PLACEHOLDER - Client to provide actual story */}
                                    AWPS was founded in 2019 when our founder, June Ruhweza, witnessed firsthand the challenges African businesses faced with payment systems. As a consultant working with SMEs across East Africa, June repeatedly heard the same frustrations: payment solutions were either too expensive, too complicated, or simply didn't work reliably across different African countries.
                                </p>

                                <p className="leading-relaxed">
                                    The breaking point came when a promising Kenyan e-commerce startup lost a major contract because they couldn't efficiently process payments from customers in Tanzania and Uganda. June realized that while Africa was experiencing a digital payment revolution, businesses needed expert guidance to navigate this complex landscape.
                                </p>

                                <p className="leading-relaxed">
                                    AWPS was born from a simple vision: every African business, regardless of size or location, should have access to world-class payment expertise. We started by helping businesses in Kenya, and within our first year, we had supported over 50 companies in optimizing their payment systems.
                                </p>

                                <p className="leading-relaxed">
                                    Today, we work with businesses across 12 African countries, helping them reduce costs, increase payment acceptance rates, and scale their operations. We're not just consultants - we're partners in building the financial infrastructure for Africa's digital economy.
                                </p>

                                <p className="text-xs text-gray-400 mt-4">/* PLACEHOLDER STORY - Client to provide actual company history */</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-12 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                        {/* Mission Card */}
                        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1B2A4E] mb-3 sm:mb-4">
                                Our Mission
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                To democratize access to reliable payment solutions by empowering financial institutions and businesses of all sizes to thrive in the digital economy through secure, fast, and affordable payment services.
                            </p>
                            <p className="text-xs text-green-600 font-semibold mt-4">✓ CONFIRMED CONTENT</p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1B2A4E] mb-3 sm:mb-4">
                                Our Vision
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                To become the most trusted partner for seamless and reliable payment experiences across the digital economy.
                            </p>
                            <p className="text-xs text-green-600 font-semibold mt-4">✓ CONFIRMED CONTENT</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl sm:text-5xl font-extrabold text-[#1B2A4E] mb-3 sm:mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                Icon: Lightbulb,
                                title: 'Innovation & Excellence',
                                description: 'We continuously seek cutting-edge payment solutions and best practices to provide our clients with the most advanced strategies available in the African market.',
                                gradient: 'from-yellow-500 to-orange-500'
                            },
                            {
                                Icon: Heart,
                                title: 'Client-Centricity',
                                description: 'Our clients\' success is our success. We listen, adapt, and build solutions that solve real business challenges, providing ongoing support to ensure lasting results.',
                                gradient: 'from-pink-500 to-red-500'
                            },
                            {
                                Icon: Shield,
                                title: 'Integrity & Transparency',
                                description: 'No hidden agendas, no vendor bias. We provide honest, transparent advice that puts our clients\' interests first. Clear communication in all our relationships.',
                                gradient: 'from-blue-500 to-indigo-500'
                            },
                            {
                                Icon: GlobeIcon,
                                title: 'Pan-African Focus',
                                description: 'We believe in the power of a connected Africa. Our expertise spans multiple markets, enabling seamless commerce across the continent.',
                                gradient: 'from-green-500 to-teal-500'
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center`}>
                                    <value.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#1B2A4E] mb-2 sm:mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-8">/* PLACEHOLDER VALUES - Client to confirm actual core values */</p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 sm:py-20 bg-gradient-to-br from-[#1B2A4E] to-[#0f1829] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4">
                            Why <span className="text-[#F89542]">AWPS</span>?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300">
                            Proven expertise and results across Africa
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: '12+', label: 'African Countries', sublabel: 'Deep expertise across diverse payment ecosystems' },
                            { number: '100+', label: 'Businesses Served', sublabel: 'From startups to established enterprises' },
                            { number: '30%', label: 'Average Cost Reduction', sublabel: 'Proven results in payment optimization' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F89542] mb-2">
                                    {stat.number}
                                </p>
                                <p className="text-lg sm:text-xl font-bold mb-2">{stat.label}</p>
                                <p className="text-xs sm:text-sm text-gray-400">{stat.sublabel}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-8">/* PLACEHOLDER STATS - Client to provide actual numbers */</p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl sm:text-5xl font-extrabold text-[#1B2A4E] mb-3 sm:mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            Payment experts dedicated to your success
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* June Ruhweza Card */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">
                                {/* Photo */}
                                <div className="lg:col-span-1">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#F89542] to-[#ff9d5c] rounded-2xl transform rotate-3"></div>
                                        <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-[#1B2A4E] to-[#0f1829] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                            <Users className="w-16 h-16 sm:w-24 sm:h-24 text-[#F89542]" />
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-4 text-center">Photo to be provided</p>
                                </div>

                                {/* Bio */}
                                <div className="lg:col-span-2">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1B2A4E] mb-2">
                                        June Ruhweza
                                    </h3>
                                    <p className="text-[#F89542] font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                                        Director & Founder
                                    </p>

                                    <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 space-y-4">
                                        <p>
                                            {/* PLACEHOLDER BIO - Client to provide actual bio */}
                                            June Ruhweza is the founder and director of AWPS. With over 12 years of experience in financial technology and business consulting across East Africa, June has dedicated her career to solving payment challenges for African businesses.
                                        </p>

                                        <p>
                                            June holds an MBA from Strathmore Business School and a Bachelor's degree in Computer Science from the University of Nairobi. She's a certified Payment Industry Professional and regularly speaks at fintech conferences across Africa.
                                        </p>

                                        <p>
                                            Under June's leadership, AWPS has grown to serve businesses across 12 African countries, helping them optimize payment systems and scale their operations.
                                        </p>
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-[#F89542] hover:text-[#1B2A4E] font-semibold transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                            Connect on LinkedIn
                                        </a>
                                    </div>

                                    <p className="text-xs text-gray-400 mt-6">/* PLACEHOLDER BIO - Client to provide actual background and professional photo */</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-20 bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl sm:text-5xl font-extrabold mb-4 sm:mb-6">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
                        Let's discuss how we can help optimize your payment systems
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#F89542] px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#1B2A4E] hover:text-white transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
                        >
                            Schedule Consultation
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#F89542] transition-all duration-300"
                        >
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
