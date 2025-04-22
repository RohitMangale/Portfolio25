// Navbar.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import MobileNavLink from "./MobileNavLink";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  // scroll-blur
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <div
        className={`
          sticky top-10 z-50 mx-auto px-10 py-3 flex items-center justify-between
          rounded-2xl transition-all duration-500
          ${isScrolled
            ? "w-1/2 bg-[rgba(42,43,56,0.5)] backdrop-blur-3xl shadow-lg border-2 border-lightslateBlack"
            : "w-4/5 bg-transparent"
          }
        `}
      >
        <div className="logo text-white text-2xl font-allerta">ROHIT</div>

        {/* desktop links */}
        <div
          className={`
            hidden md:flex gap-10 text-gray-300 text-lg
            ${isScrolled ? "opacity-70" : "opacity-100"}
          `}
        >
          <div className={` cursor-pointer  ${isScrolled ? " hidden" : "visible"}`}  >About</div>
          <div className={` cursor-pointer ${isScrolled ? " hidden" : "visible"}`}  >Projects</div>
          <div className={` cursor-pointer ${isScrolled ? " hidden" : "visible"}`}  >Resume</div>
        </div>

        {/* mobile menu toggle */}
        <div className={` cursor-pointer   ${isScrolled ? " visible" : "hidden"}`}>
          <MenuToggle
            className="text-white cursor-pointer"
            isOpen={menuOpen}
            toggle={() => setMenuOpen((o) => !o)}
          />
        </div>
      </div>

      {/* mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300, duration:2.5 }}
            className="
              fixed inset-0 z-40 bg-gradient-to-b from-black via-black/95 to-blue-950/20
              backdrop-blur-md pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-8 mt-10">
              <MobileNavLink href="#work"   label="01 — Work"   onClick={() => setMenuOpen(false)} />
              <MobileNavLink href="#about"  label="02 — About"  onClick={() => setMenuOpen(false)} />
              <MobileNavLink href="#resume" label="03 — Resume" onClick={() => setMenuOpen(false)} />
              <MobileNavLink href="#contact"label="04 — Contact"onClick={() => setMenuOpen(false)} />
            </div>

            <div className="absolute bottom-12 left-6 right-6 text-left">
              <p className="text-xs text-blue-400 mb-2">CURRENTLY AVAILABLE FOR</p>
              <p className="text-2xl text-white font-bold">Freelance Projects</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
