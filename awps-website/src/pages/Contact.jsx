import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
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
                    message: ''
                });
            }, 3000);
        }, 1500);
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
                            Get in <span className="text-[#F89542]">Touch</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Let's discuss how we can help transform your payment systems
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section - Two Columns */}
            <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">

                        {/* LEFT: CONTACT FORM - Enhanced */}
                        <div>
                            <div className="mb-6 md:mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1B2A4E] mb-3 md:mb-4">
                                    Send Us a Message
                                </h2>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    Fill out the form below and our team will get back to you within 24 hours
                                </p>
                            </div>

                            {/* Form - Premium styling */}
                            {isSubmitted ? (
                                <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-8 md:p-10 text-center shadow-lg">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-green-700 text-sm md:text-base">
                                        Thanks! We'll be in touch within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                    {/* Name field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#1B2A4E] mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#F89542] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-700 text-sm md:text-base"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    {/* Email field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#1B2A4E] mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#F89542] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-700 text-sm md:text-base"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>

                                    {/* Phone field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#1B2A4E] mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#F89542] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-700 text-sm md:text-base"
                                            placeholder="+254 700 000 000"
                                        />
                                    </div>

                                    {/* Company field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#1B2A4E] mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#F89542] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-700 text-sm md:text-base"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    {/* Message field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#1B2A4E] mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#F89542] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-700 resize-none text-sm md:text-base"
                                            placeholder="Tell us about your payment needs..."
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[#F89542] to-orange-400 text-white px-8 py-4 rounded-xl font-bold hover:from-[#e8854a] hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* RIGHT: CONTACT INFO - Premium cards */}
                        <div className="space-y-4 md:space-y-6">
                            <div className="mb-6 md:mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1B2A4E] mb-3 md:mb-4">
                                    Contact Information
                                </h2>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    Choose your preferred way to reach us
                                </p>
                            </div>

                            {/* Phone Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#F89542] hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#F89542]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-bold text-[#1B2A4E] mb-2">
                                                Call Us
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-600 mb-3">
                                                Mon-Fri: 8:00 AM - 6:00 PM EAT
                                            </p>
                                            <a href="tel:+254728333898" className="text-[#F89542] font-bold hover:text-orange-600 transition-colors flex items-center gap-2 text-sm md:text-base">
                                                +254 728 333 898
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#F89542] hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#F89542]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-bold text-[#1B2A4E] mb-2">
                                                Email Us
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-600 mb-3">
                                                We'll respond within 24 hours
                                            </p>
                                            <a href="mailto:info.africawps@gmail.com" className="text-[#F89542] font-bold hover:text-orange-600 transition-colors break-all flex items-center gap-2 text-sm md:text-base">
                                                info.africawps@gmail.com
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#F89542] hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-[#F89542]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-bold text-[#1B2A4E] mb-2">
                                                WhatsApp
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-600 mb-4">
                                                Quick responses during business hours
                                            </p>
                                            <a
                                                href="https://wa.me/254728333898"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-[#F89542] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
                                            >
                                                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                                                <span>Start Chat</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#F89542] hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <MapPin className="w-6 h-6 md:w-7 md:h-7 text-[#F89542]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-bold text-[#1B2A4E] mb-2">
                                                Visit Us
                                            </h3>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                Nairobi, Kenya<br />
                                                <span className="text-gray-500 text-xs">By appointment only</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Business Hours Section - Compact */}
            <section className="py-12 md:py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1B2A4E] mb-6 md:mb-8 text-center">
                            Business Hours
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6 text-center">
                            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#F89542]" />
                                </div>
                                <h4 className="font-bold text-[#1B2A4E] mb-2 text-base md:text-lg">Weekdays</h4>
                                <p className="text-sm md:text-base text-gray-600">Monday - Friday<br />8:00 AM - 6:00 PM EAT</p>
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                                </div>
                                <h4 className="font-bold text-[#1B2A4E] mb-2 text-base md:text-lg">Weekends</h4>
                                <p className="text-sm md:text-base text-gray-600">Saturday - Sunday<br />Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
