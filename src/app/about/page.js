'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Navbar from '@/components/ui/Navbar';
import LargeFooter from '@/components/ui/LargeFooter';
import MaskedText from '@/components/bits/MaskedText';

// --- Components for this page ---

const ValueCard = ({ title, description, number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm relative overflow-hidden group"
        >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#cced00]/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <span className="text-[#cced00] font-mono mb-4 text-sm tracking-widest uppercase">0{number}</span>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">{description}</p>
        </motion.div>
    );
};

const TimelineItem = ({ year, title, description }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div ref={ref} className="flex flex-col md:flex-row gap-4 md:gap-20 py-12 border-b border-white/5 last:border-0 group">
            <div className="w-full md:w-1/4">
                <span className={`text-5xl md:text-7xl font-bold text-transparent stroke-text transition-colors duration-500 ${isInView ? 'text-[#cced00]/20' : 'text-white/5'}`}>
                    {year}
                </span>
            </div>
            <div className="w-full md:w-3/4 flex flex-col pt-2">
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#cced00] transition-colors">{title}</h4>
                <p className="text-white/60 leading-relaxed max-w-2xl">{description}</p>
            </div>
            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px currentColor;
                }
            `}</style>
        </div>
    );
};

// --- Main Page Component ---

export default function AboutPage() {
    const containerRef = useRef(null);

    return (
        <main ref={containerRef} className="relative w-full min-h-screen bg-[#1a1a1a] text-white overflow-hidden">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
                <div className="max-w-[1400px] w-full mx-auto">
                    <div className="mb-8">
                        <MaskedText className="text-lg md:text-xl text-[#cced00] font-mono tracking-widest uppercase mb-4">
                            Introduction
                        </MaskedText>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tighter text-white">
                            More Than
                        </h1>
                        <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tighter text-white/20 italic font-serif">
                                Just
                            </h1>
                            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tighter text-white">
                                Code.
                            </h1>
                        </div>
                    </div>

                    <div className="mt-20 max-w-2xl">
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
                            I bridge the gap between <span className="text-[#cced00]">engineering</span> and <span className="text-white font-serif italic">artistry</span>.
                            My work is driven by the belief that digital experiences should be intuitive, performant, and emotionally resonant.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Philosophy Grid */}
            <section className="py-20 px-6 md:px-20 bg-black/20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Core Philosophy</h2>
                        <div className="w-full h-px bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ValueCard
                            number="1"
                            title="User-Centric Design"
                            description="Every line of code and every pixel serves the user. I prioritize accessibility and usability without compromising on aesthetics."
                        />
                        <ValueCard
                            number="2"
                            title="Performance First"
                            description="A beautiful site means nothing if it doesn't load. I optimize for speed, fluidity, and seamless interactions across all devices."
                        />
                        <ValueCard
                            number="3"
                            title="Creative Innovation"
                            description="I push boundaries using WebGL and advanced motion libraries to create immersive stories that leave a lasting impression."
                        />
                    </div>
                </div>
            </section>

            {/* 3. The Narrative Timeline */}
            <section className="py-32 px-6 md:px-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold text-white">My Journey</h2>
                        <p className="text-white/50 mt-4 md:mt-0 max-w-sm text-right">
                            From my first "Hello World" to architecting complex systems.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <TimelineItem
                            year="2020"
                            title="The Beginning"
                            description="Started exploring web development, diving deep into HTML, CSS, and vanilla JavaScript. Built my first portfolio and small freelance projects."
                        />
                        <TimelineItem
                            year="2022"
                            title="Frontend Mastery"
                            description="Specialized in React ecosystem. Worked with multiple startups to deliver high-quality frontend interfaces and design systems."
                        />
                        <TimelineItem
                            year="2024"
                            title="Full Stack & 3D"
                            description="Expanded into backend development with Next.js and Node.js. Began mastering Three.js to bring 3D experiences to the web."
                        />
                        <TimelineItem
                            year="NOW"
                            title="Creative Developer"
                            description="Currently building immersive digital experiences and scalable products for global clients. Always learning, always creating."
                        />
                    </div>
                </div>
            </section>

            {/* 4. Creative Stack Display */}
            <section className="py-32 px-6 md:px-20 overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#cced00]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-20">The Toolkit</h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {[
                            "React.js", "Next.js", "N8N", "Firebase", "Supabase", "WordPress", "Shopify", "Prompt Engineering", "HTML", "CSS", "JavaScript", "Git", "GitHub", "Tailwind CSS"
                        ].map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="px-8 py-4 rounded-full border border-white/10 bg-[#222] hover:bg-[#cced00] hover:text-black hover:border-transparent transition-colors duration-300 cursor-default"
                            >
                                <span className="text-lg md:text-xl font-medium">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <LargeFooter />
        </main>
    );
}
