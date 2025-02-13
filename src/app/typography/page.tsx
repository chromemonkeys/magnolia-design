import React from 'react';

const TypographyVariations = () => {
    return (
        <div className="min-h-screen bg-white">
            <article className="max-w-4xl mx-auto p-6">
                {/* Traditional Serif Style */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Traditional Serif</span>
                    <h2 className="font-bodoni text-7xl mb-8 leading-none">The Magnolia Collection</h2>
                    <p className="font-caslon text-xl">Where Exceptional is Found</p>
                </section>

                {/* Modern Serif Style */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Modern Serif</span>
                    <h2 className="font-modern text-6xl font-thin mb-4 tracking-tight">THE MAGNOLIA COLLECTION</h2>
                    <h3 className="font-modern text-4xl italic tracking-wide">Where Exceptional is Found</h3>
                </section>

                {/* Dramatic Display Style */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Dramatic Display</span>
                    <h2 className="font-didot text-8xl mb-4 tracking-tight leading-none">THE MAGNOLIA COLLECTION</h2>
                    <p className="font-optima text-xl tracking-[0.2em] uppercase">WHERE EXCEPTIONAL IS FOUND</p>
                </section>

                {/* Elegant Thin Style */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Elegant Thin</span>
                    <h2 className="font-thin font-didot text-7xl mb-4">The Magnolia Collection</h2>
                    <p className="font-garamond text-2xl italic">Where exceptional is found</p>
                </section>

                {/* Classic Editorial */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Classic Editorial</span>
                    <h2 className="font-caslon text-6xl mb-6 leading-tight">The Magnolia
                        <span className="block italic">Collection</span>
                    </h2>
                    <p className="font-caslon text-xl leading-relaxed">Where exceptional is found</p>
                </section>

                {/* Compressed Style */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Compressed Style</span>
                    <h2 className="font-compressed text-7xl uppercase mb-4 tracking-tight">THE MAGNOLIA COLLECTION</h2>
                    <p className="font-garamond text-2xl">Where exceptional is found</p>
                </section>

                {/* Mixed Weight Style */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Mixed Weight</span>
                    <div className="flex flex-col">
                        <span className="font-didot text-8xl font-thin tracking-tight">THE</span>
                        <span className="font-didot text-8xl font-bold tracking-tight -mt-6">MAGNOLIA COLLECTION</span>
                    </div>
                    <p className="font-optima text-xl tracking-wide mt-4">WHERE EXCEPTIONAL IS FOUND</p>
                </section>

                {/* Stacked Style */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Stacked Style</span>
                    <div className="space-y-2">
                        <h2 className="font-bodoni text-6xl tracking-tight">THE</h2>
                        <h2 className="font-bodoni text-6xl tracking-tight">MAGNOLIA</h2>
                        <h2 className="font-bodoni text-6xl tracking-tight">COLLECTION</h2>
                        <p className="font-optima text-xl tracking-wide mt-4">WHERE EXCEPTIONAL IS FOUND</p>

                    </div>
                </section>

                {/* Stacked Style */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Stacked Style</span>
                    <div className="space-y-2">
                        <h2 className="font-geist-sans text-6xl tracking-tight">THE</h2>
                        <h2 className="font-geist-sans text-6xl tracking-tight">MAGNOLIA</h2>
                        <h2 className="font-geist-sans text-6xl tracking-tight">COLLECTION</h2>
                        <p className="font-geist-sans text-xl tracking-wide mt-4">WHERE EXCEPTIONAL IS FOUND</p>

                    </div>
                </section>

                {/* Oversized Style */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Oversized Style</span>
                    <h2 className="font-modern text-[12rem] leading-none tracking-tighter -ml-4">THE MAGNOLIA COLLECTION</h2>
                    <p className="font-garamond text-2xl italic mt-4">Where Exceptional is Found</p>

                </section>

                {/* Contrast Style */}
                <section className="mb-24">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Contrast Style</span>
                    <div className="flex flex-col">
                        <span className="font-didot text-7xl tracking-tight">THE MAGNOLIA</span>
                        <span className="font-bodoni text-8xl italic tracking-tighter -mt-6">collection</span>
                        <p className="font-optima text-xl tracking-wide mt-4">WHERE EXCEPTIONAL IS FOUND</p>

                    </div>
                </section>


                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Playfair Display</span>
                    <div className="space-y-2">
                        <h2 className="font-playfair text-8xl font-black tracking-tight leading-none">
                            THE MAGNOLIA
                        </h2>
                        <div className="font-playfair text-6xl italic font-medium text-gray-800">
                            Collection
                        </div>
                        <p className="font-playfair text-2xl font-normal tracking-wide mt-6">
                            Where Exceptional is Found
                        </p>
                    </div>
                </section>

                {/* Bodoni Variations */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Bodoni Elegance</span>
                    <div className="space-y-4">
                        <h2 className="font-bodoni text-9xl font-bold tracking-tight leading-none">
                            THE MAGNOLIA COLLECTION
                        </h2>

                        <p className="font-bodoni text-xl font-normal tracking-widest uppercase mt-4">
                            WHERE EXCEPTIONAL IS FOUND
                        </p>
                    </div>
                </section>

                {/* Bodoni Dramatic */}
                <section className="mb-24 border-b pb-12">
                    <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-500">Bodoni Dramatic</span>
                    <div className="flex flex-col items-start">
                        <div className="ml-4">
                            <h2 className="font-bodoni text-6xl font-light tracking-widest">THE MAGNOLIA COLLECTION</h2>
                            <p className="font-bodoni text-2xl italic mt-2">Where Exceptional is Found</p>
                        </div>
                    </div>
                </section>


            </article>
        </div>
    );
};

export default TypographyVariations;