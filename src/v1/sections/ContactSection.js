import React from "react";

const ContactSection = () => {
  return (
    <section className="v1-section v1-contact v1-reveal" id="v1-contact">
      <div className="v1-section-inner">
        <h2>Let’s build something</h2>
        <p>Ready to collaborate? Reach out via LinkedIn or send an email.</p>
        <div className="v1-contact-actions">
          <a
            className="v1-button primary"
            href="https://www.linkedin.com/in/himanshukumar3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
          <a className="v1-button ghost" href="mailto:himanshuk.kumar01@gmail.com">
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
