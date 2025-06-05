'use client';
import React from 'react';
import Image from 'next/image';

const TraceabilityEnvironmentSection = () => {
  return (
    <section className="w-full bg-white pt-24 px-6 md:px-20 mb-60" data-aos="fade">
      <div className=" mx-auto">

        {/* Full-width Image */}
        <div
          className="w-full h-[300px] md:h-[500px] relative mb-20 rounded overflow-hidden"
          data-aos="fade"
          data-aos-delay="100"
        >
          <Image
            src="/ARU_sustainability_page_three.png" // 🔁 Replace with your actual image path
            alt="Traceability and Environment"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* TRACEABILITY Block */}
        <div className="mb-16" data-aos="fade" data-aos-delay="200">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-10 max-w-4xl">Traceability</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 text-base leading-relaxed">
            <p data-aos="fade" data-aos-delay="300">
              Every Arumin sapphire is fully traceable, down to the country, region, and specific mine of origin.
              By sourcing exclusively from our own network of mines, we maintain complete visibility and control
              over every stage of the journey.
            </p>
            <p data-aos="fade" data-aos-delay="400">
              This approach ensures not only authenticity, but also accountability, giving our partners and clients
              full confidence in the provenance of each stone.
            </p>
          </div>
        </div>

        {/* ENVIRONMENT Block */}
        <div data-aos="fade" data-aos-delay="500">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-10 max-w-4xl">Environment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 text-base leading-relaxed">
            <p data-aos="fade" data-aos-delay="600">
              Arumin operates with deep respect for the land. Before any mining begins, we work closely with
              government authorities to conduct comprehensive environmental assessments and ensure the land is
              suitable for responsible extraction.
            </p>
            <p data-aos="fade" data-aos-delay="700">
              Our commitment doesn’t end there. As operations expand, we invest in land restoration and ecological
              balance, ensuring that every site is left enriched, not depleted. Sustainability is not a step in our
              process; it is built into the foundation of how we mine.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TraceabilityEnvironmentSection;
