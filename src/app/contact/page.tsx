'use client';

import React, { useState } from 'react';
import { Phone, Mail, Instagram, X } from 'lucide-react';

const ContactDemos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeDemo, setActiveDemo] = useState(null);

    const contactInfo = {
        phone: '+1234567890',
        email: 'hello@example.com',
        instagram: '@example'
    };

    // Shared Modal Component
    const ContactModal = ({ onClose }) => (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center"
            onClick={() => onClose()}
        >
            <div
                className="bg-white w-full sm:w-96 sm:rounded-lg overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bodoni text-2xl">Contact Us</h3>
                        <button
                            onClick={() => onClose()}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        <a
                            href={`tel:${contactInfo.phone}`}
                            className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <Phone className="mr-4 text-[#69baff]" />
                            <span className="font-caslon">{contactInfo.phone}</span>
                        </a>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <Mail className="mr-4 text-[#69baff]" />
                            <span className="font-caslon">{contactInfo.email}</span>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <Instagram className="mr-4 text-[#69baff]" />
                            <span className="font-caslon">{contactInfo.instagram}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    const FloatingButton = () => (
        <button
            onClick={() => {
                setActiveDemo('fab');
                setIsModalOpen(true);
            }}
            className="fixed bottom-8 right-8 z-40 bg-[#69baff] rounded-full w-16 h-16 flex items-center justify-center hover:scale-105 transition-transform group"
            aria-label="Contact Us"
            style={{
                boxShadow: '0 0 20px rgba(105, 186, 255, 0.3), 0 8px 16px rgba(0, 0, 0, 0.1)'
            }}
        >
            <div className="absolute inset-0 bg-[#69baff] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                    animation: 'softPulse 3s ease-in-out infinite'
                }}
            />
            <span className="font-optima text-white tracking-wider text-sm uppercase">Contact</span>
            <style jsx>{`
                @keyframes softPulse {
                    0% {
                        transform: scale(1);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.5);
                        opacity: 0.15;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 0;
                    }
                }
            `}</style>
        </button>
    );

    // 2. Sticky Header
    const StickyHeader = () => (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-30">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="font-bodoni text-2xl">Your Brand</h1>
                <button
                    onClick={() => {
                        setActiveDemo('header');
                        setIsModalOpen(true);
                    }}
                    className="bg-[#69baff] text-white px-6 py-2 rounded-full hover:bg-[#5aa6eb] transition-colors font-optima tracking-wider"
                >
                    Contact
                </button>
            </div>
        </header>
    );

    // 3. Homepage Integration Section
    const HomepageSection = () => (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-bodoni text-4xl mb-4">Get in Touch</h2>
                <div className="w-24 h-px bg-[#69baff] mx-auto mb-8" role="presentation" />
                <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                    {[
                        { icon: Phone, label: 'Call', href: `tel:${contactInfo.phone}` },
                        { icon: Mail, label: 'Email', href: `mailto:${contactInfo.email}` },
                        { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' }
                    ].map(({ icon: Icon, label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target={label === 'Instagram' ? '_blank' : undefined}
                            rel={label === 'Instagram' ? 'noopener noreferrer' : undefined}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Icon className="w-8 h-8 text-[#69baff]" />
                            </div>
                            <span className="font-optima tracking-wider">{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );

    // 4. Social-First Preview
    const SocialPreview = () => (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="relative aspect-square max-w-md mx-auto bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => {
                        setActiveDemo('social');
                        setIsModalOpen(true);
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white">
                            <Instagram className="w-12 h-12 mx-auto mb-4" />
                            <p className="font-bodoni text-2xl mb-2">Follow Us</p>
                            <p className="font-optima tracking-wider">{contactInfo.instagram}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    return (
        <main className="min-h-screen pt-16 relative">
            {/* Page shadow effect */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/5 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/5 to-transparent" />
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
                {/* Animated glow circles - these run on page load */}
                <div className="absolute inset-0 animate-glow-1" />
                <div className="absolute inset-0 animate-glow-2" />

                <button
                    onClick={() => setIsModalOpen(true)}
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
            `}</style>

            {/* Rest of content */}
            <StickyHeader />

            <div className="max-w-4xl mx-auto px-4 py-20 relative">
                <h1 className="font-bodoni text-4xl mb-4">Contact Button Demonstrations</h1>
                <div className="w-24 h-px bg-[#A9A9A9] mx-auto mb-8" role="presentation" />
                <p className="font-caslon text-lg mb-8">
                    Scroll through to see different contact button implementations.
                    Each approach offers unique benefits for user engagement.
                </p>
            </div>

            <HomepageSection />
            <SocialPreview />

            {/* Modal */}
            {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
        </main>
    );
};

export default ContactDemos;