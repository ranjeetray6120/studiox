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

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Determine text color based on scroll
    const getTextColor = () => {
        return 'text-white';
    };

    const getSubTextColor = () => {
        if (scrolled || isOpen) return 'text-white/60';
        return 'text-white/80';
    };

    const getButtonClass = () => {
        if (scrolled) return 'bg-gold-400 border-gold-400 text-white hover:bg-gold-500 shadow-md';
        return 'bg-white/10 border-white/20 text-white hover:bg-white/20';
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-8'}`}>
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
                    className={`lg:hidden transition-colors relative z-[60] ${getTextColor()}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[55] bg-dark-900 w-full h-[100vh] flex flex-col justify-center items-center lg:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                    key={link.name}
                                >
                                    <Link
                                        to={link.path}
                                        className="text-4xl font-serif text-white hover:text-gold-400 transition-colors tracking-wide"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 flex flex-col items-center gap-6"
                        >
                            <div className="w-12 h-[1px] bg-gold-400/30"></div>
                            <a
                                href="tel:+911234567890"
                                className="flex items-center gap-3 text-gold-400 font-sans tracking-[0.2em] uppercase text-sm font-bold hover:text-gold-300 transition-colors"
                            >
                                <Phone size={18} />
                                Call Studiox
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
