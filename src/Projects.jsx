import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import proj1 from "./assets/proj1.jpg";
import proj2 from "./assets/proj2.jpg";
import proj3 from "./assets/proj3.png";
import {
  SparklesIcon,
  Code2Icon,
  LayersIcon,
  AtomIcon,
} from "lucide-react";

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <main ref={containerRef} className="bg-black min-h-screen py-20 px-6 relative">
      <section id="work" className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>

        <div className="container mx-auto mb-5 px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-medium mb-4">
                02 // PORTFOLIO
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Turning ideas
                </span>{" "}
                into real life <br />
                products is my calling.
              </h2>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/3">
              <p className="text-gray-400">
                Here's a selection of my recent work that showcases my skills and approach to design challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Elements - Left */}
      <div className="absolute left-0 top-20 h-full w-24 md:w-32 lg:w-48 pointer-events-none">
        <div className="absolute top-[15%] left-6 md:left-10 opacity-20 animate-pulse">
          <SparklesIcon size={32} className="text-blue-500" />
        </div>
        <div className="absolute top-[35%] left-4 md:left-16 opacity-60 animate-float">
          <Code2Icon size={48} className="text-blue-400 glow" />
        </div>
        <div className="h-full w-full bg-gradient-to-r from-blue-900/10 to-transparent" />
      </div>

      {/* Animated Elements - Right */}
      <div className="absolute right-0 top-20 h-full w-24 md:w-32 lg:w-48 pointer-events-none">
        <div className="absolute top-[45%] right-8 md:right-12 opacity-20 animate-pulse">
          <LayersIcon size={38} className="text-blue-500 glow" />
        </div>
        <div className="absolute top-[30%] right-12 md:right-28 opacity-60 animate-spin-slow">
          <AtomIcon size={32} className="text-blue-400 glow" />
        </div>
        <div className="h-full w-full bg-gradient-to-l from-blue-900/10 to-transparent" />
      </div>

      {/* Projects Section */}
      <div className="max-w-4xl mx-auto space-y-24 relative z-10">
      <motion.div
  style={{ y: y1 }}
  initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 80, damping: 12 }}
  viewport={{ once: true, amount: 0.5 }}
>
  <ProjectCard
    number="01"
    title="Creative Portfolio"
    subtitle="Interactive Showcase"
    image={proj1}
    technologies={["NEXT JS", "LOCOMOTIVE SCROLL", "FRAMER MOTION"]}
    websiteUrl="#"
    githubUrl="#"
  />
</motion.div>

<motion.div
  style={{ y: y2 }}
  initial={{ scale: 0.8, rotate: 5, opacity: 0 }}
  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.1 }}
  viewport={{ once: true, amount: 0.5 }}
>
  <ProjectCard
    number="02"
    title="Digital Experience"
    subtitle="Immersive Web App"
    image={proj2}
    technologies={["REACT", "THREE.JS", "GSAP"]}
    websiteUrl="#"
    githubUrl="#"
  />
</motion.div>

<motion.div
  style={{ y: y3 }}
  initial={{ scale: 0.8, rotate: -3, opacity: 0 }}
  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
  viewport={{ once: true, amount: 0.5 }}
>
  <ProjectCard
    number="03"
    title="E-Commerce Platform"
    subtitle="Modern Shopping Experience"
    image={proj3}
    technologies={["NEXT JS", "TAILWIND CSS", "STRIPE API"]}
    websiteUrl="#"
    githubUrl="#"
  />
</motion.div>

      </div>
    </main>
  );
}
