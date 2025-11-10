// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";

/*
  App: Simple composition of sections.
  The Navbar handles hash scrolling and theme toggling.
*/
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />

      <footer>
        © {new Date().getFullYear()} Cherukuri Udaykumar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
