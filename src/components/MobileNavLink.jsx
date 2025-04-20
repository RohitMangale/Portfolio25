// MobileNavLink.js
import React from "react";

export default function MobileNavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-3xl font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-4 group"
    >
      <span className="group-hover:translate-x-2 transition-transform duration-300">
        {label}
      </span>
    </a>
  );
}
