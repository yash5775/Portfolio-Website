'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RollingText from './RollingText';

// Rolling Text Component wrapper for Links
const RollingLink = ({ title, href, onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className="relative overflow-hidden cursor-pointer group text-lg font-normal text-white"
    >
        <RollingText>
            {title}
        </RollingText>
    </Link>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > 250 && latest > previous) {
            setIsScrolled(true);
        } else if (latest < 250) {
            setIsScrolled(false);
        }
    });

    const navItems = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/#about' }, // Assuming About section has id="about" on Home page
        { title: 'Work', href: '/work' },
        { title: 'Contact', href: '/#contact' } // Assuming Contact section has id="contact" on Home page
    ];

    const handleMobileClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* 1. Absolute Header: Sticks to Hero, scrolls away */}
            <header className="absolute top-0 left-0 w-full z-[60] p-4 md:p-8 pt-6 md:pt-12 flex justify-between items-center bg-transparent pointer-events-none">
                {/* Logo */}
                <div className="pointer-events-auto mix-blend-difference">
                    <Link href="/" className="text-white text-xl font-medium tracking-tight font-sans relative z-50">
                        YASH.
                    </Link>
                </div>

                {/* Desktop Menu Links - Visible only at top */}
                <div className="hidden md:flex items-center gap-5 justify-end pointer-events-auto mix-blend-difference">
                    {navItems.map((item) => (
                        <RollingLink key={item.title} title={item.title} href={item.href} />
                    ))}
                </div>
            </header>

            {/* 2. Fixed Menu Button: Appears on scroll */}
            <motion.div
                className="fixed top-0 right-0 p-4 md:p-8 pt-6 md:pt-12 z-[70] pointer-events-auto"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isScrolled || isOpen ? 1 : 0,
                    opacity: isScrolled || isOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative w-[60px] h-[60px] rounded-full bg-[#cced00] flex items-center justify-center text-black ${isOpen ? 'active' : ''}`}
                    aria-label="Toggle Menu"
                >
                    <svg viewBox="0 0 32 32" className="w-8 h-8 fill-none stroke-current stroke-[2]">
                        <path
                            className="menu_lineTopBottom transition-[stroke-dasharray,stroke-dashoffset] duration-400"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        />
                        <path
                            className="menu_lineMiddle transition-opacity duration-400"
                            d="M7 16 27 16"
                        />
                    </svg>
                    <style jsx global>{`
                        .menu_lineTopBottom {
                            stroke-dasharray: 12 55;
                        }
                        .menu_lineMiddle {
                            transform-origin: center;
                        }
                        .active .menu_lineTopBottom {
                            stroke-dasharray: 20 300;
                            stroke-dashoffset: -32.42;
                        }
                        .active .menu_lineMiddle {
                            opacity: 0;
                        }
                    `}</style>
                </button>
            </motion.div>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[60] bg-[#111111] flex flex-col justify-center items-center"
                    >
                        <ul className="flex flex-col gap-8 text-center">
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-5xl font-bold text-white hover:text-white/50 transition-colors cursor-pointer tracking-tight"
                                        onClick={handleMobileClick}
                                    >
                                        {item.title}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

