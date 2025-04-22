// MenuToggle.js
import React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

export function MenuToggle({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="w-8 h-8 relative cursor-pointer z-50 flex items-center justify-center"
      aria-label="Toggle menu"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open:   { d: "M 3 16.5 L 17 2.5" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <Path
          d="M 8 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open:   { opacity: 0 },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open:   { d: "M 3 2.5 L 17 16.346" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
}
