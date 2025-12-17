'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// ... imports
export default function Cursor() {
    const baseSize = 20;
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        // Always center based on the base size, scale happens from center transform
        mouse.x.set(clientX - baseSize / 2);
        mouse.y.set(clientY - baseSize / 2);
    }

    const manageMouseOver = (e) => {
        const target = e.target;
        // Check if the element or its parent is interactive
        const interactiveElement = target.closest('a') || target.closest('button') || target.closest('[data-hover-glow]');

        if (target.tagName === 'A' || target.tagName === 'BUTTON' || interactiveElement) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    }

    useEffect(() => {
        if (isMobile) return;
        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("mouseover", manageMouseOver);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.removeEventListener("mouseover", manageMouseOver);
        }
    }, [isMobile]); // Removed isHovered dependency as it's no longer needed for position logic

    if (isMobile) return null;

    return (
        <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
            }}
            animate={{
                scale: isHovered ? 3 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed w-[20px] h-[20px] rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
        />
    )
}
