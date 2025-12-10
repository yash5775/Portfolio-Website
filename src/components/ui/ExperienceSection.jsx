'use client';

const experiences = [
    {
        company: "Techivation",
        role: "Full Stack Developer",
        type: "(Part-time)",
        date: "May 2023 - Present",
        description: "Building and maintaining Techivation’s full web and SaaS ecosystem powering audio plugin licensing and management."
    },
    {
        company: "Freelance",
        role: "Web Developer",
        type: "(Full-time)",
        date: "Jan 2021 - Present",
        description: "Delivering high-quality web solutions for diverse clients, focusing on React and Next.js applications."
    }
];

export default function ExperienceSection() {
    return (
        <div className="relative w-full py-20 lg:py-40 bg-[#111111] overflow-hidden">

            {/* Background decorative SVG line hint */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 1000 2000" preserveAspectRatio="none">
                    <path d="M500 0 Q 800 500 500 1000 T 500 2000" stroke="#d4f534" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Explore my journey <br />
                        <span className="text-white/50">and experience.</span>
                    </h2>
                </div>

                <div className="relative flex flex-col items-center">

                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

                    {experiences.map((exp, index) => (
                        <div key={index} className="w-full flex flex-col md:flex-row justify-between items-center mb-32 md:mb-48 relative">

                            {/* Dot on Line */}
                            <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-black border border-white z-20 -translate-x-1/2 hidden md:block" />

                            {/* Content */}
                            <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'text-left md:text-right md:pr-20' : 'md:order-2 text-left md:pl-20'}`}>
                                <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">{exp.company}</h3>
                                <h4 className="text-xl md:text-3xl font-light text-white/60 mb-4">{exp.role} <span className="text-lime-400 text-base ml-2">{exp.type}</span></h4>
                                <p className="text-lg text-white/50 leading-relaxed mb-4">{exp.description}</p>
                                <span className="inline-block px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-wider text-white/40">{exp.date}</span>
                            </div>

                            {/* Empty spacer for grid balance */}
                            <div className="hidden md:block w-[45%]" />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
