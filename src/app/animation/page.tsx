'use client';

import { useState, useEffect, useCallback } from 'react';

export default function AnimationPage() {
    const [currentFrame, setCurrentFrame] = useState<number>(1);
    const [nextFrame, setNextFrame] = useState<number>(1);
    const [isPlaying, setIsPlaying] = useState<boolean>(false); // Start as false until images are loaded
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
    const totalFrames: number = 13;
    const frameDelay: number = 50;
    const transitionDuration: number = 50;
    const scrollSensitivity: number = 3;

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            try {
                const imagePromises = Array.from({ length: totalFrames }, (_, i) => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = `/images/magnolia-frames/frame_${i + 1}.jpg`;
                        img.onload = resolve;
                        img.onerror = reject;
                    });
                });

                await Promise.all(imagePromises);
                setImagesLoaded(true);
                setIsPlaying(true); // Start playing once images are loaded
            } catch (error) {
                console.error('Error preloading images:', error);
                // Still set as loaded to prevent infinite loading state
                setImagesLoaded(true);
                setIsPlaying(true);
            }
        };

        preloadImages();
    }, [totalFrames]);

    const changeFrame = useCallback((newFrame: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setNextFrame(newFrame);

        setTimeout(() => {
            setCurrentFrame(newFrame);
            setIsTransitioning(false);
        }, transitionDuration);
    }, [isTransitioning]);

    const handleScroll = useCallback((event: WheelEvent) => {
        if (!imagesLoaded) return; // Prevent scroll handling until images are loaded
        event.preventDefault();

        if (event.deltaY < 0) {
            const prev = Math.max(1, currentFrame - scrollSensitivity);
            if (!isTransitioning) {
                changeFrame(prev);
                setIsPlaying(true);
            }
        } else if (event.deltaY > 0 && currentFrame < totalFrames) {
            const next = Math.min(totalFrames, currentFrame + 1);
            if (!isTransitioning) {
                changeFrame(next);
            }
        }
    }, [currentFrame, totalFrames, isTransitioning, changeFrame, imagesLoaded]);

    useEffect(() => {
        const element = document.getElementById('animation-container');
        if (element) {
            element.addEventListener('wheel', handleScroll, { passive: false });
            return () => element.removeEventListener('wheel', handleScroll);
        }
    }, [handleScroll]);

    useEffect(() => {
        if (!isPlaying || !imagesLoaded || currentFrame === totalFrames || isTransitioning) return;

        const timer = setTimeout(() => {
            const next = currentFrame + 1;
            if (next <= totalFrames) {
                changeFrame(next);
            } else {
                setIsPlaying(false);
            }
        }, frameDelay);

        return () => clearTimeout(timer);
    }, [currentFrame, isPlaying, totalFrames, isTransitioning, changeFrame, imagesLoaded]);

    return (
        <section
            id="animation-container"
            className="h-screen w-full bg-black relative overflow-hidden"
            role="banner"
            aria-label="Welcome to the Magnolia Collection"
        >
            {/* Page shadow effect */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/5 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/5 to-transparent" />
            </div>

            <div className="h-full w-full flex flex-col items-center pt-20 md:pt-32 lg:pt-40">
                {/* Text Container */}
                <div className="text-center px-4 sm:px-6 w-full max-w-[1200px] mx-auto mb-8 md:mb-12">
                    <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight text-white">
                        THE MAGNOLIA COLLECTION
                    </h1>
                    <p className="font-optima text-sm sm:text-base md:text-xl tracking-[0.2em] uppercase mt-4 text-[#69baff]">
                        WHERE EXCEPTIONAL IS FOUND
                    </p>
                </div>

                {/* Animation Container */}
                <div className="relative w-full md:w-[90%] lg:w-full max-w-[800px] px-4 sm:px-8">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        {!imagesLoaded ? (
                            // Loading state
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white/70 font-optima tracking-wider text-sm">
                                    Loading...
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Base layer - current frame */}
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={`/images/magnolia-frames/frame_${currentFrame}.jpg`}
                                        alt={`Magnolia animation frame ${currentFrame}`}
                                        className="w-full h-full object-contain"
                                        role="img"
                                    />
                                </div>
                                {/* Overlay layer - next frame */}
                                <div
                                    className="absolute inset-0 w-full h-full transition-opacity duration-50"
                                    style={{
                                        opacity: nextFrame !== currentFrame ? 1 : 0,
                                    }}
                                >
                                    <img
                                        src={`/images/magnolia-frames/frame_${nextFrame}.jpg`}
                                        alt={`Magnolia animation frame ${nextFrame}`}
                                        className="w-full h-full object-contain"
                                        role="img"
                                        aria-hidden={true}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Scroll instruction - Only show when images are loaded */}
                {imagesLoaded && (
                    <div className="text-white/70 font-optima tracking-wider text-sm mt-6">
                        Scroll up to rewind, down to advance
                    </div>
                )}
            </div>

            {/* Frame counter - Only show when images are loaded */}
            {imagesLoaded && (
                <div
                    className="absolute top-4 right-4 text-white/70 font-optima tracking-wider"
                    role="status"
                    aria-live="polite"
                >
                    Frame {currentFrame} of {totalFrames}
                </div>
            )}
        </section>
    );
}