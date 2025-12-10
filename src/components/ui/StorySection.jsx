'use client';

import CurvedLoop from '@/components/bits/CurvedLoop';

export default function StorySection() {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#111111] flex flex-col">
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay z-10">
                <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
                    <filter id='noise'>
                        <feTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' />
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noise)' />
                </svg>
            </div>

            <div className="flex-none z-20 pt-2 pb-12 overflow-visible">
                <CurvedLoop
                    marqueeText="DEVELOPER ✦ CREATIVE TECHNOLOGIST ✦"
                    speed={3}
                    curveAmount={300}
                    direction="right"
                    interactive={true}
                    className="fill-white text-[5rem] font-bold"
                />
            </div>

            {/* Image Section - Matches reference placement */}
            <div className="flex-1 w-full relative z-20 overflow-hidden px-8 md:px-20">
                <div className="w-full h-[60vh] md:h-[80vh] bg-[#1a1a1a] grayscale relative">
                    {/* Placeholder for the large image shown in reference */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/5 text-[10rem] font-bold uppercase select-none overflow-hidden">
                        PROFILE
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-50"></div>
                </div>
            </div>
        </div>
    );
}
