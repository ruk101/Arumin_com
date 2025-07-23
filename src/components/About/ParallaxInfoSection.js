'use client';
import React from 'react';

const HeroParallaxSection = () => {
  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover text-white px-6 md:px-20 min-h-screen pb-20"
      style={{ backgroundImage: "url('/AboutUs-one.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-left md:text-center flex items-center justify-center min-h-[100vh] px-2">
        <div className="w-full">
          <p className="font-garamond text-lg md:text-2xl leading-relaxed font-light animate-fade-in">
            Arumin offers a selection of high-quality Ceylon sapphires, sourced in accordance with strict ethical standards and backed by full traceability.
          </p>
        </div>
      </div>

      {/* Fade animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 2s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroParallaxSection;
