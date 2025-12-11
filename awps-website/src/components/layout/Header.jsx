import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/pricing', label: 'Pricing' },
        { path: '/faq', label: 'FAQ' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-navy shadow-lg py-3'
                    : 'bg-navy/95 backdrop-blur-md py-4'
                }`}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <Globe className="w-10 h-10 text-orange transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-orange/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div>
                            <span className="text-2xl lg:text-3xl font-bold text-white tracking-tight">AWPS</span>
                            <p className="text-[10px] lg:text-xs text-orange font-medium -mt-1">Payment Solutions</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-300 ${location.pathname === item.path
                                        ? 'text-orange bg-white/10'
                                        : 'text-white hover:text-orange hover:bg-white/5'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="ml-4 bg-orange text-white px-6 xl:px-8 py-2.5 xl:py-3 rounded-lg font-semibold text-sm xl:text-base hover:bg-white hover:text-navy transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 btn-hover-lift"
                        >
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${location.pathname === item.path
                                        ? 'text-orange bg-white/10'
                                        : 'text-white hover:text-orange hover:bg-white/5'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="block text-center bg-orange text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-navy transition-all duration-300 shadow-lg mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
