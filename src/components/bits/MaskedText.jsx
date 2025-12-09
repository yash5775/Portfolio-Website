'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function MaskedText({ children, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const animation = {
        initial: { y: "100%" },
        enter: (i) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
    }

    // Simple word splitter (naive, assumes space separation)
    // For more robust solutions, consider 'split-type' library or similar
    const phrases = typeof children === 'string' ? [children] : children;

    return (
        <div ref={ref} className={`${className} overflow-hidden`}>
            {phrases.map((phrase, index) => (
                <div key={index} className="overflow-hidden">
                    <motion.p
                        custom={index}
                        variants={animation}
                        initial="initial"
                        animate={isInView ? "enter" : ""}
                    >
                        {phrase}
                    </motion.p>
                </div>
            ))}
        </div>
    )
}
