// import { Timeline, TimelineItem } from './Timeline';
import { Briefcase, ShieldAlert } from 'lucide-react';

const Experience = () => {
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
    <section className=" text-white py-12 px-4 md:px-8 overflow-hidden">
      <div className="animate-slide-up mb-8">
        <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-2 border-blue-600 pb-1">
          Work Experience <span className="text-blue-600 animate-float">💼</span>
        </h2>
      </div>

      <div className="relative pl-4 border-l border-neutral-800 space-y-12">
        <TimelineItem
          title="Full Stack Developer Intern"
          subtitle="The Fast Way"
          date="Jan-Jun 2023"
          icon={
            <div className="bg-blue-600 p-2 rounded-full animate-pulse-slow">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
          }
          className="card-hover animate-slide-in-left"
        >
          <div className="bg-[#121212]/80 border border-white/10 p-6 rounded-2xl mt-3 text-neutral-200 shadow-md backdrop-blur-md text-lg leading-relaxed transform transition-all duration-500 hover:-translate-y-1">
            <p>
              Developed user interfaces that even my mom said looked "very computery." Learned that production code and development code are two entirely different beasts. Discovered the true meaning of "it works on my machine."
            </p>

            <div className="mt-4 p-4 bg-[#1a1a1a]/70 border border-blue-600/20 rounded-xl italic animate-float-slow">
              "Broke things. Fixed things. Learned everything."
            </div>
          </div>
        </TimelineItem>

        <TimelineItem
  title="Red Team Analyst Intern"
  subtitle="DeepCytes Technologies"
  date="Jun-July 2024"
  icon={
    <div className="bg-blue-600 p-2 rounded-full">
      <ShieldAlert className="h-5 w-5 text-white animate-pulse-slow delay-300" />
    </div>
  }
  className="card-hover animate-slide-in-left delay-300"
>
  <div className="bg-[#121212]/80 border border-white/10 p-6 rounded-2xl mt-3 text-neutral-200 shadow-md backdrop-blur-md text-lg leading-relaxed transform transition-all duration-500 hover:-translate-y-1">
    <p>
      Actively engaged in offensive security simulations as part of the Red Team. Tested various ransomware strains and open-source adversary emulation tools in controlled environments. Created comprehensive documentation, contributed to threat analysis reports, and worked closely with the security team to replicate real-world attack scenarios.
    </p>

    <div className="mt-4 p-4 bg-[#1a1a1a]/70 border border-red-600/20 rounded-xl italic animate-float-slow delay-150">
      "Simulated threats. Strengthened defenses. Sharpened skills."
    </div>
  </div>
</TimelineItem>



      </div>
    </section>
  );
};

export default Experience;
