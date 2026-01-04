import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Camera, Film, Heart, Play, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import haldiImg from '../assets/images/haldi_ceremony.jpg';
import baraatImg from '../assets/images/paricchavan.jpg';
import jaimalaImg from '../assets/images/jaimala.jpg';
import pherasImg from '../assets/images/pheras.jpg';
import dramaticStage from '../assets/images/portfolio/dramatic_stage.jpg';
import heritageMandap from '../assets/images/portfolio/heritage_mandap.jpg';

const ServiceItem = ({ title, desc, img, reverse, icon: Icon }) => (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 md:gap-24 mb-32`}>
        <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 overflow-hidden shadow-2xl rounded-sm"
        >
            <img src={img} alt={title} className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000" />
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
        >
            <div className="flex items-center gap-4 text-gold-500">
                <Icon size={24} />
                <span className="font-sans text-xs tracking-widest uppercase font-bold">Studiox Excellence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-dark-900 leading-tight">{title}</h2>
            <p className="text-gray-500 text-lg font-sans font-light leading-relaxed">{desc}</p>
            <div className="pt-4">
                <Link to="/contact" className="btn-outline">Inquire for Details</Link>
            </div>
        </motion.div>
    </div>
);

const Services = () => {
    return (
        <div className="bg-warm-50">
            <Helmet>
                <title>Services | Studiox - Premium Wedding Photography in Bihar</title>
                <meta name="description" content="View our range of services: Candid Photography, Cinematic Films, and Pre-Wedding shoots in Begusarai & Patna." />
            </Helmet>

            {/* Header */}
            <section className="bg-dark-900 pt-48 pb-24 text-center px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full -mr-32 -mt-32"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10"
                >
                    <span className="section-subtitle !text-gold-400">Our Craft</span>
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-8">What We Offer</h1>
                    <div className="w-[1px] h-12 bg-gold-400 mx-auto opacity-30"></div>
                </motion.div>
            </section>

            {/* Main Services */}
            <section className="py-32 px-6 lg:px-24">
                <div className="container mx-auto max-w-7xl">
                    <ServiceItem
                        title="Royal Shaadi Stories"
                        desc="From the grand Baraat to the intimate rituals of a traditional Bihari wedding, we ensure no emotion is missed. Our candid team focuses on the raw joy, while our traditional team covers every important ritual with precision."
                        img={jaimalaImg}
                        icon={Camera}
                    />
                    <ServiceItem
                        title="Cinematic Wedding Reels"
                        reverse
                        desc="Experience your wedding like a motion picture. Our cinematic films use 4K production, expert color grading, and emotional storytelling to create a legacy you'll watch for generations. Available across Bihar and India."
                        img={dramaticStage}
                        icon={Film}
                    />
                    <ServiceItem
                        title="Pre-Wedding Art"
                        desc="Tell your unique love story before the grand day. We travel to Bihar's heritage sites or exotic destination locations to capture your chemistry in an editorial, high-fashion style."
                        img={heritageMandap}
                        icon={Heart}
                    />
                </div>
            </section>

            {/* Process Section - Bihar Specific */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-24">
                        <span className="section-subtitle">How We Work</span>
                        <h2 className="section-title">The Studiox Experience</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div className="space-y-6">
                            <div className="w-20 h-20 bg-warm-50 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                <Users size={32} className="text-gold-500 font-light" />
                            </div>
                            <h4 className="text-2xl font-serif text-dark-900 leading-tight">Consultation</h4>
                            <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                                We meet in our Begusarai studio to understand your rituals, family dynamics, and vision.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-20 h-20 bg-warm-50 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                <Play size={32} className="text-gold-500 font-light" />
                            </div>
                            <h4 className="text-2xl font-serif text-dark-900 leading-tight">The Big Day</h4>
                            <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                                Our elite team arrive with high-end gear to document your celebrations with zero intrusion.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-20 h-20 bg-warm-50 rounded-full flex items-center justify-center mx-auto shadow-sm">
                                <Star size={32} className="text-gold-500 font-light" />
                            </div>
                            <h4 className="text-2xl font-serif text-dark-900 leading-tight">Master Editing</h4>
                            <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                                Hand-picked photos and color-graded films delivered via a private online gallery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
