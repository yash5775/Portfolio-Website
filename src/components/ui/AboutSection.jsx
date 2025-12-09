'use client';

import SectionReveal from './SectionReveal';

export default function AboutSection() {
    return (
        <SectionReveal className="w-full max-w-[1240px] mx-auto px-6 md:px-12 py-40 md:py-64">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-24">

                {/* Left Column - Heading */}
                <div className="md:col-span-5">
                    <span className="block text-accent-violet tracking-widest text-xs font-semibold uppercase mb-6">
                        About Me
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                        Obsessed with <br />
                        <span className="text-white/40">visual precision</span> <br />
                        and performance.
                    </h2>
                </div>

                {/* Right Column - Text Content */}
                <div className="md:col-span-7 flex flex-col gap-10 pt-4 md:pt-16">
                    <p className="text-lg md:text-xl text-[var(--color-text-body)] font-normal leading-[1.6]">
                        I'm a multidisciplinary designer and front-end engineer based in San Francisco. I build digital products that feel tangible, smooth, and meticulously crafted.
                    </p>

                    <div className="grid grid-cols-2 text-sm text-white/50 gap-y-4">
                        <div>
                            <span className="block text-white mb-2 font-medium">Core Stack</span>
                            <ul className="space-y-1">
                                <li>Next.js / React</li>
                                <li>WebGL / Three.js</li>
                                <li>Tailwind CSS</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                        <div>
                            <span className="block text-white mb-2 font-medium">Design</span>
                            <ul className="space-y-1">
                                <li>Figma</li>
                                <li>Blender 3D</li>
                                <li>Motion Design</li>
                                <li>Prototyping</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </SectionReveal>
    );
}
