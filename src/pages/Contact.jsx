import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, Send, Mail } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | Studiox - Wedding Photographer in Begusarai</title>
                <meta name="description" content="Book Studiox for your upcoming wedding in Bihar. Professional cinematic photography and film services." />
            </Helmet>

            {/* Hero Header */}
            <section className="bg-dark-900 pt-40 pb-20 text-center text-white relative">
                <div className="absolute inset-0 bg-gold-400/5 -z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif mb-6 text-white"
                    >
                        Connect With <br /> <span className="text-gold-400 italic font-light">Studiox</span>
                    </motion.h1>
                    <div className="w-16 h-[1px] bg-gold-400 mx-auto opacity-40"></div>
                </div>
            </section>

            <section className="py-24 bg-warm-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 md:p-16 shadow-2xl relative"
                        >
                            <h2 className="text-3xl font-serif text-dark-900 mb-2">Book Your Date</h2>
                            <p className="text-gray-500 font-sans text-sm mb-10 tracking-widest uppercase">Bihar's Premium Service</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-dark-900">Full Name</label>
                                        <input type="text" placeholder="e.g. Rahul Sharma" required className="w-full border-b border-gray-200 py-3 focus:border-gold-400 outline-none font-sans font-light transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-dark-900">Phone (WhatsApp)</label>
                                        <input type="tel" placeholder="+91 00000 00000" required className="w-full border-b border-gray-200 py-3 focus:border-gold-400 outline-none font-sans font-light transition-all" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-dark-900">Event Date</label>
                                        <div className="relative">
                                            <input type="date" required className="w-full border-b border-gray-200 py-3 focus:border-gold-400 outline-none font-sans font-light transition-all bg-transparent" />
                                            <Calendar className="absolute right-0 top-3 text-gray-300 pointer-events-none" size={18} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-dark-900">Event Type</label>
                                        <select className="w-full border-b border-gray-200 py-3 focus:border-gold-400 outline-none font-sans font-light transition-all bg-transparent">
                                            <option>Hindu Wedding</option>
                                            <option>Pre-Wedding Shoot</option>
                                            <option>Cinematic Film Only</option>
                                            <option>Event/Engagement</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-dark-900">Tell us about your wedding</label>
                                    <textarea rows="4" placeholder="Mention venue, rituals, or any special requests..." className="w-full border-b border-gray-200 py-3 focus:border-gold-400 outline-none font-sans font-light transition-all resize-none"></textarea>
                                </div>

                                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-3">
                                    Check Available Dates
                                    <Send size={16} />
                                </button>
                            </form>

                            <AnimatePresence>
                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-x-10 bottom-10 bg-dark-900 text-white p-6 text-center shadow-xl z-20"
                                    >
                                        <h4 className="font-serif text-xl text-gold-400 mb-2">Inquiry Received!</h4>
                                        <p className="text-xs font-sans font-light tracking-widest uppercase">Thank you. Our team from Begusarai will call you shortly.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Quick Contact & Info */}
                        <div className="flex flex-col justify-center space-y-16">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-xs mb-4 block">Get in Touch</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-8 font-medium">Direct <br /> <span className="italic">Liaison</span></h2>

                                <div className="space-y-10">
                                    <a href="tel:+911234567890" className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 border border-warm-100 rounded-full flex items-center justify-center group-hover:border-gold-400 transition-colors">
                                            <Phone className="text-gold-500" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-[10px] tracking-widest uppercase mb-1">Call for Booking</p>
                                            <p className="text-xl font-serif text-dark-900 group-hover:text-gold-500 transition-colors">+91 1234 567 890</p>
                                        </div>
                                    </a>

                                    <a href="mailto:contact@studiox.com" className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 border border-warm-100 rounded-full flex items-center justify-center group-hover:border-gold-400 transition-colors">
                                            <Mail className="text-gold-500" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-[10px] tracking-widest uppercase mb-1">Corporate & Business</p>
                                            <p className="text-xl font-serif text-dark-900 group-hover:text-gold-500 transition-colors">contact@studiox.com</p>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>

                            <div className="bg-warm-100 p-10 relative overflow-hidden">
                                <div className="relative z-10">
                                    <p className="text-dark-900 font-serif text-xl italic mb-4">"We travel for love."</p>
                                    <p className="text-gray-500 text-sm font-sans font-light leading-relaxed">
                                        Currently serving Begusarai, Patna, Gaya, Bhagalpur, and Darbhanga. Available for destination weddings across India.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-24 bg-warm-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="h-[450px] w-full bg-white shadow-2xl overflow-hidden rounded-sm border border-warm-100"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107293809!2d86.06176527476839!3d25.4214534720613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2010c732488a3%3A0xc3ecd5c5040e3f22!2sBegusarai%2C%20Bihar!5e0!3m2!1sen!2sin!4v1704285880000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Studiox Location"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contact;
