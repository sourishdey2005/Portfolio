
import React from 'react';
import { Experience as ExperienceType } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

const experienceData: ExperienceType[] = [
    {
        role: "Data Science Intern",
        company: "Uptricks Services Pvt. Ltd.",
        date: "Oct 2025 – Present",
        description: [
            "Applied core Data Science methodologies on datasets of 50,000+ rows.",
            "Developed predictive models improving decision-making accuracy by 25%."
        ],
    },
    {
        role: "Research Intern",
        company: "IISER Thiruvananthapuram",
        date: "Apr 2025 – Present",
        description: [
            "Spearheaded federated learning authentication research for IoT devices, enhancing data confidentiality by 38%.",
            "Architected AES-encrypted ESP32 communications, ensuring 99.7% data integrity.",
        ],
    },
    {
        role: "Zero Trust Cloud Security Intern",
        company: "Zscaler",
        date: "Jan 2025 – Mar 2025",
        description: [
            "Implemented IAM policies and cloud security measures, reducing unauthorized access risk by 45%.",
            "Analyzed threats and vulnerabilities using SIEM tools.",
        ],
    },
    {
        role: "Cloud Executive",
        company: "Coding Ninjas KIIT",
        date: "Jul 2024 – Present",
        description: [
            "Designed and orchestrated AWS microservice deployments, accelerating build cycles by 55%.",
            "Implemented Terraform-based IaC achieving 100% reproducible cloud infrastructure.",
        ],
    },
];

const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

// FIX: Refactor component to be a plain function instead of using React.FC
const Experience = () => {
    return (
        <AnimatedSection id="experience">
            <SectionHeader title="Experience" subtitle="My professional journey" />
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={timelineItemVariants}
                    >
                        <div className="absolute left-4 sm:left-1/2 top-2 w-4 h-4 bg-teal-400 rounded-full -translate-x-1/2 border-4 border-slate-900"></div>
                        <div className={`ml-10 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:ml-auto'}`}>
                            <p className="font-bold text-lg text-white">{exp.role}</p>
                            <p className="gradient-text font-semibold">{exp.company}</p>
                            <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
                            <ul className="space-y-1">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-gray-300 text-sm list-disc list-inside sm:list-none">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Experience;