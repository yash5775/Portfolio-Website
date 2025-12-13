'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';
import CurvedLoop from '@/components/bits/CurvedLoop';
import ConnectorLine from '@/components/bits/ConnectorLine';

const ScrollStoryCard = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start 15%"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.60, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], [40, 0]);

    return (
        <div ref={containerRef} className="w-full mt-20">
            <motion.div
                style={{ scale, y, borderRadius }}
                className="w-full overflow-hidden"
            >
                <StorySection />
            </motion.div>
        </div>
    );
};

const Curve = () => {
    const { scrollY } = useScroll();
    // Map scroll range [0, 600] to curve control point Y
    // At scrollY=0: curveValue = 100 (flat line at bottom)
    // At scrollY=600: curveValue = 0 (deep curve peak at top)
    // This makes the curve get DEEPER (more bent) as you scroll down
    const curveValue = useTransform(scrollY, [0, 600], [100, 0]);

    // SVG Path: Creates only the curved part (bottom arc)
    // M0,100 - Start at bottom-left
    // Q50,${curve} 100,100 - Curved line with animated control point
    // L100,100 L0,100 Z - Close shape at bottom
    const path = useTransform(
        curveValue,
        (value) => `M0 100 Q50 ${value} 100 100 L100 100 L0 100 Z`
    );

    return (
        <div className="absolute top-[-100px] left-0 w-full h-[100px] overflow-hidden z-40 pointer-events-none">
            {/* White colored SVG to match the light content section */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path d={path} fill="#e7e7e7" />
            </svg>
        </div>
    );
}
import StorySection from './StorySection';
import ProfileAboutSection from './ProfileAboutSection';
import ServicesPinned from './ServicesPinned';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import BlurText from '@/components/bits/BlurText';
import MaskedText from '@/components/bits/MaskedText';
import ShinyButton from '@/components/bits/ShinyButton';
import LargeFooter from './LargeFooter';
import FrameUI from './FrameUI';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Overlay() {
    return (
        <div className="relative w-full"> {/* Changed root element to a div */}
            <FrameUI /> {/* Rendered FrameUI component */}
            <Navbar />

            {/* Content Container */}
            <div className="relative w-full z-10">

                {/* Hero Section */}
                <section className="h-screen w-full flex flex-col justify-center items-center text-center relative z-10 p-6 md:p-12">
                    <div className="flex flex-col items-center">
                        <div className="mb-6 relative">
                            <MaskedText className="text-xl md:text-2xl font-medium text-white/80 mb-4 tracking-wide">
                                Hi! I'm Yash
                            </MaskedText>
                        </div>
                        <div className="mb-8 flex flex-col items-center">
                            <MaskedText className="text-6xl md:text-[5rem] lg:text-[7rem] font-bold text-white leading-[1.0] tracking-tight">
                                Web Developer
                            </MaskedText>
                            <MaskedText className="text-6xl md:text-[5rem] lg:text-[7rem] font-light text-white leading-[1.0] tracking-tight italic font-serif">
                                UI & UX Designer.
                            </MaskedText>
                        </div>
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                            <span className="text-sm font-medium text-white/40 lowercase tracking-widest animate-pulse">
                                scroll down
                            </span>
                        </div>
                    </div>
                </section>

                {/* Dark Content Section with Curve Transition and Strict Order */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                    className="relative w-full bg-[#e7e7e7] mt-[20vh] z-10"
                >

                    {/* Dynamic Curve Transition */}
                    <Curve />
                    <ConnectorLine />

                    {/* Intro Text Matching Reference Position - Reduced Padding to lift text up */}
                    <div className="w-full flex flex-col items-center justify-center pt-20 pb-10 text-center px-4">
                        <div className="max-w-[1000px] flex flex-col items-center gap-6">
                            <MaskedText className="text-3xl md:text-5xl lg:text-6xl font-medium text-black leading-[1.1] tracking-tight">
                                I’m Yash — a Web Developer focused on building fast, scalable, and visually refined digital products.
                            </MaskedText>

                            <MaskedText className="text-lg md:text-xl text-black/60 max-w-[800px] leading-relaxed">
                                I specialize in building high-performance web applications with responsive UI, clean architecture, and real-world usability using React, Next.js, and modern backend services.
                            </MaskedText>

                            <div className="flex justify-center mt-6">
                                <button className="group flex items-center gap-0.5 hover:scale-105 transition-transform duration-300">
                                    <div className="relative rounded-full bg-[#cced00] font-medium text-lg overflow-hidden transition-colors duration-300 group-hover:bg-black group-hover:text-white text-black">
                                        <span className="block px-7 py-3.5 transition-transform duration-300 ease-[0.76, 0, 0.24, 1] group-hover:-translate-y-full">
                                            About Me
                                        </span>
                                        <span className="block absolute top-0 left-0 w-full px-7 py-3.5 text-center transition-transform duration-300 ease-[0.76, 0, 0.24, 1] translate-y-full group-hover:translate-y-0">
                                            About Me
                                        </span>
                                    </div>
                                    <div className="w-[52px] h-[52px] rounded-full bg-[#cced00] flex items-center justify-center text-black overflow-hidden relative transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                                        <ArrowUpRight
                                            size={22}
                                            strokeWidth={2.5}
                                            className="absolute transition-all duration-300 ease-[0.76, 0, 0.24, 1] group-hover:-translate-y-[150%] group-hover:translate-x-[150%]"
                                        />
                                        <ArrowUpRight
                                            size={22}
                                            strokeWidth={2.5}
                                            className="absolute transition-all duration-300 ease-[0.76, 0, 0.24, 1] translate-y-[150%] -translate-x-[150%] group-hover:translate-y-0 group-hover:translate-x-0"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Layout: Scroll Text, Line, Story Text */}
                    <div className="w-full max-w-[1400px] px-10 mt-20 flex flex-col gap-10">
                        <div className="flex justify-between items-end text-black font-medium">
                            <div className="flex items-center gap-2">
                                <ArrowDown className="animate-bounce" size={20} />
                                <span>Scroll to Explore</span>
                            </div>
                            <span>My Short Story</span>
                        </div>
                        <div className="w-full h-[1px] bg-black/10"></div>
                    </div>

                    {/* Expanding White Card Animation - OUTSIDE padding container for Full Width */}
                    <ScrollStoryCard />


                    {/* Dark Background Section starting below Story Card */}
                    <div className="w-full bg-[#1a1a1a] text-white pt-20 lg:pt-32">
                        {/* 2. Profile Photo & About Text (Restored Text Only) */}
                        <section id="about">
                            <ProfileAboutSection />
                        </section>

                        {/* 3. Pinned Services (Sticky Cards) */}
                        <ServicesPinned />

                        {/* 4. Projects (Works Grid) */}
                        {/* Projects Section - Sticky Horizontal Scroll */}
                        <ProjectsSection />

                        {/* Experience Section - Scroll Draw Animation */}
                        <ExperienceSection />


                        <section id="contact">
                            <LargeFooter />
                        </section>
                    </div>

                </motion.div>
            </div >
        </div >
    );
}
