import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Briefcase, GraduationCap, Terminal } from "lucide-react"

export default function WorkEducationSection() {
  const [activeTab, setActiveTab] = useState("work")

  const workExperience = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      duration: "2021 - Present",
      skills: ["React", "TypeScript", "Next.js"],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions",
      duration: "2018 - 2021",
      skills: ["JavaScript", "Node.js", "Express"],
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "StartUp Innovations",
      duration: "2016 - 2018",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Tech University",
      duration: "2014 - 2016",
      focus: "Software Engineering",
    },
    {
      id: 2,
      degree: "Bachelor of Science",
      institution: "State College",
      duration: "2010 - 2014",
      focus: "Computer Science",
    },
    {
      id: 3,
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      duration: "2015",
      focus: "Web Development",
    },
  ]

  return (
    <div className="min-h-screen w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
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
          <div className="bg-zinc-900/80 p-1 rounded-lg backdrop-blur-sm">
            <button
              className={`rounded-md px-6 py-2 ${activeTab === "work" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setActiveTab("work")}
            >
              <Briefcase className="mr-2 h-4 w-4 inline-block" /> Work
            </button>
            <button
              className={`rounded-md px-6 py-2 ${activeTab === "education" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setActiveTab("education")}
            >
              <GraduationCap className="mr-2 h-4 w-4 inline-block" /> Education
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "work" ? (
            <motion.div
              key="work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 overflow-x-auto"
            >
              {workExperience.map((job, index) => (
                <CodeCard
                  key={job.id}
                  title={job.role}
                  subtitle={job.company}
                  duration={job.duration}
                  tags={job.skills}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 overflow-x-auto"
            >
              {education.map((edu, index) => (
                <CodeCard
                  key={edu.id}
                  title={edu.degree}
                  subtitle={edu.institution}
                  duration={edu.duration}
                  tags={[edu.focus]}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

function CodeCard({ title, subtitle, duration, tags, index }) {
  const lineNumbers = Array.from({ length: 5 }, (_, i) => i + 1 + index * 5)
  return (
    <motion.div
      className="group relative min-w-[280px] bg-zinc-900 rounded-md overflow-hidden border border-zinc-800 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between bg-zinc-950 px-3 py-1.5 border-b border-zinc-800">
        <div className="flex items-center">
          <Terminal className="h-3.5 w-3.5 text-blue-500 mr-2" />
          <span className="text-xs font-mono text-zinc-400">{subtitle}.js</span>
        </div>
        <div className="flex space-x-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
        </div>
      </div>
      <div className="flex">
        <div className="hidden sm:flex flex-col items-end px-2 py-3 bg-zinc-950 text-zinc-600 font-mono text-xs">
          {lineNumbers.map((num) => (
            <div key={num} className="leading-5">{num}</div>
          ))}
        </div>
        <div className="w-full p-3 font-mono">
          <div className="text-blue-400">
            <span className="text-pink-500">const</span> <span className="text-green-400">position</span> = {"{"}
          </div>
          <div className="pl-4 text-sm">
            <div className="text-blue-300">
              <span className="text-pink-400">title</span>: <span className="text-amber-300">"{title}"</span>,
            </div>
            <div className="text-blue-300">
              <span className="text-pink-400">at</span>: <span className="text-amber-300">"{subtitle}"</span>,
            </div>
            <div className="text-blue-300">
              <span className="text-pink-400">period</span>: <span className="text-amber-300">"{duration}"</span>,
            </div>
            <div className="text-blue-300">
              <span className="text-pink-400">skills</span>: [
              <span className="text-amber-300">
                {tags.map((tag, i) => (
                  <span key={tag}>"{tag}"{i < tags.length - 1 ? ", " : ""}</span>
                ))}
              </span>
              ],
            </div>
          </div>
          <div className="text-blue-400">{"};"}</div>
        </div>
      </div>
    </motion.div>
  )
}

