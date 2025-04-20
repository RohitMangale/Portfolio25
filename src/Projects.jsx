import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import proj1 from "./assets/proj1.jpg";
import proj2 from "./assets/proj2.jpg"; 
import proj3 from "./assets/proj3.png";

const projects = [
  {
    number: "01",
    title: "Creative Portfolio",
    subtitle: "Interactive Showcase",
    image: proj1,
    technologies: ["NEXT JS", "LOCOMOTIVE SCROLL", "FRAMER MOTION"],
    websiteUrl: "#",
    githubUrl: "#",
  },
  {
    number: "02",
    title: "Digital Experience",
    subtitle: "Immersive Web App",
    image: proj2,
    technologies: ["REACT", "THREE.JS", "GSAP"],
    websiteUrl: "#",
    githubUrl: "#",
  },
  {
    number: "03",
    title: "E-Commerce Platform",
    subtitle: "Modern Shopping Experience",
    image: proj3,
    technologies: ["NEXT JS", "TAILWIND CSS", "STRIPE API"],
    websiteUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <main ref={containerRef} className="bg-black min-h-screen py-20 px-6">
        <section id="work" className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>

        <div className="container mx-auto mb-5 px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-medium mb-4">
                02 // PORTFOLIO
              </div>
              <h2 className="text-4xl md:text-6xl font-bold  text-white">
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
      <div className="max-w-4xl mx-auto space-y-24">
        {projects.map((project, index) => {
          // Parallax effect
          const y = useTransform(scrollYProgress, [0, 1], [100 * index, 0]);

          return (
            <motion.div key={index} style={{ y }} className="relative z-10">
              <ProjectCard
                number={project.number}
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                technologies={project.technologies}
                websiteUrl={project.websiteUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
