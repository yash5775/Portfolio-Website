'use client';

export default function HeroVideo() {
    return (
        <div className="absolute inset-0 w-full h-screen z-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-100 invert"
            >
                <source src="/assets/glassy-loop.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Optional Overlay to ensure text contrast if video is too bright */}
            {/* <div className="absolute inset-0 bg-white/20" /> */}
        </div>
    );
}
