import React from "react";

const CredibilitySection = ({ credibilityStats, timelineHighlights }) => {
  return (
    <section className="v1-section v1-credibility v1-reveal" id="v1-timeline">
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
              <p className="v1-timeline-event">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
