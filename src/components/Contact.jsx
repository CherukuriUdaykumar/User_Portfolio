// src/components/Contact.jsx
import React from "react";

/* Contact info: simple and crawlable by screen readers */
const Contact = () => (
  <section id="contact" data-aos="fade-up">
    <h2>Contact</h2>

    <p>
      Email: <a href="mailto:ch.udaykumar369@gmail.com">ch.udaykumar369@gmail.com</a>
    </p>

    <p>
      LinkedIn:{" "}
      <a href="https://www.linkedin.com/in/cherukuri-udaykumar" target="_blank" rel="noopener noreferrer">
        linkedin.com/in/cherukuri-udaykumar
      </a>
    </p>

    <p>
      Naukri:{" "}
      <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer">
        naukri.com/mnjuser/profile
      </a>
    </p>

    <p>
      GitHub:{" "}
      <a href="https://github.com/CherukuriUdaykumar" target="_blank" rel="noopener noreferrer">
        github.com/CherukuriUdaykumar
      </a>
    </p>
  </section>
);

export default Contact;
