import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Portfolio', path: '/gallery' },
        { name: 'Films', path: '/services' },
        { name: 'Investment', path: '/investment' },
        { name: 'Our Story', path: '/about' },
        { name: 'Location', path: '/location' },
        { name: 'Contact', path: '/contact' },
    ];

    // Determine text color based on scroll
    const getTextColor = () => {
        if (scrolled) return 'text-dark-900';
        return 'text-white';
    };

    const getSubTextColor = () => {
        if (scrolled) return 'text-gray-400';
        return 'text-white/60';
    };

    const getButtonClass = () => {
        if (scrolled) return 'bg-gold-400 border-gold-400 text-white hover:bg-gold-500 shadow-md';
        return 'bg-white/10 border-white/20 text-white hover:bg-white/20';
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-warm-100' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="group flex flex-col">
                    <span className={`text-3xl font-serif font-bold tracking-tight transition-colors drop-shadow-sm ${getTextColor()}`}>
                        STUDIO<span className="text-gold-400">X</span>
                    </span>
                    <span className={`text-[8px] tracking-[0.5em] uppercase font-sans transition-opacity drop-shadow-sm ${getSubTextColor()}`}>
                        Wedding & Films
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-12">
                    <div className="flex gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs font-sans font-semibold tracking-widest uppercase transition-all hover:text-gold-400 drop-shadow-sm ${getTextColor()}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <a
                        href="tel:+911234567890"
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-[10px] tracking-widest uppercase font-bold transition-all border ${getButtonClass()}`}
                    >
                        <Phone size={14} />
                        Inquire Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden transition-colors ${getTextColor()}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8 lg:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-2xl font-serif text-dark-900 hover:text-gold-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="w-12 h-[1px] bg-warm-100 my-4"></div>
                        <a href="tel:+911234567890" className="flex items-center gap-3 text-gold-500 font-sans tracking-widest uppercase text-xs font-bold">
                            <Phone size={16} />
                            Call Studiox
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
