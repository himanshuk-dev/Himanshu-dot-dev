import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profileImage from "../static/images/himanshu.jpg";
import services from "../services/servicesData";
import timelineData from "../About/timelineData";
import Projects from "../homepage/projects";
import { withBasePath } from "../common/siteMeta";
import "./v1.css";

const featuredProjectKeys = ["beyondsnack", "elitekitchenfinds", "pathos"];
const storyBeats = [
  "I’m a front-end and full-stack engineer based in Vancouver, with a background in IT leadership and systems administration.",
  "My work blends product thinking with hands-on engineering — turning fuzzy ideas into clear, scalable experiences.",
  "I care about shipping reliable products fast, with UX that feels intentional and human.",
];

const credibilityStats = [
  { label: "Frontend Experience", value: "3+ years" },
  { label: "Full-stack Experience", value: "2+ years" },
  { label: "Focus Areas", value: "E-commerce + AI" },
];

const V1Nav = () => {
  return (
    <nav className="v1-nav">
      <div className="v1-nav-left">
        <span className="v1-logo">HK</span>
      </div>
      <div className="v1-nav-links">
        <a href="#v1-story">Story</a>
        <a href="#v1-timeline">Credibility</a>
        <a href="#v1-work">Work</a>
        <a href="#v1-services">Services</a>
        <a href="#v1-contact">Contact</a>
      </div>
      <div className="v1-nav-actions">
        <Link className="v1-link-pill" to={withBasePath("/")}>
          v0
        </Link>
        <a className="v1-button primary" href="#v1-contact">
          Book a call
        </a>
      </div>
    </nav>
  );
};

const V1Page = () => {
  const featuredProjects = Projects.filter((project) =>
    featuredProjectKeys.includes(project.linkData)
  );
  const timelineHighlights = timelineData
    .filter((item) => item.date && item.event)
    .slice(0, 4);

  useEffect(() => {
    const elements = document.querySelectorAll(".v1-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="v1-page">
      <V1Nav />
      <header className="v1-hero v1-reveal" id="v1-hero">
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
        <div className="v1-hero-portrait">
          <img src={profileImage} alt="Himanshu Kumar" />
        </div>
      </header>

      <section className="v1-section v1-story v1-reveal" id="v1-story">
        <div className="v1-section-inner">
          <h2>Story</h2>
          <div className="v1-story-grid">
            {storyBeats.map((beat, index) => (
              <p key={index}>{beat}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="v1-section v1-credibility v1-reveal"
        id="v1-timeline"
      >
        <div className="v1-section-inner">
          <h2>Credibility</h2>
          <div className="v1-stats">
            {credibilityStats.map((stat) => (
              <div className="v1-stat" key={stat.label}>
                <p className="v1-stat-value">{stat.value}</p>
                <p className="v1-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="v1-timeline">
            {timelineHighlights.map((item) => (
              <div className="v1-timeline-item" key={item.date}>
                <p className="v1-timeline-date">{item.date}</p>
                <p className="v1-timeline-event">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v1-section v1-work v1-reveal" id="v1-work">
        <div className="v1-section-inner">
          <h2>Featured Work</h2>
          <div className="v1-work-grid">
            {featuredProjects.map((project) => (
              <article className="v1-work-card v1-reveal" key={project.title}>
                <div className="v1-work-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link
                    className="v1-link"
                    to={withBasePath(`/projects/${project.linkData}`)}
                  >
                    View project details
                  </Link>
                </div>
                <div className="v1-work-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v1-section v1-services v1-reveal" id="v1-services">
        <div className="v1-section-inner">
          <h2>Services</h2>
          <div className="v1-services-grid">
            {services.map((service) => (
              <div className="v1-service v1-reveal" key={service.category}>
                <h3>{service.category}</h3>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v1-section v1-contact v1-reveal" id="v1-contact">
        <div className="v1-section-inner">
          <h2>Let’s build something</h2>
          <p>
            Ready to collaborate? Reach out via LinkedIn or schedule a discovery
            call.
          </p>
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
    </div>
  );
};

export default V1Page;
