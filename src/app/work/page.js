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
        link: "https://pvm-bca-collage-two.vercel.app",
        description: "A full-stack college website built with React and Firebase, featuring a custom admin dashboard, dynamic content management, and a responsive UI.",
        techStack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "Vrundavan Computer Class",
        category: "Coaching Website",
        type: "Real-world Project",
        image: "/project2.jpg",
        id: "02",
        link: "https://vrundavancomputerclass.vercel.app",
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

                    <MaskedText className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight text-[#cced00] italic font-serif">
                        Projects.
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
                <motion.div layout className="grid grid-cols-2 gap-4 md:gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="group flex flex-col gap-3 md:gap-6"
                            >
                                {/* Image */}
                                <div className="w-full aspect-[16/10] relative overflow-hidden rounded-2xl md:rounded-3xl bg-neutral-900 border border-white/10">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                </div>

                                {/* Info */}
                                <div className="w-full flex flex-col items-start">

                                    <h2 className="text-lg md:text-4xl font-bold mb-1 md:mb-3 leading-tight">{project.title}</h2>
                                    <p className="text-xs md:text-lg text-white/60 mb-2 md:mb-4">{project.category}</p>

                                    <p className="text-white/40 leading-relaxed mb-3 md:mb-6 line-clamp-3 text-xs md:text-base hidden sm:block">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-6">
                                        {project.techStack && project.techStack.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-medium uppercase tracking-wider text-white/50 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="overflow-hidden mt-auto">
                                        {!project.hideLink && (
                                            project.link ? (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative flex items-center gap-1.5 md:gap-2 text-sm md:text-base font-medium overflow-hidden"
                                                >
                                                    <div className="relative overflow-hidden w-full">
                                                        <RollingText className="font-medium text-sm md:text-base">View Project</RollingText>
                                                    </div>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </a>
                                            ) : (
                                                <button className="group relative flex items-center gap-1.5 md:gap-2 text-sm md:text-base font-medium overflow-hidden">
                                                    <div className="relative overflow-hidden w-full">
                                                        <RollingText className="font-medium text-sm md:text-base">View Project</RollingText>
                                                    </div>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            )
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
