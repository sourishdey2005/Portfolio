import React from 'react';

export interface Project {
    title: string;
    subtitle?: string;
    description: string;
    achievements: string[];
    tech: string[];
    githubLink?: string;
}

export interface CertificationGroup {
    issuer: string;
    Icon: React.ComponentType<{ className?: string }>;
    certs: string[];
}

export interface Skill {
    name: string;
    Icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Experience {
    role: string;
    company: string;
    companyUrl?: string;
    type: string;
    location: string;
    date: string;
    description: string[];
}

export interface Publication {
    title: string;
    journal: string;
    date: string;
    description: string;
    authors?: string;
}

export interface Patent {
    id: string;
    title: string;
    description: string;
}

export interface Honor {
    title: string;
    issuer: string;
    date: string;
}