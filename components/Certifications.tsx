import React from 'react';
import { CertificationGroup } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
// FIX: Import missing icons
import { AWSIcon, GcpIcon, LinuxIcon, IBMIcon, CheckIcon, MicrosoftIcon, FreeCodeCampIcon } from './icons';
import { motion } from 'framer-motion';

const certificationsData: CertificationGroup[] = [
    {
        issuer: "Google Cloud & Terraform",
        Icon: GcpIcon,
        certs: [
            "Google Cloud Cybersecurity Certificate",
            "Build Infrastructure with Terraform",
            "Manage Kubernetes in Google Cloud",
            "Cloud Computing Foundations",
            "Generative AI Certificate"
        ]
    },
    {
        issuer: "AWS & Docker",
        Icon: AWSIcon,
        certs: [
            "AWS Machine Learning Foundations",
            "AWS Cloud Essentials",
            "Basic DevSecOps in AWS",
            "Basic Docker Training"
        ]
    },
    {
        issuer: "Linux Foundation & Kubernetes",
        Icon: LinuxIcon,
        certs: [
            "LFS158: Introduction to Kubernetes",
            "LFS167: Introduction to Jenkins",
            "LFS151: Cloud Infrastructure Technologies",
            "LFD110: Introduction to RISC-V"
        ]
    },
    {
        issuer: "IBM & Deep Learning",
        Icon: IBMIcon,
        certs: [
            "Deep Learning with TensorFlow",
            "Accelerating Deep Learning with GPUs",
            "Machine Learning with Python",
            "Introduction to Quantum Computing",
            "Containers, Kubernetes, and OpenShift"
        ]
    },
    {
        issuer: "Microsoft & Data Analysis",
        Icon: MicrosoftIcon,
        certs: [
            "Career Essentials in Data Analysis",
            "Career Essentials in Generative AI",
            "Analyzing and Visualizing Data with Power BI"
        ]
    },
    {
        issuer: "freeCodeCamp & Python",
        Icon: FreeCodeCampIcon,
        certs: [
            "Machine Learning with Python",
            "Data Analysis with Python",
            "Data Visualization",
            "Scientific Computing with Python"
        ]
    }
];


const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 }
    })
};

// FIX: Refactor component to be a plain function instead of using React.FC
const Certifications = () => {
    return (
        <AnimatedSection id="certifications">
            <SectionHeader title="Certifications & Training" subtitle="My professional credentials" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {certificationsData.map((group, index) => {
                    const Icon = group.Icon;
                    return (
                        <motion.div
                            key={group.issuer}
                            className="glassmorphic-card p-6 flex flex-col"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={index}
                        >
                            <div className="flex items-center mb-4">
                                <Icon className="w-10 h-10 text-teal-400 mr-4 flex-shrink-0" />
                                <h3 className="text-xl font-bold text-white">{group.issuer}</h3>
                            </div>
                            <ul className="space-y-2 flex-grow">
                                {group.certs.map(cert => (
                                    <li key={cert} className="flex items-start">
                                        <CheckIcon className="w-4 h-4 text-teal-400 mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-gray-300 text-sm">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </AnimatedSection>
    );
};

export default Certifications;