
import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
// FIX: Import missing CheckCircleIcon
import { CheckCircleIcon } from './icons';

// FIX: Refactor component to be a plain function instead of using React.FC
const About = () => {
    const competencies = [
        "Cloud Architecture", "MLOps & Model Deployment", "AI/ML Implementation",
        "Predictive Analytics", "Zero Trust Security", "Agile Collaboration",
        "Data-Driven Decision-Making", "Strategic Problem Solving", "Risk Mitigation"
    ];

    return (
        <AnimatedSection id="about">
            <SectionHeader title="About Me" subtitle="Professional Profile" />
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-300 mb-12">
                    I am a results-driven engineer with a strong foundation in computer science, currently pursuing a B.Tech at KIIT University. My passion lies at the intersection of AI/ML, cloud infrastructure, and DevOps. I thrive on solving complex problems and am constantly exploring new technologies to build efficient, scalable, and intelligent systems that deliver measurable impact.
                </p>
                <div className="glassmorphic-card p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Core Competencies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-left">
                        {competencies.map((competency, index) => (
                            <div key={index} className="flex items-center">
                                <CheckCircleIcon className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                                <span>{competency}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;