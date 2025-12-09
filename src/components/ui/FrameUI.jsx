'use client';

import { Github, Linkedin, MessageCircle } from "lucide-react";
import Magnetic from "@/components/bits/Magnetic";

export default function FrameUI() {
    return (
        <div className="fixed inset-0 z-40 pointer-events-none text-black md:block hidden">
            {/* Left Sidebar - Line & Socials */}
            <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10 pointer-events-auto">
                {/* Vertical Line with Dots */}
                <div className="relative flex flex-col items-center">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    <div className="w-[1px] h-40 bg-black/20 my-2" />
                    <div className="w-1 h-1 bg-black rounded-full" />
                </div>

                {/* Social Icons Stack */}
                <div className="flex flex-col gap-6 mt-4">
                    <Magnetic>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-40 transition-opacity">
                            <Linkedin size={20} strokeWidth={1.5} />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="mailto:hello@yash.dev" className="hover:opacity-100 opacity-40 transition-opacity">
                            <MessageCircle size={20} strokeWidth={1.5} />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-40 transition-opacity">
                            <Github size={20} strokeWidth={1.5} />
                        </a>
                    </Magnetic>
                </div>
            </div>

            {/* Right Sidebar - Vertical Text */}
            <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 pointer-events-auto">
                <div className="rotate-90 origin-right translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase opacity-40">
                        Yash • Creative Developer
                    </span>
                </div>
            </div>
        </div>
    );
}
