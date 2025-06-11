import React from 'react';
import { User, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="animate-fade-in">
      <div className="flex items-center justify-start space-x-3 mb-6">
        <User className="h-8 w-8 text-blue-600 animate-float" />
        <h2 className=" headingText">
        <span className=" headingSpan">Just Another Code Wizard</span> in the Making <span className="text-blue-600 animate-pulse">🪄💻</span>
        </h2>
      </div>

      <div className="mt-8 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20">
        <div className="flex items-start space-x-4">
          <Code className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 animate-spin-slow" />
          <p className="text-lg leading-relaxed text-white">
            Hello there! I'm a college student with a not-so-secret double life as a developer. 
            My hobbies include debugging at 2 AM (totally by choice), romantic walks through API documentation, 
            and convincing myself that "just one more feature" before bed is a reasonable life choice. 
            When I’m not making computers do my bidding, I’m probably wondering why I just opened the fridge.
             {/* <span className='text-2xl'>🤷‍♂️</span> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
