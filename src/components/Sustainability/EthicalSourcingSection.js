'use client';
import React from 'react';

const EthicalSourcingSection = () => {
  return (
    <section className="w-full bg-white pt-24 px-6 md:px-24" data-aos="fade">
      <div className=" mx-auto">
        {/* Heading and Subheading */}
        <div className="mb-12" data-aos="fade" data-aos-delay="100">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-10 max-w-4xl">
            What Is True Ethical Sourcing?
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-900 mb-10 max-w-3xl">
            We believe that ethical sourcing must be measurable, intentional, and rooted in local impact.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 text-base leading-relaxed">
          <div className="space-y-6" data-aos="fade" data-aos-delay="200">
            <p>
              Ethical sourcing goes beyond fair wages or simply knowing where a gemstone comes from. At its core, it means
              ensuring that the value of a gemstone meaningfully benefits the people and the place it originates from.
            </p>
            <p>
              In the sapphire industry, this is often not the case. Many stones pass through complex middle channels, with
              limited traceability and little value returning to the source.
            </p>
          </div>
          <div className="space-y-6" data-aos="fade" data-aos-delay="300">
            <p>
              At Arumin, we follow a direct-from-source model. By sourcing from our own mines and operating from Sri Lanka, we ensure that the country of origin directly benefits from the true value of its gemstones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalSourcingSection;
