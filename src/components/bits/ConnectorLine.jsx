'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function ConnectorLine() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"] // Starts drawing when top hits 80% viewport, finishes when bottom hits 50%
    });

    // Speed up: Line completes in the first 30% of the scroll range
    const fastProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const pathLength = useSpring(fastProgress, { stiffness: 1000, damping: 30 });

    // Circle appears only at the very end
    const circleScale = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 overflow-hidden desktop-only-connector">
            <svg
                className="w-full h-[400vh] absolute top-[20vh]"
                viewBox="0 0 100 1200"
                preserveAspectRatio="none"
            >
                {/* 
                    Path Logic:
                    Start: Right (x=100)
                    Curve: Sharp ZigZag (Extreme Control Points)
                    End: Left (x=0)
                */}
                <motion.path
                    d="M 100 50 C 50 250, 120 450, 40 650 C -40 850, 80 950, 0 1100"
                    stroke="#cced00"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    style={{ pathLength, opacity: 1 }}
                />
            </svg>

            {/* 
                Separate Circle Container matching SVG dimensions/position
            */}
            <div className="absolute top-[20vh] left-0 w-full h-[400vh] pointer-events-none">
                <motion.div
                    className="absolute left-0 w-3 h-3 bg-[#cced00] rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{ top: '91.66%', scale: circleScale }} // 1100/1200
                />
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .desktop-only-connector {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}
