import React, { useState, useEffect } from 'react';
import { Globe, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({
  number = "01",
  title = "Project Title",
  subtitle,
  image ,
  technologies = ["NEXT JS", "TAILWIND CSS", "FRAMER MOTION"],
  websiteUrl = "#",
  githubUrl = "#",
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const card = document.getElementById("project-card");
      if (card) {
        const rect = card.getBoundingClientRect();
        setCardPosition({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spotlightX = mousePosition.x / cardPosition.width;
  const spotlightY = mousePosition.y / cardPosition.height;

  const techVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      id="project-card"
      className="w-full max-w-4xl mx-auto  overflow-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="relative bg-[#121212] rounded-[32px] h-[450px] flex flex-col md:flex-row overflow-hidden"
        style={{
          background: isHovering
            ? `radial-gradient(circle at ${spotlightX * 100}% ${spotlightY * 100}%, rgba(50, 50, 50, 0.8), rgba(18, 18, 18, 1) 70%)`
            : "linear-gradient(145deg, #1a1a1a, #121212)",
          boxShadow: isHovering
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(50, 50, 50, 0.2) inset"
            : "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease-out",
        }}
      >
        {/* Decorative gradients */}
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-xl"></div>
          <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-gradient-to-br from-teal-500/10 to-transparent blur-xl"></div>
        </div>

        {/* Tech tags (vertical for desktop) */}
        {/* <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block z-10">
          <div className="flex flex-col items-center justify-center gap-6 -rotate-90 origin-center translate-y-32">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="text-gray-400 text-xs tracking-widest whitespace-nowrap"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={techVariants}
              >
                {tech}
                {index < technologies.length - 1 && (
                  <motion.span
                    className="ml-6 inline-block"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    •
                  </motion.span>
                )}
              </motion.span>
            ))}
          </div>
        </div> */}

        {/* Project number */}
        <motion.div
          className="absolute right-6 top-6 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-600 text-5xl font-bold"
          style={{
            WebkitTextStroke: "1px rgba(100, 100, 100, 0.2)",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        >
          {number}
        </motion.div>

        {/* Circle pulse */}
        <div className="absolute right-24 top-6">
          <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center overflow-hidden">
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                background: [
                  "radial-gradient(circle at center, rgba(100, 100, 100, 0.2) 0%, transparent 70%)",
                  "radial-gradient(circle at center, rgba(100, 100, 100, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Image */}
        <motion.div className="md:w-1/2 relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <div className="aspect-square md:aspect-auto md:h-full overflow-hidden rounded-[24px] m-4 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <motion.div className="w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center relative">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 relative">
              {title}
              
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>
            {subtitle && (
              <motion.p
                className="text-xl text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>

          {/* Tags - horizontal for mobile */}
          <div className="flex flex-wrap gap-4 mb-8 md:hidden">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="text-gray-400 text-xs tracking-widest px-3 py-1 rounded-full border border-gray-800"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-gray-400 hover:text-teal-400 border-b border-gray-700 hover:border-teal-400 pb-1 transition-colors mb-8 w-fit"
            >
              VISIT THE WEBSITE
              <motion.span
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Globe className="w-5 h-5" />
              </motion.div>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="w-5 h-5" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
