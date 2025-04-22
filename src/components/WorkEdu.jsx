import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Code, Briefcase, GraduationCap, ExternalLink, Calendar } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

export default function WorkEducationSection() {
  const [activeTab, setActiveTab] = useState("work");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [50, 0]);

  const workExperience = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      duration: "2021 - Present",
      description:
        "Led the development of the company's flagship SaaS product, improving performance by 40%. Implemented modern React patterns and mentored junior developers.",
      skills: ["React", "TypeScript", "Next.js", "GraphQL"],
      link: "https://techcorp.example",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions",
      duration: "2018 - 2021",
      description:
        "Developed and maintained multiple client projects. Created responsive web applications and RESTful APIs.",
      skills: ["JavaScript", "Node.js", "Express", "MongoDB"],
      link: "https://digitalsolutions.example",
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "StartUp Innovations",
      duration: "2016 - 2018",
      description:
        "Worked on frontend development for an e-commerce platform. Collaborated with designers to implement UI/UX improvements.",
      skills: ["HTML", "CSS", "JavaScript", "jQuery"],
      link: "https://startup.example",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Tech University",
      duration: "2014 - 2016",
      description:
        "Specialized in Software Engineering with focus on web technologies and distributed systems.",
      achievements: [
        "Graduated with Honors",
        "Published research paper on web performance optimization",
      ],
      link: "https://techuniversity.example",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "State College",
      duration: "2010 - 2014",
      description: "Foundational studies in computer science, algorithms, and software development.",
      achievements: ["Dean's List", "Led student coding club"],
      link: "https://statecollege.example",
    },
    {
      id: 3,
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      duration: "2015 (3 months)",
      description: "Intensive training in modern web development technologies and practices.",
      achievements: ["Best Final Project Award"],
      link: "https://codeacademy.example",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-center mb-12">
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
          >
            <div className="absolute w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
            <Code className="w-16 h-16 text-blue-500" />
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            My Journey
          </motion.h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900/80 p-1 rounded-lg backdrop-blur-sm flex gap-2 flex-row items-center justify-center "> 
            <div
            //   variant={activeTab === "work" ? "default" : "ghost"}
              className={` w-fit cursor-pointer flex gap-2 flex-row items-center justify-center rounded-md px-6 py-2 ${activeTab === "work" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setActiveTab("work")}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Work
            </div>
            <div
            //   variant={activeTab === "education" ? "default" : "ghost"}
              className={`w-fit cursor-pointer flex gap-2 flex-row items-center justify-center rounded-md px-6 py-2 ${activeTab === "education" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setActiveTab("education")}
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </div>
          </div>
        </div>

        <motion.div style={{ opacity, y }} className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-blob" />
            <div className="absolute bottom-40 right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-blob animation-delay-4000" />
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {activeTab === "work" ? (
                <motion.div
                  key="work"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-12"
                >
                  {workExperience.map((job, index) => (
                    <TimelineItem key={job.id} index={index} isLast={index === workExperience.length - 1}>
                      <motion.div
                        className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{job.role}</h3>
                            <p className="text-blue-400">{job.company}</p>
                          </div>
                          <div className="flex items-center mt-2 sm:mt-0">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-gray-400 text-sm">{job.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {/* {job.skills.map((skill) => (
                            <Badge key={skill} className="bg-blue-900/50 hover:bg-blue-800 text-blue-200">
                              {skill}
                            </Badge>
                          ))} */}
                        </div>
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Visit website <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </motion.div>
                    </TimelineItem>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-12"
                >
                  {education.map((edu, index) => (
                    <TimelineItem key={edu.id} index={index} isLast={index === education.length - 1}>
                      <motion.div
                        className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                            <p className="text-blue-400">{edu.institution}</p>
                          </div>
                          <div className="flex items-center mt-2 sm:mt-0">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-gray-400 text-sm">{edu.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{edu.description}</p>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Achievements:</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Visit institution <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </motion.div>
                    </TimelineItem>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// TimelineItem Component (Props passed: children, index, isLast)
function TimelineItem({ children, index }) {
  return (
    <motion.div
      className="relative pl-8 sm:pl-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
