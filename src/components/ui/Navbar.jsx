'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Magnetic from '@/components/bits/Magnetic';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center"
            >
                {/* Logo */}
                <a href="/" className="text-black text-2xl font-bold tracking-[0.02em] font-sans relative z-50">
                    YASH.
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8 items-center">
                        {['About', 'Work', 'Contact'].map((item) => (
                            <li key={item}>
                                <button
                                    className="text-black text-sm font-medium uppercase tracking-wider hover:opacity-100 opacity-70 transition-opacity relative group py-1"
                                    onClick={() => console.log(`Navigate to ${item}`)}
                                >
                                    {item}
                                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className="hidden md:block px-6 py-2 rounded-full border border-black/10 text-black text-sm hover:bg-black hover:text-white transition-all duration-300 relative z-50">
                    Let's Talk
                </button>

                {/* Mobile Menu Toggle */}
                <Magnetic>
                    <button
                        className="md:hidden text-white relative z-50 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </Magnetic>
            </motion.header>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-[var(--color-background)] bg-opacity-95 backdrop-blur-xl flex flex-col justify-center items-center"
                    >
                        <ul className="flex flex-col gap-8 text-center">
                            {['About', 'Work', 'Contact'].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                >
                                    <span
                                        className="text-4xl font-bold text-white hover:text-accent-violet transition-colors cursor-pointer"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
