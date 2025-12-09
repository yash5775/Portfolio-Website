'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function SectionReveal({ children, className = '', delay = 0 }) {
    const shouldReduceMotion = useReducedMotion();

    const initial = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 };
    const transition = shouldReduceMotion ? { duration: 0 } : {
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
    };

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    );
}
