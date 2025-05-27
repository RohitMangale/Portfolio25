import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Code, Coffee, Terminal, Zap } from "lucide-react";
import { head } from "framer-motion/client";

const headlines = [
  {text : "Breaking Code, Not Dreams " , icon: "🚀"},
  {text :"Turning Coffee into Functions ", icon: "☕"},
  {text :"Ctrl+Alt+Building the Future ", icon: "🔮"}
];

const quickStats = [
  { label: "Current Focus", value: "Full Stack Dev", icon: Code },
  { label: "Coffee Level", value: "99%", icon: Coffee },
  { label: "Status", value: "Available", icon: Zap },
];

export default function LandingPage() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative max-h-screen text-white mb-[150px]  mt-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-40" />
        {/* <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-500" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-blue-500/50" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-white" /> */}
      </div>

      {/* Content */}
      <section className="relative flex flex-col justify-center items-center min-h-[calc(100vh-100px)] px-4 text-center z-10">
        <motion.div style={{ opacity, scale, y }} className="space-y-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2 mb-10"
          >
            <p className="text-lg md:text-xl text-gray-400 font-mono">
              {"<"}<span className="text-blue-500">Hello World</span>{" />"}
            </p>
            <p className="text-xl md:text-2xl text-gray-300">
              I'm <span className="text-white font-semibold">Rohit Mangale</span>
            </p>
          </motion.div>

          <motion.h1
            key={headlineIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {headlines[headlineIndex].text.split(" ").slice(0, -1).join(" ")}
            </span>
            {headlines[headlineIndex].icon && (
              <span className="text-3xl md:text-4xl lg:text-5xl">
                {headlines[headlineIndex].icon}
              </span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 leading-relaxed"
          >
            A computer science student crafting digital experiences with{" "}
            <span className="text-emerald-400">clean code</span>,{" "} <br />
            <span className="text-blue-400">creative solutions</span>, and{" "}
            <span className="text-orange-400">endless curiosity</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center group hover:border-emerald-500/50 transition-all"
              >
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-blue-500 group-hover:text-emerald-300" />
                <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-[0] z-20 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-500"

          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-medium mb-4">
                01 // Introduction
              </div>
            {/* <span className="text-sm font-mono">scroll.down()</span> */}
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
