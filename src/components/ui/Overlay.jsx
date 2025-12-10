'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';

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
import { ArrowRight } from 'lucide-react';

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

                    {/* 1. Story Marquee (White Card) */}
                    <div className="pt-20 lg:pt-32 pb-20">
                        <StorySection />
                    </div>

                    {/* 2. Profile Photo & About Text */}
                    <ProfileAboutSection />

                    {/* 3. Pinned Services (Sticky Cards) */}
                    <ServicesPinned />

                    {/* 4. Projects (Works Grid) */}
                    <ProjectsSection />

                    {/* 5. Experience (Timeline) */}
                    <ExperienceSection />

                </motion.div>

                {/* Large Footer */}
                <LargeFooter />
            </div>
        </div>
    );
}
