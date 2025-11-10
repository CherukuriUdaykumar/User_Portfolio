// src/components/Resume.jsx
import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" data-aos="fade-up">
      <h2>Resume</h2>

      <p>
        {/* Direct root href to public/ file so Netlify serves it */}
        <a href="/cherukuri.udaykumar_Resume.docx" className="resume-download" download aria-label="Download Resume (DOCX)">
          <FaDownload style={{ marginRight: 8 }} />
          Download Resume
        </a>
      </p>
    </section>
  );
};

export default Resume;
