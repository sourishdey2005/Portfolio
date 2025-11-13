import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    id: string;
}

// FIX: Refactor component to be a plain function instead of using React.FC
const AnimatedSection = ({ children, className, id }: AnimatedSectionProps) => {
    return (
        <motion.section
            id={id}
            className={`py-16 md:py-24 ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;