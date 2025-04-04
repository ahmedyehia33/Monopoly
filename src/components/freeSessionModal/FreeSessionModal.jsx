import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from "react-router-dom";


const FreeSessionModal = ({ show, onClose, onBookNow }) => {
    const { selectedLanguage } = useOutletContext();
    return (
        <AnimatePresence>
            {show && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">{selectedLanguage? "🎉 Free Session Offer!" : "🎉عرض جلسة مجانية!"}</h2>
                        <p className="mb-6 text-gray-600">{selectedLanguage? 
                        "Schedule your free session with one of our brokers today!" :
                        "حدد جلسة مجانية مع أحد وسطائنا اليوم!"}</p>
                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={onBookNow} 
                                className="bg-gold text-white px-6 py-2 rounded hover:opacity-90 transition"
                            >
                                {selectedLanguage? "Book Now" : "احجزالان"}
                            </button>
                            <button 
                                onClick={onClose} 
                                className="bg-gray-700 text-white px-6 py-2 rounded hover:opacity-90 transition"
                            >
                               {selectedLanguage? "Book Later" : "احجز لاحقا"}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FreeSessionModal;