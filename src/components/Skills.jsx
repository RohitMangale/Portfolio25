import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Palette, Wrench, Star, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Palette,
    color: "blue",
    description: "Crafting beautiful user interfaces",
    skills: [
      { name: "React", level: 90, experience: "2 years", hot: true },
      { name: "Next.js", level: 85, experience: "1.5 years", hot: true },
      { name: "TypeScript", level: 80, experience: "1 year", hot: false },
      { name: "Tailwind CSS", level: 95, experience: "2 years", hot: false },
      { name: "Framer Motion", level: 75, experience: "8 months", hot: true },
      { name: "Three.js", level: 60, experience: "6 months", hot: true },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Database,
    color: "blue",
    description: "Building robust server architectures",
    skills: [
      { name: "Node.js", level: 85, experience: "1.5 years", hot: false },
      { name: "Express", level: 80, experience: "1 year", hot: false },
      { name: "Python", level: 75, experience: "2 years", hot: false },
      { name: "PostgreSQL", level: 70, experience: "1 year", hot: false },
      { name: "MongoDB", level: 85, experience: "1.5 years", hot: false },
      { name: "GraphQL", level: 65, experience: "8 months", hot: true },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: Wrench,
    color: "blue",
    description: "Streamlining development workflows",
    skills: [
      { name: "Git", level: 90, experience: "2 years", hot: false },
      { name: "Docker", level: 70, experience: "1 year", hot: true },
      { name: "AWS", level: 60, experience: "8 months", hot: true },
      { name: "Figma", level: 85, experience: "1.5 years", hot: false },
      { name: "Linux", level: 75, experience: "1 year", hot: false },
      { name: "Vercel", level: 90, experience: "1.5 years", hot: false },
    ],
  },
];

const colorMap = {
  emerald: {
    bg: "from-emerald-500/20 to-emerald-600/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
    progress: "bg-emerald-500",
  },
  blue: {
    bg: "from-blue-500/20 to-blue-600/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
    progress: "bg-blue-500",
  },
  orange: {
    bg: "from-orange-500/20 to-orange-600/20",
    border: "border-orange-500/30",
    text: "text-orange-400",
    glow: "shadow-orange-500/20",
    progress: "bg-orange-500",
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          
        >
          {/* <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-medium mb-4">
                03 // Skills
              </div> */}
          <h2 className="headingText">
            <span className="headingSpan">Tech </span>
            Arsenal 
          </h2>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => {
            const colors = colorMap[category.color];
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-4 cursor-pointer rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${colors.bg} ${colors.border} ${colors.text} shadow-lg ${colors.glow}`
                    : "bg-gray-900/50 border-gray-700/50 text-gray-400 hover:border-gray-600/50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <category.icon className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">{category.title}</div>
                    <div className="text-xs opacity-80">{category.description}</div>
                  </div>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.bg} border ${colors.border}`}
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeSkills.map((skill, index) => {
              const category = skillCategories.find((cat) => cat.id === activeCategory);
              const colors = colorMap[category.color];

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        {skill.hot && (
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="flex items-center space-x-1"
                          >
                            <TrendingUp className="h-4 w-4 text-orange-400" />
                            <span className="text-xs text-orange-400 font-medium">HOT</span>
                          </motion.div>
                        )}
                      </div>
                      <span className="text-sm text-gray-400">{skill.experience}</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Proficiency</span>
                        <span className={`text-sm font-medium ${colors.text}`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className={`h-full ${colors.progress} rounded-full relative`}
                        >
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.1 + starIndex * 0.1 + 0.8 }}
                        >
                          <Star
                            className={`h-4 w-4 ${
                              starIndex < Math.floor(skill.level / 20)
                                ? `${colors.text} fill-current`
                                : "text-gray-600"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>

                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.bg} border ${colors.border} pointer-events-none`}
                          style={{ zIndex: -1 }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        
        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-2"
            >
              18+
            </motion.div>
            <div className="text-gray-400">Technologies Mastered</div>
          </div>

          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-2"
            >
              2+
            </motion.div>
            <div className="text-gray-400">Years of Experience</div>
          </div>

          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-2"
            >
              6
            </motion.div>
            <div className="text-gray-400">Hot Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
