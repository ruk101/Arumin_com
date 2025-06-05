'use client';
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-screen h-[600px] md:h-[600px] relative overflow-hidden">
      <Image
        src="/ARU_Sustainability_page_hero.png" // 🔁 Replace with your actual hero image path
        alt="Hero Background"
        fill
        className="object-cover object-[85%_25%] md:object-center"
        priority
      />
    </section>
  );
};

export default HeroSection;
