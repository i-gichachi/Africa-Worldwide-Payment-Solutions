import { Mail, Phone, Globe, Linkedin, Twitter, Facebook, Instagram, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-navy via-navy to-[#15203a] text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                            <Globe className="w-8 h-8 text-orange animate-float" />
                            <div>
                                <h3 className="text-2xl font-bold">AWPS</h3>
                                <p className="text-xs text-orange">Payment Solutions</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Empowering African businesses with expert payment consulting services.
                            We help you optimize payment systems, reduce costs, and scale operations across the continent.
                        </p>
                        <div className="pt-4">
                            <p className="text-xs text-orange font-semibold mb-2">Transforming Payments. Elevating Performance.</p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-orange">Quick Links</h4>
                        <ul className="space-y-2.5">
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
                                        className="text-sm text-gray-300 hover:text-orange transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-orange">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start group">
                                <Phone className="w-5 h-5 mr-3 mt-0.5 text-orange group-hover:scale-110 transition-transform" />
                                <div>
                                    <a href="tel:+254728333898" className="text-sm text-gray-300 hover:text-orange transition-colors">
                                        +254 728 333 898
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <Mail className="w-5 h-5 mr-3 mt-0.5 text-orange group-hover:scale-110 transition-transform" />
                                <div>
                                    <a href="mailto:info.africawps@gmail.com" className="text-sm text-gray-300 hover:text-orange transition-colors break-all">
                                        info.africawps@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <Clock className="w-5 h-5 mr-3 mt-0.5 text-orange group-hover:scale-110 transition-transform" />
                                <div className="text-xs text-gray-300">
                                    <p className="font-semibold text-white mb-1">Business Hours</p>
                                    <p>Mon-Fri: 8:00 AM - 6:00 PM EAT</p>
                                    <p>Sat: 9:00 AM - 2:00 PM EAT</p>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-orange group-hover:scale-110 transition-transform" />
                                <div className="text-xs text-gray-300">
                                    <p>Nairobi, Kenya</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-orange">Follow Us</h4>
                        <p className="text-sm text-gray-300 mb-4">Stay connected for updates and insights</p>
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
                                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-orange flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Newsletter Signup */}
                        <div className="mt-6">
                            <p className="text-sm text-gray-300 mb-2">Subscribe to our newsletter</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 rounded-l-lg bg-white/10 border border-white/20 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange"
                                />
                                <button className="px-4 py-2 bg-orange rounded-r-lg hover:bg-white hover:text-navy transition-colors text-sm font-semibold">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {currentYear} AWPS - Africa Worldwide Payment Solutions. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link to="#" className="text-gray-400 hover:text-orange transition-colors">Privacy Policy</Link>
                            <Link to="#" className="text-gray-400 hover:text-orange transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
