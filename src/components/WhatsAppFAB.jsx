import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFAB = () => {
    const phoneNumber = "911234567890"; // Placeholder for Studiox
    const message = encodeURIComponent("Hi Studiox, I'm interested in booking a wedding shoot. Can you share your packages?");
    const whatsappUrl = `https://wa.me/${+916201931911}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
        >
            <MessageCircle size={32} fill="white" className="group-hover:rotate-12 transition-transform" />
            <span className="absolute right-full mr-4 bg-white text-dark-900 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                Inquire on WhatsApp
            </span>
        </motion.a>
    );
};

export default WhatsAppFAB;
