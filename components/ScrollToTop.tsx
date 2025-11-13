
import React, { useState, useEffect } from 'react';
// FIX: Import missing ArrowUpIcon
import { ArrowUpIcon } from './icons';
import { motion, AnimatePresence } from 'framer-motion';

// FIX: Refactor component to be a plain function instead of using React.FC
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transform transition-transform duration-300 z-50"
                    aria-label="Scroll to top"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <ArrowUpIcon className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;