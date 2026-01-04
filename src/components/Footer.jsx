import React from 'react';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-900 text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-serif text-gold-400 font-bold tracking-tight">STUDIO<span className="text-white">X</span></h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Capturing your most precious moments with cinematic elegance and storytelling perfection.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif mb-6 text-gold-400">Quick Links</h4>
                        <ul className="space-y-3 font-light text-gray-300">
                            <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-gold-400 transition-colors">Services</Link></li>
                            <li><Link to="/gallery" className="hover:text-gold-400 transition-colors">Portfolio</Link></li>
                            <li><Link to="/investment" className="hover:text-gold-400 transition-colors">Investment</Link></li>
                            <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif mb-6 text-gold-400">Contact Us</h4>
                        <ul className="space-y-4 text-gray-300 font-light">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-gold-400 mt-1" />
                                <span>Dariyapur, Begusarai, Bihar</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-gold-400" />
                                <span>+91 6201931911</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-gold-400" />
                                <span>studiox@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-lg font-serif mb-6 text-gold-400">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-dark-900 hover:bg-gold-400 transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-dark-900 hover:bg-gold-400 transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-dark-900 hover:bg-gold-400 transition-all duration-300">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm font-light">
                    <p>© {new Date().getFullYear()} Studiox. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
