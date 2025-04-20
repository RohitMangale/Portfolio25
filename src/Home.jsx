import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import CreativeFooter from "./components/CreativeFooter"; // adjust import path as needed
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <main
    id="one"
      className=" min-h-screen bg-[#0E0E10] text-white overflow-hidden"
      ref={containerRef}
    >
      

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-40"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-blue-500/50"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-white"></div>

          {/* 3D Hand Element */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 opacity-20">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10C30 10 10 30 10 50C10 70 30 90 50 90C70 90 90 70 90 50C90 30 70 10 50 10Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-0"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 md:col-start-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 inline-flex items-center"
                >
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Available for new projects
                  </div>
                </motion.div>

                <div className="relative">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight mb-2"
                  >
                    I'M <span className="text-white">Rohit</span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-6"
                  >
                    <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight">
                      Software{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        DEVELOPER
                      </span>
                    </h2>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-6 mb-8"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-sm uppercase tracking-wider">
                      MUMBAI, INDIA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-sm uppercase tracking-wider">
                      DEVELOPER
                    </span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12"
                >
                  Turning ideas into real life products is my calling. I thrive on
                  designing experiences that leave a mark—be it through smoother
                  payment flows or more intuitive interfaces.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="#work"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/40 rounded-md text-white font-medium transition-colors"
                  >
                    Get in Touch
                  </a>
                </motion.div>
              </div>

              <div className="md:col-span-3 md:col-start-10 hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-30"></div>
                  <div className="relative h-64 w-full rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-500">01</div>
                      <div className="text-xs uppercase tracking-widest mt-2">
                        Introduction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm text-gray-400 mb-2"
          >
            {/* Scroll to explore */}
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <ChevronDown size={20} className="text-blue-500" />
          </motion.div>
        </div>
      </section>





    </main>
  );
}
