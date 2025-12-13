'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        company: "Learning Phase",
        role: "Aspiring Developer",
        type: "Self-Paced",
        period: "2022 - 2024",
        description: "Dedicated time spent mastering the fundamentals of web development. Built foundational skills in HTML, CSS, and JavaScript, and explored modern frameworks through building personal projects and solving algorithmic challenges.",
        skills: ["JavaScript", "HTML5", "CSS3", "React Basics", "Git"]
    },
    {
        company: "Codec Technologies",
        role: "Web Developer Intern",
        type: "Internship",
        period: "OCT 2025",
        description: "Completed an AICTE & ICAC approved internship, working on real-world web development tasks and building responsive web pages in a professional environment.",
        skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
        company: "Real-World Projects",
        role: "Web Developer",
        type: "Freelance",
        period: "2025 - PRESENT",
        description: "Developed and maintained production-ready websites for colleges and businesses. Delivered fully responsive solutions focused on usability, performance, and reliability for real users.",
        skills: ["Next.js", "React", "Tailwind CSS", "Database Design"]
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

    // Timeline animation - exact sync with scroll
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const sparkTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Color transition - Dark to Light - Starts late (between 2nd and 3rd item) and moves slowly
    const backgroundColor = useTransform(scrollYProgress, [0.6, 0.9], ["#151515", "#ffffff"]);
    const textColor = useTransform(scrollYProgress, [0.7, 0.8], ["#ffffff", "#000000"]);
    // Invert accent color for visibility on white? Yellow (#cced00) is okay on white for sleek look, but maybe darken slightly?
    // Let's keep yellow for now as requested.

    return (
        <motion.section
            ref={containerRef}
            style={{ backgroundColor, color: textColor }}
            className="relative w-full min-h-screen pt-0 pb-0 overflow-visible"
        >

            {/* 1. The Curvy Line (Background) - Full Screen Width - Extended into Footer */}
            <div className="absolute top-0 left-0 w-full h-[115%] pointer-events-none z-30 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 1000 3000" preserveAspectRatio="none">
                    <motion.path
                        d="M -15 0 C 400 600, 700 1000, 200 1500 S 500 2400, 1000 3000"
                        stroke="#cced00"
                        strokeWidth="12"
                        strokeLinecap="round"
                        fill="none"
                        style={{ pathLength }}
                        className="drop-shadow-[0_0_15px_rgba(204,237,0,0.4)] opacity-80"
                    />
                </svg>
            </div>

            {/* Creative Split Header */}
            <div className="relative z-20 flex flex-col w-full max-w-7xl mx-auto items-center justify-center mb-16 pt-0">

                {/* Row 1: MY JOURNEY */}
                <div className="flex w-full items-center justify-center gap-8">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-right"
                    >
                        <h2 className="text-[8vw] md:text-[8rem] font-black leading-none tracking-tighter">
                            MY
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-4 h-4 rounded-full bg-[#cced00] shadow-[0_0_20px_#cced00]"
                    />

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-left"
                    >
                        <h2 className="text-[8vw] md:text-[8rem] font-black opacity-50 leading-none tracking-tighter">
                            JOURNEY
                        </h2>
                    </motion.div>
                </div>

                {/* Row 2: & EXPERIENCE */}
                <div className="flex w-full items-center justify-center gap-8 -mt-4 md:-mt-10">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="flex-1 text-right"
                    >
                        <h2 className="text-[8vw] md:text-[8rem] font-black text-[#cced00] leading-none tracking-tighter">
                            &
                        </h2>
                    </motion.div>

                    <div className="w-4 h-4 opacity-0" /> {/* Spacer for alignment */}

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="flex-1 text-left"
                    >
                        <h2 className="text-[8vw] md:text-[8rem] font-black opacity-80 leading-none tracking-tighter">
                            EXPERIENCE
                        </h2>
                    </motion.div>
                </div>

            </div>{/* Main Content Area */}
            <div className="relative max-w-7xl mx-auto min-h-[4000px] flex">



                {/* 2. The Straight Line (Timeline) - Centered */}
                <div className="relative w-full flex">

                    {/* Timeline Track - Restored Color */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#cced00]/20">
                        {/* Filling Progress Line (Solid Color) */}
                        <motion.div
                            style={{ scaleY }}
                            className="absolute top-0 left-0 w-full bg-[#cced00] origin-top h-full shadow-[0_0_20px_#cced00]"
                        />
                        {/* Leading Energy Spark */}
                        <motion.div
                            style={{ top: sparkTop }}
                            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#cced00,0_0_40px_#cced00] z-10"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-[60vh] md:gap-[80vh] pl-[60px] md:pl-0 z-10 pt-20 pb-40">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`relative w-full md:w-1/2 ${isEven ? "md:ml-auto md:pl-24" : "md:mr-auto md:pr-24"} group`}>

                                    {/* Timeline Dot (Target Focus Style) */}
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0.2 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ margin: "-50% 0px -50% 0px" }}
                                        transition={{ duration: 0.4 }}
                                        className={`absolute top-2 w-10 h-10 flex items-center justify-center z-20 
                                            left-[-41px] -translate-x-1/2 
                                            ${isEven ? "md:left-0" : "md:left-auto md:right-0 md:translate-x-1/2"}
                                        `}
                                    >
                                        {/* Outer Pulse Ring */}
                                        <div className="absolute w-full h-full rounded-full border border-[#cced00] opacity-0 group-hover:opacity-100 animate-ping" />
                                        {/* Main Dot */}
                                        <div className="w-4 h-4 rounded-full bg-[#111] border-2 border-[#cced00] shadow-[0_0_10px_#cced00]" />
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ margin: "-20%" }}
                                        className={`flex flex-col relative ${isEven ? "items-start text-left" : "items-start text-left md:items-end md:text-right"}`}
                                    >
                                        {/* Ghost Index Number */}
                                        <span className={`absolute -top-20 text-[10rem] font-bold opacity-[0.03] select-none leading-none pointer-events-none z-0 
                                            -left-12 ${isEven ? "" : "md:left-auto md:-right-12"}
                                        `}>
                                            0{index + 1}
                                        </span>

                                        <div className="relative z-10">
                                            <h3 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-none group-hover:text-[#cced00] transition-colors duration-300">
                                                {exp.company}
                                            </h3>

                                            <div className={`flex flex-wrap items-center gap-4 mb-6 ${isEven ? "" : "md:justify-end"}`}>
                                                <span className="text-2xl md:text-3xl opacity-80 font-light">{exp.role}</span>
                                                <span className="text-[#cced00] text-sm font-mono uppercase tracking-widest border border-[#cced00]/30 px-3 py-1 rounded-full bg-[#cced00]/10">{exp.type}</span>
                                            </div>

                                            <p className="text-xl opacity-50 max-w-xl leading-relaxed mb-8">
                                                {exp.description}
                                            </p>

                                            {/* Tech Stack Pills - Update border/bg to use current color */}
                                            <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? "" : "md:justify-end"}`}>
                                                {exp.skills.map((skill, i) => (
                                                    <span key={i} className="text-sm font-medium opacity-40 bg-current/5 px-3 py-1 rounded-full border border-current/5 hover:border-current/20 hover:opacity-100 transition-colors cursor-default">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            <span className="text-sm font-bold tracking-[0.2em] text-[#cced00] uppercase opacity-60">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>

        </motion.section>
    );
}
