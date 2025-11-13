
import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import { Skills } from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import PublicationsAndPatents from './components/PublicationsAndPatents';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// FIX: Refactor component to be a plain function instead of using React.FC
const App = () => {
    return (
        <ThemeProvider>
            <div className="relative overflow-x-hidden">
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <div className="absolute top-0 -left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob dark:opacity-20"></div>
                    <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000 dark:opacity-20"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000 dark:opacity-20"></div>
                </div>
                <style>{`
                    .animate-blob {
                        animation: blob 10s infinite;
                    }
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                    .animation-delay-4000 {
                        animation-delay: 4s;
                    }
                    @keyframes blob {
                        0% { transform: translate(0px, 0px) scale(1); }
                        33% { transform: translate(40px, -60px) scale(1.2); }
                        66% { transform: translate(-30px, 30px) scale(0.8); }
                        100% { transform: translate(0px, 0px) scale(1); }
                    }
                `}</style>

                <Navbar />
                <main className="container mx-auto px-6 md:px-12">
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Education />
                    <Certifications />
                    <PublicationsAndPatents />
                    <Contact />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </ThemeProvider>
    );
};

export default App;