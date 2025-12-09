'use client';

import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function TiltedCard({ children, className = '' }) {
    const ref = useRef(null);

    // Mouse Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

    // Inner Parallax Scroll Values
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    // The image inside will move slightly as we scroll past (0% -> 15%)
    const innerY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: 'preserve-3d',
            }}
            className={`relative active:scale-95 transition-transform duration-200 ease-out overflow-hidden ${className}`}
        >
            <motion.div
                style={{
                    transform: 'translateZ(50px)',
                    transformStyle: 'preserve-3d',
                    y: innerY,
                    scale: 1.2 // slightly larger to avoid gaps during parallax
                }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
