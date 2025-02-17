'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface AnimatedSplashProps {
    // Add any props you might need in the future
}

const AnimatedSplash: React.FC<AnimatedSplashProps> = () => {
    const [currentFrame, setCurrentFrame] = useState<number>(1);
    const [nextFrame, setNextFrame] = useState<number>(1);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
    const totalFrames: number = 10;
    const frameDelay: number = 50;
    const transitionDuration: number = 120;
    const scrollSensitivity: number = 3;

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            try {
                const imagePromises = Array.from({ length: totalFrames }, (_, i) => {
                    return new Promise<void>((resolve, reject) => {
                        const img = new Image();
                        img.src = `/images/magnolia-frames/frame_${i + 1}.jpg`;
                        img.onload = () => resolve();
                        img.onerror = reject;
                    });
                });

                await Promise.all(imagePromises);
                setImagesLoaded(true);
                setIsPlaying(true);
            } catch (error) {
                console.error('Error preloading images:', error);
                setImagesLoaded(true);
                setIsPlaying(true);
            }
        };

        preloadImages();
    }, []);

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
        if (!imagesLoaded) return;

        // Only prevent default if we're still animating or can animate further
        if (currentFrame < totalFrames || (event.deltaY < 0 && currentFrame > 1)) {
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
            className="min-h-screen w-full bg-white relative flex items-center justify-center py-8"
            role="banner"
            aria-label="Welcome to the Magnolia Collection"
        >
            <div className="w-full flex flex-col items-center justify-center">
                {/* Text Container */}
                <div className="text-center px-4 sm:px-6 w-full max-w-[1200px] mx-auto mb-8">
                    <h1 className="font-thin font-didot text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                        The Magnolia Collection
                    </h1>
                    <p className="font-optima text-xl tracking-[0.2em] uppercase mt-4"
                        style={{ color: 'var(--darkblue)' }}>
                        WHERE EXCEPTIONAL IS FOUND
                    </p>
                </div>

                {/* Animation Container */}
                <div className="relative w-full max-w-[800px] px-4 sm:px-8">
                    <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                        {!imagesLoaded ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-gray-600 font-optima tracking-wider text-sm">
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
                                        aria-hidden={true}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default AnimatedSplash;