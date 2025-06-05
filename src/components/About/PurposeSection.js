'use client';
import React from 'react';

const PurposeSection = () => {
  return (
    <section
      className="bg-white text-gray-800 pt-24 px-6 md:px-20"
      data-aos="fade"
      data-aos-duration="1000"
    >
      <div className="mx-auto ">
        {/* Heading */}
        <div className="mb-10 text-left">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-10 max-w-4xl">
            Our Purpose
          </h3>
          <p className="text-xl md:text-2xl font-light text-gray-900 mb-10 max-w-3xl">
            Changing the way{' '}
            <span className="text-black">Ceylon sapphires are valued</span>. At their origin, for their people.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="arumin-purpose-paragraphs grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-16">
          <div
            className="space-y-6 text-left text-gray-800 text-base leading-relaxed"
            data-aos="fade"
            data-aos-delay="200"
          >
            <p>
              The Ceylon sapphire trade has long prized rarity, but often overlooked the importance of origin,
              and the people and places behind each stone. Arumin was created to change that.
            </p>
            <p>
              In Sri Lanka, sapphires are more than a natural resource. They are part of the island’s cultural and historical identity.
              Known as Ratnadeepa, the Island of Gems, Sri Lanka has quietly supplied the world with stones of
              remarkable quality. Yet the long-term rewards of this trade have rarely remained with those closest to it.
            </p>
          </div>
          <div
            className="space-y-6 text-left text-gray-800 text-base leading-relaxed"
            data-aos="fade"
            data-aos-delay="400"
          >
            <p>
              We believe there is a better way. Arumin is founded on the idea that rarity must be matched by responsibility.
              We are committed to sustainable sourcing, fair practices, and a model that strengthens the lives and economies connected to each stone.
            </p>
            <p>
              Each Arumin sapphire is selected at source and cut to the highest standards. It carries not only rarity,
              but also purpose, provenance, and the spirit of its origin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
