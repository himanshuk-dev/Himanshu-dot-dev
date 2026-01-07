import React from "react";
import "./v1.css";

const V1Page = () => {
  return (
    <div className="v1-page">
      <header className="v1-hero" id="v1-hero">
        <div className="v1-hero-content">
          <p className="v1-eyebrow">Product-minded engineer</p>
          <h1>Himanshu Kumar</h1>
          <p className="v1-subtitle">
            I design and build full-stack experiences that feel effortless and
            ship fast.
          </p>
          <div className="v1-hero-actions">
            <a className="v1-button primary" href="#v1-work">
              View case studies
            </a>
            <a className="v1-button ghost" href="#v1-contact">
              Book a call
            </a>
          </div>
        </div>
      </header>

      <section className="v1-section v1-story" id="v1-story">
        <div className="v1-section-inner">
          <h2>Story</h2>
          <p>
            From IT leadership and systems administration to full-stack product
            engineering, I focus on building experiences that align business
            goals with human-centered design.
          </p>
        </div>
      </section>

      <section className="v1-section v1-timeline" id="v1-timeline">
        <div className="v1-section-inner">
          <h2>Credibility</h2>
          <p>
            3+ years in frontend, 2+ years in full-stack, and a track record of
            shipping e-commerce and AI-powered platforms.
          </p>
        </div>
      </section>

      <section className="v1-section v1-work" id="v1-work">
        <div className="v1-section-inner">
          <h2>Featured Work</h2>
          <p>Case studies with outcomes, challenges, and learnings.</p>
        </div>
      </section>

      <section className="v1-section v1-services" id="v1-services">
        <div className="v1-section-inner">
          <h2>Services</h2>
          <p>Product strategy, design, and engineering for modern web teams.</p>
        </div>
      </section>

      <section className="v1-section v1-contact" id="v1-contact">
        <div className="v1-section-inner">
          <h2>Let’s build something</h2>
          <p>
            Ready to collaborate? Reach out via LinkedIn or schedule a discovery
            call.
          </p>
          <a
            className="v1-button primary"
            href="https://www.linkedin.com/in/himanshukumar3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default V1Page;
