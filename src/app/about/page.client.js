'use client';

import React from 'react';

import ParallaxInfoSection from '../../components/About/ParallaxInfoSection';
import PurposeSection from '../../components/About/PurposeSection';
import CollaborationSection from '../../components/About/CollaborationSection';


const AboutPage = () => {
  return (
    <main>

       <ParallaxInfoSection />
             <PurposeSection />
         <CollaborationSection/>

   

     

      {/* Next sections will be added here step by step */}
    </main>
  );
};

export default AboutPage;
