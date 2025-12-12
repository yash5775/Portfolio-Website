'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// ... imports
export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false); // Track active state for click feedback if needed, or just keep simple
    const cursorSize = isHovered ? 60 : 20;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 30, stiffness: 900, mass: 0.1 }
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
        const target = e.target;
        const interactiveElement = target.closest('a') || target.closest('button');

        if (target.tagName === 'A' || target.tagName === 'BUTTON' || interactiveElement) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("touchmove", manageTouchMove);
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
            className="fixed rounded-full backdrop-invert backdrop-grayscale pointer-events-none z-[9999]"
        />
    )
}
