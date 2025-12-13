'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// ... imports
export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cursorSize = isHovered ? 60 : 20;

    useEffect(() => {
        const checkVisible = () => {
            setIsVisible(window.innerWidth >= 768);
        };
        checkVisible();
        window.addEventListener('resize', checkVisible);
        return () => window.removeEventListener('resize', checkVisible);
    }, []);



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

    if (!isVisible) return null;

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
