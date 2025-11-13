
import React from 'react';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
// FIX: Import missing icons
import { GithubIcon, CheckIcon } from './icons';
import { motion } from 'framer-motion';

const projectsData: Project[] = [
    {
        title: "Veda-Motrix AI",
        subtitle: "Autonomous Vehicle Management Ecosystem",
        description: "Developed a multi-tenant AI-powered vehicle management system with predictive maintenance and anomaly detection.",
        achievements: [
            "Integrated real-time telemetry and cloud microservices.",
            "Optimized fleet operations by 30% through AI-driven modules."
        ],
        tech: ["Python", "FastAPI", "AWS", "TensorFlow"],
        githubLink: "https://github.com/sourishdey2005"
    },
    {
        title: "Vajra AI",
        subtitle: "Smart Industrial Automation Platform",
        description: "Engineered a computer vision-based automation platform for real-time monitoring and reporting.",
        achievements: [
            "Reduced manual inspection by 60%.",
            "Deployed cloud dashboards for real-time monitoring."
        ],
        tech: ["Python", "OpenCV", "Flask", "AWS"],
        githubLink: "https://github.com/sourishdey2005"
    },
    {
        title: "Customer Churn Prediction System",
        subtitle: "Predictive Analytics for Customer Retention",
        description: "Built and deployed a high-accuracy model to forecast customer churn, applying SHAP for model explainability.",
        achievements: [
            "Achieved 86.2% accuracy and 0.81 F1-score.",
            "Derived actionable retention insights using SHAP."
        ],
        tech: ["Python", "XGBoost", "Pandas", "SHAP"],
        githubLink: "https://github.com/sourishdey2005"
    },
    {
        title: "AWS EC2 Cloud Automation Bot",
        subtitle: "Infrastructure as Code Automation",
        description: "Automated EC2 provisioning and management using UiPath and Terraform, supporting scalable cloud operations.",
        achievements: [
            "Reduced provisioning time by 70%.",
            "Supported 50+ concurrent operations with enterprise-grade scalability."
        ],
        tech: ["UiPath", "Terraform", "AWS SDK"],
        githubLink: "https://github.com/sourishdey2005"
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
        }
    })
};

// FIX: Refactor component to be a plain function instead of using React.FC
const Projects = () => {
    return (
        <AnimatedSection id="projects">
            <SectionHeader title="Featured Projects" subtitle="Innovations and implementations" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="glassmorphic-card p-6 flex flex-col group"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={index}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                                        aria-label={`GitHub for ${project.title}`}
                                    >
                                        <GithubIcon className="w-6 h-6" />
                                    </a>
                                )}
                            </div>
                            <p className="gradient-text font-semibold text-md mb-3">{project.subtitle}</p>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <ul className="space-y-2 mb-4">
                                {project.achievements.map((ach, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckIcon className="w-4 h-4 text-teal-400 mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-gray-400 text-sm">{ach}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map(t => (
                                <span key={t} className="bg-teal-500/20 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Projects;