'use client';

import MaskedText from "@/components/bits/MaskedText";
import ShinyButton from "@/components/bits/ShinyButton";
import Magnetic from "@/components/bits/Magnetic";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const TimeDisplay = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            setTime(`${timeString} UTC+5:30`);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return <p className="text-white/80 text-sm">{time}</p>;
};

export default function LargeFooter() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

    // Parallax effect for the footer content
    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

    return (
        <footer ref={container} className="relative h-[800px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
                <div className="h-[800px] sticky top-[calc(100vh-800px)]">
                    <div className="bg-[#111111] text-white w-full h-full rounded-t-[60px] flex flex-col justify-between p-12 md:p-24 relative overflow-hidden">

                        {/* Fluid Gradient Background - Subtle */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1),transparent_70%)]"></div>

                        {/* Top Section */}
                        <div className="flex flex-col md:flex-row justify-between relative z-10">
                            <div>
                                <MaskedText className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-[0.85] text-white">
                                    LET'S
                                </MaskedText>
                                <MaskedText className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-[0.85] text-white/50">
                                    TALK
                                </MaskedText>
                            </div>

                            <div className="mt-12 md:mt-0 md:text-right">
                                <p className="text-white/40 text-lg mb-8 max-w-xs ml-auto">
                                    Have a project in mind? Let's build something extraordinary together.
                                </p>
                                <ShinyButton>
                                    hello@yash.dev
                                </ShinyButton>
                            </div>
                        </div>

                        {/* Bottom Section - Detailed Grid */}
                        <div className="flex flex-col gap-12 border-t border-white/10 pt-12 relative z-10 font-sans">
                            <div className="flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-center">

                                {/* Left Side: Data Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 w-full lg:w-auto">

                                    {/* Column 1: Links */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-white/40 text-xs font-semibold tracking-wider uppercase">Links</h3>
                                        <ul className="flex flex-col gap-3">
                                            {['Home', 'Work', 'About', 'Contact'].map((item) => (
                                                <li key={item}>
                                                    <a href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-white text-sm transition-colors">{item}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Column 2: Socials */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-white/40 text-xs font-semibold tracking-wider uppercase">Socials</h3>
                                        <ul className="flex flex-col gap-3">
                                            {['Email', 'LinkedIn', 'WhatsApp', 'Github'].map((item) => (
                                                <li key={item}>
                                                    <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">{item}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Column 3: Local Time */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-white/40 text-xs font-semibold tracking-wider uppercase">Local Time</h3>
                                        <TimeDisplay />
                                    </div>

                                    {/* Column 4: Version */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-white/40 text-xs font-semibold tracking-wider uppercase">Version</h3>
                                        <p className="text-white/80 text-sm">2025 © Edition</p>
                                    </div>
                                </div>

                                {/* Right Side: Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-4 lg:mt-0">
                                    <a href="tel:+213779577865" className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm flex items-center justify-center">
                                        +91 98765 43210
                                    </a>
                                    <a href="mailto:hello@yash.dev" className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm flex items-center justify-center">
                                        hello@yash.dev
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
