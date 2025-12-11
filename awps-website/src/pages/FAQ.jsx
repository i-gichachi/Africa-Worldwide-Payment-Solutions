import { HelpCircle, Search, MessageCircle, Mail, Phone, ChevronDown, X, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        { name: 'All', count: 18, icon: HelpCircle },
        { name: 'Getting Started', count: 3, icon: HelpCircle },
        { name: 'Services', count: 3, icon: HelpCircle },
        { name: 'Pricing', count: 4, icon: HelpCircle },
        { name: 'Process', count: 4, icon: HelpCircle },
        { name: 'Results', count: 3, icon: HelpCircle },
        { name: 'Security', count: 3, icon: HelpCircle }
    ];

    const faqs = [
        // Getting Started
        {
            category: 'Getting Started',
            question: 'Who should use AWPS services?',
            answer: 'AWPS is ideal for any African business that accepts digital payments - from startups processing their first transactions to established enterprises managing complex multi-country payment operations. Our clients include e-commerce businesses, SaaS companies, marketplaces, travel companies, and service providers across 12+ African countries.'
        },
        {
            category: 'Getting Started',
            question: 'How do I get started with AWPS?',
            answer: 'Getting started is simple: 1) Book a free discovery call through our contact page. 2) We\'ll discuss your current payment setup and challenges. 3) We\'ll recommend the best package for your needs. 4) Once you\'re ready, we\'ll begin with a comprehensive audit of your current system. The entire process from first call to recommendations typically takes 1-2 weeks.'
        },
        {
            category: 'Getting Started',
            question: 'Do you work with businesses outside Africa?',
            answer: 'While we specialize in African payment systems, we also work with international businesses that want to accept payments from African customers or expand into African markets. Our deep understanding of African payment infrastructure makes us uniquely qualified to help businesses navigate this complex landscape.'
        },

        // Services
        {
            category: 'Services',
            question: 'What payment providers do you work with?',
            answer: 'We are completely vendor-neutral and work with all major payment providers across Africa including Flutterwave, Paystack, DPO Group, Cellulant, M-Pesa, Airtel Money, MTN Mobile Money, and many others. Our recommendations are based solely on what\'s best for your business, not on any partnerships or commissions.'
        },
        {
            category: 'Services',
            question: 'Can you help with mobile money integration?',
            answer: 'Absolutely! Mobile money integration is one of our core specialties. We help businesses integrate with M-Pesa, Airtel Money, MTN Mobile Money, and other mobile money providers across Africa. This includes API implementation, reconciliation systems, compliance guidance, and optimization for success rates.'
        },
        {
            category: 'Services',
            question: 'Do you provide ongoing support after implementation?',
            answer: 'Yes! We offer three levels of support: 1) Initial Consultation includes 30 days of email support. 2) Project-Based includes 90 days of post-launch support. 3) Monthly Retainer includes unlimited ongoing support with priority response times. All clients can upgrade to ongoing support at any time.'
        },

        // Pricing
        {
            category: 'Pricing',
            question: 'What payment methods do you accept?',
            answer: 'We accept bank transfers (EFT), M-Pesa, Airtel Money, and international wire transfers. For Project-Based and Retainer packages, we can structure payment plans. Initial Consultation must be paid upfront, while larger projects can be split into milestones.'
        },
        {
            category: 'Pricing',
            question: 'Are there any hidden fees?',
            answer: 'No hidden fees, ever. Our pricing is completely transparent. The price you see is what you pay. For Project-Based work, we provide a detailed scope and fixed price upfront. Any additional work beyond the original scope requires your approval before we proceed.'
        },
        {
            category: 'Pricing',
            question: 'Do you offer discounts?',
            answer: 'Yes! We offer 20% discounts for early-stage startups (less than 2 years old) and registered non-profit organizations. We also offer volume discounts for businesses that need services across multiple countries or subsidiaries. Contact us to discuss your specific situation.'
        },
        {
            category: 'Pricing',
            question: 'What if I\'m not satisfied with the consultation?',
            answer: 'We stand behind our work with a satisfaction guarantee. If you\'re not satisfied with your Initial Consultation, we\'ll refund 100% of your payment within 7 days, no questions asked. For Project-Based work, we structure payments around milestones to ensure you\'re happy with each phase before proceeding.'
        },

        // Process
        {
            category: 'Process',
            question: 'How long does a typical project take?',
            answer: 'Timeline varies by scope: Initial Consultation takes 1-2 weeks from booking to final report. Project-Based implementations typically take 6-12 weeks depending on complexity. Monthly Retainer is ongoing with monthly strategy sessions. We\'ll provide a detailed timeline during our discovery call based on your specific needs.'
        },
        {
            category: 'Process',
            question: 'Will I have a dedicated contact person?',
            answer: 'Initial Consultation clients work directly with our payment consultants via email. Project-Based clients have a dedicated project manager. Retainer clients get a dedicated account manager who becomes an extension of your team, available via email, phone, and WhatsApp during business hours (24/7 for urgent issues).'
        },
        {
            category: 'Process',
            question: 'Do you require access to our systems?',
            answer: 'It depends on the service. For consultations and audits, we typically only need read-only access or reports you can export. For implementation projects, we may need API credentials or dashboard access. We always request minimum necessary access and follow strict security protocols. All access is revoked after project completion.'
        },
        {
            category: 'Process',
            question: 'Can you work with our existing technical team?',
            answer: 'Absolutely! We love collaborating with internal teams. We can work alongside your developers, providing guidance and best practices while they handle the implementation. Alternatively, we can manage the entire technical implementation on your behalf. We adapt to whatever works best for your organization.'
        },

        // Results
        {
            category: 'Results',
            question: 'What results can I expect?',
            answer: 'While results vary by business, our clients typically see: 15-30% reduction in payment processing costs, 10-25% increase in payment success rates, 20-40% faster settlement times, and significantly improved customer payment experience. We provide detailed projections during consultation based on your specific situation.'
        },
        {
            category: 'Results',
            question: 'How do you measure success?',
            answer: 'We establish clear KPIs at the project start, typically including: payment processing costs, success/acceptance rates, settlement times, customer conversion rates, and failed payment rates. For Retainer clients, we provide monthly reports showing progress against these metrics and ROI calculations.'
        },
        {
            category: 'Results',
            question: 'Do you guarantee specific results?',
            answer: 'We cannot guarantee specific percentage improvements as results depend on many factors. However, we do guarantee our best effort, industry best practices, and complete transparency. If we don\'t believe we can significantly improve your payment operations, we\'ll tell you upfront during the discovery call.'
        },

        // Security
        {
            category: 'Security',
            question: 'How do you handle our sensitive data?',
            answer: 'Security is our top priority. We follow industry-standard security practices including: encrypted communications, secure file transfer protocols, strict access controls, NDA agreements, and data deletion after project completion. We are familiar with PCI DSS requirements and can work within your compliance frameworks.'
        },
        {
            category: 'Security',
            question: 'Are you PCI DSS compliant?',
            answer: 'As a consulting firm, we don\'t handle or store card data, so we don\'t require PCI DSS certification. However, our team is trained in PCI DSS requirements and can guide you through achieving and maintaining compliance. We help you implement payment solutions that meet PCI DSS standards.'
        },
        {
            category: 'Security',
            question: 'What about data privacy and GDPR?',
            answer: 'We take data privacy seriously and comply with applicable data protection regulations including GDPR where relevant. We only collect and process the minimum data necessary for our services, store it securely, and delete it after project completion unless you request otherwise. We can sign Data Processing Agreements (DPAs) as needed.'
        }
    ];

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            {/* Hero Section - Clean White */}
            <section className="relative bg-white pt-20 pb-12 md:pt-32 md:pb-20 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Accent line */}
                        <div className="w-16 h-1 md:w-20 bg-gradient-to-r from-[#F89542] to-orange-300 mx-auto mb-6"></div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A4E] mb-4 md:mb-6">
                            Frequently Asked <span className="text-[#F89542]">Questions</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 md:mb-10">
                            Find answers to common questions about our services
                        </p>

                        {/* Search bar with sophisticated styling */}
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 rounded-2xl blur-xl opacity-30"></div>
                            <div className="relative flex items-center bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:border-orange-200 transition-colors focus-within:border-[#F89542] focus-within:shadow-xl">
                                <Search className="w-5 h-5 text-gray-400 ml-5" />
                                <input
                                    type="text"
                                    placeholder="Search for answers..."
                                    className="flex-1 px-4 py-4 bg-transparent text-gray-700 placeholder-gray-400 outline-none text-base"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="mr-4 text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filters - Sophisticated Tabs */}
            <section className="bg-white border-b border-gray-100 sticky top-16 sm:top-20 z-20 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 overflow-x-auto py-4 scrollbar-hide">
                        {categories.map((category, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCategory(category.name)}
                                className={`px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold text-xs md:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 flex-shrink-0 ${activeCategory === category.name
                                        ? 'bg-gradient-to-r from-[#F89542] to-orange-400 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#1B2A4E]'
                                    }`}
                            >
                                <category.icon className="w-3 h-3 md:w-4 md:h-4" />
                                <span>{category.name}</span>
                                <span className={`text-[10px] md:text-xs px-1.5 py-0.5 rounded-full ${activeCategory === category.name
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Accordion - Premium Styling */}
            <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">

                        {/* Results count */}
                        <div className="mb-6 md:mb-8 flex items-center justify-between">
                            <p className="text-sm text-gray-600">
                                Showing <span className="font-bold text-[#1B2A4E]">{filteredFaqs.length}</span> questions
                            </p>
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="text-sm text-[#F89542] hover:text-orange-600 font-semibold"
                                >
                                    Clear search
                                </button>
                            )}
                        </div>

                        {/* FAQ Accordion */}
                        <div className="space-y-4">
                            {filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300"
                                >
                                    {/* Question Button */}
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-5 py-4 md:px-8 md:py-6 flex items-start justify-between text-left gap-4"
                                    >
                                        {/* Icon */}
                                        <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                                            <HelpCircle className="w-5 h-5 text-[#F89542]" />
                                        </div>

                                        {/* Question text */}
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-bold text-[#1B2A4E] group-hover:text-[#F89542] transition-colors leading-relaxed">
                                                {faq.question}
                                            </h3>
                                            {faq.category && (
                                                <span className="inline-block mt-2 text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                                    {faq.category}
                                                </span>
                                            )}
                                        </div>

                                        {/* Chevron */}
                                        <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-[#F89542]' : 'group-hover:bg-orange-100'
                                            }`}>
                                            <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${openFaq === index ? 'text-white' : 'text-[#F89542]'
                                                }`} />
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    {openFaq === index && (
                                        <div className="px-5 pb-5 md:px-8 md:pb-8 animate-fadeIn">
                                            <div className="md:pl-14 pt-4 border-t border-gray-100">
                                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                    {faq.answer}
                                                </p>

                                                {/* Helpful feedback */}
                                                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
                                                    <span className="text-xs md:text-sm text-gray-600 font-medium">Was this helpful?</span>
                                                    <div className="flex gap-2">
                                                        <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gray-100 hover:bg-green-50 hover:text-green-600 text-xs md:text-sm font-semibold transition-colors flex items-center gap-2">
                                                            <ThumbsUp className="w-3 h-3 md:w-4 md:h-4" />
                                                            Yes
                                                        </button>
                                                        <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-600 text-xs md:text-sm font-semibold transition-colors flex items-center gap-2">
                                                            <ThumbsDown className="w-3 h-3 md:w-4 md:h-4" />
                                                            No
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* No results message */}
                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-16">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1B2A4E] mb-2">No results found</h3>
                                <p className="text-gray-600 mb-6">Try adjusting your search or browse all categories</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                    className="text-[#F89542] font-semibold hover:text-orange-600"
                                >
                                    View all questions
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* Contact Options - Sophisticated Cards */}
            <section className="py-16 md:py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">

                        {/* Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4E] mb-4">
                                Still Have <span className="text-[#F89542]">Questions?</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600">
                                Our team is here to help you find the answers you need
                            </p>
                        </div>

                        {/* Contact cards grid */}
                        <div className="grid md:grid-cols-3 gap-6">

                            {/* Phone Support */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 text-center hover:border-[#F89542] hover:shadow-xl transition-all duration-300">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <Phone className="w-7 h-7 md:w-8 md:h-8 text-[#F89542]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1B2A4E] mb-3">
                                        Call Us
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        Speak directly with our team
                                    </p>
                                    <a href="tel:+254728333898" className="text-[#F89542] font-bold hover:text-orange-600 transition-colors">
                                        +254 728 333 898
                                    </a>
                                </div>
                            </div>

                            {/* Email Support */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 text-center hover:border-[#F89542] hover:shadow-xl transition-all duration-300">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <Mail className="w-7 h-7 md:w-8 md:h-8 text-[#F89542]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1B2A4E] mb-3">
                                        Email Us
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        Get detailed responses
                                    </p>
                                    <a href="mailto:info.africawps@gmail.com" className="text-[#F89542] font-bold hover:text-orange-600 transition-colors break-all">
                                        info.africawps@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp Support */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 text-center hover:border-[#F89542] hover:shadow-xl transition-all duration-300">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-[#F89542]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1B2A4E] mb-3">
                                        WhatsApp
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        Quick chat support
                                    </p>
                                    <a href="https://wa.me/254728333898" className="inline-flex items-center gap-2 bg-[#F89542] text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                                        <MessageCircle className="w-5 h-5" />
                                        <span>Start Chat</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
