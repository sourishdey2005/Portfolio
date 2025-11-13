import React from 'react';
import { Honor } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { AwardIcon } from './icons';
import { motion } from 'framer-motion';

const honorsData: Honor[] = [
    {
        title: "School Topper",
        issuer: "Hem Sheela Model School",
        date: "Jan 2023",
    },
    {
        title: "School Topper (98.5%)",
        issuer: "Hem Sheela Model School",
        date: "Jan 2020",
    },
    {
        title: "Gold Medalist",
        issuer: "International Maths Olympiad (SOF)",
        date: "High School",
    },
    {
        title: "Silver Medalist",
        issuer: "International Maths Olympiad (SOF)",
        date: "High School",
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 }
    })
};

const Honors = () => {
    return (
        <AnimatedSection id="honors">
            <SectionHeader title="Honors & Awards" subtitle="Recognition of my achievements" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {honorsData.map((honor, index) => (
                    <motion.div
                        key={index}
                        className="glassmorphic-card p-6 flex items-center space-x-4"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={index}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="flex-shrink-0">
                            <AwardIcon className="w-10 h-10 text-teal-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">{honor.title}</h3>
                            <p className="gradient-text font-semibold">{honor.issuer}</p>
                            <p className="text-sm text-gray-400">{honor.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Honors;