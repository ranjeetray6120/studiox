import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Info, Star, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, subtitle, features, popular, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`bg-white p-8 md:p-12 relative flex flex-col h-full border ${popular ? 'border-gold-400 shadow-2xl' : 'border-warm-100 shadow-sm'}`}
    >
        {popular && (
            <div className="absolute top-0 right-0 bg-gold-400 text-white text-[10px] tracking-widest-xl px-4 py-2 uppercase font-bold">
                Most Chosen
            </div>
        )}
        <div className="mb-8">
            <Icon size={32} className="text-gold-500 mb-6" />
            <h3 className="text-3xl font-serif text-dark-900 mb-2">{title}</h3>
            <p className="text-gray-400 text-xs tracking-widest uppercase font-sans font-semibold mb-6">{subtitle}</p>
            <div className="flex items-baseline gap-2">
                <span className="text-4xl font-serif text-gold-500 font-bold">{price}</span>
                <span className="text-gray-400 text-xs font-sans">Starting At</span>
            </div>
        </div>

        <ul className="space-y-5 mb-12 flex-grow">
            {features.map((feature, idx) => (
                <li key={idx} className="flex gap-3 text-sm font-sans font-light text-gray-500">
                    <Check size={16} className="text-gold-500 flex-shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>

        <Link to="/contact" className={`w-full text-center py-4 font-sans text-[10px] tracking-widest-xl uppercase font-bold transition-all ${popular ? 'bg-gold-400 text-white hover:bg-gold-500' : 'border border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white'}`}>
            Book This Package
        </Link>
    </motion.div>
);

const PriceList = () => {
    return (
        <div className="bg-warm-50 font-sans">
            <Helmet>
                <title>Investment | Studiox - Premium Wedding Packages in Bihar</title>
                <meta name="description" content="View Studiox wedding photography and cinematic film packages for Begusarai and Patna weddings." />
            </Helmet>

            {/* Header */}
            <section className="bg-dark-900 pt-48 pb-24 text-center px-6 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gold-400/[0.02] -z-0"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10"
                >
                    <span className="section-subtitle !text-gold-400">Our Investment</span>
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-8">Packages</h1>
                    <div className="w-[1px] h-12 bg-gold-400 mx-auto opacity-30 mb-8"></div>
                    <p className="text-white/90 text-sm font-sans font-light max-w-lg mx-auto tracking-wide">
                        "Investing in memories that will be cherished in your family for generations."
                    </p>
                </motion.div>
            </section>

            {/* Pricing Grid */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <PricingCard
                            icon={Heart}
                            title="Pre-Wedding"
                            subtitle="The Story Begins"
                            price="₹25,000"
                            features={[
                                "1 Day Shoot in Bihar Locations",
                                "50 Retouched High-Res Images",
                                "2-3 Minute Cinematic Teaser",
                                "Makeup & Stylist Advice",
                                "Online Private Gallery"
                            ]}
                        />
                        <PricingCard
                            icon={Star}
                            popular
                            title="Royal Wedding"
                            subtitle="Grand Documentation"
                            price="₹1,25,000"
                            features={[
                                "3 Days Coverage (Haldi/Sangeet/Shaadi)",
                                "Elite 4-Member Team",
                                "Unlimited Candid & Trad. Photos",
                                "15 Min Cinematic Highlight Film",
                                "Premium Italian Canvas Album",
                                "Raw Footage Delivery"
                            ]}
                        />
                        <PricingCard
                            icon={Award}
                            title="Legacy Film"
                            subtitle="The Elite Experience"
                            price="₹2,50,000"
                            features={[
                                "Complete Wedding Week Coverage",
                                "Elite 8-Member Production Team",
                                "4K Master Cinema Film (30 Min)",
                                "2 Premium Wedding Albums",
                                "Drone & Crane Shoots Included",
                                "Life-time Cloud Storage"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Custom Inquiry */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="w-16 h-16 bg-warm-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                        <Info size={28} className="text-gold-500" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-dark-900 mb-6">Need a <span className="italic">Custom</span> Package?</h2>
                    <p className="text-gray-500 font-sans font-light mb-12 leading-relaxed">
                        Every wedding in Bihar is unique. Whether it's a 1-day intimate ceremony or a 7-day grand affair, we can tailor a package that fits your family's needs perfectly.
                    </p>
                    <Link to="/contact" className="btn-gold">Request Custom Quote</Link>
                </div>
            </section>
        </div>
    );
};

export default PriceList;
