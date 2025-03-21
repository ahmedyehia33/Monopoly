import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FreeSessionModal = ({ show, onClose, onBookNow }) => {
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
                        <h2 className="text-2xl font-bold mb-4">🎉 Free Session Offer!</h2>
                        <p className="mb-6 text-gray-600">Schedule your free session with one of our brokers today!</p>
                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={onBookNow} 
                                className="bg-gold text-white px-6 py-2 rounded hover:opacity-90 transition"
                            >
                                Book Now
                            </button>
                            <button 
                                onClick={onClose} 
                                className="bg-gray-700 text-white px-6 py-2 rounded hover:opacity-90 transition"
                            >
                                Book Later
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FreeSessionModal;