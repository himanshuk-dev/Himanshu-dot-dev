import React from "react";
import { Link } from "react-router-dom";
import { withV1BasePath } from "../../common/siteMeta";

const WorkSection = ({ featuredProjects }) => {
  return (
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
              to={withV1BasePath(`/projects/${project.linkData}`)}
              aria-label={`View ${project.title} project details`}
            >
              <div className="v1-work-copy">
                <div className="v1-work-header">
                  <div className="v1-work-thumb">
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
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
              <span className="v1-card-cta">
                Click to view project details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
