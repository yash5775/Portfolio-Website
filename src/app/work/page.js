'use client';

import { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import LargeFooter from '@/components/ui/LargeFooter';
import MaskedText from '@/components/bits/MaskedText';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import RollingText from '@/components/ui/RollingText';

const allProjects = [
    {
        title: "PVM BCA College",
        category: "College Website",
        type: "Real-world Project",
        image: "/project1.jpg",
        id: "01",
        description: "A full-stack college website built with React and Firebase, featuring a custom admin dashboard, dynamic content management, and a responsive UI.",
        techStack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "Vrundavan Computer Class",
        category: "Coaching Website",
        type: "Real-world Project",
        image: "/project2.jpg",
        id: "02",
        description: "A dynamic coaching-class website built with React and Firebase, featuring a custom admin dashboard, structured course management, and a fully responsive custom UI.",
        techStack: ["React", "Firebase", "Tailwind CSS", "Admin Panel"]
    },
    {
        title: "KARAM PET – Strap Industries",
        category: "Business Website",
        type: "Real-world Project",
        image: "/project3.jpg",
        id: "03",
        description: "Developed a responsive WordPress-based business website with a custom UI and SEO plugin integration for on-page optimization and improved search visibility.",
        techStack: ["WordPress", "Custom UI", "SEO Plugins"]
    },



    {
        title: "CLOUDY ",
        category: "Cloud Storage Web App",
        type: "ACADEMIC PROJECTS",
        image: "/project1.jpg",
        id: "06",
        hideLink: true,
        description: "Developed a secure file-storage system with authentication & encrypted data, deployed on EC2 with S3 and IAM configuration. Role: Team Leader.",
        techStack: ["Node.js", "AWS (EC2, S3, IAM)", "HTML/CSS/JS"]
    },
    {
        title: "ONVIA",
        category: "IoT System",
        type: "ACADEMIC PROJECTS",
        image: "/project2.jpg",
        id: "07",
        hideLink: true,
        description: "Built a real-time smart home automation system using Firebase for device control and monitoring. Integrated iOS app, backend, and ESP8266 microcontroller.",
        techStack: ["Swift", "Firebase", "ESP8266", "C++"]
    }
];

const tabs = ["All", "Real-world Project", "Personal Project", "ACADEMIC PROJECTS"];

export default function WorkPage() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = activeTab === "All"
        ? allProjects
        : allProjects.filter(project => project.type === activeTab);

    return (
        <main className="relative w-full min-h-screen bg-[#151515] text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-4 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-16 md:mb-24 flex flex-col items-start">
                    <MaskedText className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight mb-8">
                        Selected
                    </MaskedText>
                    <MaskedText className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight text-[#cced00] italic font-serif">
                        Works.
                    </MaskedText>
                    <div className="mt-10 max-w-2xl">
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                            A showcase of digital products, websites, and interactive experiences crafted with precision and passion.
                        </p>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-4 mb-20 md:mb-32">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${activeTab === tab ? "text-[#151515]" : "text-white/60 hover:text-white"}`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#cced00] rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </div>

                {/* Projects List with AnimatePresence */}
                <motion.div layout className="flex flex-col gap-20 md:gap-32">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="group flex flex-col md:flex-row gap-8 md:gap-20 items-center"
                            >
                                {/* Image - Alternating Order based on index in filtered list */}
                                <div className={`w-full md:w-3/5 aspect-[16/10] relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                </div>

                                {/* Info */}
                                <div className={`w-full md:w-2/5 flex flex-col justify-center items-start ${index % 2 === 1 ? 'md:order-1 md:items-end md:text-right' : ''}`}>

                                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h2>
                                    <p className="text-xl text-white/60 mb-6">{project.category}</p>

                                    <p className="text-white/40 leading-relaxed mb-6 max-w-md">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8 max-w-md">
                                        {project.techStack && project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/50 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="overflow-hidden">
                                        {!project.hideLink && (
                                            <button className="group relative flex items-center gap-2 text-lg font-medium overflow-hidden">
                                                <div className="relative overflow-hidden w-full">
                                                    <RollingText className="font-medium text-lg">View Project</RollingText>
                                                </div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <LargeFooter />
        </main>
    );
}
