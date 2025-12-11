'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        company: "Techivation",
        role: "Full Stack Developer",
        type: "Part-time",
        period: "MAY 2023 - PRESENT",
        description: "Building and maintaining Techivation's full web and SaaS ecosystem powering audio plugin licensing and management.",
    },
    {
        company: "Freelance",
        role: "Creative Developer",
        type: "Remote",
        period: "JAN 2022 - APR 2023",
        description: "Delivering custom 3D websites and interactive experiences for diverse global clients.",
    },
    {
        company: "Studio Alpha",
        role: "UI/UX Designer",
        type: "Full-time",
        period: "JUN 2021 - DEC 2021",
        description: "Designed user-centric interfaces for mobile apps and dashboard platforms.",
    }
];

export default function ExperienceSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Curvy string animation - draws itself as you scroll
    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-[#111111] py-32 overflow-hidden">

            {/* Header */}
            <div className="relative z-20 text-center mb-24 md:mb-40">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-2">
                    Explore my journey
                </h2>
                <h2 className="text-5xl md:text-7xl font-bold text-white/30">
                    and experience.
                </h2>
            </div>

            {/* Main Content Area */}
            <div className="relative max-w-7xl mx-auto min-h-[1200px] flex">

                {/* 1. The Curvy Line (Background) - Matched to Reference */}
                {/* Thick yellow bold stroke, sweeping curve */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <svg width="100%" height="100%" viewBox="0 0 1000 1200" preserveAspectRatio="none">
                        <motion.path
                            d="M -100 200 C 200 200, 500 400, 800 600"
                            stroke="#cced00"
                            strokeWidth="25"
                            strokeLinecap="round"
                            fill="none"
                            style={{ pathLength }}
                            className="drop-shadow-[0_0_10px_rgba(204,237,0,0.3)]"
                        />
                    </svg>
                </div>

                {/* 2. The Straight Line (Timeline) - Left Aligned */}
                <div className="relative w-full flex">

                    {/* Timeline Track */}
                    <div className="hidden md:block absolute left-[5%] md:left-[20%] top-0 bottom-0 w-[2px] bg-white/10">
                        {/* Filling Progress Line */}
                        <motion.div
                            style={{ scaleY: scrollYProgress }}
                            className="absolute top-0 left-0 w-full bg-[#cced00] origin-top h-full shadow-[0_0_10px_#cced00]"
                        />
                    </div>

                    {/* Content List */}
                    <div className="w-full flex flex-col gap-32 md:gap-48 pl-[15%] md:pl-[30%] pr-4 md:pr-20 z-10">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot (Aligned with top of card) */}
                                <div className="hidden md:block absolute -left-[calc(10%_+_1px)] md:-left-[calc(14.5%_+_1px)] top-2 w-4 h-4 rounded-full border-2 border-[#cced00] bg-[#111] z-20 shadow-[0_0_10px_#cced00]" />

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex flex-col items-start text-left"
                                >
                                    <h3 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight leading-none">
                                        {exp.company}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <span className="text-2xl md:text-3xl text-white/60 font-light">{exp.role}</span>
                                        <span className="text-[#cced00] text-sm font-mono uppercase tracking-widest border border-[#cced00]/30 px-3 py-1 rounded-full">{exp.type}</span>
                                    </div>

                                    <p className="text-xl text-white/40 max-w-xl leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    <span className="text-sm font-bold tracking-[0.2em] text-white/20 uppercase">
                                        {exp.period}
                                    </span>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </section>
    );
}
