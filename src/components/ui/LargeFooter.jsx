'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const TimeDisplay = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            setTime(`${timeString} GMT+5:30`);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return <p className="text-black/40 text-sm font-mono mt-2">{time}</p>;
};

export default function LargeFooter() {
    return (
        <footer className="relative w-full bg-[#ffffff] text-black pt-10 pb-12 px-6 md:px-12 overflow-hidden z-20">

            <div className="w-full max-w-[1240px] mx-auto border-t border-black/10 pt-10">

                {/* 1. Big CTA Section */}
                <div className="mb-24 flex flex-col items-start">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="relative flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-[#cced00] animate-ping absolute opacity-75" />
                            <div className="w-3 h-3 rounded-full bg-[#cced00] relative" />
                        </div>
                        <span className="text-black/60 uppercase tracking-widest text-sm font-mono">Open to new opportunities</span>
                    </div>

                    <h2 className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-12">
                        LET'S WORK <br /> <span className="text-black/20">TOGETHER.</span>
                    </h2>

                    <a href="mailto:hello@yash.dev" className="group inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-bold text-xl hover:bg-[#cced00] hover:text-black transition-all duration-300 hover:scale-105 hover:pr-12">
                        Get in touch <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                </div>

                {/* 2. Bottom Grid Info */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-black/10 pt-12">

                    {/* Column 1: Navigation */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-black/40 uppercase text-xs tracking-wider mb-2 font-mono">Navigation</h4>
                        <a href="#" className="hover:text-[#cced00] transition-colors text-lg font-light">Home</a>
                        <a href="#" className="hover:text-[#cced00] transition-colors text-lg font-light">About</a>
                        <a href="#" className="hover:text-[#cced00] transition-colors text-lg font-light">Work</a>
                        <a href="#" className="hover:text-[#cced00] transition-colors text-lg font-light">Contact</a>
                    </div>

                    {/* Column 2: Socials */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-black/40 uppercase text-xs tracking-wider mb-2 font-mono">Socials</h4>
                        <a href="#" className="hover:text-[#cced00] transition-colors text-lg font-light">LinkedIn</a>
                        <a href="#" className="hover:text-[#cced00] transition-colors text-lg font-light">Twitter</a>
                        <a href="#" className="hover:text-[#cced00] transition-colors text-lg font-light">Instagram</a>
                        <a href="#" className="hover:text-[#cced00] transition-colors text-lg font-light">Github</a>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-black/40 uppercase text-xs tracking-wider mb-2 font-mono">Contact</h4>
                        <p className="text-black/80 text-lg font-light">Mumbai, India</p>
                        <a href="mailto:hello@yash.dev" className="hover:text-[#cced00] transition-colors text-lg font-light underline decoration-black/20 underline-offset-4 hover:decoration-[#cced00]">hello@yash.dev</a>
                    </div>

                    {/* Column 4: Local Time & Copyright */}
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h4 className="text-black/40 uppercase text-xs tracking-wider mb-2 font-mono">Local Time</h4>
                            <TimeDisplay />
                        </div>
                        <div className="mt-12 md:mt-0 pt-8 md:pt-0">
                            <span className="text-[10rem] leading-none font-black text-black/[0.03] absolute bottom-[-40px] right-[-20px] pointer-events-none select-none hidden md:block">
                                YASH
                            </span>
                            <div className="text-black/20 text-xs font-mono uppercase tracking-widest relative z-10">
                                © 2025 YASH
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
