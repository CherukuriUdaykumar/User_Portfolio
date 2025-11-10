// src/components/Hero.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from "../assets/profile.jpg"; // ✅ only image import

/*
  Hero:
  - Left: intro, buttons, socials
  - Right: circular profile image (links to LinkedIn)
  - Uses href for .docx file instead of importing it
*/
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* === Left column === */}
        <div className="hero-text">
          <h3>Hello, It's Me</h3>
          <h1>Cherukuri Udaykumar</h1>
          <h2>
            And I'm a <span className="highlight">Full-Stack Developer</span>
          </h2>

          <p>
            Passionate about building scalable applications and beautiful user
            interfaces using <strong>ReactJS</strong>, <strong>Spring Boot</strong>, and{" "}
            <strong>Camunda BPM</strong>.
          </p>

          {/* === Buttons === */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>

            {/* ✅ Use href path instead of import */}
            <a
              href="src/assets/cherukuri.udaykumar_Resume.docx"
              className="btn-secondary"
              download
            >
              Download Resume
            </a>
          </div>

          {/* === Social Icons === */}
          <div className="social-icons">
            <a
              href="https://github.com/CherukuriUdaykumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/cherukuri-udaykumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* === Right column: image === */}
        <div className="hero-image">
          <a
            href="https://linkedin.com/in/cherukuri-udaykumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <div className="image-ring">
              <img
                src={profileImg}
                alt="Cherukuri Udaykumar"
                className="profile-img"
                loading="lazy"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
