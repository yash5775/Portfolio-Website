'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import RollingText from './RollingText';

const TimeDisplay = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Format: 5:29 PM
            const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            setTime(timeString);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000); // Update every second to be accurate
        return () => clearInterval(interval);
    }, []);

    // Avoiding hydration mismatch by rendering a placeholder or null on server if needed, 
    // but useEffect only runs on client, so initial render might differ. 
    // Ideally we conditionally render or just accept the jump.
    if (!time) return <span className="opacity-0">00:00 PM</span>;

    return (
        <div className="flex flex-col items-start">
            <p className="text-[#151515] text-lg font-light tracking-tight">{time} GMT+5:30</p>
        </div>
    );
};

export default function LargeFooter() {
    return (
        <footer className="relative w-full bg-white text-black pt-20 pb-8 px-6 md:px-12 overflow-hidden z-20 border-t border-black/5">

            {/* Soft decorative gradient at top right */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="w-full max-w-[1400px] mx-auto relative z-10">

                {/* 1. CTA Section - Kept consistent but refined */}
                <div className="mb-20 flex flex-col items-start">
                    <div className="relative inline-flex items-center gap-2 mb-8 group cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cced00] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cced00]"></span>
                        </span>
                        <span className="text-black/50 text-xs font-mono uppercase tracking-widest group-hover:text-black transition-colors">Available for work</span>
                    </div>

                    <h2 className="text-[12vw] md:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-12 text-[#111]">
                        LET'S WORK <br />
                        <span className="text-[#999] opacity-40">TOGETHER.</span>
                    </h2>

                    <a href="mailto:yash.chaniyara@icloud.com" className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#111] text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <span className="relative z-10 font-bold text-xl mr-2">Get in touch</span>
                        <div className="relative z-10 overflow-hidden w-6 h-6 transition-transform group-hover:rotate-45 duration-300">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </a>
                </div>

                {/* 2. Divider Line */}
                <div className="w-full h-px bg-black/10 mb-16" />

                {/* 3. Bottom Layout Grid */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 md:gap-y-0 w-full relative">

                    {/* Navigation - Spans 3 cols */}
                    <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
                        <h4 className="text-[#999] text-xs uppercase tracking-widest font-mono">Navigation</h4>
                        <div className="flex flex-col gap-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '/about' },
                                { name: 'Work', href: '/work' },
                                { name: 'Contact', href: '/#contact' }
                            ].map((link) => (
                                <a key={link.name} href={link.href} className="group w-fit">
                                    <span className="text-lg font-light text-[#111] relative inline-block">
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Socials - Spans 3 cols */}
                    <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
                        <h4 className="text-[#999] text-xs uppercase tracking-widest font-mono">Socials</h4>
                        <div className="flex flex-col gap-4">
                            {[
                                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yashkumar-chaniyara-80252b253/' },
                                { name: 'WhatsApp', href: 'https://wa.me/918200647176' },
                                { name: 'Instagram', href: '#' },
                                { name: 'Github', href: 'https://github.com/yash5775' }
                            ].map((link) => (
                                <a key={link.name} href={link.href} target={link.href.startsWith('http') ? "_blank" : undefined} rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined} className="group w-fit">
                                    <span className="text-lg font-light text-[#111] relative inline-block">
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact - Spans 3 cols */}
                    <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
                        <h4 className="text-[#999] text-xs uppercase tracking-widest font-mono">Contact</h4>
                        <div className="flex flex-col gap-4">
                            <p className="text-lg font-light text-[#111]">Mumbai, India</p>
                            <a href="mailto:yash.chaniyara@icloud.com" className="w-fit text-lg font-light text-[#111] underline decoration-gray-300 underline-offset-4 hover:decoration-black transition-all">
                                yash.chaniyara@icloud.com
                            </a>
                            <a href="tel:+918200647176" className="w-fit text-lg font-light text-[#111] hover:text-black/70 transition-colors">
                                +91 82006 47176
                            </a>
                        </div>
                    </div>

                    {/* Local Time - Spans 3 cols */}
                    <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
                        <h4 className="text-[#999] text-xs uppercase tracking-widest font-mono">Local Time</h4>
                        <TimeDisplay />
                    </div>

                </div>

                {/* 4. Bottom Elements: Floating N & Watermark */}
                <div className="relative w-full h-auto mt-12 flex items-end justify-between">


                    {/* Watermark Section */}
                    {/* Watermark Section */}
                    <div className="absolute right-0 bottom-[-20px] md:bottom-[-40px] flex items-end z-0 pointer-events-none select-none overflow-hidden">
                        <span className="text-[12px] text-black/30 font-mono tracking-widest mr-4 mb-6 md:mb-12 relative z-10">© 2025 YASH</span>
                        <div className="relative">
                            {/* Main Outline Text */}
                            <h1 className="text-[150px] md:text-[220px] font-black tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(0,0,0,0.06)] leading-[0.8]">
                                YASH
                            </h1>
                            {/* Subtle Glow/Blur Behind */}
                            <h1 className="absolute top-0 left-0 text-[150px] md:text-[220px] font-black tracking-tighter text-black/[0.02] blur-sm leading-[0.8] scale-[1.02] origin-bottom-right">
                                YASH
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
