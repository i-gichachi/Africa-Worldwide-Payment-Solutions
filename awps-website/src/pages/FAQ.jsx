import { HelpCircle, Search, MessageCircle, Mail, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Questions', icon: HelpCircle },
        { id: 'getting-started', label: 'Getting Started', icon: HelpCircle },
        { id: 'services', label: 'Our Services', icon: HelpCircle },
        { id: 'pricing', label: 'Pricing & Payments', icon: HelpCircle },
        { id: 'process', label: 'Working Together', icon: HelpCircle },
        { id: 'results', label: 'Results & ROI', icon: HelpCircle },
        { id: 'security', label: 'Security & Compliance', icon: HelpCircle }
    ];

    const faqs = [
        // Getting Started
        {
            category: 'getting-started',
            question: 'Who should use AWPS services?',
            answer: 'AWPS is ideal for any African business that accepts digital payments - from startups processing their first transactions to established enterprises managing complex multi-country payment operations. Our clients include e-commerce businesses, SaaS companies, marketplaces, travel companies, and service providers across 12+ African countries.'
        },
        {
            category: 'getting-started',
            question: 'How do I get started with AWPS?',
            answer: 'Getting started is simple: 1) Book a free discovery call through our contact page. 2) We\'ll discuss your current payment setup and challenges. 3) We\'ll recommend the best package for your needs. 4) Once you\'re ready, we\'ll begin with a comprehensive audit of your current system. The entire process from first call to recommendations typically takes 1-2 weeks.'
        },
        {
            category: 'getting-started',
            question: 'Do you work with businesses outside Africa?',
            answer: 'While we specialize in African payment systems, we also work with international businesses that want to accept payments from African customers or expand into African markets. Our deep understanding of African payment infrastructure makes us uniquely qualified to help businesses navigate this complex landscape.'
        },

        // Services
        {
            category: 'services',
            question: 'What payment providers do you work with?',
            answer: 'We are completely vendor-neutral and work with all major payment providers across Africa including Flutterwave, Paystack, DPO Group, Cellulant, M-Pesa, Airtel Money, MTN Mobile Money, and many others. Our recommendations are based solely on what\'s best for your business, not on any partnerships or commissions.'
        },
        {
            category: 'services',
            question: 'Can you help with mobile money integration?',
            answer: 'Absolutely! Mobile money integration is one of our core specialties. We help businesses integrate with M-Pesa, Airtel Money, MTN Mobile Money, and other mobile money providers across Africa. This includes API implementation, reconciliation systems, compliance guidance, and optimization for success rates.'
        },
        {
            category: 'services',
            question: 'Do you provide ongoing support after implementation?',
            answer: 'Yes! We offer three levels of support: 1) Initial Consultation includes 30 days of email support. 2) Project-Based includes 90 days of post-launch support. 3) Monthly Retainer includes unlimited ongoing support with priority response times. All clients can upgrade to ongoing support at any time.'
        },

        // Pricing
        {
            category: 'pricing',
            question: 'What payment methods do you accept?',
            answer: 'We accept bank transfers (EFT), M-Pesa, Airtel Money, and international wire transfers. For Project-Based and Retainer packages, we can structure payment plans. Initial Consultation must be paid upfront, while larger projects can be split into milestones.'
        },
        {
            category: 'pricing',
            question: 'Are there any hidden fees?',
            answer: 'No hidden fees, ever. Our pricing is completely transparent. The price you see is what you pay. For Project-Based work, we provide a detailed scope and fixed price upfront. Any additional work beyond the original scope requires your approval before we proceed.'
        },
        {
            category: 'pricing',
            question: 'Do you offer discounts?',
            answer: 'Yes! We offer 20% discounts for early-stage startups (less than 2 years old) and registered non-profit organizations. We also offer volume discounts for businesses that need services across multiple countries or subsidiaries. Contact us to discuss your specific situation.'
        },
        {
            category: 'pricing',
            question: 'What if I\'m not satisfied with the consultation?',
            answer: 'We stand behind our work with a satisfaction guarantee. If you\'re not satisfied with your Initial Consultation, we\'ll refund 100% of your payment within 7 days, no questions asked. For Project-Based work, we structure payments around milestones to ensure you\'re happy with each phase before proceeding.'
        },

        // Process
        {
            category: 'process',
            question: 'How long does a typical project take?',
            answer: 'Timeline varies by scope: Initial Consultation takes 1-2 weeks from booking to final report. Project-Based implementations typically take 6-12 weeks depending on complexity. Monthly Retainer is ongoing with monthly strategy sessions. We\'ll provide a detailed timeline during our discovery call based on your specific needs.'
        },
        {
            category: 'process',
            question: 'Will I have a dedicated contact person?',
            answer: 'Initial Consultation clients work directly with our payment consultants via email. Project-Based clients have a dedicated project manager. Retainer clients get a dedicated account manager who becomes an extension of your team, available via email, phone, and WhatsApp during business hours (24/7 for urgent issues).'
        },
        {
            category: 'process',
            question: 'Do you require access to our systems?',
            answer: 'It depends on the service. For consultations and audits, we typically only need read-only access or reports you can export. For implementation projects, we may need API credentials or dashboard access. We always request minimum necessary access and follow strict security protocols. All access is revoked after project completion.'
        },
        {
            category: 'process',
            question: 'Can you work with our existing technical team?',
            answer: 'Absolutely! We love collaborating with internal teams. We can work alongside your developers, providing guidance and best practices while they handle the implementation. Alternatively, we can manage the entire technical implementation on your behalf. We adapt to whatever works best for your organization.'
        },

        // Results
        {
            category: 'results',
            question: 'What results can I expect?',
            answer: 'While results vary by business, our clients typically see: 15-30% reduction in payment processing costs, 10-25% increase in payment success rates, 20-40% faster settlement times, and significantly improved customer payment experience. We provide detailed projections during consultation based on your specific situation.'
        },
        {
            category: 'results',
            question: 'How do you measure success?',
            answer: 'We establish clear KPIs at the project start, typically including: payment processing costs, success/acceptance rates, settlement times, customer conversion rates, and failed payment rates. For Retainer clients, we provide monthly reports showing progress against these metrics and ROI calculations.'
        },
        {
            category: 'results',
            question: 'Do you guarantee specific results?',
            answer: 'We cannot guarantee specific percentage improvements as results depend on many factors. However, we do guarantee our best effort, industry best practices, and complete transparency. If we don\'t believe we can significantly improve your payment operations, we\'ll tell you upfront during the discovery call.'
        },

        // Security
        {
            category: 'security',
            question: 'How do you handle our sensitive data?',
            answer: 'Security is our top priority. We follow industry-standard security practices including: encrypted communications, secure file transfer protocols, strict access controls, NDA agreements, and data deletion after project completion. We are familiar with PCI DSS requirements and can work within your compliance frameworks.'
        },
        {
            category: 'security',
            question: 'Are you PCI DSS compliant?',
            answer: 'As a consulting firm, we don\'t handle or store card data, so we don\'t require PCI DSS certification. However, our team is trained in PCI DSS requirements and can guide you through achieving and maintaining compliance. We help you implement payment solutions that meet PCI DSS standards.'
        },
        {
            category: 'security',
            question: 'What about data privacy and GDPR?',
            answer: 'We take data privacy seriously and comply with applicable data protection regulations including GDPR where relevant. We only collect and process the minimum data necessary for our services, store it securely, and delete it after project completion unless you request otherwise. We can sign Data Processing Agreements (DPAs) as needed.'
        }
    ];

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
                            <HelpCircle className="w-4 h-4 text-[#F89542]" />
                            <span className="text-sm font-medium">We're here to help</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Frequently Asked <span className="text-[#F89542]">Questions</span>
                        </h1>
                        <p className="text-base sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Find answers to common questions about our services, pricing, and process
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="relative">
                                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for answers..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-14 sm:pl-16 pr-6 py-4 sm:py-5 rounded-2xl bg-white text-gray-900 placeholder-gray-500 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-[#F89542] focus:ring-opacity-30 shadow-2xl transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle Gradient Fade at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-10"></div>
            </section>

            {/* Category Filter */}
            <section className="py-4 sm:py-6 bg-white sticky top-20 z-40 border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${activeCategory === cat.id
                                        ? 'bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <cat.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {filteredFaqs.length === 0 ? (
                            <div className="text-center py-16">
                                <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-6">
                                    Try adjusting your search or browse all categories
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setActiveCategory('all');
                                    }}
                                    className="bg-[#F89542] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1B2A4E] transition-colors text-sm sm:text-base"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredFaqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 animate-fade-in-up"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="text-base sm:text-lg font-bold text-[#1B2A4E] pr-4 sm:pr-8">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#F89542] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {openFaq === index && (
                                            <div className="px-6 pb-5 sm:px-8 sm:pb-6 animate-fade-in">
                                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        <p className="text-center text-xs sm:text-sm text-gray-400 mt-12">
              /* PLACEHOLDER FAQs - Client to provide actual frequently asked questions */
                        </p>
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-12 sm:py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl sm:text-5xl font-extrabold text-[#1B2A4E] mb-4">
                                Still Have <span className="text-[#F89542]">Questions?</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600">
                                We're here to help! Choose the best way to reach us
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    icon: MessageCircle,
                                    title: 'Live Chat',
                                    description: 'Chat with our team during business hours',
                                    action: 'Start Chat',
                                    gradient: 'from-blue-500 to-blue-600',
                                    link: '/contact'
                                },
                                {
                                    icon: Mail,
                                    title: 'Email Us',
                                    description: 'Get a response within 24 hours',
                                    action: 'Send Email',
                                    gradient: 'from-purple-500 to-purple-600',
                                    link: 'mailto:info.africawps@gmail.com'
                                },
                                {
                                    icon: Phone,
                                    title: 'Call Us',
                                    description: 'Speak with our team directly',
                                    action: 'Call Now',
                                    gradient: 'from-green-500 to-green-600',
                                    link: 'tel:+254728333898'
                                }
                            ].map((contact, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                                        <contact.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B2A4E] mb-3">
                                        {contact.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                                        {contact.description}
                                    </p>
                                    <a
                                        href={contact.link}
                                        className="inline-block bg-[#1B2A4E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#F89542] transition-colors text-sm sm:text-base"
                                    >
                                        {contact.action}
                                    </a>
                                </div>
                            ))}
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
                        Ready to Optimize Your Payments?
                    </h2>
                    <p className="text-base sm:text-xl mb-10 max-w-2xl mx-auto opacity-95">
                        Book a free consultation to discuss your payment challenges
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-[#F89542] px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-[#1B2A4E] hover:text-white transition-all duration-300 shadow-2xl hover:scale-105"
                    >
                        Schedule Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
