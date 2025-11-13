import React from 'react';

// FIX: Refactor component to be a plain function instead of using React.FC
// UI Icons
export const SunIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

// FIX: Complete MoonIcon SVG and refactor to plain function
export const MoonIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

// FIX: Add missing icons
export const MenuIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

export const XIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const DownloadIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

export const GithubIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

export const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

export const LinktreeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 10h16"></path>
        <path d="M6.5 4.5l11 11"></path>
        <path d="M6.5 15.5l11 -11"></path>
    </svg>
);

export const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export const PythonIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M12 24a12 12 0 0 1-5.42-22.33l.28.1a5.45 5.45 0 0 1 3.5 4.13c.1 1.3.06 2.37-.1 3.26a3.67 3.67 0 0 0-1.25 3.37 3.23 3.23 0 0 0 2.22 3.12 3.2 3.2 0 0 0 3.29-1.29 5.8 5.8 0 0 1 3.57-3.23l.28-.07A12 12 0 0 1 12 24zm-2.09-8.42a2.22 2.22 0 0 1-1.4-2.4 2.28 2.28 0 0 1 2.28-2.28h.5a.77.77 0 0 0 .77-.77.78.78 0 0 0-.77-.77h-1.3a2.28 2.28 0 0 1-2.28-2.28 2.28 2.28 0 0 1 2.28-2.28 2.28 2.28 0 0 1 2.28 2.28v.5a.77.77 0 0 0 .77.77.78.78 0 0 0 .77-.77v-1.3a2.28 2.28 0 0 1 2.28-2.28 2.28 2.28 0 0 1 2.28 2.28 2.28 2.28 0 0 1-2.28 2.28h-.5a.77.77 0 0 0-.77.77.78.78 0 0 0 .77.77h1.3a2.28 2.28 0 0 1 2.28 2.28A2.28 2.28 0 0 1 16.19 18a2.28 2.28 0 0 1-2.28-2.28v-.5a.77.77 0 0 0-.77-.77.78.78 0 0 0-.77.77v1.3a2.28 2.28 0 0 1-2.28 2.28z" fill="currentColor"/></svg>
);
export const CppIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C++</title><path d="M14.22 3.984v2.418h-2.418V3.984h2.418zm2.418 0v2.418h-2.418V3.984h2.418zm-2.418 2.418v2.418h-2.418V6.402h2.418zm2.418 0v2.418h-2.418V6.402h2.418zM0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm13.197 4.246c0 .762.618 1.38 1.38 1.38.762 0 1.38-.618 1.38-1.38 0-.762-.618-1.38-1.38-1.38-.762 0-1.38.618-1.38 1.38zm2.76 0c0 .762.618 1.38 1.38 1.38.762 0 1.38-.618 1.38-1.38 0-.762-.618-1.38-1.38-1.38-.762 0-1.38.618-1.38 1.38zM8.01 10.746l-1.92-3.324h3.84L8.01 4.098 6.09 7.422h-3.84z" fill="currentColor"/></svg>
);
export const JavaIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Java</title><path d="M12.247 13.923c.335-.13.56-.28.67-.45.11-.17.16-.38.16-.63 0-.3-.06-.54-.18-.73s-.29-.33-.5-.43c-.22-.1-.49-.15-.8-.15h-.45v1.89h.45c.31 0 .58-.05.8-.15m1.56-4.72c-.01-.33-.09-.64-.25-.92-.16-.28-.39-.5-.68-.66-.3-.16-.65-.24-1.06-.24h-2.2v8.25h.9v-3.31h.78c.45 0 .84-.08 1.17-.23.33-.15.6-.37.79-.65.19-.28.3-.62.3-1.01 0-.3-.05-.57-.14-.83s-.23-.48-.42-.65m4.34-1.12c-1.38.43-2.39 1.05-3.04 1.85-.65.8-1.02 1.8-1.13 3-.11 1.2-.02 2.45.27 3.75.29 1.3.78 2.45 1.48 3.45s1.58 1.82 2.65 2.48c1.07.65 2.25 1.12 3.55 1.38.25-1.38.11-2.54-.42-3.48-.53-.94-1.3-1.68-2.33-2.23-.98-.55-2.1-.88-3.35-.98-.22-1.1-.1-2.05.35-2.88.45-.83 1.14-1.48 2.08-1.95M.01 13.433c0-.6.1-1.18.3-1.74.2-.57.5-1.08.9-1.54.4-.47.9-.85 1.5-1.15.6-.3 1.25-.45 1.95-.45.7 0 1.35.15 1.95.45.6.3 1.1.68 1.5 1.15.4.46.7.97.9 1.54.2.56.3 1.14.3 1.74 0 .6-.1 1.18-.3 1.74-.2.57-.5 1.08-.9 1.54-.4.47-.9.85-1.5 1.15-.6.3-1.25-.45-1.95-.45-.7 0-1.35-.15-1.95-.45-.6-.3-1.1-.68-1.5-1.15-.4-.46-.7-.97-.9-1.54-.2-.56-.3-1.14-.3-1.74" fill="currentColor"/></svg>
);
export const AWSIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon Web Services</title><path d="M13.83 17.21c-.33-.02-.66.03-1.04.03-.4 0-.8-.05-1.16-.05-1.37 0-2.43.51-2.43 1.82 0 1.18.9 1.81 2.43 1.81.79 0 1.3-.17 1.76-.36l.24.96c-.53.25-1.2.4-2.03.4-2.3 0-3.64-1.25-3.64-3.08 0-2.06 1.63-3.11 3.86-3.11.64 0 1.25.08 1.7.15l-.7 2.42zM4.12 14.15l.67-2.42c.32.1.69.15 1.04.15.86 0 1.3-.3 1.3-.98V4.73h1.76v6.1c0 2.03-1.32 2.88-3.2 2.88-.56 0-1.12-.08-1.67-.26zM22.04 14.2c-1.25.33-2.28.89-2.28 2.25 0 1.33 1.12 2.22 2.57 2.22 1.01 0 1.7-.36 2.14-.7l-.42-1.36c-.4.27-.96.48-1.6.48-.79 0-1.2-.38-1.2-.95 0-.63.42-.9 1.3-.9.3 0 .54.03.8.05l.5-1.89c-.3-.03-.6-.05-.88-.05-1.01 0-1.7.43-2.12.9zm-4-4.82h-1.63v4.45h-1.66v-4.45h-1.64V8.1h4.93v1.28z" fill="currentColor"/></svg>
);
export const GcpIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Cloud</title><path d="M12.015 10.23a4.71 4.71 0 0 1-4.706 4.706H2.57a4.71 4.71 0 0 1-.004-9.412l2.123 2.123a2.36 2.36 0 0 0 0 4.706h4.738a2.35 2.35 0 0 0 2.349-2.353 2.32 2.32 0 0 0-.21-1.026l1.83-1.83a4.72 4.72 0 0 1 .375 1.848zm2.493-2.493a4.71 4.71 0 0 1 4.706 4.706v4.738a2.36 2.36 0 0 0 4.706 0v-4.738a4.71 4.t71 0 0 1-4.706-4.706h-2.35a2.36 2.36 0 0 0-4.706 0h2.35zm-2.493 2.493a2.35 2.35 0 0 0 2.348 2.348 2.35 2.35 0 0 0 2.348-2.348 2.35 2.35 0 0 0-2.348-2.348 2.35 2.35 0 0 0-2.348 2.348z" fill="currentColor"/></svg>
);
export const AzureIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Microsoft Azure</title><path d="M12.953 6.012L7.22 17.95l-5.742-3.23.957-3.415 4.885 2.748L12.953 6.01zm1.094 0l4.21 7.502-8.52 4.763-4.21-7.502 8.52-4.763z" fill="currentColor"/></svg>
);
export const TerraformIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Terraform</title><path d="M1.35 1.57v8.92l7.2 4.16V5.72L1.35 1.57zM8.55 5.72v8.91l7.2-4.15V1.57L8.55 5.72zM15.75 14.63v8.92l7.2-4.17v-8.9l-7.2 4.15z" fill="currentColor"/></svg>
);
export const KubernetesIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Kubernetes</title><path d="M12.34.02c-1.95 0-3.8.76-5.18 2.14L2.14 7.18a7.3 7.3 0 0 0 0 10.32l5.02 5.02a7.3 7.3 0 0 0 10.32 0l5.02-5.02a7.3 7.3 0 0 0 0-10.32L17.52 2.16a7.32 7.32 0 0 0-5.18-2.14zM8.1 7.64h2.24v2.24H8.1zm2.8 2.8h2.24v2.24h-2.24zm2.8 2.8h2.24v2.24h-2.24z" fill="currentColor"/></svg>
);
export const DockerIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Docker</title><path d="M22.45.66a2.6 2.6 0 0 0-1.9-.66H3.45a2.6 2.6 0 0 0-1.9.66 2.57 2.57 0 0 0-.89 1.86v13.52c0 .24.02.48.07.71l.22.95c.13.56.33 1.09.6 1.58.27.49.59.92.97 1.3.38.38.8.69 1.28.95.48.26.98.45 1.5.58l.96.22c.23.05.47.07.7.07h13.1c.7 0 1.38-.14 2.03-.4.65-.26 1.25-.62 1.77-1.07s.93-1 1.2-1.63c.27-.63.4-1.3.4-2V2.52a2.57 2.57 0 0 0-.9-1.86zM8 7.21H4.8v3.2H8zm4.8 0H9.6v3.2h3.2zm4.8 0h-3.2v3.2H16zm-9.6-4.8H8v3.2H4.8z" fill="currentColor"/></svg>
);
export const JenkinsIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Jenkins</title><path d="M12.01.25a1.8 1.8 0 0 0-1.8 1.8v8.6h-1.6V2.05a1.8 1.8 0 1 0-3.6 0v19.9a1.8 1.8 0 1 0 3.6 0v-8.6h1.6v8.6a1.8 1.8 0 1 0 3.6 0v-19.9a1.8 1.8 0 0 0-1.8-1.8zm6.5 6.3a1.8 1.8 0 1 0-3.6 0v1.6a1.8 1.8 0 1 0 3.6 0zm0 9.8a1.8 1.8 0 1 0-3.6 0v1.6a1.8 1.8 0 1 0 3.6 0z" fill="currentColor"/></svg>
);
export const AnsibleIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ansible</title><path d="M12 0L.65 6.55v10.9L12 24l11.35-6.55v-10.9L12 0zm-1.89 8.27l7.85 4.34-2.15 1.29-5.7-3.18-1.68 3.01 4.54 2.54-.7 1.22-3.84-2.15-2.73 4.72-2.18-1.26 6.06-10.53z" fill="currentColor"/></svg>
);
export const LinuxIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="4 17 4 10 4 3 20 3 20 10 20 17"></polyline>
        <line x1="4" y1="21" x2="20" y2="21"></line>
        <line x1="6" y1="17" x2="6" y2="21"></line>
        <line x1="18" y1="17" x2="18" y2="21"></line>
    </svg>
);
export const GitIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M23.5 12.25a1.49 1.49 0 0 0-1.48-1.5h-3.34l-2.6-2.6A1.5 1.5 0 0 0 15 8.16v-3.7a1.5 1.5 0 0 0-3 0v3.7a1.5 1.5 0 0 0-1.12 2.6l-2.6 2.6H1.98a1.5 1.5 0 1 0 0 3h3.48l2.6 2.6a1.5 1.5 0 0 0 2.12 0l2.6-2.6h3.34a1.5 1.5 0 0 0 0-3zm-11.45 3.3a.5.5 0 0 1-.7 0L8.5 12.7a.5.5 0 0 1 0-.7l2.85-2.85a.5.5 0 0 1 .7 0l2.85 2.85a.5.5 0 0 1 0 .7z" fill="currentColor"/></svg>
);
export const TensorflowIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TensorFlow</title><path d="M12 0L3.43 5v14L12 24l8.57-5V5L12 0zm-.57 18.25V12h-4v-1.71h4V5.75L18.25 10v4l-6.82 4.25z" fill="currentColor"/></svg>
);
export const KerasIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Keras</title><path d="M24 0H0v24h24V0zM8.53 4.61l5.5 3.12v5.55l-5.5-3.14V4.6zm-1.74 8.3L2.2 10.27v5.52l4.6 2.63v-4.5zM15.47 4.6v5.5l5.5 3.15v-5.5z" fill="currentColor"/></svg>
);
export const ScikitLearnIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>scikit-learn</title><path d="M13.753 1.124L.53 8.412l5.72 9.907 17.22-9.94zm2.14 11.96l-7.72 4.456L22.9 7.647z" fill="currentColor"/></svg>
);
export const OpencvIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>OpenCV</title><path d="M14.65 2.12c-2.8-1.52-5.96-.4-7.5 2.37C5.4 7.63 7 11.3 9.8 12.82c2.8 1.53 5.97.4 7.5-2.37C19.06 7.3 17.45 3.64 14.65 2.12zm-3.8 11.2C8.3 11.97 7.2 9.47 8.54 7.2c1.34-2.28 3.84-3.14 6.2-1.78 2.37 1.35 3.2 3.86 1.87 6.13-1.35 2.28-3.85 3.16-6.2 1.8zm-5.9 5.86c-2.45-1.4-3.5-4.2-2.1-6.57 1.1-1.85 3.1-2.8 5.1-2.34l-.62 1.07c-1.4-.4-3 .14-3.8 1.45-1.12 1.9.4 4.07 2.3 5.2 1.9 1.1 4.1.4 5.2-1.5l1.03.62c-1.37 2.4-4.14 3.5-6.58 2.12z" fill="currentColor"/></svg>
);
export const FlaskIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flask</title><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2.25c.87 0 1.62.63 1.62 1.5v3h3.75c.83 0 1.5.75 1.5 1.5v.75c0 .41-.19.8-.48 1.06l-6.75 6c-.3.26-.75.33-1.12.15l-4.13-2.25c-.41-.22-.62-.75-.43-1.16l1.5-3.75c.12-.3.41-.5.75-.5h2.25v-3c0-.87.71-1.5 1.5-1.5zm0 2.25v3H9.75c-.04 0-.08.02-.1.06l-1.5 3.75c.01 0 .01 0 0 0l4.12 2.25c.04 0 .08-.01.1-.04l6.75-6c.02-.02.03-.04.03-.06v-.75H13.5v-3c0-.1-.04-.15-.1-.15z" fill="currentColor"/></svg>
);
export const PandasIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>pandas</title><path d="M2.4 1.2h4.8v15.6H2.4V1.2zm7.2 0h4.8v15.6h-4.8V1.2zM12 18h4.8v4.8H12V18zm-2.4 0H4.8v4.8h4.8V18zm7.2-16.8h4.8v15.6h-4.8V1.2zm2.4 16.8h4.8v4.8h-4.8V18z" fill="currentColor"/></svg>
);
export const NumpyIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>NumPy</title><path d="M5.4 2.4l15.6 15.6H5.4V2.4zM2.4 5.4v15.6h15.6L2.4 5.4z" fill="currentColor"/></svg>
);
export const PlotlyIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Plotly</title><path d="M24 2.4H0v2.4h24V2.4zm0 4.8H0v2.4h24V7.2zm0 4.8H0v2.4h24v-2.4zM0 16.8h24v-2.4H0v2.4zm0 4.8h24v-2.4H0v2.4z" fill="currentColor"/></svg>
);
export const SqlIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);
export const HtmlCssIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);
export const CheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);
export const IBMIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>IBM</title><path d="M6 15h2.4v-4.8H6V15zM2.4 15h2.4V4.2H2.4V15zm7.2 0h2.4V7.2H9.6V15zM15.6 9H12V7.2h5.5v1.8h-1.9zm-4.1-4.8h2.4V2.4h-2.4v1.8z" fill="currentColor"/></svg>
);
export const CiscoIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Cisco</title><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM9.6 4.8h4.8v2.4H9.6V4.8zm0 12h4.8v2.4H9.6v-2.4zm-4.8-6h2.4v4.8H4.8v-4.8zm12 0h2.4v4.8h-2.4v-4.8z" fill="currentColor"/></svg>
);
export const AwardIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline>
    </svg>
);
export const MailIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);
export const SendIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);
export const ArrowUpIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
);
export const BookOpenIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);
export const LightBulbIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 18h6v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2h6z"></path>
        <path d="M12 2v6"></path>
        <path d="M6.34 7.66l-1.41-1.41"></path>
        <path d="M19.07 6.25l-1.41 1.41"></path>
        <path d="M12 22v-2"></path>
    </svg>
);

