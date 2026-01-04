import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import { motion } from 'framer-motion';
import { Camera, Film, Users, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import haldiImg from '../assets/images/haldi_ceremony.jpg';
import baraatImg from '../assets/images/paricchavan.jpg';
import jaimalaImg from '../assets/images/jaimala.jpg';
import mandapImg from '../assets/images/mandap_real.jpg';
import kathaImg from '../assets/images/katha.jpg';

const Home = () => {
    return (
        <div className="bg-warm-50 overflow-hidden font-sans">
            <Helmet>
                <title>Studiox | Best Wedding Photographer in Begusarai, Bihar</title>
                <meta name="description" content="Studiox is Bihar's premier photography studio specializing in candid wedding photography and cinematic films in Begusarai, Patna, and Munger." />
            </Helmet>

            <Hero />

            <TrustBar />

            {/* Introduction Section - Cultural Focus */}
            <section className="py-32 bg-white relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-warm-50/50 -z-0"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative z-10"
                            >
                                <img
                                    src={mandapImg}
                                    alt="Traditional Indian Wedding Rituals"
                                    className="w-full h-[600px] object-cover shadow-2xl rounded-sm"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-10 -left-10 w-2/3 hidden md:block"
                            >
                                <img
                                    src={haldiImg}
                                    alt="Indian Bride Portrait"
                                    className="w-full h-auto shadow-2xl rounded-sm border-8 border-white"
                                />
                            </motion.div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <span className="section-subtitle">A Legacy of Bihar's Heritage</span>
                            <h2 className="section-title">
                                We Believe into <span className="italic text-gold-500">Authenticity</span>.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed font-sans font-light mb-10">
                                From the banks of the Ganges in <span className="text-dark-900 font-semibold">Begusarai</span> to the grand venues of <span className="text-dark-900 font-semibold">Patna</span>, Studiox preserves the vibrant essence of Bihari weddings. We celebrate every ritual—from the playful <span className="italic text-gold-600 font-medium">Khichdi</span> ceremony to the emotional <span className="italic text-gold-600 font-medium">Vidaai</span>.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-3 border-l-2 border-gold-400 pl-6">
                                    <div className="flex items-center gap-3 text-gold-500">
                                        <Camera size={20} />
                                        <span className="font-serif text-xl">Candid Soul</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed font-sans">Unscripted emotions of your traditions, captured forever.</p>
                                </div>
                                <div className="space-y-3 border-l-2 border-gold-400 pl-6">
                                    <div className="flex items-center gap-3 text-gold-500">
                                        <Film size={20} />
                                        <span className="font-serif text-xl">Grand Cinema</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed font-sans">Bollywood-style cinematic films starring you and your family.</p>
                                </div>
                            </div>

                            <Link to="/about" className="btn-gold">
                                Our Story & Experience
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Categories - Bihar Specific */}
            <section className="py-32 bg-warm-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-24">
                        <span className="section-subtitle">Our Specializations</span>
                        <h2 className="section-title">What we capture <span className="italic font-light">Best</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Grand Shaadi", desc: "Complete documentation of the royal Indian wedding rituals.", icon: Star, img: jaimalaImg },
                            { title: "Pre-Wedding Films", desc: "Cinematic love stories at Bihar's iconic heritage locations.", icon: Play, img: baraatImg },
                            { title: "Cultural Rituals", desc: "Vibrant Haldi, Mehendi, and Sangeet celebrations.", icon: Users, img: haldiImg }
                        ].map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group relative"
                            >
                                <div className="overflow-hidden relative rounded-lg aspect-[4/5] shadow-xl">
                                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-dark-900 to-transparent pt-20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <cat.icon className="text-gold-400" size={18} />
                                            <h3 className="text-2xl font-serif text-white">{cat.title}</h3>
                                        </div>
                                        <p className="text-white/70 text-sm font-sans font-light">{cat.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Local Context */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <span className="section-subtitle">Real Stories</span>
                    <h2 className="section-title mb-16">Client <span className="italic font-light">Love</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        {[
                            { name: "Rahul & Anjali", location: "Patna", text: "Studiox captured our wedding like a Bollywood dream. The team understood our Bihari traditions so well, especially the rituals in the Mandap." },
                            { name: "Sandeep & Priya", location: "Begusarai", text: "Best decision we made! Their cinematic film team is world-class. Every time we watch our video, we relive the joy of our Sangeet." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-warm-50 p-10 relative"
                            >
                                <div className="absolute top-0 right-0 p-4 text-gold-400 opacity-20">
                                    <Users size={60} strokeWidth={1} />
                                </div>
                                <p className="text-gray-600 font-sans font-light italic mb-6 leading-relaxed">"{item.text}"</p>
                                <div>
                                    <h4 className="font-serif text-xl text-dark-900">{item.name}</h4>
                                    <p className="text-gold-500 text-xs tracking-widest uppercase">{item.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Local Call */}
            <section className="py-32 bg-dark-900 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-400/5 rotate-12 translate-x-1/2"></div>
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <h2 className="text-4xl md:text-7xl font-serif text-white font-medium mb-12 leading-tight">
                        Planning a <br /> <span className="italic text-gold-400">Bihar Wedding?</span>
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-sans font-light mb-16 italic">
                        "Your rituals are sacred, your photos should be too."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link to="/contact" className="btn-gold px-14">Get Free Consultation</Link>
                        <a href="tel:+911234567890" className="text-white/80 hover:text-white font-sans tracking-widest text-xs border-b border-white/20 pb-2 transition-all">
                            OR CALL +91 1234 567 890
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
