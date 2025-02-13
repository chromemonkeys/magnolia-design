'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Mail, Instagram } from 'lucide-react';

const ParallaxDemo = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowButton(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sections = [
        {
            title: "The Magnolia Collection",
            content: "Nestled in the emerald rolling hills of the Sunshine Coast hinterland a whisper from Maleny, The Magnolia Collection is an assemblage of exquisite wedding experts that lead the region in intimate elopements we call Magnolia Ceremonies.\n\nMeticulously curated to exceed expectations and delight the senses, Magnolia Ceremonies can be hosted at either our exquisitely designed private lakeside location, The Magnolia Lakehouse, or your choice from an exclusive selection of private and bespoke locations across the Hinterland and beyond.\n\nThe Magnolia Collection meticulously crafts your chosen venue with catering, creative planning, celebrancy services, photography, private transport, entertainment and accommodation as a single elegant hand-picked team of professionals focussed on absolute perfection.",
            image: "/images/1.webp"
        },
        {
            title: "Perfection Discovered",
            content: "The Magnolia Collection philosophy is an unrelenting belief that it is 'the little things that are the biggest'. This standard for the exceptional is reflected in every detail. Whether it be the procurement of fresh Italian white truffle for an unexpected flourish to an entrée. From the surprise of music orchestrated around one of your most cherished memories, to the delight of the water sparkling like diamonds throughout your ceremony as you float atop the Monet inspired lilies on our lake.\n\nThese are just a few of the little things discreetly sprinkled throughout your event in a perfect harmony for the senses, so every moment of your day, and every lasting memory, is exceptional.\n\nOur signature packages in the Collection are our four Magnolia Ceremony's.\n\nMeticulously designed and tailored with you. Discover your perfect Magnolia Ceremony.",
            image: "/images/2.jpg"
        },
        {
            title: "Reaching For The Stars Is Just The Beginning",
            subtitle: "STELLATA POA",
            content: "Limited only by your imagination and defining perfection without compromise the crown jewel in the collection is the 'Stellata'.\n\nExclusive use of our exquisitely styled grounds creatively styled to your exacting taste and wishes, promises a Magnolia Ceremony full of surprise and wonderment.\n\nAn award-winning private chef creates a unique 6 course degustation fine dining experience for you and your intimate guests on your private deck side soirée post ceremony celebration.\n\nA luxurious Arabian inspired and styled long and low grazing picnic under our glamorous pavilion tent, complete with co-ordinated mobile bar, champagne tower and personalised table service may be your wish.\n\nAsk our team about our pampered pets program, preferred musicians, private air charters, luxury accommodation options and so much more. Private chauffeur transfers for your guests and yourselves are included within all packages, as is the Grand Magnolia full suite Celebrancy service.\n\nNo request is too large, no detail too small",
            image: "/images/3.jpg"
        },
        {
            title: "Every Moment Exquisitely Handcrafted",
            subtitle: "MICHELIA ALBA from $6250.00+GST",
            content: "The Michelia Alba is an exquisitely curated collection of all of the exceptional necessities to create your dream day. Sprinkled liberally with delightful touches to captivate and enthral every moment provides a lifelong memory.\n\nTo begin, your guests and yourselves will enjoy being chauffeured driven to and from our gorgeous property from local accommodation. Sit back and enjoy the stunning views as we bring you safely to our stunning lakeside property.\n\nUpon arrival the Bridal studio awaits you. Surprises abound, and the grounds are dressed to perfection. We're ready to host a magical day sure to create memories that will last a lifetime.\n\nAn Arabian styled Pavilion Tent has been arranged for guest post-ceremony enjoyment and relaxation while you both steal moments together during wedding photography, later rejoining your guests in toast and cheer.\n\nLet's chat about the addition of a delicious graze to your package, after all your pavilion tent is set and ready to impress. Why not nibble while you sip and celebrate the future with those you hold closest to your hearts.\n\nPrivate chauffeur transfers are included within all packages, as is the Grand Magnolia full suite Celebrancy package. Choose your attire, photographer, HMU then leave the rest to us.",
            image: "/images/magnolia-pink-white.jpg"
        },
        {
            title: "Let Us Delight You",
            subtitle: "GRANDIFLORA from $5350.00+GST",
            content: "Truly an exceptional package, Grandiflora offers aesthetically beautiful surrounds combined with a peppering of exquisite surprises created to indulge you.\n\nWith our focus on styling, your choices include a picture-perfect selection of custom created ceremony styling options designed specifically for Magnolia Lakehouse Maleny. From furnishing to florals and all in between you will want for nothing on your day of days.\n\nEnjoy exclusive use of the grounds for up to 5 hours; Our perfectly appointed Bridal Studio for two persons for 2 hours; The full Grand Magnolia Celebrancy suite of service with highly regarded civil celebrant Debi Latino guiding you from first contact to legally married; Custom ceremony scripting and arrangement of all official paperwork and processes; as well as being Chauffeur driven to and from local accommodation and our lakeside property so you can fully relax, enjoying every moment of your day.\n\nSome special touches to add to your Grandiflora Elopement experience may include a post ceremony elegant 'Soirée on the Deck' or 'Luxurious Picnic' on the grounds, inclusive expansive grazing board and non-alcoholic beverages; Wedding Cake, Fresh seasonal florals for both parties to the wedding, Champagne Tower, Ornate Serviced Bar Cart (BYO Alcohol); Musician and much more.\n\nHave something else in mind that doesn't appear here? Enquire and Let us spoil you.",
            image: "/images/1.webp"
        },
        {
            title: "Exceptional In Every Way",
            subtitle: "LILIIFLORA from $4950.00+GST",
            content: "At Magnolia Lakehouse Maleny, enjoying your day, your way means we listen and we care, customising elegant elopement packages to enhance your experience. It's collaboration and planning performed to perfection.\n\nYou'll discover our Liliiflora offering is no exception.\n\nWith little things meaning so much, we offer a picture-perfect selection of custom created ceremony styling options designed specifically for Magnolia Lakehouse Maleny.\n\nEnjoy exclusive use of the grounds for up to 3 hours. Our overwater deck, complete with built in gazebo, bar, seating and nothing but glass between yourselves and those perfect backdrops of the lake, will host your perfectly styled and planned ceremony. The Petite Magnolia Celebrancy suite of service is provided, with highly regarded civil celebrant Debi Latino guiding you from first contact to legally married.\n\nAs with all our packages, enjoying being Chauffeur driven to and from local accommodation and our lakeside property so you can fully relax making every moment count, is included in Liliiflora, as is use of our stunning Lakeside Atrium in case of inclement weather so you will never be far from the lake.",
            image: "/images/2.jpg"
        }
    ];

    return (
        <main className="relative w-full" role="main" aria-label="Magnolia Collection showcase">
            {/* Floating Action Button */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 animate-glow-1" />
                <div className="absolute inset-0 animate-glow-2" />
                <button
                    onClick={scrollToContact}
                    className="relative w-16 h-16 rounded-full border-4 hover:scale-105 transition-transform duration-300 bg-white/5"
                    aria-label="Contact Us"
                    style={{
                        borderColor: '#A9A9A9',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes glow1 {
                    0% {
                        transform: scale(1);
                        opacity: 0.4;
                    }
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                @keyframes glow2 {
                    0% {
                        transform: scale(1);
                        opacity: 0.4;
                    }
                    100% {
                        transform: scale(1.7);
                        opacity: 0;
                    }
                }

                .animate-glow-1 {
                    animation: glow1 3s ease-out infinite;
                    border: 4px solid #A9A9A9;
                    border-radius: 50%;
                }

                .animate-glow-2 {
                    animation: glow2 3s ease-out infinite 1.5s;
                    border: 4px solid #A9A9A9;
                    border-radius: 50%;
                }

                @media (min-width: 768px) {
                    .content-columns {
                        column-count: 2;
                        column-gap: 3rem;
                        column-rule: 1px solid #69baff;
                    }
                }
            `}</style>

            {/* Splash Section */}
            <section
                className="min-h-screen w-full bg-white relative flex flex-col items-center justify-center"
                role="banner"
                aria-label="Welcome to the Magnolia Collection"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-[800px] aspect-square">
                        <Image
                            src="/images/magnolia-pink-white.jpg"
                            alt="Magnolia Collection hero image"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-center text-black px-4 sm:px-6 w-full">
                    <h1 className="font-bodoni text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6 md:mb-8 leading-none">
                        THE MAGNOLIA COLLECTION
                    </h1>
                    <p className="font-optima text-sm sm:text-base md:text-xl tracking-[0.2em] uppercase">
                        WHERE EXCEPTIONAL IS FOUND
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            {/* Content Sections */}
            {sections.map((section, index) => {
                // Determine if this section should have dark or light theme
                const isDark = index % 2 === 0; // Even indices will be dark theme
                return (
                    <div key={index} className="relative">
                        {/* Image Section - Restored bg-fixed for parallax */}
                        <section
                            className="min-h-screen w-full bg-no-repeat bg-fixed bg-cover bg-center relative"
                            style={{
                                backgroundImage: section.image === "/images/magnolia-pink-white.jpg"
                                    ? `url(/images/magnolia-white-black.jpg)`
                                    : `url(${section.image})`
                            }}
                            role="region"
                            aria-label={`${section.title} section`}
                        />

                        {/* Text Content Section */}
                        <section
                            className={`min-h-screen w-full relative flex items-center py-16 md:py-24 ${isDark ? 'bg-black text-white' : 'bg-white text-black'
                                }`}
                            role="region"
                            aria-label={`About ${section.title}`}
                        >
                            <div className="w-full px-4 sm:px-8 md:px-16 max-w-4xl mx-auto">
                                <h2 className="font-bodoni text-3xl sm:text-5xl md:text-7xl mb-4 sm:mb-6 md:mb-8 leading-none break-words">
                                    {section.title}
                                </h2>
                                <div className="w-24 h-px bg-[#69baff] mx-auto mb-6" role="presentation" />
                                {section.subtitle && (
                                    <p className="font-optima text-sm sm:text-base md:text-xl tracking-[0.2em] uppercase mb-6 sm:mb-8 break-words">
                                        {section.subtitle}
                                    </p>
                                )}
                                <div className="content-columns">
                                    <div className={`font-caslon text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line break-words ${isDark ? 'text-gray-200' : 'text-gray-800'
                                        }`}>
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );
            })}

            {/* Contact Section */}
            <section
                id="contact"
                className="h-screen bg-white relative"
            >
                <div className="absolute inset-0 flex flex-col items-center pt-16 pb-32">
                    <div className="w-full max-w-4xl mx-auto text-center px-4">
                        <h2 className="font-bodoni text-4xl sm:text-5xl md:text-6xl mb-4">
                            Contact Us Now For An Obligation Free Quotation
                        </h2>
                        <div className="w-24 h-px bg-[#69baff] mx-auto mb-12" role="presentation" />

                        <div className="flex flex-col gap-8 items-center max-w-xs mx-auto">
                            <a
                                href="tel:+1234567890"
                                className="flex flex-col items-center group rounded-lg hover:bg-gray-50 transition-colors w-full"
                            >
                                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Phone className="w-8 h-8 text-[#69baff]" />
                                </div>
                                <span className="font-optima tracking-wider text-lg">Call Us</span>
                                <span className="font-caslon mt-1 text-gray-600">+1234567890</span>
                            </a>

                            <a
                                href="mailto:hello@example.com"
                                className="flex flex-col items-center group rounded-lg hover:bg-gray-50 transition-colors w-full"
                            >
                                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Mail className="w-8 h-8 text-[#69baff]" />
                                </div>
                                <span className="font-optima tracking-wider text-lg">Email Us</span>
                                <span className="font-caslon mt-1 text-gray-600">hello@example.com</span>
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center group rounded-lg hover:bg-gray-50 transition-colors w-full"
                            >
                                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Instagram className="w-8 h-8 text-[#69baff]" />
                                </div>
                                <span className="font-optima tracking-wider text-lg">Follow Us</span>
                                <span className="font-caslon mt-1 text-gray-600">@example</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ParallaxDemo;