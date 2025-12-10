'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: "VexLogic AI",
        category: "AI Assistant",
        image: "/project1.jpg", // Placeholder
        colSpan: "col-span-1"
    },
    {
        title: "VexLogic Business",
        category: "Business Expansion",
        image: "/project2.jpg",
        colSpan: "col-span-1"
    },
    {
        title: "Comra",
        category: "3D Visualisation",
        image: "/project3.jpg",
        colSpan: "col-span-1"
    },
    {
        title: "Superhost",
        category: "Property Booking",
        image: "/project4.jpg",
        colSpan: "col-span-1"
    }
];

export default function ProjectsSection() {
    return (
        <div className="w-full relative z-20 py-20 lg:py-32 px-4 md:px-12 bg-[#111111]">

            {/* Title Section */}
            <div className="max-w-[1400px] mx-auto mb-16 lg:mb-24">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl">
                    Discover my latest work <br />
                    <span className="text-white/50">and creative solutions.</span>
                </h2>
            </div>

            {/* Grid */}
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative w-full aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
                    >
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
                            <div className="absolute inset-0 flex items-center justify-center text-white/5 text-6xl font-bold uppercase">
                                {project.title}
                            </div>
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                        {/* Text Content - Reveal on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <span className="text-4xl md:text-6xl font-bold text-lime-400 tracking-tighter">
                                {project.title.split(' ')[0]}
                            </span>
                        </div>

                        {/* Default Label (Always Visible) */}
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:opacity-0 transition-opacity duration-300 transform translate-y-0 group-hover:-translate-y-4">{project.title}</h3>
                            <p className="text-white/60 text-lg group-hover:opacity-0 transition-opacity duration-300 transform translate-y-0 group-hover:-translate-y-4">{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center mt-20">
                <button className="px-10 py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-sm font-bold flex items-center gap-4 group">
                    View All Projects
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>

        </div>
    );
}
