import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
    return (
        <>
            <Helmet>
                <title>Location | Studiox - Best Studio in Begusarai</title>
                <meta name="description" content="Visit Studiox in Begusarai, Bihar. The most trusted wedding studio for cinematic photography and films." />
            </Helmet>

            {/* Hero Header */}
            <section className="bg-dark-900 pt-40 pb-20 text-center text-white">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif mb-6"
                    >
                        Visit Our <br /> <span className="text-gold-400 italic font-light">Studio</span>
                    </motion.h1>
                    <div className="w-16 h-[1px] bg-gold-400 mx-auto opacity-40"></div>
                </div>
            </section>

            <section className="py-24 bg-warm-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-serif text-dark-900 mb-8 border-b border-warm-100 pb-4 uppercase tracking-widest text-sm font-bold">Begusarai Flagship Studio</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gold-500 flex-shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-2xl text-dark-900 mb-2">Our Address</h4>
                                            <p className="text-gray-500 font-sans font-light leading-relaxed">
                                                Studiox Tower, Near Har-Har Mahadev Chowk,<br />
                                                GT Road, Begusarai, Bihar - 851101
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gold-500 flex-shrink-0">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-2xl text-dark-900 mb-2">Studio Hours</h4>
                                            <p className="text-gray-500 font-sans font-light leading-relaxed">
                                                Monday - Saturday: 10:00 AM - 08:00 PM<br />
                                                Sunday: Via Appointment Only
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gold-500 flex-shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-2xl text-dark-900 mb-2">Call Us</h4>
                                            <p className="text-gray-500 font-sans font-light leading-relaxed">
                                                For Bookings: +91 1234 567 890<br />
                                                Support: +91 9876 543 210
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-dark-900 p-10 rounded-sm text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full -mr-16 -mt-16"></div>
                                <h3 className="text-2xl font-serif mb-4 text-gold-400">Work in Bihar?</h3>
                                <p className="text-white/60 font-sans font-light text-sm leading-relaxed mb-6">
                                    Our teams travel extensively across Patna, Munger, Khagaria, and beyond. Inquire for destination wedding availability.
                                </p>
                                <a href="https://wa.me/911234567890" className="text-gold-400 font-bold uppercase tracking-widest text-xs border-b border-gold-400 pb-1">Chat on WhatsApp</a>
                            </div>
                        </motion.div>

                        {/* Google Maps Integration */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="h-[600px] w-full bg-white shadow-2xl skew-y-1 overflow-hidden"
                        >
                            {/* Replace with your actual Google Maps embed link for Begusarai */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107293809!2d86.06176527476839!3d25.4214534720613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2010c732488a3%3A0xc3ecd5c5040e3f22!2sBegusarai%2C%20Bihar!5e0!3m2!1sen!2sin!4v1704285880000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Local Landmark Hint */}
            <section className="py-20 bg-white text-center">
                <h5 className="font-sans text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-4">Proudly Serving</h5>
                <div className="flex flex-wrap justify-center gap-10 opacity-40 grayscale h-10 items-center">
                    <span className="text-xl font-serif">Begusarai</span>
                    <span className="text-xl font-serif">Patna</span>
                    <span className="text-xl font-serif">Munger</span>
                    <span className="text-xl font-serif">Samastipur</span>
                    <span className="text-xl font-serif">Bihar</span>
                </div>
            </section>
        </>
    );
};

export default Location;
