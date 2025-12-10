'use client';

import { useState, useEffect } from 'react';
import ShinyButton from '@/components/bits/ShinyButton';
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
        <footer className="relative w-full bg-[#e7e7e7] text-black pt-32 pb-12 px-6 md:px-12 overflow-hidden z-20">

            <div className="w-full max-w-[1240px] mx-auto border-t border-black/10 pt-20">

                {/* 1. Big CTA Section */}
                <div className="mb-24 flex flex-col items-start">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-3 h-3 rounded-full bg-lime-400 animate-pulse" />
                        <span className="text-black/60 uppercase tracking-widest text-sm">Open to new opportunities</span>
                    </div>

                    <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.9] mb-12">
                        Let's work <br /> <span className="text-black/30">together.</span>
                    </h2>

                    <a href="mailto:hello@yash.com" className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-lime-400 hover:text-black transition-colors duration-300">
                        hello@yash.dev <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>

                {/* 2. Bottom Grid Info */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-black/10 pt-12">

                    {/* Column 1: Navigation */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-black/40 uppercase text-xs tracking-wider mb-2">Navigation</h4>
                        <a href="#" className="hover:text-lime-400 transition-colors">Home</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">About</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Work</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Contact</a>
                    </div>

                    {/* Column 2: Socials */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-black/40 uppercase text-xs tracking-wider mb-2">Socials</h4>
                        <a href="#" className="hover:text-lime-400 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Github</a>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-black/40 uppercase text-xs tracking-wider mb-2">Contact</h4>
                        <p className="text-black/80">Mumbai, India</p>
                        <a href="mailto:hello@yash.dev" className="hover:text-lime-400 transition-colors">hello@yash.dev</a>
                    </div>

                    {/* Column 4: Local Time */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h4 className="text-black/40 uppercase text-xs tracking-wider mb-2">Local Time</h4>
                            <TimeDisplay />
                        </div>
                        <div className="mt-8 md:mt-0 text-black/20 text-xs">
                            © 2025 YASH
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
