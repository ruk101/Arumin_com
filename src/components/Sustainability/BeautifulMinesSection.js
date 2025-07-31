'use client';
import React from 'react';
import Image from 'next/image';

const BeautifulMinesSection = () => {
  return (
    <section className="w-full bg-white pt-24 px-6 md:px-20" data-aos="fade">
      <div className=" mx-auto">
        
        {/* Full-width Image with spacing */}
        <div
          className="w-full h-[350px] md:h-[500px] relative mb-20 rounded overflow-hidden"
          data-aos="fade"
          data-aos-delay="100"
        >
          <Image
            src="/sustainability_second_section.jpg" // 🔁 Replace with your actual image path
            alt="Beautiful Sapphire Mine"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Heading */}
        <h2
          className="text-2xl md:text-3xl font-light text-gray-900 mb-10 max-w-4xl"
          data-aos="fade"
          data-aos-delay="200"
        >
          Creating the world’s most beautiful sapphire mines, in form and spirit.
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 text-base leading-relaxed">
          <div className="space-y-4" data-aos="fade" data-aos-delay="300">
            <p>
              Arumin is on a mission to own some of the world’s most beautiful sapphire mines, in both form and spirit.
              Our vision of beauty extends beyond the sapphires themselves to the landscapes, communities, and lives connected to them.
            </p>
            <p>
              We mine in coexistence with nature, designing each site with environmental care, cultural sensitivity,
              and long-term impact in mind.
            </p>
          </div>
          <div className="space-y-4" data-aos="fade" data-aos-delay="400">
            <p>
              From preserving local ecosystems to creating dignified livelihoods, every decision is made with intention.
            </p>
            <p>
              We believe that true beauty lies not only in what we extract, but in what we build around it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautifulMinesSection;
