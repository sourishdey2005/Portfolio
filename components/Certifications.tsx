
import React from 'react';
import { CertificationGroup } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
// FIX: Import missing icons
import { AWSIcon, GcpIcon, LinuxIcon, IBMIcon, CiscoIcon, AwardIcon } from './icons';
import { motion } from 'framer-motion';

const certificationsData: CertificationGroup[] = [
    {
        issuer: "AWS Educate",
        Icon: AWSIcon,
        certs: ["Machine Learning Foundations", "Cloud Essentials"]
    },
    {
        issuer: "Google Cloud",
        Icon: GcpIcon,
        certs: ["Terraform", "GKE", "Generative AI", "Cybersecurity"]
    },
    {
        issuer: "Linux Foundation",
        Icon: LinuxIcon,
        certs: ["LFD110", "LFS167", "LFS158", "LFS151"]
    },
    {
        issuer: "IBM Cognitive Class",
        Icon: IBMIcon,
        certs: ["ML", "DL", "Quantum", "Big Data", "Containers"]
    },
    {
        issuer: "Infosys + Skillsoft",
        Icon: AwardIcon,
        certs: ["DevSecOps", "Docker", "CI/CD", "Blockchain"]
    },
    {
        issuer: "Cisco",
        Icon: CiscoIcon,
        certs: ["IoT", "Cybersecurity", "Networking", "Data Analytics"]
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
                                <Icon className="w-10 h-10 text-teal-400 mr-4" />
                                <h3 className="text-xl font-bold text-white">{group.issuer}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.certs.map(cert => (
                                    <span key={cert} className="bg-slate-700/50 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </AnimatedSection>
    );
};

export default Certifications;