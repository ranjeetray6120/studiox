import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
    const stats = [
        { label: "Weddings Captured", value: "850+" },
        { label: "Years of Legacy", value: "12+" },
        { label: "Awards Won", value: "25+" },
        { label: "Happy Families", value: "1000+" }
    ];

    return (
        <section className="py-20 bg-warm-50 border-y border-warm-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h4 className="text-4xl md:text-5xl font-serif text-gold-500 font-bold mb-2">{stat.value}</h4>
                            <p className="text-gray-500 text-xs tracking-widest-xl uppercase font-sans font-semibold">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
