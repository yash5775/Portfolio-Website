'use client';

import { motion } from 'framer-motion';

const services = [
    {
        id: "01",
        title: "Full Stack Development",
        description: "Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript.",
        icon: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-8 h-8 md:w-16 md:h-16 text-black">
                <path d="M12 18L22 12L32 18L42 12V38L32 44L22 38L12 44V18Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 12V38M32 18V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: "02",
        title: "UI/UX Design & Frontend",
        description: "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion.",
        icon: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-8 h-8 md:w-16 md:h-16 text-black">
                <rect x="10" y="10" width="44" height="44" rx="6" stroke="currentColor" strokeWidth="2.5" />
                <path d="M10 22H54M22 10V54" stroke="currentColor" strokeWidth="2.5" />
            </svg>
        )
    },
    {
        id: "03",
        title: "SaaS Platform Development",
        description: "Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management.",
        icon: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-8 h-8 md:w-16 md:h-16 text-black">
                <path d="M32 10L46 18V38L32 46L18 38V18L32 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 10V46M18 18L46 38M46 18L18 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: "04",
        title: "API & System Architecture",
        description: "Designing maintainable APIs with PostgreSQL, Prisma, and MongoDB. Focusing on performance and security.",
        icon: (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-8 h-8 md:w-16 md:h-16 text-black">
                <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="46" cy="46" r="6" stroke="currentColor" strokeWidth="2.5" />
                <path d="M24 18H40M24 46H40M18 24V40M46 24V40" stroke="currentColor" strokeWidth="2.5" />
            </svg>
        )
    }
];

export default function ServicesPinned() {
    return (
        <div className="relative w-full py-20 lg:py-40 px-6 md:px-12 flex flex-col items-center z-20">

            {/* Stacking Context */}
            <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-8 md:gap-12">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className="sticky top-20 md:top-32 w-full bg-[#1a1a1a] border border-white/20 rounded-2xl md:rounded-[2rem] p-6 md:p-12 overflow-hidden transition-all duration-500 hover:border-lime-400 group"
                        style={{
                            // Create slight offset for visual stacking effect if desired, or standard sticky
                            zIndex: index + 1
                        }}
                    >
                        {/* Card Content */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                            {/* Header */}
                            <div className="flex items-center gap-6">
                                <span className="text-white/40 text-xl font-light">{service.id}</span>
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-lime-400 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1 md:pl-8">
                                <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-lime-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-tr-2xl md:rounded-tr-[2rem]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
