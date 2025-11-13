import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

// FIX: Refactor component to be a plain function instead of using React.FC
const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {title}
            </h2>
            <p className="text-lg md:text-xl font-light gradient-text">{subtitle}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4 rounded"></div>
        </div>
    );
};

export default SectionHeader;