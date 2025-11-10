// src/components/Resume.jsx
import React from "react";
import { FaDownload } from "react-icons/fa";

/*
  Resume Section:
  - Uses href path (no import needed)
  - Works both in dev and production
*/
const Resume = () => {
  return (
    <section id="resume" data-aos="fade-up">
      <h2>Resume</h2>

      <p>
        {/* ✅ Direct href path to assets file */}
        <a
          href="src/assets/cherukuri.udaykumar_Resume.docx"
          className="resume-download"
          download
          aria-label="Download Resume"
        >
          <FaDownload style={{ marginRight: 8 }} />
          Download Resume
        </a>
      </p>
    </section>
  );
};

export default Resume;
