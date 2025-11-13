
import React from 'react';
import { SkillCategory } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
// FIX: Import missing icons
import { 
    PythonIcon, CppIcon, JavaIcon, AWSIcon, GcpIcon, AzureIcon, TerraformIcon, KubernetesIcon, DockerIcon, JenkinsIcon,
    GithubIcon, AnsibleIcon, TensorflowIcon, KerasIcon, ScikitLearnIcon, OpencvIcon, FlaskIcon, PandasIcon, NumpyIcon,
    PlotlyIcon, SqlIcon, HtmlCssIcon, GitIcon, LinuxIcon
} from './icons';
import { motion } from 'framer-motion';

const skillsData: SkillCategory[] = [
    {
        title: 'Cloud & DevOps (IaC)',
        skills: [
            { name: 'AWS', Icon: AWSIcon }, { name: 'GCP', Icon: GcpIcon }, { name: 'Azure', Icon: AzureIcon },
            { name: 'Terraform', Icon: TerraformIcon }, { name: 'Kubernetes', Icon: KubernetesIcon }, { name: 'Docker', Icon: DockerIcon },
            { name: 'Jenkins', Icon: JenkinsIcon }, { name: 'GitHub Actions', Icon: GithubIcon }, { name: 'Ansible', Icon: AnsibleIcon },
            { name: 'Bash', Icon: LinuxIcon }, { name: 'Git', Icon: GitIcon },
        ],
    },
    {
        title: 'AI/ML & Data Science',
        skills: [
            { name: 'TensorFlow', Icon: TensorflowIcon }, { name: 'Keras', Icon: KerasIcon }, { name: 'Scikit-learn', Icon: ScikitLearnIcon },
            { name: 'OpenCV', Icon: OpencvIcon }, { name: 'Flask', Icon: FlaskIcon }, { name: 'Pandas', Icon: PandasIcon },
            { name: 'NumPy', Icon: NumpyIcon }, { name: 'XGBoost', Icon: PythonIcon }, { name: 'Plotly', Icon: PlotlyIcon },
        ],
    },
    {
        title: 'Programming & Databases',
        skills: [
            { name: 'Python', Icon: PythonIcon }, { name: 'C++', Icon: CppIcon }, { name: 'Java', Icon: JavaIcon },
            { name: 'SQL', Icon: SqlIcon }, { name: 'HTML/CSS', Icon: HtmlCssIcon },
        ],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

// FIX: Refactor component to be a plain function instead of using React.FC
export const Skills = () => {
    return (
        <AnimatedSection id="skills">
            <SectionHeader title="Technical Skills" subtitle="My technology stack" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={category.title}
                        className="glassmorphic-card p-6"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={index}
                    >
                        <h3 className="text-xl font-bold mb-6 text-center gradient-text">{category.title}</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {category.skills.map((skill) => {
                                const Icon = skill.Icon;
                                return (
                                    <div key={skill.name} title={skill.name} className="flex flex-col items-center space-y-2 p-2 rounded-lg w-20 text-center transition-transform hover:scale-110">
                                        <Icon className="w-8 h-8 text-teal-300" />
                                        <span className="text-xs text-gray-300">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};