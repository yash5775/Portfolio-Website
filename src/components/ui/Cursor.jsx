'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorSize = isHovered ? 60 : 20;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 15, stiffness: 500, mass: 0.1 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    const manageTouchMove = (e) => {
        const { clientX, clientY } = e.touches[0];
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    const manageMouseOver = (e) => {
        // Tag interactive elements
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("touchmove", manageTouchMove); // Add touch support
        window.addEventListener("mouseover", manageMouseOver);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.removeEventListener("touchmove", manageTouchMove);
            window.removeEventListener("mouseover", manageMouseOver);
        }
    }, [isHovered]);

    return (
        <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                width: cursorSize,
                height: cursorSize
            }}
            animate={{
                width: cursorSize,
                height: cursorSize
            }}
            className="fixed rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]" // Removed hidden md:block
        />
    )
}
