import React from 'react';
import Image from 'next/image';

const MagnoliaSplash = () => {
    return (
        <div>
            {/* Version 1: Light with Text Above */}
            <section className="min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-8">
                {/* Text Above */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="font-bodoni text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
                        THE MAGNOLIA COLLECTION
                    </h1>
                    <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl italic ">
                        Where Exceptional is Found
                    </h2>
                </div>

                {/* Image Below */}
                <div className="relative w-full max-w-[800px] aspect-square">
                    <Image
                        src="/images/magnolia-pink-white.jpg"
                        alt="Pink Magnolia on white"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </section>

            {/* Version 2: Dark with Text Above */}
            <section className="min-h-screen bg-black flex flex-col items-center justify-center px-4 md:px-8">
                <div className="text-center mb-8 md:mb-12 text-white">
                    <h1 className="font-bodoni text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
                        THE MAGNOLIA COLLECTION
                    </h1>
                    <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl italic ">
                        Where Exceptional is Found
                    </h2>
                </div>

                <div className="relative w-full max-w-[800px] aspect-square">
                    <Image
                        src="/images/magnolia-white-black.jpg"
                        alt="White Magnolia on black"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </section>

            {/* Version 3: Light with Overlay */}
            <section className="min-h-screen relative flex flex-col items-center justify-center px-4 md:px-8">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-[800px] aspect-square">
                        <Image
                            src="/images/magnolia-pink-white.jpg"
                            alt="Pink Magnolia on white"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <div className="absolute inset-0 bg-white/40"></div>

                <div className="relative z-10 text-center">
                    <h1 className="font-bodoni text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
                        THE MAGNOLIA COLLECTION
                    </h1>
                    <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl italic ">
                        Where Exceptional is Found
                    </h2>
                </div>
            </section>

            {/* Version 4: Dark with Overlay */}
            <section className="min-h-screen bg-black relative flex flex-col items-center justify-center px-4 md:px-8">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-[800px] aspect-square">
                        <Image
                            src="/images/magnolia-white-black.jpg"
                            alt="White Magnolia on black"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-center text-white">
                    <h1 className="font-bodoni text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
                        THE MAGNOLIA COLLECTION
                    </h1>
                    <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl italic ">
                        Where Exceptional is Found
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default MagnoliaSplash;