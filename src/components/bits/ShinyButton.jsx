'use client';

import { motion } from 'framer-motion';

import Magnetic from '@/components/bits/Magnetic';

export default function ShinyButton({ children, className = "", onClick }) {
    return (
        <Magnetic>
            <motion.button
                onClick={onClick}
                initial={{ "--x": "100%", scale: 1 }}
                animate={{ "--x": "-100%" }}
                whileTap={{ scale: 0.97 }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 1,
                    type: 'spring',
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                        type: 'spring',
                        stiffness: 10,
                        damping: 5,
                        mass: 0.1,
                    },
                }}
                className={`
        relative overflow-hidden rounded-xl px-[26px] py-[14px]
        bg-accent-gradient
        text-white font-medium tracking-wide
        shadow-[0_0_20px_rgba(143,90,255,0.3)]
        hover:shadow-[0_0_30px_rgba(143,90,255,0.5)]
        hover:scale-105 active:scale-95
        transition-all duration-300
        z-10
        ${className}
      `}
                style={{
                    backgroundSize: '200% 100%',
                }}
            >
                <span className="block absolute inset-0 rounded-2xl p-px linear-overlay" />
                <span
                    className="absolute inset-0 block w-full h-full pointer-events-none"
                    style={{
                        background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transform: 'translateX(-100%)',
                        animation: 'shimmer 2s infinite',
                    }}
                />
                <span className="relative z-10">{children}</span>
                <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
            </motion.button>
        </Magnetic>
    );
}
