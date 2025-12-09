'use client';

import Navbar from './Navbar';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
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

            {/* Scrollable Container */}
            <div className="absolute top-0 left-0 w-full h-screen z-10 overflow-y-auto overflow-x-hidden scroll-smooth">

                {/* Hero Section Container - Centered */}
                <section className="h-screen w-full flex flex-col justify-center items-center text-center relative z-10 p-6 md:p-12">

                    {/* Hero Text */}
                    <div className="flex flex-col items-center">
                        <div className="mb-6 relative">
                            <MaskedText className="text-xl md:text-2xl font-medium text-black/80 mb-4 tracking-wide">
                                Hi! I'm Yash
                            </MaskedText>
                            {/* Visual Note: In reference, "Full-stack Developer" + "UI & UX Designer" is the big heavy text */}
                        </div>

                        <div className="mb-8 flex flex-col items-center">
                            <MaskedText className="text-6xl md:text-[5rem] lg:text-[7rem] font-bold text-black leading-[1.0] tracking-tight">
                                Web Developer
                            </MaskedText>
                            <MaskedText className="text-6xl md:text-[5rem] lg:text-[7rem] font-light text-black leading-[1.0] tracking-tight italic font-serif">
                                WordPress Developer.
                            </MaskedText>
                        </div>

                        {/* Scroll Down Indicator */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                            <span className="text-sm font-medium text-black/40 lowercase tracking-widest animate-pulse">
                                scroll down
                            </span>
                        </div>
                    </div>

                </section>

                {/* Content Overlay */}
                <main className="w-full max-w-[1400px] mx-auto relative z-10 px-6 md:px-12">

                    {/* Spacing for next section */}
                    <div className="h-[20vh]" />
                </main>


                {/* About Section */}
                <AboutSection />

                {/* Projects Section */}
                <ProjectsSection />

                {/* Large Footer */}
                <LargeFooter />
            </div>
        </div>
    );
}
