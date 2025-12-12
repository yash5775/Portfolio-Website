'use client';

export default function RollingText({ children, className = "" }) {
    return (
        <span className={`block relative overflow-hidden ${className}`}>
            <span className="block transition-transform duration-300 ease-[0.76, 0, 0.24, 1] group-hover:-translate-y-full">
                {children}
            </span>
            <span className="block absolute top-0 left-0 transition-transform duration-300 ease-[0.76, 0, 0.24, 1] translate-y-full group-hover:translate-y-0">
                {children}
            </span>
        </span>
    );
}
