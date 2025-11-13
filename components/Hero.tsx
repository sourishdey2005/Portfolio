
import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
// FIX: Import missing icons
import { DownloadIcon, GithubIcon, LinkedinIcon, LinktreeIcon } from './icons';
import { motion } from 'framer-motion';

const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/sourishdey2005' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/sourish-dey-20b170206' },
    { name: 'Linktree', icon: LinktreeIcon, url: 'https://linktr.ee/Sourishdey' },
];

// FIX: Refactor component to be a plain function instead of using React.FC
const Hero = () => {
    const roles = ["Cloud Engineer", "Data Scientist", "MLOps Engineer", "DevOps Specialist"];
    const animatedRole = useTypewriter(roles);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center pt-24 pb-12">
            <motion.div 
                className="max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="w-32 h-32 md:w-40 md:h-40 mb-6 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center shadow-2xl"
                    variants={itemVariants}
                >
                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">SD</span>
                </motion.div>

                <motion.h1 className="text-4xl md:text-6xl font-bold mb-3" variants={itemVariants}>
                    Hi, I'm Sourish Dey.
                </motion.h1>

                <motion.h2 className="text-2xl md:text-4xl font-light mb-6" variants={itemVariants}>
                    A <span className="gradient-text font-medium">{animatedRole}</span>
                    <span className="animate-ping text-gray-400">|</span>
                </motion.h2>
                
                <motion.p className="text-md md:text-lg max-w-3xl mx-auto mb-8 text-gray-300" variants={itemVariants}>
                    Highly motivated Cloud and Data Science Engineer with 3+ years of experience in building intelligent, scalable, and secure digital ecosystems. Proficient in AWS, MLOps, IaC, and Kubernetes, with a proven success in transforming data into predictive analytics.
                </motion.p>
                
                <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8" variants={itemVariants}>
                    <a
                        href="https://drive.google.com/drive/folders/168bz7BoVzSX98UaZkXcRdEo0Ck8K6EzF?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 w-full sm:w-auto"
                    >
                        <DownloadIcon className="w-5 h-5 mr-2" />
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-full shadow-lg hover:bg-white/20 transform transition-colors duration-300 w-full sm:w-auto"
                    >
                        💬 Contact Me
                    </a>
                </motion.div>

                <motion.div className="flex justify-center space-x-6" variants={itemVariants}>
                    {socialLinks.map(({ name, icon: Icon, url }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                        >
                            <Icon className="w-7 h-7" />
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;