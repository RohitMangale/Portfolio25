import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const TimelineItem = ({ title, subtitle, date, icon, className, children }) => {
    const combinedClassName = `pl-8 relative ${className || ''}`;
    return (
      <div className={combinedClassName.trim()}>
        <div className="absolute left-0 top-0 mt-2 -ml-3">
          {icon}
        </div>

        <div className="mb-2">
          <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
          <div className="text-blue-500 font-medium text-lg">{subtitle}</div>
          <div className="text-base text-neutral-400">{date}</div>
        </div>

        {children}
      </div>
    );
  };

  return (
    <section className=" text-white py-12 px-4 md:px-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-2 border-blue-500 pb-1">
          Education <span className="text-blue-500">📚</span>
        </h2>
      </div>

      <div className="relative pl-4 border-l border-neutral-800 space-y-12">
        <TimelineItem
          title="BTech in Computer Science and Engineering"
          subtitle="Sardar Patel Institute of Technology"
          date="2023 - Present"
          icon={
            <div className="bg-blue-600 p-2 rounded-full">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
          }
        >
          <div className="bg-[#121212]/80 border border-white/10 p-6 rounded-2xl mt-3 text-neutral-200 shadow-md backdrop-blur-md text-lg leading-relaxed">
            <p>
              Specializing in Data Science and Machine Learning. Currently maintaining a 8.3 CGPA while also juggling side projects that definitely won't take over my entire life someday.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem
          title="Diploma in Information Technology"
          subtitle="Covernment Polytechnic, Mumbai"
          date="2020 - 2023"
          icon={
            <div className="bg-blue-600 p-2 rounded-full">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
          }
        >
          <div className="bg-[#121212]/80 border border-white/10 p-6 rounded-2xl mt-3 text-neutral-200 shadow-md backdrop-blur-md text-lg leading-relaxed">
            <p>
              
              Graduated with honors. Thesis: "Optimizing Coffee-to-Code Conversion Rates: A Study in Student Productivity." (Not the actual title, but it should have been.)
            </p>
          </div>
        </TimelineItem>
      </div>
    </section>
  );
};

export default Education;
