import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function CreativeFooter() {
  const [hoverEmail, setHoverEmail] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleTabHover = (tab) => {
    setActiveTab(tab);
  };

  return (
    <footer className="bg-[#0E0E10] relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Email Banner */}
        <div className="py-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden"
            onHoverStart={() => setHoverEmail(true)}
            onHoverEnd={() => setHoverEmail(false)}
          >
            <a href="mailto:contact@lalitya.com">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-900 uppercase tracking-tighter text-center"
              >
                ROHITMangale010@GMAIL.COM
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoverEmail ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-blue-500 mt-2 origin-left"
              ></motion.div>
            </a>
          </motion.div>
        </div>

        {/* Interactive Footer Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10  text-white">
          <FooterTab
            title="Connect"
            isActive={activeTab === "connect"}
            onHover={() => handleTabHover("connect")}
            onLeave={() => handleTabHover(null)}
          >
            <div className="flex flex-wrap gap-4 mt-6">
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://github.com" icon={<Github size={18} />} label="GitHub" />
              <SocialLink href="mailto:contact@example.com" icon={<Mail size={18} />} label="Email" />
            </div>
          </FooterTab>

          <FooterTab
            title="Navigation"
            isActive={activeTab === "navigation"}
            onHover={() => handleTabHover("navigation")}
            onLeave={() => handleTabHover(null)}
          >
            <div className="grid grid-cols-2 gap-4 mt-6">
              {["work", "about", "resume", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </FooterTab>

          <FooterTab
            title="Location"
            isActive={activeTab === "location"}
            onHover={() => handleTabHover("location")}
            onLeave={() => handleTabHover(null)}
          >
            <div className="mt-6">
              <p className="text-gray-400 mb-2">Bengaluru, India</p>
              <p className="text-gray-400 mb-6">GMT +5:30</p>

              <div className="inline-block">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md blur opacity-30"></div>
                  <a
                    href="#contact"
                    className="relative inline-block px-6 py-3 bg-blue-600/20 hover:bg-blue-600 rounded-md text-white font-medium transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </FooterTab>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center border-t border-white/10 mt-0">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-500/30 blur-sm rounded-full"></div>
              <span className="relative text-blue-500 font-bold text-2xl">R</span>
            </div>
            <span className="text-sm text-gray-400">© {new Date().getFullYear()} Rohit. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              <span className="text-blue-500">2025</span> — <span className="text-white">CURRENT</span>
            </div>

            <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold">
              <span  className="text-blue-400">01</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      className="h-10 w-10 rounded-full bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 flex items-center justify-center text-gray-400 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterTab({ title, children, isActive, onHover, onLeave }) {
  return (
    <div
      className={`py-12 px-6 transition-colors ${isActive ? "bg-white/5" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className={`h-2 w-2 rounded-full ${isActive ? "bg-blue-500" : "bg-gray-500"}`}></div>
        <h3 className="text-sm font-semibold uppercase tracking-wider">{title}</h3>
      </div>
      {children}
    </div>
  );
}
