import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import haldiImg from '../assets/images/haldi_ceremony.jpg';
import baraatImg from '../assets/images/paricchavan.jpg';
import kathaImg from '../assets/images/katha.jpg';
import mandapImg from '../assets/images/mandap_real.jpg';
import chekaImg from '../assets/images/cheka.jpg';
import tilakImg from '../assets/images/tilak.jpg';
import imliImg from '../assets/images/imli.jpg';
import jaimalaImg from '../assets/images/jaimala.jpg';
import kanyadanImg from '../assets/images/kanyadan.jpg';
import pherasImg from '../assets/images/pheras.jpg';

// Portfolio Local Imports
import royalJaimala from '../assets/images/portfolio/royal_jaimala.jpg';
import heritageMandap from '../assets/images/portfolio/heritage_mandap.jpg';
import vidaaiImg from '../assets/images/portfolio/vidaai.jpg';
import sindoorDan from '../assets/images/portfolio/sindoor_dan.jpg';
import haldiJoy from '../assets/images/portfolio/haldi_joy.jpg';
import turmericVows from '../assets/images/portfolio/turmeric_vows.jpg';
import yellowCeleb from '../assets/images/portfolio/yellow_celeb.jpg';
import mehendiDetail from '../assets/images/portfolio/mehendi_detail.jpg';
import floralHaldi from '../assets/images/portfolio/floral_haldi.jpg';
import mehendiBride from '../assets/images/portfolio/mehendi_bride.jpg';
import heritageWalk from '../assets/images/portfolio/heritage_walk.jpg';
import gardenRomance from '../assets/images/portfolio/garden_romance.jpg';
import ethnicShoot from '../assets/images/portfolio/ethnic_shoot.jpg';
import goldenHour from '../assets/images/portfolio/golden_hour.jpg';
import lakesideLove from '../assets/images/portfolio/lakeside_love.jpg';
import casualCandid from '../assets/images/portfolio/casual_candid.jpg';
import preHeritage from '../assets/images/portfolio/pre_heritage.jpg';
import brideEmotional from '../assets/images/portfolio/bride_emotional.jpg';
import royalRedBride from '../assets/images/portfolio/royal_red_bride.jpg';
import classicGroom from '../assets/images/portfolio/classic_groom.jpg';
import gettingReady from '../assets/images/portfolio/getting_ready.jpg';
import regalSymmetry from '../assets/images/portfolio/regal_symmetry.jpg';
import groomPortrait from '../assets/images/portfolio/groom_portrait.jpg';
import indianBeauty from '../assets/images/portfolio/indian_beauty.jpg';
import modernGrace from '../assets/images/portfolio/modern_grace.jpg';
import grandSilhouette from '../assets/images/portfolio/grand_silhouette.jpg';
import baraatGrandeur from '../assets/images/portfolio/baraat_grandeur.jpg';
import dramaticStage from '../assets/images/portfolio/dramatic_stage.jpg';
import petalRain from '../assets/images/portfolio/petal_rain.jpg';
import royalArch from '../assets/images/portfolio/royal_arch.jpg';
import nightVows from '../assets/images/portfolio/night_vows.jpg';
import epicEntry from '../assets/images/portfolio/epic_entry.jpg';
import grandCeleb from '../assets/images/portfolio/grand_celeb.jpg';
import mandapAerial from '../assets/images/portfolio/mandap_aerial.jpg';
import shadowPlay from '../assets/images/portfolio/shadow_play.jpg';

