import React from 'react';

const DarkTypographyWithColumns = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <main className="max-w-6xl mx-auto p-8">
                {/* CSS for columns */}
                /* CSS for columns */
                <style>
                    {`
        /* Base styles for mobile first */
        .classic-rule,
        .thick-rule,
        .dotted-rule,
        .three-column-rule {
            column-count: 1;
        }
        
        /* Tablet and up */
        @media (min-width: 768px) {
            .classic-rule {
                column-count: 2;
                column-gap: 3rem;
                column-rule: 1px solid #69baff;
            }
            
            .thick-rule {
                column-count: 2;
                column-gap: 3rem;
                column-rule: 3px solid #69baff;
            }
            
            .dotted-rule {
                column-count: 2;
                column-gap: 3rem;
                column-rule: 1px dotted #69baff;
            }
            
            .three-column-rule {
                column-count: 3;
                column-gap: 3rem;
                column-rule: 1px solid #69baff;
            }
        }
    `}
                </style>

                {/* Playfair with Caslon */}
                <section className="mb-24">
                    <div className="max-w-6xl">
                        <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-400 block mb-4">
                            Playfair Display with Classic Rule
                        </span>
                        <h2 className="font-playfair text-4xl md:text-7xl font-bold tracking-tight leading-none mb-8">
                            The Magnolia Collection
                        </h2>
                    </div>
                    <div className="classic-rule">
                        <p className="font-caslon text-lg leading-relaxed mb-6 text-gray-200">
                            Nestled in the emerald rolling hills of the Sunshine Coast hinterland a whisper from Maleny,
                            The Magnolia Collection is an assemblage of exquisite wedding experts that lead the region in
                            intimate elopements we call Magnolia Ceremonies.
                        </p>
                        <p className="font-caslon text-lg leading-relaxed mb-6 text-gray-200">
                            Meticulously curated to exceed expectations and delight the senses, Magnolia Ceremonies can be
                            hosted at either our exquisitely designed private lakeside location, The Magnolia Lakehouse, or
                            your choice from an exclusive selection of private and bespoke locations across the Hinterland
                            and beyond.
                        </p>
                    </div>
                </section>

                {/* Bodoni with Thick Rule */}
                <section className="mb-24">
                    <div className="max-w-6xl">
                        <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-400 block mb-4">
                            Bodoni with Thick Rule
                        </span>
                        <h2 className="font-bodoni text-5xl md:text-8xl font-bold tracking-tight leading-none mb-4">
                            THE MAGNOLIA COLLECTION
                        </h2>
                        <h3 className="font-optima text-sm tracking-[0.3em] uppercase text-gray-400 block mb-4">
                            Where Exceptional is Found
                        </h3>
                    </div>
                    <div className="thick-rule">
                        <p className="font-garamond text-lg leading-relaxed mb-6 text-gray-200">
                            Nestled in the emerald rolling hills of the Sunshine Coast hinterland a whisper from Maleny,
                            The Magnolia Collection is an assemblage of exquisite wedding experts that lead the region in
                            intimate elopements we call Magnolia Ceremonies.
                        </p>
                        <p className="font-garamond text-lg leading-relaxed text-gray-200">
                            Meticulously curated to exceed expectations and delight the senses, Magnolia Ceremonies can be
                            hosted at either our exquisitely designed private lakeside location, The Magnolia Lakehouse, or
                            your choice from an exclusive selection of private and bespoke locations across the Hinterland
                            and beyond.
                        </p>
                    </div>
                </section>

                {/* Modern with Three Columns */}
                <section className="mb-24">
                    <div className="max-w-6xl">
                        <span className="font-optima text-sm tracking-[0.3em] uppercase text-gray-400 block mb-4">
                            Modern with Three Columns
                        </span>
                        <div className="mb-8">
                            <span className="font-modern text-4xl md:text-7xl font-thin tracking-tight block text-gray-300">
                                THE
                            </span>
                            <span className="font-modern text-5xl md:text-8xl font-bold tracking-tight">
                                MAGNOLIA COLLECTION
                            </span>
                        </div>
                    </div>
                    <div className="three-column-rule">
                        <p className="font-garamond text-lg leading-relaxed mb-6 text-gray-200">
                            Nestled in the emerald rolling hills of the Sunshine Coast hinterland a whisper from Maleny,
                            The Magnolia Collection is an assemblage of exquisite wedding experts that lead the region in
                            intimate elopements we call Magnolia Ceremonies.
                        </p>
                        <p className="font-garamond text-lg leading-relaxed mb-6 text-gray-200">
                            Meticulously curated to exceed expectations and delight the senses, Magnolia Ceremonies can be
                            hosted at either our exquisitely designed private lakeside location, The Magnolia Lakehouse, or
                            your choice from an exclusive selection of private and bespoke locations across the Hinterland
                            and beyond.
                        </p>
                        <p className="font-garamond text-lg leading-relaxed text-gray-200">
                            The Magnolia Collection meticulously crafts your chosen venue with catering, creative planning,
                            celebrancy services, photography, private transport, entertainment and accommodation as a single
                            elegant hand-picked team of professionals focussed on absolute perfection.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DarkTypographyWithColumns;