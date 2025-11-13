
import React from 'react';
import { Publication, Patent } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
// FIX: Import missing icons
import { BookOpenIcon, LightBulbIcon } from './icons';
import { motion } from 'framer-motion';

const publicationsData: Publication[] = [
    { title: "Quantum Computing for Nuclear Fusion", journal: "IJFMR", year: 2024 },
    { title: "Smart Breathe: IoT Air Quality System", journal: "IJFMR", year: 2024 },
    { title: "IoT-Based Smart Traffic Monitoring", journal: "IJFMR", year: 2025 },
];

const patentsData: Patent[] = [
    { id: "450888-001", title: "AI-Powered Smart Agriculture Drone", description: "Filed for autonomous drone system leveraging AI for precision agriculture, crop monitoring, and predictive yield analysis." },
    { id: "450888-001", title: "Underwater Power Generator", description: "Filed for renewable underwater kinetic energy generator using magneto-inductive turbine systems." },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// FIX: Refactor component to be a plain function instead of using React.FC
const PublicationsAndPatents = () => {
    return (
        <AnimatedSection id="publications">
            <SectionHeader title="Publications & Patents" subtitle="My research and innovations" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="flex items-center text-2xl font-bold mb-6 text-white"><BookOpenIcon className="w-7 h-7 mr-3 text-teal-400"/> Publications</h3>
                    <div className="space-y-6">
                        {publicationsData.map((pub) => (
                            <div key={pub.title} className="glassmorphic-card p-5">
                                <p className="font-semibold text-lg text-white">{pub.title}</p>
                                <p className="text-gray-400">{pub.journal} - {pub.year}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="flex items-center text-2xl font-bold mb-6 text-white"><LightBulbIcon className="w-7 h-7 mr-3 text-teal-400"/> Patents</h3>
                    <div className="space-y-6">
                        {patentsData.map((patent) => (
                            <div key={patent.title} className="glassmorphic-card p-5">
                                <p className="font-semibold text-lg text-white">{patent.title}</p>
                                <p className="text-sm text-gray-500 mb-2">ID: {patent.id}</p>
                                <p className="text-gray-300">{patent.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default PublicationsAndPatents;