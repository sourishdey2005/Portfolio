
import React, { useState } from 'react';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { GithubIcon, CheckIcon } from './icons';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData: Project[] = [
    {
        title: "ICICI vs SBI NIFTY Stock Analysis",
        subtitle: "Econometric & Time-Series Comparison (2011–2021)",
        description: "A comprehensive, data-driven comparison of ICICI Bank and SBI using over a decade of NIFTY data, exploring financial metrics, time-series behaviors, and macroeconomic context.",
        achievements: [
            "Performed econometric modeling and ESG score analysis.",
            "Analyzed digital banking transformations and trading strategy implications."
        ],
        tech: ["Python", "Econometrics", "Time Series", "Pandas"],
        githubLink: "https://github.com/sourishdey2005/SBI_ICICI_Stocks-"
    },
    {
        title: "F1 Historical Data Analysis",
        subtitle: "Interactive EDA of 70+ Years of Racing (1950–2023)",
        description: "An interactive and statistical exploratory data analysis of Formula 1 history, analyzing race trends, constructor championships, and driver performance using advanced visualizations.",
        achievements: [
            "Analyzed trends with interactive charts (races per season, titles).",
            "Evaluated driver consistency and peak performance with boxplots."
        ],
        tech: ["Python", "Plotly", "Seaborn", "Pandas"],
        githubLink: "https://github.com/sourishdey2005/F1_Race_Analysis"
    },
    {
        title: "UiPath AWS Automation Suite",
        subtitle: "Automated EC2 & S3 Management",
        description: "An end-to-end automation solution for managing AWS S3 buckets and EC2 instances using UiPath, enabling seamless, enterprise-grade cloud operations.",
        achievements: [
            "Automated EC2 provisioning, reducing setup time by 70%.",
            "Streamlined S3 file operations with automated access control.",
            "Supported 50+ concurrent cloud operations with built-in error handling."
        ],
        tech: ["UiPath", "AWS SDK", "RPA", "Terraform"],
        githubLink: "https://github.com/sourishdey2005/UiPath-Bot"
    },
    {
        title: "Uber Ride Analysis Platform",
        subtitle: "ML-Powered Operational Analytics",
        description: "A comprehensive data analytics platform for Uber operations, featuring 50+ unique EDAs powered by advanced ML and statistical modeling to optimize pricing and predict churn.",
        achievements: [
            "Analyzed over 148,000 bookings to uncover patterns.",
            "Developed models for revenue optimization and churn prediction."
        ],
        tech: ["Python", "Machine Learning", "Statistical Modeling"],
        githubLink: "https://github.com/sourishdey2005/Uber_RIde_Analysis"
    },
    {
        title: "FaceMeshX",
        subtitle: "Advanced Face & Expression Detection",
        description: "A real-time system using MediaPipe and OpenCV to detect and visualize advanced facial features, expressions, head pose, and eye status via webcam.",
        achievements: [
            "Achieved real-time 60 FPS facial tracking with 468 landmarks.",
            "Detected head direction, tilt, eye status, and smiles.",
        ],
        tech: ["Python", "OpenCV", "MediaPipe"],
        githubLink: "https://github.com/sourishdey2005/FaceMeshX"
    },
    {
        title: "Gene Expression Bioinformatics",
        subtitle: "Cell-Cycle Phase Prediction with Deep Learning",
        description: "A lightweight, high-performance hybrid CNN-BiLSTM model for predicting cell-cycle phase from gene expression time-series data.",
        achievements: [
            "Achieved >98% prediction accuracy on the benchmark Spellman dataset.",
            "Developed a compact model with a footprint of less than 50 KB."
        ],
        tech: ["Deep Learning", "CNN", "LSTM", "Bioinformatics"],
        githubLink: "https://github.com/sourishdey2005/Gene-Expression---Bioinformatics"
    },
    {
        title: "YouTube Trending Video Analytics",
        subtitle: "Cross-Country Trend Analysis",
        description: "This repository explores, visualizes, and compares trending video patterns across multiple countries using real-world datasets from YouTube to uncover insights on engagement and content preferences.",
        achievements: [
            "Uncovered insights on time-to-trend and content preferences.",
            "Analyzed engagement ratios and cross-country differences.",
        ],
        tech: ["Python", "Data Visualization", "Pandas", "Statistics"],
        githubLink: "https://github.com/sourishdey2005/YT_Analysis"
    },
    {
        title: "Cervical Cancer Risk Prediction",
        subtitle: "Deep Learning & Hybrid Model Framework",
        description: "Develops a sophisticated predictive framework combining classical machine learning, deep neural networks, and hybrid architectures to assess cervical cancer risk based on patient demographics, lifestyle, and clinical data.",
        achievements: [
            "Integrated diverse data sources for a holistic risk assessment.",
            "Leveraged hybrid deep learning models to improve prediction accuracy.",
        ],
        tech: ["Deep Learning", "Machine Learning", "Python", "Healthcare AI"]
    },
    {
        title: "Breast Cancer Classification Pipeline",
        subtitle: "End-to-End ML with Explainability",
        description: "A comprehensive, theory-driven machine learning pipeline for binary classification of breast tumors using the WDBC dataset. It integrates statistical inference, dimensionality reduction, feature engineering, and model interpretability.",
        achievements: [
            "Built a robust, explainable, and clinically relevant predictive system.",
            "Integrated advanced techniques like multivariate analysis and feature engineering.",
        ],
        tech: ["Python", "Scikit-learn", "Pandas", "XAI"],
        githubLink: "https://github.com/sourishdey2005/Breast_cancer_analyst"
    },
    {
        title: "Customer Churn Prediction",
        subtitle: "Supervised Learning for Telecom",
        description: "Predicts which telecom customers are likely to stop using the service (churn) using supervised machine learning techniques like Logistic Regression, Random Forest, and XGBoost.",
        achievements: [
            "Applied multiple supervised ML models to a real-world business problem.",
            "Identified key factors contributing to customer churn.",
        ],
        tech: ["Python", "Data Analysis", "Random Forest", "XGBoost"],
        githubLink: "https://github.com/sourishdey2005/Customer-Churn-Prediction"
    },
    {
        title: "Mercedes-Benz Stock Data Analytics",
        subtitle: "Financial Time Series Analysis & Forecasting",
        description: "Performs end-to-end data analysis, visualization, and time-series forecasting on Mercedes-Benz (MBG.DE) historical stock data, with a heavy emphasis on statistical signal processing and technical indicators.",
        achievements: [
            "Extracted temporal, cyclical, and structural patterns in stock movements.",
            "Visualized volatility, momentum, and trend reversals.",
        ],
        tech: ["Python", "Time Series", "Pandas", "Financial Analysis"]
    },
    {
        title: "Ultrasonic Radar System",
        subtitle: "Arduino-Powered Real-Time Object Detection",
        description: "An Arduino-powered radar system using an HC-SR04 ultrasonic sensor to detect objects and visualize their positions in real-time on a Processing-based GUI.",
        achievements: [
            "Built a functional radar system with a 180° scan range.",
            "Developed a real-time GUI to visualize detected obstacles.",
        ],
        tech: ["Arduino", "C++", "Java", "Processing", "IoT"],
        githubLink: "https://github.com/sourishdey2005/Radar"
    },
    {
        title: "Concurrent Port Scanner",
        subtitle: "Network Security Tool in Python",
        description: "A Python-based port scanner designed to identify open ports on a specified remote host. It utilizes concurrent threading to efficiently scan a range of ports, providing clear feedback on port status.",
        achievements: [
            "Implemented multithreading for efficient, high-speed scanning.",
            "Created a useful tool for network diagnostics and security assessments.",
        ],
        tech: ["Python", "Cybersecurity", "Networking", "Threading"],
        githubLink: "https://github.com/sourishdey2005/Portscanner"
    },
    {
        title: "Hull Tactical Market Prediction",
        subtitle: "Deep Learning for Financial Forecasting",
        description: "A project involving in-depth EDA with 50+ advanced visualizations and a custom deep learning model to predict market movements. It includes feature engineering from diverse data sources and evaluation with finance-specific metrics.",
        achievements: [
            "Conducted comprehensive EDA with advanced financial visualizations.",
            "Engineered features from market, macro, sentiment, and volatility data.",
        ],
        tech: ["Deep Learning", "Quantitative Finance", "Python", "Feature Engineering"],
        githubLink: "https://github.com/sourishdey2005/Hull-Tactical---Market-Prediction"
    },
    {
        title: "Iris Species Analysis from Scratch",
        subtitle: "Advanced Neural Network with NumPy",
        description: "A highly advanced implementation of a neural network for the classic Iris classification problem, built from scratch using only NumPy. It achieves >98% accuracy and incorporates modern techniques like custom activations, batch normalization, and attention mechanisms.",
        achievements: [
            "Built a neural network from scratch, achieving >98% test accuracy.",
            "Implemented advanced features like Swish/GELU activations and batch norm.",
        ],
        tech: ["NumPy", "Machine Learning", "Neural Networks", "Python"],
        githubLink: "https://github.com/sourishdey2005/Iris-Species"
    },
];


const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        }
    })
};

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const projectsToShow = showAll ? projectsData : projectsData.slice(0, 6);

    return (
        <AnimatedSection id="projects">
            <SectionHeader title="Featured Projects" subtitle="Innovations and implementations" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <AnimatePresence>
                    {projectsToShow.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="glassmorphic-card p-6 flex flex-col group"
                            layout
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
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
                </AnimatePresence>
            </div>
            {projectsData.length > 6 && (
                <div className="text-center mt-12">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-full shadow-lg hover:bg-white/20 transform transition-colors duration-300"
                    >
                        {showAll ? 'Show Less' : 'Show More Projects'}
                    </button>
                </div>
            )}
        </AnimatedSection>
    );
};

export default Projects;
