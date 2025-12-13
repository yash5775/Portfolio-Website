'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import RollingText from './RollingText';
import MaskedText from '../bits/MaskedText';

const projects = [
    {
        title: "PVM BCA College",
        category: "College Website",
        image: "/project1.jpg",
        id: "01"
    },
    {
        title: "Vrundavan Computer Class",
        category: "Coaching Website",
        image: "/project2.jpg",
        id: "02"
    },
    {
        title: "KARAM PET – Strap Industries",
        category: "Business Website",
        image: "/project3.jpg",
        id: "03"
    },
    {
        title: "CLOUDY",
        category: "Cloud Storage Web App",
        image: "/project1.jpg",
        id: "04"
    }
];

export default function ProjectsSection() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map vertical scroll progress to horizontal movement
    // Adjust "-85%" based on the real width of the content to ensure we see the last card
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#151515]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Background Text (Optional subtle layer) */}
                <div className="absolute top-10 left-10 md:left-20 z-10">
                    <MaskedText
                        className="text-4xl md:text-6xl font-bold text-white leading-tight"
                        specialWords={["Works"]}
                        specialClass="font-serif italic text-[#cced00]"
                    >
                        Selected Works
                    </MaskedText>
                </div>

                <motion.div
                    style={{ x }}
                    className="flex gap-4 sm:gap-8 pl-[5vw] md:pl-[20vw]" /* Start with padding so first card isn't edge-to-edge immediately */
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative h-[60vh] w-[80vw] md:h-[70vh] md:w-[600px] overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 flex-shrink-0"
                        >
                            {/* Card Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-10 flex flex-col justify-end">
                                <span className="text-[#cced00] text-xl md:text-2xl font-mono mb-2 block">{project.id}</span>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-white/60 text-lg md:text-xl">{project.category}</p>
                            </div>
                        </div>
                    ))}

                    {/* "More Works" End Card */}
                    <div className="h-[60vh] w-[80vw] md:h-[70vh] md:w-[600px] flex items-center justify-center flex-shrink-0">
                        <div className="text-center">

                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">See All<br />Projects</h3>
                            <Link href="/work">
                                <button className="group px-8 py-4 bg-[#cced00] text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform overflow-hidden">
                                    <RollingText>
                                        View Archive
                                    </RollingText>
                                </button>
                            </Link>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
