import { Mail, Phone, Globe, Linkedin, Twitter, Facebook, Instagram, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1B2A4E] text-white border-t border-white/5">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white/5 p-2 rounded-lg">
                                <Globe className="w-8 h-8 text-[#F89542]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">AWPS</h3>
                                <p className="text-xs text-[#F89542] font-medium tracking-wide">PAYMENT SOLUTIONS</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering African businesses with expert payment consulting services.
                            We help you optimize payment systems, reduce costs, and scale operations across the continent.
                        </p>
                        <div className="pt-2">
                            <p className="text-sm text-[#F89542] font-semibold">Transforming Payments. Elevating Performance.</p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/about', label: 'About Us' },
                                { to: '/services', label: 'Services' },
                                { to: '/pricing', label: 'Pricing' },
                                { to: '/faq', label: 'FAQ' },
                                { to: '/contact', label: 'Contact' },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-gray-400 hover:text-[#F89542] transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F89542] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Phone className="w-5 h-5 mr-3 mt-0.5 text-[#F89542] flex-shrink-0" />
                                <div>
                                    <a href="tel:+254728333898" className="text-sm text-gray-400 hover:text-[#F89542] transition-colors">
                                        +254 728 333 898
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 mt-0.5 text-[#F89542] flex-shrink-0" />
                                <div>
                                    <a href="mailto:info.africawps@gmail.com" className="text-sm text-gray-400 hover:text-[#F89542] transition-colors break-all">
                                        info.africawps@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Clock className="w-5 h-5 mr-3 mt-0.5 text-[#F89542] flex-shrink-0" />
                                <div className="text-sm text-gray-400">
                                    <p className="text-white font-medium mb-1">Business Hours</p>
                                    <p>Mon-Fri: 8:00 AM - 6:00 PM EAT</p>
                                    <p>Sat: 9:00 AM - 2:00 PM EAT</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#F89542] flex-shrink-0" />
                                <div className="text-sm text-gray-400">
                                    <p>Nairobi, Kenya</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Social */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Stay Connected</h4>
                        <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest payment insights.</p>

                        {/* Newsletter Form */}
                        <div className="flex flex-col space-y-3 mb-8">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-lg bg-white text-[#1B2A4E] placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F89542]"
                            />
                            <button className="w-full px-4 py-3 bg-[#F89542] text-white rounded-lg hover:bg-[#e8854a] transition-colors text-sm font-bold shadow-md">
                                Subscribe
                            </button>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-3">
                            {[
                                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                                { Icon: Twitter, href: '#', label: 'Twitter' },
                                { Icon: Facebook, href: '#', label: 'Facebook' },
                                { Icon: Instagram, href: '#', label: 'Instagram' },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#F89542] text-white flex items-center justify-center transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-[#15203a]/50">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-500 text-center md:text-left">
                            © {currentYear} AWPS - Africa Worldwide Payment Solutions. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link to="#" className="text-gray-500 hover:text-[#F89542] transition-colors">Privacy Policy</Link>
                            <Link to="#" className="text-gray-500 hover:text-[#F89542] transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
