import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import gettingReady from '../assets/images/portfolio/getting_ready.jpg';
import royalArch from '../assets/images/portfolio/royal_arch.jpg';
import grandCeleb from '../assets/images/portfolio/grand_celeb.jpg';

const About = () => {
    return (
        <div className="bg-warm-50 overflow-hidden font-sans">
            <Helmet>
                <title>About Us | Studiox - Bihar's Legacy Wedding Studio</title>
                <meta name="description" content="Learn more about Studiox, the premier wedding photography studio in Begusarai, Bihar. Over 12 years of capturing memories." />
            </Helmet>

            {/* Hero Header */}
            <section className="bg-dark-900 pt-48 pb-24 text-center text-white relative">
                <div className="absolute inset-0 bg-gold-400/[0.03] -z-0"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="container mx-auto px-6 relative z-10"
                >
                    <span className="text-gold-400 font-sans tracking-widest-xl uppercase text-xs mb-8 block">Our Story</span>
                    <h1 className="text-5xl md:text-8xl font-serif mb-10 leading-[0.9] text-white">Beyond the <br /> <span className="text-gold-400 italic font-light">Shutter</span></h1>
                    <div className="w-[1px] h-12 bg-gold-400 mx-auto opacity-30"></div>
                </motion.div>
            </section>

            {/* The Legacy Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2 space-y-10">
                            <span className="section-subtitle">A Decade of Excellence</span>
                            <h2 className="section-title">Bihar's Most <span className="italic">Trusted</span> Storytellers.</h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                                <p>
                                    Started in 2012 in the heart of <span className="text-dark-900 font-medium">Begusarai</span>, Studiox was born from a simple passion: to preserve the soul of Indian weddings with cinematic grandeur.
                                </p>
                                <p>
                                    What began as a small boutique studio has now documented over <span className="text-dark-900 font-medium italic">850 weddings</span> across Bihar, from Patna to Munger and Samastipur. Our team understands the cultural nuances of every ritual, ensuring that your heritage is preserved with dignity and style.
                                </p>
                            </div>
                            <div className="pt-6">
                                <img
                                    src={gettingReady}
                                    alt="Studiox Team at Work"
                                    className="w-full h-auto rounded-sm border-warm-100 border-[1px] object-cover"
                                />
                                <p className="text-[10px] tracking-widest uppercase mt-4 text-gray-400">Captured at our Begusarai HQ</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-12 bg-warm-50 p-12 md:p-20 relative">
                            <div className="absolute top-0 left-0 w-2 h-full bg-gold-400"></div>

                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <h4 className="font-serif text-4xl text-dark-900 italic">"Rituals meet Art."</h4>
                                    <p className="text-gray-500 font-sans font-light leading-relaxed italic">
                                        We don't just photograph ceremonies; we capture the emotions of families coming together. In Bihar, weddings are a festival of love, and we are its official historians.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-2">
                                        <p className="text-3xl font-serif text-gold-500">12+</p>
                                        <p className="text-[10px] tracking-widest uppercase font-sans font-bold text-gray-400">Years Exp.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-3xl font-serif text-gold-500">5+ Cities</p>
                                        <p className="text-[10px] tracking-widest uppercase font-sans font-bold text-gray-400">Main Presence</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden">
                                <img
                                    src={royalArch}
                                    alt="Royal Bihar Wedding Still"
                                    className="w-full h-[400px] object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-dark-900/10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Local Touch */}
            <section className="py-32 bg-warm-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-24">
                        <span className="section-subtitle">Our Promise</span>
                        <h2 className="section-title">The Studiox <br /> <span className="italic font-light">Standards</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        <div className="space-y-6">
                            <h5 className="text-gold-500 text-5xl font-serif italic mb-6">01.</h5>
                            <h4 className="text-2xl font-serif text-dark-900">Cultural Pride</h4>
                            <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                                We know every step of a Maithili or Magahi wedding. We respect traditions while applying a modern cinematic lens.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h5 className="text-gold-500 text-5xl font-serif italic mb-6">02.</h5>
                            <h4 className="text-2xl font-serif text-dark-900">Elite Gear</h4>
                            <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                                Sony Alpha 7R V sensors, Cinematic Drones, and Master Color Grading—technology from Mumbai, delivered in Bihar.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h5 className="text-gold-500 text-5xl font-serif italic mb-6">03.</h5>
                            <h4 className="text-2xl font-serif text-dark-900">Swift Delivery</h4>
                            <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                                Teaser in 7 days, Complete Gallery in 45 days. We value your excitement as much as our art.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
