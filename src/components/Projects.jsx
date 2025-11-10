// src/components/Projects.jsx
import React from "react";

/* Projects
   - Each project is a card inside .projects-grid
   - External links open in a new tab with rel="noopener noreferrer"
*/
const Projects = () => (
  <section id="projects" data-aos="fade-up">
    <h2>Projects</h2>

    <div className="projects-grid">
      <div className="project-card">
        <h3>Customer Management Dashboard</h3>
        <p>ReactJS + Spring Boot + MySQL</p>

        <div>
          <a href="https://customer-management-app-v1.netlify.app/" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          {" | "}
          <a
            href="https://github.com/CherukuriUdaykumar/customer-management-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://customer-management-server-v1.onrender.com/swagger-ui/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swagger URL
          </a>
        </div>

        <p style={{ fontSize: "0.9rem", color: "#94a3b8", marginTop: "10px" }}>
          ⚠️ Note: The backend is hosted on Render’s free tier. If inactive, it may take up to 50 seconds to spin up
          before responding.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
