'use client';

import { Github, Linkedin, MessageCircle } from "lucide-react";
import Magnetic from "@/components/bits/Magnetic";

export default function FrameUI() {
    return (
        <div className="absolute inset-0 z-40 pointer-events-none text-white md:block hidden h-screen">
            <div className="z-50 flex-col flex lg:h-[80vh] h-[85vh] px-5 lg:px-9 pt-[8rem] lg:pt-[10rem] lg:-mt-3 xl:mt-10 py-5 lg:py-10 items-center left-0 top-0 absolute justify-end lg:justify-between pointer-events-auto">
                <div className="item lg:block hidden lg:mb-14 h-[50vh] w-[1px] bg-gray-300 relative">
                    <div className="absolute bottom-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-white rounded-[50%] w-[.3rem]"></div>
                    <div className="absolute top-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-white rounded-[50%] w-[.3rem]"></div>
                </div>

                <div className="flex item z-50 w-full flex-col gap-6 lg:gap-5 xl:gap-8 items-center">
                    <Magnetic>
                        <a href="https://www.linkedin.com/in/yashkumar-chaniyara-80252b253/" target="_blank" rel="noopener noreferrer" className="duration-100 hover:opacity-70 text-white/80 lg:text-2xl text-xl transition-colors">
                            <Linkedin size={22} strokeWidth={1.5} />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="duration-100 hover:opacity-70 text-white/80 lg:text-2xl text-xl transition-colors">
                            <MessageCircle size={22} strokeWidth={1.5} />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://github.com/yash5775" target="_blank" rel="noopener noreferrer" className="duration-100 hover:opacity-70 text-white/80 lg:text-2xl text-xl transition-colors">
                            <Github size={22} strokeWidth={1.5} />
                        </a>
                    </Magnetic>
                </div>
            </div>

            {/* Right Sidebar - Vertical Text (Kept as is, assuming user only wanted left sidebar changed) */}
            <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 pointer-events-auto flex items-center justify-center">
                <div className="[writing-mode:vertical-rl] rotate-180 text-sm font-bold tracking-[0.2em] uppercase text-white whitespace-nowrap">
                    YASHKUMAR N. CHANIYARA
                </div>
            </div>
        </div>
    );
}
