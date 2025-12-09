'use client';

import { Github, Linkedin, MessageCircle } from "lucide-react";
import Magnetic from "@/components/bits/Magnetic";

export default function FrameUI() {
    return (
        <div className="fixed inset-0 z-40 pointer-events-none mix-blend-difference text-white md:block hidden">
            {/* Left Sidebar - Line & Socials */}
            <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 pointer-events-auto">
                <div className="w-[1px] h-32 bg-current opacity-40"></div>

                <div className="flex flex-col gap-6">
                    <Magnetic>
                        <a href="#" className="hover:opacity-100 opacity-60 transition-opacity">
                            <Linkedin size={20} />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#" className="hover:opacity-100 opacity-60 transition-opacity">
                            <MessageCircle size={20} />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#" className="hover:opacity-100 opacity-60 transition-opacity">
                            <Github size={20} />
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
