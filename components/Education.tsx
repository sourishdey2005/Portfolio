
import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

const educationData = [
    {
        institution: 'Kalinga Institute of Industrial Technology (KIIT)',
        degree: 'B.Tech. in Computer Engineering',
        date: 'July 2023 – Dec 2027 (Expected)',
        details: [
            'Relevant Coursework: Data Structures, Algorithms, Operating Systems, DBMS, OOP, Networks, Probability, Statistics'
        ],
    },
    {
        institution: 'Hem Sheela Model School',
        degree: 'Senior Secondary (AISSCE) — Science',
        date: '2023',
        details: ['Final Score: 91%'],
    },
    {
        institution: 'Hem Sheela Model School',
        degree: 'Secondary (AISSE)',
        date: '2020',
        details: ['Final Score: 98%'],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5 },
    }),
};

// FIX: Refactor component to be a plain function instead of using React.FC
const Education = () => {
    return (
        <AnimatedSection id="education">
            <SectionHeader title="Education" subtitle="My academic journey" />
            <div className="max-w-4xl mx-auto space-y-8">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.institution}
                        className="glassmorphic-card p-6 sm:p-8"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={index}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">{edu.institution}</h3>
                            <p className="font-light text-gray-400 mt-1 sm:mt-0">{edu.date}</p>
                        </div>
                        <p className="text-lg gradient-text font-semibold mb-3">{edu.degree}</p>
                        {edu.details.map((detail, i) => (
                             <p key={i} className="text-gray-300">{detail}</p>
                        ))}
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Education;