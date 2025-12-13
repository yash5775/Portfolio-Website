'use client';

import CurvedLoop from '@/components/bits/CurvedLoop';
import Image from 'next/image';

export default function StorySection() {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[#151515] flex flex-col">
            {/* Noise Texture Removed for consistent black color */}

            <div className="flex-none z-20 pt-2 pb-12 overflow-hidden w-full">
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
                <div className="w-full h-[60vh] md:h-[80vh] relative grayscale hover:grayscale-0 transition-all duration-700">
                    <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
                        alt="Profile"
                        fill
                        className="object-cover rounded-md"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-50"></div>
                </div>
            </div>
        </div>
    );
}
