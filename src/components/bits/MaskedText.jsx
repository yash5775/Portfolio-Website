'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function MaskedText({ children, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-10%" });

    const animation = {
        initial: { y: "100%" },
        enter: (i) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.02 * i } })
    }

    // Handle both string children and array of strings
    const getTextContent = (content) => {
        if (typeof content === 'string') return content;
        if (Array.isArray(content)) return content.join(' ');
        return '';
    };

    const text = getTextContent(children);
    const words = text.split(" ");

    return (
        <div ref={ref} className={`${className} flex flex-wrap justify-center overflow-hidden`}>
            {words.map((word, index) => (
                <div key={index} className="overflow-hidden relative inline-flex mr-[0.2em] pb-[0.1em] -mb-[0.1em]">
                    <motion.span
                        custom={index}
                        variants={animation}
                        initial="initial"
                        animate={isInView ? "enter" : ""}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </div>
            ))}
        </div>
    )
}
