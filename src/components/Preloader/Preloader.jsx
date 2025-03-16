import React from 'react';
import './preloader.css';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ isLoading }) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="preloader-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.img
                        src="/logos/FOR WHITE BACKGROUND.png"
                        alt="logo"
                        className="preloader-logo"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1.1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default Preloader;