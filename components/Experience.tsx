import React from 'react';
import { Experience as ExperienceType } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { CheckIcon } from './icons';

const experienceData: ExperienceType[] = [
    {
        role: "Data Science Intern",
        company: "Uptricks Services Pvt. Ltd.",
        type: "Internship",
        location: "Remote",
        date: "Oct 2025 – Present",
        description: [
            "Working as a Data Science Intern, applying analytical skills to real-world datasets.",
            "Developing predictive models and contributing to data-driven decision-making processes."
        ],
    },
    {
        role: "Head of Research And Development",
        company: "KINETEX LAB KIIT CHAPTER",
        type: "Part-time",
        location: "Bhubaneswar, Odisha",
        date: "Oct 2025 – Present",
        description: [
            "Leading research and development initiatives within the KINETEX LAB student chapter.",
            "Overseeing projects from conception to completion in emerging technology domains."
        ]
    },
    {
        role: "Data Analyst Intern",
        company: "Overload Ware Labs AI",
        type: "Internship",
        location: "Remote",
        date: "Sep 2025 – Present",
        description: [
            "Performing data analysis to extract actionable insights for AI-driven products.",
            "Collaborating with a team of engineers and data scientists in a remote environment."
        ]
    },
    {
        role: "Research Internship",
        company: "IISER Thiruvananthapuram",
        type: "Internship",
        location: "Hybrid · Thiruvananthapuram, Kerala",
        date: "Apr 2025 – Present",
        description: [
            "Engaged in research focusing on Cloud Services and Cloud Infrastructure.",
            "Contributed to hybrid research projects combining on-site and remote work."
        ],
    },
    {
        role: "Cloud Automation Executive",
        company: "USC.KIIT",
        type: "Full-time",
        location: "Hybrid · Bhubaneswar, Odisha",
        date: "Apr 2025 – Present",
        description: [
            "Automating cloud infrastructure and processes to improve efficiency and reliability.",
            "Working with a team to manage and scale cloud services in a hybrid model."
        ]
    },
    {
        role: "Team Member",
        company: "CyberVault KIIT",
        type: "Part-time",
        location: "On-site · Bhubaneswar, Odisha",
        date: "Sep 2024 – Present",
        description: [
            "Contributing as an Executive Team Member in cybersecurity initiatives.",
            "Participating in workshops and events to promote cybersecurity awareness."
        ]
    },
    {
        role: "Cloud Computing Executive",
        company: "Coding Ninjas: KIIT Chapter",
        type: "Full-time",
        location: "Bhubaneswar, Odisha",
        date: "Jul 2024 – Present",
        description: [
            "Leading initiatives and projects related to Cloud Computing and Cloud Applications.",
            "Mentoring peers and organizing workshops on cloud technologies."
        ],
    },
    {
        role: "Secretary & Operation Team Lead",
        company: "KITPD2S Society",
        type: "Full-time",
        location: "On-site · Bhubaneshwar, Odisha",
        date: "Sep 2024 – Sep 2025",
        description: [
            "Managed operations and led projects in Cloud Computing, IoT, Research, and Patents.",
            "Served as POC, Domain Lead, and Associate Marketing Head for various events."
        ]
    },
    {
        role: "Data Analyst",
        company: "Coding Samurai",
        type: "Internship",
        location: "Remote",
        date: "Jul 2025 – Aug 2025",
        description: [
            "Worked as a Data Analyst Intern, focusing on data processing and analysis.",
            "Contributed to projects that required statistical analysis and visualization."
        ]
    },
    {
        role: "Data Analyst",
        company: "Codec Technologies India",
        type: "Internship",
        location: "Remote",
        date: "Apr 2025 – Jul 2025",
        description: [
            "Participated in a Data Analytics project as an intern.",
            "Utilized Python for data manipulation and analysis to meet project objectives."
        ]
    },
    {
        role: "Zero Trust Cloud Security Intern",
        company: "Zscaler",
        type: "Internship",
        location: "Remote",
        date: "Jan 2025 – Mar 2025",
        description: [
            "Completed a virtual internship on Zscaler's Zero Trust cloud security.",
            "Gained practical experience in cloud security concepts and technologies."
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
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={timelineItemVariants}
                    >
                        <div className="absolute left-4 sm:left-1/2 top-2 w-4 h-4 bg-teal-400 rounded-full -translate-x-1/2 border-4 border-slate-900"></div>
                        <div className={`ml-10 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8 sm:ml-auto'}`}>
                             <div className="glassmorphic-card p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white text-left">{exp.role}</h3>
                                    <span className="bg-teal-500/20 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">{exp.type}</span>
                                </div>
                                <p className="gradient-text font-semibold text-left">{exp.company}</p>
                                <div className="text-sm text-gray-400 my-2 flex flex-col sm:flex-row justify-between text-left">
                                    <span>{exp.date}</span>
                                    <span>{exp.location}</span>
                                </div>
                                <ul className="space-y-2 mt-4 text-left">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-300 text-sm">
                                            <CheckIcon className="w-4 h-4 text-teal-400 mr-2 mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Experience;