'use client';

import TiltedCard from '@/components/bits/TiltedCard';
import SectionReveal from './SectionReveal';

const projects = [
    {
        id: 1,
        title: "Vanguard",
        category: "Fintech Core",
        description: "Real-time trading analytics dashboard with WebGL data visualization.",
        gradient: "from-[#1a1a1a] to-[#2a2a2a]",
        colSpan: "md:col-span-8",
    },
    {
        id: 2,
        title: "Lumina",
        category: "AI Interface",
        description: "Generative AI workspace with spatial audio and fluid motion.",
        gradient: "from-[#202020] to-[#303030]",
        colSpan: "md:col-span-4",
    },
    {
        id: 3,
        title: "Eon",
        category: "E-Commerce",
        description: "Luxury fashion platform featuring virtual try-on technology.",
        gradient: "from-[#151515] to-[#252525]",
        colSpan: "md:col-span-6",
    },
    {
        id: 4,
        title: "Nexus",
        category: "System Design",
        description: "Comprehensive design system for enterprise-scale applications.",
        gradient: "from-[#1c1c1c] to-[#2c2c2c]",
        colSpan: "md:col-span-6",
    }
];

export default function ProjectsSection() {
    return (
        <SectionReveal className="w-full max-w-[1240px] mx-auto px-6 md:px-12 py-32">
            <div className="mb-24">
                <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight mb-6 leading-[1.1]">
                    SELECTED WORK
                </h2>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent shadow-[0_0_15px_rgba(0,0,0,0.1)]" />
            </div>

            <div
                className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-24 w-full"
                tabIndex={0}
                role="list"
                aria-label="Projects List"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`col-span-1 ${index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-5 lg:col-start-8 translate-y-24'}`}
                        role="listitem"
                    >
                        <div className="flex flex-col gap-6 group">
                            <div className="flex items-baseline justify-between border-b border-black/10 pb-4">
                                <span className="text-sm font-mono text-accent-violet tracking-widest">
                                    {(index + 1).toString().padStart(2, '0')} / 04
                                </span>
                                <span className="text-black/40 text-xs tracking-wider uppercase">{project.category}</span>
                            </div>

                            <div
                                role="button"
                                tabIndex={0}
                                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-violet rounded-3xl"
                                aria-label={`View project: ${project.title}`}
                            >
                                <TiltedCard className="w-full aspect-[4/3] md:aspect-[16/10] mb-8 cursor-pointer">
                                    <div className={`w-full h-full rounded-3xl bg-gradient-to-br from-gray-100 to-white border border-black/5 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] group-hover:scale-[1.02] group-hover:-translate-y-2`}>

                                        {/* Placeholder for project image - using gradient for now */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                                            <span className="text-black/5 font-bold text-6xl tracking-tighter uppercase">{project.title}</span>
                                        </div>
                                    </div>
                                </TiltedCard>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-accent-violet transition-colors duration-300 leading-tight">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs font-medium text-black/60 border border-black/10 rounded-full px-3 py-1 uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-[var(--color-text-body)] text-lg font-normal leading-[1.6] max-w-md">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionReveal>
    );
}
