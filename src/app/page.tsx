'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  const sections = [
    {
      title: "Magazine Style Columns",
      path: "/columns",
      description: "Explore our elegant column-based layout that draws inspiration from high-end magazine design. Features multi-column text flow with sophisticated typography and spacing.",
      bgColor: "bg-white",
      textColor: "text-black"
    },
    {
      title: "Typography Showcase",
      path: "/typography",
      description: "A comprehensive display of our typography system, showcasing different font combinations, hierarchies, and text styling approaches for various content types.",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      title: "Splash Imagery",
      path: "/splash",
      description: "Various approaches to hero images and splash screens, demonstrating different ways to create impactful first impressions with full-screen imagery.",
      bgColor: "bg-white",
      textColor: "text-black"
    },
    {
      title: "Combined Layout Light",
      path: "/combined",
      description: "Integration of heading typography with body content on light backgrounds, showing how different elements work together in harmony.",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      title: "Combined Layout Dark",
      path: "/combined2",
      description: "Integration of heading typography with body content on dark backgrounds, demonstrating contrast and readability.",
      bgColor: "bg-white",
      textColor: "text-black"
    },
    {
      title: "Full Website Example",
      path: "/parallaxdemo",
      description: "A complete demonstration combining parallax scrolling, sophisticated typography, and elegant layouts. Shows how various design elements come together in a cohesive website.",
      bgColor: "bg-black",
      textColor: "text-white"
    }
    ,
    {
      title: "Better Website Example",
      path: "/parallaxdemo2",
      description: "A complete demonstration combining parallax scrolling, sophisticated typography, and elegant layouts. Shows how various design elements come together in a cohesive website.",
      bgColor: "bg-black",
      textColor: "text-white"
    }

  ];

  return (
    <main className="min-h-screen" role="main">
      {/* Header */}
      <header className="w-full bg-black text-white py-16 px-4 text-center">
        <h1 className="font-bodoni text-4xl sm:text-5xl md:text-6xl mb-4">
          Design System
        </h1>
        <div className="w-24 h-px bg-[#69baff] mx-auto mb-6" role="presentation" />
        <p className="font-optima text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase max-w-2xl mx-auto">
          A showcase of different design approaches and components
        </p>
      </header>

      {/* Sections */}
      <div className="w-full">
        {sections.map((section, index) => (
          <section
            key={section.path}
            className={`w-full ${section.bgColor} ${section.textColor} py-16 sm:py-24 px-4 sm:px-8`}
          >
            <div className="max-w-4xl mx-auto">
              <Link
                href={section.path}
                className="block group"
              >
                <h2 className="font-bodoni text-3xl sm:text-4xl md:text-5xl mb-4 group-hover:text-[#69baff] transition-colors">
                  {section.title}
                </h2>
                <p className="font-caslon text-base sm:text-lg md:text-xl leading-relaxed">
                  {section.description}
                </p>
              </Link>
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-8 px-4 text-center">
        <p className="font-optima text-sm tracking-wider">
          Click any section to explore the design system
        </p>
      </footer>
    </main>
  );
};

export default HomePage;