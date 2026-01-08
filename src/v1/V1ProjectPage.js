import React, { useEffect } from "react";
import V1Nav from "./V1Nav";
import "./v1Project.css";

const V1ProjectPage = ({ projectData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    projectName,
    description,
    demoVideo,
    github,
    liveLink,
    API,
    role,
    techStack,
    timeline,
    architecture,
    dbSchema,
    customerJourney,
    componentStructure,
    devFlow,
    keyChallenges,
    learnings,
    notes,
    backgroundImage,
    badge,
  } = projectData;

  const links = [
    { label: "Live Site", href: liveLink },
    { label: "GitHub", href: github },
    { label: "API", href: API },
  ].filter((link) => link.href);

  const processImages = [
    { label: "Architecture", src: architecture },
    { label: "Database Schema", src: dbSchema },
    { label: "Customer Journey", src: customerJourney },
    { label: "Component Design", src: componentStructure },
  ].filter((item) => item.src);

  return (
    <div className="v1-page v1-project-page">
      <V1Nav />
      <header className="v1-project-hero">
        <div className="v1-project-hero-content">
          <p className="v1-eyebrow">Case Study</p>
          <h1>{projectName}</h1>
          <p className="v1-project-description">{description}</p>
          {badge && (
            <div className="v1-project-badge">
              <img src={badge} alt="Project badge" />
            </div>
          )}
          <div className="v1-project-meta">
            {role && (
              <div>
                <span className="v1-label">Role</span>
                <p>{role}</p>
              </div>
            )}
            {techStack && (
              <div>
                <span className="v1-label">Stack</span>
                <p>{techStack}</p>
              </div>
            )}
            {timeline && (
              <div>
                <span className="v1-label">Timeline</span>
                <p>{timeline}</p>
              </div>
            )}
          </div>
          {links.length > 0 && (
            <div className="v1-project-links">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v1-button ghost"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="v1-project-hero-media">
          {demoVideo ? (
            <div className="v1-project-video">
              <iframe
                src={demoVideo}
                title={`${projectName} demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            backgroundImage && (
              <img src={backgroundImage} alt={projectName} />
            )
          )}
        </div>
      </header>

      <section className="v1-project-section">
        <div className="v1-section-inner">
          <h2>Development Process</h2>
          {processImages.length > 0 && (
            <div className="v1-project-gallery">
              {processImages.map((item) => (
                <div className="v1-project-image" key={item.label}>
                  <h3>{item.label}</h3>
                  <img src={item.src} alt={item.label} />
                </div>
              ))}
            </div>
          )}
          {devFlow?.headings && (
            <div className="v1-project-devflow">
              {devFlow.headings.map((group) => (
                <div className="v1-project-devflow-group" key={group.heading}>
                  <h3>{group.heading}</h3>
                  <div className="v1-project-devflow-steps">
                    {Object.values(group.steps).map((step) => (
                      <div className="v1-project-step" key={step.header}>
                        <h4>{step.header}</h4>
                        <p>{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {keyChallenges && (
        <section className="v1-project-section">
          <div className="v1-section-inner">
            <h2>Key Challenges</h2>
            <div className="v1-project-challenges">
              {keyChallenges.map((item) => (
                <div className="v1-project-challenge" key={item.header}>
                  <h3>{item.header}</h3>
                  {item.challenge && <p>{item.challenge}</p>}
                  {item.solution && <p>{item.solution}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {learnings && (
        <section className="v1-project-section">
          <div className="v1-section-inner">
            <h2>What I Learned</h2>
            <div className="v1-project-learnings">
              {learnings.map((item) => (
                <div className="v1-project-learning" key={item.header || item.text}>
                  {item.header && <h3>{item.header}</h3>}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            {notes && (
              <div className="v1-project-notes">
                <span className="v1-label">Notes</span>
                <ul>
                  {notes.map((note) => (
                    <li key={note.text}>{note.text}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default V1ProjectPage;
