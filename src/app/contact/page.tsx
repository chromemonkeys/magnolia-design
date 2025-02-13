'use client';

import React, { useState, useEffect } from 'react';

export const metadata = {
    title: 'Magnolia Animation Test',
    description: 'Sequential frame animation of a magnolia flower',
};

export default function AnimationPage() {
    const [currentFrame, setCurrentFrame] = useState<number>(1);
    const totalFrames: number = 14;
    const frameDelay: number = 1000; // 1 second per frame

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFrame((prev) => (prev === totalFrames ? 1 : prev + 1));
        }, frameDelay);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-black relative">
            {/* Page shadow effect */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/5 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/5 to-transparent" />
            </div>

            <div
                className="w-full h-screen flex items-center justify-center"
                role="main"
                aria-label="Magnolia flower animation sequence"
            >
                <div className="relative w-full h-full max-w-screen-lg mx-auto">
                    {Array.from({ length: totalFrames }, (_, i) => i + 1).map((frameNum) => (
                        <div
                            key={frameNum}
                            className="absolute inset-0 w-full h-full transition-opacity duration-500"
                            style={{
                                opacity: frameNum === currentFrame ? 1 : 0,
                            }}
                        >
                            <img
                                src={`/images/magnolia-frames/frame_${frameNum}.jpg`}
                                alt={`Magnolia animation frame ${frameNum}`}
                                className="w-full h-full object-contain"
                                role="img"
                                aria-hidden={frameNum !== currentFrame}
                                loading={frameNum === 1 ? "eager" : "lazy"}
                            />
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-4"
                    role="region"
                    aria-label="Animation controls"
                >
                    <button
                        onClick={() => setCurrentFrame((prev) => (prev === 1 ? totalFrames : prev - 1))}
                        className="px-6 py-2 bg-white/5 rounded-full border-4 border-[#A9A9A9] hover:scale-105 transition-transform duration-300"
                        aria-label="Previous frame"
                        style={{
                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                        }}
                    >
                        <span className="font-optima text-white tracking-wider text-sm uppercase">
                            Prev
                        </span>
                    </button>
                    <button
                        onClick={() => setCurrentFrame((prev) => (prev === totalFrames ? 1 : prev + 1))}
                        className="px-6 py-2 bg-white/5 rounded-full border-4 border-[#A9A9A9] hover:scale-105 transition-transform duration-300"
                        aria-label="Next frame"
                        style={{
                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                        }}
                    >
                        <span className="font-optima text-white tracking-wider text-sm uppercase">
                            Next
                        </span>
                    </button>
                </div>

                {/* Frame counter */}
                <div
                    className="fixed top-4 right-4 text-white font-optima tracking-wider"
                    role="status"
                    aria-live="polite"
                >
                    Frame {currentFrame} of {totalFrames}
                </div>
            </div>
        </main>
    );
}