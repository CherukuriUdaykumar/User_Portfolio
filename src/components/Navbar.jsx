// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaFileAlt,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

/*
  Navbar
  - Reads the document's data-theme (preflight sets 'dark' on load).
  - Toggle changes data-theme in-session (does NOT persist light to storage).
  - scrollToHash smooth-scrolls and offsets for the fixed navbar height.
  - Accessible roles/labels added.
*/
const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // read the preflight attribute set in index.html; fallback to dark
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current);
    document.documentElement.setAttribute("data-theme", current);
  }, []);

  const toggleTheme = () => {
    // NOTE: Per your requirement, we do NOT persist the user's choice.
    // Light is temporary — refreshing returns to dark (set by preflight script).
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  // Smooth-scroll accounting for fixed navbar height.
  // Allows modifier keys (ctrl/cmd click) to keep default behavior (open in new tab).
  const scrollToHash = (e, hash) => {
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) return;
    if (e) e.preventDefault();

    const id = String(hash).replace("#", "");
    const el = document.getElementById(id);
    const nav = document.querySelector(".navbar");
    const navHeight = nav ? nav.offsetHeight : 80;

    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
      window.scrollTo({ top, behavior: "smooth" });
      // update hash without jump
      try {
        history.replaceState(null, "", `#${id}`);
      } catch (_) {
        window.location.hash = `#${id}`;
      }
    } else {
      // If element not found, still update hash (graceful fallback)
      try {
        history.replaceState(null, "", `#${id}`);
      } catch (_) {
        window.location.hash = `#${id}`;
      }
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Brand (left) */}
        <div className="brand">
          <a href="#home" className="brand-link" onClick={(e) => scrollToHash(e, "#home")}>
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-text">Udaykumar</span>
          </a>
        </div>

        {/* Centered nav links */}
        <ul className="nav-list" role="menubar" aria-label="Primary">
          <li role="none">
            <a role="menuitem" href="#home" onClick={(e) => scrollToHash(e, "#home")}>
              <FaHome /> Home
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="#about" onClick={(e) => scrollToHash(e, "#about")}>
              <FaUser /> About
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="#skills" onClick={(e) => scrollToHash(e, "#skills")}>
              <FaTools /> Skills
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="#projects" onClick={(e) => scrollToHash(e, "#projects")}>
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="#resume" onClick={(e) => scrollToHash(e, "#resume")}>
              <FaFileAlt /> Resume
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="#contact" onClick={(e) => scrollToHash(e, "#contact")}>
              <FaEnvelope /> Contact
            </a>
          </li>
        </ul>

        {/* Theme toggle (right) */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          title="Toggle theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
