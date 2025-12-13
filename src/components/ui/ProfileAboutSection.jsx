'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const RevealedText = ({ text, className, specialWords = [], specialClass = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const words = text.split(" ");

    return (
        <p ref={ref} className={className}>
            {words.map((word, i) => {
                const isSpecial = specialWords.some(special => word.includes(special));
                return (
                    <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
                        <motion.span
                            className={`inline-block origin-bottom ${isSpecial ? specialClass : ""}`}
                            initial={{ y: "100%", rotateX: -15, opacity: 0 }}
                            animate={isInView ? { y: "0%", rotateX: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: i * 0.02 }}
                        >
                            {word}
                        </motion.span>
                    </span>
                );
            })}
        </p>
    );
};

const Counter = ({ value, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="border-t border-white/20 pt-6">
            <p className="text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 text-white/60">{label}</p>
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
                {value}
            </h3>
        </div>
    );
};

export default function ProfileAboutSection() {
    return (
        <div className="w-full flex flex-col items-center relative z-20 pb-20">

            {/* Profile Photo - Matches 'profile-photo' class */}


            {/* More About Me - Matches 'more-about-me' class */}
            <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 lg:mb-24">

                    {/* Left: Main Headline */}
                    <div>
                        <RevealedText
                            text="Turning ideas into clean, scalable web experiences through design and engineering."
                            className="text-3xl lg:text-4xl font-medium text-white leading-[1.1]"
                            specialWords={["ideas", "experiences", "design", "engineering"]}
                            specialClass="font-serif italic text-[#cced00]"
                        />
                    </div>

                    {/* Right: Subtext */}
                    <div className="flex items-center">
                        <RevealedText
                            text="I focus on understanding real requirements and delivering responsive, well-structured web solutions from development to deployment."
                            className="text-lg md:text-xl text-white/60 leading-relaxed font-light"
                            specialWords={["real", "requirements", "responsive", "solutions"]}
                            specialClass="font-serif italic text-white"
                        />
                    </div>
                </div>

                {/* Counters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
                    <Counter label="YEARS OF EXPERIENCE" value="2+" />
                    <Counter label="PROJECTS COMPLETED" value="8+" />
                </div>
            </div>
        </div>
    );
}
