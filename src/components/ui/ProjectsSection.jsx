'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: "VexLogic AI",
        category: "AI Assistant",
        image: "/project1.jpg",
        link: "#"
    },
    {
        title: "VexLogic Business",
        category: "Business Expansion",
        image: "/project2.jpg",
        link: "#"
    },
    {
        title: "Comra",
        category: "3D Visualisation",
        image: "/project3.jpg",
        link: "#"
    },
    {
        title: "Superhost",
        category: "Property Booking",
        image: "/project4.jpg",
        link: "#"
    }
];

// Duplicate for marquee effect
const marqueeProjects = [...projects, ...projects, ...projects];

export default function ProjectsSection() {
    return (
        <div className="w-full relative z-20 py-20 lg:py-32 px-4 md:px-12 bg-[#111111]">

            {/* Title Section */}
            <div className="max-w-[1400px] mx-auto mb-16 lg:mb-20 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl">
                    Discover my latest work <br />
                    <span className="text-white/50">and creative solutions.</span>
                </h2>
                <div className="mt-4 overflow-hidden">
                    <p className="text-xl md:text-2xl text-[#cced00] font-medium italic tracking-wide font-serif">
                        Also think different.
                    </p>
                </div>
            </div>

            {/* Showcase Container (Matching Reference) */}
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="w-full bg-[#1c1c1c] rounded-[40px] py-16 md:py-20 relative overflow-hidden group hover:bg-[#222] transition-colors duration-500">

                    {/* Background/Overlay Text (Matching "Event Highlight") */}
                    {/* Z-Index increased to 30 to appear ON TOP of images, mix-blend changed for visibility */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 mix-blend-overlay">
                        <h3 className="text-[15vw] font-bold text-white/50 tracking-widest uppercase text-center leading-none select-none">
                            Selected
                        </h3>
                    </div>

                    {/* Marquee Images Row */}
                    <div className="w-full overflow-hidden relative z-20">
                        <motion.div
                            className="flex gap-8 w-max px-8"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20 // Adjust speed as needed
                            }}
                        >
                            {marqueeProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="relative w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group/card flex-shrink-0"
                                >
                                    {/* Image Placeholder */}
                                    <div className="absolute inset-0 bg-[#0a0a0a] transition-transform duration-700 group-hover/card:scale-110 border border-white/5">
                                        {/* Fallback Text if image missing */}
                                        <div className="absolute inset-0 flex items-center justify-center text-white/5 text-6xl font-bold uppercase rotate-90 tracking-widest">
                                            {project.title.substring(0, 3)}
                                        </div>
                                        {/* Uncomment for Real Image - Enabled now */}
                                        {/* <Image src={project.image} alt={project.title} fill className="object-cover opacity-80 group-hover/card:opacity-100 transition-opacity" /> */}
                                    </div>

                                    {/* Hover Info */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-40">
                                        <h4 className="text-2xl font-bold text-white translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">{project.title}</h4>
                                        <p className="text-[#cced00] text-base translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* View More Button */}
            <div className="w-full flex justify-center mt-16 md:mt-20">
                <button className="px-10 py-4 bg-[#cced00] hover:bg-white text-black rounded-full transition-all duration-300 uppercase tracking-widest text-sm font-bold flex items-center gap-3 hover:scale-105 shadow-[0_0_20px_rgba(204,237,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    View All Projects
                    <span className="text-lg">→</span>
                </button>
            </div>

        </div>
    );
}
