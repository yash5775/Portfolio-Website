'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Navbar from '@/components/ui/Navbar';
import LargeFooter from '@/components/ui/LargeFooter';
import MaskedText from '@/components/bits/MaskedText';
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

// --- Components for this page ---

const SectionHeader = ({ title, subtitle }) => (
    <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h2>
        {subtitle && <p className="text-white/60 text-lg max-w-2xl">{subtitle}</p>}
        <div className="w-full h-px bg-white/10 mt-8" />
    </div>
);

const ProjectCard = ({ title, role, stack, description, type }) => {
    return (
        <div className="flex flex-col p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                <div>
                    <span className="text-[#cced00] font-mono text-xs tracking-widest uppercase mb-2 block">{type}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#cced00] transition-colors">{title}</h3>
                </div>
                {role && <span className="px-4 py-1 rounded-full border border-white/10 text-xs md:text-sm text-white/60 bg-black/20">{role}</span>}
            </div>

            {stack && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {stack.map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-white/40">#{tech}</span>
                    ))}
                </div>
            )}

            <p className="text-white/70 leading-relaxed text-sm md:text-base">{description}</p>
        </div>
    );
};

const EducationItem = ({ degree, school, year, score }) => (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/5 last:border-0 hover:bg-white/5 px-4 rounded-xl transition-colors">
        <div>
            <h4 className="text-xl font-bold text-white">{degree}</h4>
            <p className="text-white/60 mt-1">{school}</p>
        </div>
        <div className="flex flex-col items-end mt-4 md:mt-0">
            <span className="text-[#cced00] font-mono font-bold">{year}</span>
            <span className="text-white/40 text-sm mt-1">{score}</span>
        </div>
    </div>
);

// --- Main Page Component ---

export default function AboutPage() {
    const containerRef = useRef(null);

    return (
        <main ref={containerRef} className="relative w-full min-h-screen bg-[#151515] text-white overflow-hidden">
            <Navbar />

            {/* 1. Hero / Profile Section */}
            <section className="relative pt-40 pb-20 px-6 md:px-20 bg-[#151515]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text Info */}
                    <div>
                        <MaskedText className="text-lg md:text-xl text-[#cced00] font-mono tracking-widest uppercase mb-6">
                            Frontend & WordPress Developer
                        </MaskedText>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-8">
                            Yashkumar <br />
                            <span className="text-white/20 italic font-serif">Chaniyara</span>
                        </h1>

                        <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-12">
                            Focused on building fast, responsive websites. Strong design sense, attention to detail, and ability to deliver clean UI/UX for businesses.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="mailto:yash.chaniyara@icloud.com" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-[#cced00] transition-colors">
                                <Mail size={18} />
                                <span>yash.chaniyara@icloud.com</span>
                            </a>
                            <a href="tel:+918200647176" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:border-[#cced00] hover:text-[#cced00] transition-colors">
                                <Phone size={18} />
                                <span>+91 82006 47176</span>
                            </a>
                        </div>

                        <div className="flex gap-6 mt-8 ml-2">
                            <a href="https://linkedin.com/in/" target="_blank" className="text-white/40 hover:text-[#cced00] transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/yash5775" target="_blank" className="text-white/40 hover:text-[#cced00] transition-colors">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Decorative / Abstract Visual */}
                    <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group">
                        <div className="absolute inset-0 bg-[#cced00]/5 blur-3xl rounded-full scale-50 group-hover:scale-75 transition-transform duration-700" />
                        <div className="relative z-10 text-center p-8">
                            <h3 className="text-3xl font-bold mb-4">Professional Summary</h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                Skilled with HTML, CSS, JavaScript, React, Next, WordPress, and Shopify customizations.
                                Committed to leadership, problem solving, and seamless team collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Skills Section */}
            <section className="py-20 px-6 md:px-20 bg-black">
                <div className="max-w-[1400px] mx-auto">
                    <SectionHeader title="Technical Arsenal" subtitle="Tools and technologies I use to bring ideas to life." />

                    <div className="flex flex-col gap-8 overflow-hidden">
                        {/* Marquee Row 1: Frontend & Design */}
                        <div className="flex relative items-center">
                            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#151515] to-transparent pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#151515] to-transparent pointer-events-none" />

                            <motion.div
                                className="flex gap-4 pr-4"
                                animate={{ x: [0, -1000] }}
                                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                            >
                                {[
                                    "React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion",
                                    "React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion",
                                    "React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"
                                ].map((tech, i) => (
                                    <div
                                        key={i}
                                        className="whitespace-nowrap px-8 py-4 rounded-full border border-white/5 bg-[#222] text-white/80 text-lg font-medium"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Marquee Row 2: Backend & Tools */}
                        <div className="flex relative items-center">
                            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#151515] to-transparent pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#151515] to-transparent pointer-events-none" />

                            <motion.div
                                className="flex gap-4 pr-4"
                                animate={{ x: [-1000, 0] }}
                                transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                            >
                                {[
                                    "Firebase", "Supabase", "WordPress", "Shopify", "N8N", "Git", "GitHub", "Prompt Engineering",
                                    "Firebase", "Supabase", "WordPress", "Shopify", "N8N", "Git", "GitHub", "Prompt Engineering",
                                    "Firebase", "Supabase", "WordPress", "Shopify", "N8N", "Git", "GitHub", "Prompt Engineering"
                                ].map((tech, i) => (
                                    <div
                                        key={i}
                                        className="whitespace-nowrap px-8 py-4 rounded-full border border-white/5 bg-[#222] text-white/80 text-lg font-medium"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Education & Certifications */}
            <section className="py-20 px-6 md:px-20 bg-[#151515]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Education */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-10 border-l-4 border-[#cced00] pl-6">Education</h3>
                        <div className="flex flex-col gap-2">
                            <EducationItem
                                degree="B.E. in Computer Engineering"
                                school="L.D.R.P. ITR, Gandhinagar"
                                year="Aug 2022 - 2026"
                                score="CGPA: 6.5/10"
                            />
                            <EducationItem
                                degree="HSC (XII), GSHSEB"
                                school="Dream International School, Dhoraji"
                                year="2022"
                                score="46%"
                            />
                            <EducationItem
                                degree="SSC (X), GSHSEB"
                                school="Adarsh School, Dhoraji"
                                year="2020"
                                score="75.5%"
                            />
                        </div>
                    </div>

                    {/* Certifications & Achievements */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-10 border-l-4 border-[#cced00] pl-6">Certifications & Achievements</h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-4">Certifications</h4>
                                <ul className="space-y-2 text-white/70 list-disc list-inside marker:text-[#cced00]">
                                    <li>Python for Data Science – NPETL</li>
                                    <li>Project Management Foundations – LinkedIn Learning</li>
                                    <li>Web Development CSS3 and HTML5 – Coincent / IIT Roorkee</li>
                                    <li>AWS Cloud Practitioner – Skill Builder</li>
                                    <li>Prompt Engineering - Skill Builder</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-white mb-4">Hackathons & Events</h4>
                                <ul className="space-y-2 text-white/70 list-disc list-inside marker:text-[#cced00]">
                                    <li><span className="text-white">Bharatiya Antariksh Hackathon 2025 (ISRO)</span> - Participant</li>
                                    <li>Ideathon 2025 – Participant</li>
                                    <li>Event Organizer – Crypto Rush, Xenesis ‘23</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <LargeFooter />
        </main>
    );
}
