'use client';

import { motion } from 'framer-motion';

export default function BlurText({
    text = '',
    delay = 0,
    className = '',
    animateBy = 'words', // 'words' or 'letters'
    direction = 'top', // 'top', 'bottom'
}) {
    const vars = {
        hidden: { filter: 'blur(10px)', opacity: 0, y: direction === 'top' ? -20 : 20 },
        visible: {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }
        },
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay },
        },
    };

    const elements = animateBy === 'words' ? text.split(' ') : text.split('');

    return (
        <motion.p
            className={`flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {elements.map((el, i) => (
                <motion.span
                    key={i}
                    variants={vars}
                    className="inline-block mr-[0.25em] last:mr-0"
                >
                    {el}
                </motion.span>
            ))}
        </motion.p>
    );
}
