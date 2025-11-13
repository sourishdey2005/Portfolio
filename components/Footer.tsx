
import React from 'react';
// FIX: Import missing icons
import { GithubIcon, LinkedinIcon, MailIcon, LinktreeIcon } from './icons';

const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/sourishdey2005' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/sourish-dey-20b170206' },
    { name: 'Linktree', icon: LinktreeIcon, url: 'https://linktr.ee/Sourishdey' },
    { name: 'Email', icon: MailIcon, url: 'mailto:sourish713321@gmail.com' },
];

// FIX: Refactor component to be a plain function instead of using React.FC
const Footer = () => {
    return (
        <footer className="bg-slate-900/50 dark:bg-black/50 py-6 mt-12 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <p className="text-gray-400 mb-4 sm:mb-0">
                    &copy; {new Date().getFullYear()} Sourish Dey. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    {socialLinks.map(({ name, icon: Icon, url }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                        >
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;