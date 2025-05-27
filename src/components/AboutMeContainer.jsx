
import React from 'react';
import Hero from './Hero';
import Education from './Education';
import Experience from './Experience';

const AboutMeContainer = () => {
  return (
    <div className="min-h-screen text-foreground px-4 md:px-6 lg:px-8 py-16">
      
      <div className="max-w-[1060px] mx-auto">
      <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-medium mb-4">
                02 // About
              </div>
        <Hero />
        <div className="mt-16 space-y-5">
          <Education />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default AboutMeContainer;