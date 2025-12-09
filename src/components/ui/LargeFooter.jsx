'use client';

import MaskedText from "@/components/bits/MaskedText";
import ShinyButton from "@/components/bits/ShinyButton";
import Magnetic from "@/components/bits/Magnetic";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12 relative z-10">
                            <div className="flex gap-4 mb-8 md:mb-0">
                                <Magnetic>
                                    <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-black transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                    </button>
                                </Magnetic>
                                <Magnetic>
                                    <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-black transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                    </button>
                                </Magnetic>
                            </div>

                            <div className="text-white/20 text-sm">
                                <p>© 2025 YASH. </p>
                                <p>Designed & Developed with Passion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
