'use client';
import React from 'react';

const ContactUsSection = () => {
  return (
    <div
      className="w-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/ARU_Contact_Us_page.png')" }}
      data-aos="fade-in"
    >
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
        
        {/* Intro Message */}
        <p
          className="text-base md:text-lg max-w-4xl leading-relaxed mb-16"
          data-aos="fade"
          data-aos-delay="100"
        >
          For further information, please contact us using the details below.
        </p>

        {/* Contact Block */}
        <div className="space-y-6" data-aos="fade" data-aos-delay="200">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-10 max-w-4xl">
            Write To Us
          </h3>

          <div data-aos="fade" data-aos-delay="300">
            <p className="font-semibold">General Inquiries</p>
            <p className="text-sm">info@arumin.com</p>
          </div>

          <div data-aos="fade" data-aos-delay="400">
            <p className="font-semibold">Trade & Brand Collaborations</p>
            <p className="text-sm">partners@arumin.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsSection;
