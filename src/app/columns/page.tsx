import React from 'react';

const ColumnsPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Column Rules Demo Component */}
                <style>
                    {`
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
            
            .gray-rule {
              column-count: 2;
              column-gap: 3rem;
              column-rule: 1px solid #69baff;
            }
            
            @media (max-width: 768px) {
              .classic-rule,
              .thick-rule,
              .dotted-rule,
              .three-column-rule,
              .gray-rule {
                column-count: 1;
                column-rule: none;
              }
            }
          `}
                </style>

                <div className="max-w-6xl mx-auto p-8 space-y-12">
                    {/* Page Title */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold mb-4">Column Layout Examples</h1>
                        <p className="text-gray-600">Exploring different column styles and arrangements</p>
                    </div>

                    {/* Classic Black Rule */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Classic Black Rule</h2>
                        <div className="classic-rule">
                            <p className="mb-6">
                                Nestled in the emerald rolling hills of the Sunshine Coast hinterland a whisper from Maleny,
                                The Magnolia Collection is an assemblage of exquisite wedding experts that lead the region in
                                intimate elopements we call Magnolia Ceremonies.
                            </p>
                            <p className="mb-6">
                                Meticulously curated to exceed expectations and delight the senses, Magnolia Ceremonies can be
                                hosted at either our exquisitely designed private lakeside location, The Magnolia Lakehouse, or
                                your choice from an exclusive selection of private and bespoke locations across the Hinterland
                                and beyond.
                            </p>
                            <p>
                                The Magnolia Collection meticulously crafts your chosen venue with catering, creative planning,
                                celebrancy services, photography, private transport, entertainment and accommodation as a single
                                elegant hand-picked team of professionals focussed on absolute perfection.
                            </p>
                        </div>
                    </section>

                    {/* Thick Rule */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Bold Statement</h2>
                        <div className="thick-rule">
                            <p className="mb-6">
                                Nestled in the emerald rolling hills of the Sunshine Coast hinterland a whisper from Maleny,
                                The Magnolia Collection is an assemblage of exquisite wedding experts that lead the region in
                                intimate elopements we call Magnolia Ceremonies.
                            </p>
                            <p className="mb-6">
                                Meticulously curated to exceed expectations and delight the senses, Magnolia Ceremonies can be
                                hosted at either our exquisitely designed private lakeside location, The Magnolia Lakehouse, or
                                your choice from an exclusive selection of private and bespoke locations across the Hinterland
                                and beyond.
                            </p>
                            <p>
                                The Magnolia Collection meticulously crafts your chosen venue with catering, creative planning,
                                celebrancy services, photography, private transport, entertainment and accommodation as a single
                                elegant hand-picked team of professionals focussed on absolute perfection.
                            </p>
                        </div>
                    </section>

                    {/* Dotted Rule */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Subtle Dotted</h2>
                        <div className="dotted-rule">
                            <p className="mb-6">
                                Nestled in the emerald rolling hills of the Sunshine Coast hinterland a whisper from Maleny,
                                The Magnolia Collection is an assemblage of exquisite wedding experts that lead the region in
                                intimate elopements we call Magnolia Ceremonies.
                            </p>
                            <p className="mb-6">
                                Meticulously curated to exceed expectations and delight the senses, Magnolia Ceremonies can be
                                hosted at either our exquisitely designed private lakeside location, The Magnolia Lakehouse, or
                                your choice from an exclusive selection of private and bespoke locations across the Hinterland
                                and beyond.
                            </p>
                            <p>
                                The Magnolia Collection meticulously crafts your chosen venue with catering, creative planning,
                                celebrancy services, photography, private transport, entertainment and accommodation as a single
                                elegant hand-picked team of professionals focussed on absolute perfection.
                            </p>
                        </div>
                    </section>

                    {/* Three Columns */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Three Column Layout</h2>
                        <div className="three-column-rule">
                            <p className="mb-6">
                                Nestled in the emerald rolling hills of the Sunshine Coast hinterland a whisper from Maleny,
                                The Magnolia Collection is an assemblage of exquisite wedding experts that lead the region in
                                intimate elopements we call Magnolia Ceremonies.
                            </p>
                            <p className="mb-6">
                                Meticulously curated to exceed expectations and delight the senses, Magnolia Ceremonies can be
                                hosted at either our exquisitely designed private lakeside location, The Magnolia Lakehouse, or
                                your choice from an exclusive selection of private and bespoke locations across the Hinterland
                                and beyond.
                            </p>
                            <p>
                                The Magnolia Collection meticulously crafts your chosen venue with catering, creative planning,
                                celebrancy services, photography, private transport, entertainment and accommodation as a single
                                elegant hand-picked team of professionals focussed on absolute perfection.
                            </p>
                        </div>
                    </section>

                    {/* Gray Rule */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Subtle Gray</h2>
                        <div className="gray-rule">
                            <p className="mb-6">
                                Nestled in the emerald rolling hills of the Sunshine Coast hinterland a whisper from Maleny,
                                The Magnolia Collection is an assemblage of exquisite wedding experts that lead the region in
                                intimate elopements we call Magnolia Ceremonies.
                            </p>
                            <p className="mb-6">
                                Meticulously curated to exceed expectations and delight the senses, Magnolia Ceremonies can be
                                hosted at either our exquisitely designed private lakeside location, The Magnolia Lakehouse, or
                                your choice from an exclusive selection of private and bespoke locations across the Hinterland
                                and beyond.
                            </p>
                            <p>
                                The Magnolia Collection meticulously crafts your chosen venue with catering, creative planning,
                                celebrancy services, photography, private transport, entertainment and accommodation as a single
                                elegant hand-picked team of professionals focussed on absolute perfection.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ColumnsPage;