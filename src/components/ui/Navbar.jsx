'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import Magnetic from '@/components/bits/Magnetic';

// Rolling Text Component mimicking the user's "Navtext" structure
const RollingLink = ({ title, onClick }) => (
    <button
        onClick={onClick}
        className="relative overflow-hidden cursor-pointer group text-lg font-normal text-black"
    >
        <span className="block transition-transform duration-300 ease-[0.76, 0, 0.24, 1] group-hover:-translate-y-full">
            {title}
        </span>
        <span className="block absolute top-0 left-0 transition-transform duration-300 ease-[0.76, 0, 0.24, 1] translate-y-full group-hover:translate-y-0 text-black">
            {title}
        </span>
    </button>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 w-full z-50 p-4 md:p-8 pt-6 md:pt-12 flex justify-between items-center bg-transparent pointer-events-none"
            >
                {/* Logo - Assuming Text if Image not available, wrapped to match user structure */}
                <div className="pointer-events-auto">
                    <a href="/" className="text-black text-xl font-medium tracking-tight font-sans relative z-50">
                        YASH.
                    </a>
                </div>

                {/* Desktop Menu - User's Structure */}
                <div className="hidden md:flex items-center gap-5 justify-end pointer-events-auto">
                    <RollingLink title="Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                    <RollingLink title="About" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
                    <RollingLink title="Work" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} />
                    <RollingLink title="Contact" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
                </div>

                {/* Mobile Menu Trigger - "Menu" Text */}
                <div className="md:hidden block pointer-events-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black z-50 relative p-1"
                        aria-label="Toggle Menu"
                    >
                        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-none stroke-current stroke-[2] text-black">
                            <path
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                className="transition-all duration-300"
                            />
                            <path d="M7 16 27 16" className="transition-all duration-300" />
                        </svg>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[60] bg-[#e7e7e7] flex flex-col justify-center items-center"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-black font-medium text-lg px-2 py-1"
                        >
                            Close
                        </button>

                        <ul className="flex flex-col gap-8 text-center">
                            {['Home', 'About', 'Work', 'Contact'].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                >
                                    <span
                                        className="text-5xl font-bold text-black hover:text-black/50 transition-colors cursor-pointer tracking-tight"
                                        onClick={() => {
                                            setIsOpen(false);
                                            if (item === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' });
                                            else document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                                        }}
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
