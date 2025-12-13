'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simple timeout to mimic loading or wait for resources
        // ideally you'd verify window load state, but fixed timer is "simple" and safe
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5s simplified load

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#151515] overflow-hidden"
                >
                    {/* Simple pulsing architectural dot/spinner */}
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            className="w-12 h-12 border-2 border-white/10 border-t-[#cced00] rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-white/40 font-mono text-xs tracking-widest uppercase"
                        >
                            Loading
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
