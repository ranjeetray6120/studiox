import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-dark-900">
            {/* High-Impact Indian Wedding Reel Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                >
                    {/* A vibrant Indian wedding scene - focus on rituals and emotions */}
                    <source src="https://videos.pexels.com/video-files/4255140/4255140-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-transparent to-dark-900"></div>
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
                        Premier Wedding Studio of Bihar
                    </span>
                    <div className="w-16 h-[1px] bg-gold-400 opacity-50 mb-8"></div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-white font-serif text-5xl md:text-8xl lg:text-9xl font-bold mb-10 leading-[0.9] tracking-tight"
                >
                    Preserving <br /> <span className="italic font-light text-gold-400">Timeless Legacies</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white/80 text-lg md:text-xl font-sans font-light mb-14 max-w-2xl mx-auto leading-relaxed"
                >
                    From the vibrant colors of <span className="text-white font-medium italic">Haldi</span> to the grand emotions of <span className="text-white font-medium italic">Vidaai</span>.
                    We capture the soul of your celebrations in Begusarai and beyond.
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
