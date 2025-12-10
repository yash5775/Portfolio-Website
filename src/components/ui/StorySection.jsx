'use client';

import { motion } from 'framer-motion';

// Simple Icons
const FlowerIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C50 0 70 30 100 30C70 30 50 60 50 60C50 60 30 30 0 30C30 30 50 0 50 0Z" />
    </svg>
);

const StarIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z" />
    </svg>
);

const Marquee = () => {
    return (
        <div className="w-full overflow-hidden py-20 lg:py-28 relative select-none cursor-default">
            <motion.div
                className="flex whitespace-nowrap items-center"
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            >
                {[0, 1].map((i) => (
                    <div key={i} className="flex items-center gap-10 pr-10">
                        {/* Reference uses an Image for the flower, sticking to SVG for now but matching usage */}
                        <div className="flex items-center gap-10 text-[3rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none text-black">
                            <FlowerIcon className="w-16 h-16 lg:w-32 lg:h-32 text-black" />
                            <span>FULL-STACK DEVELOPER</span>
                            <span>UI & UX DESIGNER.</span>
                            <StarIcon className="w-16 h-16 lg:w-32 lg:h-32 text-black" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function StorySection() {
    return (
        <div className="w-full flex justify-center py-10 lg:py-20 relative z-20">
            {/* Matches 'first-story-section' style from snippet */}
            {/* background-image: url("data:image/svg+xml,...noise...") */}
            {/* width: 80% */}
            {/* border-radius: 34px */}
            <div
                className="relative w-[90%] lg:w-[80%] rounded-[34px] overflow-hidden bg-gradient-to-br from-white via-orange-100 to-orange-200"
                style={{
                    boxShadow: '0 0 40px rgba(0,0,0,0.05)'
                }}
            >
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay">
                    <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
                        <filter id='noise'>
                            <feTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' />
                        </filter>
                        <rect width='100%' height='100%' filter='url(#noise)' />
                    </svg>
                </div>

                <Marquee />
            </div>
        </div>
    );
}
