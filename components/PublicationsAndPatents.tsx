import React from 'react';
import { Publication, Patent } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
// FIX: Import missing icons
import { BookOpenIcon, LightBulbIcon } from './icons';
import { motion } from 'framer-motion';

const publicationsData: Publication[] = [
    {
        title: "IoT and Computer Vision for Urban Traffic Management",
        journal: "International Journal for Multidisciplinary Research (IJFMR)",
        date: "Feb 11, 2025",
        description: "A novel smart urban traffic management system synergistically integrating IoT and computer vision. The system employs a hybrid edge-cloud architecture with a distributed network of intelligent IoT devices (smart cameras with on-device AI, LIDAR, radar) to capture real-time traffic data. Edge computing nodes perform localized analysis for immediate responses like adaptive traffic signal adjustments, while the cloud platform aggregates data for comprehensive pattern analysis and predictive modeling. Advanced computer vision algorithms (YOLOv8) provide critical insights into traffic dynamics.",
    },
    {
        title: "Smart Breathe: IoT-Integrated Community Air Purification System",
        journal: "International Journal for Multidisciplinary Research (IJFMR)",
        date: "Dec 18, 2024",
        description: "An innovative IoT-integrated air purification system to combat air pollution in high-density urban and industrial areas. Utilizing a distributed architecture, the system employs real-time monitoring and dynamic adaptivity to optimize air purification at pollution hotspots. Advanced sensors track pollutants like PM2.5, NO₂, and VOCs, while a centralized IoT platform analyzes data to provide actionable insights for targeted interventions, enhancing public health and promoting environmental equity.",
    },
    {
        title: "Quantum Computing for Nuclear Fusion: Advancing Simulation and Optimization",
        journal: "International Journal for Multidisciplinary Research (IJFMR)",
        date: "Dec 10, 2024",
        description: "This paper explores the transformative potential of quantum computing in revolutionizing nuclear fusion. It focuses on leveraging quantum algorithms to enhance simulation accuracy and optimize energy production processes, paving the way for cleaner and more efficient energy solutions. The work aims to combine cutting-edge quantum technologies with energy innovation to contribute to a sustainable and energy-secure future.",
    },
];

const patentsData: Patent[] = [
    { id: "468494-001", title: "AI-Powered Smart Agriculture Drone", description: "Filed for autonomous drone system leveraging AI for precision agriculture, crop monitoring, and predictive yield analysis." },
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
                            <div key={pub.title} className="glassmorphic-card p-6 flex flex-col">
                                <h4 className="font-bold text-lg text-white mb-1">{pub.title}</h4>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-400 mb-3">
                                    <span className="font-semibold gradient-text">{pub.journal}</span>
                                    <span>{pub.date}</span>
                                </div>
                                <p className="text-gray-300 text-sm mb-4 flex-grow">{pub.description}</p>
                                {pub.authors && <p className="text-xs text-gray-500 mt-auto text-right">{pub.authors}</p>}
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