export const MicrosoftIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Microsoft</title>
        <path d="M11.4 2.6H2.6v8.8h8.8V2.6zM21.4 2.6h-8.8v8.8h8.8V2.6zM11.4 12.6H2.6v8.8h8.8v-8.8zM21.4 12.6h-8.8v8.8h8.8v-8.8z" fill="currentColor"/>
    </svg>
);

export const FreeCodeCampIcon = ({ className }: { className?: string }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>freeCodeCamp</title>
        <path d="M12.01 1.62c-2.85 0-5.46 1.1-7.36 2.9-1.9 1.8-3.03 4.2-3.14 6.75h4.12v-2.1H10.6v-2.73h2.82v2.73h2.1v2.1h-2.1v5.92c0 .8.18 1.48.5 2.02.32.54.8.97 1.42 1.28.62.3 1.3.46 2.05.46.75 0 1.43-.16 2.05-.46s1.1-.74 1.42-1.28c.32-.54.5-1.22.5-2.02v-5.92h-2.1v-2.1h6.14c-.1 2.55-1.24 4.95-3.14 6.75-1.9 1.8-4.5 2.9-7.36 2.9s-5.46-1.1-7.36-2.9c-1.9-1.8-3.03-4.2-3.14-6.75h6.14v-2.1H1.5v-2.1h3.14C4.97 4.52 7.57 1.62 12 1.62c2.85 0 5.46 1.1 7.36 2.9 1.9 1.8 3.03 4.2 3.14 6.75h-4.12v2.1H13.4v2.73H10.6v-2.73H7.78v-2.1h2.82v-5.92c0-.8-.18-1.48-.5-2.02-.32-.54-.8-.97-1.42-1.28-.62-.3-1.3-.46-2.05-.46-.75 0-1.43.16-2.05.46s-1.1.74-1.42 1.28c-.32.54-.5 1.22-.5 2.02v5.92h2.1v2.1H1.5c.1-2.55 1.24-4.95 3.14-6.75 1.9-1.8 4.5-2.9 7.36-2.9z" fill="currentColor"/>
    </svg>
);
