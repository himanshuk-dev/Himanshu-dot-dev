import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profileImage from "../static/images/himanshu.jpg";
import timelineData from "../About/timelineData";
import Projects from "../homepage/projects";
import ProjectData from "../project/projectData";
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

const featuredCaseStudyMeta = {
  beyondsnack: {
    impact: [
      "Launched full-stack e-commerce brand with Stripe checkout.",
      "Built admin tooling for order and fulfillment workflows.",
    ],
  },
  elitekitchenfinds: {
    impact: [
      "Delivered a curated, high-conversion storefront.",
      "Optimized UX with responsive, accessible UI components.",
    ],
  },
  pathos: {
    impact: [
      "Award-winning AI empathy platform (Springboard Hackathon).",
      "Real-time suggestions to improve workplace communication.",
    ],
  },
};

const proofPoints = [
  {
    title: "Springboard Hackathon Winner",
    detail:
      "Co-led an award-winning AI platform selected out of hundreds of ideas.",
  },
  {
    title: "Beyond Snack Launch",
    detail:
      "Built and launched a full-stack e-commerce brand with Stripe and AWS.",
  },
  {
    title: "Client-first Delivery",
    detail:
      "Shipped multiple production apps across retail, AI, and service brands.",
  },
];

const V1Nav = () => {
  return (
    <nav className="v1-nav" aria-label="Primary">
      <div className="v1-nav-left">
        <span className="v1-logo">HK</span>
      </div>
      <div className="v1-nav-links">
        <a href="#v1-story">Story</a>
        <a href="#v1-timeline">Credibility</a>
        <a href="#v1-work">Work</a>
        <a href="#v1-proof">Proof</a>
        <a href="#v1-contact">Contact</a>
      </div>
      <div className="v1-nav-actions">
        <Link className="v1-link-pill" to={withBasePath("/")}>
          v0
        </Link>
        <a className="v1-button primary" href="#v1-contact">
          Contact me
        </a>
      </div>
    </nav>
  );
};

const V1Page = () => {
  const featuredProjects = Projects.filter((project) =>
    featuredProjectKeys.includes(project.linkData)
  ).map((project) => {
    const projectDetails = ProjectData[project.linkData];
    const meta = featuredCaseStudyMeta[project.linkData] || {};
    return {
      ...project,
      role: projectDetails?.role,
      techStack: projectDetails?.techStack,
      impact: meta.impact || [],
    };
  });
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
              Contact me
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
          <p className="v1-section-lead">
            A few deep-dive case studies focused on impact, role, and stack.
          </p>
          <div className="v1-work-grid">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                className="v1-work-card v1-reveal"
                to={withBasePath(`/projects/${project.linkData}`)}
                aria-label={`View ${project.title} project details`}
              >
                <div className="v1-work-copy">
                  <div className="v1-work-header">
                    <h3>{project.title}</h3>
                    <div className="v1-work-thumb">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <div className="v1-work-meta">
                    {project.role && (
                      <div>
                        <span className="v1-label">Role</span>
                        <p>{project.role}</p>
                      </div>
                    )}
                    {project.techStack && (
                      <div>
                        <span className="v1-label">Stack</span>
                        <p>{project.techStack}</p>
                      </div>
                    )}
                    {project.impact.length > 0 && (
                      <div>
                        <span className="v1-label">Impact</span>
                        <ul>
                          {project.impact.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <span className="v1-card-cta">Click to view project details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="v1-section v1-proof v1-reveal" id="v1-proof">
        <div className="v1-section-inner">
          <h2>Proof & Momentum</h2>
          <div className="v1-proof-grid">
            {proofPoints.map((point) => (
              <div className="v1-proof-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.detail}</p>
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
