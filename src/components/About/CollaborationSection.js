'use client';
import React from 'react';
import Image from 'next/image';

const CollaborationSection = () => {
  return (
    <section className="bg-white text-gray-800 pt-24 px-6 md:px-20 mb-60">

      {/* Inset image with fade-in effect */}
      <div
        className="w-full max-w-full mx-auto h-[600px] relative mb-20 rounded overflow-hidden "
        data-aos="fade"
      >
        <Image
  src="/AboutUs-two.jpg"
  alt="Collaboration Image"
  fill
  className="object-cover object-[35%_5%] md:object-center"
  priority
/>

      </div>

      {/* Text Content */}
      <div className="text-left md:text-center max-w-5xl mx-auto mt-24" data-aos="fade" data-aos-delay="200">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-10 max-w-4xl mx-auto">
          Collaboration for Progress
        </h3>
        <p className="text-base md:text-lg mb-4" data-aos="fade" data-aos-delay="200">
          Arumin works in close partnership with local stakeholders in Sri Lanka to strengthen the sapphire trade and ensure that more of its true value remains within the country.

        </p>
        <p className="text-base md:text-lg" data-aos="fade" data-aos-delay="200">
          Our efforts focus on setting higher standards, promoting ethical sourcing, and building lasting global recognition
          for Sri Lanka’s gem heritage, helping the industry create lasting benefits for local communities and the nation as a whole.
        </p>
      </div>

    </section>
  );
};

export default CollaborationSection;
