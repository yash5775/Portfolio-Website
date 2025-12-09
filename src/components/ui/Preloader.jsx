'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });

        if (shouldReduceMotion) {
            setIsLoading(false);
            return;
        }

        // Counter Logic
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(interval);
                return 100;
            });
        }, 20); // Adjust speed here

        return () => clearInterval(interval);
    }, [shouldReduceMotion]);

    useEffect(() => {
        if (counter === 100) {
            // Curtain delay after 100%
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }
    }, [counter]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, delay: 1 } }} // Delay exit for curve
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0C] cursor-wait"
                >
                    {/* Counter */}
                    <motion.div
                        className="text-white text-9xl md:text-[12rem] font-bold tracking-tighter mix-blend-difference z-50 absolute bottom-12 right-12 md:bottom-24 md:right-24"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
                    >
                        {counter}%
                    </motion.div>

                    {/* SVG Curtain */}
                    {dimension.width > 0 && (
                        <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#0A0A0C] z-40">
                            <motion.path
                                variants={curve}
                                initial="initial"
                                exit="exit"
                            ></motion.path>
                        </svg>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
