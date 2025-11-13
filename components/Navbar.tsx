
import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';
// FIX: Import missing MenuIcon and XIcon
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './icons';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#publications', label: 'Publications' },
    { href: '#contact', label: 'Contact' },
];

// FIX: Refactor component to be a plain function instead of using React.FC
const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const sectionIds = navLinks.map(link => link.href.substring(1));
    const activeId = useScrollSpy(sectionIds, { rootMargin: '0px 0px -50% 0px' });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
        exit: { opacity: 0, y: -20 }
    };

    const mobileLinkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glassmorphic-nav shadow-lg' : ''}`}>
            <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold gradient-text">SD</a>

                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative text-gray-300 hover:text-white transition-colors duration-300 text-sm
                                ${activeId === link.href.substring(1) ? 'font-semibold text-white' : ''}`}
                        >
                            {link.label}
                            {activeId === link.href.substring(1) && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-500"
                                    layoutId="underline"
                                />
                            )}
                        </a>
                    ))}
                </div>

                <div className="flex items-center">
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 mr-2 md:mr-4">
                        {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                    </button>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden glassmorphic-nav pb-4"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center space-y-4">
                            {navLinks.map(link => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg ${activeId === link.href.substring(1) ? 'gradient-text font-bold' : 'text-gray-300'}`}
                                    variants={mobileLinkVariants}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;