'use client';

import Navbar from '@/components/ui/Navbar';
import LargeFooter from '@/components/ui/LargeFooter';
import MaskedText from '@/components/bits/MaskedText';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RollingText from '@/components/ui/RollingText';

const projects = [
    {
        title: "VexLogic AI",
        category: "AI Assistant",
        image: "/project1.jpg",
        id: "01",
        description: "An advanced AI assistant designed to streamline workflow and enhance productivity with intuitive natural language processing."
    },
    {
        title: "VexLogic Business",
        category: "Business Expansion",
        image: "/project2.jpg",
        id: "02",
        description: "A comprehensive platform helping businesses scale through data-driven insights and automated resource management."
    },
    {
        title: "Comra",
        category: "3D Visualisation",
        image: "/project3.jpg",
        id: "03",
        description: "Interactive 3D architectural visualization tool allowing users to explore spaces in real-time with photorealistic quality."
    },
    {
        title: "Superhost",
        category: "Property Booking",
        image: "/project4.jpg",
        id: "04",
        description: "Seamless property management and booking system for hosts and travelers, featuring smart scheduling and automated check-ins."
    }
];

export default function WorkPage() {
    return (
        <main className="relative w-full min-h-screen bg-[#1a1a1a] text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-4 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-20 md:mb-32 flex flex-col items-start">
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

                {/* Projects List */}
                <div className="flex flex-col gap-20 md:gap-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group flex flex-col md:flex-row gap-8 md:gap-20 items-center"
                        >
                            {/* Image - Alternating Order */}
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
                                <span className="text-[#cced00] font-mono text-xl mb-4 block">{project.id}</span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h2>
                                <p className="text-xl text-white/60 mb-8">{project.category}</p>
                                <p className="text-white/40 leading-relaxed mb-8 max-w-md">
                                    {project.description}
                                </p>
                                <div className="overflow-hidden">
                                    <button className="group relative flex items-center gap-2 text-lg font-medium overflow-hidden">
                                        <div className="relative overflow-hidden">
                                            <span className="block transition-transform duration-500 group-hover:-translate-y-full">View Project</span>
                                            <span className="absolute top-0 left-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0">View Project</span>
                                        </div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <LargeFooter />
        </main>
    );
}
