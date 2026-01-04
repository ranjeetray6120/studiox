import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import mandapImage from '../assets/images/mandap.png';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-dark-900">
            {/* High-Impact Cultural Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 20, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-full"
                >
                    <img
                        src={mandapImage}
                        alt="Grand Bihari Wedding Mandap"
                        className="w-full h-full object-cover opacity-60"
                        style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.6)_100%)]"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mb-8 flex flex-col items-center"
                >
                    <span className="text-gold-400 font-sans tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold leading-relaxed mb-4">
                        The Soul of Mithila & Bihar
                    </span>
                    <div className="w-16 h-[1px] bg-gold-400 opacity-50 mb-8"></div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-white font-serif text-5xl md:text-8xl lg:text-9xl font-bold mb-10 leading-[0.9] tracking-tight drop-shadow-2xl"
                >
                    Cultural <br /> <span className="italic font-light text-gold-400">Grandeur</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white/90 text-lg md:text-xl font-sans font-light mb-14 max-w-2xl mx-auto leading-relaxed"
                >
                    Preserving the essence of <span className="text-white font-medium italic">Bihari traditions</span> — from the sacred <span className="text-gold-300">Mandap</span> to the emotional <span className="text-gold-300">Vidaai</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link to="/contact" className="btn-gold group flex items-center gap-3">
                        Check Availability
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/gallery" className="group flex items-center gap-4 text-white font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase hover:text-gold-400 transition-colors">
                        <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                            <Play size={12} className="ml-1 text-gold-400" />
                        </span>
                        View Showreel
                    </Link>
                </motion.div>
            </div>

            {/* Social Proof floating element */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-12 right-12 hidden md:block"
            >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col gap-1 items-end">
                    <span className="text-gold-400 text-3xl font-serif font-bold italic">850+</span>
                    <span className="text-white/60 text-[9px] tracking-widest uppercase font-sans">Weddings Documented</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
