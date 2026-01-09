import React from "react";

const HeroSection = ({ profileImage, onResumeOpen }) => {
  return (
    <header className="v1-hero v1-reveal" id="v1-hero">
      <div className="v1-hero-content">
        <p className="v1-eyebrow">Product-minded engineer</p>
        <h1>Himanshu Kumar</h1>
        <p className="v1-subtitle">
          I design and build full-stack experiences that feel effortless and
          ship fast.
        </p>
        <div className="v1-hero-actions">
          <div className="v1-cta-group">
            <a className="v1-button primary v1-cta" href="#v1-work">
              View case studies
            </a>
            <span className="v1-cta-detail">5 featured projects</span>
          </div>
          <div className="v1-cta-group">
            <a className="v1-button ghost v1-cta" href="#v1-contact">
              Contact me
            </a>
            <span className="v1-cta-detail">Reply in 24–48 hours</span>
          </div>
          <div className="v1-cta-group">
            <button
              type="button"
              className="v1-button ghost v1-cta"
              onClick={onResumeOpen}
            >
              View resume
            </button>
            <span className="v1-cta-detail">Preview before opening</span>
          </div>
        </div>
      </div>
      <div className="v1-hero-portrait">
        <img src={profileImage} alt="Himanshu Kumar" />
      </div>
    </header>
  );
};

export default HeroSection;
