'use client';

import Navbar from './Navbar';
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
                <div className="relative w-full bg-[#e7e7e7] mt-[20vh] z-10">

                    {/* Curve Transition */}
                    <div className="overflow-hidden absolute left-1/2 -translate-x-1/2 w-full lg:-top-[3rem] -top-[2rem] lg:h-[4rem] h-[2rem] z-40 mb-14">
                        <div className="absolute right-[-10%] rounded-[50%] h-[150%] w-[120%] bg-[#e7e7e7]"></div>
                    </div>

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

                </div>

                {/* Large Footer */}
                <LargeFooter />
            </div>
        </div >
    );
}
