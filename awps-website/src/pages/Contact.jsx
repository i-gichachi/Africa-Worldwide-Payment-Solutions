import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: '',
        consent: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    interest: '',
                    message: '',
                    consent: false
                });
            }, 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section with Geometric Pattern Background */}
            <section className="relative bg-gradient-to-br from-[#1B2A4E] via-[#1a2847] to-[#0f1829] text-white py-12 sm:py-20 lg:py-32 overflow-hidden">
                {/* Animated Circles Background - Filled instead of bordered */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-[#F89542] rounded-full mix-blend-multiply filter blur-xl"></div>
                    <div className="absolute top-20 right-20 w-96 h-96 bg-[#F89542] rounded-full mix-blend-multiply filter blur-xl"></div>
                    <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-[#F89542] rounded-full mix-blend-multiply filter blur-xl"></div>
                </div>

                {/* Glowing Orbs */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-[#F89542] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F89542] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 bg-[#F89542] rounded-full animate-pulse"></span>
                            <span className="text-sm font-medium">We respond within 24 hours</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6">
                            Get In <span className="text-[#F89542]">Touch</span>
                        </h1>
                        <p className="text-base sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            Let's discuss how we can help optimize your payment systems and grow your business across Africa
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section - Light Gray Background */}
            <section className="py-12 sm:py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
                        {/* Left: Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#F89542] to-[#ff9d5c] rounded-xl flex items-center justify-center">
                                        <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4E]">
                                            Send Us a Message
                                        </h2>
                                        <p className="text-xs sm:text-sm text-gray-500">We'll get back to you within 24 hours</p>
                                    </div>
                                </div>

                                {isSubmitted ? (
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-10 text-center">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3">
                                            Message Sent Successfully!
                                        </h3>
                                        <p className="text-green-700 text-base sm:text-lg">
                                            Thanks! We'll be in touch within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold text-[#1B2A4E] mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-[#F89542] focus:ring-4 focus:ring-[#F89542] focus:ring-opacity-10 outline-none transition-all text-sm sm:text-base"
                                            />
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-bold text-[#1B2A4E] mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@company.com"
                                                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-[#F89542] focus:ring-4 focus:ring-[#F89542] focus:ring-opacity-10 outline-none transition-all text-sm sm:text-base"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-bold text-[#1B2A4E] mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+254 712 345 678"
                                                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-[#F89542] focus:ring-4 focus:ring-[#F89542] focus:ring-opacity-10 outline-none transition-all text-sm sm:text-base"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-bold text-[#1B2A4E] mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your Company Ltd"
                                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-[#F89542] focus:ring-4 focus:ring-[#F89542] focus:ring-opacity-10 outline-none transition-all text-sm sm:text-base"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="interest" className="block text-sm font-bold text-[#1B2A4E] mb-2">
                                                I'm interested in *
                                            </label>
                                            <select
                                                id="interest"
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-[#F89542] focus:ring-4 focus:ring-[#F89542] focus:ring-opacity-10 outline-none transition-all bg-white text-sm sm:text-base"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="consultation">Initial Consultation</option>
                                                <option value="project">Project-Based Engagement</option>
                                                <option value="retainer">Monthly Retainer</option>
                                                <option value="enterprise">Enterprise Solutions</option>
                                                <option value="general">General Inquiry</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-bold text-[#1B2A4E] mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                                placeholder="Tell us about your payment challenges or questions..."
                                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-[#F89542] focus:ring-4 focus:ring-[#F89542] focus:ring-opacity-10 outline-none transition-all resize-none text-sm sm:text-base"
                                            ></textarea>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                id="consent"
                                                name="consent"
                                                checked={formData.consent}
                                                onChange={handleChange}
                                                className="mt-1 w-4 h-4 sm:w-5 sm:h-5 text-[#F89542] border-gray-300 rounded focus:ring-[#F89542]"
                                            />
                                            <label htmlFor="consent" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                                I agree to receive communications from AWPS about payment solutions and services.
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white px-6 py-4 sm:px-8 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Right: Contact Info Cards */}
                        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                            {[
                                {
                                    icon: Phone,
                                    title: 'Call Us',
                                    content: '+254 728 333 898',
                                    subtext: 'Monday - Friday: 8:00 AM - 6:00 PM EAT\nSaturday: 9:00 AM - 2:00 PM EAT',
                                    link: 'tel:+254728333898',
                                    gradient: 'from-blue-500 to-blue-600',
                                    bgGradient: 'from-blue-50 to-blue-100/50'
                                },
                                {
                                    icon: Mail,
                                    title: 'Email Us',
                                    content: 'info.africawps@gmail.com',
                                    subtext: 'We respond within 24 hours',
                                    link: 'mailto:info.africawps@gmail.com',
                                    gradient: 'from-purple-500 to-purple-600',
                                    bgGradient: 'from-purple-50 to-purple-100/50'
                                },
                                {
                                    icon: MessageSquare,
                                    title: 'WhatsApp',
                                    content: '+254 728 333 898',
                                    button: 'Chat on WhatsApp',
                                    link: 'https://wa.me/254728333898?text=Hi%20AWPS,%20I%27d%20like%20to%20learn%20more%20about%20your%20payment%20consulting%20services.',
                                    gradient: 'from-green-500 to-green-600',
                                    bgGradient: 'from-green-50 to-green-100/50'
                                },
                                {
                                    icon: MapPin,
                                    title: 'Visit Us',
                                    content: 'Nairobi, Kenya',
                                    subtext: 'By appointment only',
                                    note: '/* Specific address TBD */',
                                    gradient: 'from-orange-500 to-orange-600',
                                    bgGradient: 'from-orange-50 to-orange-100/50'
                                }
                            ].map((card, index) => (
                                <div
                                    key={index}
                                    className={`bg-gradient-to-br ${card.bgGradient} rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white`}
                                >
                                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-4 lg:mb-5 shadow-lg`}>
                                        <card.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-[#1B2A4E] mb-2 lg:mb-3">
                                        {card.title}
                                    </h3>
                                    {card.link && !card.button ? (
                                        <a href={card.link} className="text-[#F89542] font-bold text-base lg:text-lg hover:underline block mb-2 break-all">
                                            {card.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-800 font-semibold text-base lg:text-lg mb-2">{card.content}</p>
                                    )}
                                    {card.subtext && (
                                        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{card.subtext}</p>
                                    )}
                                    {card.button && (
                                        <a
                                            href={card.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-4 bg-[#25D366] text-white px-5 py-3 lg:px-6 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg text-sm lg:text-base"
                                        >
                                            {card.button}
                                        </a>
                                    )}
                                    {card.note && <p className="text-xs text-gray-400 mt-3">{card.note}</p>}
                                    {!card.note && <p className="text-xs text-green-600 font-semibold mt-3">✓ CONFIRMED</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule Call Section - White Background */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-10 lg:p-16 shadow-xl border border-gray-100 text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#F89542] to-[#ff9d5c] rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
                                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                            </div>
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A4E] mb-4">
                                Prefer to Schedule a Call?
                            </h2>
                            <p className="text-base sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Book a free 30-minute discovery call at a time that works for you
                            </p>
                            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                                Schedule Free Consultation
                            </button>
                            <p className="text-xs sm:text-sm text-gray-500 mt-6">
                                Choose a convenient time for a video or phone call
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media - Light Navy Background */}
            <section className="py-12 sm:py-16 bg-gradient-to-br from-[#1B2A4E]/5 to-[#1B2A4E]/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1B2A4E] mb-3">
                        Connect With Us
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-8">
                        Follow us for payment industry insights and updates
                    </p>
                    <div className="flex justify-center gap-4">
                        {[
                            { name: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                            { name: 'Twitter', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                            { name: 'Facebook', path: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' },
                            { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                aria-label={social.name}
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1B2A4E] hover:bg-gradient-to-br hover:from-[#F89542] hover:to-[#ff9d5c] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg"
                            >
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={social.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-6">/* Social media links TBD */</p>
                </div>
            </section>

            {/* Final CTA - Orange Gradient */}
            <section className="py-12 sm:py-20 bg-gradient-to-r from-[#F89542] to-[#ff9d5c] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">
                        Ready to Optimize Your Payments?
                    </h2>
                    <p className="text-base sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto opacity-95">
                        Let's start with a free consultation
                    </p>
                    <button className="inline-flex items-center gap-2 bg-white text-[#F89542] px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-[#1B2A4E] hover:text-white transition-all duration-300 shadow-2xl hover:scale-105">
                        Get Started Today
                    </button>
                </div>
            </section>
        </div>
    );
}
