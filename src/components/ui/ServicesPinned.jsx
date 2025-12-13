'use client';

import { motion } from 'framer-motion';

const services = [
    {
        id: "01",
        title: "Web Application Development",
        description: "Building modern, responsive web applications using React and Next.js, with backend integrations and clean, maintainable code.",
        icon: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <path d="M12 18L22 12L32 18L42 12V38L32 44L22 38L12 44V18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 12V38M32 18V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: "02",
        title: "Frontend Development & UI Design",
        description: "Creating clean, responsive user interfaces with a focus on usability, performance, and modern design practices.",
        icon: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <rect x="10" y="10" width="44" height="44" rx="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 22H54M22 10V54" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        )
    },
    {
        id: "03",
        title: "Real-World Web Projects",
        description: "Working on production-ready web projects for colleges and businesses, from UI development to deployment.",
        icon: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <path d="M32 10L46 18V38L32 46L18 38V18L32 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 10V46M18 18L46 38M46 18L18 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: "04",
        title: "Modern Development Workflow",
        description: "Using AI tools alongside traditional development practices to speed up coding, debugging, and problem-solving in real-world projects.",
        icon: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="46" cy="46" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M24 18H40M24 46H40M18 24V40M46 24V40" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        )
    }
];

export default function ServicesPinned() {
    return (
        <div className="relative w-full py-20 lg:py-40 px-6 md:px-12 flex flex-col items-center z-20">

            {/* Stacking Context */}
            <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-6">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className="sticky top-24 md:top-32 w-full bg-[#0a0a0a] border border-white/10 rounded-xl md:rounded-3xl p-8 md:p-14 overflow-hidden group transition-all duration-500 hover:border-[#cced00]/50 hover:shadow-[0_0_50px_-10px_rgba(204,237,0,0.1)]"
                        style={{ zIndex: index + 1 }}
                    >
                        {/* Background Noise/Grid (Optional for texture) */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 md:gap-16">

                            {/* Left: ID & Content */}
                            <div className="flex flex-col gap-6 md:gap-8 flex-1">

                                <div>
                                    <h3 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight group-hover:text-[#cced00] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-white/50 leading-relaxed max-w-xl group-hover:text-white/80 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Right: Minimal Icon */}
                            <div className="md:mt-4">
                                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#cced00] group-hover:bg-[#cced00] group-hover:text-black transition-all duration-500 rotate-0 group-hover:rotate-3">
                                    {service.icon}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
