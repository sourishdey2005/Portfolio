
import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
// FIX: Import missing icons
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon, LinktreeIcon } from './icons';

const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/sourishdey2005' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/sourish-dey-20b170206' },
    { name: 'Linktree', icon: LinktreeIcon, url: 'https://linktr.ee/Sourishdey' },
    { name: 'Email', icon: MailIcon, url: 'mailto:sourish713321@gmail.com' },
];

// FIX: Refactor component to be a plain function instead of using React.FC
const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // A simple alert for demo purposes.
        alert("Thank you for your message! This is a demo form.");
        (e.target as HTMLFormElement).reset();
    };
    
    return (
        <AnimatedSection id="contact">
            <SectionHeader title="Get In Touch" subtitle="Let's build something amazing" />
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                    <p className="text-gray-300 mb-6">
                        I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out via email or connect with me on social media.
                    </p>
                    <div className="space-y-3 mb-8">
                        <p className="flex items-center"><MailIcon className="w-5 h-5 mr-3 text-teal-400"/> sourish713321@gmail.com</p>
                        <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-teal-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg> +91-9064648823</p>
                    </div>
                    <div className="flex space-x-4 mb-8">
                        {socialLinks.map(({ name, icon: Icon, url }) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="glassmorphic-card p-8">
                    <h3 className="text-2xl font-bold mb-6 text-white text-center">Send me a message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-300 mb-2 sr-only">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full bg-slate-800/50 border border-white/20 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 mb-2 sr-only">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full bg-slate-800/50 border border-white/20 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-300 mb-2 sr-only">Message</label>
                            <textarea id="message" name="message" rows={4} placeholder="Your Message" required className="w-full bg-slate-800/50 border border-white/20 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400"></textarea>
                        </div>
                        <button type="submit" className="flex items-center justify-center w-full px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
                            <SendIcon className="w-5 h-5 mr-2" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;