const images = [
    // Shaadi Rituals
    { id: 1, src: kathaImg, category: "Shaadi", title: "Satya Narayan Katha" },
    { id: 2, src: tilakImg, category: "Shaadi", title: "Tilak Ritual" },
    { id: 3, src: mandapImg, category: "Shaadi", title: "Mandappachadan" },
    { id: 4, src: baraatImg, category: "Shaadi", title: "Paricchavan (Groom Welcome)" },
    { id: 5, src: jaimalaImg, category: "Shaadi", title: "Jaimala Ceremony" },
    { id: 6, src: kanyadanImg, category: "Shaadi", title: "Kanyadan Ritual" },
    { id: 7, src: pherasImg, category: "Shaadi", title: "Holy Pheras" },
    { id: 8, src: royalJaimala, category: "Shaadi", title: "Royal Jaimala" },
    { id: 9, src: heritageMandap, category: "Shaadi", title: "Heritage Mandap" },
    { id: 10, src: vidaaiImg, category: "Shaadi", title: "Emotional Vidaai" },
    { id: 38, src: sindoorDan, category: "Shaadi", title: "Sindoor Dan" },

    // Haldi & Mehendi
    { id: 11, src: haldiImg, category: "Haldi", title: "Traditional Haldi" },
    { id: 12, src: imliImg, category: "Haldi", title: "Imli Ghutai Ritual" },
    { id: 13, src: haldiJoy, category: "Haldi", title: "Haldi Joy" },
    { id: 14, src: turmericVows, category: "Haldi", title: "Turmeric Vows" },
    { id: 15, src: yellowCeleb, category: "Haldi", title: "Yellow Celebrations" },
    { id: 16, src: mehendiDetail, category: "Haldi", title: "Detailed Mehendi" },
    { id: 17, src: floralHaldi, category: "Haldi", title: "Floral Haldi Setup" },
    { id: 18, src: mehendiBride, category: "Haldi", title: "Mehendi Bride" },
    { id: 20, src: haldiImg, category: "Haldi", title: "Haldi Moments" },
    { id: 52, src: haldiJoy, category: "Haldi", title: "Haldi Blessings" },
    { id: 53, src: turmericVows, category: "Haldi", title: "Ritual Glow" },

    // Pre-Wedding
    { id: 21, src: chekaImg, category: "Pre-Wedding", title: "Cheka Ceremony" },
    { id: 22, src: heritageWalk, category: "Pre-Wedding", title: "Heritage Walk" },
    { id: 23, src: gardenRomance, category: "Pre-Wedding", title: "Garden Romance" },
    { id: 24, src: ethnicShoot, category: "Pre-Wedding", title: "Ethnic Shoot" },
    { id: 25, src: goldenHour, category: "Pre-Wedding", title: "Golden Hour" },
    { id: 26, src: lakesideLove, category: "Pre-Wedding", title: "Lakeside Love" },
    { id: 28, src: casualCandid, category: "Pre-Wedding", title: "Casual Candid" },
    { id: 29, src: preHeritage, category: "Pre-Wedding", title: "Timeless Heritage" },
    { id: 30, src: heritageWalk, category: "Pre-Wedding", title: "Patna Ghat Shoot" },
    { id: 54, src: ethnicShoot, category: "Pre-Wedding", title: "Cultural Essence" },

    // Portraits
    { id: 31, src: brideEmotional, category: "Portraits", title: "Emotional Bihari Bride" },
    { id: 32, src: royalRedBride, category: "Portraits", title: "Royal Red Bridal" },
    { id: 33, src: classicGroom, category: "Portraits", title: "Classic Groom" },
    { id: 34, src: gettingReady, category: "Portraits", title: "Getting Ready" },
    { id: 35, src: regalSymmetry, category: "Portraits", title: "Regal Symmetry" },
    { id: 36, src: groomPortrait, category: "Portraits", title: "Groom Depth" },
    { id: 39, src: indianBeauty, category: "Portraits", title: "Indian Beauty" },
    { id: 41, src: modernGrace, category: "Portraits", title: "Modern Grace" },
    { id: 55, src: brideEmotional, category: "Portraits", title: "Bridal Gaze" },
    { id: 56, src: classicGroom, category: "Portraits", title: "Groom's Style" },
    { id: 57, src: regalSymmetry, category: "Portraits", title: "Symmetrical Bride" },

    // Cinematic
    { id: 42, src: grandSilhouette, category: "Cinematic", title: "Grand Silhouette" },
    { id: 43, src: baraatGrandeur, category: "Cinematic", title: "Baraat Grandeur" },
    { id: 44, src: dramaticStage, category: "Cinematic", title: "Dramatic Stage" },
    { id: 45, src: petalRain, category: "Cinematic", title: "Petal Rain" },
    { id: 46, src: royalArch, category: "Cinematic", title: "Royal Architecture" },
    { id: 47, src: nightVows, category: "Cinematic", title: "Night Vows" },
    { id: 48, src: epicEntry, category: "Cinematic", title: "Epic Entry" },
    { id: 49, src: grandCeleb, category: "Cinematic", title: "Grand Celebration" },
    { id: 50, src: mandapAerial, category: "Cinematic", title: "Mandap Aerial" },
    { id: 51, src: shadowPlay, category: "Cinematic", title: "Shadow Play" },
];

const categories = ["All", "Shaadi", "Haldi", "Pre-Wedding", "Portraits", "Cinematic"];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All"
        ? images
        : images.filter(img => img.category === activeCategory);

    return (
        <div className="bg-warm-50 min-h-screen">
            <Helmet>
                <title>Portfolio | Studiox - Premium Wedding Photography in Bihar</title>
                <meta name="description" content="Explore the cinematic wedding stories captured by Studiox across Begusarai and Bihar." />
            </Helmet>

            {/* Editorial Header - Switched to DARK for cinematic consistency and navbar visibility */}
            <section className="bg-dark-900 pt-48 pb-24 text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-400/[0.03] -z-0"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10"
                >
                    <span className="section-subtitle !text-gold-400">A Visual Journey</span>
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-tight">Portfolio</h1>
                    <div className="w-[1px] h-16 bg-gold-400 mx-auto opacity-30 mb-12"></div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase pb-2 transition-all border-b-2 ${activeCategory === cat ? 'border-gold-400 text-white' : 'border-transparent text-white/40 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Masonry Grid */}
            <section className="py-20 px-4 md:px-12">
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-[1600px] mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6 }}
                                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500"
                                onClick={() => setSelectedImage(img)}
                            >
                                <div className="relative">
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/10 transition-colors"></div>
                                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        <h3 className="text-white font-serif text-xl mb-1">{img.title}</h3>
                                        <p className="text-gold-400 text-[10px] tracking-widest uppercase font-sans font-bold">{img.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-dark-900/98 flex items-center justify-center p-6 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
                            <X size={32} strokeWidth={1} />
                        </button>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-w-full max-h-full object-contain"
                        />
                        <div className="absolute bottom-12 left-12 text-left">
                            <p className="text-gold-400 text-xs tracking-widest uppercase mb-2">Portfolio Selection</p>
                            <h3 className="text-white font-serif text-3xl md:text-5xl">{selectedImage.title}</h3>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
